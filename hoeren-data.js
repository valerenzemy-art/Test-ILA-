//  hoeren-data.js — Contient toutes les données des exercices d'écoute (Aufgabe 1 à 7)
// Solutions alignées sur le corrigé officiel.

const TEMPLATE_HOEREN = [
  {teil:1, type:'kurz_uebersicht', time:300, label:'Kurzantwort: Übersicht ergänzen'},
  {teil:2, type:'kurz_begriff',    time:360, label:'Kurzantwort: Begriffspaar notieren'},
  {teil:3, type:'summary_hoer',    time:420, label:'Fehler in Zusammenfassung erkennen'},
  {teil:4, type:'match_personen',  time:360, label:'Aussagen Personen zuordnen'},
  {teil:5, type:'kurz_vortrag',    time:480, label:'Kurzantwort: Gliederungspunkte ergänzen'},
  {teil:6, type:'mc_hoeren',       time:480, label:'Multiple-Choice'}, 
  {teil:7, type:'laut_schrift',    time:20,  label:'Laut- und Schriftbild abgleichen'}
];

// Aufgabe 7 : mots séparés par des espaces. Un mot précédé de § = mot qui diffère du texte audio.
const WIKINGER_TEXT =
  "Um das Jahr 986 kamen die ersten Wikinger von Island zur Südspitze Grönlands. " +
  "In der folgenden §Zeit entstand dort eine blühende Kolonie aus kleinen Siedlungen. " +
  "Auf dem Höhepunkt der Entwicklung erreichte die Bevölkerung etwa 6000 Einwohner. " +
  "Doch gegen Ende des Mittelalters ging es mit der Wikinger-Kolonie bergab. " +
  "Etwa 500 Jahre nach §ihrer Gründung verschwanden die letzten europäischen Einwohner von der entlegenen Insel. " +
  "Man geht bisher davon aus, dass vor allem eine Verschlechterung des Klimas in der Region zum Untergang §geführt hat. " +
  "Eine neue Studie verweist nun auf einen weiteren Aspekt: Die Jagd auf Walrosse war eine wichtige Lebensgrundlage. " +
  "Davon gab es jedoch im Laufe der Jahrhunderte immer §weniger, sodass die Siedlungen nicht mehr wirtschaftlich waren.";

const HOREN_MT1 = [
  { ...TEMPLATE_HOEREN[0],
    instructions:'Sie hören ein Gespräch zwischen zwei Studierenden und einer Bibliotheksmitarbeiterin zum Thema „Orientierung in der Bibliothek“. Ergänzen Sie beim Hören die fünf leeren Felder in der Tabelle. Schreiben Sie pro Feld maximal 2 Wörter.',
    title:'Aufgabe 1: Orientierung in der Bibliothek',
    mediaType: 'audio',
    mediaUrl: 'media/exercice_t1.mp3',
    questions:[
      { q: 'Nutzung der Schließfächer:', correct: 'bis 10 Uhr abends / bis 22 Uhr / mit 2-Euro-Münze / nicht über Nacht' },
      { q: 'Erlaubte Getränke in der Bibliothek:', correct: 'Wasser (in Flaschen)' },
      { q: 'Maximale Ausleihfrist für Bücher:', correct: '4 Wochen / 4 Wochen plus 2 x 4 Wochen / 12 Wochen' },
      { q: 'Nicht ausleihbare Bücher:', correct: 'Lexika' },
      { q: 'Lernräume für Lerngruppen:', correct: 'Bereich G' }
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
    mediaUrl: 'media/exercice_t3.mp3',
    segments:[
      { text: 'Schon seit Langem ist wissenschaftlich bekannt, dass die frühesten Erinnerungen bei erwachsenen Menschen etwa im Alter von drei Jahren beginnen.', wrong: false },
      { text: 'Psychologen erklären dazu, dass sich Kinder im Alter von zwei bis drei Jahren kaum an vergangene Ereignisse erinnern.', wrong: true },
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
      { term: '1. Deutsche Forscher waren wohl nicht nur unschuldige Opfer von Scheinverlagen.',
        options: ['nur Herr Krick [A]', 'nur Frau Dressel [B]', 'beide [C]', 'keiner [D]'], correct: 0 },
      { term: '2. Das Veröffentlichen in angeblichen Fachzeitschriften verschafft den Autoren einen persönlichen Vorteil.',
        options: ['nur Herr Krick [A]', 'nur Frau Dressel [B]', 'beide [C]', 'keiner [D]'], correct: 2 },
      { term: '3. Durch Publikationen seriöser Forscher in Scheinverlagen profitieren Betrüger.',
        options: ['nur Herr Krick [A]', 'nur Frau Dressel [B]', 'beide [C]', 'keiner [D]'], correct: 2 },
      { term: '4. Fake Science ist eine Gefahr für die wissenschaftliche Glaubwürdigkeit.',
        options: ['nur Herr Krick [A]', 'nur Frau Dressel [B]', 'beide [C]', 'keiner [D]'], correct: 1 },
      { term: '5. Betroffene Wissenschaftler klären im Internet ihre Kollegen über Scheinverlagen auf.',
        options: ['nur Herr Krick [A]', 'nur Frau Dressel [B]', 'beide [C]', 'keiner [D]'], correct: 3 },
      { term: '6. Das Phänomen von Fake Science ist teilweise überwunden.',
        options: ['nur Herr Krick [A]', 'nur Frau Dressel [B]', 'beide [C]', 'keiner [D]'], correct: 3 }
    ]
  },
  { ...TEMPLATE_HOEREN[4],
    instructions:'Sie sehen einen Ausschnitt aus einer Vorlesung im Fach Neurowissenschaften zum Thema „Anosmie“.\nSie sehen das Video einmal.\nErgänzen Sie beim Hören die Gliederungspunkte in den Textfeldern in Stichpunkten.\n\nNach dem Video haben Sie 3 Minuten Zeit, um Ihre Antworten zu kontrollieren.\nSie haben jetzt 10 Sekunden Zeit, sich die Gliederungspunkte anzuschauen.',
    title:'Aufgabe 5: Anosmie',
    mediaType: 'video',
    mediaUrl: 'media/hoeren_t5.MP4',
    image: 'media/anatomie_nase.png',
    questions:[
      { q: 'Grund für Anosmie bei jungen Menschen:', correct: 'Hindernisse in der Nase blockieren Duftstoffe / Duftstoffe gelangen nicht zu Riechzellen / Schnupfen / Rauchen' },
      { q: 'Riechzellen können sich nicht erneuern, wenn:', correct: '(Schnupfen)viren Stammzellen töten / Stammzellen tot sind' },
      { q: 'Andere Form von Störung bei der Geruchswahrnehmung (nennen Sie ein Beispiel):', correct: 'Überempfindlichkeit gegenüber Duftstoffen / veränderte Wahrnehmung von Duftreizen' },
      { q: 'Früher Hinweis auf Parkinson:', correct: 'reduziertes Riechvermögen' }
    ]
  },
  { ...TEMPLATE_HOEREN[5],
    instructions:'Sie hören einen Ausschnitt aus einem Vortrag zum Thema „Glück“.\nSie hören den Text einmal.\nBeantworten Sie die Fragen 1-5.\nEntscheiden Sie, welche Lösung passt.\nFür jede Frage gibt es genau eine richtige Lösung.\n\nNach dem Hören haben Sie 1 Minute und 30 Sekunden Zeit, um Ihre Antworten zu kontrollieren.\nSie haben jetzt 1 Minute und 30 Sekunden Zeit, um die Fragen zu lesen.',
    title:'Aufgabe 6: Glück',
    mediaType: 'audio',
    mediaUrl: 'media/exercice_t6.mp3',
    questions:[
      { q: '1. Der Sprecher führt den Begriff „Glück“ ein, indem er',
        options: ['ihn von einem anderen Begriff abgrenzt.', 'alltägliche Situationen beschreibt.', 'den Begriff definiert.', 'eine persönliche Anekdote erzählt.'],
        correct: 2 },
      { q: '2. Langfristige Grundzufriedenheit im Leben',
        options: ['hängt nicht von kurzfristigen Glückserlebnissen ab.', 'ist die Folge vieler kleiner glücklicher Erlebnisse.', 'ist wichtiger als kleine glückliche Momente.', 'beeinflusst die Fähigkeit, glückliche Augenblicke zu erleben.'],
        correct: 3 },
      { q: '3. Eine Verbindung zwischen Geld und Glück',
        options: ['existiert bis zu einem bestimmten Einkommen.', 'ist wissenschaftlich nicht feststellbar.', 'lässt sich vor allem in reichen Ländern nachweisen.', 'sieht man ab einem Jahresverdienst von 20.000 Dollar.'],
        correct: 0 },
      { q: '4. Arbeitslosen fehlt vor allem',
        options: ['das Eingebundensein in ein berufliches Umfeld.', 'der durch Arbeit erlangte soziale Status.', 'der zwischenmenschliche Kontakt zu den Kollegen.', 'eine sinnvolle tägliche Aufgabe.'],
        correct: 1 },
      { q: '5. Das Hauptziel des Vortrags besteht darin,',
        options: ['die Suche der Menschen nach Glück zu hinterfragen.', 'eine Anleitung für ein glücklicheres Leben zu geben.', 'über das Phänomen „Glück“ zu informieren.', 'vor einer falschen Idee von Glück zu warnen.'],
        correct: 2 }
    ]
  },
  { ...TEMPLATE_HOEREN[6],
    instructions: 'Sie hören einen Text zum Thema „Wikinger in Grönland“, den Sie gleichzeitig mitlesen müssen. Hörtext und schriftlicher Text sind nicht identisch. Vier Wörter sind unterschiedlich.\nSie hören den Text einmal.\nFinden Sie beim Hören die vier Wörter, die nicht dem Hörtext entsprechen.\n\nNach dem Hören haben Sie 20 Sekunden Zeit, um Ihre Antworten zu kontrollieren.',
    title: 'Aufgabe 7: Wikinger in Grönland',
    mediaType: 'audio',
    mediaUrl: 'media/exercice_t7.mp3',
    words: WIKINGER_TEXT.split(' ').map(t =>
      t.charAt(0) === '§' ? { text: t.slice(1), isWrong: true } : { text: t, isWrong: false }
    )
  }
];

const HOREN_MT2 = [
  { ...TEMPLATE_HOEREN[0],
    instructions: 'Sie hören ein Gespräch zwischen den Studierenden Sandra und Julius, die sich zufällig vor der Tür zu Professor Dr. Kruses Büro treffen. Sie hören das Gespräch einmal. Ergänzen Sie beim Hören die fünf leeren Felder in der Tabelle. Schreiben Sie pro Feld maximal 2 Wörter.',
    title: 'Aufgabe 1: Gespräch vor Professor Dr. Kruses Büro',
    mediaType: 'audio',
    mediaUrl: 'media/mt2_exercice_t1.mp3',
    consigneUrl: 'media/mt2_consigne_t1.mp3',
    questions: [
      { q: 'Sandra arbeitet bei Professor Dr. Kruse an (1):', correct: 'Doktorarbeit / Dissertation' },
      { q: 'Dienstag Vormittag - Vorlesung in (2):', correct: 'Soziologie' },
      { q: 'Dienstag Nachmittag - Problem (3):', correct: 'Drucker kaputt / Drucker defekt' },
      { q: 'Donnerstag Nachmittag - Klausur in (4):', correct: 'Statistik' },
      { q: 'Freitag Vormittag - Kurs in (5):', correct: 'Statistik' }
    ]
  }
];
  { ...TEMPLATE_HOEREN[1],
    instructions: 'Das Gespräch hören Sie einmal.\nNotieren Sie auf der linken Seite für jede Person, welche Maßnahme diese Person vorschlägt, und auf der rechten Seite die dazugehörige Folge in Stichpunkten.\n\nDanach haben Sie 3 Minuten Zeit, um Ihre Antworten zu überprüfen.',
    title: 'Aufgabe: Herr Klöbner und Frau Wagner',
    mediaType: 'audio',
    mediaUrl: 'media/mt2_exercice_t2.mp3', // Ajustez le nom du fichier audio si besoin
    consigneUrl: 'media/mt2_consigne_t2.mp3',
    personsData: [
      {
        name: 'Herr Klöbner',
        fields: [
          { label: 'Maßnahme', placeholder: 'Maßnahme eingeben...' },
          { label: 'Folge', placeholder: 'Folge eingeben...' }
        ]
      },
      {
        name: 'Frau Wagner',
        fields: [
          { label: 'Maßnahme', placeholder: 'Maßnahme eingeben...' },
          { label: 'Folge', placeholder: 'Folge eingeben...' }
        ]
      }
    ]
  }

const HOREN_TESTS = [
  {id:1, title:'Modelltest 1 (Hörverstehen)', teile: HOREN_MT1},
  {id:2, title:'Modelltest 2 (Hörverstehen)', teile: HOREN_MT2}
];
