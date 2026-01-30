<template>
  <div class="impressum-page">
    <div class="container">
      <!-- Hero Section -->
      <div class="page-hero">
        <div class="badge">📄 RECHTLICHE INFORMATIONEN</div>
        <h1 class="page-title gradient-text">Impressum</h1>
        <p class="page-subtitle">Angaben gemäß § 5 TMG</p>
      </div>

      <!-- Content -->
      <div class="content-section">
        <div class="info-card card">
          <h2 class="section-title">Verantwortlich für den Inhalt</h2>
          <div class="info-grid">
            <div class="info-item">
              <div class="info-label">Name:</div>
              <div class="info-value">Ahmadbaz Chedo</div>
            </div>
            <div class="info-item">
              <div class="info-label">Institution:</div>
              <div class="info-value">Hochschule für Technik und Wirtschaft Berlin (HTW Berlin)</div>
            </div>
            <div class="info-item">
              <div class="info-label">E-Mail:</div>
              <div class="info-value">
                <a href="mailto:Ahmadbaz.Chedo@Student.HTW-Berlin.de" class="email-link">
                  Ahmadbaz.Chedo@Student.HTW-Berlin.de
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="info-card card">
          <h2 class="section-title">Hochschule für Technik und Wirtschaft Berlin</h2>
          <div class="info-grid">
            <div class="info-item">
              <div class="info-label">Anschrift:</div>
              <div class="info-value">
                Treskowallee 8<br>
                10318 Berlin<br>
                Deutschland
              </div>
            </div>
            <div class="info-item">
              <div class="info-label">Telefon:</div>
              <div class="info-value">+49 30 5019-0</div>
            </div>
            <div class="info-item">
              <div class="info-label">Website:</div>
              <div class="info-value">
                <a href="https://www.htw-berlin.de" target="_blank" class="email-link">
                  www.htw-berlin.de
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="info-card card">
          <h2 class="section-title">Projektinformationen</h2>
          <p class="info-text">
            Diese E-Learning-Plattform wurde im Rahmen eines Studiums an der HTW Berlin erstellt. 
            Sie dient ausschließlich zu Bildungszwecken und zur Demonstration von Konzepten der 
            Produktionswirtschaft und Logistik.
          </p>
          <p class="info-text">
            <strong>LearnSpace Industries GmbH</strong> ist ein fiktives Musterunternehmen und 
            dient nur zur Veranschaulichung praxisnaher Anwendungsfälle.
          </p>
        </div>

        <div class="info-card card">
          <h2 class="section-title">Haftungsausschluss</h2>
          
          <h3 class="subsection-title">Haftung für Inhalte</h3>
          <p class="info-text">
            Die Inhalte dieser Plattform wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
            Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
          </p>

          <h3 class="subsection-title">Haftung für Links</h3>
          <p class="info-text">
            Diese Plattform enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
            Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter 
            oder Betreiber der Seiten verantwortlich.
          </p>

          <h3 class="subsection-title">Urheberrecht</h3>
          <p class="info-text">
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Plattform unterliegen 
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der 
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung 
            des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>

        <!-- Back Button -->
        <div class="action-section">
          <button class="btn btn-outline" @click="goBack">← Zurück</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImpressumPage',
  emits: ['go-back'],
  setup(props, { emit }) {
    const goBack = () => {
      emit('go-back')
    }

    return {
      goBack
    }
  }
}
</script>

<style scoped>
.impressum-page {
  min-height: 100vh;
  padding: 6rem 0 4rem;
}

.page-hero {
  text-align: center;
  padding: 3rem 0;
  margin-bottom: 3rem;
}

.badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%);
  border: 1px solid rgba(99, 102, 241, 0.3);
  color: var(--color-primary-light);
  margin-bottom: 1.5rem;
}

.page-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.25rem;
  color: var(--color-text-muted);
}

.content-section {
  max-width: 900px;
  margin: 0 auto;
}

.info-card {
  margin-bottom: 2rem;
  animation: fadeIn 0.6s ease-out;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--color-text);
}

.subsection-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-primary-light);
}

.info-grid {
  display: grid;
  gap: 1.5rem;
}

.info-item {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 1rem;
  padding: 1rem;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(99, 102, 241, 0.1);
}

.info-label {
  font-weight: 600;
  color: var(--color-primary-light);
}

.info-value {
  color: var(--color-text);
}

.email-link {
  color: var(--color-primary-light);
  text-decoration: none;
  transition: all 0.3s ease;
}

.email-link:hover {
  color: var(--color-primary);
  text-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
}

.info-text {
  color: var(--color-text-muted);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.action-section {
  text-align: center;
  margin-top: 3rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .info-item {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
}
</style>
