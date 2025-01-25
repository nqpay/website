<template>
  <div class="h-screen w-screen flex flex-col items-center bg-white">
    <!-- Header -->
    <div class="absolute top-4 left-4 text-pink-500 font-din-light text-sm">NQ PAY</div>

    <!-- Main Content -->
    <div class="flex items-center justify-center h-full">
      <div class="h-auto w-1/3 flex flex-col items-center">
        <h1 class="text-9xl font-din-black text-[#FF5678]">-</h1>
        <h1 class="text-9xl font-din-black relative">FILA</h1>
        <div class="flex-grow flex items-end">
          <button class="flex gap-2 absolute bg-[#FF5678] text-lg text-white items-center rounded-md bottom-[300px] transform -translate-x-1/2 px-6 py-2.5 font-din-light text-md">
            <img src="../assets/apple_icon.svg"></img>
            <a class="font-din-light">App Store</a>
          </button>
        </div>
      </div>
      <img src="../assets/bg.png" alt="Dancing Illustration" class="h-auto w-1/3 object-contain" />
      <div class="h-auto w-1/3 flex flex-col items-center pr-20">
        <h1 class="text-9xl font-din-black">+</h1>
        <h1 class="text-9xl font-din-black text-[#FF5678]">FIESTA</h1>
        <button class="flex gap-2 absolute border border-1 border-black text-lg text-black items-center rounded-md bottom-[300px] transform px-6 py-2.5 font-din-light text-md">
          <img src="../assets/android_icon.svg"></img>
          <a class="font-din-light">Google Store</a>
        </button>
      </div>
    </div>

    <!-- Footer -->
    <div class="text-center text-gray-500 text-sm py-4 font-din-light">
      estás cansado de hacer fila en el bar, boliche o festival preferido?<br />
      nosotros también, descarga NQ Pay y deja de hacer fila.
    </div>
  </div>
</template>

<script setup>
// You can add interactivity here if needed
</script>

<style>
body {
  margin: 0;
}
</style>
