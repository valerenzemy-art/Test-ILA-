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
    mediaUrl: 'media/consigne_t1.mp3',
    questions:[
      { q: 'Nutzung der Schließfächer:', correct: 'Montag bis Sonntag' },
      { q: 'Erlaubte Getränke in der Bibliothek:', correct: 'Wasser' },
      { q: 'Maximale Ausleihfrist für Bücher:', correct: 'vier Wochen' },
      { q: 'Nicht ausleihbare Bücher:', correct: 'Präsenzbestand' },
      { q: 'Lernräume für Lerngruppen:', correct: '2. Stock' }
    ]
  },
  { ...TEMPLATE_HOEREN[1],
    instructions:'Hören Sie den Radiobeitrag und ordnen Sie die Aussagen den Begriffspaaren zu.',
    title:'Aufgabe 2: Stadtentwicklung im Wandel',
    mediaType: 'audio',
    mediaUrl: 'media/hoeren_t2.mp3',
    pairs: [
      { term: 'Ökologie vs. Wirtschaft', options: ['Aussage A', 'Aussage B', 'Beide', 'Keine'], correct: 0 },
      { term: 'Zentrum vs. Peripherie', options: ['Aussage A', 'Aussage B', 'Beide', 'Keine'], correct: 1 }
    ]
  },
  { ...TEMPLATE_HOEREN[2],
    instructions:'Hören Sie den Vortrag. Kreuzen Sie genau die Sätze an, die falsche Informationen enthalten.',
    title:'Aufgabe 3: Künstliche Photosynthese',
    mediaType: 'audio',
    mediaUrl: 'media/hoeren_t3.mp3',
    sentences:[
      {text:'Die künstliche Photosynthese wandelt Sonnenlicht direkt in chemische Energie um.', wrong:false},
      {text:'Als Endprodukt entsteht ausschließlich reines Trinkwasser.', wrong:true},
      {text:'Die Technologie befindet sich derzeit noch im experimentellen Laborstadium.', wrong:false},
      {text:'Kommerzielle Anlagen decken bereits 50 Prozent des Energiebedarfs.', wrong:true}
    ]
  },
  { ...TEMPLATE_HOEREN[3],
    instructions:'Hören Sie das Interview mit drei Experten (A, B, C). Wer vertritt welche Ansicht?',
    title:'Aufgabe 4: Die Zukunft der Arbeit',
    mediaType: 'audio',
    mediaUrl: 'media/hoeren_t4.mp3',
    items:[
      {text:'Die Vier-Tage-Woche steigert die Gesamteffizienz massiv.', correct:0},
      {text:'Homeoffice führt zu einer Entkopplung des sozialen Zusammenhalts.', correct:1},
      {text:'Künstliche Intelligenz wird klassische Berufe komplett ersetzen.', correct:2}
    ],
    columns:['Experte A','Experte B','Experte C']
  },
  { ...TEMPLATE_HOEREN[4],
    instructions:'Hören Sie den wissenschaftlichen Vortrag und ergänzen Sie die Gliederungspunkte durch Texteingabe.',
    title:'Aufgabe 5: Meeresströmungen und Klima',
    mediaType: 'video',
    mediaUrl: 'media/hoeren_t5.mp4',
    questions:[
      { q: 'Hauptantrieb der Thermohalinen Zirkulation:', correct: 'Dichteunterschiede' },
      { q: 'Folge des Abschmelzens von Grönlandeis:', correct: 'Abschwächung des Golfstroms' }
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
      {text:'Der medizinische Fachbegriff wurde im Skript korrekt wiedergegeben.', wrong:false},
      {text:'Im Audio wird eine höhere Erfolgsquote genannt als im gedruckten Text.', wrong:true}
    ]
  }
];

const HOREN_TESTS = [
  {id:1, title:'Modelltest 1 (Hörverstehen)', teile: HOREN_MT1}
];
