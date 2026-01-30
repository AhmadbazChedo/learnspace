<template>
  <div class="module-view">
    <div class="container">
      <div class="module-container">
        <!-- Module Header -->
        <div class="module-header fade-in">
          <div class="module-hero">
            <div class="module-icon-large">{{ module.icon }}</div>
            <h1 class="module-main-title gradient-text">{{ module.title }}</h1>
            <p class="module-tagline">{{ module.description }}</p>
          </div>
        </div>

        <!-- Content Step -->
        <div v-if="step <= module.slides.length" class="content-view fade-in">
          <ContentSlide 
            :content="module.slides[step - 1]"
            :step="step"
            :total="module.slides.length"
          />
          <div class="navigation-buttons">
            <button class="btn btn-outline" @click="$emit('back')">
              ← {{ step === 1 ? 'Zurück zur Übersicht' : 'Zurück' }}
            </button>
            <button class="btn btn-primary" @click="$emit('next')">
              {{ step === module.slides.length ? 'Zum Quiz →' : 'Weiter →' }}
            </button>
          </div>
        </div>

        <!-- Quiz Step -->
        <div v-else class="quiz-view fade-in">
          <QuizComponent 
            :quiz="module.quiz"
            @finish="handleQuizFinish"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentSlide from './ContentSlide.vue'
import QuizComponent from './QuizComponent.vue'

export default {
  name: 'ModuleView',
  components: {
    ContentSlide,
    QuizComponent
  },
  props: {
    module: {
      type: Object,
      required: true
    },
    step: {
      type: Number,
      required: true
    }
  },
  emits: ['next', 'back', 'home'],
  methods: {
    handleQuizFinish(results) {
      // Could add logic here to save results
      setTimeout(() => {
        this.$emit('home')
      }, 3000)
    }
  }
}
</script>

<style scoped>
.module-view {
  min-height: 100vh;
  padding-top: 120px;
  padding-bottom: 4rem;
}

.module-container {
  max-width: 900px;
  margin: 0 auto;
}

.module-header {
  margin-bottom: 3rem;
  text-align: center;
}

.module-hero {
  padding: 3rem 2rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%);
  border-radius: 20px;
  border: 1px solid rgba(99, 102, 241, 0.2);
  position: relative;
  overflow: hidden;
}

.module-hero::before {
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

.module-hero:hover::before {
  opacity: 1;
}

.module-icon-large {
  font-size: 5rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 20px rgba(99, 102, 241, 0.5));
  animation: float 3s ease-in-out infinite;
}

.module-main-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-shadow: 0 0 30px rgba(99, 102, 241, 0.5);
}

.module-tagline {
  font-size: 1.25rem;
  color: var(--color-text-muted);
  font-weight: 500;
}

.content-view {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.navigation-buttons {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2rem;
}

.navigation-buttons .btn {
  flex: 1;
  justify-content: center;
  font-size: 1.05rem;
  padding: 1rem 2rem;
}

@media (max-width: 768px) {
  .module-view {
    padding-top: 180px;
  }

  .module-main-title {
    font-size: 2rem;
  }

  .module-icon-large {
    font-size: 3.5rem;
  }

  .navigation-buttons {
    flex-direction: column;
  }
}
</style>
