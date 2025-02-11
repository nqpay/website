<template>
  <div class="min-h-screen w-full bg-white text-black overflow-hidden">
    <!-- Primera sección -->
    <div class="w-full py-16 flex justify-center">
      <div class="w-11/12 max-w-5xl flex flex-col md:flex-row items-center gap-8">
        <div class="flex flex-col gap-4 w-full md:w-1/2 px-4 md:px-10 text-center md:text-left">
          <h1 class="text-lg md:text-3xl font-semibold">Incrementá tus ventas</h1>
          <p class="text-lg">En horas pico, puede ser difícil recibir nuevos clientes cuando todas tus mesas están ocupadas.</p>
          <p class="text-lg">Agiliza el proceso de pago para liberar mesas hasta 10 minutos más rápido. Atende a más clientes y aumenta tu rentabilidad.</p>
        </div>
        <div class="flex justify-center w-full md:w-1/2">
          <div class="relative w-full max-w-xs">
            <div class="absolute h-full w-full flex flex-col items-end justify-end gap-2 text-white">
              <div class="rounded-2xl w-full backdrop-blur-md bg-white/10 py-3 px-4 flex items-center justify-between">
                <div class="flex gap-4 items-center">
                  <div class="rounded-md bg-white w-10 h-10 flex items-center justify-center p-1">
                    <img src="../assets/mp_icon.png" />
                  </div>
                  <div class="flex flex-col">
                    <h1>Pago Recibido</h1>
                    <p class="text-gray-300 text-sm">Recibiste $15.600 por una venta</p>
                  </div>
                </div>
                <p class="text-xs text-gray-300">now</p>
              </div>
            </div>
            <img src="../assets/person.png" class="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>

    <!-- Segunda sección -->
    <div class="w-full py-16 bg-gray-50 flex justify-center">
      <div class="w-11/12 max-w-5xl flex flex-col md:flex-row items-center gap-8">
        <div class="w-full md:w-1/2 flex justify-center">
          <div class="w-4/5 relative bg-[#F3EAF5] aspect-square flex justify-center rounded-2xl overflow-hidden">
            <img class="absolute -bottom-5 h-full object-cover" src="../assets/cart.png" />
          </div>
        </div>
        <div class="flex flex-col gap-4 w-full md:w-1/2 px-4 md:px-10 text-center md:text-left">
          <h1 class="text-lg md:text-3xl font-semibold">Mantene a tu personal contento</h1>
          <p class="text-lg">Las propinas son una excelente manera de mantener motivado a tu equipo...</p>
          <p class="text-lg">Facilita a tus clientes la opción de dejar propina...</p>
        </div>
      </div>
    </div>

    <!-- Tercera sección -->
    <div class="w-full py-16">
      <div class="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div class="flex flex-col gap-4 w-full md:w-1/2 md:pr-5 md:pl-10">
          <h1 class="text-lg md:text-3xl font-semibold">Pasión por el cliente</h1>
          <p class="text-lg">Cuando hay mucho movimiento, la dificultad de encontrar un mozo puede ser frustrante para tus clientes, especialmente cuando tienen hambre o sed.</p>
          <p class="text-lg">
            Con la solución integrada de pedidos y pagos por QR, permite que tus clientes pidan cuando lo deseen y que tu personal se centre en crear conexiones personales.
          </p>
        </div>
        <div class="flex relative justify-center w-full md:w-1/2">
          <div class="w-4/5 relative aspect-square flex justify-center overflow-hidden">
            <img class="rounded-2xl absolute -bottom-5 w-full h-full object-contain" src="../assets/rating.png" />
          </div>
        </div>
      </div>
    </div>

    <!-- Call to action -->
    <div class="w-full py-16">
      <div class="w-full mx-auto flex items-center relative justify-center">
        <img src="../assets/call.png" class="w-full md:w-2/3" />
        <div class="absolute flex flex-col text-center items-center justify-center gap-4">
          <h1 class="text-lg md:text-3xl font-semibold text-white">Digitalizá hoy tu negocio.</h1>
          <button @click="join" class="hover:scale-110 md:py-3 md:px-6 md:text-lg py-1 px-3 flex justify-center rounded-full bg-white">
            <p class="text-[#CC44FF]">Probar NQ</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isHovering = ref(false)

const join = () => {
  window.location = '/join'
}

const hoverChange = () => {
  isHovering.value = !isHovering.value
}
</script>

<style>
/* Estilos de respaldo para navegadores que no soporten las propiedades anteriores */
body {
  margin: 0;
}
</style>
