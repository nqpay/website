<template>
  <div class="fixed bottom-6 right-6 z-50">
    <!-- Support Button -->
    <button
      @click="isOpen = !isOpen"
      class="hover:scale-110 w-14 h-14 bg-[#CC44FF] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#CC44FF] transition-all"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    </button>

    <!-- Modal Panel -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <div v-if="isOpen" class="fixed bottom-3 right-6 mb-20 ml-6 w-96 bg-gradient-to-b from-[#CC44FF] via-pink-100 to-white rounded-lg shadow-2xl overflow-hidden">
        <!-- Modal Header -->
        <div class="p-8">
          <div class="flex justify-between items-center mb-20">
            <div class="flex items-center gap-2">
              <span class="text-white text-xl">NQ Pay</span>
            </div>
            <button @click="isOpen = false" class="text-white hover:text-gray-200">
              <!-- Close button SVG -->
            </button>
          </div>
          <h1 class="text-white text-2xl font-semibold">Hi there 👋</h1>
          <h2 class="text-white text-2xl font-semibold">How can we help?</h2>
        </div>

        <!-- Modal Content -->
        <div class="max-h-[60vh] overflow-y-auto">
          <Transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-x-4"
            enter-to-class="opacity-100 translate-x-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-x-0"
            leave-to-class="opacity-0 translate-x-4"
          >
            <div class="w-full">
              <!-- Main Menu -->
              <div v-if="!showMessageForm && !showSuccess" class="px-4">
                <!-- Message Input -->
                <div class="px-4 pb-4 space-y-2">
                  <div @click="showMessageForm = true" class="bg-white/80 hover:bg-gray-50 p-4 flex justify-between items-center cursor-pointer border border-gray-100 rounded-lg">
                    <span class="text-gray-800">Send us a message</span>
                    <svg class="w-6 h-6 text-[#CC44FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <!-- Help Topics -->
                <div class="px-4 pb-4 space-y-2">
                  <div
                    v-for="(topic, index) in helpTopics"
                    :key="index"
                    class="bg-white/80 hover:bg-gray-50 p-4 flex justify-between items-center cursor-pointer border border-gray-100 rounded-lg"
                  >
                    <span class="text-gray-800">{{ topic }}</span>
                    <svg class="w-6 h-6 text-[#CC44FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Message Form -->
              <div v-if="showMessageForm && !showSuccess" class="p-4">
                <div class="flex items-center mb-4">
                  <button @click="showMessageForm = false" class="text-[#CC44FF] mr-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <span class="text-lg font-medium">Send us a message</span>
                </div>
                <form @submit.prevent="handleSubmit" class="space-y-4">
                  <div>
                    <input
                      v-model="messageForm.email"
                      type="email"
                      placeholder="Your email"
                      class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#CC44FF] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      v-model="messageForm.message"
                      rows="4"
                      placeholder="How can we help you?"
                      class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#CC44FF] focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" class="w-full bg-[#CC44FF] text-white py-2 px-4 rounded-lg hover:bg-[#CC44FF] transition-colors">Send message</button>
                </form>
              </div>

              <!-- Success Message -->
              <div v-if="showSuccess" class="p-4 text-center">
                <svg class="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <h3 class="text-xl font-medium mb-2">Message sent!</h3>
                <p class="text-gray-600 mb-4">We'll get back to you as soon as possible.</p>
                <button @click="resetForm" class="text-[#CC44FF] hover:text-[#CC44FF]">Back to menu</button>
              </div>
            </div>
          </Transition>

          <!-- Navigation Bar -->
          <div class="bottom-0 left-0 right-0 bg-white/80 p-4 flex justify-around items-center">
            <div class="flex flex-col items-center text-[#CC44FF]">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="text-sm">Help</span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: 'SupportModal',
  data() {
    return {
      isOpen: false,
      showMessageForm: false,
      showSuccess: false,
      messageForm: {
        email: '',
        message: '',
      },
      helpTopics: ['Checkout : Onboarding guide', 'I forgot to download my receipt', 'How can I reorder QRs?'],
    }
  },
  methods: {
    handleSubmit() {
      // Aquí puedes agregar la lógica para enviar el mensaje
      this.showMessageForm = false
      this.showSuccess = true

      // Reset form
      this.messageForm = {
        email: '',
        message: '',
      }
    },
    resetForm() {
      this.showSuccess = false
      this.showMessageForm = false
    },
  },
}
</script>
