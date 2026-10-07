const TEMPLATE = [
  {teil:1, type:'gap',     time:240,  label:'Lückentext ergänzen'},
  {teil:2, type:'order',   time:300,  label:'Textabschnitte ordnen'},
  {teil:3, type:'mc',      time:900,  label:'Multiple Choice (C1 Level)'},
  {teil:4, type:'match',   time:360,  label:'Textstellen zuordnen (C1 Level)'},
  {teil:5, type:'table',   time:540,  label:'Aussagen Kategorien zuordnen'},
  {teil:6, type:'twocat',  time:420,  label:'Vorteile / Nachteile Zuordnung (C1 Level)'},
  {teil:7, type:'summary', time:420,  label:'Fehler in Zusammenfassung erkennen'}
];

const MT1 = [
  { ...TEMPLATE[0],
    instructions:'Lesen Sie den Text. Wählen Sie für jede Lücke das passende Wort.',
    title:'Schlafmangel und kognitive Leistungsfähigkeit',
    segments:[
      'Zahlreiche akademische Studien belegen, dass chronischer Schlafmangel die kognitive Leistungsfähigkeit erheblich ',
      ' kann, selbst wenn Betroffene subjektiv das Gefühl haben, sich an den reduzierten Schlaf gewöhnt zu haben. Besonders betroffen ist dabei das Arbeitsgedächtnis, das für die kurzfristige Speicherung und Verarbeitung komplexer Informationen ',
      ' ist. Bereits eine einzige durchwachte Nacht kann die Reaktionsgeschwindigkeit messbar ',
      ', vergleichbar mit den Effekten eines erhöhten Alkoholspiegels. Langfristig wird chronischer Schlafmangel zudem mit einem erhöhten Risiko für verschiedene Herz-Kreislauf-Erkrankungen in ',
      ' gebracht. Schlafforscherinnen und Schlafforscher empfehlen daher, feste Schlafenszeiten ',
      ', um dem Körper einen stabilen Rhythmus zu ermöglichen.'
    ],
    gaps:[
      {options:['beeinträchtigen','fördern','stabilisieren','ignorieren'], correct:0},
      {options:['zuständig','begeistert','abhängig','überzeugt'], correct:0},
      {options:['verringern','erhöhen','stabilisieren','ausgleichen'], correct:0},
      {options:['Verbindung','Kontakt','Rücksicht','Hinsicht'], correct:0},
      {options:['einzuhalten','abzuschaffen','aufzuschieben','zu vermeiden'], correct:0}
    ]
  },
  { ...TEMPLATE[1],
    instructions:'Bringen Sie die fünf Textabschnitte mit den Pfeiltasten in die richtige Reihenfolge.',
    title:'Die Entdeckung des Penicillins',
    correctOrder:[0,1,2,3,4],
    items:[
      'Der schottische Bakteriologe Alexander Fleming bemerkte 1928 in seinem Labor eher zufällig, dass sich auf einer vergessenen Bakterienkultur ein Schimmelpilz gebildet hatte.',
      'Er stellte fest, dass rund um den Schimmelpilz keine Bakterien mehr wuchsen, und vermutete, dass der Pilz eine bakterienabtötende Substanz absondern müsse.',
      'Fleming veröffentlichte seine Beobachtungen, doch zunächst zeigte die wissenschaftliche Gemeinschaft nur wenig Interesse an einer praktischen Anwendung der Entdeckung.',
      'Erst rund ein Jahrzehnt später gelang es einem Forschungsteam um Howard Florey und Ernst Chain, den Wirkstoff Penicillin in ausreichender Reinheit und Menge für klinische Tests herzustellen.',
      'Während des Zweiten Weltkriegs wurde Penicillin schließlich in großem Maßstab produziert und rettete Schätzungen zufolge Hunderttausenden verwundeter Soldaten das Leben.'
    ],
    shuffledStart:[2,4,0,3,1]
  },
  { ...TEMPLATE[2],
    instructions:'Lesen Sie den wissenschaftlichen Text. Beantworten Sie die Fragen mit den Optionen a, b, c oder d.',
    title:'Aufgabe 3: Die Neurobiologie des luziden Träumens',
    passage:[
      '(1) Das Phänomen des luziden Träumens, bei dem sich der Schläfende seines Traumzustands bewusst ist und diesen mitunter aktiv steuern kann, wurde lange Zeit von der empirischen Wissenschaft skeptisch betrachtet. Erst mit der Standardisierung elektroenzephalografischer Messungen im REM-Schlaf gelang der schlüssige Nachweis: Etwa die Hälfte der Weltbevölkerung hat mindestens einmal im Leben ein solches Phänomen erfahren, während nur eine kleine Minderheit in der Lage ist, dieses Phänomen regelmäßig und gezielt herbeizuführen.',
      '(2) Neurowissenschaftlich zeichnet sich der Klartraum durch eine hybride Bewusstseinsform aus. Während der REM-Schlaf gewöhnlich durch eine Deaktivierung des dorsolateralen präfrontalen Kortex gekennzeichnet ist – was den Verlust des kritischen Denkens und der Orientierung erklärt –, zeigt sich bei Klarträumern in genau dieser Region eine signifikante Reaktivierung. Dies ermöglicht das Wiedererlangen von Selbstreflexion, logischer Urteilskraft und metakognitiven Fähigkeiten mitten im Traumgeschehen.',
      '(3) Historisch gesehen ist die Faszination für das Phänomen keineswegs ein modernes Nebenprodukt der modernen Psychologie. Bereits in antiken philosophischen Abhandlungen sowie in indigenen und östlichen Traditionen spielte die Schulung des Traum-Bewusstseins eine zentrale Rolle. Diese kulturübergreifende Kontinuität verdeutlicht, dass das Streben nach Kontrolle über den eigenen Geist im Schlaf ein tief verankertes menschliches Anliegen darstellt.',
      '(4) In der therapeutischen Praxis eröffnet die Klartraumforschung vielversprechende Ansätze zur Linderung schwerer psychischer Leiden. Insbesondere Patienten mit posttraumatischen Belastungsstörungen (PTBS), die unter chronischen Alpträumen leiden, profitieren von verhaltenstherapeutischen Techniken des luziden Träumens. Durch das gezielte Einüben von Re-Skripting-Strategien lernen Betroffene, bedrohliche Traumszenarien umzugestalten und so emotionale Erleichterung zu erfahren.',
      '(5) Ein weiterer Aspekt betrifft die plastischen Veränderungen im Gehirn durch sensomotorisches Training im Schlaflabor. Studien zeigen, dass das gedankliche Durchspielen komplexer Sportarten oder Bewegungsabläufe im Klartraum dieselben motorischen Areale im Gehirn stimuliert wie die reale Ausführung. Folglich lassen sich solche Traumerfahrungen messbar auf die motorische Leistungsfähigkeit in der Wachrealität übertragen.',
      '(6) Trotz dieser Potenziale mahnt die akademische Forschung hinsichtlich der unkritischen Verbreitung von Techniken zur künstlichen Trauminduktion zur Vorsicht. Die unkontrollierte Anwendung von elektrischer Hirnstimulation oder pharmakologischen Präparaten zur Herbeiführung von Klarträumern kann die Schlafarchitektur nachhaltig stören, psychische Dissoziationen begünstigen und schwere Schlafstörungen nach sich ziehen.',
      '(7) Das primäre Anliegen des vorliegenden Artikels besteht darin, einen fundierten Überblick über den aktuellen wissenschaftlichen Erkenntnisstand der Klartraumforschung zu vermitteln sowie deren Chancen und neurobiologische Risiken objektiv gegeneinander abzuwägen.'
    ],
    questions:[
      { q:'In Absatz 1 wird gesagt, dass ...', options:[
        'die Hälfte der Bevölkerung regelmäßig in der Lage ist, ihre Träume zu steuern.',
        'die wissenschaftliche Beweisführung erst durch neuzeitliche Messverfahren möglich wurde.',
        'eine große Mehrheit der Menschen unfähig ist, jemals einen Klartraum zu erleben.',
        'luzides Träumen schon immer von der Forschung als Alltagskonzept akzeptiert wurde.'
      ], correct:1 },
      { q:'Wodurch zeichnen sich laut Absatz 2 Klarträumer aus? Durch ...', options:[
        'eine vollständige Deaktivierung aller Gehirnareale im REM-Schlaf.',
        'eine neuronale Reaktivierung von Gehirnregionen für metakognitive Fähigkeiten.',
        'schnellere Augenbewegungen zur Unterdrückung des logischen Denkens.',
        'eine Hemmung der kritischen Selbstreflexion während der Schlafphase.'
      ], correct:1 },
      { q:'Welche der folgenden Überschriften passt inhaltlich zu Absatz 3?', options:[
        'Der Stellenwert luzider Träume in westlichen Religionsgemeinschaften',
        'Die Ablehnung von Klarträumen in östlichen Kulturkreisen',
        'Kulturübergreifendes und historisches Interesse an der Traumbewusstheit',
        'Die Erfindung des Klartraums durch die moderne Psychoanalyse'
      ], correct:2 },
      { q:'Laut Absatz 4 kann man mithilfe von Klarträumen ...', options:[
        'Trauminhalte lückenlos auf digitale Datenträger aufzeichnen.',
        'Patienten mit chronischen Schlafstörungen vollständig heilen.',
        'Menschen mit traumatischen Alpträumen psychologische Erleichterung verschaffen.',
        'den REM-Schlaf künstlich um mehrere Stunden verlängern.'
      ], correct:2 },
      { q:'Welche der folgenden Aussagen fasst den Inhalt aus Absatz 5 korrekt zusammen?', options:[
        'Luzide Träume dienen ausschließlich der Steigerung der kognitiven Intelligenz.',
        'Sensomotorische Übungen im Traum zeigen positive Effekte auf reale Bewegungsabläufe.',
        'Profisportler trainieren heute überwiegend in Schlaflaboren statt auf dem Sportplatz.',
        'Körperliche Bewegungen im Schlaf beeinträchtigen die Leistungsfähigkeit am Tag.'
      ], correct:1 },
      { q:'Welche Haltung vertritt der Autor in Absatz 6 bezüglich der künstlichen Trauminduktion?', options:[
        'Er begrüßt die uneingeschränkte kommerzielle Nutzung pharmakologischer Mittel.',
        'Er fordert das Verbot jeglicher Schlafforschung am Menschen.',
        'Er steht der Trauminduktion völlig gleichgültig gegenüber.',
        'Er mahnt zur Vorsicht wegen möglicher Schäden für die Schlafarchitektur.'
      ], correct:3 },
      { q:'Hauptanliegen des gesamten Textes ist es, ...', options:[
        'Anleitungen zur Selbstinduktion von Klarträumen bereitzustellen.',
        'über den Forschungsstand und die Komplexität des Klarträumens zu informieren.',
        'die Überlegenheit alternativer Heilmethoden wissenschaftlich zu belegen.',
        'vor den Gefahren des normalen REM-Schlafs zu warmen.'
      ], correct:1 }
    ]
  },
  { ...TEMPLATE[3],
    instructions:'Lesen Sie den Expertenkommentar. Ordnen Sie die Textstellen 1 – 4 den Aussagen unten zu. Für jede Textstelle gibt es genau eine richtige Lösung.',
    title:'Aufgabe 4: Kommentar eines Experten zur Rohstoffökonomie',
    passageText:`Die verhängnisvolle Annahme, dass der Menschheit durch unkontrollierten Konsum zwangsläufig der Kollaps droht und wir daher eine drastische Wachstumsrücknahme erzwingen müssen, gehört zum festen Dogma moderner Umweltdebatten. <strong>[1] Ob diese radikale Verzichtshypothese in wissenschaftlicher Hinsicht jedoch tatsächlich belastbar ist, darf ernsthaft in Zweifel gezogen werden.</strong> Durch fortschrittliche biochemische Verfahren ist die Synthetisierung von Rohstoffen bereits heute Realität. <strong>[2] Man muss allerdings unumwunden einräumen, dass derartige Syntheseverfahren derzeit noch außerordentlich energieintensiv und kostspielig sind.</strong> Der technologische Wandel vollzieht sich jedoch exponentiell. Womöglich werden molekulare Fertigungsverfahren in wenigen Jahrzehnten Rohstoffknappheiten komplett überflüssig machen. Die Theorie der Grenzen des Wachstums entpuppt sich somit womöglich als gedanklicher Rückschritt. <strong>[3] Dass sich dieses Bedrohungsszenario dennoch so hartnäckig in den Köpfen hält, dürfte vor allem darin begründet liegen, dass unser Denken in steinzeitlichen Kategorien begrenzter Vorräte verhaftet bleibt.</strong> In einer von Innovation geprägten Welt sind Ressourcen im Wesentlichen unbegrenzt. <strong>[4] Dank menschlicher Erfindungskraft und technologischem Pioniergeist werden wir künftig in der Lage sein, völlig neue Energie- und Materialquellen zu erschließen.</strong>`,
    textStellen:[1, 2, 3, 4],
    options:[
      'Der Experte erklärt ein psychologisches Phänomen.',
      'Der Experte hofft auf eine internationale Regulierung.',
      'Der Experte prognostiziert eine technologische Entwicklung.',
      'Der Experte räumt einen aktuellen Nachteil ein.',
      'Der Experte stellt eine weit verbreitete Annahme in Frage.',
      'Der Experte vermutet eine Ursache für das Denkmuster.',
      'Der Experte verteidigt die Position der Verzichtsökonomie.',
      'Der Experte widerspricht den Grundlagen der Biologie.'
    ],
    correct:[4, 3, 5, 2]
  },
  { ...TEMPLATE[4],
    instructions:'Lesen Sie den Text. Ordnen Sie die Aussagen 1–7 zu: Entscheiden Sie für jede Aussage, ob sie zu Hundemenschen, zu Katzenmenschen oder zu beiden passt. Es kann auch sein, dass einzelne Aussagen gar nicht passen.',
    title:'Aufgabe 5: Das Persönlichkeitsprofil von Hunde- und Katzenhaltern',
    passage:'Die Fragestellung, inwiefern sich Halter von Hunden und Katzen in ihren grundlegenden Charakterzügen voneinander unterscheiden, ist Gegenstand verhaltenspsychologischer Untersuchungen. Eine empirische Studie analysierte die Probanden anhand des Fünf-Faktoren-Modells der Persönlichkeit. Dabei zeigte sich, dass Individuen, die sich selbst der Gruppe der Hundehalter zuordnen, ein höheres Maß an Extraversion, Verträglichkeit und Gewissenhaftigkeit aufweisen. Diese Personen zeichnen sich durch ausgeprägte soziale Interaktionsbereitschaft sowie eine strukturierte Lebensführung aus. Demgegenüber erzielten Katzenfreunde höhere Messwerte in den Dimensionen Offenheit für neue Erfahrungen und Neurotismus, was sich in einer Neigung zu emotionaler Labilität sowie einer erhöhten Bereitschaft zur kritischen Hinterfragung von Konventionen ausdrückt. Eine weitere Untersuchung widmete sich dem Einfluss von Dominanzstreben auf die Präferenz für bestimmte Ausprägungen von Heimtieren. Es zeigte sich, dass Personen mit stark ausgeprägter sozialer Dominanzorientierung signifikant häufiger ein Haustier bevorzugen, das sich klar unterordnet. Hinsichtlich ausgeprägter egomanischer Charaktermerkmale wie Narzissmus ließen sich hingegen keine statistisch signifikanten Unterschiede zwischen beiden Probandengruppen feststellen.',
    columns:['Hundemenschen','Katzenmenschen','beide','passt nicht'],
    items:[
      {text:'Diese Personen weisen ein stark ausgeprägtes egometrisches bzw. narzisstisches Verhalten auf.', correct:3},
      {text:'Diese Gruppe hinterfragt bestehende Normen und Werte eher kritisch.', correct:1},
      {text:'Diese Gruppe zeigt eine positive Einstellung gegenüber hierarchischen Rangordnungen.', correct:0},
      {text:'Diese Menschen zeigen sich im sozialen Umgang zugänglicher und verträglicher.', correct:0},
      {text:'Diese Menschen wählen Haustiere gezielt nach der Übereinstimmung mit dem eigenen Charakter aus.', correct:3},
      {text:'Diese Gruppe weist eine geringere emotionale Stabilität auf.', correct:1},
      {text:'Diese Personen bevorzugen Haustiere, die ein dominantes Auftreten verweigern.', correct:0}
    ]
  },
  { ...TEMPLATE[5],
    instructions:'Lesen Sie den wissenschaftlichen Fachtext. Entscheiden Sie, welche Aussagen stimmen, und ordnen Sie genau vier Aussagen der Tabelle zu (2 Vorteile, 2 Nachteile).',
    title:'Aufgabe 6: Phytotherapie und moderne Pharmakologie',
    passage:'Die wissenschaftliche Pflanzenheilkunde (Phytotherapie) blickt auf eine jahrtausendealte Erfahrungstradition zurück. Im Vergleich zu synthetischen Reinstoffen zeichnen sich phytotherapeutische Vielstoffgemische durch eine bemerkenswerte physiologische Verträglichkeit aus. Dies liegt primär daran, dass die Wirkstoffe in natürlichen Matrixstrukturen vorliegen, was Nebenwirkungen minimiert. Ein weiterer Vorteil besteht in der vielseitigen Verwendbarkeit phytotherapeutischer Präparate, die sowohl topisch als auch systemisch angewendet werden können und oft eine einfache hauseigene Zubereitung erlauben. Demgegenüber stehen jedoch gravierende Nachteile: Im Gegensatz zu synthetischen Arzneimitteln setzt die therapeutische Wirkung von Pflanzenextrakten häufig erst nach einer erheblichen Latenzzeit von mehreren Wochen ein, was einen Akuteinsatz ausschließt. Zudem bergen pflanzliche Inhaltsstoffe ein nicht zu unterschätzendes allergenes Potenzial sowie das Risiko unvorhersehbarer Organreaktionen bei Langzeiteinnahme.',
    aussagen:[
      { key:'a', text:'[a] Eigenständige und unkomplizierte Verarbeitung zu Präparaten' },
      { key:'b', text:'[b] Vollständige Ungiftigkeit pflanzlicher Substanzen' },
      { key:'c', text:'[c] Hervorragende Eignung für die Notfallmedizin' },
      { key:'d', text:'[d] Fehlende pharmakologische Nachweisbarkeit' },
      { key:'e', text:'[e] Längere Dauer bis zum spürbaren Wirkungseintritt' },
      { key:'f', text:'[f] Möglicherweise Auslösung unvorhergesehener Allergien' },
      { key:'g', text:'[g] Garantiertes Ersetzen sämtlicher synthetischer Medikamente' },
      { key:'h', text:'[h] Zahlreiche unterschiedliche Einsatzformen vorhanden' }
    ],
    correctMap: { v1: 'a', v2: 'h', n3: 'e', n4: 'f' }
  },
  { ...TEMPLATE[6],
    instructions:'Kreuzen Sie genau drei Sätze an, die inhaltlich falsche Informationen enthalten.',
    title:'Wachstum des E-Commerce',
    passage:'Der Anteil des Online-Handels am gesamten Einzelhandelsumsatz in Deutschland ist in den vergangenen Jahren kontinuierlich gestiegen. Lag der Anteil im Jahr 2015 noch bei rund 9 Prozent, so erreichte er im Jahr 2023 bereits über 19 Prozent. Besonders stark war der Zuwachs zwischen 2020 und 2021, was Fachleute vor allem auf veränderte Einkaufsgewohnheiten während der Pandemie zurückführen. Am stärksten wächst der Online-Handel im Bereich Mode und Elektronik, während Lebensmittel bislang einen vergleichsweise kleinen Anteil ausmachen. Kleinere, inhabergeführte Geschäfte berichten dabei überproportional häufig von Umsatzeinbußen, während große Online-Plattformen ihre Marktanteile weiter ausbauen konnten.',
    graphicData:[{year:'2015',val:9},{year:'2018',val:12},{year:'2020',val:14},{year:'2021',val:17},{year:'2023',val:19}],
    graphicCaption:'Grafik: Anteil des Online-Handels am Einzelhandelsumsatz in Deutschland (in Prozent)',
    sentences:[
      {text:'Der Online-Handel-Anteil ist von rund 9 Prozent 2015 auf über 19 Prozent 2023 gestiegen.', wrong:false},
      {text:'Der stärkste Zuwachs war zwischen 2020 und 2021 zu beobachten.', wrong:false},
      {text:'Lebensmittel machen bislang den größten Anteil am Online-Handel aus.', wrong:true},
      {text:'Kleinere, inhabergeführte Geschäfte berichten überproportional häufig von Umsatzeinbußen.', wrong:false},
      {text:'Große Online-Plattformen haben laut Text Marktanteile verloren.', wrong:true},
      {text:'Der Zuwachs wird unter anderem mit veränderten Einkaufsgewohnheiten während der Pandemie erklärt.', wrong:false},
      {text:'Mode und Elektronik zählen zu den am stärksten wachsenden Online-Handel-Bereichen.', wrong:false},
      {text:'Der Anteil des Online-Handels ist seit 2015 nahezu unverändert geblieben.', wrong:true}
    ]
  }
];

// ... (MT2, MT3, MT4 et TESTS restent inchangés à la suite)
