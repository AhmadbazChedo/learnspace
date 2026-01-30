<template>
  <div class="app">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="container">
        <div class="nav-content">
          <div class="nav-brand" @click="goHome">
            <span class="logo-icon">🎓</span>
            <span class="logo-text gradient-text">LearnSpace</span>
          </div>
          
          <!-- Navigation Links -->
          <div class="nav-links">
            <button 
              class="nav-link" 
              :class="{ active: currentView === 'home' }"
              @click="goHome"
            >
              🏠 Start
            </button>
            <button 
              class="nav-link" 
              :class="{ active: currentView === 'about' }"
              @click="showAbout"
            >
              ℹ️ Über uns
            </button>
            <button 
              class="nav-link" 
              :class="{ active: currentView === 'kontakt' }"
              @click="showKontakt"
            >
              📧 Kontakt
            </button>
            <button 
              class="nav-link" 
              :class="{ active: currentView === 'datenschutz' }"
              @click="showDatenschutz"
            >
              🔒 Datenschutz
            </button>
            <button 
              class="nav-link" 
              :class="{ active: currentView === 'impressum' }"
              @click="showImpressum"
            >
              📄 Impressum
            </button>
          </div>

          <div class="nav-progress" v-if="currentModule">
            <div class="progress-info">
              <span class="module-name">{{ currentModule.title }}</span>
              <span class="progress-text">{{ currentStep }}/{{ totalSteps }}</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Home View -->
      <HomePage 
        v-if="currentView === 'home'" 
        @select-module="selectModule"
        @show-about="showAbout"
        @show-kontakt="showKontakt"
        @show-datenschutz="showDatenschutz"
        @show-impressum="showImpressum"
      />

      <!-- About View -->
      <AboutPage 
        v-else-if="currentView === 'about'"
        @select-module="selectModule"
        @go-home="goHome"
      />

      <!-- Kontakt View -->
      <KontaktPage 
        v-else-if="currentView === 'kontakt'"
        @go-back="goHome"
      />

      <!-- Datenschutz View -->
      <DatenschutzPage 
        v-else-if="currentView === 'datenschutz'"
        @go-back="goHome"
      />

      <!-- Impressum View -->
      <ImpressumPage 
        v-else-if="currentView === 'impressum'"
        @go-back="goHome"
      />

      <!-- Module View -->
      <ModuleView 
        v-else-if="currentView === 'module'"
        :module="currentModule"
        :step="currentStep"
        @next="nextStep"
        @back="backStep"
        @home="goHome"
      />
    </main>

    <!-- Background Effects -->
    <div class="bg-effects">
      <!-- Stars -->
      <div class="stars"></div>
      <div class="stars stars2"></div>
      <div class="stars stars3"></div>
      
      <!-- Gradient Orbs -->
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
      <div class="gradient-orb orb-4"></div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import KontaktPage from './components/KontaktPage.vue'
import DatenschutzPage from './components/DatenschutzPage.vue'
import ImpressumPage from './components/ImpressumPage.vue'
import ModuleView from './components/ModuleView.vue'
import { modules } from './data/modules.js'

export default {
  name: 'App',
  components: {
    HomePage,
    AboutPage,
    KontaktPage,
    DatenschutzPage,
    ImpressumPage,
    ModuleView
  },
  setup() {
    const currentView = ref('home')
    const currentModuleId = ref(null)
    const currentStep = ref(1)

    const currentModule = computed(() => {
      return modules.find(m => m.id === currentModuleId.value)
    })

    const totalSteps = computed(() => {
      if (!currentModule.value) return 0
      return currentModule.value.slides.length + 1 // slides + quiz
    })

    const progressPercentage = computed(() => {
      return (currentStep.value / totalSteps.value) * 100
    })

    const selectModule = (moduleId) => {
      currentModuleId.value = moduleId
      currentView.value = 'module'
      currentStep.value = 1
    }

    const nextStep = () => {
      if (currentStep.value < totalSteps.value) {
        currentStep.value++
      }
    }

    const backStep = () => {
      if (currentStep.value > 1) {
        currentStep.value--
      } else {
        goHome()
      }
    }

    const goHome = () => {
      currentView.value = 'home'
      currentModuleId.value = null
      currentStep.value = 1
    }

    const showAbout = () => {
      currentView.value = 'about'
      currentModuleId.value = null
      currentStep.value = 1
    }

    const showKontakt = () => {
      currentView.value = 'kontakt'
      currentModuleId.value = null
      currentStep.value = 1
    }

    const showDatenschutz = () => {
      currentView.value = 'datenschutz'
      currentModuleId.value = null
      currentStep.value = 1
    }

    const showImpressum = () => {
      currentView.value = 'impressum'
      currentModuleId.value = null
      currentStep.value = 1
    }

    return {
      currentView,
      currentModule,
      currentStep,
      totalSteps,
      progressPercentage,
      selectModule,
      nextStep,
      backStep,
      goHome,
      showAbout,
      showKontakt,
      showDatenschutz,
      showImpressum
    }
  }
}
</script>

<style scoped>
.app {
  min-height: 100vh;
  position: relative;
}

/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(10, 14, 39, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(99, 102, 241, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  padding: 1rem 0;
}

.nav-content {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 12px;
}

.nav-brand:hover {
  transform: scale(1.05);
  background: rgba(99, 102, 241, 0.1);
}

.nav-links {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  flex: 1;
  justify-content: center;
}

.nav-link {
  background: transparent;
  border: none;
  color: var(--color-text-muted);
  padding: 0.625rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;
}

.nav-link:hover {
  color: var(--color-primary-light);
  background: rgba(99, 102, 241, 0.1);
  transform: translateY(-2px);
}

.nav-link.active {
  color: var(--color-primary-light);
  background: rgba(99, 102, 241, 0.15);
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
}

.logo-icon {
  font-size: 2rem;
  filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.5));
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 800;
  text-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
}

.nav-progress {
  flex: 1;
  max-width: 500px;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}

.module-name {
  font-weight: 600;
  color: var(--color-primary-light);
}

.progress-text {
  color: var(--color-text-muted);
}

/* Main Content */
.main-content {
  position: relative;
  z-index: 1;
}

/* Background Effects */
.bg-effects {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

/* Stars */
.stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 
    780px 1620px #fff, 1356px 1876px #fff, 1010px 1593px #fff,
    473px 986px #fff, 1582px 1916px #fff, 1018px 1534px #fff,
    850px 1200px #fff, 1350px 450px #fff, 620px 1780px #fff,
    1450px 1050px #fff, 280px 1450px #fff, 1720px 820px #fff,
    920px 380px #fff, 1580px 1620px #fff, 420px 1180px #fff,
    180px 720px #fff, 1380px 280px #fff, 820px 1520px #fff,
    480px 1820px #fff, 1680px 1380px #fff, 320px 580px #fff,
    1180px 1720px #fff, 680px 920px #fff, 1520px 180px #fff,
    1820px 1280px #fff, 220px 1420px #fff, 1120px 520px #fff,
    720px 1620px #fff, 1420px 720px #fff, 520px 320px #fff,
    1720px 1520px #fff, 80px 1120px #fff, 1280px 1820px #fff,
    880px 220px #fff, 1620px 1220px #fff, 380px 820px #fff;
  animation: stars 100s linear infinite;
}

.stars::after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 
    780px 1620px #fff, 1356px 1876px #fff, 1010px 1593px #fff,
    473px 986px #fff, 1582px 1916px #fff, 1018px 1534px #fff,
    850px 1200px #fff, 1350px 450px #fff, 620px 1780px #fff,
    1450px 1050px #fff, 280px 1450px #fff, 1720px 820px #fff,
    920px 380px #fff, 1580px 1620px #fff, 420px 1180px #fff,
    180px 720px #fff, 1380px 280px #fff, 820px 1520px #fff,
    480px 1820px #fff, 1680px 1380px #fff, 320px 580px #fff,
    1180px 1720px #fff, 680px 920px #fff, 1520px 180px #fff,
    1820px 1280px #fff, 220px 1420px #fff, 1120px 520px #fff,
    720px 1620px #fff, 1420px 720px #fff, 520px 320px #fff,
    1720px 1520px #fff, 80px 1120px #fff, 1280px 1820px #fff,
    880px 220px #fff, 1620px 1220px #fff, 380px 820px #fff;
}

.stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 
    580px 1320px #fff, 956px 1476px #fff, 710px 1293px #fff,
    273px 786px #fff, 1282px 1616px #fff, 818px 1334px #fff,
    650px 1000px #fff, 1150px 250px #fff, 420px 1580px #fff,
    1250px 850px #fff, 80px 1250px #fff, 1520px 620px #fff,
    720px 180px #fff, 1380px 1420px #fff, 220px 980px #fff,
    980px 520px #fff, 1180px 80px #fff, 620px 1320px #fff,
    280px 1620px #fff, 1480px 1180px #fff, 120px 380px #fff;
  animation: stars 150s linear infinite;
}

.stars2::after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 
    580px 1320px #fff, 956px 1476px #fff, 710px 1293px #fff,
    273px 786px #fff, 1282px 1616px #fff, 818px 1334px #fff,
    650px 1000px #fff, 1150px 250px #fff, 420px 1580px #fff,
    1250px 850px #fff, 80px 1250px #fff, 1520px 620px #fff,
    720px 180px #fff, 1380px 1420px #fff, 220px 980px #fff,
    980px 520px #fff, 1180px 80px #fff, 620px 1320px #fff,
    280px 1620px #fff, 1480px 1180px #fff, 120px 380px #fff;
}

.stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 
    480px 1220px #fff, 756px 1376px #fff, 610px 1193px #fff,
    173px 686px #fff, 1182px 1516px #fff, 718px 1234px #fff,
    550px 900px #fff, 1050px 150px #fff, 320px 1480px #fff,
    1150px 750px #fff, 180px 1150px #fff, 1420px 520px #fff;
  animation: stars 200s linear infinite;
}

.stars3::after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 
    480px 1220px #fff, 756px 1376px #fff, 610px 1193px #fff,
    173px 686px #fff, 1182px 1516px #fff, 718px 1234px #fff,
    550px 900px #fff, 1050px 150px #fff, 320px 1480px #fff,
    1150px 750px #fff, 180px 1150px #fff, 1420px 520px #fff;
}

/* Gradient Orbs */
.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  animation: float 20s ease-in-out infinite;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: var(--color-primary);
  top: -250px;
  left: -250px;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: var(--color-secondary);
  bottom: -200px;
  right: -200px;
  animation-delay: -5s;
}

.orb-3 {
  width: 350px;
  height: 350px;
  background: var(--color-accent);
  top: 40%;
  left: 70%;
  animation-delay: -10s;
}

.orb-4 {
  width: 300px;
  height: 300px;
  background: var(--color-purple);
  bottom: 30%;
  left: 10%;
  animation-delay: -15s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(50px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-50px, 50px) scale(0.9);
  }
}

@keyframes stars {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-2000px);
  }
}

@media (max-width: 768px) {
  .nav-content {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    width: 100%;
    justify-content: center;
  }

  .nav-progress {
    width: 100%;
    max-width: 100%;
  }

  .logo-text {
    font-size: 1.25rem;
  }

  .gradient-orb {
    filter: blur(60px);
  }
}
</style>
