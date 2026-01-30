<template>
  <div class="home-page">
    <div class="container">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content fade-in">
          <div class="hero-badge">🚀 E-Learning der Zukunft</div>
          <h1 class="hero-title">
            Willkommen bei <span class="gradient-text glow-text">LearnSpace</span>
          </h1>
          <p class="hero-subtitle">
            Interaktive E-Learning-Plattform für Produktionswirtschaft & Logistik
          </p>
          <p class="hero-description">
            Entdecke die Welt der Produktionswirtschaft im Weltraum-Design. 
            Moderne Didaktik trifft futuristische Technologie.
          </p>
          <div class="hero-actions">
            <button class="btn btn-primary" @click="scrollToModules">
              🚀 Lernmodule erkunden
            </button>
            <button class="btn btn-outline" @click="showAbout">
              ℹ️ Über uns erfahren
            </button>
          </div>
          <div class="hero-stats">
            <div class="stat-item slide-in-left">
              <div class="stat-icon">📚</div>
              <div class="stat-number gradient-text">{{ modules.length }}</div>
              <div class="stat-label">Module</div>
            </div>
            <div class="stat-item fade-in" style="animation-delay: 0.2s;">
              <div class="stat-icon">❓</div>
              <div class="stat-number gradient-text">{{ totalQuizzes }}</div>
              <div class="stat-label">Quizfragen</div>
            </div>
            <div class="stat-item slide-in-right">
              <div class="stat-icon">⚡</div>
              <div class="stat-number gradient-text">100%</div>
              <div class="stat-label">Praxisnah</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Modules Grid -->
      <section class="modules-section">
        <h2 class="section-title fade-in">Lernmodule</h2>
        <div class="modules-grid">
          <div 
            v-for="(module, index) in modules" 
            :key="module.id"
            class="module-card card"
            :style="{ animationDelay: (index * 0.1) + 's' }"
            @click="selectModule(module.id)"
          >
            <div class="module-icon" :style="{ background: module.color }">
              {{ module.icon }}
            </div>
            <h3 class="module-title">{{ module.title }}</h3>
            <p class="module-description">{{ module.description }}</p>
            <div class="module-meta">
              <div class="meta-item">
                <span class="meta-icon">📚</span>
                <span>{{ module.slides.length }} Themen</span>
              </div>
              <div class="meta-item">
                <span class="meta-icon">❓</span>
                <span>{{ module.quiz.questions.length }} Fragen</span>
              </div>
            </div>
            <div class="module-cta">
              <span>Modul starten</span>
              <span class="arrow">→</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Features -->
      <section class="features-section">
        <h2 class="section-title fade-in">Warum LearnSpace?</h2>
        <div class="features-grid">
          <div class="feature-card card slide-in-left">
            <div class="feature-icon">🎯</div>
            <h3>Praxisorientiert</h3>
            <p>Lerninhalte basierend auf realen Vorlesungsfolien der HTW</p>
          </div>
          <div class="feature-card card fade-in">
            <div class="feature-icon">✨</div>
            <h3>Interaktiv</h3>
            <p>Quizze und Übungen zur Vertiefung des Gelernten</p>
          </div>
          <div class="feature-card card slide-in-right">
            <div class="feature-icon">📊</div>
            <h3>Visuell</h3>
            <p>Anschauliche Darstellungen komplexer Konzepte</p>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-logo">
              <span class="footer-logo-icon">🎓</span>
              <span class="gradient-text">LearnSpace</span>
            </div>
            <div class="footer-links">
              <a href="#" class="footer-link" @click.prevent="showAbout">Über uns</a>
              <a href="#" class="footer-link" @click.prevent="showKontakt">Kontakt</a>
              <a href="#" class="footer-link" @click.prevent="showDatenschutz">Datenschutz</a>
              <a href="#" class="footer-link" @click.prevent="showImpressum">Impressum</a>
            </div>
          </div>
          <div class="footer-copyright">
            © {{ new Date().getFullYear() }} LearnSpace - E-Learning Plattform für Produktionswirtschaft & Logistik
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { modules } from '../data/modules'

export default {
  name: 'HomePage',
  emits: ['select-module', 'show-about', 'show-kontakt', 'show-datenschutz', 'show-impressum'],
  setup(props, { emit }) {
    // Debug: Check if modules is loaded
    console.log('Loaded modules:', modules)
    
    const totalQuizzes = computed(() => {
      if (!modules || !Array.isArray(modules)) return 0
      return modules.reduce((sum, module) => sum + module.quiz.questions.length, 0)
    })

    const scrollToModules = () => {
      const modulesSection = document.querySelector('.modules-section')
      if (modulesSection) {
        modulesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    const showAbout = () => {
      console.log('Show About clicked!')
      emit('show-about')
    }

    const showKontakt = () => {
      emit('show-kontakt')
    }

    const showDatenschutz = () => {
      emit('show-datenschutz')
    }

    const showImpressum = () => {
      emit('show-impressum')
    }

    const selectModule = (moduleId) => {
      console.log('Module selected:', moduleId)
      emit('select-module', moduleId)
    }

    return {
      modules,
      totalQuizzes,
      scrollToModules,
      showAbout,
      showKontakt,
      showDatenschutz,
      showImpressum,
      selectModule
    }
  }
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  padding: 4rem 0;
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 6rem 0 4rem;
  position: relative;
}

.hero-badge {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--color-primary-light);
  animation: pulse 2s ease-in-out infinite;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.glow-text {
  animation: glowStrong 3s ease-in-out infinite;
  text-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--color-text);
  margin-bottom: 1rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 600;
}

.hero-description {
  font-size: 1.125rem;
  color: var(--color-text-muted);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.hero-actions .btn {
  font-size: 1.05rem;
  padding: 1rem 2.5rem;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 4rem;
}

.stat-item {
  text-align: center;
  padding: 2rem;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(99, 102, 241, 0.2);
  min-width: 180px;
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-10px);
  border-color: var(--color-primary);
  box-shadow: var(--glow-primary);
}

.stat-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: var(--color-text-muted);
  margin-top: 0.5rem;
  font-weight: 500;
}

/* Modules Section */
.modules-section {
  padding: 4rem 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.module-card {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  animation: fadeIn 0.6s ease-out both;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%);
}

.module-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.module-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.module-card:hover {
  box-shadow: var(--glow-primary), 0 20px 40px rgba(0, 0, 0, 0.3);
}

.module-card:hover::before {
  transform: scaleX(1);
}

.module-card:hover::after {
  opacity: 1;
}

.module-icon {
  width: 80px;
  height: 80px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  box-shadow: var(--glow-primary);
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

.module-card:hover .module-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 0 30px rgba(99, 102, 241, 0.6);
}

.module-card:nth-child(1) .module-icon {
  background: linear-gradient(135deg, #6366f1 0%, #818cf8 100%);
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
}

.module-card:nth-child(2) .module-icon {
  background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
}

.module-card:nth-child(3) .module-icon {
  background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%);
  box-shadow: 0 0 20px rgba(245, 158, 11, 0.4);
}

.module-card:nth-child(4) .module-icon {
  background: linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%);
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.4);
}

.module-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.module-description {
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.module-meta {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(99, 102, 241, 0.1);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

.meta-icon {
  font-size: 1rem;
}

.module-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-primary-light);
  font-weight: 600;
  margin-top: auto;
}

.arrow {
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.module-card:hover .arrow {
  transform: translateX(5px);
}

/* Features Section */
.features-section {
  padding: 4rem 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  text-align: center;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--glow-primary);
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.3));
  position: relative;
  z-index: 2;
}

.feature-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
}

.feature-card p {
  color: var(--color-text-muted);
  line-height: 1.6;
  position: relative;
  z-index: 2;
}

/* Footer */
.footer {
  padding: 2rem 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%);
  border-top: 1px solid rgba(99, 102, 241, 0.1);
  margin-top: 4rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
}

.footer-logo-icon {
  font-size: 2rem;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-link {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: var(--color-primary);
}

.footer-copyright {
  text-align: center;
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin-top: 1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.125rem;
  }

  .hero-stats {
    flex-direction: column;
    gap: 2rem;
  }

  .modules-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }

  .footer-content {
    flex-direction: column;
    align-items: center;
  }

  .footer-links {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
