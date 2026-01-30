<template>
  <div class="quiz-component">
    <!-- Quiz In Progress -->
    <div v-if="!showResults" class="quiz-active card">
      <div class="quiz-header">
        <h2 class="quiz-title">📝 Quiz</h2>
        <div class="quiz-progress-info">
          Frage {{ currentQuestionIndex + 1 }} von {{ quiz.questions.length }}
        </div>
      </div>

      <div class="quiz-progress-bar">
        <div class="progress-fill" :style="{ width: quizProgress + '%' }"></div>
      </div>

      <div class="question-card" :key="currentQuestionIndex">
        <h3 class="question-text">{{ currentQuestion.question }}</h3>
        
        <div class="answers-grid">
          <button
            v-for="(answer, index) in currentQuestion.answers"
            :key="index"
            class="answer-button"
            :class="{
              'selected': selectedAnswer === index,
              'correct': showFeedback && index === currentQuestion.correct,
              'incorrect': showFeedback && selectedAnswer === index && index !== currentQuestion.correct
            }"
            @click="selectAnswer(index)"
            :disabled="showFeedback"
          >
            <span class="answer-letter">{{ String.fromCharCode(65 + index) }}</span>
            <span class="answer-text">{{ answer }}</span>
            <span v-if="showFeedback && index === currentQuestion.correct" class="check-icon">✓</span>
            <span v-if="showFeedback && selectedAnswer === index && index !== currentQuestion.correct" class="cross-icon">✗</span>
          </button>
        </div>

        <div v-if="showFeedback" class="feedback-box" :class="{ 'correct': isCorrect, 'incorrect': !isCorrect }">
          <div class="feedback-icon">{{ isCorrect ? '🎉' : '💡' }}</div>
          <div class="feedback-content">
            <h4>{{ isCorrect ? 'Richtig!' : 'Nicht ganz!' }}</h4>
            <p v-if="currentQuestion.explanation">{{ currentQuestion.explanation }}</p>
          </div>
        </div>

        <div class="question-navigation">
          <button 
            v-if="showFeedback && currentQuestionIndex < quiz.questions.length - 1"
            class="btn btn-primary"
            @click="nextQuestion"
          >
            Nächste Frage →
          </button>
          <button 
            v-if="showFeedback && currentQuestionIndex === quiz.questions.length - 1"
            class="btn btn-secondary"
            @click="finishQuiz"
          >
            Quiz beenden
          </button>
        </div>
      </div>
    </div>

    <!-- Quiz Results -->
    <div v-else class="quiz-results card">
      <div class="results-header">
        <div class="results-icon">{{ resultEmoji }}</div>
        <h2 class="results-title">Quiz abgeschlossen!</h2>
        <p class="results-subtitle">{{ resultMessage }}</p>
      </div>

      <div class="results-stats">
        <div class="stat-circle">
          <svg class="progress-ring" width="200" height="200">
            <circle
              class="progress-ring-circle-bg"
              stroke="rgba(99, 102, 241, 0.1)"
              stroke-width="15"
              fill="transparent"
              r="85"
              cx="100"
              cy="100"
            />
            <circle
              class="progress-ring-circle"
              :stroke="scoreColor"
              stroke-width="15"
              fill="transparent"
              r="85"
              cx="100"
              cy="100"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="dashOffset"
            />
          </svg>
          <div class="stat-circle-content">
            <div class="percentage">{{ scorePercentage }}%</div>
            <div class="score-text">{{ correctAnswers }} / {{ quiz.questions.length }}</div>
          </div>
        </div>

        <div class="results-details">
          <div class="detail-item correct">
            <span class="detail-icon">✓</span>
            <span class="detail-label">Richtig:</span>
            <span class="detail-value">{{ correctAnswers }}</span>
          </div>
          <div class="detail-item incorrect">
            <span class="detail-icon">✗</span>
            <span class="detail-label">Falsch:</span>
            <span class="detail-value">{{ incorrectAnswers }}</span>
          </div>
          <div class="detail-item total">
            <span class="detail-icon">📊</span>
            <span class="detail-label">Gesamt:</span>
            <span class="detail-value">{{ quiz.questions.length }}</span>
          </div>
        </div>
      </div>

      <div class="results-actions">
        <button class="btn btn-primary" @click="resetQuiz">
          🔄 Quiz wiederholen
        </button>
      </div>

      <div class="completion-message">
        <p>Zurück zur Startseite in 3 Sekunden...</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'QuizComponent',
  props: {
    quiz: {
      type: Object,
      required: true
    }
  },
  emits: ['finish'],
  setup(props, { emit }) {
    const currentQuestionIndex = ref(0)
    const selectedAnswer = ref(null)
    const showFeedback = ref(false)
    const userAnswers = ref([])
    const showResults = ref(false)

    const currentQuestion = computed(() => props.quiz.questions[currentQuestionIndex.value])
    
    const quizProgress = computed(() => {
      return ((currentQuestionIndex.value + 1) / props.quiz.questions.length) * 100
    })

    const isCorrect = computed(() => {
      return selectedAnswer.value === currentQuestion.value.correct
    })

    const correctAnswers = computed(() => {
      return userAnswers.value.filter(answer => answer.isCorrect).length
    })

    const incorrectAnswers = computed(() => {
      return userAnswers.value.length - correctAnswers.value
    })

    const scorePercentage = computed(() => {
      return Math.round((correctAnswers.value / props.quiz.questions.length) * 100)
    })

    const scoreColor = computed(() => {
      const percentage = scorePercentage.value
      if (percentage >= 80) return '#10b981'
      if (percentage >= 60) return '#f59e0b'
      return '#ef4444'
    })

    const resultEmoji = computed(() => {
      const percentage = scorePercentage.value
      if (percentage === 100) return '🏆'
      if (percentage >= 80) return '🎉'
      if (percentage >= 60) return '👍'
      return '💪'
    })

    const resultMessage = computed(() => {
      const percentage = scorePercentage.value
      if (percentage === 100) return 'Perfekt! Du hast alle Fragen richtig beantwortet!'
      if (percentage >= 80) return 'Sehr gut! Du hast das Thema gut verstanden!'
      if (percentage >= 60) return 'Gut gemacht! Mit etwas Übung wirst du noch besser!'
      return 'Nicht aufgeben! Wiederhole das Material und versuche es erneut!'
    })

    const circumference = 2 * Math.PI * 85
    const dashOffset = computed(() => {
      return circumference - (scorePercentage.value / 100) * circumference
    })

    const selectAnswer = (index) => {
      if (showFeedback.value) return
      selectedAnswer.value = index
      showFeedback.value = true
      
      userAnswers.value.push({
        questionIndex: currentQuestionIndex.value,
        selectedAnswer: index,
        correctAnswer: currentQuestion.value.correct,
        isCorrect: index === currentQuestion.value.correct
      })
    }

    const nextQuestion = () => {
      currentQuestionIndex.value++
      selectedAnswer.value = null
      showFeedback.value = false
    }

    const finishQuiz = () => {
      showResults.value = true
      emit('finish', {
        score: correctAnswers.value,
        total: props.quiz.questions.length,
        percentage: scorePercentage.value,
        answers: userAnswers.value
      })
    }

    const resetQuiz = () => {
      currentQuestionIndex.value = 0
      selectedAnswer.value = null
      showFeedback.value = false
      userAnswers.value = []
      showResults.value = false
    }

    return {
      currentQuestionIndex,
      currentQuestion,
      selectedAnswer,
      showFeedback,
      isCorrect,
      quizProgress,
      selectAnswer,
      nextQuestion,
      finishQuiz,
      resetQuiz,
      showResults,
      correctAnswers,
      incorrectAnswers,
      scorePercentage,
      scoreColor,
      resultEmoji,
      resultMessage,
      circumference,
      dashOffset
    }
  }
}
</script>

<style scoped>
.quiz-component {
  animation: fadeIn 0.5s ease-out;
}

.quiz-active,
.quiz-results {
  max-width: 800px;
  margin: 0 auto;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, rgba(16, 185, 129, 0.03) 100%);
  position: relative;
  overflow: hidden;
}

.quiz-active::before,
.quiz-results::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary), var(--color-accent));
  opacity: 0.7;
}

/* Quiz Header */
.quiz-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.quiz-title {
  font-size: 2rem;
  font-weight: 700;
  text-shadow: 0 0 10px rgba(99, 102, 241, 0.3);
}

.quiz-progress-info {
  background: rgba(99, 102, 241, 0.15);
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  font-weight: 600;
  color: var(--color-primary-light);
  border: 1px solid rgba(99, 102, 241, 0.3);
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.2);
}

.quiz-progress-bar {
  margin-bottom: 2rem;
}

/* Question Card */
.question-card {
  animation: fadeIn 0.5s ease-out;
}

.question-text {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--color-text);
  line-height: 1.6;
}

/* Answers */
.answers-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.answer-button {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%);
  border: 2px solid rgba(99, 102, 241, 0.3);
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  font-size: 1rem;
  color: var(--color-text);
  position: relative;
  overflow: hidden;
}

.answer-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(16, 185, 129, 0.12) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.answer-button:hover:not(:disabled) {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(16, 185, 129, 0.12) 100%);
  border-color: var(--color-primary);
  transform: translateX(10px);
  box-shadow: var(--glow-primary);
}

.answer-button:hover:not(:disabled)::before {
  opacity: 1;
}

.answer-button:disabled {
  cursor: not-allowed;
}

.answer-button.selected {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%);
  border-color: var(--color-primary);
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
}

.answer-button.correct {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(52, 211, 153, 0.2) 100%);
  border-color: var(--color-secondary);
  box-shadow: 0 0 25px rgba(16, 185, 129, 0.4);
}

.answer-button.incorrect {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(248, 113, 113, 0.2) 100%);
  border-color: var(--color-error);
  box-shadow: 0 0 25px rgba(239, 68, 68, 0.4);
}

.answer-letter {
  flex-shrink: 0;
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
  position: relative;
  z-index: 2;
}

.answer-button.correct .answer-letter {
  background: linear-gradient(135deg, var(--color-secondary) 0%, #059669 100%);
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
}

.answer-button.incorrect .answer-letter {
  background: linear-gradient(135deg, var(--color-error) 0%, #dc2626 100%);
  box-shadow: 0 0 20px rgba(239, 68, 68, 0.5);
}

.answer-text {
  flex: 1;
  position: relative;
  z-index: 2;
}

.check-icon,
.cross-icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
}

.check-icon {
  background: var(--color-secondary);
  color: white;
}

.cross-icon {
  background: var(--color-error);
  color: white;
}

/* Feedback */
.feedback-box {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  animation: fadeIn 0.5s ease-out;
}

.feedback-box.correct {
  background: rgba(16, 185, 129, 0.1);
  border: 2px solid var(--color-secondary);
}

.feedback-box.incorrect {
  background: rgba(245, 158, 11, 0.1);
  border: 2px solid var(--color-warning);
}

.feedback-icon {
  font-size: 3rem;
  flex-shrink: 0;
}

.feedback-content h4 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.feedback-box.correct h4 {
  color: var(--color-secondary);
}

.feedback-box.incorrect h4 {
  color: var(--color-warning);
}

.feedback-content p {
  color: var(--color-text-muted);
  line-height: 1.6;
}

/* Question Navigation */
.question-navigation {
  display: flex;
  justify-content: center;
}

.question-navigation .btn {
  min-width: 200px;
}

/* Results */
.results-header {
  text-align: center;
  margin-bottom: 3rem;
}

.results-icon {
  font-size: 5rem;
  margin-bottom: 1rem;
  animation: pulse 2s ease-in-out infinite;
}

.results-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.results-subtitle {
  font-size: 1.25rem;
  color: var(--color-text-muted);
}

.results-stats {
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
}

.stat-circle {
  position: relative;
}

.progress-ring {
  transform: rotate(-90deg);
}

.progress-ring-circle {
  transition: stroke-dashoffset 1s ease-out;
  stroke-linecap: round;
}

.stat-circle-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.percentage {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-secondary-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.score-text {
  font-size: 1rem;
  color: var(--color-text-muted);
  font-weight: 600;
}

.results-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 12px;
  font-size: 1.125rem;
}

.detail-item.correct {
  border-left: 4px solid var(--color-secondary);
}

.detail-item.incorrect {
  border-left: 4px solid var(--color-error);
}

.detail-item.total {
  border-left: 4px solid var(--color-primary);
}

.detail-icon {
  font-size: 1.5rem;
}

.detail-label {
  color: var(--color-text-muted);
  flex: 1;
}

.detail-value {
  font-weight: 700;
  font-size: 1.5rem;
}

.results-actions {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.completion-message {
  text-align: center;
  color: var(--color-text-muted);
  font-style: italic;
}

@media (max-width: 768px) {
  .quiz-header {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .question-text {
    font-size: 1.25rem;
  }

  .results-stats {
    flex-direction: column;
  }

  .results-icon {
    font-size: 4rem;
  }

  .results-title {
    font-size: 2rem;
  }
}
</style>
