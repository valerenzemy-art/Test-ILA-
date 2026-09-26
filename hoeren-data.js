// hoeren-data.js — Contient toutes les données des exercices d'écoute (Aufgabe 1 à 7)

const TEMPLATE_HOEREN = [
  {teil:1, type:'kurz_uebersicht', time:300, label:'Kurzantwort: Übersicht ergänzen'},
  {teil:2, type:'kurz_begriff',    time:360, label:'Kurzantwort: Begriffspaar notieren'},
  {teil:3, type:'summary_hoer',    time:420, label:'Fehler in Zusammenfassung erkennen'},
  {teil:4, type:'match_personen',  time:360, label:'Aussagen Personen zuordnen'},
  {teil:5, type:'kurz_vortrag',    time:480, label:'Kurzantwort: Gliederungspunkte ergänzen'},
  {teil:6, type:'mc_hoeren',       time:420, label:'Multiple-Choice'},
  {teil:7, type:'laut_schrift',    time:360, label:'Laut- und Schriftbild abgleichen'}
];

const HOREN_MT1 = [
  { ...TEMPLATE_HOEREN[0],
    instructions:'Sie hören ein Gespräch zwischen zwei Studierenden und einer Bibliotheksmitarbeiterin zum Thema „Orientierung in der Bibliothek“. Ergänzen Sie beim Hören die fünf leeren Felder in der Tabelle. Schreiben Sie pro Feld maximal 2 Wörter.',
    title:'Aufgabe 1: Orientierung in der Bibliothek',
    mediaType: 'audio',
    mediaUrl: 'media/exercice_t1.mp3',
    questions:[
      { q: 'Nutzung der Schließfächer:', correct: 'Montag bis Sonntag' },
      { q: 'Erlaubte Getränke in der Bibliothek:', correct: 'Wasser' },
      { q: 'Maximale Ausleihfrist für Bücher:', correct: 'vier Wochen' },
      { q: 'Nicht ausleihbare Bücher:', correct: 'Präsenzbestand' },
      { q: 'Lernräume für Lerngruppen:', correct: '2. Stock' }
    ]
  },
  { ...TEMPLATE_HOEREN[1],
    instructions:'Sie hören eine Podiumsdiskussion zum Thema „Minimalismus“. Sie hören den Text einmal. Notieren Sie für jede Person auf der linken Seite, welches Ziel die Person nennt, und auf der rechten Seite das dazugehörige Vorgehen in Stichpunkten. Nach dem Hören haben Sie 3 Minuten Zeit, um Ihre Antworten zu kontrollieren.',
    title:'Aufgabe 2: Podiumsdiskussion zum Thema „Minimalismus“',
    mediaType: 'audio',
    mediaUrl: 'media/exercice_t2.mp3',
    personsData: [
      {
        name: 'Herr Schuster',
        fields: [
          { label: 'Übergeordnetes Ziel', placeholder: 'Ziel 1 eingeben...' },
          { label: 'Konkretes Vorgehen', placeholder: 'Ziel 2 eingeben...' }
        ]
      },
      {
        name: 'Frau Bach',
        fields: [
          { label: 'Übergeordnetes Ziel', placeholder: 'Ziel 3 eingeben...' },
          { label: 'Konkretes Vorgehen', placeholder: 'Ziel 4 eingeben...' }
        ]
      }
    ]
  },
  { ...TEMPLATE_HOEREN[2],
    instructions:'Sie hören einen Ausschnitt aus einer Vorlesung im Fach Entwicklungspsychologie zum Thema „Kindheitsamnesie“. Sie hören den Text einmal. Machen Sie sich beim Hören Notizen. Nach dem Hörtext sehen Sie eine schriftliche Zusammenfassung. Finden Sie die zwei Sätze in der Zusammenfassung, die falsche Informationen enthalten.',
    title:'Aufgabe 3: Kindheitsamnesie',
    mediaType: 'audio',
    mediaUrl: 'media/hoeren_t3.mp3',
    segments:[
      { text: 'Schon seit Langem ist wissenschaftlich bekannt, dass die frühesten Erinnerungen bei erwachsenen Menschen etwa im Alter von drei Jahren beginnen.', wrong: false },
      { text: 'Psychologen erklären dazu, dass sich Kinder im Alter von zwei bis drei Jahren kaum an vergangene Ereignisse erinnern.', wrong: false },
      { text: 'Doch anschließend passiert eine Veränderung im Gedächtnis.', wrong: false },
      { text: 'Forscherinnen untersuchten in einer Studie, wann die Erinnerungen von Kindern an ihre ersten Lebensjahre zu verschwinden beginnen.', wrong: false },
      { text: 'Sie stellten fest, dass dieses Phänomen im Alter von fünf bis neun Jahren immer stärker zu beobachten ist.', wrong: false },
      { text: 'Eine Erklärung dafür kann sein, dass im Gedächtnis von kleinen Kindern Erinnerungen in nichtsprachlicher Form abgespeichert werden.', wrong: false },
      { text: 'Mit zunehmendem Alter erfolgt das Abspeichern mehr in sprachlicher Form.', wrong: false },
      { text: 'Die sprachliche Entwicklung erschwert die Erinnerung an frühkindliche Erlebnisse.', wrong: false },
      { text: 'Erinnerungen an Ereignisse aus der frühen Kindheit können Kinder schlechter in nichtsprachlicher als in sprachlicher Form beschreiben.', wrong: true }
    ]
  },
  { ...TEMPLATE_HOEREN[3],
    instructions:'Sie sehen eine Podiumsdiskussion zum Thema „Fake Science“.\nSie sehen das Video einmal.\nNotieren Sie, zu wem die Aussagen 1-6 passen.\nFür jede Aussage gibt es genau eine richtige Lösung.\n\nNach dem Video haben Sie 45 Sekunden Zeit, um Ihre Antworten zu kontrollieren.\nSie haben jetzt 45 Sekunden Zeit, um die Aussagen zu lesen.',
    title:'Aufgabe 4: Fake Science',
    mediaType: 'video',
    mediaUrl: 'media/hoeren_t4.mov',
    pairs:[
      { 
        term: '1. Deutsche Forscher waren wohl nicht nur unschuldige Opfer von Scheinverlagen.', 
        options: ['nur Herr Krick [A]', 'nur Frau Dressel [B]', 'beide [C]', 'keiner [D]'], 
        correct: 0 
      },
      { 
        term: '2. Das Veröffentlichen in angeblichen Fachzeitschriften verschafft den Autoren einen persönlichen Vorteil.', 
        options: ['nur Herr Krick [A]', 'nur Frau Dressel [B]', 'beide [C]', 'keiner [D]'], 
        correct: 1 
      },
      { 
        term: '3. Durch Publikationen seriöser Forscher in Scheinverlagen profitieren Betrüger.', 
        options: ['nur Herr Krick [A]', 'nur Frau Dressel [B]', 'beide [C]', 'keiner [D]'], 
        correct: 2 
      },
      { 
        term: '4. Fake Science ist eine Gefahr für die wissenschaftliche Glaubwürdigkeit.', 
        options: ['nur Herr Krick [A]', 'nur Frau Dressel [B]', 'beide [C]', 'keiner [D]'], 
        correct: 2 
      },
      { 
        term: '5. Betroffene Wissenschaftler klären im Internet ihre Kollegen über Scheinverlage auf.', 
        options: ['nur Herr Krick [A]', 'nur Frau Dressel [B]', 'beide [C]', 'keiner [D]'], 
        correct: 0 
      },
      { 
        term: '6. Das Phänomen von Fake Science ist teilweise überwunden.', 
        options: ['nur Herr Krick [A]', 'nur Frau Dressel [B]', 'beide [C]', 'keiner [D]'], 
        correct: 3 
      }
    ]
  },
  { ...TEMPLATE_HOEREN[4],
    instructions:'Sie sehen einen Ausschnitt aus einer Vorlesung im Fach Neurowissenschaften zum Thema „Anosmie“.\nSie sehen das Video einmal.\nErgänzen Sie beim Hören die Gliederungspunkte in den Textfeldern in Stichpunkten.\n\nNach dem Video haben Sie 3 Minuten Zeit, um Ihre Antworten zu kontrollieren.\nSie haben jetzt 10 Sekunden Zeit, sich die Gliederungspunkte anzuschauen.',
    title:'Aufgabe 5: Anosmie',
    mediaType: 'video',
    mediaUrl: 'media/hoeren_t5.MP4',
    image: 'media/anatomie_nase.png',
    questions:[
      { q: 'Grund für Anosmie bei jungen Menschen:', correct: '' },
      { q: 'Riechzellen können sich nicht erneuern, wenn:', correct: '' },
      { q: 'Andere Form von Störung bei der Geruchswahrnehmung (nennen Sie ein Beispiel):', correct: '' },
      { q: 'Früher Hinweis auf Parkinson:', correct: '' }
    ]
  },
  { ...TEMPLATE_HOEREN[5],
    instructions:'Hören Sie das Gespräch und beantworten Sie die Fragen mit a, b, c oder d.',
    title:'Aufgabe 6: Universitäre Forschungsförderung',
    mediaType: 'audio',
    mediaUrl: 'media/hoeren_t6.mp3',
    questions:[
      { q:'Was kritisiert der Referent an den aktuellen Fördergeldern?', options:[
        'Die Verteilung erfolgt zu bürokratisch und langsam.',
        'Es wird zu wenig in geisteswissenschaftliche Projekte investiert.',
        'Die Laufzeiten der Projekte sind viel zu kurz bemessen.',
        'Private Unternehmen haben keinen Zugriff auf die Ergebnisse.'
      ], correct:2 }
    ]
  },
  { ...TEMPLATE_HOEREN[6],
    instructions:'Hören Sie den Text und vergleichen Sie das gesprochene Wort mit dem Schriftbild. Welche Abweichungen gibt es?',
    title:'Aufgabe 7: Nanotechnologie in der Medizin',
    mediaType: 'audio',
    mediaUrl: 'media/hoeren_t7.mp3',
    sentences:[
      {text:'Im gesprochenen Text wird von Nanopartikeln statt von Mikropartikeln berichtet.', wrong:false},
      {text:'Die genannte Jahreszahl im Audio weicht vom geschriebenen Text ab.', wrong:true},
      {text:'Der medizinische Fachbegrieff wurde im Skript korrekt wiedergegeben.', wrong:false},
      {text:'Im Audio wird eine höhere Erfolgsquote genannt als im gedruckten Text.', wrong:true}
    ]
  }
];

const HOREN_TESTS = [
  {id:1, title:'Modelltest 1 (Hörverstehen)', teile: HOREN_MT1}
];
