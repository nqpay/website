<template>
  <div class="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-2xl mx-auto">
      <!-- Header -->
      <router-link to="/" class="text-[#BE37F3] font-din-light text-sm absolute top-4 left-4"> NQ PAY </router-link>

      <div v-if="!submitted">
        <div class="text-center">
          <h2 class="mt-6 text-3xl font-din-black text-gray-900">Unite a <span class="text-[#BE37F3]">NQ Pay</span></h2>
          <p class="mt-2 text-sm text-gray-600 font-din-light">Completá los datos de tu comercio para empezar a recibir más clientes</p>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="mt-8 space-y-6">
          <div class="space-y-4">
            <div>
              <label for="businessName" class="block text-sm font-din-light text-gray-700"> Nombre del comercio </label>
              <input
                id="businessName"
                v-model="form.businessName"
                type="text"
                required
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#BE37F3] focus:border-[#BE37F3]"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-din-light text-gray-700"> Email de contacto </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#BE37F3] focus:border-[#BE37F3]"
              />
            </div>

            <div>
              <label for="phone" class="block text-sm font-din-light text-gray-700"> Teléfono </label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                required
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#BE37F3] focus:border-[#BE37F3]"
              />
            </div>

            <!-- <div>
              <label for="address" class="block text-sm font-din-light text-gray-700"> Dirección del comercio </label>
              <input
                id="address"
                v-model="form.address"
                type="text"
                required
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#BE37F3] focus:border-[#BE37F3]"
              />
            </div> -->

            <div>
              <label for="type" class="block text-sm font-din-light text-gray-700"> Tipo de comercio </label>
              <select
                id="type"
                v-model="form.type"
                required
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#BE37F3] focus:border-[#BE37F3]"
              >
                <option value="">Seleccionar tipo</option>
                <option value="bar">Bar</option>
                <option value="boliche">Boliche</option>
                <option value="restaurante">Restaurante</option>
                <option value="festival">Festival</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-din-light text-white bg-[#BE37F3] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#BE37F3]"
            >
              Enviar solicitud
            </button>
          </div>
        </form>
      </div>

      <!-- Success State -->
      <div v-else class="text-center mt-12">
        <div class="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-[#BE37F3] bg-opacity-10 mb-8">
          <svg class="h-16 w-16 text-[#BE37F3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 class="text-3xl font-din-black text-[#1C1C1E] mb-4">¡Gracias por elegirnos!</h2>
        <p class="text-lg text-gray-600 font-din-light mb-8">Recibimos tu solicitud y nos pondremos en contacto lo antes posible.</p>
        <router-link to="/" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-din-light rounded-md text-white bg-[#BE37F3] hover:bg-opacity-90">
          Volver al inicio
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const submitted = ref(false)
const form = ref({
  businessName: '',
  email: '',
  phone: '',
  // address: '',
  type: '',
})

const handleSubmit = async () => {
  try {
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', form.value)
    // Ejemplo: await axios.post('/api/join-request', form.value)
    submitted.value = true
  } catch (error) {
    console.error('Error al enviar el formulario:', error)
    alert('Hubo un error al enviar el formulario. Por favor, intenta nuevamente.')
  }
}
</script>
