<template>
  <div className="min-h-screen w-full bg-white text-black">
    <!-- Primera sección -->
    <div class="w-full py-16">
      <div class="w-8/12 mx-auto columns-2 flex items-center">
        <div class="flex flex-col gap-4 w-1/2 md:px-10">
          <h1 className="text-lg md:text-3xl font-semibold">Incrementá tus ventas</h1>
          <p class="text-lg">En horas pico, puede ser difícil recibir nuevos clientes cuando todas tus mesas están ocupadas.</p>
          <p class="text-lg">Agiliza el proceso de pago para liberar mesas hasta 10 minutos más rápido. Atende a más clientes y aumenta tu rentabilidad.</p>
        </div>
        <div class="flex relative justify-center w-1/2">
          <div class="w-4/5 relative">
            <div class="absolute h-full w-full flex flex-col items-end justify-end -bottom-2 -right-2 gap-2 text-white">
              <div class="rounded-2xl h-max w-4/5 backdrop-blur-md bg-white/10 py-3 px-4 flex items-center justify-between">
                <div class="flex gap-4 items-center">
                  <div class="rounded-md bg-white w-10 h-10 items-center justify-center flex p-1">
                    <img src="../assets/mp_icon.png" class="" />
                  </div>
                  <div class="flex flex-col">
                    <h1 class="">Pago Recibido</h1>
                    <p class="text-gray-300 text-sm">Recibiste $15.600 por una venta</p>
                  </div>
                </div>
                <p class="items-end justify-end h-full text-xs text-gray-300">now</p>
              </div>
              <div class="rounded-2xl h-max w-4/5 backdrop-blur-md bg-white/10 py-3 px-4 flex items-center justify-between">
                <div class="flex gap-4 items-center">
                  <div class="rounded-md bg-white w-10 h-10 items-center justify-center flex p-1">
                    <img src="../assets/mp_icon.png" class="" />
                  </div>
                  <div class="flex flex-col">
                    <h1 class="">Pago Recibido</h1>
                    <p class="text-gray-300 text-sm">Recibiste $15.600 por una venta</p>
                  </div>
                </div>
                <p class="items-end justify-end h-full text-xs text-gray-300">now</p>
              </div>
              <div class="rounded-2xl h-max w-4/5 backdrop-blur-md bg-white/10 py-3 px-4 flex items-center justify-between">
                <div class="flex gap-4 items-center">
                  <div class="rounded-md bg-white w-10 h-10 items-center justify-center flex p-1">
                    <img src="../assets/mp_icon.png" class="" />
                  </div>
                  <div class="flex flex-col">
                    <h1 class="">Pago Recibido</h1>
                    <p class="text-gray-300 text-sm">Recibiste $15.600 por una venta</p>
                  </div>
                </div>
                <p class="items-end justify-end h-full text-xs text-gray-300">now</p>
              </div>
            </div>
            <img src="../assets/person.png" />
          </div>
        </div>
      </div>
    </div>

    <!-- Segunda sección -->
    <div class="w-full py-16 bg-gray-50">
      <div class="w-8/12 mx-auto columns-2 flex items-center">
        <div class="flex relative justify-center w-1/2">
          <div class="w-4/5 relative bg-[#F3EAF5] aspect-square flex justify-center rounded-2xl">
            <!-- Aquí puedes agregar tu nueva imagen -->
            <img class="absolute -bottom-5 h-full" src="../assets/cart.png" />
          </div>
        </div>
        <div class="flex flex-col gap-4 w-1/2 md:pr-5 md:pl-10">
          <h1 className="text-lg md:text-3xl font-semibold">Mantene a tu personal contento</h1>
          <p class="text-lg">Las propinas son una excelente manera de mantener motivado a tu equipo. Con el avance del desuso del efectivo, las propinas tienden a disminuir.</p>
          <p class="text-lg">Facilita a tus clientes la opción de dejar propina y multiplica por dos o tres veces lo que recibe tu personal.</p>
        </div>
      </div>
    </div>

    <!-- Tercera sección -->
    <div class="w-full py-16">
      <div class="w-8/12 mx-auto columns-2 flex items-center">
        <div class="flex flex-col gap-4 w-1/2 md:pr-5 md:pl-10">
          <h1 className="text-lg md:text-3xl font-semibold">Pasión por el cliente</h1>
          <p class="text-lg">Cuando hay mucho movimiento, la dificultad de encontrar un mozo puede ser frustrante para tus clientes, especialmente cuando tienen hambre o sed.</p>
          <p class="text-lg">
            Con la solución integrada de pedidos y pagos por QR, permite que tus clientes pidan cuando lo deseen y que tu personal se centre en crear conexiones personales.
          </p>
        </div>
        <div class="flex relative justify-center w-1/2">
          <div class="w-4/5 relative aspect-square flex justify-center">
            <!-- Aquí puedes agregar tu nueva imagen -->
            <img class="rounded-2xl absolute -bottom-5 h-full" src="../assets/rating.png" />
          </div>
        </div>
      </div>
    </div>

    <!-- Call to action -->
    <div class="w-full py-16">
      <div class="w-max mx-auto flex items-center relative justify-center">
        <img class="" src="../assets/call.png" />
        <div class="absolute flex flex-col text-center items-center justify-center gap-4">
          <h1 className="text-lg md:text-3xl font-semibold text-white">Digitalizá hoy tu negocio.</h1>
          <button :onclick="join" class="hover:scale-110 py-3 px-6 text-lg items-center flex justify-center rounded-full bg-white w-max">
            <p @mouseover="hoverChange" @mouseleave="hoverChange" class="text-[#CC44FF]">Probar NQ</p>
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
