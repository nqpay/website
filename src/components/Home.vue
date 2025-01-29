<template>
  <div class="h-screen w-screen flex flex-col items-center bg-white relative">
    <!-- Header with Join Button -->
    <div class="absolute top-4 left-6 flex items-center gap-4">
      <div class="text-[#BE37F3] font-din-light text-sm">NQ PAY</div>
    </div>

    <router-link
      to="/join"
      class="absolute top-4 right-6 border border-1 border-[#BE37F3] text-[#BE37F3] px-4 py-2 rounded-md font-din-light text-sm hover:bg-opacity-90 transition-colors"
    >
      Soy un negocio
    </router-link>

    <!-- Main Content -->
    <div class="flex items-center justify-center h-full">
      <div class="h-auto w-1/3 flex flex-col items-center">
        <h1 class="text-9xl font-din-black text-[#BE37F3]">-</h1>
        <h1 class="text-9xl font-din-black relative">FILA</h1>
        <div class="flex-grow flex items-end">
          <button class="flex gap-2 absolute bg-[#BE37F3] text-lg text-white items-center rounded-md bottom-[300px] transform -translate-x-1/2 px-6 py-2.5 font-din-light text-md">
            <img src="../assets/apple_icon.svg" alt="Apple icon" />
            <a class="font-din-light">App Store</a>
          </button>
        </div>
      </div>
      <img src="../assets/bg.png" alt="Dancing Illustration" class="h-auto w-1/3 object-contain" />
      <div class="h-auto w-1/3 flex flex-col items-center pr-20">
        <h1 class="text-9xl font-din-black">+</h1>
        <h1 class="text-9xl font-din-black text-[#BE37F3]">FIESTA</h1>
        <button
          class="flex gap-2 absolute border border-1 border-[#1C1C1E] text-lg text-[#1C1C1E] items-center rounded-md bottom-[300px] transform px-6 py-2.5 font-din-light text-md"
        >
          <img src="../assets/android_icon.svg" alt="Android icon" />
          <a class="font-din-light">Google Store</a>
        </button>
      </div>
    </div>

    <!-- Support Button -->
    <a
      href="mailto:soporte@nqpay.lat"
      class="fixed bottom-6 right-6 w-12 h-12 border border-1 border-[#BE37F3] rounded-full flex items-center justify-center text-[#BE37F3] text-2xl hover:bg-opacity-90 transition-colors shadow-lg"
      title="Contact Support"
    >
      ?
    </a>

    <!-- Footer -->
    <div class="text-center text-gray-500 text-sm py-4 font-din-light">
      estás cansado de hacer fila en el bar, boliche o festival preferido?<br />
      nosotros también, descarga NQ Pay y deja de hacer fila.
    </div>
  </div>
</template>

<script setup>
// No additional setup needed for this component
</script>

<style>
body {
  margin: 0;
}
</style>
