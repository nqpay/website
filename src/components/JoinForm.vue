<template>
  <div class="flex justify-center items-center min-h-screen bg-white">
    <router-link to="/" class="text-[#BE37F3] font-din-light text-sm absolute top-4 left-4"> NQ PAY </router-link>

    <div class="w-full max-w-lg p-8">
      <h2 v-if="!submitted" class="text-[#BE37F3] text-lg font-medium mb-2">Solicitar demo</h2>
      <h1 v-if="!submitted" class="text-4xl font-bold mb-6">Empecemos.</h1>
      <div v-if="submitted" class="text-center gap-4">
        <h2 class="text-2xl font-bold">Gracias!</h2>
        <p class="text-gray-600">Pronto te estaremos contactando.</p>
        <router-link to="/" class="text-[#BE37F3] font-din-light text-sm">volver a NQ</router-link>
      </div>
      <form v-else @submit.prevent="handleSubmit" class="space-y-4">
        <div class="grid gap-4">
          <input type="text" placeholder="Name*" class="input-field" v-model="form.firstName" required />
        </div>
        <input type="email" placeholder="Email*" class="input-field" v-model="form.email" required />
        <div class="flex items-center border rounded-lg p-2">
          <span class="mr-2">🇦🇷</span>
          <input type="tel" placeholder="11 234-0123" class="flex-1 outline-none" v-model="form.phone" maxlength="10" />
        </div>
        <div class="grid grid-cols-2 gap-4">
          <input type="text" :placeholder="`nombre del ${form.pos.toLowerCase()}*`" class="input-field" v-model="form.restaurantName" required />
          <select class="input-field border-black" v-model="form.pos">
            <option>Bar</option>
            <option>Boliche</option>
            <option>Restaurante</option>
          </select>
        </div>
        <!-- <input type="text" placeholder="Address" class="input-field" v-model="form.address" /> -->
        <!-- <div class="grid grid-cols-2 gap-4"> -->
        <!-- <input type="text" placeholder="City" class="input-field" v-model="form.city" /> -->
        <!-- <input type="text" placeholder="Zip code" class="input-field" v-model="form.zipCode" /> -->
        <!-- </div> -->
        <textarea placeholder="Algún comentario que quieras agregar?" class="input-field h-24" v-model="form.details"></textarea>
        <button type="submit" class="bg-black text-white py-3 px-6 rounded-full w-full font-medium">contactenme</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submitted: false,
      form: {
        name: '',
        email: '',
        phone: '',
        restaurantName: '',
        pos: 'Boliche',
        address: '',
        city: '',
        zipCode: '',
        details: '',
      },
    }
  },
  methods: {
    handleSubmit() {
      this.submitted = true
    },
  },
}
</script>

<style scoped>
.input-field {
  @apply w-full p-3 border border-gray-300 rounded-lg outline-none;
}
</style>
