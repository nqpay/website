<template>
  <div className="min-h-screen w-full flex flex-col bg-[#0B010F] items-center text-white px-4 md:px-0">
    <div class="gap-6 md:gap-10 flex flex-col text-center max-w-4xl mx-auto pt-16 md:pt-20">
      <h1 className="text-3xl md:text-6xl font-semibold">
        Potencia los <span class="text-[#CC44FF]">ingresos</span><br />
        de tu local.
      </h1>
      <p class="text-gray-400 text-sm md:text-base px-4 md:px-0">
        Dedica menos tiempo a tomar pedidos, cerrar cuentas y dividir facturas, y más tiempo a ofrecer tu excelente comida y servicio. Aumenta tus ganancias con nosotros.
      </p>
    </div>

    <div class="w-full flex justify-center pt-8 md:pt-20 px-4 md:px-0">
      <div class="w-full md:w-4/5 flex flex-col md:flex-row md:gap-20 items-center text-xl md:text-2xl">
        <div class="flex gap-2 md:gap-4 mb-8 md:mb-0">
          <div class="flex flex-col gap-1">
            <h1>escanea.</h1>
            <img src="../assets/escanea.png" class="w-full" />
          </div>
          <div class="flex flex-col gap-1">
            <h1>pedi.</h1>
            <img src="../assets/pedi.png" class="w-full" />
          </div>
          <div class="flex flex-col gap-1">
            <h1>paga.</h1>
            <img src="../assets/paga.png" class="w-full" />
          </div>
        </div>

        <div class="flex flex-col w-full md:w-1/3 gap-6 md:gap-10">
          <div class="flex flex-col gap-2">
            <div class="flex gap-3 items-center">
              <div class="w-8 h-8 md:w-10 md:h-10 bg-[#CC44FF] rounded-lg items-center flex justify-center">
                <img src="../assets/order.png" class="h-1/2" />
              </div>
              <p class="text-base md:text-xl">Ordenes en local</p>
            </div>
            <p class="text-xs md:text-sm">
              Los clientes escanean el código QR desde la mesa, en la pista de baile o en la barra, ordenan y pagan.<span class="font-bold">Aumentando las ventas en un 34%.</span>
            </p>
          </div>

          <div class="w-full h-0.5 rounded-full bg-gray-400"></div>

          <div class="flex flex-col gap-2">
            <div class="flex gap-3 items-center">
              <div class="w-8 h-8 md:w-10 md:h-10 bg-[#CC44FF] rounded-lg items-center flex justify-center">
                <img src="../assets/money.png" class="h-1/2" />
              </div>
              <p class="text-base md:text-xl">$0 en local</p>
            </div>
          </div>

          <div class="w-full h-0.5 rounded-full bg-gray-400"></div>

          <div class="flex flex-col gap-2">
            <div class="flex gap-3 items-center">
              <div class="w-8 h-8 md:w-10 md:h-10 bg-[#CC44FF] rounded-lg items-center flex justify-center">
                <img src="../assets/notification.png" class="h-1/2" />
              </div>
              <p class="text-base md:text-xl">Notificación de retiro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
body {
  margin: 0;
}
</style>
