<template>
  <div class="datenschutz-page">
    <div class="container">
      <!-- Hero Section -->
      <div class="page-hero">
        <div class="badge">🔒 DATENSCHUTZ</div>
        <h1 class="page-title gradient-text">Datenschutzerklärung</h1>
        <p class="page-subtitle">Informationen zur Datenverarbeitung</p>
      </div>

      <!-- Content -->
      <div class="content-section">
        <div class="info-card card">
          <h2 class="section-title">1. Datenschutz auf einen Blick</h2>
          
          <h3 class="subsection-title">Allgemeine Hinweise</h3>
          <p class="info-text">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
            Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit 
            denen Sie persönlich identifiziert werden können.
          </p>

          <h3 class="subsection-title">Datenerfassung auf dieser Website</h3>
          <p class="info-text">
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
            können Sie dem Impressum dieser Website entnehmen.
          </p>

          <p class="info-text">
            <strong>Wie erfassen wir Ihre Daten?</strong><br>
            Diese E-Learning-Plattform ist ein Studentenprojekt und erfasst <strong>keine personenbezogenen 
            Daten</strong>. Es werden keine Cookies gesetzt und keine Tracking-Tools verwendet. Alle Daten 
            werden lokal im Browser gespeichert und verlassen Ihr Gerät nicht.
          </p>
        </div>

        <div class="info-card card">
          <h2 class="section-title">2. Hosting und Server</h2>
          <p class="info-text">
            Diese Website wird lokal entwickelt und gehostet. Es erfolgt keine Datenübertragung an externe 
            Server. Sollte die Plattform zukünftig online gestellt werden, erfolgt eine Aktualisierung dieser 
            Datenschutzerklärung.
          </p>
        </div>

        <div class="info-card card">
          <h2 class="section-title">3. Allgemeine Hinweise und Pflichtinformationen</h2>
          
          <h3 class="subsection-title">Datenschutz</h3>
          <p class="info-text">
            Der Betreiber dieser Seiten nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Diese Plattform 
            wurde zu Bildungszwecken entwickelt und verarbeitet bewusst keine personenbezogenen Daten.
          </p>

          <h3 class="subsection-title">Hinweis zur verantwortlichen Stelle</h3>
          <p class="info-text">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br><br>
            <strong>Ahmadbaz Chedo</strong><br>
            Hochschule für Technik und Wirtschaft Berlin<br>
            E-Mail: Ahmadbaz.Chedo@Student.HTW-Berlin.de
          </p>
        </div>

        <div class="info-card card">
          <h2 class="section-title">4. Datenerfassung auf dieser Website</h2>
          
          <h3 class="subsection-title">Lokale Speicherung (LocalStorage)</h3>
          <p class="info-text">
            Diese Plattform nutzt die LocalStorage-Funktion Ihres Browsers, um Ihren Lernfortschritt zu 
            speichern. Diese Daten werden ausschließlich lokal auf Ihrem Gerät gespeichert und niemals 
            an externe Server übertragen. Sie können diese Daten jederzeit über die Browser-Einstellungen 
            löschen.
          </p>

          <h3 class="subsection-title">Keine Cookies</h3>
          <p class="info-text">
            Diese Website verwendet <strong>keine Cookies</strong>.
          </p>

          <h3 class="subsection-title">Kein Tracking</h3>
          <p class="info-text">
            Diese Website verwendet <strong>keine Analyse-Tools</strong> wie Google Analytics oder ähnliche 
            Tracking-Dienste.
          </p>
        </div>

        <div class="info-card card">
          <h2 class="section-title">5. Ihre Rechte</h2>
          <p class="info-text">
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen 
            Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung. Da diese Plattform jedoch 
            keine personenbezogenen Daten erfasst oder speichert, gibt es in diesem Fall keine zu verwaltenden 
            Daten.
          </p>
        </div>

        <div class="info-card card">
          <h2 class="section-title">6. Externe Links</h2>
          <p class="info-text">
            Diese Website kann Links zu externen Websites enthalten. Für die Datenschutzpraktiken dieser 
            externen Websites sind deren jeweilige Betreiber verantwortlich. Wir empfehlen Ihnen, die 
            Datenschutzerklärungen der verlinkten Websites zu lesen.
          </p>
        </div>

        <div class="info-card card">
          <h2 class="section-title">7. Bildungszweck</h2>
          <div class="highlight-box">
            <div class="highlight-icon">🎓</div>
            <div class="highlight-content">
              <h3 class="highlight-title">Wichtiger Hinweis</h3>
              <p class="info-text">
                Diese E-Learning-Plattform wurde ausschließlich zu Bildungszwecken im Rahmen eines Studiums 
                an der HTW Berlin erstellt. Sie dient der Demonstration von Konzepten der Produktionswirtschaft 
                und Logistik. Das dargestellte Unternehmen "LearnSpace Industries GmbH" ist fiktiv.
              </p>
            </div>
          </div>
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
  name: 'DatenschutzPage',
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
.datenschutz-page {
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

.info-text {
  color: var(--color-text-muted);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.highlight-box {
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%);
  border-radius: 16px;
  border: 2px solid rgba(99, 102, 241, 0.3);
  margin-top: 1.5rem;
}

.highlight-icon {
  font-size: 3rem;
  flex-shrink: 0;
}

.highlight-content {
  flex: 1;
}

.highlight-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-primary-light);
}

.action-section {
  text-align: center;
  margin-top: 3rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .highlight-box {
    flex-direction: column;
    text-align: center;
  }
}
</style>
