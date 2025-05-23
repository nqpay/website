<template>
  <div className="h-screen mb-20 w-full flex flex-col bg-[#0B010F] relative">
    <div className="absolute top-4 left-4 md:top-9 md:left-10">
      <div className="text-[#BE37F3] font-din-light text-sm">NQ PAY</div>
    </div>
    <button
      :class="{ 'bg-black text-white': isHome3Visible, 'bg-white': !isHome3Visible }"
      class="fixed top-4 right-6 md:right-10 md:top-9 z-10 rounded-full px-2 py-1 items-center flex justify-center hover:scale-110"
    >
      <img src="../assets/anim.png" class="absolute transition-transform right-3 top-0" :class="{ 'animate-swing': isHovering, '': !isHovering }" />
      <a
        href="/join"
        @mouseover="hoverChange"
        @mouseleave="hoverChange"
        className="transform transition-all duration-300 ease-in-out  px-4 py-2 rounded-md font-din-light text-sm hover:bg-opacity-90"
      >
        Pedir demo
      </a>
    </button>

    <div className="px-4 md:px-10 h-full">
      <div class="flex flex-col md:flex-row text-white w-full h-full items-center justify-between pt-20 gap-8 md:gap-20">
        <div class="flex flex-col gap-6 md:gap-12 w-full md:w-1/2">
          <h2 class="text-[#CC44FF] text-2xl md:text-3xl">
            <span class="animated-text">
              <span v-for="(word, index) in words.line0" :key="'line0-' + index" class="word inline-block" :style="{ animationDelay: `${index * 0.1}s` }"> {{ word }}&nbsp; </span>
            </span>
          </h2>
          <h1 class="flex flex-col text-4xl md:text-6xl font-semibold overflow-hidden">
            <span class="animated-text">
              <span v-for="(word, index) in words.line1" :key="'line1-' + index" class="word inline-block" :style="{ animationDelay: `${index * 0.1}s` }"> {{ word }}&nbsp; </span>
            </span>
            <span class="animated-text">
              <span v-for="(word, index) in words.line2" :key="'line2-' + index" class="word inline-block" :style="{ animationDelay: `${(index + words.line1.length) * 0.1}s` }">
                {{ word }}&nbsp;
              </span>
            </span>
            <span class="animated-text">
              <span
                v-for="(word, index) in words.line3"
                :key="'line3-' + index"
                class="word inline-block"
                :style="{ animationDelay: `${(index + words.line1.length + words.line2.length) * 0.1}s` }"
              >
                {{ word }}&nbsp;
              </span>
            </span>
          </h1>
          <h3 className="font-din-light text-base md:text-lg">Nosotros nos encargamos de tus pedidos para que vos te dediques a tus clientes.</h3>
          <button
            @mouseover="buttonChange"
            @mouseleave="buttonChange"
            className="bg-white text-[#0B010F] rounded-full w-max px-5 py-2 transform transition-all duration-300 ease-in-out hover:scale-110"
          >
            <p @mouseover="buttonChange" @mouseleave="buttonChange" :class="{ 'text-md': buttonHover, 'text-sm': !buttonHover }">Empecemos</p>
          </button>
        </div>

        <div className="relative w-full md:w-5/12 aspect-square md:items-center md:flex md:justify-end">
          <div className="relative w-full md:w-full">
            <img src="../assets/barman.png" className="w-full aspect-square object-cover rounded-2xl" alt="Barman" />
            <div className="absolute bottom-6 right-6 flex flex-col py-4 px-4 gap-2 rounded-3xl w-2/5 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              <div className="flex items-center gap-2">
                <img src="../assets/wpp.png" className="w-6 md:w-8" alt="WhatsApp" />
                <p className="text-xs text-gray-400">Orden 12</p>
              </div>
              <h1 className="text-sm md:text-2xl">
                Estamos preparando<br />
                tu orden!
              </h1>
              <div className="flex items-center gap-2">
                <img src="../assets/fernet.jpeg" className="w-10 md:w-12 rounded-md" alt="Fernet" />
                <p className="text-sm text-gray-300">2x Fernet</p>
              </div>
              <div className="flex gap-1 w-full">
                <div className="flex-1 h-1 bg-white rounded-full"></div>
                <div className="flex-1 h-1 bg-white rounded-full"></div>
                <div className="flex-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="flex-1 h-1 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SupportModal />
  </div>
  <Home2></Home2>
  <Home3 ref="home3Ref"></Home3>
  <Footer></Footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Home2 from './Home2.vue'
import Home3 from './Home3.vue'
import Footer from './Footer.vue'
import SupportModal from './SupportModal.vue'

const isSupportModalOpen = ref(false)
const isHovering = ref(false)
const buttonHover = ref(false)
const home3Ref = ref(null)
const isHome3Visible = ref(false)
const words = {
  line0: ['piden.', 'pagan.', 'retiran.'],
  line1: ['Aumenta', 'tus', 'ventas'],
  line2: ['Retene', 'a', 'tus', 'clientes'],
  line3: ['Toma', 'el', 'control'],
}

const buttonChange = () => {
  buttonHover.value = !buttonHover.value
}

const hoverChange = () => {
  isHovering.value = !isHovering.value
}

const checkVisibility = () => {
  console.log(home3Ref.value)
  if (!home3Ref.value) return

  const rect = home3Ref.value.$el.getBoundingClientRect()
  const windowHeight = window.innerHeight

  isHome3Visible.value = rect.bottom - 1050 <= windowHeight && rect.bottom >= 0
  console.log(isHome3Visible.value)
}

onMounted(() => {
  window.addEventListener('scroll', checkVisibility)
  // Initial check
  checkVisibility()
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkVisibility)
})
</script>

<style scoped>
.animated-text {
  display: block;
}

.word {
  opacity: 0;
  transform: translateY(40px);
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes swing {
  0%,
  49% {
    transform: rotate(-10deg);
  }
  50%,
  100% {
    transform: rotate(5deg);
  }
}

.animate-swing {
  animation: swing 1s infinite steps(1);
}

body {
  margin: 0;
}
</style>
