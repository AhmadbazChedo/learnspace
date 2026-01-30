<template>
  <div class="kontakt-page">
    <div class="container">
      <!-- Hero Section -->
      <div class="page-hero">
        <div class="badge">📧 KONTAKT</div>
        <h1 class="page-title gradient-text">Kontaktieren Sie uns</h1>
        <p class="page-subtitle">Fragen, Anregungen oder Feedback?</p>
      </div>

      <!-- Content -->
      <div class="content-section">
        <!-- Contact Info -->
        <div class="contact-grid">
          <div class="contact-card card">
            <div class="contact-icon">👤</div>
            <h3 class="contact-title">Projektleitung</h3>
            <p class="contact-name">Ahmadbaz Chedo</p>
            <p class="contact-role">Student, HTW Berlin</p>
          </div>

          <div class="contact-card card">
            <div class="contact-icon">📧</div>
            <h3 class="contact-title">E-Mail</h3>
            <a href="mailto:Ahmadbaz.Chedo@Student.HTW-Berlin.de" class="contact-link">
              Ahmadbaz.Chedo@Student.HTW-Berlin.de
            </a>
            <p class="contact-info">Antwortzeit: Innerhalb von 2-3 Werktagen</p>
          </div>

          <div class="contact-card card">
            <div class="contact-icon">🏫</div>
            <h3 class="contact-title">Institution</h3>
            <p class="contact-name">Hochschule für Technik und Wirtschaft Berlin</p>
            <p class="contact-address">
              Treskowallee 8<br>
              10318 Berlin<br>
              Deutschland
            </p>
          </div>

          <div class="contact-card card">
            <div class="contact-icon">🌐</div>
            <h3 class="contact-title">Website</h3>
            <a href="https://www.htw-berlin.de" target="_blank" class="contact-link">
              www.htw-berlin.de
            </a>
            <p class="contact-info">Hochschulwebsite</p>
          </div>
        </div>

        <!-- Project Info -->
        <div class="info-card card">
          <h2 class="section-title">Über dieses Projekt</h2>
          <p class="info-text">
            Diese E-Learning-Plattform wurde im Rahmen eines Studiums an der Hochschule für Technik und 
            Wirtschaft Berlin (HTW Berlin) entwickelt. Das Projekt dient der Vermittlung von Konzepten 
            der Produktionswirtschaft und Logistik in einem modernen, interaktiven Format.
          </p>
          <p class="info-text">
            Die Plattform kombiniert wissenschaftlich fundierte Inhalte mit einem futuristischen Space-Design, 
            um ein ansprechendes und effektives Lernerlebnis zu schaffen.
          </p>
        </div>

        <!-- FAQ Section -->
        <div class="info-card card">
          <h2 class="section-title">Häufig gestellte Fragen</h2>
          
          <div class="faq-item">
            <h3 class="faq-question">💡 Kann ich diese Plattform für mein Studium nutzen?</h3>
            <p class="faq-answer">
              Ja! Diese Plattform wurde speziell für Studierende entwickelt und steht zu Bildungszwecken 
              zur Verfügung. Die Inhalte basieren auf realen Vorlesungsmaterialien.
            </p>
          </div>

          <div class="faq-item">
            <h3 class="faq-question">🤝 Kann ich zur Plattform beitragen?</h3>
            <p class="faq-answer">
              Feedback und Verbesserungsvorschläge sind jederzeit willkommen! Kontaktieren Sie mich 
              gerne per E-Mail.
            </p>
          </div>

          <div class="faq-item">
            <h3 class="faq-question">📊 Werden meine Lerndaten gespeichert?</h3>
            <p class="faq-answer">
              Ihre Lerndaten werden ausschließlich lokal in Ihrem Browser gespeichert und niemals an 
              externe Server übertragen. Siehe auch unsere Datenschutzerklärung.
            </p>
          </div>

          <div class="faq-item">
            <h3 class="faq-question">🎓 Ist LearnSpace Industries ein echtes Unternehmen?</h3>
            <p class="faq-answer">
              Nein, LearnSpace Industries GmbH ist ein fiktives Musterunternehmen, das zur Veranschaulichung 
              praxisnaher Fallbeispiele dient.
            </p>
          </div>
        </div>

        <!-- CTA Box -->
        <div class="cta-box card">
          <div class="cta-icon">✉️</div>
          <h2 class="cta-title">Haben Sie Fragen oder Feedback?</h2>
          <p class="cta-text">
            Ich freue mich über jede Nachricht! Ob Fragen zu den Lerninhalten, technisches Feedback 
            oder Verbesserungsvorschläge – kontaktieren Sie mich gerne.
          </p>
          <a href="mailto:Ahmadbaz.Chedo@Student.HTW-Berlin.de" class="btn btn-primary">
            📧 E-Mail senden
          </a>
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
  name: 'KontaktPage',
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
.kontakt-page {
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
  max-width: 1000px;
  margin: 0 auto;
}

/* Contact Grid */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.contact-card {
  text-align: center;
  padding: 2rem;
  transition: all 0.3s ease;
  animation: fadeIn 0.6s ease-out;
}

.contact-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--glow-primary);
}

.contact-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.3));
}

.contact-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-primary-light);
}

.contact-name {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.contact-role {
  color: var(--color-text-muted);
  margin-bottom: 0.5rem;
}

.contact-address {
  color: var(--color-text-muted);
  line-height: 1.6;
}

.contact-link {
  display: inline-block;
  color: var(--color-primary-light);
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  word-break: break-all;
}

.contact-link:hover {
  color: var(--color-primary);
  text-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
}

.contact-info {
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

/* Info Card */
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

.info-text {
  color: var(--color-text-muted);
  line-height: 1.8;
  margin-bottom: 1rem;
}

/* FAQ */
.faq-item {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(99, 102, 241, 0.1);
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: rgba(99, 102, 241, 0.3);
  background: rgba(99, 102, 241, 0.08);
}

.faq-question {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--color-primary-light);
}

.faq-answer {
  color: var(--color-text-muted);
  line-height: 1.6;
  margin: 0;
}

/* CTA Box */
.cta-box {
  text-align: center;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%);
  border: 2px solid rgba(99, 102, 241, 0.3);
  margin-bottom: 3rem;
}

.cta-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 20px rgba(99, 102, 241, 0.4));
}

.cta-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.cta-text {
  font-size: 1.125rem;
  color: var(--color-text-muted);
  line-height: 1.8;
  max-width: 600px;
  margin: 0 auto 2rem;
}

.action-section {
  text-align: center;
  margin-top: 3rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  .cta-title {
    font-size: 1.5rem;
  }
}
</style>
