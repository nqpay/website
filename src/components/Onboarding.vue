<template>
  <div class="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <router-link to="/" class="text-[#BE37F3] font-din-light text-sm absolute top-4 left-4"> NQ PAY </router-link>
        <h2 class="text-4xl font-din-black text-gray-900">¡Bienvenido a NQ Pay!</h2>
        <p class="mt-4 text-xl text-gray-600 font-din-light">Estás a pocos pasos de revolucionar la forma en que tus clientes pagan</p>
      </div>

      <!-- Progress Steps -->
      <div class="relative" v-if="currentStep !== 4">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t border-gray-300"></div>
        </div>
        <div class="relative flex justify-between">
          <div v-for="(step, index) in steps" :key="index" :class="['bg-white flex flex-col items-center', currentStep > index ? 'text-[#BE37F3]' : 'text-gray-500']">
            <div
              :class="[
                'h-12 w-12 rounded-full border-2 flex items-center justify-center text-xl font-din-black',
                currentStep > index ? 'border-[#BE37F3] text-[#BE37F3]' : 'border-gray-300',
              ]"
            >
              {{ index + 1 }}
            </div>
            <div class="mt-2 font-din-light">{{ step.title }}</div>
          </div>
        </div>
      </div>

      <!-- Step Content -->
      <div class="mt-16">
        <!-- Step 1: Bienvenida -->
        <div v-if="currentStep === 1" class="text-center">
          <h3 class="text-2xl font-din-black mb-6">Revoluciona tu negocio</h3>
          <p class="text-lg text-gray-600 mb-8">Con NQ Pay, tus clientes podrán ordenar y pagar directamente desde sus celulares. Sin filas, sin esperas, más ventas.</p>
          <button @click="nextStep" class="bg-[#BE37F3] text-white px-8 py-3 rounded-md font-din-light hover:bg-opacity-90">Comenzar</button>
        </div>

        <!-- Step 2: Beneficios -->
        <div v-if="currentStep === 2" class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="(benefit, index) in benefits" :key="index" class="p-6 border rounded-lg">
            <h4 class="font-din-black text-xl mb-3">{{ benefit.title }}</h4>
            <p class="text-gray-600 font-din-light">{{ benefit.description }}</p>
          </div>
          <div class="md:col-span-2 text-center mt-8">
            <button @click="nextStep" class="bg-[#BE37F3] text-white px-8 py-3 rounded-md font-din-light hover:bg-opacity-90">Continuar</button>
          </div>
        </div>

        <!-- Step 3: Mercado Pago -->
        <div v-if="currentStep === 3" class="text-center">
          <h3 class="text-2xl font-din-black mb-6">Conectá tu cuenta de Mercado Pago</h3>
          <p class="text-lg text-gray-600 mb-8">Para procesar los pagos de tus clientes de forma segura, necesitamos conectar tu cuenta de Mercado Pago.</p>
          <button @click="connectMP" class="bg-[#009EE3] text-white px-5 py-3 rounded-md font-din-light hover:bg-opacity-90 flex items-center justify-center mx-auto gap-2">
            <img src="../assets/mp_icon.png" alt="MP" class="h-6" />
            Conectar con Mercado Pago
          </button>
        </div>

        <!-- Success State -->
        <div v-if="currentStep === 4" class="text-center">
          <div class="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-8">
            <svg class="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 class="text-2xl font-din-black mb-4">¡Todo listo!</h3>
          <p class="text-lg text-gray-600 mb-8">Tu negocio ya está configurado en NQ Pay. Nuestro equipo se pondrá en contacto contigo para los últimos detalles.</p>
          <router-link to="/" class="bg-[#BE37F3] text-white px-8 py-3 rounded-md font-din-light hover:bg-opacity-90 inline-block"> Ir al inicio </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const currentStep = ref(1)

const steps = [{ title: 'Bienvenida' }, { title: 'Beneficios' }, { title: 'Conexión MP' }]

const benefits = [
  {
    title: 'Menos filas, más ventas',
    description: 'Tus clientes ordenan y pagan desde su celular, reduciendo tiempos de espera y aumentando la rotación.',
  },
  {
    title: 'Control total',
    description: 'Dashboard en tiempo real con todas tus ventas, productos y estadísticas.',
  },
  {
    title: 'Pagos seguros',
    description: 'Procesamiento de pagos seguro a través de Mercado Pago.',
  },
  {
    title: 'Soporte 24/7',
    description: 'Equipo de soporte dedicado para ayudarte en todo momento.',
  },
]

const nextStep = () => {
  currentStep.value++
}

const connectMP = () => {
  // Redirect to Mercado Pago OAuth
  window.location.href = `https://auth.mercadopago.com.ar/authorization?client_id=2535901472251628&response_type=code&platform_id=mp&redirect_uri=https://nqpay.lat/onboarding`
}

const handleMPCallback = async (onboardingID, code) => {
  try {
    const response = await axios.post('https://api.nqpay.lat/onboarding-receiver', {
      onboardingID: onboardingID,
      code: code,
    })
    if (response.status == 200) {
      localStorage.removeItem('onboardingID')
      currentStep.value = 4 // Move to success state
    }
  } catch (error) {
    console.error('Error connecting MP:', error)
    alert('Hubo un error al conectar con Mercado Pago. Por favor, intenta nuevamente.')
  }
}
onMounted(() => {
  // Si hay un ID en la URL, lo guardamos en localStorage
  if (route.query.id) {
    localStorage.setItem('onboardingID', route.query.id)
  }

  // Si hay un code de MP, hacemos el post con ambos datos
  const code = route.query.code
  if (code) {
    const onboardingID = localStorage.getItem('onboardingID')
    if (onboardingID) {
      handleMPCallback(onboardingID, code)
    }
  }
})
</script>
