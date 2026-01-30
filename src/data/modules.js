export const modules = [
  {
    id: 'lean',
    title: 'Lean Management',
    icon: '🏭',
    description: 'Verschwendung vermeiden, Wertschöpfung maximieren',
    color: 'primary',
    slides: [
      {
        type: 'intro',
        title: 'Lean Management',
        subtitle: 'Methoden zur Optimierung von Produktionsprozessen',
        icon: '🏭'
      },
      {
        type: 'content',
        title: 'Übersicht der Prinzipien im Lean Management',
        content: `
          <h3>Die 5 Grundpfeiler des Lean Managements</h3>
          <p>Lean Management basiert auf <strong>5 zusammenhängenden Prinzipien</strong>, die wie Puzzleteile ineinandergreifen:</p>

          <div style="background: linear-gradient(135deg, #4c6ef5 0%, #5c7cfa 100%); padding: 30px; border-radius: 16px; margin: 25px 0; color: white;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 20px;">
              <div style="background: rgba(255, 255, 255, 0.15); padding: 20px; border-radius: 12px; border: 2px solid rgba(255, 255, 255, 0.3);">
                <div style="font-size: 2rem; margin-bottom: 10px;">⚖️</div>
                <h4 style="margin: 0 0 8px 0; font-size: 1.1rem;">1. Wert identifizieren</h4>
                <p style="margin: 0; font-size: 0.9rem; opacity: 0.95;">Fokus auf kundenrelevanten Nutzen</p>
              </div>
              <div style="background: rgba(255, 255, 255, 0.15); padding: 20px; border-radius: 12px; border: 2px solid rgba(255, 255, 255, 0.3);">
                <div style="font-size: 2rem; margin-bottom: 10px;">📊</div>
                <h4 style="margin: 0 0 8px 0; font-size: 1.1rem;">2. Wertstromanalyse</h4>
                <p style="margin: 0; font-size: 0.9rem; opacity: 0.95;">Visualisierung der Prozesskette</p>
              </div>
              <div style="background: rgba(255, 255, 255, 0.15); padding: 20px; border-radius: 12px; border: 2px solid rgba(255, 255, 255, 0.3);">
                <div style="font-size: 2rem, margin-bottom: 10px;">⚙️</div>
                <h4 style="margin: 0 0 8px 0; font-size: 1.1rem;">3. Prozessoptimierung</h4>
                <p style="margin: 0; font-size: 0.9rem; opacity: 0.95;">Eliminierung von Engpässen</p>
              </div>
              <div style="background: rgba(255, 255, 255, 0.15); padding: 20px; border-radius: 12px; border: 2px solid rgba(255, 255, 255, 0.3);">
                <div style="font-size: 2rem; margin-bottom: 10px;">⏱️</div>
                <h4 style="margin: 0 0 8px 0; font-size: 1.1rem;">4. Just-in-Time</h4>
                <p style="margin: 0; font-size: 0.9rem; opacity: 0.95;">Bedarfsorientierte Produktion</p>
              </div>
              <div style="background: rgba(255, 255, 255, 0.15); padding: 20px; border-radius: 12px; border: 2px solid rgba(255, 255, 255, 0.3);">
                <div style="font-size: 2rem, margin-bottom: 10px;">📈</div>
                <h4 style="margin: 0 0 8px 0; font-size: 1.1rem;">5. Kontinuierliche Verbesserung</h4>
                <p style="margin: 0; font-size: 0.9rem; opacity: 0.95;">Stetige Prozessanpassung</p>
              </div>
            </div>
          </div>

          <h3>Grundpfeiler des Lean Managements - Der Prozesskreislauf</h3>
          <div style="background: rgba(99, 102, 241, 0.05); padding: 25px; border-radius: 12px; margin: 20px 0;">
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 20px; flex-wrap: wrap;">
              <div style="flex: 1; min-width: 200px; text-align: center;">
                <div style="background: linear-gradient(135deg, #10b981, #34d399); color: white; padding: 20px; border-radius: 12px; margin-bottom: 10px;">
                  <h4 style="margin: 0 0 10px 0;">1️⃣ Schaffen von Werten</h4>
                  <p style="margin: 0; font-size: 0.9rem;">Eine konsequente Kundenorientierung eliminiert unnötige Prozesse</p>
                </div>
              </div>
              <div style="font-size: 2rem; color: #6366f1;">→</div>
              <div style="flex: 1; min-width: 200px; text-align: center;">
                <div style="background: linear-gradient(135deg, #3b82f6, #60a5fa); color: white; padding: 20px; border-radius: 12px; margin-bottom: 10px;">
                  <h4 style="margin: 0 0 10px 0;">2️⃣ Vermeidung von Verschwendung</h4>
                  <p style="margin: 0; font-size: 0.9rem;">Das Eliminieren von Verschwendung schafft Raum für Verbesserungen</p>
                </div>
              </div>
              <div style="font-size: 2rem; color: #6366f1;">→</div>
              <div style="flex: 1; min-width: 200px; text-align: center;">
                <div style="background: linear-gradient(135deg, #8b5cf6, #a78bfa); color: white; padding: 20px; border-radius: 12px; margin-bottom: 10px;">
                  <h4 style="margin: 0 0 10px 0;">3️⃣ Stetige Prozessoptimierung</h4>
                  <p style="margin: 0; font-size: 0.9rem;">Kontinuierliche Optimierung steigert den Kundenwert</p>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        type: 'content',
        title: '5S-System - Sauberkeit am Arbeitsplatz',
        content: `
          <h3>Die 5S-Methode für Sauberkeit am Arbeitsplatz</h3>
          <p>Das 5S-System ist eine japanische Methode zur <strong>systematischen Arbeitsplatzorganisation</strong> und bildet die Grundlage für effiziente Prozesse.</p>

          <div style="margin: 25px 0;">
            <div style="display: flex; align-items: center; gap: 15px; padding: 20px; background: rgba(99, 102, 241, 0.08); border-radius: 10px; margin-bottom: 15px; border-left: 4px solid #6366f1;">
              <div style="background: linear-gradient(135deg, #6366f1, #818cf8); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold;">1</div>
              <div style="flex: 1;">
                <h4 style="margin: 0 0 8px 0; color: #6366f1;">Seiri – Sortieren</h4>
                <p style="margin: 0; line-height: 1.6;"><em>Sortieren</em> – alles, was man nicht am Arbeitsplatz (z.B. Schreibtisch) benötigt, wird entfernt.</p>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 15px; padding: 20px; background: rgba(16, 185, 129, 0.08); border-radius: 10px; margin-bottom: 15px; border-left: 4px solid #10b981;">
              <div style="background: linear-gradient(135deg, #10b981, #34d399); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold;">2</div>
              <div style="flex: 1;">
                <h4 style="margin: 0 0 8px 0; color: #10b981;">Seiton – In Ordnung bringen / Systematisieren</h4>
                <p style="margin: 0; line-height: 1.6;"><em>Systematisieren</em> – das, was man braucht, wird nach Wichtigkeit sortiert.</p>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 15px; padding: 20px; background: rgba(59, 130, 246, 0.08); border-radius: 10px; margin-bottom: 15px; border-left: 4px solid #3b82f6;">
              <div style="background: linear-gradient(135deg, #3b82f6, #60a5fa); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold;">3</div>
              <div style="flex: 1;">
                <h4 style="margin: 0 0 8px 0; color: #3b82f6;">Seiso – Glänzen / Säubern</h4>
                <p style="margin: 0; line-height: 1.6;"><em>Säubern</em> – der gesamte Arbeitsplatz und alles, was sich darauf befindet, wird gesäubert.</p>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 15px; padding: 20px; background: rgba(245, 158, 11, 0.08); border-radius: 10px; margin-bottom: 15px; border-left: 4px solid #f59e0b;">
              <div style="background: linear-gradient(135deg, #f59e0b, #fbbf24); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold;">4</div>
              <div style="flex: 1;">
                <h4 style="margin: 0 0 8px 0; color: #f59e0b;">Seiketsu – Standardisieren Sie</h4>
                <p style="margin: 0; line-height: 1.6;"><em>Standardisieren</em> – die Schritte eins bis drei werden regelmäßig vor und nach der Arbeit angewendet.</p>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 15px; padding: 20px; background: rgba(139, 92, 246, 0.08); border-radius: 10px; border-left: 4px solid #8b5cf6;">
              <div style="background: linear-gradient(135deg, #8b5cf6, #a78bfa); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold;">5</div>
              <div style="flex: 1;">
                <h4 style="margin: 0 0 8px 0; color: #8b5cf6;">Shitsuke – Aufrechterhaltung / Selbstdisziplin</h4>
                <p style="margin: 0; line-height: 1.6;"><em>Selbstdisziplin</em> – alle Mitarbeiter wenden die vier Schritte regelmäßig an; das Management unterstützt sie dabei.</p>
              </div>
            </div>
          </div>

          <div style="background: linear-gradient(135deg, #10b981, #34d399); color: white; padding: 20px; border-radius: 12px; margin-top: 25px;">
            <h4 style="margin: 0 0 10px 0;">✅ Nutzen des 5S-Systems:</h4>
            <ul style="margin: 10px 0; padding-left: 20px; line-height: 1.8;">
              <li>Erhöhte Produktivität durch optimierte Arbeitsabläufe</li>
              <li>Reduzierte Suchzeiten und weniger Verschwendung</li>
              <li>Verbesserte Arbeitssicherheit und Qualität</li>
              <li>Basis für kontinuierliche Verbesserung (Kaizen)</li>
            </ul>
          </div>
        `
      },
      {
        type: 'content',
        title: 'Muda, Mura und Muri - Die 3 MU-Methode',
        content: `
          <h3>Die 3 MU des Lean Managements</h3>
          <p>Im Lean Management werden drei Arten von Problemen unterschieden, die alle mit "Mu" beginnen:</p>

          <div style="background: linear-gradient(135deg, #4c6ef5, #5c7cfa); padding: 30px; border-radius: 16px; margin: 25px 0; color: white;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
              <div style="background: rgba(255, 255, 255, 0.15); padding: 25px; border-radius: 12px; border: 2px solid rgba(255, 255, 255, 0.3);">
                <div style="font-size: 3rem; text-align: center; margin-bottom: 15px;">🗑️</div>
                <h3 style="margin: 0 0 15px 0; text-align: center; font-size: 1.5rem;">Muda</h3>
                <p style="margin: 0 0 10px 0; text-align: center; font-weight: 600;">7 Arten von Verschwendung</p>
              </div>
              <div style="background: rgba(255, 255, 255, 0.15); padding: 25px; border-radius: 12px; border: 2px solid rgba(255, 255, 255, 0.3);">
                <div style="font-size: 3rem; text-align: center; margin-bottom: 15px;">📊</div>
                <h3 style="margin: 0 0 15px 0; text-align: center; font-size: 1.5rem;">Mura</h3>
                <p style="margin: 0 0 10px 0; text-align: center; font-weight: 600;">Ungleichmäßige Auslastung</p>
              </div>
              <div style="background: rgba(255, 255, 255, 0.15); padding: 25px; border-radius: 12px; border: 2px solid rgba(255, 255, 255, 0.3);">
                <div style="font-size: 3rem; text-align: center; margin-bottom: 15px;">⚠️</div>
                <h3 style="margin: 0 0 15px 0; text-align: center; font-size: 1.5rem;">Muri</h3>
                <p style="margin: 0 0 10px 0; text-align: center; font-weight: 600;">Überlastung, ungesunde Tätigkeiten</p>
              </div>
            </div>
          </div>

          <h3>🗑️ Muda - Sieben Arten der Verschwendung im Betrieb</h3>
          <div style="background: rgba(220, 38, 38, 0.08); padding: 20px; border-radius: 12px; margin: 20px 0; border-left: 4px solid #dc2626;">
            <ol style="line-height: 2; margin: 0;">
              <li><strong>Transport:</strong> Unnötige Bewegungen von Material und Produkten</li>
              <li><strong>Bestände:</strong> Überschüssige Lagerbestände binden Kapital</li>
              <li><strong>Bewegung:</strong> Unnötige Bewegungen von Menschen im Arbeitsablauf</li>
              <li><strong>Warten:</strong> Stillstandszeiten und Wartezeiten in Prozessen</li>
              <li><strong>Überproduktion:</strong> Mehr produzieren als aktuell benötigt wird</li>
              <li><strong>Überbearbeitung / Überverarbeitung:</strong> Mehr Aufwand als vom Kunden gefordert</li>
              <li><strong>Fehler und Nacharbeit:</strong> Ausschuss und Korrekturen</li>
            </ol>
          </div>

          <h3>📊 Mura - Unregelmäßigkeiten und Ungleichmäßigkeiten</h3>
          <div style="background: rgba(245, 158, 11, 0.08); padding: 20px; border-radius: 12px; margin: 20px 0; border-left: 4px solid #f59e0b;">
            <p style="margin: 0 0 15px 0; line-height: 1.8;"><strong>Mura</strong> bezeichnet <strong>Unregelmäßigkeiten und Ungleichmäßigkeiten in Prozessen</strong>, wie z.B.:</p>
            <ul style="margin: 0; line-height: 1.8;">
              <li>Schwankende Produktionsmengen</li>
              <li>Ungleiche Arbeitslast zwischen Mitarbeitern oder Maschinen</li>
              <li>Unausgeglichene Materialflüsse</li>
            </ul>
            <p style="margin: 15px 0 0 0; line-height: 1.8;"><em>Ungleichmäßigkeiten (Mura) können zu Überlastungen (Muri) führen, die ihrerseits verschiedene Arten von Verschwendungen (Muda) erzeugen.</em></p>
          </div>

          <h3>⚠️ Muri - Überlastung von Menschen und Maschinen</h3>
          <div style="background: rgba(139, 92, 246, 0.08); padding: 20px; border-radius: 12px; margin: 20px 0; border-left: 4px solid #8b5cf6;">
            <p style="margin: 0 0 15px 0; line-height: 1.8;"><strong>Muri</strong> bedeutet <strong>Überlastung von Menschen und Maschinen</strong>, wie z.B.:</p>
            <ul style="margin: 0; line-height: 1.8;">
              <li>Zu hohe Arbeitsbelastung für Mitarbeiter</li>
              <li>Überbeanspruchung von Maschinen über ihre Kapazität hinaus</li>
              <li>Unrealistische Zeitvorgaben und Arbeitsziele</li>
              <li>Gesundheitsrisiken durch übermäßige Belastung</li>
            </ul>
          </div>

          <div style="background: linear-gradient(135deg, #10b981, #34d399); color: white; padding: 20px; border-radius: 12px; margin-top: 25px;">
            <h4 style="margin: 0 0 10px 0;">🔄 Zusammenhang der 3 MU:</h4>
            <p style="margin: 0; line-height: 1.8;">Ungleichmäßigkeiten (Mura) können zu Überlastungen (Muri) führen, die ihrerseits verschiedene Arten von Verschwendungen (Muda) erzeugen. Die Eliminierung aller drei Arten ist essentiell für ein effizientes Lean Management.</p>
          </div>
        `
      },
      {
        type: 'content',
        title: 'Zusammenfassung & Wiederholung',
        content: `
          <h3>📚 Zusammenfassung: Lean Management</h3>
          <p style="font-size: 1.1rem; margin-bottom: 25px;">Hier sind die wichtigsten Konzepte auf einen Blick - perfekt zur Vorbereitung auf das Quiz!</p>

          <div style="background: linear-gradient(135deg, #6366f1, #818cf8); color: white; padding: 25px; border-radius: 12px; margin: 20px 0;">
            <h4 style="margin: 0 0 15px 0; font-size: 1.3rem;">🎯 Hauptziel des Lean Management</h4>
            <p style="margin: 0; font-size: 1.1rem; line-height: 1.8;"><strong>Verschwendung minimieren</strong> und <strong>Wertschöpfung maximieren</strong> durch konsequente Kundenorientierung und kontinuierliche Verbesserung.</p>
          </div>

          <div style="background: rgba(99, 102, 241, 0.08); padding: 25px; border-radius: 12px; margin: 20px 0;">
            <h4 style="color: #6366f1; margin: 0 0 15px 0;">Die 5 Grundprinzipien des Lean Management</h4>
            <ol style="margin: 0; line-height: 2;">
              <li><strong>Wert identifizieren</strong> - Fokus auf kundenrelevanten Nutzen</li>
              <li><strong>Wertstromanalyse</strong> - Visualisierung der Prozesskette</li>
              <li><strong>Prozessoptimierung</strong> - Eliminierung von Engpässen</li>
              <li><strong>Just-in-Time (Pull-Prinzip)</strong> - Bedarfsorientierte Produktion</li>
              <li><strong>Kontinuierliche Verbesserung (Kaizen)</strong> - Stetige Prozessanpassung</li>
            </ol>
          </div>

          <div style="background: rgba(16, 185, 129, 0.08); padding: 25px; border-radius: 12px; margin: 20px 0;">
            <h4 style="color: #10b981; margin: 0 0 15px 0;">Die 5S-Methode (Arbeitsplatzorganisation)</h4>
            <ol style="margin: 0; line-height: 2;">
              <li><strong>Seiri</strong> - Sortieren (Unnötiges entfernen)</li>
              <li><strong>Seiton</strong> - Systematisieren (Nach Wichtigkeit ordnen)</li>
              <li><strong>Seiso</strong> - Säubern (Arbeitsplatz reinigen)</li>
              <li><strong>Seiketsu</strong> - Standardisieren (Einheitliche Regeln)</li>
              <li><strong>Shitsuke</strong> - Selbstdisziplin (Regeln einhalten)</li>
            </ol>
          </div>

          <div style="background: rgba(139, 92, 246, 0.08); padding: 25px; border-radius: 12px; margin: 20px 0;">
            <h4 style="color: #8b5cf6; margin: 0 0 15px 0;">Die 3 MU - Arten der Ineffizienz</h4>
            <ul style="margin: 0; line-height: 2;">
              <li><strong>Muda (Verschwendung)</strong> - 7 Arten: Überproduktion, Wartezeiten, Transport, Überbearbeitung, Bestände, Bewegung, Fehler</li>
              <li><strong>Mura (Ungleichmäßigkeit)</strong> - Schwankungen in Prozessen, unregelmäßige Arbeitsbelastung</li>
              <li><strong>Muri (Überlastung)</strong> - Überbeanspruchung von Menschen und Maschinen</li>
            </ul>
          </div>

          <div style="background: linear-gradient(135deg, #10b981, #34d399); color: white; padding: 20px; border-radius: 12px; margin: 20px 0;">
            <h4 style="margin: 0 0 10px 0;">💡 Merke für das Quiz:</h4>
            <ul style="margin: 0; line-height: 2;">
              <li>Pull-Prinzip = Produktion nur auf Kundenbestellung (nicht auf Vorrat)</li>
              <li>Kaizen = Kontinuierliche Verbesserung durch alle Mitarbeiter</li>
              <li>Die 3 MU hängen zusammen: Mura → Muri → Muda</li>
            </ul>
          </div>
        `
      }
    ],
    quiz: {
      questions: [
        {
          question: 'Was ist das Hauptziel von Lean Management?',
          answers: [
            'Maximierung der Produktion',
            'Verschwendung minimieren und Wertschöpfung maximieren',
            'Kosten senken durch Personalabbau',
            'Automatisierung aller Prozesse'
          ],
          correct: 1,
          explanation: 'Lean Management zielt darauf ab, Verschwendung (Muda) zu eliminieren und gleichzeitig die Wertschöpfung für den Kunden zu maximieren.'
        },
        {
          question: 'Welche der folgenden ist KEINE der 7 Arten der Verschwendung (Muda)?',
          answers: [
            'Überproduktion',
            'Wartezeiten',
            'Qualitätskontrolle',
            'Bestände'
          ],
          correct: 2,
          explanation: 'Qualitätskontrolle ist keine Verschwendung. Die 7 Mudas sind: Überproduktion, Wartezeiten, Transport, Überbearbeitung, Bestände, Bewegung und Fehler.'
        },
        {
          question: 'Was bedeutet das Pull-Prinzip im Lean Management?',
          answers: [
            'Maximale Auslastung der Maschinen',
            'Produktion auf Vorrat',
            'Produktion nur auf Kundenbestellung',
            'Schnellere Lieferzeiten'
          ],
          correct: 2,
          explanation: 'Das Pull-Prinzip bedeutet, dass nur produziert wird, wenn tatsächlich eine Kundenbestellung vorliegt - im Gegensatz zur Produktion auf Vorrat (Push-Prinzip).'
        },
        {
          question: 'Wofür steht das "S" in der 5S-Methode an dritter Stelle?',
          answers: [
            'Sortieren',
            'Systematisieren',
            'Säubern',
            'Standardisieren'
          ],
          correct: 2,
          explanation: 'Die 5S sind in der Reihenfolge: Seiri (Sortieren), Seiton (Systematisieren), Seiso (Säubern), Seiketsu (Standardisieren), Shitsuke (Selbstdisziplin).'
        },
        {
          question: 'Was bedeutet Kaizen?',
          answers: [
            'Automatisierung',
            'Kontinuierliche Verbesserung',
            'Kostenreduktion',
            'Qualitätskontrolle'
          ],
          correct: 1,
          explanation: 'Kaizen bedeutet "kontinuierliche Verbesserung" und ist ein zentrales Element des Lean Managements, bei dem alle Mitarbeiter einbezogen werden.'
        }
      ]
    }
  },
  {
    id: 'abc-xyz',
    title: 'ABC-XYZ Analyse',
    icon: '📊',
    description: 'Bewertung und Verteilung von Waren im Lager',
    color: 'secondary',
    slides: [
      {
        type: 'intro',
        title: 'ABC-XYZ Analyse',
        subtitle: 'Bewertung und Verteilung der Waren im Lager',
        icon: '📊'
      },
      {
        type: 'content',
        title: 'ABC-Analyse - Grundlagen',
        content: `
          <h3>Was ist die ABC-Analyse?</h3>
          <p>Die ABC-Analyse ist eine betriebswirtschaftliche Methode zur <strong>Bewertung und Klassifizierung von Waren im Lager</strong> nach ihrem Verbrauchswert.</p>

          <h3>Berechnung</h3>
          <p><strong>Wert × Verbrauch = Verbrauchswert für den Artikel</strong></p>
          <ol>
            <li>Summe der Verbrauchswerte der Artikel berechnen</li>
            <li>Anteil in % = Verbrauchswert einzelner Artikel / Summe der Verbrauchswerte</li>
            <li>Kumulierter Anteil = Anteil in % aufrechnen</li>
            <li>Einteilung in die Klassen A, B oder C</li>
          </ol>

          <h3>Klasseneinteilung</h3>
          <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
            <tr style="background: rgba(99, 102, 241, 0.1);">
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Klasse</th>
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Kumulierter Anteil</th>
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Bedeutung</th>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>A-Klasse</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">0 - 80%</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Hoher Wertanteil</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>B-Klasse</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">80 - 95%</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Mittlerer Wertanteil</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>C-Klasse</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">95 - 100%</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Niedriger Wertanteil</td>
            </tr>
          </table>

          <h3>Praxisbeispiel</h3>
          <table style="border-collapse: collapse; width: 100%; margin: 20px 0; font-size: 0.9em;">
            <tr style="background: rgba(99, 102, 241, 0.1);">
              <th style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">Nummer</th>
              <th style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">Wert</th>
              <th style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">Verbrauch</th>
              <th style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">Verbrauchswert</th>
              <th style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">Anteil %</th>
              <th style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">Kum. %</th>
              <th style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">Klasse</th>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">1007</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€136,20</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">4.000</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€544.800</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">43,63%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">43,63%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(99, 102, 241, 0.2);"><strong>A</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">1009</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€37,85</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">12.000</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€454.200</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">36,37%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">80,00%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(99, 102, 241, 0.2);"><strong>A</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">1004</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€17,50</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">6.000</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€105.000</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">8,41%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">88,41%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(16, 185, 129, 0.2);"><strong>B</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">1006</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€6,25</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">8.000</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€50.000</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">4,00%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">92,42%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(16, 185, 129, 0.2);"><strong>B</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">1001</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€3,25</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">10.000</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€32.500</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">2,60%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">95,02%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(16, 185, 129, 0.2);"><strong>B</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">1005</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€1,60</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">12.400</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€19.840</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">1,59%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">96,61%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(245, 158, 11, 0.2);"><strong>C</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">1008</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€2,10</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">6.800</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€14.280</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">1,14%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">97,75%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(245, 158, 11, 0.2);"><strong>C</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">1002</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€1,10</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">12.800</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€14.080</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">1,13%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">98,88%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(245, 158, 11, 0.2);"><strong>C</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">1003</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€1,75</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">8.000</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€14.000</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">1,12%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">100,00%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(245, 158, 11, 0.2);"><strong>C</strong></td>
            </tr>
            <tr style="background: rgba(99, 102, 241, 0.05); font-weight: bold;">
              <td colspan="3" style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">Gesamt</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€1.248.700</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">100%</td>
              <td colspan="2" style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);"></td>
            </tr>
          </table>
        `
      },
      {
        type: 'content',
        title: 'XYZ-Analyse - Grundlagen',
        content: `
          <h3>Was ist die XYZ-Analyse?</h3>
          <p>Die XYZ-Analyse klassifiziert Artikel nach der <strong>Regelmäßigkeit ihres Verbrauchs</strong> und der <strong>Vorhersagegenauigkeit</strong>.</p>

          <h3>Variationskoeffizient (VK)</h3>
          <p><strong>VK = Standardabweichung / Mittelwert</strong></p>
          <p>Der Variationskoeffizient ist ein Maß für die Schwankung des Verbrauchs.</p>

          <h3>Klasseneinteilung</h3>
          <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
            <tr style="background: rgba(99, 102, 241, 0.1);">
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Klasse</th>
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Variationskoeffizient</th>
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Verbrauch</th>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>X-Klasse</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">0 - 0,49</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Konstant (gut planbar)</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>Y-Klasse</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">0,5 - 0,99</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Schwankend (mittel planbar)</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>Z-Klasse</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">> 1</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Sporadisch (schlecht planbar)</td>
            </tr>
          </table>

          <h3>Berechnungsbeispiel</h3>
          <div style="background: rgba(99, 102, 241, 0.05); padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h4>Datensatz a) Mittelwert = 50, Standardabweichung = 10</h4>
            <p><strong>VK = 10/50 = 0,2</strong> → <span style="color: #6366f1; font-weight: bold;">Klasse X</span></p>

            <h4>Datensatz b) Mittelwert = 100, Standardabweichung = 20</h4>
            <p><strong>VK = 20/100 = 0,2</strong> → <span style="color: #6366f1; font-weight: bold;">Klasse X</span></p>

            <h4>Datensatz c) Mittelwert = 30, Standardabweichung = 35</h4>
            <p><strong>VK = 35/30 ≈ 1,167</strong> → <span style="color: #f59e0b; font-weight: bold;">Klasse Z</span></p>
          </div>
        `
      },
      {
        type: 'content',
        title: 'RSU-Begrifflichkeit',
        content: `
          <h3>Einteilung der Artikel nach Verbrauchsart</h3>
          <p>Zusätzlich zur ABC-XYZ-Analyse werden Artikel nach ihrer Verbrauchsart klassifiziert:</p>

          <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
            <tr style="background: rgba(99, 102, 241, 0.1);">
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Typ</th>
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Bezeichnung</th>
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Beschreibung</th>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>R-Artikel</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Regelmäßiger Verbrauch</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Artikel mit konstantem und gleichmäßigem Verbrauch</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>S-Artikel</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Saisonaler Verbrauch</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Artikel mit Schwankungen, die auf saisonale Nachfrage zurückzuführen sind</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>U-Artikel</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Unregelmäßiger Verbrauch</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Artikel, deren Verbrauch unvorhersehbar ist</td>
            </tr>
          </table>
        `
      },
      {
        type: 'content',
        title: 'ABC-XYZ Matrix & Beschaffungsstrategien',
        content: `
          <h3>Kombinierte ABC-XYZ Matrix</h3>
          <p>Die Kombination von ABC- und XYZ-Analyse ergibt eine <strong>9-Felder-Matrix</strong> für differenzierte Beschaffungsstrategien.</p>

          <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
            <tr style="background: rgba(99, 102, 241, 0.1);">
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Verbrauch ↓ / Wert →</th>
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">A (hoch)</th>
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">B (moderat)</th>
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">C (niedrig)</th>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>X (konstant)</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(16, 185, 129, 0.15);">
                <strong>Gut planbar</strong><br>
                Just-in-Time oder<br>Just-in-Sequence
              </td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(16, 185, 129, 0.15);">
                <strong>Gut planbar</strong><br>
                Just-in-Time oder<br>Just-in-Sequence
              </td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(16, 185, 129, 0.15);">
                <strong>Gut planbar</strong><br>
                Bestellung nach<br>Verbrauch
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>Y (schwankend)</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(245, 158, 11, 0.15);">
                <strong>Gut planbar</strong><br>
                Just-in-Time oder<br>Just-in-Sequence
              </td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(220, 38, 38, 0.15);">
                <strong>Schwer planbar</strong><br>
                Bestellung nach<br>Bedarf
              </td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(139, 92, 246, 0.15);">
                <strong>Keine Planung nötig</strong><br>
                Einmalige Bestellung<br>wenn notwendig
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>Z (sporadisch)</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(16, 185, 129, 0.15);">
                <strong>Gut planbar</strong><br>
                Just-in-Time oder<br>Just-in-Sequence
              </td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(220, 38, 38, 0.15);">
                <strong>Schwer planbar</strong><br>
                Bestellung nach<br>Bedarf
              </td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(139, 92, 246, 0.15);">
                <strong>Keine Planung nötig</strong><br>
                Einmalige Bestellung<br>wenn notwendig
              </td>
            </tr>
          </table>

          <h3>Strategien im Detail</h3>
          <ul>
            <li><strong>AX-Güter:</strong> Hoher Wert + konstanter Verbrauch → Just-in-Time/Just-in-Sequence, niedrige Lagerbestände</li>
            <li><strong>AY/AZ-Güter:</strong> Hoher Wert + schwankender/sporadischer Verbrauch → Genaue Bedarfsplanung erforderlich</li>
            <li><strong>BY/BZ-Güter:</strong> Mittlerer Wert + unregelmäßig → Bestellung nach tatsächlichem Bedarf</li>
            <li><strong>CX-Güter:</strong> Niedriger Wert + konstant → Bestellung nach Verbrauch, höhere Bestände möglich</li>
            <li><strong>CY/CZ-Güter:</strong> Niedriger Wert + unregelmäßig → Einmalige Bestellung bei Bedarf, minimale Lagerhaltung</li>
          </ul>
        `
      },
      {
        type: 'content',
        title: 'Zusammenfassung & Wiederholung',
        content: `
          <h3>📚 Zusammenfassung: ABC-XYZ Analyse</h3>
          <p style="font-size: 1.1rem; margin-bottom: 25px;">Alle wichtigen Formeln und Konzepte im Überblick - jetzt bist du bereit für das Quiz!</p>

          <div style="background: linear-gradient(135deg, #6366f1, #818cf8); color: white; padding: 25px; border-radius: 12px; margin: 20px 0;">
            <h4 style="margin: 0 0 15px 0; font-size: 1.3rem;">🎯 ABC-Analyse: Bewertung nach Wert</h4>
            <p style="margin: 0 0 10px 0; font-size: 1.1rem;"><strong>Formel: Verbrauchswert = Wert × Verbrauch</strong></p>
            <ul style="margin: 0; line-height: 2;">
              <li><strong>A-Klasse:</strong> 0-80% kumuliert → Hoher Wertanteil</li>
              <li><strong>B-Klasse:</strong> 80-95% kumuliert → Mittlerer Wertanteil</li>
              <li><strong>C-Klasse:</strong> 95-100% kumuliert → Niedriger Wertanteil</li>
            </ul>
          </div>

          <div style="background: linear-gradient(135deg, #10b981, #34d399); color: white; padding: 25px; border-radius: 12px; margin: 20px 0;">
            <h4 style="margin: 0 0 15px 0; font-size: 1.3rem;">📊 XYZ-Analyse: Bewertung nach Verbrauchsschwankung</h4>
            <p style="margin: 0 0 10px 0; font-size: 1.1rem;"><strong>Formel: VK = Standardabweichung / Mittelwert</strong></p>
            <ul style="margin: 0; line-height: 2;">
              <li><strong>X-Klasse:</strong> VK 0-0,49 → Konstanter Verbrauch (gut planbar)</li>
              <li><strong>Y-Klasse:</strong> VK 0,5-0,99 → Schwankender Verbrauch (mittel planbar)</li>
              <li><strong>Z-Klasse:</strong> VK > 1 → Sporadischer Verbrauch (schlecht planbar)</li>
            </ul>
          </div>

          <div style="background: rgba(99, 102, 241, 0.08); padding: 25px; border-radius: 12px; margin: 20px 0;">
            <h4 style="color: #6366f1; margin: 0 0 15px 0;">🔄 RSU-Klassifizierung (Verbrauchsart)</h4>
            <ul style="margin: 0; line-height: 2;">
              <li><strong>R-Artikel:</strong> Regelmäßiger Verbrauch (konstant & gleichmäßig)</li>
              <li><strong>S-Artikel:</strong> Saisonaler Verbrauch (vorhersehbare Schwankungen)</li>
              <li><strong>U-Artikel:</strong> Unregelmäßiger Verbrauch (unvorhersehbar)</li>
            </ul>
          </div>

          <div style="background: rgba(16, 185, 129, 0.08); padding: 25px; border-radius: 12px; margin: 20px 0;">
            <h4 style="color: #10b981; margin: 0 0 15px 0;">📦 ABC-XYZ Matrix - Beschaffungsstrategien</h4>
            <table style="border-collapse: collapse; width: 100%; font-size: 0.95rem;">
              <tr style="background: rgba(99, 102, 241, 0.1);">
                <th style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);"></th>
                <th style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">A</th>
                <th style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">B</th>
                <th style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">C</th>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>X</strong></td>
                <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">JIT/JIS</td>
                <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">JIT/JIS</td>
                <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">Nach Verbrauch</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>Y</strong></td>
                <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">JIT/JIS</td>
                <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">Nach Bedarf</td>
                <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">Einmalig</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>Z</strong></td>
                <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">JIT/JIS</td>
                <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">Nach Bedarf</td>
                <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">Einmalig</td>
              </tr>
            </table>
          </div>

          <div style="background: linear-gradient(135deg, #8b5cf6, #a78bfa); color: white; padding: 20px; border-radius: 12px; margin: 20px 0;">
            <h4 style="margin: 0 0 10px 0;">💡 Merke für das Quiz:</h4>
            <ul style="margin: 0; line-height: 2;">
              <li>ABC = Wert × Verbrauch (Wertanteil) → Kumulierte Prozente</li>
              <li>XYZ = Standardabw. / Mittelwert (Schwankung) → Variationskoeffizient</li>
              <li>AX = Beste Kombination für Just-in-Time/Just-in-Sequence</li>
              <li>CZ = Niedrigster Wert + unvorhersehbar = Einmalige Bestellung</li>
            </ul>
          </div>
        `
      }
    ],
    quiz: {
        questions: [
          {
            question: 'Wie wird der Verbrauchswert in der ABC-Analyse berechnet?',
            answers: [
              'Nur der Artikelwert',
              'Wert × Verbrauch',
              'Verbrauch - Wert',
              'Wert / Verbrauch'
            ],
            correct: 1,
            explanation: 'Der Verbrauchswert wird berechnet als: Wert × Verbrauch = Verbrauchswert für den Artikel.'
          },
          {
            question: 'Welcher kumulierte Anteil charakterisiert A-Artikel?',
            answers: [
              '0 - 50%',
              '0 - 80%',
              '80 - 95%',
              '95 - 100%'
            ],
            correct: 1,
            explanation: 'A-Artikel machen die ersten 0-80% des kumulierten Verbrauchswerts aus und haben damit den höchsten Wertanteil.'
          },
          {
            question: 'Wie berechnet man den Variationskoeffizienten (VK) in der XYZ-Analyse?',
            answers: [
              'Mittelwert / Standardabweichung',
              'Standardabweichung / Mittelwert',
              'Standardabweichung × Mittelwert',
              'Mittelwert - Standardabweichung'
            ],
            correct: 1,
            explanation: 'Der Variationskoeffizient wird berechnet als: VK = Standardabweichung / Mittelwert.'
          },
          {
            question: 'Ein Artikel hat VK = 0,3. In welche Klasse fällt er?',
            answers: [
              'X-Klasse (konstanter Verbrauch)',
              'Y-Klasse (schwankender Verbrauch)',
              'Z-Klasse (sporadischer Verbrauch)',
              'Kann nicht bestimmt werden'
            ],
            correct: 0,
            explanation: 'VK = 0,3 liegt im Bereich 0-0,49 und gehört damit zur X-Klasse (konstanter Verbrauch).'
          },
          {
            question: 'Welche Beschaffungsstrategie eignet sich für AX-Güter?',
            answers: [
              'Einmalige Bestellung wenn notwendig',
              'Just-in-Time oder Just-in-Sequence',
              'Bestellung nach Bedarf',
              'Hohe Lagerbestände vorhalten'
            ],
            correct: 1,
            explanation: 'AX-Güter (hoher Wert, konstanter Verbrauch) eignen sich perfekt für Just-in-Time oder Just-in-Sequence Beschaffung.'
          },
          {
            question: 'Was charakterisiert S-Artikel in der RSU-Klassifizierung?',
            answers: [
              'Regelmäßiger Verbrauch',
              'Saisonaler Verbrauch mit Schwankungen',
              'Unregelmäßiger Verbrauch',
              'Sporadischer Verbrauch'
            ],
            correct: 1,
            explanation: 'S-Artikel haben einen saisonalen Verbrauch mit Schwankungen, die auf saisonale Nachfrage zurückzuführen sind.'
          }
        ]
      }
    },
    {
      id: 'zielkonflikte',
      title: 'Zielkonflikte',
      icon: '⚖️',
      description: 'Konkurrierende Ziele in der Produktionsplanung',
      color: 'warning',
      slides: [
        {
          type: 'intro',
          title: 'Zielkonflikte',
          subtitle: 'Balance zwischen konkurrierenden Unternehmenszielen',
          icon: '⚖️'
        },
        {
          type: 'content',
          title: 'Was sind Zielkonflikte?',
          content: `
            <h3>Definition</h3>
            <p>Zielkonflikte entstehen, wenn die <strong>Verbesserung eines Ziels automatisch zur Verschlechterung eines anderen Ziels führt</strong>.</p>

            <h3>Arten von Zielbeziehungen</h3>
            <ul>
              <li><strong>Zielkomplementarität:</strong> Ziele unterstützen sich gegenseitig (win-win)</li>
              <li><strong>Zielneutralität:</strong> Ziele beeinflussen sich nicht</li>
              <li><strong>Zielkonflikt:</strong> Ziele stehen im Widerspruch (trade-off)</li>
            </ul>

            <h3>Typische Zielkonflikte in der Produktion</h3>
            <ol>
              <li><strong>Lieferzeit vs. Lagerkosten</strong>
                <ul>
                  <li>Kurze Lieferzeiten → Hohe Lagerbestände → Hohe Kosten</li>
                  <li>Niedrige Lagerbestände → Längere Lieferzeiten</li>
                </ul>
              </li>
              <li><strong>Qualität vs. Kosten</strong>
                <ul>
                  <li>Höhere Qualität → Höhere Produktionskosten</li>
                  <li>Kostenreduktion → Potenziell niedrigere Qualität</li>
                </ul>
              </li>
              <li><strong>Flexibilität vs. Auslastung</strong>
                <ul>
                  <li>Hohe Flexibilität → Kapazitätsreserven → Niedrigere Auslastung</li>
                  <li>Hohe Auslastung → Wenig Spielraum für Anpassungen</li>
                </ul>
              </li>
              <li><strong>Bestandskosten vs. Fehlmengenkosten</strong>
                <ul>
                  <li>Hohe Bestände → Hohe Lagerkosten aber keine Fehlmengen</li>
                  <li>Niedrige Bestände → Niedrige Lagerkosten aber Risiko von Fehlmengen</li>
                </ul>
              </li>
            </ol>
          `
        },
        {
          type: 'content',
          title: 'Beispiel: Maschinenbauer AG',
          content: `
            <h3>Szenario</h3>
            <p>Die Maschinenbauer AG steht vor einem klassischen Zielkonflikt zwischen <strong>Lieferbereitschaft</strong> und <strong>Kapitalbindung</strong>.</p>

            <h3>Ausgangssituation</h3>
            <ul>
              <li>Kunden erwarten Lieferung innerhalb von 2 Wochen</li>
              <li>Durchschnittliche Produktionszeit: 4 Wochen</li>
              <li>Aktueller Lagerbestand: 500.000 € an Fertigwaren</li>
              <li>Kapitalbindungskosten: 8% p.a.</li>
            </ul>

            <h3>Option A: Hohe Lieferbereitschaft</h3>
            <ul>
              <li>✅ Lagerbestand auf 1.200.000 € erhöhen</li>
              <li>✅ Lieferbereitschaft 98%</li>
              <li>❌ Kapitalbindungskosten: 96.000 € p.a.</li>
              <li>❌ Zusätzliche Lagerkosten: 15.000 € p.a.</li>
            </ul>

            <h3>Option B: Niedrige Kapitalbindung</h3>
            <ul>
              <li>✅ Lagerbestand auf 200.000 € reduzieren</li>
              <li>✅ Kapitalbindungskosten: 16.000 € p.a.</li>
              <li>❌ Lieferbereitschaft nur 75%</li>
              <li>❌ Potenzielle Auftragsverluste</li>
            </ul>

            <h3>Lösungsansätze</h3>
            <ol>
              <li><strong>Kompromiss:</strong> Mittlerer Lagerbestand mit 90% Lieferbereitschaft</li>
              <li><strong>Prozessoptimierung:</strong> Produktionszeit auf 2 Wochen reduzieren (Lean)</li>
              <li><strong>Segmentierung:</strong> A-Produkte auf Lager, C-Produkte auf Bestellung</li>
              <li><strong>Make-to-Order:</strong> Nur auf Kundenbestellung produzieren mit längerer Lieferzeit</li>
            </ol>
          `
        },
        {
          type: 'content',
          title: 'Zusammenfassung & Wiederholung',
          content: `
            <h3>📚 Zusammenfassung: Zielkonflikte</h3>
            <p style="font-size: 1.1rem; margin-bottom: 25px;">Die wichtigsten Konzepte zu Zielkonflikten kompakt zusammengefasst!</p>

            <div style="background: linear-gradient(135deg, #f59e0b, #fbbf24); color: white; padding: 25px; border-radius: 12px; margin: 20px 0;">
              <h4 style="margin: 0 0 15px 0; font-size: 1.3rem;">⚖️ Was ist ein Zielkonflikt?</h4>
              <p style="margin: 0; font-size: 1.1rem; line-height: 1.8;">Ein Zielkonflikt entsteht, wenn die <strong>Verbesserung eines Ziels automatisch zur Verschlechterung eines anderen Ziels führt</strong> (Trade-off).</p>
            </div>

            <div style="background: rgba(245, 158, 11, 0.08); padding: 25px; border-radius: 12px; margin: 20px 0;">
              <h4 style="color: #f59e0b; margin: 0 0 15px 0;">Arten von Zielbeziehungen</h4>
              <ul style="margin: 0; line-height: 2;">
                <li><strong>Zielkomplementarität:</strong> Ziele unterstützen sich gegenseitig (win-win)</li>
                <li><strong>Zielneutralität:</strong> Ziele beeinflussen sich nicht</li>
                <li><strong>Zielkonflikt:</strong> Ziele stehen im Widerspruch (trade-off) ⚠️</li>
              </ul>
            </div>

            <div style="background: rgba(99, 102, 241, 0.08); padding: 25px; border-radius: 12px; margin: 20px 0;">
              <h4 style="color: #6366f1; margin: 0 0 15px 0;">🔄 Die 4 typischen Zielkonflikte in der Produktion</h4>
              <ol style="margin: 0; line-height: 2;">
                <li><strong>Lieferzeit ↔ Lagerkosten</strong>
                  <ul style="margin-top: 5px;">
                    <li>Kurze Lieferzeit = Hohe Lagerbestände = Hohe Kosten</li>
                    <li>Niedrige Lagerkosten = Längere Lieferzeiten</li>
                  </ul>
                </li>
                <li><strong>Qualität ↔ Kosten</strong>
                  <ul style="margin-top: 5px;">
                    <li>Höhere Qualität = Höhere Produktionskosten</li>
                    <li>Kostenreduktion = Potenziell niedrigere Qualität</li>
                  </ul>
                </li>
                <li><strong>Flexibilität ↔ Auslastung</strong>
                  <ul style="margin-top: 5px;">
                    <li>Hohe Flexibilität = Kapazitätsreserven = Niedrigere Auslastung</li>
                    <li>Hohe Auslastung = Wenig Spielraum für Anpassungen</li>
                  </ul>
                </li>
                <li><strong>Bestandskosten ↔ Fehlmengenkosten</strong>
                  <ul style="margin-top: 5px;">
                    <li>Hohe Bestände = Hohe Lagerkosten, aber keine Fehlmengen</li>
                    <li>Niedrige Bestände = Niedrige Lagerkosten, aber Risiko von Fehlmengen</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div style="background: rgba(16, 185, 129, 0.08); padding: 25px; border-radius: 12px; margin: 20px 0;">
              <h4 style="color: #10b981; margin: 0 0 15px 0;">💡 Lösungsansätze bei Zielkonflikten</h4>
              <ul style="margin: 0; line-height: 2;">
                <li><strong>Kompromiss:</strong> Mittlere Position zwischen beiden Extremen</li>
                <li><strong>Prozessoptimierung:</strong> Lean Management zur Reduzierung des Konflikts</li>
                <li><strong>Segmentierung:</strong> ABC-Analyse für differenzierte Strategien (z.B. A-Produkte auf Lager, C-Produkte auf Bestellung)</li>
                <li><strong>Innovation:</strong> Neue Technologien oder Methoden zur Auflösung des Konflikts</li>
              </ul>
            </div>

            <div style="background: linear-gradient(135deg, #f59e0b, #fbbf24); color: white; padding: 20px; border-radius: 12px; margin: 20px 0;">
              <h4 style="margin: 0 0 10px 0;">💡 Merke für das Quiz:</h4>
              <ul style="margin: 0; line-height: 2;">
                <li>Zielkonflikt = Trade-off (eins verbessern = anderes verschlechtern)</li>
                <li>Klassischer Konflikt: Lieferbereitschaft vs. Kapitalbindung</li>
                <li>Lösungen: Kompromiss, Optimierung, Segmentierung</li>
                <li>ABC-Analyse hilft bei differenzierten Strategien</li>
              </ul>
            </div>
          `
        }
      ],
      quiz: {
        questions: [
          {
            question: 'Was ist ein Zielkonflikt?',
            answers: [
              'Wenn zwei Ziele sich gegenseitig unterstützen',
              'Wenn die Verbesserung eines Ziels zur Verschlechterung eines anderen führt',
              'Wenn Ziele sich nicht beeinflussen',
              'Wenn ein Ziel nicht erreicht werden kann'
            ],
            correct: 1,
            explanation: 'Ein Zielkonflikt liegt vor, wenn die Verbesserung eines Ziels automatisch zur Verschlechterung eines anderen Ziels führt (Trade-off).'
          },
          {
            question: 'Welcher typische Zielkonflikt besteht zwischen Lieferzeit und Lagerkosten?',
            answers: [
              'Es gibt keinen Konflikt',
              'Kurze Lieferzeiten erfordern hohe Lagerbestände und damit hohe Kosten',
              'Beide Ziele lassen sich gleichzeitig optimieren',
              'Lieferzeit und Lagerkosten sind unabhängig voneinander'
            ],
            correct: 1,
            explanation: 'Um kurze Lieferzeiten zu garantieren, benötigt man hohe Lagerbestände, was zu hohen Lagerkosten führt. Dies ist ein klassischer Zielkonflikt.'
          },
          {
            question: 'Im Beispiel der Maschinenbauer AG: Was ist der Hauptkonflikt?',
            answers: [
              'Qualität vs. Kosten',
              'Lieferbereitschaft vs. Kapitalbindung',
              'Flexibilität vs. Auslastung',
              'Produktion vs. Vertrieb'
            ],
            correct: 1,
            explanation: 'Der Hauptkonflikt besteht zwischen hoher Lieferbereitschaft (hohe Lagerbestände) und niedriger Kapitalbindung (niedrige Lagerbestände).'
          },
          {
            question: 'Welche ist KEINE sinnvolle Strategie zur Lösung des Zielkonflikts?',
            answers: [
              'Prozessoptimierung zur Verkürzung der Produktionszeit',
              'Kompromiss mit mittlerem Lagerbestand',
              'Segmentierung nach ABC-Analyse',
              'Alle Produkte auf maximale Lagermenge erhöhen'
            ],
            correct: 3,
            explanation: 'Alle Produkte maximal zu lagern löst den Zielkonflikt nicht, sondern verschlimmert nur die Kapitalbindung. Besser sind differenzierte Strategien oder Prozessverbesserungen.'
          },
          {
            question: 'Was bedeutet Zielkomplementarität?',
            answers: [
              'Ziele stehen im Widerspruch',
              'Ziele unterstützen sich gegenseitig',
              'Ziele sind unabhängig',
              'Ziele können nicht erreicht werden'
            ],
            correct: 1,
            explanation: 'Zielkomplementarität bedeutet, dass die Verfolgung eines Ziels gleichzeitig zur Erreichung eines anderen Ziels beiträgt (win-win Situation).'
          }
        ]
      }
    },
    {
      id: 'transport',
      title: 'Klassisches Transportmodell',
      icon: '🚚',
      description: 'Optimierung von Transportkosten in der Logistik',
      color: 'accent',
      slides: [
        {
          type: 'intro',
          title: 'Klassisches Transportmodell',
          subtitle: 'Optimale Transportwege und Kostenminimierung',
          icon: '🚚'
        },
        {
          type: 'content',
          title: 'Einführung in das Klassische Transportmodell',
          content: `
            <h3>Willkommen zur e-Learning-Einheit!</h3>
            <p>In dieser Kurseinheit wird Ihnen ein <strong>Überblick über das Klassische Transportmodell</strong> und den daraus resultierenden Nutzen mit Hilfe von Beispielen nähergebracht.</p>

            <div style="background: linear-gradient(135deg, #10b981, #34d399); color: white; padding: 25px; border-radius: 12px; margin: 25px 0;">
              <h4 style="margin: 0 0 15px 0;">✨ Diese Einheit ist animationsunterstützt!</h4>
              <p style="margin: 0; line-height: 1.8;">Sie lernen das Klassische Transportmodell durch interaktive Beispiele und schrittweise Erklärungen kennen.</p>
            </div>

            <h3>Was ist das Klassische Transportmodell (KTM)?</h3>
            <p>Das klassische Transportmodell lässt sich mithilfe von <strong>spezieller linearer Optimierungsverfahren</strong> lösen.</p>
            
            <p>In dieser Kurseinheit lernen Sie verschiedene <strong>Eröffnungsmethoden</strong> kennen, um zu einer zulässigen Basislösung zu gelangen (ohne diese zu optimieren!).</p>

            <div style="background: rgba(99, 102, 241, 0.08); padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #6366f1;">
              <h4 style="margin: 0 0 15px 0; color: #6366f1;">📊 Grafische Darstellung: Quellen → Senken</h4>
              <p style="margin: 0; line-height: 1.8;">Das Transportmodell beantwortet folgende Frage:</p>
              <p style="margin: 10px 0 0 0; font-weight: 600; color: #6366f1;">„Wie kann ich beim Transportieren von Bedarfen, ausgehend von Quellen zur Senke, Transportkosten minimieren?"</p>
            </div>

            <h3>Zwei Heuristiken zur Findung einer Ausgangslösung</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin: 25px 0;">
              <div style="background: linear-gradient(135deg, #6366f1, #818cf8); color: white; padding: 25px; border-radius: 12px; text-align: center;">
                <h4 style="margin: 0 0 15px 0; font-size: 1.3rem;">Nordwest-Ecken-Methode</h4>
                <p style="margin: 0; font-style: italic; line-height: 1.6;">„Fange im Nordwesten an und jage dort maximal viel durch!"</p>
              </div>
              <div style="background: linear-gradient(135deg, #10b981, #34d399); color: white; padding: 25px; border-radius: 12px; text-align: center;">
                <h4 style="margin: 0 0 15px 0; font-size: 1.3rem;">Matrix-Minimum-Methode</h4>
                <p style="margin: 0; font-style: italic; line-height: 1.6;">„Fange mit dem geringsten Wert an und jage dort maximal viel durch!"</p>
              </div>
            </div>

            <div style="background: rgba(245, 158, 11, 0.08); padding: 20px; border-radius: 12px; margin-top: 25px; border-left: 4px solid #f59e0b;">
            <p style="margin: 0; line-height: 1.8;"><strong>Hinweis:</strong> In der Datenverarbeitung wird häufig die <strong>Nord-West-Ecken-Methode</strong> bevorzugt, weil sie einfacher zu programmieren ist und die Zahl der benötigten Iterationen nicht ins Gewicht fällt.</p>
          </div>
        `
      },
      {
        type: 'content',
        title: 'Formeln und Legende des KTM',
        content: `
          <h3>Legende - Wichtige Begriffe</h3>
          <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
            <tr style="background: rgba(99, 102, 241, 0.1);">
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); text-align: left;">Symbol</th>
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); text-align: left;">Bedeutung</th>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>m</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Angebotsort (Quelle)</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>n</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Nachfrageort (Senke)</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>a</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Angebotsmenge</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>b</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Bedarfsmenge</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>c</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Transportkosten pro Einheit von Ort i zu Ort j</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>x</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Menge, die vom Ort i zum Ort j transportiert werden</td>
            </tr>
          </table>

          <h3>Zielfunktion - Minimieren</h3>
          <div style="background: linear-gradient(135deg, #6366f1, #818cf8); color: white; padding: 25px; border-radius: 12px; margin: 25px 0; text-align: center;">
            <p style="margin: 0 0 10px 0; font-size: 0.9rem;">Minimiere die Gesamttransportkosten:</p>
            <div style="font-size: 1.5rem; font-weight: 600; margin: 15px 0;">
              z = Σ<sub>i=1</sub><sup>m</sup> Σ<sub>j=1</sub><sup>n</sup> c<sub>ij</sub> × x<sub>ij</sub>
            </div>
          </div>

          <h3>Nebenbedingungen</h3>
          <div style="background: rgba(99, 102, 241, 0.08); padding: 20px; border-radius: 12px; margin: 20px 0;">
            <h4 style="margin: 0 0 15px 0;">1. Angebotserfüllung (alle Angebote müssen verteilt werden):</h4>
            <div style="font-size: 1.2rem; margin: 10px 0; text-align: center;">
              Σ<sub>j=1</sub><sup>n</sup> x<sub>ij</sub> = a<sub>i</sub> &nbsp;&nbsp; ∀i
            </div>
            
            <h4 style="margin: 20px 0 15px 0;">2. Bedarfserfüllung (alle Bedarfe müssen erfüllt werden):</h4>
            <div style="font-size: 1.2rem; margin: 10px 0; text-align: center;">
              Σ<sub>i=1</sub><sup>m</sup> x<sub>ij</sub> = b<sub>j</sub> &nbsp;&nbsp; ∀j
            </div>
          </div>

          <div style="background: linear-gradient(135deg, #10b981, #34d399); color: white; padding: 20px; border-radius: 12px; margin-top: 25px;">
            <h4 style="margin: 0 0 10px 0;">🎯 Ziel des Modells:</h4>
            <p style="margin: 0; line-height: 1.8;">Finde die optimale Transportmenge x<sub>ij</sub> von jedem Angebotsort i zu jedem Nachfrageort j, sodass die <strong>Gesamttransportkosten minimal</strong> sind und alle Angebote sowie Bedarfe erfüllt werden.</p>
          </div>
        `
      },
      {
        type: 'content',
        title: 'Nordwest-Ecken-Methode',
        content: `
          <h3>Nordwest-Ecken-Methode</h3>
          <p><em>„Fange im Nordwesten an und jage dort maximal viel durch!"</em></p>

          <div style="background: rgba(99, 102, 241, 0.08); padding: 20px; border-radius: 12px; margin: 20px 0; border-left: 4px solid #6366f1;">
            <h4 style="margin: 0 0 15px 0;">📌 Vorteile:</h4>
            <ul style="margin: 0; line-height: 1.8;">
              <li>Einfacher zu programmieren</li>
              <li>Die Anzahl der benötigten Iterationen fällt nicht ins Gewicht</li>
              <li>Schnelle Ermittlung einer zulässigen Basislösung</li>
            </ul>
          </div>

          <h3>Vorgehensweise:</h3>
          <ol style="line-height: 2;">
            <li>Beginne in der <strong>linken oberen Ecke</strong> (Nordwest-Ecke) der Transportmatrix</li>
            <li>Belege diese Zelle mit der <strong>maximal möglichen Menge</strong>:
              <ul>
                <li>Minimum aus Angebot der Zeile und Bedarf der Spalte</li>
              </ul>
            </li>
            <li>Streiche die erfüllte Zeile oder Spalte
              <ul>
                <li>Wenn Angebot erschöpft → Zeile streichen</li>
                <li>Wenn Bedarf gedeckt → Spalte streichen</li>
              </ul>
            </li>
            <li>Gehe zur nächsten verfügbaren Nordwest-Zelle</li>
            <li>Wiederhole Schritte 2-4 bis alle Angebote und Bedarfe erfüllt sind</li>
          </ol>

          <div style="background: linear-gradient(135deg, #6366f1, #818cf8); color: white; padding: 25px; border-radius: 12px; margin: 25px 0;">
            <h4 style="margin: 0 0 15px 0;">💡 Wichtig:</h4>
            <p style="margin: 0; line-height: 1.8;">Die Nordwest-Ecken-Methode berücksichtigt <strong>NICHT die Transportkosten</strong> bei der Erstellung der Basislösung. Sie liefert zwar eine zulässige Lösung, diese ist aber meistens nicht optimal und muss durch Optimierungsverfahren (z.B. Stepping-Stone, MODI) verbessert werden.</p>
          </div>
        `
      },
      {
        type: 'content',
        title: 'Matrix-Minimum-Methode',
        content: `
          <h3>Matrix-Minimum-Methode</h3>
          <p><em>„Fange mit dem geringsten Wert an und jage dort maximal viel durch!"</em></p>

          <div style="background: rgba(16, 185, 129, 0.08); padding: 20px; border-radius: 12px; margin: 20px 0; border-left: 4px solid #10b981;">
            <h4 style="margin: 0 0 15px 0;">📌 Vorteile:</h4>
            <ul style="margin: 0; line-height: 1.8;">
              <li>Berücksichtigt die <strong>Transportkosten</strong> bereits bei der Basislösung</li>
              <li>Führt meist zu einer besseren Ausgangslösung als die Nordwest-Ecken-Methode</li>
              <li>Weniger Optimierungsschritte erforderlich</li>
            </ul>
          </div>

          <h3>Vorgehensweise:</h3>
          <ol style="line-height: 2;">
            <li>Suche in der gesamten Transportmatrix die <strong>Zelle mit den geringsten Kosten</strong></li>
            <li>Belege diese Zelle mit der <strong>maximal möglichen Menge</strong>:
              <ul>
                <li>Minimum aus Angebot der Zeile und Bedarf der Spalte</li>
              </ul>
            </li>
            <li>Streiche die erfüllte Zeile oder Spalte
              <ul>
                <li>Wenn Angebot erschöpft → Zeile streichen</li>
                <li>Wenn Bedarf gedeckt → Spalte streichen</li>
              </ul>
            </li>
            <li>Suche in der verbleibenden Matrix erneut die Zelle mit den geringsten Kosten</li>
            <li>Wiederhole Schritte 2-4 bis alle Angebote und Bedarfe erfüllt sind</li>
          </ol>

          <div style="background: linear-gradient(135deg, #10b981, #34d399); color: white; padding: 25px; border-radius: 12px; margin: 25px 0;">
            <h4 style="margin: 0 0 15px 0;">💡 Wichtig:</h4>
            <p style="margin: 0; line-height: 1.8;">Die Matrix-Minimum-Methode liefert in der Regel eine <strong>bessere Ausgangslösung</strong> als die Nordwest-Ecken-Methode, da sie die Transportkosten bereits berücksichtigt. Dennoch ist auch diese Lösung meist noch nicht optimal und sollte optimiert werden.</p>
          </div>
        `
      },
      {
        type: 'content',
        title: 'Beispielaufgabe: Nordwest-Ecken-Methode',
        content: `
          <h3>Praxisbeispiel: Nordwest-Ecken-Methode</h3>
          <p>Die Kilometerangaben sollen die Strecken zwischen den Zielorten A und den Auslieferungsorten W darstellen.</p>
          <p><strong>Transportkostensatz: 0,2€ pro Kilometer</strong></p>

          <h3>Ausgangstabelle:</h3>
          <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
            <tr style="background: linear-gradient(135deg, #6366f1, #818cf8); color: white;">
              <th style="padding: 12px; border: 2px solid #6366f1;"></th>
              <th style="padding: 12px; border: 2px solid #6366f1;">A1</th>
              <th style="padding: 12px; border: 2px solid #6366f1;">A2</th>
              <th style="padding: 12px; border: 2px solid #6366f1;">Auslieferungs-<br>kapazität</th>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); font-weight: bold; background: rgba(99, 102, 241, 0.1);">W1</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); text-align: center;">150 km</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); text-align: center;">100 km</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); text-align: center; font-weight: bold;">200</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); font-weight: bold; background: rgba(99, 102, 241, 0.1);">W2</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); text-align: center;">200 km</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); text-align: center;">300 km</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); text-align: center; font-weight: bold;">200</td>
            </tr>
            <tr style="background: rgba(99, 102, 241, 0.05);">
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); font-weight: bold;">Lagerkapazität</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); text-align: center; font-weight: bold;">180</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); text-align: center; font-weight: bold;">200</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); text-align: center; font-weight: bold;">Σ = 380</td>
            </tr>
          </table>

          <h3>Lösung mit Nordwest-Ecken-Methode:</h3>
          <div style="background: rgba(99, 102, 241, 0.05); padding: 20px; border-radius: 12px; margin: 20px 0;">
            <ol style="line-height: 2; margin: 0;">
              <li><strong>Schritt 1:</strong> Beginne bei W1 → A1 (Nordwest-Ecke)
                <ul>
                  <li>Min(200, 180) = 180 → Belege W1→A1 mit 180</li>
                  <li>A1 ist jetzt voll (Spalte streichen)</li>
                  <li>W1 hat noch 20 übrig</li>
                </ul>
              </li>
              <li><strong>Schritt 2:</strong> Gehe zu W1 → A2
                <ul>
                  <li>Min(20, 200) = 20 → Belege W1→A2 mit 20</li>
                  <li>W1 ist jetzt erschöpft (Zeile streichen)</li>
                  <li>A2 braucht noch 180</li>
                </ul>
              </li>
              <li><strong>Schritt 3:</strong> Gehe zu W2 → A2
                <ul>
                  <li>Min(200, 180) = 180 → Belege W2→A2 mit 180</li>
                  <li>Fertig! Alle Angebote und Bedarfe erfüllt</li>
                </ul>
              </li>
            </ol>
          </div>

          <h3>Kostenberechnung:</h3>
          <div style="background: linear-gradient(135deg, #10b981, #34d399); color: white; padding: 20px; border-radius: 12px; margin: 20px 0;">
            <ul style="margin: 0; line-height: 2;">
              <li>W1 → A1: 180 × 150 km × 0,2€/km = <strong>5.400€</strong></li>
              <li>W1 → A2: 20 × 100 km × 0,2€/km = <strong>400€</strong></li>
              <li>W2 → A2: 180 × 300 km × 0,2€/km = <strong>10.800€</strong></li>
            </ul>
            <p style="margin: 20px 0 0 0; font-size: 1.3rem; font-weight: bold; text-align: center; border-top: 2px solid white; padding-top: 15px;">Gesamtkosten: 16.600€</p>
          </div>

          <p style="margin-top: 25px;"><strong>Hinweis:</strong> Diese Lösung ist zulässig, aber möglicherweise nicht optimal. Mit der Matrix-Minimum-Methode oder Optimierungsverfahren könnte eine kostengünstigere Lösung gefunden werden.</p>
        `
      },
      {
        type: 'content',
        title: 'Zusammenfassung & Wiederholung',
        content: `
          <h3>📚 Zusammenfassung: Klassisches Transportmodell</h3>
          <p style="font-size: 1.1rem; margin-bottom: 25px;">Alle wichtigen Formeln, Methoden und Schritte im Überblick!</p>

          <div style="background: linear-gradient(135deg, #6366f1, #818cf8); color: white; padding: 25px; border-radius: 12px; margin: 20px 0;">
            <h4 style="margin: 0 0 15px 0; font-size: 1.3rem;">🎯 Ziel des Klassischen Transportmodells</h4>
            <p style="margin: 0; font-size: 1.1rem; line-height: 1.8;"><strong>Minimierung der Gesamttransportkosten</strong> beim Transport von Gütern von mehreren Quellen (Angebotsorten) zu mehreren Senken (Nachfrageorten).</p>
          </div>

          <div style="background: rgba(99, 102, 241, 0.08); padding: 25px; border-radius: 12px; margin: 20px 0;">
            <h4 style="color: #6366f1; margin: 0 0 15px 0;">📝 Wichtige Begriffe & Symbole</h4>
            <ul style="margin: 0; line-height: 2;">
              <li><strong>m</strong> = Angebotsort (Quelle)</li>
              <li><strong>n</strong> = Nachfrageort (Senke)</li>
              <li><strong>a</strong> = Angebotsmenge</li>
              <li><strong>b</strong> = Bedarfsmenge</li>
              <li><strong>c<sub>ij</sub></strong> = Transportkosten pro Einheit von Ort i zu Ort j</li>
              <li><strong>x<sub>ij</sub></strong> = Menge, die von Ort i zu Ort j transportiert wird</li>
            </ul>
          </div>

          <div style="background: linear-gradient(135deg, #10b981, #34d399); color: white; padding: 25px; border-radius: 12px; margin: 20px 0;">
            <h4 style="margin: 0 0 15px 0; font-size: 1.2rem;">📊 Zielfunktion & Nebenbedingungen</h4>
            <p style="margin: 0 0 10px 0;"><strong>Zielfunktion (minimieren):</strong></p>
            <div style="background: rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 8px; text-align: center; font-size: 1.2rem; margin: 10px 0;">
              z = Σ Σ c<sub>ij</sub> × x<sub>ij</sub>
            </div>
            <p style="margin: 15px 0 5px 0;"><strong>Nebenbedingungen:</strong></p>
            <ul style="margin: 0; line-height: 2;">
              <li>Alle Angebote müssen verteilt werden: Σ x<sub>ij</sub> = a<sub>i</sub></li>
              <li>Alle Bedarfe müssen erfüllt werden: Σ x<sub>ij</sub> = b<sub>j</sub></li>
            </ul>
          </div>

          <div style="background: rgba(16, 185, 129, 0.08); padding: 25px; border-radius: 12px; margin: 20px 0;">
            <h4 style="color: #10b981; margin: 0 0 15px 0;">🔄 Zwei Eröffnungsmethoden im Vergleich</h4>
            
            <div style="background: rgba(99, 102, 241, 0.1); padding: 15px; border-radius: 8px; margin: 10px 0;">
              <h5 style="margin: 0 0 10px 0; color: #6366f1;">1. Nordwest-Ecken-Methode</h5>
              <p style="margin: 0 0 5px 0;"><em>„Fange im Nordwesten an und jage dort maximal viel durch!"</em></p>
              <ul style="margin: 5px 0 0 0; line-height: 1.8;">
                <li>✅ Einfach zu programmieren</li>
                <li>❌ Berücksichtigt NICHT die Transportkosten</li>
                <li>➡️ Meist nicht optimal, aber schnelle Basislösung</li>
              </ul>
            </div>

            <div style="background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 8px; margin: 10px 0;">
              <h5 style="margin: 0 0 10px 0; color: #10b981;">2. Matrix-Minimum-Methode</h5>
              <p style="margin: 0 0 5px 0;"><em>„Fange mit dem geringsten Wert an und jage dort maximal viel durch!"</em></p>
              <ul style="margin: 5px 0 0 0; line-height: 1.8;">
                <li>✅ Berücksichtigt Transportkosten bereits bei Basislösung</li>
                <li>✅ Meist bessere Ausgangslösung als NW-Methode</li>
                <li>➡️ Weniger Optimierungsschritte erforderlich</li>
              </ul>
            </div>
          </div>

          <div style="background: rgba(139, 92, 246, 0.08); padding: 25px; border-radius: 12px; margin: 20px 0;">
            <h4 style="color: #8b5cf6; margin: 0 0 15px 0;">📋 Vorgehensweise bei beiden Methoden</h4>
            <ol style="margin: 0; line-height: 2;">
              <li>Wähle eine Zelle (NW-Ecke oder minimale Kosten)</li>
              <li>Belege mit <strong>maximal möglicher Menge</strong>: min(Angebot, Bedarf)</li>
              <li>Streiche erfüllte Zeile oder Spalte</li>
              <li>Wiederhole bis alle Angebote und Bedarfe erfüllt sind</li>
              <li>Berechne Gesamtkosten: Σ (Menge × Kosten pro Strecke)</li>
            </ol>
          </div>

          <div style="background: linear-gradient(135deg, #f59e0b, #fbbf24); color: white; padding: 20px; border-radius: 12px; margin: 20px 0;">
            <h4 style="margin: 0 0 10px 0;">💡 Merke für das Quiz:</h4>
            <ul style="margin: 0; line-height: 2;">
              <li>Ziel: <strong>Minimierung der Transportkosten</strong></li>
              <li>Voraussetzung: <strong>Angebot = Nachfrage</strong> (ausgeglichenes Modell)</li>
              <li>NW-Ecke: Startet oben links, ignoriert Kosten</li>
              <li>Matrix-Minimum: Startet bei niedrigsten Kosten, meist bessere Lösung</li>
              <li>Beide liefern nur eine <strong>zulässige Basislösung</strong>, nicht zwingend optimal!</li>
            </ul>
          </div>
        `
      }
    ],
    quiz: {
      questions: [
        {
          question: 'Was ist das Ziel des klassischen Transportmodells?',
          answers: [
            'Maximierung der Transportgeschwindigkeit',
            'Minimierung der Gesamttransportkosten',
            'Maximierung der transportierten Menge',
            'Minimierung der Anzahl der Transporte'
          ],
          correct: 1,
          explanation: 'Das klassische Transportmodell zielt darauf ab, die Gesamttransportkosten bei der Verteilung von Gütern zu minimieren.'
        },
        {
          question: 'Welche Voraussetzung gilt für das klassische Transportmodell?',
          answers: [
            'Angebot muss größer als Nachfrage sein',
            'Nachfrage muss größer als Angebot sein',
            'Angebot muss gleich Nachfrage sein',
            'Angebot und Nachfrage sind unabhängig'
          ],
          correct: 2,
          explanation: 'Beim klassischen Transportmodell muss die Summe der Angebotskapazitäten gleich der Summe der Bedarfe sein (ausgeglichenes Modell).'
        },
        {
          question: 'Welche Methode dient zur Ermittlung einer guten Startlösung?',
          answers: [
            'Stepping-Stone-Methode',
            'MODI-Methode',
            "Vogel'sche Approximationsmethode (VAM)",
            'Simplex-Methode'
          ],
          correct: 2,
          explanation: "Die Vogel'sche Approximationsmethode (VAM) ist ein heuristisches Verfahren zur Ermittlung einer guten Startlösung für das Transportproblem."
        },
        {
          question: 'Wofür wird die Stepping-Stone-Methode verwendet?',
          answers: [
            'Zur Ermittlung der Startlösung',
            'Zur Verbesserung einer vorhandenen Lösung',
            'Zur Berechnung der Transportkosten',
            'Zur Prüfung der Kapazitäten'
          ],
          correct: 1,
          explanation: 'Die Stepping-Stone-Methode dient zur schrittweisen Verbesserung einer bereits vorhandenen Basislösung bis zum Optimum.'
        },
        {
          question: 'Im Getränke-Beispiel: Wie hoch sind die optimalen Gesamtkosten?',
          answers: [
            '1.500€',
            '1.850€',
            '2.000€',
            '2.200€'
          ],
          correct: 1,
          explanation: 'Die optimalen Gesamtkosten betragen 1.850€ (100t×4€ + 100t×6€ + 50t×3€ + 100t×7€).'
        }
      ]
    }
  }
]

export default modules
