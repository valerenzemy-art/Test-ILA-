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

const MT2 = [
  { ...TEMPLATE[0],
    instructions:'Lesen Sie den Text. Wählen Sie für jede Lücke das passende Wort.',
    title:'Aufgabe 1: Wie überlebt die Feueramöbe Extreme?',
    segments:[
      'Obwohl die physiologischen Mechanismen, die der extremen Hitzetoleranz von einzelligen Organismen zugrunde liegen, längst nicht in allen Einzelheiten entschlüsselt sind, gilt in der Mikrobiologie als unbestritten, dass eine strukturelle Anpassung der Zellmembranen der essenzieller Schlüsselpunkt ist: Demnach ',
      ' diese Organismen in thermisch belasteten Gewässern dank spezialisierter Lipidzusammensetzungen, die ein Aufschmelzen der zellulären Barrieren verhindern. Doch die molekularen Feinheiten dieses Schutzmechanismus blieben lange Zeit im Verborgenen. Zudem schien die ',
      ' von Wissenschaftlern, es handele sich hierbei um eine rein passive Schutzreaktion, zunehmend fragwürdig. In einer neuen molekularbiologischen Untersuchung konnten Forscher nun eindeutig ',
      ', dass sich die fluiden Eigenschaften der Membranen aktiv und dynamisch an die Umgebungstemperatur anpassen. Mit einer Dicke, die dem Bruchteil einer Mikrometerschicht entspricht, reagiert die Zelle wesentlich schneller auf thermischen Stress als bisher angenommen. Der interessanteste Aspekt allerdings: Es handelt sich keineswegs um einen starren Panzer. Wie aus den proteomischen Analysen hervorgeht, verhält sich die Zytoplasmastruktur stattdessen hochelastisch und besitzt komplexe Regulationsmechanismen. Dieses ',
      ' Verhalten lässt darauf schließen, dass sich die Organismen bei plötzlicher Erhitzung nicht irreversibel denaturieren. Stattdessen ',
      ' sich rasch schützende Hitzeschockproteine, die den intrazellulären Zusammenbruch verhindern. Das Geheimnis der enormen Überlebensfähigkeit liegt demnach in den raffinierten biochemischen Schutzreaktionen dieser Spezies.'
    ],
    gaps:[
      {options:['geht','überlebt','gleitet','agiert'], correct:1},
      {options:['Annahme','Erklärung','Mitteilung','Meldung'], correct:0},
      {options:['erweisen','nachweisen','verweisen','zurückweisen'], correct:1},
      {options:['unangekündigte','unerwartete','unvergleichbare','unvorhergesehene'], correct:1},
      {options:['bildet','entlädt','formt','trennt'], correct:0}
    ]
  },
  { ...TEMPLATE[1],
    instructions:'Bringen Sie die fünf Textabschnitte mit den Pfeiltasten in die richtige Reihenfolge.',
    title:'Aufgabe 2: Quantenphysik & Schrödingers Katze',
    correctOrder:[2,1,0,4,3],
    items:[
      'Dass dieses Gedankenexperiment im makroskopischen Alltag jedoch völlig absurd erscheint, liegt an einem physikalischen Phänomen namens Dekohärenz: Sobald ein Quantensystem mit seiner Umwelt – sei es auch nur mit einem einzigen Luftmolekül – in Wechselwirkung tritt, kollabiert der Überlagerungszustand augenblicklich in eine klassische Realität.',
      'Um dieses paradoxe Verhalten zu veranschaulichen, erdachte der Physiker Erwin Schrödinger 1935 das berühmte Gedankenexperiment mit einer Katze in einem geschlossenen Kasten, der theoretisch so lange gleichzeitig lebend und tot ist, bis ein Beobachter den Kasten öffnet und nachschaut.',
      'In der mikroskopischen Welt der Quantenmechanik gilt ein physikalisches System, solange es nicht gemessen oder beobachtet wird, in einer sogenannten Superposition – es befindet sich also gleichzeitig in mehreren unterschiedlichen Zuständen.',
      'Dennoch versuchen moderne Quantenphysiker weltweit immer wieder, diese unsichtbare Grenze zwischen Quanten- und Makrowelt zu verschieben, um extrem empfindliche Quantencomputer zu konstruieren, die weit über die Leistung klassischer Rechenmaschinen hinausgehen.',
      'Genau aus diesem Grund gelingt es Wissenschaftlern bis heute nicht, makroskopische Objekte wie Katzen oder alltägliche Gegenstände in einen dauerhaften Quantenzustand zu versetzen, da die unkontrollierbare thermische Umgebung jede quantenmechanische Kohärenz innerhalb von Bruchteilen einer Mikrosekunde zerstört.'
    ],
    shuffledStart:[0,1,2,3,4]
  },
  { ...TEMPLATE[2],
    instructions:'Lesen Sie den Text. Beantworten Sie die Fragen 1–7.',
    title:'Aufgabe 3: Neue Unterart von Eiszeit-Leoparden in Thüringen entdeckt',
    passage:[
      '(1) Lange Zeit galt die europäische Quartärfauna als gut erforscht, insbesondere was die großen Beutegreifer des Pleistozäns betrifft. Doch eine unscheinbare fossile Unterkieferfragment-Entdeckung in Thüringen hat das herkömmliche Bild der eiszeitlichen Raubkatzenpopulationen ins Wanken gebracht. Paläontologen konnten nachweisen, dass es sich bei den Überresten nicht etwa um eine bereits bekannte Population von Höhlenlöwen oder eurasischen Leoparden handelt, sondern um eine bislang unbeschriebene, eigenständige Unterart des Eiszeit-Leoparden. Dieser Fund wirft ein neues Licht auf die Anpassungsfähigkeit großräumiger Raubtiere an die extremen Klimaschwankungen des eiszeitlichen Europas.',
      '(2) Die morphologische Analyse der Zähne und des Knochenmaterials offenbarte anatomische Besonderheiten, die eine präzise evolutionäre Einordnung erlaubten. Während moderne Leoparden vor allem in tropischen und subtropischen Wald- oder Savannengebieten heimisch sind, zeigte diese thüringische Form robuste Kiefernstrukturen und markante Zahnabnutzungen, die auf eine spezialisierte Beutejagd in kaltzeitlichen Offenlandschaften hindeuteten. Das Tier war anatomisch exakt auf das Erlegen von mittelgroßen Huftieren wie Renten oder Wildpferden ausgerichtet. Die Forscher sprechen von einer evolutionären Nischenbesetzung, die es der Raubkatze ermöglichte, in direkter Konkurrenz zu etablierten Großräubern wie dem Höhlenbären oder dem Wolf zu überleben.',
      '(3) Historisch betrachtet stieß die Suche nach eiszeitlichen Raubkatzenresten in Mitteleuropa im 19. Jahrhundert oft auf Skepsis und wissenschaftlichen Streit. Damals neigten Naturforscher dazu, fossile Knochenfragmente vorschnell bestehenden Arten zuzuordnen, um das klassische, hierarchische System der Tierwelt nicht zu gefährden. Kleinere Abweichungen wurden meist als individuelle Anomalien oder geografische Varianten abgetan. Erst mit der Etablierung moderner biometrischer Untersuchungsmethoden und der Paläogenetik im späten 20. Jahrhundert änderte sich dieses Dogma fundamental. Dennoch blieben Funde von echten Leoparden in Mitteleuropa extrem rar, was Skeptiker lange Zeit zu der Annahme verleitete, es habe sich lediglich um saisonale Wanderungsbewegungen einzelner Individuen statt um eine dauerhafte Population gehandelt.',
      '(4) Heutzutage rücken derartige paläontologische Entdeckungen vor allem deshalb in den Fokus der Biodiversitätsforschung, weil sie präzise Rückschlüsse auf die Robustheit von Ökosystemen bei rasantem Klimawandel zulassen. Für Wissenschaftler ist besonders faszinierend, dass genetische Spuren aus Knochenkollagen belegen, wie stark sich die Populationen während der Kältehöhepunkte isolierten. Dies führte zu genetischen Engpässen, aber auch zu evolutionären Innovationsschüben. Aus naturschutzfachlicher Sicht liefert die Erforschung solcher pleistozäner Relikte wertvolle Analogien dazu, wie moderne Wildtiere auf Habitatfragmentierung und globale Erwärmung reagieren könnten.',
      '(5) Abseits der rein theoretischen Evolutionsbiologie nutzen Paläontologen hochentwickelte bildgebende Verfahren, um innere Knochenstrukturen zu analysieren, ohne das wertvolle Originalmaterial zu zerstören. Ein kürzlich angewandtes mikro-CT-Verfahren machte es möglich, die Mikrostruktur des Dentins dreidimensional abzubilden, wodurch das Alter und der Ernährungszustand des Tieres exakt rekonstruiert werden konnten. Kritische Stimmen aus dem Fachbereich warnen davor, aus einzelnen Fossilien zu weit reichende Schlüsse über das gesamte regionale Ökosystem zu ziehen, da lokale Mikroklimata die Überlieferung verzerren können.',
      '(6) Der Umgang mit fossilen Funden und deren wissenschaftliche Interpretation erfordert folglich äußerste methodische Akribie. Dennoch existieren standardisierte Protokolle zur Dokumentation, die weltweit von Museen und Grabungsteams angewendet werden. Dazu gehört die lückenlose Registrierung jedes Fundstücks in zentralen Datenbanken sowie der Verzicht auf invasive Präparationstechniken, sofern diese nicht absolut zwingend sind. Obgleich diese Richtlinien etabliert sind, mahnen Experten zur Wachsamkeit: Der illegale Handel mit Fossilien und die Zerstörung paläontologischer Fundstätten durch unkoordinierte Grabungen gefährden unwiederbringliche Archive unserer Erdgeschichte, weshalb der behördliche Schutz massiv verstärkt werden muss.'
    ],
    questions:[
      { q:'In Absatz 1 wird gesagt, dass ...', options:[
        'die europäische Quartärfauna bereits vollständig erforscht ist.',
        'es sich bei dem Fund in Thüringen um eine völlig neue Unterart handelt.',
        'Höhlenlöwen und Leoparden in Thüringen denselben Lebensraum teilten.',
        'Klimaschwankungen keine Auswirkungen auf Raubtiere hatten.'
      ], correct:1 },
      { q:'Wodurch zeichnet sich laut Absatz 2 die thüringische Form des Eiszeit-Leoparden aus? Durch ...', options:[
        'Anpassung an tropische Waldgebiete.',
        'spezialisierte Jagd auf große Beutetiere in Offenlandschaften.',
        'eine Koexistenz mit modernen Leoparden.',
        'physische Merkmale, die denen von Höhlenbären ähneln.'
      ], correct:1 },
      { q:'Welche der folgenden Überschriften passt inhaltlich am besten zu Absatz 3?', options:[
        'Der wissenschaftliche Streit um fossile Klassifikationen im Wandel',
        'Die Entstehung der modernen Paläogenetik im 19. Jahrhundert',
        'Warum Leoparden dauerhaft nach Mitteleuropa einwanderten',
        'Die Überwindung von Migrationsmythen durch Geologen'
      ], correct:0 },
      { q:'Laut Absatz 4 rücken paläontologische Entdeckungen heute in den Fokus, weil sie ...', options:[
        'die Ausbreitung moderner Wildtiere verhindern helfen.',
        'Einblicke in die Widerstandskraft von Ökosystemen bei Klimawandel geben.',
        'genetische Engpässe bei heutigen Raubtieren künstlich ausgleichen.',
        'den Nachweis erbringen, dass Eiszeit-Tiere nicht isoliert lebten.'
      ], correct:1 },
      { q:'Was fasst den Inhalt von Absatz 5 korrekt zusammen?', options:[
        'Mikro-CT-Verfahren zerstören stets das empfindliche Knochenmaterial.',
        'Kritiker lehnen den Einsatz moderner Technologie in der Paläontologie ab.',
        'Moderne Bildgebung ermöglicht präzise Analysen, doch Vorsicht bei Generalisierungen ist geboten.',
        'Lokale Mikroklimat machen die Untersuchung von Fossilien unmöglich.'
      ], correct:2 },
      { q:'Welche Meinung vertritt der Autor in Absatz 6?', options:[
        'Er fordert einen verstärkten behördlichen Schutz gegen illegale Grabungen.',
        'Er hält internationale Standardprotokolle für überflüssig.',
        'Er empfiehlt den uneingeschränkten Einsatz invasiver Präparationen.',
        'Er glaubt, dass Museen keine Kontrolle über Funde haben.'
      ], correct:0 },
      { q:'Hauptanliegen des Textes ist es, ...', options:[
        'die Ausgrabungsmethoden in Thüringen lückenlos zu dokumentieren.',
        'eine neu entdeckte Eiszeit-Leopardenart und deren wissenschaftliche Bedeutung vorzustellen.',
        'vor dem Aussterben moderner Raubkatzen durch den Klimawandel zu warnen.',
        'die Fehler früherer Naturforscher im 19. Jahrhundert zu kritisieren.'
      ], correct:1 }
    ]
  },
  { ...TEMPLATE[3],
    instructions:'Lesen Sie den Text. Ordnen Sie die Textstellen 1-4 den Aussagen unten zu.',
    title:'Aufgabe 4: Kommentar eines Experten zu Rohstoffen',
    passageText:`Die Vorstellung, dass wir bei der Energiewende vollständig von globalen Lieferketten abhängig bleiben und kritische Rohstoffe nur unter ökologisch fragwürdigen Bedingungen aus Übersee importieren können, ist eine These, deren Wahrheitsgehalt praktisch keiner in Frage stellt. <strong>[1] Ob sie tatsächlich zutrifft, ist jedoch unklar.</strong> Bereits heute ist es möglich, durch innovative geothermische Verfahren Lithium direkt aus hiesigem Thermalwasser zu gewinnen. Dabei wird das Leichtmetall in einem komplexen technischen Kreislauf herausgefiltert, während das abgekühlte Wasser CO2-neutral in die Tiefe zurückgeleitet wird. <strong>[2] Diese Verfahren sind zugebenermaßen noch sehr komplex und energieaufwändig.</strong> Doch wie wir wissen, schreitet der technologische Fortschritt extrem schnell voran. Vielleicht werden wir in Zukunft in der Lage sein, den gesamten hiesigen Bedarf an Batteriematerialien lokal und umweltschonend zu decken. Oder wir werden in den Genuss kommen, dass modernste Bergbautechnologien die Umweltauswirkungen auf ein absolutes Minimum reduzieren. Wenn Sie vor 100 Jahren einem Gelehrten gesagt hatten, dass wir schon bald durch automatisierte Fördertechniken und chemische Direktextraktion gigantische Industrimengen an Rohstoffen gewinnen können, hätte er Sie nur mitleidig angesehen. Und wenn Sie ihm gesagt hatten, dass diese Verfahren mit einem Bruchteil der ökologischen Belastung herkömmlicher Minen arbeiten wurden, hätte er Sie für komplett verrückt erklärt. Doch durch wissenschaftliche und ingenieurtechnische Meisterleistungen ist uns genau das gelungen.<br><br>Die Idee, dass heimische Rohstoffprojekte grundsätzlich zum Scheitern verurteilt sind, könnte auch ein Irrglaube sein. <strong>[3] Dass sie dennoch so unpopulär sind, hängt damit zusammen, dass unsere Vorstellung von der heimischen Natur immer noch von einer unberührten Idylle geprägt ist.</strong> Damals hiess es: Jede technische Eingriff in den Untergrund zerstört unweigerlich die Landschaft. Wenn alle Vorkommen erschlossen sind, wird die Region dauerhaft geschädigt. In Wahrheit sind unsere geologischen Potenziale jedoch enorm und die modernen Sicherheitsstandards extrem hoch. <strong>[4] Und mit unserem Erfindungsreichtum und unserer Ingenieurskunst werden wir immer besser in der Lage sein, die Rohstoffe im Einklang mit der Umwelt zu fördern.</strong>`,
    textStellen:[1, 2, 3, 4],
    options:[
      'Der Experte erklärt etwas.',
      'Der Experte hofft auf etwas.',
      'Der Experte prognostiziert etwas.',
      'Der Experte räumt etwas ein.',
      'Der Experte stellt etwas in Frage.',
      'Der Experte vermutet etwas.',
      'Der Experte verteidigt etwas.',
      'Der Experte widerspricht etwas.'
    ],
    correct:[4, 3, 5, 2]
  },
  { ...TEMPLATE[4],
    instructions:'Lesen Sie den Text. Ordnen Sie die Aussagen 1–7 zu den Kategorien zu.',
    title:'Aufgabe 5: Wie finanzielle Zusatzleistungen die Kindergesundheit beeinflussen',
    passage:'Ob sich die gesundheitliche Entwicklung von Kindern durch direkte finanzielle Hilfen für Mütter signifikant verbessern lässt – und wie die Effekte im Vergleich zu klassischen Sachleistungen ausgeprägt sind –, untersuchen Gesundheitsökonomen und Soziologen bereits seit Jahren. Eine aktuelle europaweite Studie liefert nun neue Erkenntnisse zu dieser Frage. Dabei wurden zwei Gruppen von Müttern im Hinblick auf fünf gesundheits- und entwicklungsspezifische Indikatoren untersucht: Mütter, die einen monatlichen, bedingungslosen Finanzbonus (Zusatzgeld) erhalten, und Mütter, die im traditionellen, an strenge Auflagen geknüpften Regelsystem der staatlichen Sozialhilfe verblieben sind. Personen der ersten Gruppe, die sich selbst als Empfängerinnen des Zusatzgeldes bezeichneten, erwiesen sich in den Kennzahlen zu Ernährungssicherheit, Vorsorgeuntersuchungen und psychischem Wohlbefinden ihrer Kinder als deutlich proaktiver - sie gaben beispielsweise an, flexibler auf kindliche Bedürfnisse reagieren zu können, ausgewogenere Nahrungsmittel zu kaufen und präventive Arztbesuche termingerecht wahrzunehmen. Mütter im herkömmlichen Regelsystem erzielten dagegen niedrigere Werte in puncto Ernährungsqualität und wiesen häufiger stressbedingte Erschöpfungssymptome auf. Sie sind damit im Mittel stärker von akuten finanziellen Sorgen geplagt, wodurch auch die mentale Gesundheit der Kinder indirekt beeinträchtigt wird.',
    columns:['Mutter mit Zusatzgeld','Mutter im Regelsystem','beide','passt nicht'],
    items:[
      {text:'Diese Personen stehen unter starkem Dauerstress.', correct:3},
      {text:'Diese Gruppe investiert gezielt in präventive Massnahmen.', correct:0},
      {text:'Diese Mütter weisen eine hohe Ernährungsqualität auf.', correct:0},
      {text:'Diese Gruppe erhält traditionelle staatliche Sachleistungen.', correct:1},
      {text:'Diese Mütter wählen ihre Ausgaben nach ökologischen Kriterien aus.', correct:0},
      {text:'Diese Personen sind psychisch völlig unauffällig.', correct:3},
      {text:'Diese Mütter leiden spürbar unter akuten finanziellen Sorgen.' , correct:1}
    ]
  },
  { ...TEMPLATE[5],
    instructions:'Lesen Sie den Text. Entscheiden Sie, welche Aussagen stimmen, und ordnen Sie genau vier Aussagen der Tabelle zu (2 Vorteile, 2 Nachteile).',
    title:'Aufgabe 6: Wie künstliche Intelligenz unsere Sprache verarmt',
    passage:'Der Einfluss künstlicher Intelligenz auf unsere alltägliche Kommunikation und Sprachkultur ist in den letzten Jahren rasant gewachsen. Einerseits bieten generative KI-Systeme enorme Potenziale: Sie können Texte in Sekundenschnelle zusammenfassen, fehlerfrei übersetzen und stilistisch anpassen. Die Effizienzsteigerung im akademischen und beruflichen Bereich ist unbestritten, da wiederkehrende Schreibarbeiten automatisiert erledigt werden. Doch diese Bequemlichkeit hat ihren Preis. Linguisten warnen vor einer schleichenden Verarmung unseres Wortschatzes und dem Verlust individueller Ausdrucksformen. Wenn wir uns zunehmend auf standardisierte Textvorschläge verlassen, schrumpft die sprachliche Vielfalt, und komplexe Nuancen gehen verloren.<br><br>Besonders kritisch sehen Sprachforscher die Tatsache, dass generative Modelle oft zu sprachlichen Klischees und vorhersehbaren Formulierungen neigen. Dies führt zu einer Homogenisierung des schriftlichen Ausdrucks, bei der persönliche Stimmen und kreative Stilmittel zugunsten einer glatten, aber sterilen Durchschnittssprache verblassen. Zwar lässt sich durch den gezielten Einsatz von KI die Produktivität massiv steigern, doch wer verlernt, komplexe Gedanken selbst in Worte zu fassen, gefährdet langfristig seine kognitive und rhetorische Flexibilität. Dennoch wäre es verfehlt, KI-Technologien pauschal zu verteufeln. Sie können wertvolle Werkzeuge sein, sofern sie kritisch und ergänzend genutzt werden, anstatt das eigene Nachdenken und Formulieren komplett zu ersetzen. Der bewusste Umgang mit diesen neuen Werkzeugen ist daher entscheidend, um die sprachliche Kreativität und den Facettenreichtum unseres Wortschatzes zu bewahren.',
    aussagen:[
      { key:'a', text:'[a] Deutliche Effizienzsteigerung bei standardisierten Schreibarbeiten' },
      { key:'b', text:'[b] Vollständiger Ersatz des eigenen kreativen Denkens' },
      { key:'c', text:'[c] Schleichende Verarmung des individuellen Wortschatzes' },
      { key:'d', text:'[d] Erhaltung sämtlicher rhetorischer Nuancen' },
      { key:'e', text:'[e] Homogenisierung und Sterilität des schriftlichen Ausdrucks' },
      { key:'f', text:'[f] Unproblematische uneingeschränkte Nutzung ohne jegliche Kritik' },
      { key:'g', text:'[g] Förderung einer enormen sprachlichen Vielfalt' },
      { key:'h', text:'[h] Verlust der kognitiven Flexibilität bei vollständiger Abhängigkeit' }
    ],
    correctMap: { v1: 'a', v2: 'g', n3: 'c', n4: 'h' }
  },
  { ...TEMPLATE[6],
    instructions:'Kreuzen Sie genau drei Sätze an, die inhaltlich falsche Informationen enthalten.',
    title:'Aufgabe 7: Der Rhythmus des Lernens: Wie Musik das Gehirn beeinflusst',
    passage:'Ein regelmäßiger Musikkonsum beim Lernen kostet zwar Zeit und Aufmerksamkeit, doch er entlastet nachweislich das Gehirn, senkt den Cortisolspiegel und fördert die Konzentrationsfähigkeit im Vergleich zum Arbeiten in völliger Stille. Sogar die Schüler, die beim Lernen intensiv über laute Kopfhörer beschallt werden, leiden häufiger unter akustischer Reizüberflutung und Konzentrationsproblemen. Doch nicht nur die Oberstufenschüler, sondern auch die Jüngsten zeigen oft ein verändertes Hör- und Lernverhalten. Wie in einer aktuellen Studie in Deutschland festgestellt wurde, benötigen Schüler im Schnitt 32 Minuten, um sich morgens durch gezieltes Musikhören in eine optimale Lernstimmung zu versetzen. Während bei immerhin 22 Prozent der Schüler der Weg zur Schule kürzer als zehn Minuten ist, brauchen 12 Prozent dafür 45 Minuten und länger. Wären sie musikalisch aktiv, würde man sie als klassische Melomanen bezeichnen.<br><br>Wie die Forscher herausfanden, geht das ständige Musikhören im Alltag an den Jugendlichen nicht spurlos vorüber. Ähnlich wie Erwachsene leiden besonders Jugendliche mit langen Lernphasen unter mentaler Erschöpfung. Sie sind zudem unkonzentriert und fühlen sich weniger leistungsfähig. Doch auch Schüler, die gar keine Musik hören, leiden unter derartigen Folgen. Auf Reaktionen aus der Politik wartet man bislang vergeblich und eine Abhilfe scheint nicht in Sicht. In den letzten zehn Jahren mussten immer mehr Musikschulen schließen, weil beispielsweise qualifizierte Musiklehrer fehlten. Für die Schüler ist dies fatal: Sie müssen immer monotonere Lehrmethoden in Kauf nehmen – und damit auch die mangelnde Kreativität, die damit verbunden ist. Zum Bildungserfolg der Jugendlichen trägt das sicherlich nicht bei.',
    graphicData:[{year:'1. Satz',val:1},{year:'2. Satz',val:1},{year:'3. Satz',val:1},{year:'4. Satz',val:1},{year:'5. Satz',val:1},{year:'6. Satz',val:1}],
    graphicCaption:'Grafik zur Zusammenfassung der Sätze (Modelltest 2)',
    sentences:[
      {text:'Musik hebt unsere Stimmung und hilft dabei, Anspannung abzubauen.', wrong:false},
      {text:'Sie wirkt sich auf Schüler ebenso positiv aus wie auf Erwachsene.', wrong:false},
      {text:'Häufige Folgen des Musikhörens bei zu hoher Lautstärke sind Gehörschäden und Konzentrationsstörungen.', wrong:true},
      {text:'Diese Auswirkungen zeigen sich bei Jugendlichen ab einer Beschallungsdauer von einer knappen halben Stunde.', wrong:false},
      {text:'Das ist die Dauer eines durchschnittlichen Schulwegs in Deutschland.', wrong:false},
      {text:'Erst- und Zweitklässler hören noch häufiger Musik beim Lernen als ältere Schüler.', wrong:true},
      {text:'Ältere Schüler sind stärker von der positiven Gehirnstimulation überzeugt.', wrong:false},
      {text:'Eine Verbesserung der Situation wurde nun politisch angekündigt.', wrong:true}
    ]
  }
];

const MT3 = [
  { ...TEMPLATE[0],
    instructions:'Lesen Sie den Text. Entscheiden Sie für die Lücken 1–5, welches Wort passt.',
    title:'Warum werden Städte nachts immer wärmer?',
    segments:[
      'Dass sich Städte während des Tages stärker erwärmen als ihr Umland, ist seit Langem bekannt. Weniger offensichtlich ist jedoch, warum dieser Temperaturunterschied auch nach Sonnenuntergang bestehen bleibt. Einen wesentlichen Grund sehen Forschende in den Materialien, aus denen Straßen und Gebäude bestehen. Beton und Asphalt nehmen tagsüber große Mengen an Wärme auf und geben diese während der Nacht nur langsam wieder ab. Dadurch entsteht ein Effekt, der als städtische Wärmeinsel ',
      ' wird. Allerdings lässt sich das Phänomen nicht allein durch die verwendeten Baustoffe erklären. Untersuchungen haben gezeigt, dass auch die geringe Luftzirkulation zwischen dicht stehenden Gebäuden dazu ',
      ', dass die gespeicherte Wärme langsamer entweichen kann. Hinzu kommt die Abwärme, die von Fahrzeugen, Klimaanlagen und industriellen Anlagen ',
      ' wird. Interessanterweise können selbst kleine Veränderungen der Stadtplanung messbare Auswirkungen haben. Begrünte Dächer und Bäume beispielsweise ',
      ' nicht nur Schatten, sondern tragen durch die Verdunstung von Wasser auch zur Abkühlung der Umgebung bei. Einige Städte versuchen deshalb inzwischen, gezielt Flächen zu schaffen, auf denen sich die nächtliche Wärme ',
      ' stark ansammelt.'
    ],
    gaps:[
      {options:['bezeichnet','bezeichnet sich','benennt','n nennt sich'], correct:0},
      {options:['beiträgt','führt','verursacht','bewirkt'], correct:0},
      {options:['abgegeben','ausgestoßen','entlassen','ausgesetzt'], correct:0},
      {options:['spenden','gewähren','leisten','bieten'], correct:0},
      {options:['nicht','weniger','kaum','selten'], correct:0}
    ]
  },
  { ...TEMPLATE[1],
    instructions:'Lesen Sie die Textabschnitte rechts. Bringen Sie die 5 Textabschnitte in die richtige Reihenfolge.',
    title:'Forscher erzeugen neuartiges „Super-Eis“',
    correctOrder:[0,1,3,2,4],
    items:[
      'Obwohl erste theoretische Modelle zu dieser extremen Phase bereits in den späten 1990er Jahren formuliert wurden, scheiterte die experimentelle Verifikation jahrzehntelang an den astronomischen Druckverhältnissen, die für eine Stabilisierung im Labor notwendig schienen.',
      'Erst als ein interdisziplinäres Team im September 2026 mithilfe von neuartigen Diamantstempelzellen und präzisen Laserschock-Techniken einen Quantensprung erzielte, wandelte sich die hypothetische Materie in eine greifbare Realität.',
      'Dieses radikal modifizierte Gittergefüge verleiht dem Material physikalische Anomalien, darunter eine thermische Leitfähigkeit, die konventionelles Wassereis um ein Vielfaches übertrifft, und eine bemerkenswerte Resistenz gegenüber extremen Temperaturen.',
      'Das so geschaffene, als „Super-Eis“ bezeichnete Konglomerat unterscheidet sich fundamental von irdischem Eis, da seine Moleküle unter immensem physikalischem Zwang in eine dichte, hochsymmetrische Kristallstruktur gepresst werden, die selbst bei Raumtemperatur stabil bleibt.',
      'Sollten sich die aktuellen Skalierungstests in der Raumfahrt- und Energieindustrie als erfolgreich erweisen, könnte dieser Stoff in naher Zukunft als revolutionäres Kühlmedium in thermischen Isolationssystemen dienen.'
    ],
    shuffledStart:[4,2,0,1,3]
  },
  { ...TEMPLATE[2],
    instructions:'Lesen Sie den Text. Beantworten Sie die Fragen 1-7. Entscheiden Sie, welche Lösung passt.',
    title:'Adaptive KI-Robotik und menschliche Motorik',
    passage:[
      '(1) Die Schnittstelle zwischen künstlicher Intelligenz und hochkomplexer Robotik hat in den letzten Jahren jene technologischen Grenzen verschoben, die lange Zeit als unüberwindbar galten. Während traditionelle Industrieroboter vor allem starr programmierte, repetitive Aufgaben in isolierten Fabrikzellen ausführen, verlangen moderne physische Assistenzsysteme nach einer gänzlich neuen Dimension der sensorischen Adaption. Ein herausragendes Beispiel hierfür sind Kl-gesteuerte humanoide Robotersysteme, die in Echtzeit physikalische Parameter wie Flugbahnen, Reibung und kinetische Energie berechnen können, um beispielsweise hochentwickelte sportliche Interaktionen wie das Fangen und Schlagen von Baseball-Bällen zu meistern eine Aufgabe, die selbst für geschulte menschliche Athleten ein Höchstmaß an visuell-motorischer Koordination erfordert.',
      '(2) Warum diese Integration von maschinellem Lernen und mechanischer Ausführung so komplex ist, liegt vor allem an der unvorhersehbaren Dynamik realer Umgebungen. Nachgewiesen ist, dass Algorithmen zwar immense Datenmengen in Millisekunden verarbeiten können, die physikalische Umsetzung durch Aktoren jedoch oft träge reagiert. Bei menschlichen Bewegungen steuert das Kleinhirn unbewusst die Feinabstimmung, während Kortex-Areale strategische Entscheidungen treffen. Moderne Roboterarchitekturen versuchen diesen biologischen Dualismus durch neuronale Netze nachzuahmen. Dennoch unterscheiden sich autonome Systeme von biologischen Organismen grundlegend dadurch, dass ihnen das intuitive, erfahrungsbasierte "Gefühl" für physakalisches Material fehlt, weshalb jede Abweichung von der Norm zu Fehlkalkulationen führt.',
      '(3) Während in Europa die Entwicklung solcher dynamischen Roboterarme stark sicherheitsgetrieben und regulativ gebremst wird, setzt man in anderen Innovationszentren auf kompromisslose Praxistests unter Extrembedingungen. Ingenieure nutzen dort fortschrittliche Simulationen, um Tausende von Wurfszenarien zu generieren, bevor die Hardware überhaupt physisch beansprucht wird. In der westlichen Welt galt lange Zeit eine skeptische Haltung gegenüber autonomen Maschinen, die in direkter physischer Nähe zum Menschen agieren. Erst nachdem internationale Forschungsteams in kontrollierten Testlaboren nachweisen konnten, dass moderne Kollisionserkennungssysteme absolut verlässlich arbeiten, erhielten solche Roboter eine breitere gesellschaftliche und industrielle Akzeptanz.',
      '(4) Heutzutage stehen autonome KI-Systeme vor allem im Fokus der Materialwissenschaft und der Logistikoptimierung. Denn über physikalische Interaktionskräfte wissen wir oft weniger, als intuitiv angenommen wird, da sich mechanische Belastungen in dreidimensionalen Räumen unvorhersehbar überlagern. Roboter sind für Forscher besonders wertvoll, da sie als messbare Versuchsträger dienen: Das System registriert und quantifiziert jeden Millimeterbruchteil einer Bewegung. Dieser empirische Datensatz kann auch in der Rehabilitation genutzt werden: Ein gewisser Prozentsatz von Patienten leidet unter neurologisch bedingten Bewegungsstörungen nach Schlaganfällen. Es ist bereits wissenschaftlich belegt, dass präzise haptische Feedback-Roboter helfen können, neuronale Bahnen im Gehirn zu reaktivieren und motorische Fähigkeiten gezielt wiederherzustellen.',
      '(5) Anders als die Ingenieure beschäftigen sich Kognitionswissenschaftler mit der Frage, inwiefern die algorithmische Entscheidungsfindung Aufschluss über menschliche Denkprozesse geben kann. Einer der Forscher analysierte, ob neuronale KI-Modelle das menschliche Antizipationsvermögen bei High-Speed-Reaktionen simulieren können. Nach eigenen Angaben konnte er dadurch neue Muster im menschlichen Lernverhalten entschlüsseln. Mittlerweile ist auch anderweitig belegt, dass derartige Simulationen für das Verstehen einfacher Bewegungsabläufe hervorragend funktionieren. Bei hochkomplexen, intuitiven Handlungen geraten die Algorithmen jedoch an ihre Grenzen, da menschliche Kreativität und Spontaneität mathematisch kaum fassbar sind.',
      '(6) Die Beherrschung solcher Systeme lässt sich indes steuern und optimieren. Es gibt verschiedene Methoden, die zum technologischen Durchbruch führen können. Bekannt ist vor allem das Reinforcement-Learning-Modell: Dabei optimiert sich die KI durch Millionen von Simulationen selbst, indem sie Bestrafungen für Fehler und Belohnungen für erfolgreiche Treffer registriert. Eine andere Möglichkeit besteht darin, Roboter direkt durch menschliche Vormacher (Teleoperation) zu trainieren. Im Idealfall nähert sich die Maschine so der menschlichen Flexibilität an. Mittlerweile ist es auch möglich, Roboter durch KI-gesteuerte Sensorik in Echtzeit anzupassen. Diese Technologie ist jedoch extrem teuer und rechenintensiv, weshalb ein flächendeckender Einsatz in der Industrie noch auf sich warten lässt.'
    ],
    questions:[
      { q:'In Absatz 1 wird gesagt, dass ...', options:[
        'traditionelle Roboter flexibler als moderne Systeme sind.',
        'moderne KI-Roboter komplexe physikalische Abläufe in Echtzeit berechnen.',
        'das Fangen von Baseball-Bällen für Menschen unmöglich ist.',
        'Fabrikzellen ausschließlich durch autonome Roboter gesteuert werden.'
      ], correct:1 },
      { q:'Wodurch zeichnen sich laut Absatz 2 autonome KI-Systeme aus? Durch ...', options:[
        'ein intuitives, erfahrungsbasiertes Materialgefühl.',
        'eine absolut fehlerfreie mechanische Umsetzung.',
        'eine rein biologische Nachahmung des Kleinhims.',
        'Schwierigkeiten bei normAbweichungen aufgrund fehlender Intuition.'
      ], correct:3 },
      { q:'Welche der folgenden Überschriften passt inhaltlich zu Absatz 3?', options:[
        'Unterschiedliche globale Herangehensweisen und Akzeptanz',
        'Die technologische Vorreiterrolle Europas in der Sicherheit',
        'Internationale Vorschriften für Roboterarme im Labor',
        'Die strikte Ablehnung von Simulationen in der westlichen Welt'
      ], correct:0 },
      { q:'Laut Absatz 4 kann man mithilfe von KI-Robotern in der Medizin ...', options:[
        'neurologische Störungen endgültig heilen.',
        'mechanische Belastungen im Raum komplett eliminieren.',
        'neuronale Bahnen durch haptisches Feedback reaktivieren.',
        'das menschliche Gehim vollständig digitalisieren.'
      ], correct:2 },
      { q:'Welche der folgenden Aussagen fasst den Inhalt aus Absatz 5 korrekt zusammen?', options:[
        'KI-Simulationen erfassen menschliche Spontaneität vollständig.',
        'Kognitionswissenschaftler nutzen KI zur Analyse menschlicher Lernmuster.',
        'Menschliches Antizipationsvermögen lässt sich mathematisch exakt berechnen.',
        'Komplexe Bewegungen werden von KI besser ausgeführt als von Menschen.'
      ], correct:1 },
      { q:'Welche Meinung hat der Autor in Absatz 6 über den Einsatz von KI-Sensorik?', options:[
        'Er hält ihn für unmittelbar flächendeckend realisierbar.',
        'Er kritisiert die mangelnde Leistungsfähigkeit der Algorithmen.',
        'Er lehnt den Einsatz von Reinforcement Learning ab.',
        'Er dämpft die Erwartungen wegen hoher Kosten und Rechenintensität.'
      ], correct:3 },
      { q:'Hauptanliegen des Textes ist es,...', options:[
        'die Fortschritte und Grenzen adaptiver KI-Robotik darzulegen.',
        'ausschliesslich die sportlichen Anwendungen von Robotern zu vergleichen.',
        'vor den Gefahren autonomer Maschinen im Alltag zu warmen.',
        'die Überlegenheit von Robotern gegenüber Menschen zu beweisen.'
      ], correct:0 }
    ]
  },
  { ...TEMPLATE[3],
    instructions:'Lesen Sie den Text. Ordnen Sie die Textstellen 1-4 den Aussagen unten zu.',
    title:'Kommentar eines Experten zu Künstlicher Intelligenz und Arbeitsmarkt',
    passageText:`Die Annahme, dass generative Künstliche Intelligenz in naher Zukunft weite Teile der intellektuellen Arbeitswelt revolutionieren und zu einer massiven Entwertung akademischer Berufe führen wird, wird in Fachkreisen kaum noch ernsthaft bestritten. <strong>[1] Ob diese technologische Disruption jedoch linear verläuft oder durch unvorhersehbare regulatorische und gesellschaftliche Hürden abgebremst wird, entzieht sich aktuell jeder verlässlichen Prognose.</strong> Bereits heute existieren Algorithmen, die komplexe juristische Schriftsätze verfassen und medizinische Diagnosen mit einer Präzision stellen können, die das menschliche Fehlerrisiko in bestimmten Teilbereichen signifikant unterscheidet. <strong>[2] Diese Applikationen basieren auf gigantischen Rechenkapazitäten und probabilistischen Modellen, deren interne Entscheidungsprozesse für den Anwender eine absolute Blackbox darstellen.</strong> Doch während Kritiker vor einem irreversiblen Vertrauensverlust in automatisierte Systeme warnen, schreitet die Implementierung in sicherheitskritischen Infrastrukturen rasant voran. Vielleicht erleben wir schon bald den Punkt, an dem autonome Agenten eigenständig ökonomische Strategien für globale Konzerne entwickeln. Wenn Sie vor zwanzig Jahren einem Pionier der Informatik gesagt hätten, dass Computer semantische Nuancen menschlicher Sprache fehlerfrei erfassen und imitieren können, hätte er Sie vermutlich ungläubig angeschaut. Und wenn Sie ihm gesagt hätten, dass diese Systeme kreative Prozesse wie das Komponieren von Symphonien in Sekundenschnelle und mit bruchteilhaften Energiekosten im Vergleich zu menschlichen Künstlern bewältigen, hätte er das für völlig absurd erklärt. Doch durch algorithmische Optimierung und massive Skalierung ist uns genau das gelungen.<br><br>Die Idee des unaufhaltsamen technologischen Fortschritts könnte also ein Trugschluss sein. <strong>[3] Dass sie dennoch so populär ist, hängt damit zusammen, dass unser kollektives Narrativ von Innovation immer noch tief im linearen Denken der industriellen Revolution verwurzelt ist.</strong> Damals hieß es: Wer effizienter maschinell produziert, gewinnt den Markt. Wenn heute alle alten Paradigmen obsolet werden, müssen wir unsere ökonomischen Grundregeln völlig neu definieren. In Wahrheit sind unsere Grenzen unserer technologischen Leistungsfähigkeit keineswegs erreicht. <strong>[4] Und mit unserem rasant wachsenden Verständnis neuronaler Netze und synthetischer Daten werden wir immer besser in der Lage sein, kognitive Engpässe zu überwinden.</strong>`,
    textStellen:[1, 2, 3, 4],
    options:[
      'Der Experte erklärt etwas.',
      'Der Experte hofft auf etwas.',
      'Der Experte prognostiziert etwas.',
      'Der Experte räumt etwas ein.',
      'Der Experte stellt etwas in Frage.',
      'Der Experte vermutet etwas.',
      'Der Experte verteidigt etwas.',
      'Der Experte widerspricht etwas.'
    ],
    correct:[5, 3, 7, 2]
  },
  { ...TEMPLATE[4],
    instructions:'Lesen Sie den Text. Ordnen Sie die Aussagen 1–7 zu: Entscheiden Sie für jede Aussage, ob sie zu Analytikern, zu Intuitionistikern oder zu beiden passt.',
    title:'Wie analytische und intuitive Köpfe ticken',
    passage:'Ob sich menschliche Denkstrukturen in kognitive Extreme wie strikte Analytik und fluid-intuitive Verarbeitung aufteilen lassen – und wie stark diese Unterschiede im Einzelfall ausgeprägt sind –, diskutieren Neurowissenschaftler seit Jahrzehnten kontrovers. Eine aktuelle multidisziplinäre Studie liefert nun tiefere Einblicke in diese kognitive Dichotomie. Dabei wurden Probanden hinsichtlich fünf fundamentaler neurokognitiver Merkmale untersucht: algorithmische Stringenz, Offenheit für sensorische Ambiguität, Gewissenhaftigkeit, kognitive Flexibilität d.h. die Fähigkeit zur schnellen Reorientierung, sowie neuronale Erregbarkeit bzw. emotionale Stabilität unter Entscheidungsdruck. Personen, die sich selbst als primär analytisch veranlagt einstuften, erzielen im Schnitt höhere Werte in puncto systematischer Planung, formaler Logik und methodischer Vorhersehbarkeit – sie neigen also dazu, Probleme strikt strukturiert und Schritt für Schritt anzugehen. Intuitionistischer veranlagte Probanden verzeichnen dagegen höhere Werte bei holistischer Mustererkennung und divergentem Denken. Sie sind damit im Mittel etwas risikofreudiger und fehlerintoleranter gegenüber starren Hierarchien; gleichzeitig werden sie jedoch auch häufiger von unbewussten kognitiven Verzerrungen und spontanen Fehleinschätzungen geplagt. Ein relativ ähnliches Bild liefert auch eine andere Untersuchung: Insgesamt deuten die neueren Studien auf einen engen Zusammenhang zwischen unserer neuronalen Verschaltung und der Präferenz für einen ganz bestimmten Problemlösungsstil hin. Wie dieser Zusammenhang genau aussehen könnte, ist jedoch nicht abschließend geklärt. Australische Forscher vertreten die These, dass wir kognitive Strategien präferieren, die unsere angeborene mentale Architektur optimal ergänzen. Um ihre Vermutung zu überprüfen, untersuchten sie in zwei unterschiedlichen Studien mit jeweils rund 500 Teilnehmern, ob dominante Analytiker im Schnitt eine ausgeprägtere Dominanzorientierung besaßen als intuitive Köpfe – sie präferierten also eine feste gedankliche Hierarchie und glaubten, dass übergeordnete Systeme stets mit einem niedrigen Rang dominieren sollten. Paaroffene Fragen hinterlässt die Untersuchung allerdings: Die Wissenschaftler sehen das als Hinweis darauf, dass analytischere Personen Führungspositionen anstreben, die nicht primär auf emotionalem Konsens beruhen, sondern bereit sind, harte rationale Kriterien anzulegen – was auf mathematische Disziplinen eher zutrifft als auf rein künstlerisch-intuitive Domänen. So konnten die Wissenschaftler hinsichtlich Durchsetzungsvermögen und Narzissmus – zwei Eigenschaften, die ebenfalls mit kognitiver Dominanz zusammenhängen – keine signifikanten Unterschiede zwischen ihren Versuchspersonen finden: Analytiker waren weder durchsetzungsstärker noch selbstbezogener als Intuitionistiker. Wie das genau zu ihrer Hypothese passt, konnten die Wissenschaftler allerdings nicht abschließend erklären.',
    columns:['Analytiker','Intuitionistiker','beide','passt nicht'],
    items:[
      {text:'Diese Personen neigen zu einem starken Narzissmus.', correct:3},
      {text:'Diese Gruppe hinterfragt ständige gedankliche Hierarchien.', correct:1},
      {text:'Diese Personen schätzen eine systematische und methodische Vorhersehbarkeit.', correct:0},
      {text:'Diese Gruppe profitiert von einer flexiblen holistischen Mustererkennung.', correct:1},
      {text:'Diese Personen lassen sich stark durch unbewusste kognitive Verzerrungen leiten.', correct:1},
      {text:'Diese Gruppe weist ein nachweislich höheres Durchsetzungsvermögen auf.', correct:3},
      {text:'Diese Personen meiden Führungspositionen in harten rationalen Disziplinen.', correct:3}
    ]
  },
  { ...TEMPLATE[5],
    instructions:'Lesen Sie den Text. Entscheiden Sie, welche Aussagen stimmen, und ordnen Sie genau vier Aussagen der Tabelle zu (2 Vorteile, 2 Nachteile).',
    title:'Flechten: Das komplexe Zusammenspiel der Symbiose',
    passage:'Flechten gehören zu den faszinierendsten und zugleich widerstandsfähigsten Organismen der Erde, obwohl sie streng biologisch gesehen keine eigenständigen Lebewesen im klassischen Sinne darstellen. Vielmehr handelt es sich bei ihnen um eine Lebensgemeinschaft, die klassischerweise aus einem Pilz und mindestens einem phototrophen Partner, meist einer Grünalge oder einem Cyanobakterium, besteht. Diese Symbiose wird von der Mykologie traditionell als ein austariertes System gegenseitiger Abhängigkeit verstanden, bei dem der Pilz dem phototrophen Partner ein schützendes Gehäuse sowie Wasser und Mineralsalze bietet, während die Alge im Gegenzug durch Photosynthese gewonnene Kohlenhydrate beisteuert. Jüngste wissenschaftliche Untersuchungen enthüllen jedoch eine weitaus komplexere Realität: Oftmals sind an diesem vermeintlich dualen System heimlich noch weitere Pilzarten oder spezialisierte Hefen beteiligt, die maßgeblich zur Stabilität der Flechtenrinde beitragen. Trotz dieser evolutionären Raffinesse erweist sich die Kultivierung von Flechten unter Laborbedingungen als außerordentlich schwierig. Da die symbiotischen Partner in der Natur extrem langsam wachsen und in ein feines, chemisch hochkomplexes Wechselspiel eingebunden sind, schlagen künstliche Zuchtversuche im kontrollierten Umfeld meist fehl. Zudem reagieren Flechten extrem empfindlich auf anthropogene Schadstoffe. Da sie keine echten Wurzeln besitzen, nehmen sie sämtliche Nährstoffe und Flüssigkeiten direkt über die gesamte Oberfläche aus der Atmosphäre auf. Das macht sie zu hervorragenden Bioindikatoren für die Luftgüte, setzt sie aber gleichzeitig der unkontrollierten Anreicherung von Schwermetallen und Schwefeldioxid aus, was mancherorts zu massiven Bestandsrückgängen führt. Andererseits besitzen sie die erstaunliche Fähigkeit, extreme Austrocknungsphasen schadlos zu überstehen, indem sie ihren Stoffwechsel nahezu komplett herunterfahren und in eine Art metabolische Starre verfallen, aus der sie beim ersten Kontakt mit Feuchtigkeit sofort wieder erwachen.',
    aussagen:[
      { key:'a', text:'[a] Unkontrollierte Aufnahme von Schadstoffen aus der Luft' },
      { key:'b', text:'[b] Vollständiger Verzicht auf externe Nährstoffzufuhr' },
      { key:'c', text:'[c] Beteiligung von mehr als nur zwei Organismenarten' },
      { key:'d', text:'[d] Problematische künstliche Kultivierung im Labor' },
      { key:'e', text:'[e] Schneller und unkontrollierter Wuchs in feuchten Regionen' },
      { key:'f', text:'[f] Ausschließlich ausschließliche Abhängigkeit von Grünalgen' },
      { key:'g', text:'[g] Hohe Widerstandsfähigkeit gegen langanhaltende Dürreperioden' },
      { key:'h', text:'[h] Unmittelbare Gefahr für das Menschen beim Berühren der Thalli' }
    ],
    correctMap: { v1: 'c', v2: 'g', n3: 'a', n4: 'd' }
  },
  { ...TEMPLATE[6],
    instructions:'Lesen Sie den Text. Beachten Sie auch die Informationen aus der Grafik. Finden Sie die Sätze in der Zusammenfassung, die falsche Informationen enthalten. Es gibt genau drei inhaltlich falsche Sätze.',
    title:'Das Erdsystem an den Belastungsgrenzen',
    passage:'Das Konzept der planetaren Grenzen, das erstmals im Jahr 2009 von einem internationalen Forscherteam um Johan Rockström und Will Steffen vorgestellt wurde, definiert den sicheren Handlungsraum für die Menschheit. Jüngste wissenschaftliche Aktualisierungen zeichnen jedoch ein alarmierendes Bild: Mittlerweile sind sieben von neun definierten Grenzen überschritten worden. Zu den kritisch fortgeschrittenen Bereichen gehören neben dem Klimawandel vor allem die Intégrität der Biosphäre, der Verlust von Ökosystemfunktionen sowie massive Störungen der biogeochemischen Kreisläufe von Stickstoff und Phosphor. Besonders besorgniserregend ist die Tatsache, dass diese Subsysteme des Erdsystems nicht isoliert voneinander betrachtet werden dürfen. Sie stehen in einem hochkomplexen, nicht-linearen Wechselverhältnis. So schwächt die anhaltende Entwaldung tropischer Regenwälder nicht nur die globale Kohlenstoffsenke, sondern beschleunigt gleichzeitig das Artensterben dramatisch. Wissenschaftler betonen, dass das Überschreiten dieser Schwellenwerte das Risiko unumkehrbarer Kippelemente signifikant erhöht, was kaskadenartige Kollapse ganzer Naturräume zur Folge haben kann. Zwar existieren auf internationaler Ebene zahlreiche Abkommen wie das Pariser Klimaschutzabkommen, doch kritisieren Experten immer wieder die mangelnde politische Entschlossenheit bei der Umsetzung konsequenter Gegenmaßnahmen. Ohne eine grundlegende sozial-ökologische Transformation droht die Stabilität des gesamten Erdsystems irreversibel zu kippen, wodurch die Lebensgrundlagen künftiger Generationen akut gefährdet werden.',
    graphicData:[{year:'Klima',val:4},{year:'Biosphäre',val:5},{year:'Stickstoff',val:3},{year:'Landnutzung',val:4}],
    graphicCaption:'Grafik: Zustand der planetaren Grenzen im Erdsystem',
    sentences:[
      {text:'(1) Das wissenschaftliche Konzept der planetaren Grenzen wurde zu Beginn des 21. Jahrhunderts eingeführt, um den sicheren Handlungsraum der Menschheit zu definieren.', wrong:false},
      {text:'(2) Aktuellen Erhebungen zufolge gilt inzwischen die Mehrheit der neun untersuchten ökologischen Hauptgrenzen als überschritten.', wrong:false},
      {text:'(3) Zu den stabilsten und unbedenklichsten Bereichen zählen derzeit die globalen Stickstoff- und Phosphorkreisläufe.', wrong:true},
      {text:'(4) Die einzelnen Subsysteme des Erdsystems agieren voneinander völlig unabhängig und beeinflussen sich gegenseitig kaum.', wrong:true},
      {text:'(5) Die Zerstörung tropischer Regenwälder reduziert parallel die globale Kohlenstoffsenke und verstärkt den Biodiversitätsverlust.', wrong:false},
      {text:'(6) Das Überschreiten kritischer Schwellenwerte erhöht drastisch die Gefahr abrupter und unumkehrbarer Kippeffekte.', wrong:false},
      {text:'(7) Internationale Vereinbarungen wie das Pariser Abkommen werden von Fachleuten wegen konsequenter politischer Umsetzung einhellig gelobt.', wrong:true},
      {text:'(8) Komplexe ökologische Veränderungen können potenziell kaskadenartige und weitreichende Systemkollapse auslösen.', wrong:false},
      {text:'(9) Ohne einen tiefgreifenden systemischen Wandel steht die langfristige Stabilität des gesamten Erdsystems auf dem Spiel.', wrong:false}
    ]
  }
];

const MT4 = [
  { ...TEMPLATE[0],
    instructions:'Lesen Sie den Text. Wählen Sie für jede Lücke das passende Wort.',
    title:'Die Evolution der Biolumineszenz in den Tiefen der Ozeane',
    segments:[
      'Die Fähigkeit zahlreicher mariner Organismen, eigenes Licht zu erzeugen – die sogenannte Biolumineszenz –, stellt einen der faszinierendsten Anpassungsmechanismen an die extremen Bedingungen der Tiefsee dar. In absoluter Dunkelheit dient dieses biologische Leuchten vor allem der Kommunikation, der Abwehr von Fressfeinden oder dem Anlocken von Beute. Biochemisch basiert dieser Prozess auf einer enzymatisch katalysierten Oxidation, bei der das Substrat Luciferin durch das Enzym Luciferase umgewandelt wird. Forschern zufolge ',
      ' sich dieser komplexe Mechanismus im Laufe der Erdgeschichte unabhängig voneinander in Dutzenden verschiedenen Tierstämmen entwickelt. Lange Zeit gab es unter Meeresbiologen eine intensive ',
      ' darüber, ob diese evolutionäre Vielfalt eher auf einen urspünglichen, gemeinsamen Vorfahren oder auf konvergente Evolution zurückzuführen ist. Neuere phylogenetische Analysen konnten jedoch überzeugend ',
      ', dass die konvergente Entstehung bei den meisten Taxa das wahrscheinlichere Szenario darstellt. Dies verdeutlicht, wie stark der Selektionsdruck in lichtlosen Meereszonen auf innovative Überlebensstrategien ',
      '. Zukünftige Expeditionen mit autonom gesteuerten Unterwasserfahrzeugen sollen nun weitere unbekannte Spezies dokumentieren und helfen, die ökologischen Dynamiken dieser sensiblen Ökosysteme besser zu ',
      '.'
    ],
    gaps:[
      {options:['hat','scheint','vermutet','lässt'], correct:0},
      {options:['Diskussion','Meldung','Mitteilung','Rede'], correct:0},
      {options:['zeigen','verweisen','zurückweisen','hinweisen'], correct:0},
      {options:['einwirkt','auswirkt','nachwirkt','vorwirkt'], correct:0},
      {options:['begreifen','erfassen','verstehen','erkennen'], correct:2}
    ]
  },
  { ...TEMPLATE[1],
    instructions:'Bringen Sie die fünf Textabschnitte mit den Pfeiltasten in die richtige Reihenfolge.',
    title:'Die Entstehung von Mikroplastik in terrestrischen Böden',
    correctOrder:[1,0,3,2,4],
    items:[
      'Durch mechanische Belastung, UV-Strahlung und mikrobiellen Abbau zerfallen diese Makroplastikreste im Laufe der Zeit in immer kleinere Fragmente, bis sie die definierte Mikroplastik-Grenze unterschreiten.',
      'Lange Zeit konzentrierte sich die ökologische Forschung im Zusammenhang mit Plastikmüll fast ausschließlich auf die Weltmeere, während terrestrische Böden als vergleichsweise unbedeutend galten.',
      'Diese winzigen Partikel reichern sich im Humus an, verändern dort physikalische Bodeneigenschaften wie das Wasserspeichervermögen und können von Regenwürmern oder Mikroorganismen aufgenommen werden.',
      'Aktuelle bodenkundliche Studien zeigen jedoch, dass landwirtschaftlich genutzte Flächen – unter anderem durch Klärschlammdüngung und Mulchfolien – massiv mit makroskopischen Kunststoffabfällen belastet sind.',
      'Ob diese synthetischen Fremdkörper langfristig über die Nahrungskette auch die Gesundheit von Pflanzen und Tieren nachhaltig schädigen, wird derzeit von toxikologischen Instituten weltweit intensiv untersucht.'
    ],
    shuffledStart:[4,2,0,3,1]
  },
  { ...TEMPLATE[2],
    instructions:'Lesen Sie den wissenschaftlichen Text. Beantworten Sie die Fragen mit den Optionen a, b, c oder d.',
    title:'Aufgabe 3: Die Psychologie des kollektiven Vergessens',
    passage:[
      '(1) Das Phänomen des kollektiven Gedächtnisses und dessen Gegenstück, das kollektive Vergessen, prägen die kulturelle Identität von Gesellschaften nachhaltig. Während historische Forschung meist darauf ausgerichtet ist, Ereignisse durch Dokumente und Artefakte im Bewusstsein zu halten, zeigt die Soziologie, dass Gesellschaften selektiv vorgehen. Nicht alles, was erinnert werden könnte, wird auch über Generationen hinweg tradiert. Vielmehr unterliegt das gesellschaftliche Erinnern einer ständigen Reinterpretation, die stark von gegenwärtigen Interessen, politischen Machtstrukturen und sozialen Bedürfnissen beeinflusst wird.',
      '(2) Ein zentraler Mechanismus des Vergessens ist die institutionelle Verdrängung. Wenn schmerzhafte oder beschämende Kapitel der nationalen Geschichte im Widerspruch zum aktuellen Selbstbild einer Nation stehen, neigen kollektive Akteure dazu, diese Erzählungen schrittweise aus Lehrplänen, Denkmälern und Gedenkveranstaltungen zu entfernen. Dieser Prozess verläuft oft unbemerkt, führt jedoch langfristig zu einer tiefgreifenden Verzerrung des historischen Bewusstseins, was den kritischen Diskurs über historische Verantwortung erheblich erschwert.',
      '(3) Historisch gesehen war der Umgang mit kollektivem Gedächtnis stark durch staatliche Lenkung und nationale Meistererzählungen geprägt. Im 19. und frühen 20. Jahrhundert diente die Geschichtsschreibung vor allem der Nationsbildung und der Erzeugung eines homogenen Wir-Gefühls, weshalb abweichende oder widersprüchliche Stimmen systematisch marginalisiert wurden. Erst mit dem Aufkommen postmoderner geschichtswissenschaftlicher Ansätze und der Etablierung einer pluralistischen Erinnerungskultur im späten 20. Jahrhundert wurde dieses starre Dogma grundlegend aufgebrochen.',
      '(4) In der modernen Medienlandschaft vollzieht sich dieser Prozess unter völlig neuen Vorzeichen. Durch die Beschleunigung der Informationsströme und die digitale Flut an tagesaktuellen Nachrichten droht ein beschleunigtes Vergessen von Großereignissen, die noch vor wenigen Jahren als epochal galten. Soziologen sprechen in diesem Zusammenhang von einer Verkürzung der historischen Halbwertszeit: Ereignisse schrumpfen im digitalen Speicher zu ephemeren Datenpunkten, die kaum noch tiefere Spuren im kollektiven Bewusstsein hinterlassen.',
      '(5) Dennoch gibt es gegenläufige Tendenzen, die durch digitale Graswurzelbewegungen und zivilgesellschaftliche Initiativen getragen werden. Mithilfe von Online-Archiven, Crowdsourcing-Projekten und virtuellen Gedenkorten versuchen Aktivisten, marginalisierte Geschichten und vergessene historische Opfer dem Vergessen zu entreißen. Diese dezentralen Initiativen demokratisieren den Zugang zur Vergangenheit, stehen jedoch gleichzeitig vor dem Problem der Verifizierung und der schieren Unüberschneidbarkeit der verfügbaren Datenmengen.',
      '(6) Kritische Stimmen aus den Kulturwissenschaften warnen vor einer Inflation des Gedenkens. Wenn nahezu jedes historische Detail mit Gedenktagen, digitalen Hashtags oder symbolischen Akten bedacht wird, droht eine Übersättigung, die das eigentliche Erinnern trivialisiert und in eine oberflächliche Eventkultur mündet. Echtes historisches Verstehen erfordert jedoch Kontinuität, kritische Analyse und die Bereitschaft, sich mit unbequemen Wahrheiten auseinanderzusetzen, statt sich in einer ritualisierten Erinnerungsrhetorik zu erschöpfen.',
      '(7) Zusammenfassend lässt sich festhalten, dass das kollektive Gedächtnis ein dynamisches, umkämpftes Terrain darstellt. Die Untersuchung seiner Mechanismen liefert wichtige Einblicke in die seelische Verfassung moderner Gesellschaften und zeigt auf, wie fragile die Balance zwischen Erinnern und Vergessen in einer sich rasant verändernden Welt ist.'
    ],
    questions:[
      { q:'In Absatz 1 wird dargelegt, dass das kollektive Gedächtnis ...', options:[
        'stets alle historischen Ereignisse unbestechlich und lückenlos bewahrt.',
        'starken Einflüssen der jeweiligen Gegenwart und aktuellen Machtstrukturen unterliegt.',
        'ausschließlich durch schriftliche Dokumente und Denkmäler definiert wird.',
        'von den Mitgliedern einer Gesellschaft völlig unabhängig vom Zeitgeist gesteuert wird.'
      ], correct:1 },
      { q:'Was bewirkt laut Absatz 2 die institutionelle Verdrängung?', options:[
        'Eine objektive und fehlerfreie Aufarbeitung aller historischen Krisen.',
        'Die dauerhafte Stärkung des kritischen gesellschaftlichen Diskurses.',
        'Eine schrittweise Verzerrung des historischen Bewusstseins durch das Entfernen unpassender Kapitel.',
        'Die unmittelbare Errichtung neuer Denkmäler für vergessene Opfer.'
      ], correct:2 },
      { q:'Welche Überschrift passt am besten zu Absatz 3?', options:[
        'Die staatliche Lenkung der Geschichtsschreibung im Wandel der Epochen',
        'Warum das 19. Jahrhundert völlig frei von nationalen Mythen war',
        'Die Entstehung der modernen digitalen Medien im späten 20. Jahrhundert',
        'Der dauerhafte Erfolg starrer nationaler Meistererzählungen bis in die Gegenwart'
      ], correct:0 },
      { q:'In Absatz 4 wird über die digitale Medienlandschaft ausgesagt, dass ...', options:[
        'sie die historische Halbwertszeit von Ereignissen durch digitale Speicherung massiv verlängert.',
        'sie dafür sorgt, dass epochale Ereignisse niemals in Vergessenheit geraten.',
        'sie durch die Informationsflut zu einer Verkürzung der historischen Halbwertszeit führt.',
        'sie den Menschen hilft, historische Zusammenhänge tiefgreifender zu analysieren.'
      ], correct:2 },
      { q:'Welche Rolle spielen laut Absatz 5 zivilgesellschaftliche Initiativen?', options:[
        'Sie verschärfen die staatliche Zensur historischer Archive.',
        'Sie demokratisieren den Zugang zur Vergangenheit durch Online-Projekte und Archive.',
        'Sie sorgen für eine perfekte Verifizierung und Vereinheitlichung aller historischen Daten.',
        'Sie verhindern vollständig, dass digitale Daten unüberschaubar werden.'
      ], correct:1 },
      { q:'Welche Sorge äußern Kulturwissenschaftler laut Absatz 6?', options:[
        'Dass zu wenig an historische Ereignisse erinnert wird.',
        'Dass eine Inflation des Gedenkens zu einer oberflächlichen Eventkultur führt.',
        'Dass digitale Hashtags die wissenschaftliche Geschichtsschreibung komplett ersetzen.',
        'Dass historische Wahrheiten für immer im Verborgenen bleiben.'
      ], correct:1 },
      { q:'Hauptanliegen des gesamten Textes ist es, ...', options:[
        'eine Anleitung zur perfekten Gestaltung von Gedenkstätten zu geben.',
        'die Mechanismen, Dynamiken und Konflikte des kollektiven Erinnerns und Vergessens zu beleuchten.',
        'zu beweisen, dass Vergessen für eine moderne Gesellschaft stets schädlich ist.',
        'die digitale Medienlandschaft als einzige Ursache für Geschichtsverlust darzustellen.'
      ], correct:1 }
    ]
  },
  { ...TEMPLATE[3],
    instructions:'Lesen Sie den Expertenkommentar. Ordnen Sie die Textstellen 1 – 4 den Aussagen unten zu.',
    title:'Aufgabe 4: Kommentar zur Zukunft der urbanen Mobilität',
    passageText:`Die feste Überzeugung, dass das private Auto in unseren Städten langfristig völlig obsolet wird und durch vollautomatisierte Schwarmtaxis komplett ersetzt werden kann, gilt in verkehrspolitischen Debatten mancherorts als unumstößliches Dogma. <strong>[1] Ob diese optimistische Verkehrswende-Hypothese jedoch realitätsnah ist, muss stark bezweifelt werden.</strong> Zwar schreitet die Entwicklung autonomer Fahrzeugflotten rasch voran. <strong>[2] Man muss allerdings anerkennen, dass die rechtlichen und infrastrukturellen Hürden für den Mischverkehr in historischen Altstädten gigantisch sind.</strong> Der urbane Raum ist begrenzt. Womöglich werden individuelle Mobilitätsbedürfnisse auch in Zukunft hybride Lösungen erfordern, bei denen der öffentliche Nahverkehr mit flexiblen Individualangeboten verschmilzt. Die Vision der autolosen Smart City könnte sich somit als voreiliger Schnellschuss erweisen. <strong>[3] Dass sich dieser radikale Ansatz dennoch so großer Beliebtheit erfreut, liegt vor allem daran, dass er perfekt in das moderne Sehnsuchtsbild einer emissionsfreien, lärmfreien Retortenstadt passt.</strong> In einer von Digitalisierung geprägten Euphorie werden physikalische Kapazitätsgrenzen des Straßenraums oft ausgeblendet. <strong>[4] Dank moderner Verkehrssteuerung und intelligentem Flächenmanagement werden wir jedoch hoffentlich in der Lage sein, den städtischen Raum gerechter und effizienter aufzuteilen.</strong>`,
    textStellen:[1, 2, 3, 4],
    options:[
      'Der Experte erklärt ein soziologisches Wunschdenken.',
      'Der Experte hofft auf eine gerechtere Flächenverteilung.',
      'Der Experte prognostiziert eine technische Revolution.',
      'Der Experte räumt eine aktuelle Hürde ein.',
      'Der Experte stellt eine populäre Annahme in Frage.',
      'Der Experte beschreibt die historischen Ursprünge der Autostadt.',
      'Der Experte verteidigt die uneingeschränkte Autonutzung.',
      'Der Experte widerspricht den Gesetzen der Physik.'
    ],
    correct:[4, 3, 0, 1]
  },
  { ...TEMPLATE[4],
    instructions:'Lesen Sie den Text. Ordnen Sie die Aussagen 1–7 zu den Kategorien zu.',
    title:'Aufgabe 5: Das Konsumverhalten von Millennials und Generation Z',
    passage:'Untersuchungen zum Kaufverhalten jüngerer Generationen – insbesondere der Millennials und der Generation Z – stehen im Fokus moderner marktwirtschaftlicher Analysen. Eine aktuelle europaweite Studie verglich das Konsumverhalten dieser Gruppen anhand von fünf Kernindikatoren mit dem traditioneller Käuferschichten: Markenloyalität, Nachhaltigkeitsbewusstsein, Relevanz von Online-Bewertungen, Preis-Leistungs-Verhältnis sowie Impulskaufneigung. Probanden der jüngeren Kohorten erwiesen sich in den Punkten ökologische Transparenz und digitale Recherche als wesentlich anspruchsvoller – sie gaben an, vor jedem Kauf gezielt nach Zertifikaten zu suchen, Rezensionen zu prüfen und Marken bei ethischen Verfehlungen sofort zu boykottieren. Ältere Verbrauchergruppen erzielten dagegen höhere Werte bei klassischer Markenloyalität und zeigten sich weniger geneigt, etablierte Anbieter zugunsten unbekannter Start-ups zu verlassen. Sie vertrauen eher auf langjährige Gewohnheiten und persönliche Empfehlungen aus ihrem unmittelbaren sozialen Umfeld. Hinsichtlich der generellen Zahlungsbereitschaft für umweltfreundliche Produkte zeigten sich jedoch kaum statistisch signifikante Unterschiede zwischen den Altersgruppen, sofern die finanzielle Belastung einen bestimmten Rahmen nicht überschritt.',
    columns:['Jüngere Generationen (Millennials/Gen Z)','Ältere Verbrauchergruppen','beide','passt nicht'],
    items:[
      {text:'Diese Gruppe wechselt Marken bei ethischen Verfehlungen sofort.', correct:0},
      {text:'Diese Personen zeigen eine ausgeprägte Treue gegenüber etablierten Anbietern.', correct:1},
      {text:'Diese Verbraucher sind bereit, für zertifizierte Bio-Produkte mehr zu bezahlen.', correct:2},
      {text:'Diese Käuferschicht verlässt sich primär auf persönliche Empfehlungen aus dem Bekanntenkreis.', correct:1},
      {text:'Diese Personen boykottieren Unternehmen aktiv wegen mangelnder Transparenz.', correct:0},
      {text:'Diese Gruppe kauft ausschließlich im stationären Handel vor Ort ein.', correct:3},
      {text:'Diese Verbraucher prüfen vor dem Erwerb intensiv Online-Bewertungen.', correct:0}
    ]
  },
  { ...TEMPLATE[5],
    instructions:'Lesen Sie den Text. Entscheiden Sie, welche Aussagen stimmen, und ordnen Sie genau vier Aussagen der Tabelle zu (2 Vorteile, 2 Nachteile).',
    title:'Aufgabe 6: Vertikaler Landbau (Vertical Farming)',
    passage:'Der urbane oder vertikale Landbau gilt als zukunftsweisender Ansatz, um die Nahrungsmittelversorgung in stark verdichteten Ballungsräumen sicherzustellen. Durch den anbaumäßig gestapelten Anbau in geschlossenen Gebäuden unter kontrollierten Licht- und Klimabedingungen lassen sich Erträge pro Quadratmeter massiv steigern. Ein weiterer großer Vorzug ist der extrem sparsame Umgang mit Wasser, da moderne Hydrokultursysteme den Großteil der Flüssigkeit im geschlossenen Kreislauf recyceln, wodurch der Wasserverbrauch im Vergleich zur Freilandwirtschaft um bis zu 95 Prozent sinkt. Zudem entfallen lange Transportwege, da die Produktion direkt in den Konsumzentren stattfindet. Dennoch ist das Konzept mit gravierenden Nachteilen verbunden: Der energetische Aufwand für künstliche LED-Beleuchtung und hochkomplexe Klimatisierung ist enorm und treibt die Betriebskosten in die Höhe. Darüber hinaus ist das Spektrum der sinnvoll anbaubaren Kulturpflanzen derzeit noch stark auf schnell wachsende Blattgemüse- und Kräuterarten beschränkt, während der großflächige Anbau von Grundnahrungsmitteln wie Getreide oder Kartoffeln wirtschaftlich völlig unrentabel bleibt.',
    aussagen:[
      { key:'a', text:'[a] Drastische Einsparung von wertvollem Wasser' },
      { key:'b', text:'[b] Geringer Energiebedarf dank natürlicher Sonneneinstrahlung' },
      { key:'c', text:'[c] Lokale Produktion und dadurch entfallende Transportwege' },
      { key:'d', text:'[d] Wirtschaftlich rentabler Anbau von Getreide und Kartoffeln' },
      { key:'e', text:'[e] Enorme Stromkosten durch künstliche Beleuchtung' },
      { key:'f', text:'[f] Vollständiger Verzicht auf jegliche Pflanzennährstoffe' },
      { key:'g', text:'[g] Stark eingeschränkte Pflanzenauswahl im Vergleich zum Freiland' },
      { key:'h', text:'[h] Garantierte Senkung der Lebensmittelpreise für Endverbraucher' }
    ],
    correctMap: { v1: 'a', v2: 'c', n3: 'e', n4: 'g' }
  },
  { ...TEMPLATE[6],
    instructions:'Kreuzen Sie genau drei Sätze an, die inhaltlich falsche Informationen enthalten.',
    title:'Aufgabe 7: Die Renaissance der Kernfusion',
    passage:'Die Kernfusion, bei der atomare Leichtkerne unter extremen Temperaturen verschmolzen werden, gilt seit Jahrzehnten als der heilige Gral der Energietechnik. Im Gegensatz zur Kernspaltung entsteht bei diesem Prozess kein langlebiger radioaktiver Abfall, und es besteht keine Gefahr einer unkontrollierten Kettenreaktion. Jüngste experimentelle Durchbrüche an internationalen Forschungseinrichtungen haben gezeigt, dass es erstmals gelungen ist, in einem kontrollierten Plasmareaktor kurzzeitig mehr Fusionsenergie freizusetzen, als für die Aufheizung des Plasmas aufgewendet werden musste – ein historischer Meilenstein auf dem Weg zur Netto-Energiegewinnung. Dennoch warnen Physiker vor übertriebenem Optimismus: Bis kommerzielle Fusionskraftwerke stablien Strom ins Netz einspeisen, werden voraussichtlich noch mehrere Jahrzehnte vergehen, da gigantische materialwissenschaftliche und thermische Herausforderungen ungelöst sind.',
    graphicData:[{year:'2010',val:10},{year:'2015',val:25},{year:'2020',val:50},{year:'2023',val:100}],
    graphicCaption:'Grafik: Entwicklung der Netto-Energiegewinnung bei Fusionsexperimenten (symbolisch)',
    sentences:[
      {text:'Bei der Kernfusion werden Atomkerne verschmolzen.', wrong:false},
      {text:'Im Vergleich zur Kernspaltung entsteht hierbei langlebiger radioaktiver Atommüll in großen Mengen.', wrong:true},
      {text:'Kürzlich gelang es Forschern erstmals, mehr Fusionsenergie zu erzeugen, als für das Aufheizen investiert wurde.', wrong:false},
      {text:'Kommerzielle Fusionskraftwerke stehen nach übereinstimmender Expertenmeinung bereits im nächsten Jahr flächendeckend zur Verfügung.', wrong:true},
      {text:'Es gibt weiterhin erhebliche materialwissenschaftliche und thermische Hürden zu bewältigen.', wrong:false},
      {text:'Der Fusionsprozess birgt kein Risiko einer unkontrollierten nuklearen Kettenreaktion.', wrong:false},
      {text:'Die physikalischen Prinzipien der Kernfusion sind wissenschaftlich noch völlig unerforscht.', wrong:true},
      {text:'Die Technologie gilt in Fachkreisen als potenzieller Meilenstein für eine saubere Energieversorgung der Zukunft.', wrong:false}
    ]
  }
];
const MT5 = [
  { ...TEMPLATE[0],
    instructions:'Lesen Sie den Text. Entscheiden Sie für die Lücken 1 – 5, welches Wort am besten passt. Für jede Lücke gibt es genau eine richtige Lösung.',
    title:'Dekade des Dialogs: Zehn Jahre Runder Tisch Meeresmüll',
    segments:[
      'Seit nunmehr zehn Jahren fungiert der Runde Tisch Meeresmüll als transdisziplinäres Forum, das Akteure aus Wissenschaft, Wirtschaft und Zivilgesellschaft vereint, um koordinierten Maßnahmen gegen die schleichende Kontamination der maritimen Ökosysteme Einhalt zu ',
      '. Was seinerzeit als intermediäre Plattform initiiert wurde, hat sich zu einem essenziellen Instrument der politischen Willensbildung entwickelt, wenngleich die Umsetzung konkreter Restriktionen angesichts divergierender Lobbyinteressen oft ',
      ' verläuft. Insbesondere die ubiquitäre Verbreitung von Mikroplastik, das sich durch den sukzessiven Zerfall makroskopischer Kunststoffe in den Sedimenten akkumuliert, stellt die Forschergemeinde vor enorme Herausforderungen. Jüngste Analysen ',
      ' unmissverständlich, dass selbst entlegene Tiefseeregionen mittlerweile von synthetischen Polymeren durchdrungen sind, wodurch die marine Biodiversität nachhaltig kompromittiert wird. Um diesem schleichenden Kollaps entgegenzuwirken, fordert das Gremium eine drastische Entbürokratisierung der Kreislaufwirtschaft sowie die Implementierung verbindlicher Sanktionsmechanismen. Das inhärente Dilemma dieses Dialogformats besteht jedoch darin, dass freiwillige Selbstverpflichtungen der Industrie häufig ',
      ' bleiben, sofern ihnen keine legislativen Zwangsmittel unterlegt werden. Dennoch manifestiert sich am Ende der Dekade ein gewisser Paradigmenwechsel, ',
      ' Implementierung die gesamtgesellschaftliche Sensibilisierung für einen nachhaltigen Ressourcengebrauch maßgeblich vorangetrieben hat.'
    ],
    gaps:[
      {options:['gewähren','gebieten','verwehren','stiften'], correct:1},
      {options:['schleppend','rasant','schleunig','abrupt'], correct:0},
      {options:['evozieren','konstatieren','postulieren','insinuieren'], correct:1},
      {options:['wirkungslos','omnipräsent','marginal','latent'], correct:0},
      {options:['der','den','dessen','denen'], correct:2}
    ]
  },
  { ...TEMPLATE[1],
    instructions:'Bringen Sie die fünf Textabschnitte mit den Pfeiltasten in die richtige Reihenfolge.',
    title:'Neutrinos und IceCube',
    correctOrder:[0,1,2,3,4],
    items:[
      'Der kubikkilometergroße Detektor IceCube, der tief im antarktischen Inlandeis versenkt wurde, stellt eine technologische Meisterleistung dar, deren Konzeption und Errichtung die Grenzen des Machbaren jahrelang ausgereizt hat.',
      'Im Zentrum dieser astrophysikalischen Bemühungen stehen hochenergetische Neutrinos, jene flüchtigen Elementarteilchen, die als kosmische Boten unbeschadet immense Distanzen aus den heftigsten Regionen des Universums überwinden.',
      'Da diese Geisterteilchen nahezu wechselwirkungsfrei Materie durchqueren, gleicht ihr Nachweis der sprichwörtlichen Suche nach der Stecknadel im Heuhaufen und erforderte die Ausnutzung optischer Eigenschaften des reinen Eises.',
      'Die akribische Pionierarbeit von Physikern wie Francis Halzen, die diese Detektion letztlich ermöglichte, öffnet ein neues Fenster zur Erforschung kataklysmischer kosmischer Phänomene und revolutioniert unser Verständnis der Astrophysik.',
      'Dank dieser wegweisenden Entdeckungen und der präzisen Lokalisierung hochenergetischer Neutrinoquellen gilt die Auszeichnung mit dem Nobelpreis für Physik als folgerichtige Würdigung jahrzehntelanger wissenschaftlicher Exzellenz.'
    ],
    shuffledStart:[2,4,3,0,1]
  },
  { ...TEMPLATE[2],
    instructions:'Lesen Sie den Text. Beantworten Sie die Fragen 1–6. Entscheiden Sie, welche Lösung passt. Für jede Frage gibt es genau eine richtige Lösung.',
    title:'Das Faszinosum der Nobelpreis-Verleihung: Im Spannungsfeld zwischen wissenschaftlicher Exzellenz und medialer Inszenierung',
    passage:[
      '(1) Wenn im Oktoberturnus die Pforten der Königlich-Schwedischen Akademie der Wissenschaften in Stockholm geöffnet werden, blickt die globale Wissenschaftsgemeinschaft gebannt auf den skandinavischen Norden. Die Verkündung des Chemie-Nobelpreises markiert dabei alljährlich einen liminalen Moment, in dem monatelange, bisweilen spekulative Diskurse der Fachpresse in eine finale Realität übergehen. Dass dieses Prozedere trotz modernster Kommunikationsstrukturen von einer fast anachronistischen Geheimhaltung umgeben ist, verleiht dem Ritual eine Aura der Unberechenbarkeit. Dennoch offenbart die Historie, dass selbst vermeintlich hermetisch abriegelbare Gremienprozesse bisweilen durch menschliches Versagen oder administrative Indiskretionen kontaminiert wurden, was dem Mythos der Unfehlbarkeit temporär Risse zufügte.',
      '(2) Den zeitlichen Korridor vor der Bekanntgabe prägt ein inhärentes Paradoxon: Einerseits kulminieren die szientifischen Prognosen in einer schier unüberschaubaren Fülle von Analysen, andererseits agieren die Entscheidungsträger in einem Vakuum absoluten Stillschweigens. Fachleute aus Disziplinen wie der Bioinformatik, der supramolekularen Chemie oder der physikalischen Chemie liefern sich im Vorfeld einen Schlagabtausch über epistemische Durchbrüche, deren Tragweite oft erst Dekaden später gänzlich ermessen werden kann. Die Kontroverse entzündet sich hierbei primär an der restriktiven Statutarregelung, wonach eine Würdigung auf maximal drei Personen limitiert ist – ein Umstand, der in Zeiten vernetzter, kollaborativer Großforschung zunehmend als dysfunktionales Korsett empfunden wird.',
      '(3) In seiner ursprünglichen Intention von Alfred Nobel konzipiert als Katalysator für jene Errungenschaften, „welche der Menschheit den größten Nutzen geleistet haben“, hat sich der Preis zu einem machtpolitischen und reputationsökonomischen Instrument sondergleichen entwickelt. Der historische Bedeutungswandel lässt sich dabei unschwer an der Verschiebung des wissenschaftlichen Paradigmas ablesen: Dominierten zu Beginn des 20. Jahrhunderts noch bahnbrechende Syntheseverfahren und makroskopische Stoffanalysen, so reflektiert das heutige Preisspektrum die Durchdringung der Disziplinen an ihren Schnittstellen – etwa dort, wo Chemie, Nanotechnologie und molekulare Biomedizin untrennbar verschmelzen.',
      '(4) So fungiert der Nobelpreis längst nicht mehr nur als retrospektive Retrospektive für Lebenswerke, sondern zunehmend als prospektiver Wegbereiter für zukünftige technologische Paradigmenwechsel. Die Verleihung katalysiert globale Investitionen, lenkt die akademische Aufmerksamkeit auf vernachlässigte Forschungsnischen und determiniert nicht selten die Karriereverläufe ganzer Forschergenerationen. Kritiker monieren allerdings seit Jahren eine gewisse Eurozentrismus-Schieflage sowie eine hartnäckige Unterrepräsentanz von Forscherinnen, obgleich die Institution in jüngerer Vergangenheit spürbare Anstrengungen unternimmt, diversicheren Kriterien Rechnung zu tragen und den eurozentrischen Habitus aufzubrechen.',
      '(5) Abseits der rein wissenschaftlichen und ökonomischen Dimension hat sich rund um die Bekanntgabe ein globaler medialer Event-Charakter etabliert. Live-Streams, Expertendiskussionen in Nachrichtensendungen und spekulative Wettquoten begleiten die Stunden vor der Öffnung des goldenen Umschlags in Stockholm. Während einige Medienwissenschaftler diesen Hype als notwendige und zeitgemäße Popularisierung der Wissenschaft begrüßen, warnen Soziologen vor einer oberflächlichen Eventisierung, bei der komplexe Grundlagenforschung auf reißhafte Schlagzeilen reduziert und die eigentliche intellektuelle Leistung entwertet wird.',
      '(6) Trotz aller berechtigten Kritik an der Inszenierung und den starren Auswahlkriterien bleibt die Strahlkraft des Chemie-Nobelpreises ungebrochen. Er fungiert als ultimativer Gradmesser wissenschaftlichen Fortschritts und erinnert die Welt daran, dass transformative Entdeckungen oft das Resultat jahrzehntelanger, geduldiger Grundlagenforschung sind. Die künftige Herausforderung für das Nobelkomitee wird darin bestehen, diesen historischen Anspruch mit den rasanten, vernetzten Realitäten der modernen Wissenschaftslandschaft in Einklang zu bringen, ohne dabei seine einzigartige historische Integrität zu opfern.'
    ],
    questions:[
      { q:'In Absatz 1 wird dargelegt, dass das Auswahlverfahren ...', options:[
        'trotz fortschrittlicher Digitalisierungsprozesse vollkommen transparent gestaltet wird.',
        'durch seine absolute Diskretion und Unvorhersehbarkeit einen fast kultischen Charakter behält.',
        'in der Vergangenheit häufiger durch gezielte, offizielle Vorab-Leaks an Glaubwürdigkeit verlor.',
        'von der schwedischen Regierung und nicht von akademischen Gremien überwacht wird.'
      ], correct:1 },
      { q:'Welcher Sachverhalt wird in Absatz 2 bezüglich der Vorbereitungsphase konstatituiert?', options:[
        'Die akademische Welt fordert vehement eine Aufhebung der Beschränkung auf maximal drei Preisträger.',
        'Die Experten prognostizieren stets fehlerfrei, welche konkreten Forschungsgruppen prämiert werden.',
        'Es herrscht ein Spannungsverhältnis zwischen öffentlichem Spekulationsdruck und institutioneller Verschwiegenheit.',
        'Moderne Großforschungsprojekte werden aufgrund mangelnder Zusammenarbeit ausgeschlossen.'
      ], correct:2 },
      { q:'Welche Kernaussage lässt sich aus Absatz 3 über den historischen Wandel ableiten?', options:[
        'Die ursprünglichen Ideale Alfred Nobels wurden im Laufe der Jahrzehnte vollständig verworfen.',
        'Der Fokus hat sich von isolierten Einzelleistungen hin zu stark interdisziplinären Verbundforschungen verschoben.',
        'Klassische Syntheseverfahren und makroskopische Analysen spielen in der modernen Chemie keine Rolle mehr.',
        'Der Preis hat seine Funktion als Nutzenbringer zugunsten reiner Finanzinteressen eingebüßt.'
      ], correct:1 },
      { q:'Wie bewertet der Verfasser in Absatz 4 die gegenwärtige Funktion des Nobelpreises?', options:[
        'Er sieht ihn primär als rückwärtsgewandte Ehrung ohne nennenswerte Auswirkungen auf Technologien.',
        'Er kritisiert, dass der Preis keinerlei Einfluss mehr auf die globale Verteilung von Forschungsbudgets ausübt.',
        'Er hebt hervor, dass die Auszeichnung als steuerndes Instrument für Forschungsströme fungiert, trotz Defiziten.',
        'Er stellt fest, dass die strukturellen Probleme bezüglich Diversität mittlerweile vollständig behoben sind.'
      ], correct:2 },
      { q:'Welche Position wird in Absatz 5 bezüglich des medialen Event-Charakters vertreten?', options:[
        'Die Eventisierung wird von Kritikern als Gefahr für die intellektuelle Tiefe der Wissenschaft gesehen.',
        'Sämtliche Medienwissenschaftler sind sich einig, dass der Hype wissenschaftliche Arbeit exakt abbildet.',
        'Die Live-Übertragungen haben die traditionelle Geheimhaltung in Stockholm komplett obsolet gemacht.',
        'Die Wettquoten bestimmen mittlerweile direkt die offizielle Entscheidungsfindung des Nobelkomitees.'
      ], correct:0 },
      { q:'Hauptanliegen des Gesamttextes ist es, ...', options:[
        'die exakten Namen der diesjährigen Preisträger im Voraus zu veröffentlichen.',
        'den historischen Ursprung von Alfred Nobels testamentarischen Verfügungen zu widerlegen.',
        'das komplexe Geflecht aus Geheimhaltung, Bedeutungswandel und medialer Inszenierung des Preises zu beleuchten.',
        'ausschließlich die technischen Details moderner nanopartikulärer Syntheseverfahren zu erklären.'
      ], correct:2 }
    ]
  },
  { ...TEMPLATE[3],
    instructions:'Lesen Sie den Text. Ordnen Sie die Textstellen 1–4 den Aussagen unten zu. Die Zahlen beziehen sich immer auf den nachfolgenden Satz. Für jede Textstelle gibt es genau eine richtige Lösung.',
    title:'Aufgabe 4: Kommentar eines Experten zur digitalen Infrastruktur',
    passageText:`Die Ansicht, dass die Digitalisierung und der stetig wachsende Datenverkehr unweigerlich zu einem dramatischen Anstieg des globalen Energieverbrauchs führen, wird in der Öffentlichkeit kaum noch diskutiert; man nimmt sie schlicht als unvermeidlich hin. <strong>[1] Ob dieser Trend jedoch unumstößlich ist, darf bezweifelt werden.</strong> Bereits heute ist es möglich, durch hochmoderne Server-Architekturen und intelligente Kühlungssysteme den Strombedarf drastisch zu senken, sofern man auf erneuerbare Energien, optimierte Algorithmen und energieeffiziente Hardware setzt. <strong>[2] Diese Maßnahmen erfordern zwar zu Beginn hohe Investitionen und technisches Know-how.</strong> Doch wie wir wissen, schreitet die Innovation im Bereich der Informationstechnik rasant voran. Vielleicht werden wir in absehbarer Zeit künstliche Intelligenz nutzen, um Rechenzentren vollautomatisch und abwärmefrei zu steuern. Oder wir werden in der Lage sein, überschüssige Wärme direkt in Fernwärmenetze einzuspeisen, um ganze Stadtteile zu beheizen. Wenn man vor einigen Jahrzehnten Informatikern gesagt hätte, dass wir heute gigantische Datenmengen in Bruchteilen von Sekunden verarbeiten und gleichzeitig den CO2-Ausstoß pro Rechenoperation massiv reduzieren können, hätte man sie für größenwahnsinnig erklärt. Doch durch ingenieurtechnische Höchstleistungen ist genau das gelungen.<br><br>Die Sorge vor einer unkontrollierbaren technologischen Umweltbelastung könnte also übertrieben sein. <strong>[3] Dass diese pessimistische Sichtweise dennoch so weit verbreitet ist, liegt vor allem daran, dass unser ökologisches Bewusstsein oft noch von Schreckensszenarien geprägt ist.</strong> Damals hieß es: Jede neue Technologie zerstört die Umwelt; wenn alle Ressourcen verbraucht sind, bricht das System zusammen. In Wahrheit sind moderne Rechenzentren aber längst zu Vorreitern der Kreislaufwirtschaft geworden. <strong>[4] Und mit unserem Erfindergeist und unserer Entschlossenheit werden wir auch in Zukunft in der Lage sein, die digitale Transformation ökologisch und ökonomisch sinnvoll zu gestalten.</strong>`,
    textStellen:[1, 2, 3, 4],
    options:[
      'Der Experte erklärt etwas.',
      'Der Experte hofft auf etwas.',
      'Der Experte prognostiziert etwas.',
      'Der Experte räumt etwas ein.',
      'Der Experte stellt etwas in Frage.',
      'Der Experte vermutet etwas.',
      'Der Experte verteidigt etwas.',
      'Der Experte widerspricht etwas.'
    ],
    correct:[4, 3, 0, 2]
  },
  { ...TEMPLATE[4],
    instructions:'Lesen Sie den Text. Ordnen Sie die Aussagen 1–7 zu: Entscheiden Sie für jede Aussage, ob sie zu einsprachigen Menschen, zu mehrsprachigen Menschen oder zu beiden passt. Es kann auch sein, dass einzelne Aussagen gar nicht passen.',
    title:'Wie Sprache unser Denken und unsere Identität prägt',
    passage:'Ob sich Einsprachige und Mehrsprachige hinsichtlich ihrer kognitiven Flexibilität tatsächlich in messbaren Kategorien aufteilen lassen – und wie stark die Unterschiede im Zweifelsfall ausgeprägt sind –, diskutieren Sprachwissenschaftler und Kognitionsforscher bereits seit Jahrzehnten. Eine aktuelle Studie liefert nun neue Erkenntnisse zu dieser Frage. Dabei wurden monolinguale und plurilinguale Personen im Hinblick auf fünf fundamentale Persönlichkeitsmerkmale und mentale Fähigkeiten untersucht: Offenheit für (neue) Erfahrungen, kognitive Kontrollfunktionen, Empathie, Flexibilität bei Perspektivwechseln sowie emotionale Belastbarkeit. Personen, die sich selbst als einsprachig bezeichneten, erwiesen sich im Durchschnitt als strukturierter in vertrauten Routinen, zielstrebiger bei monolingualen Aufgaben und wiesen eine hohe Planungsgenauigkeit auf – sie sind also beispielsweise verlässlicher bei linearen Abläufen und planen alltägliche Handlungen eher im Voraus. Selbst ernannte Mehrsprachige erzielten dagegen höhere Werte in puncto Offenheit, kognitiver Agilität und sozialer Empathie. Sie sind damit im Mittel etwas experimentierfreudiger, neigen eher dazu, feste Denkmuster zu hinterfragen – gleichzeitig werden sie aber bisweilen auch stärker von mentaler Erschöpfung durch ständiges Abwägen geplagt. Ein relativ ähnliches Bild liefert auch eine andere Untersuchung. Insgesamt deuten die neueren Studien auf einen engen Zusammenhang zwischen sprachlicher Vielfalt und der Ausprägung spezifischer mentaler Kompetenzen hin. Wie dieser Zusammenhang genau aussehen könnte, ist jedoch nicht abschließend geklärt. Kognitionsforscher vertreten die These, dass das Erlernen mehrerer Sprachen unser Gehirn flexibler macht, indem es neuronale Netzwerke stärkt, die für die Bewältigung komplexer Konflikte zuständig sind. Um ihre Vermutung zu überprüfen, untersuchten sie in zwei unterschiedlichen Studien mit jeweils rund 500 Probanden, wie dominant monolinguale und plurilinguale Personen in Gruppenprozessen auftreten. Dabei entdeckten sie, dass Einsprachige im Schnitt eine ausgeprägte strukturierte Prozessorientierung besaßen – sie präferierten klare Hierarchien zwischen kommunikativen Regeln und glaubten, dass feste Strukturen Stabilität sichern. Die Wissenschaftler sehen das als Hinweis darauf, dass Menschen mit nur einer Muttersprache oft stabile, bewährte Rahmen bevorzugen, während Mehrsprachige bereit sind, sich flexibel an wechselnde Kontexte anzupassen. So konnten die Wissenschaftler hinsichtlich Durchsetzungsvermögen und sprachlicher Präzision keine Unterschiede zwischen ihren Versuchspersonen finden. Wie das zu ihrer Hypothese passt, konnten die Wissenschaftler allerdings nicht genau erklären.',
    columns:['einsprachige Menschen','mehrsprachige Menschen','beide','passt nicht'],
    items:[
      {text:'Diese Personen neigen dazu, feste Routinen und klare Strukturen zu bevorzugen.', correct:0},
      {text:'Diese Gruppe stellt sprachliche und gesellschaftliche Denkmuster gerne in Frage.', correct:1},
      {text:'Diese Gruppe verfügt nachweislich über ein höheres Durchsetzungsvermögen im Beruf.', correct:3},
      {text:'Diese Menschen sind im Durchschnitt experimentierfreudiger und offener für Neues.', correct:1},
      {text:'Diese Personen passen sich flexibel an wechselnde kommunikative Kontexte an.', correct:1},
      {text:'Diese Gruppe ist psychisch instabiler und leidet häufiger unter chronischer Angst.', correct:3},
      {text:'Diese Personen zeigen keine Unterschiede in ihrer sprachlichen Präzision.', correct:2}
    ]
  },
  { ...TEMPLATE[5],
    instructions:'Lesen Sie den Text. Entscheiden Sie, welche Aussagen stimmen, und ordnen Sie genau vier Aussagen der Tabelle zu (2 Vorteile, 2 Nachteile).',
    title:'Entstanden die ersten Tiere 200 Millionen Jahre früher als gedacht?',
    passage:'Paläontologen stehen seit Jahrzehnten vor der großen Herausforderung, den exakten Ursprung des tierischen Lebens auf der Erde zu datieren. Bislang ging man in der Fachwelt davon aus, dass die ersten echten mehrzelligen Tiere erst vor rund 600 Millionen Jahren während der Ediacara-Periode entstanden. Doch neue geologische und biochemische Analysen von fossilen Gesteinsschichten werfen dieses traditionelle Zeitfenster komplett über den Haufen. Forscher analysierten winzige Biomarker – spezifische chemische Moleküle, die von urzeitlichen Schwämmen stammen könnten – in Schichten, die auf ein Alter von über 800 Millionen Jahren datiert wurden. Zwar verlief die Evolution zu jener Zeit extrem langsam, und fossile Spuren sind aufgrund tektonischer Verschiebungen nur äußerst spärlich erhalten, dennoch liefern diese chemischen Indizien eine unerwartet frühe Präsenz von primitiven Lebewesen. Dennoch sollte man bei solchen Befunden äußerst vorsichtig sein, denn bestimmte geochemische Prozesse oder abiotische Reaktionen können ähnliche Spuren hinterlassen, ohne dass jemals biologisches Leben im Spiel war. Spezifische mineralische Ablagerungen ähneln oft verblüffend den organischen Biomarkern, weshalb die Interpretation der Funde in der Fachwelt heftig umstritten bleibt. Beachten sollte man zudem, dass sich molekulare Uhren in der Genetik erheblich von klassischen Fossilienfunden unterscheiden. Während Fossilien direkte Momentaufnahmen einer vergangenen Epoche liefern, basieren genetische Stammbäume auf statistischen Hochrechnungen von Mutationsraten. Obwohl viele Forscher die neuen Daten als revolutionär feiern, darf man nicht außer Acht lassen, dass eine längere Einwirkungsdauer von Verunreinigungen in alten Gesteinsschichten die Ergebnisse verfälschen kann. Miterleben müssen wir deshalb eine kritische Neubeurteilung bisheriger Lehrminuten. Generell lässt sich sagen, dass molekulare Datierungen wertvolle Hinweise liefern, ihre absolute Verlässlichkeit jedoch stets durch physische Fossilienfunde untermauert werden muss.',
    aussagen:[
      { key:'a', text:'[a] Molekulare Spuren als Altersindiz' },
      { key:'b', text:'[b] Eindeutigkeit der Funde umstritten' },
      { key:'c', text:'[c] Rasante Artenvielfalt im Präkambrium' },
      { key:'d', text:'[d] Statistische Berechnungen von Genomen' },
      { key:'e', text:'[e] Risiko von chemischen Verunreinigungen' },
      { key:'f', text:'[f] Ausschließlich fossile Beweismittel' },
      { key:'g', text:'[g] Vollständiger Ersatz der Geologie' },
      { key:'h', text:'[h] Lückenhafte Erhaltung durch Tektonik' }
    ],
    correctMap: { v1: 'a', v2: 'd', n3: 'b', n4: 'e' }
  },
  { ...TEMPLATE[6],
    instructions:'Lesen Sie den Text. Identifizieren Sie jene Aussagen in der Zusammenfassung, welche sachlich inkorrekte oder verfälschte Informationen beinhalten. Es existieren exakt drei inhaltlich fehlerhafte Aussagen.',
    title:'Das Paradigma des globalen Kapitalismus im Diskurs',
    passage:'Angesichts multipler globaler Krisen unterliegt die Konzeption moderner Wirtschaftsstrukturen einem tiefgreifenden Paradigmenwechsel. Im Rahmen des jüngst publizierten Global Capitalism Index (GCI) wurden exakt 161 Volkswirtschaften einer komparativen Analyse unterzogen, um deren makroökonomische Resilienz, institutionelle Integrität und soziale Wohlstandsverteilung zu quantifizieren. Die empirischen Befunde offenbaren gravierende Diskrepanzen: Während etablierte Industrienationen in Nordamerika und Europa traditionell Spitzenränge einnehmen, avancieren aufstrebende Märkte im globalen Süden zunehmend zu differenzierten Gravitationszentren. Ökonomen betonen hierbei nachdrücklich, dass die wirtschaftliche Valenz einer Nation heutzutage primär an intangiblen Faktoren wie Humankapitalinvestitionen, digitaler Adaptionsfähigkeit und ökologischer Nachhaltigkeit gemessen wird, wohingegen traditionelle Bruttoinlandsprodukt-Metriken an aussagekräftiger Relevanz einbüßen. Nichtsdestotrotz indizieren die erhobenen Daten besorgniserregende strukturelle Dysfunktionalitäten. Exemplarisch dafür steht das Phänomen einer sich sukzessive vertiefenden Kluft zwischen stagnierenden Reallöhnen und exponentiell steigenden Kapitalrenditen in westlichen Demokratien. Darüber hinaus konstatieren die Forscher, dass rund 34 Prozent der untersuchten Schwellenländer unter massiven Defiziten im Bereich der Rechtssicherheit leiden, wodurch transnationale Investitionsströme nachhaltig inhibiert werden. Trotz dringender Apprufe seitens wissenschaftlicher Expertisen zur Restrukturierung der globalen Finanzarchitektur verharren politische Entscheidungsträger in beharrlicher Passivität; eine international koordinierte Trendwende bleibt bislang aus. Flankierend hierzu mussten im Laufe des vergangenen Jahrzehnts zahllose kleine und mittlere Unternehmen (KMU) infolge verschärfter regulatorischer Bankenvorgaben und restriktiver Kreditvergabepraktiken Insolvenz anmelden. Diese Kapitalverknappung entfaltet verheerende Konsequenzen für die volkswirtschaftliche Innovationskraft: Es mangelt an essenzieller Risikofinanzierung für disruptive Zukunftstechnologien, wodurch die langfristige Wettbewerbsfähigkeit der betroffenen Staaten maßgeblich präjudiziert und geschwächt wird. In Anbetracht dieser multiplen Friktionen konstatieren Beobachter, dass die fortgesetzte Vernachlässigung struktureller Reformen die sozioökonomische Stabilität des globalen Gefüges mittel- bis langfristig gravierend gefährdet.',
    sentences:[
      {text:'Der Global Capitalism Index unterzog exakt 161 Volkswirtschaften einer umfassenden vergleichenden Analyse.', wrong:false},
      {text:'Die ökonomische Valenz einer Nation wird laut den Studienautoren primär anhand traditioneller Bruttoinlandsprodukt-Metriken bemessen.', wrong:true},
      {text:'Etablierte Industrienationen in Europa und Nordamerika beanspruchen traditionell die vorderen Ränge des Indikators für sich.', wrong:false},
      {text:'In westlichen Demokratien lässt sich eine progrediente Schere zwischen Kapitalrenditen und Reallöhnen nachweisen.', wrong:false},
      {text:'Etwa 34 Prozent der analysierten Schwellenländer sind mit gravierenden institutionellen Defiziten im Bereich der Rechtssicherheit konfrontiert.', wrong:false},
      {text:'Politische Entscheidungsträger haben umgehend auf die wissenschaftlichen Forderungen reagiert und umfassende Strukturreformen implementiert.', wrong:true},
      {text:'In den letzten zehn Jahren führte die restriktivere Kreditvergabe infolge strengerer Bankenvorgaben zur Insolvenz zahlreicher KMU.', wrong:false},
      {text:'Das akute Defizit an Risikokapital limitiert nachhaltig die Innovationsdynamik sowie das langfristige Wachstumspotenzial.', wrong:false},
      {text:'Die gegenwärtige wirtschaftliche Entwicklung begünstigt und maximiert die Zukunftsfähigkeit der betroffenen Regionen.', wrong:true}
    ]
  }
];

const MT6 = [
  { ...TEMPLATE[0],
    instructions:'Lesen Sie den Lückentext. Klicken Sie in die Lücken und entscheiden Sie, welches Wort passt. Für jede Lücke gibt es genau eine richtige Lösung.',
    title:'Keine Angst vor Spinnen und Schaben',
    segments:[
      'Wer Angst vor Spinnen hat, fürchtet sich oft auch vor anderen Tieren wie Ratten, Schlangen oder Schaben. Forscherinnen und Forscher haben nun ',
      ', dass sich der Erfolg einer Behandlung gegen Spinnenangst auch auf andere zuvor ',
      ' Tiere auswirkt: Personen, die ihre Angst vor Spinnen durch ein Konfrontationstraining reduziert hatten, fürchteten auch Schaben deutlich weniger. Die Forscher ',
      ' bei Personen, die Spinnen und Schaben gleichermaßen fürchteten, die erfolgreichste Behandlungsmethode gegen Angsterkrankungen an, die Konfrontationstherapie – allerdings nur mit Spinnen. Der zentrale Wirkmechanismus dabei ist das Umlernen der Angst: Personen mit einer Spinnenangst erkennen durch die Interaktion mit der Spinne, dass Spinnen nicht gefährlich und keine katastrophalen ',
      ' zu befürchten sind. Im Anschluss an die Behandlung hatten die Versuchspersonen weniger Angst und Ekel vor Spinnen. Erstaunlich war zudem, dass diese Gruppe auch von weniger Angst vor Schaben berichtete. Dieser Effekt trat ein, obwohl Schaben während der Konfrontation nie ',
      ' wurden.'
    ],
    gaps:[
      {options:['analysiert','durchgesetzt','festgelegt','festgestellt'], correct:3},
      {options:['besorgniserregende','furchteinflößende','gemeingefährliche','grauenhafte'], correct:1},
      {options:['führten','passten','setzten','wandten'], correct:3},
      {options:['Auswirkungen','Situationen','Verhältnisse','Zustände'], correct:0},
      {options:['angeboten','präpariert','präsentiert','verteilt'], correct:2}
    ]
  },
  { ...TEMPLATE[1],
    instructions:'Bringen Sie die fünf Textabschnitte mit den Pfeiltasten in die richtige Reihenfolge.',
    title:'Sprache und Sprechstörungen',
    correctOrder:[0,1,2,3,4],
    items:[
      'Kaum eine menschliche Fertigkeit ist so komplex wie die Sprachbeherrschung. In Sekundenbruchteilen analysiert unser Gehirn die Grammatik gehörter oder gelesener Sätze und ordnet die Wörter ihren Bedeutungen zu.',
      'Auch beim Sprechen fasst das Gehirn rasend schnell die Sprechabsicht in Worte und Sätze und gibt die nötigen Anweisungen an die feinen Muskeln in Zunge und Mund weiter.',
      'Wie anfällig dieser komplizierte Prozess ist, erleben wir fast täglich: Zum Beispiel, wenn uns Worte nicht einfallen, wenn wir mitten im Satz ins Stocken geraten oder uns versprechen.',
      'Treten Versprecher wie Buchstabendreher oder falsche Wörter häufig auf, sodass Gespräche zur Qual werden, dann liegt wahrscheinlich eine Sprach- oder Sprechstörung vor.',
      'Die möglichen Folgen: Angst vor Gesprächssituationen, berufliche Einschränkungen, Probleme beim Schreiben und Lesen, im schlimmsten Fall Vereinsamung. Zum Glück sind aber die meisten Sprach- und Sprechstörungen gut behandelbar.'
    ],
    shuffledStart:[0,1,3,2,4]
  },
  { ...TEMPLATE[2],
    instructions:'Lesen Sie den Text. Beantworten Sie die Fragen 1–7. Entscheiden Sie, welche Lösung passt. Für jede Frage gibt es genau eine richtige Lösung.',
    title:'Hygiene',
    passage:[
      '(1) Es ist noch keine 200 Jahre her, da starb jede zehnte Frau kurz nach der Geburt ihres Kindes. Kindbettfieber war eine häufige Diagnose. 1840 fanden Ärzte in einem österreichischen Krankenhaus heraus, dass sie durch den Einsatz von Chlorkalk das Sterblichkeitsrisiko der Schwangeren von zwölf auf knapp zwei Prozent senken konnten. Die Desinfektion war erfunden. Seitdem hat sich viel getan. Desinfektionsmittel kommen im Operationssaal zum Einsatz, um Verletzungen und lebensbedrohliche Wundinfektionen zu behandeln. Trinkwasser wird in Aufbereitungsanlagen desinfiziert, damit wir damit bedenkenlos kochen und duschen können. In diesen Bereichen ist Desinfektion wichtig.',
      '(2) Doch viele Menschen wollen auch ihr Zuhause möglichst keimfrei machen. Sie reinigen ihre Wäsche mit Hygienewaschmitteln, reiben sich die Hände mit Hygiene-Gelen ein und desinfizieren täglich Küchenablagen, Kinderspielzeuge, Babytrinkflaschen, Türgriffe und Toiletten. Antibakterielle Mittel finden sich in Zahncremes, Deos und Kleidung. Keimfrei, das ist für viele Menschen heute ein Synonym für sauber und gesund. Im Krankenhaus mag das stimmen, doch im Alltag ist das falsch. Denn statt dem Immunsystem zu nützen, kann die übertriebene Hygiene krank machen. „In privaten Haushalten sind Desinfektionsmittel weitgehend unnötig“, sagt Ralf Dieckmann vom Bundesinstitut für Risikobewertung (BfR). „Wägt man Nutzen und Risiko von Desinfektionsmitteln gegeneinander ab, überwiegen ganz klar die Risiken“, sagt der Chemiker.',
      '(3) Manche Inhaltsstoffe von Infektionsmitteln bergen Risiken: Antibakterielle Reinigungstücher können beispielsweise die Haut durchlässiger für Fremdstoffe machen. Eine 2012 verabschiedete Verordnung zum Einsatz von Chemikalien und Mikroorganismen regelt in der EU inzwischen sehr streng, welche Stoffe, die schädliche Organismen abtöten, von der EU anerkannt und genehmigt werden. Für Produkte, die bereits lange erhältlich sind, gibt es allerdings noch Sonderregelungen. Das heißt, sie dürfen in gewissen Fällen trotzdem weiterverkauft werden. Der Grund dafür liegt in einer Richtlinie, die bis 2012 galt. Sie regelte die Zulassungen der Mittel noch nicht so streng. Bis 2024 sollen aber auch die alten Stoffe reguliert werden. Auf der Internetseite der Bundesanstalt für Arbeitsschutz und Arbeitsmedizin gibt es eine Datenbank, in der man alle zugelassenen Produkte nachschlagen kann.',
      '(4) Desinfektionsmittel töten Keime ab, die eigentlich gut sind. Bei Seifen ist dies nicht der Fall. Milliarden kleiner Mikroben bevölkern die Haut und das ist weder eklig noch gefährlich. Sie tragen dazu bei, das leicht saure Milieu der Haut aufrechtzuerhalten – ein Schutz gegen Infektionen. Dort, wo die ungefährlichen Bakterien leben, ist außerdem kein Platz für krankmachende Keime. „Einige Bakterien produzieren auch Substanzen, die wiederum Krankheitskeime abtöten“, sagt Dieckmann. Um eine völlig keimfreie Umgebung sollten wir uns also nicht bemühen.',
      '(5) Auch auf lange Sicht haben Desinfektionsmittel Konsequenzen. Landen antibakterielle Mittel beispielsweise im Abwasser, werden sie stark verdünnt. In dieser Konzentration können sie den Keimen im Wasser der Kläranlagen nichts mehr anhaben. Die Bakterien bilden Abwehrmechanismen gegen die Mittel. Dann vermehren sie sich und geben ihre Resistenz weiter. Teilweise entstehen auch Kreuzresistenzen zu Antibiotika, die das Bakterium auf die gleiche Weise angreifen wie das Desinfektionsmittel. Durch große Anwendung antibakterieller Stoffe erschaffen wir also widerstandsfähigere, schwer zu besiegende Keime – statt uns zu schützen.',
      '(6) Sauberkeit an sich ist dennoch nichts Schlechtes. Gerade in der Küche kann fehlende Hygiene Folgen haben: Jedes Jahr werden in Deutschland mehr als 100.000 Erkrankungen gemeldet, die durch Mikroorganismen, insbesondere Bakterien, Viren oder Parasiten, in Lebensmitteln verursacht werden. Nur sind Desinfektionsmittel nicht das richtige Mittel, um das zu ändern. Im Alltag reichen normale Seifen, Putz- und Waschmittel völlig aus.'
    ],
    questions:[
      { q:'Welche der folgenden Aussagen fasst am besten den Inhalt aus Absatz 1 zusammen?', options:[
        'Der Einsatz von Desinfektionsmitteln schützt vor Hauterkrankungen.',
        'Der Gebrauch von Desinfektionsmitteln beschleunigt den Genesungsprozess.',
        'Die Anwendung von Desinfektionsmitteln verhindert das Keimwachstum.',
        'Die Verwendung von Desinfektionsmitteln hilft Menschenleben zu retten.'
      ], correct:3 },
      { q:'Laut Absatz 2 ist der Einsatz von Desinfektionsmitteln häufig ...', options:[
        'notwendig.',
        'sinnvoll.',
        'unbedenklich.',
        'überflüssig.'
      ], correct:3 },
      { q:'In Absatz 3 wird gesagt, dass ...', options:[
        'die gesetzlichen Vorgaben zur Herstellung antibakterieller Mittel gelockert werden.',
        'die Zahl der Ausnahmeregelungen beim Einsatz von Chemikalien weiter ansteigt.',
        'einzelne seit langem auf dem Markt verfügbare Produkte weiter vertrieben werden.',
        'Empfehlungen für bestimmte Produkte in einer Datenbank gesammelt werden.'
      ], correct:2 },
      { q:'Laut Absatz 4 sind Bakterien auf der Haut für den Menschen „weder eklig noch gefährlich“, weil sie ...', options:[
        'eine Abwehr gegen Erreger bilden.',
        'einen Teil des Immunsystems ausmachen.',
        'unerlässlich für die Hautreinigung sind.',
        'vor Umweltgiften schützen.'
      ], correct:0 },
      { q:'Welche der folgenden Überschriften passt inhaltlich am besten zu Absatz 5?', options:[
        'Antibakterielle Mittel führen zu resistenten Keimen',
        'Desinfektionsmittel schützen vor gefährlichen Keimen',
        'Hygienemittel greifen krankheitserregende Keime an',
        'Reinigungsmittel bekämpfen widerstandsfähige Keime'
      ], correct:0 },
      { q:'In Absatz 6 wird die Verwendung von gewöhnlichen Putzmitteln ...', options:[
        'empfohlen.',
        'erwartet.',
        'gelobt.',
        'vorgeschrieben.'
      ], correct:0 },
      { q:'Hauptanliegen des Textes ist es, ...', options:[
        'die neuesten Erkenntnisse aus der Hygieneforschung zu bekräftigen.',
        'die vielseitigen Einsatzmöglichkeiten von Desinfektionsmitteln hervorzuheben.',
        'über den Einsatz von Reinigungsprodukten im Haushalt zu informieren.',
        'über die weitreichenden Risiken von Desinfektionsmitteln aufzuklären.'
      ], correct:3 }
    ]
  },
  { ...TEMPLATE[3],
    instructions:'Lesen Sie den Text. Ordnen Sie die Textstellen 1–4 den Aussagen unten zu. Die Zahlen beziehen sich immer auf den nachfolgenden Satz. Für jede Textstelle gibt es genau eine richtige Lösung.',
    title:'Kommentar eines Experten zu Künstlicher Intelligenz',
    passageText:`Dass Maschinen jeden Tag produktiver werden und in vielen Berufszweigen mehr und mehr Aufgaben übernehmen, kann nicht mehr wegdiskutiert werden. <strong>[1] Die Sorge, dass mechanische Lösungen und Roboter den Menschen dadurch die Arbeitsplätze streitig machen, bleibt hingegen fragwürdig.</strong> In Wirklichkeit ist es so, dass für die Betriebe, die lernen neue Geschäftsmodelle zu schaffen und mit Künstlicher Intelligenz (KI) umzugehen, eine Ära des Wachstums, höherer Mitarbeitermotivation und -zufriedenheit sowie geringerer Kosten eingeläutet wird. <strong>[2] Ein zukünftiges Szenario ist, dass KI die monotonen und routinemäßigen Aufgaben übernehmen wird, die viele von uns, oft widerwillig, täglich zu erledigen haben – man also die Maschinen als willkommene neue Kollegen sehen kann.</strong> Eine verbesserte Integration von KI bringt mehr Effizienz, mehr Produktivität und letztlich mehr Chancen für Menschen, höherwertige Arbeit zu erledigen. Dadurch werden Arbeitsplätze erhalten und neue geschaffen, anstatt sie zu vernichten. <strong>[3] Viele Diskussionen über den Einsatz von KI befassen sich gegenwärtig mit den Vorteilen und Nachteilen, den Risiken und der Ethik, und das ist gut so.</strong> <strong>[4] Vor diesem Hintergrund ist es besonders wichtig, jeden Anwendungsbereich gezielt zu untersuchen und zu bewerten, um die Vorteile wirklich realisieren und die Risiken und Bedenken minimieren zu können.</strong> Der Einsatz von KI-Systemen als Werkzeuge für die Industrie bleibt vorläufig ein Zukunftsmodell.`,
    textStellen:[1, 2, 3, 4],
    options:[
      'Der Experte bedauert etwas.',
      'Der Experte begrüßt etwas.',
      'Der Experte empfiehlt etwas.',
      'Der Experte kritisiert etwas.',
      'Der Experte prognostiziert etwas.',
      'Der Experte vermutet etwas.',
      'Der Experte warnt vor etwas.',
      'Der Experte zweifelt an etwas.'
    ],
    correct:[7, 4, 1, 2]
  },
  { ...TEMPLATE[4],
    instructions:'Lesen Sie den Text. Ordnen Sie die Aussagen 1–7 zu: Entscheiden Sie für jede Aussage, ob sie zur Stadt, zum Land, zu beiden oder gar nicht passt. Es kann auch sein, dass einzelne Aussagen gar nicht passen.',
    title:'Wohnen und Gesundheit',
    passage:'Auf dem Land gibt es viele Möglichkeiten an der frischen Luft zu sein. Dass der Landmensch sich deshalb mehr bewegt, bestätigen Studien aber nicht eindeutig. In den USA gibt es sogar Hinweise darauf, dass Menschen auf dem Land weniger aktiv und sogar schwergewichtiger sind als Stadtmenschen. Eine aktuelle Untersuchung des Robert-Koch-Instituts zeigt für Deutschland, dass das Immunsystem von Menschen in urbanen Gebieten mehr leisten muss, da die Menschen hier deutlich öfter unter chronischen Reizungen der Haut und Atemwege leiden. Der Anteil derjenigen, die einmal in ihrem Leben von solchen Krankheitsbildern betroffen sind, steigt dabei leicht mit der Größe des Wohnorts. Einige Wissenschaftler führen hierfür die Hypothese an, dass die Luftverschmutzung in den Städten diese Allergien auslösen könnte. Wer in der Stadt aufwächst, ist im Vergleich zu Landbewohnern auch anfälliger für Angststörungen und Schizophrenie. Woran liegt das? Um das herauszufinden, stellten Mannheimer Forscher gesunden Probanden knifflige Rechenaufgaben und setzten sie dabei zusätzlich unter Druck: Sie sagten den Freiwilligen, sie seien nicht gut genug und müssten sich noch mehr anstrengen. So konnte nachgewiesen werden, dass Stadtmenschen deutlichere Stressreaktionen zeigen als die Vergleichsgruppe vom Land. Städter haben sich also keineswegs an den höheren Stresspegel der Großstadt gewöhnt und können Stresssituationen weniger gut bewältigen. Für eine Studie zur psychischen Gesundheit werteten Mediziner der University of Exeter die Arbeitsbedingungen und Lebensumstände von Städtern aus. Das Ergebnis: Städter, die erst in einer dicht bebauten und dann in einer Gegend mit Parkanlagen und unbebauten Grünflächen wohnten, hatten gleich nach dem Umzug und auch drei Jahre später eine bessere psychische Gesundheit, die vergleichbar mit dem psychischen Gesundheitszustand der Bewohner ländlicher Regionen war. Dass die Natur auch zur Heilung körperlicher Erkrankungen beitragen kann, zeigte erstmals 1984 eine Studie: Patienten, die in einem Krankenhauszimmer mit Blick auf viel Grün lagen, erholten sich schneller von einer Operation und brauchten weniger Schmerzmittel, als Patienten in ähnlichen Räumen mit Blick auf ein Gebäude. Zur Stärkung der Gesundheit ist allerdings kein Acker oder Wald nötig – ein Park in der Stadt tut es manchmal auch.',
    columns:['Stadt','Land','beide','passt nicht'],
    items:[
      {text:'Das Immunsystem wird besonders stark beansprucht.', correct:0},
      {text:'Die medizinische Versorgung ist hier ein Vorteil.', correct:3},
      {text:'Die Menschen hier haben einen aktiven Lebensstil.', correct:3},
      {text:'Ein grünes Wohnumfeld fördert die seelische Gesundheit.', correct:2},
      {text:'Hier sinkt das Risiko, an psychischen Störungen zu erkranken.', correct:1},
      {text:'Stressbedingte Reaktionen sind hier besonders häufig.', correct:0},
      {text:'Überreaktionen der körpereigenen Abwehr sind selten.', correct:1}
    ]
  },
  { ...TEMPLATE[5],
    instructions:'Lesen Sie den Text. Entscheiden Sie, welche Aussagen stimmen, und ordnen Sie genau vier Aussagen der Tabelle zu (2 Veränderungen in der Branche, 2 Folgen für Urlaubsziele).',
    title:'Tourismus',
    passage:'Der Tourismus gilt als Wachstumsbranche mit Umsätzen in Milliardenhöhe. Reisen wird immer beliebter und durch die große Konkurrenz auf dem Markt oft auch günstiger – mit weitreichenden Folgen für die Reiseländer. Touristen geben für Urlaub viel Geld aus, was neben den Auswirkungen auf die einheimische Wirtschaft auch Abhängigkeiten schafft. In Orten, die vorwiegend vom Wirtschaftsfaktor Tourismus leben, entwickeln sich andere Wirtschaftszweige deshalb nur schwer. Zusätzlich werden verschiedene Waren und Güter mit der steigenden Zahl der Touristen so teuer, dass Einheimische sich diese kaum noch leisten können. Problematisch ist der Tourismus auch aus ökologischer Sicht. Der zunehmende Wasser- und Energieverbrauch belastet die Ressourcen und die Umwelt. Der Anstieg des Verkehrs und der Ausbau der Infrastruktur zerstören zusätzlich die Landschaft und bedrohen die Artenvielfalt. Umstritten ist auch, inwieweit der Tourismus zur Bewahrung der einheimischen Kultur beitragen kann. Viele Reisende besuchen folkloristische Tanz- und Musikveranstaltungen als Bestandteil des Reiseprogramms. So trägt der Kontakt zwischen Einheimischen und Touristen zwar zu gegenseitigem Interesse und Verständnis bei, aber in anderen Fällen kann es auch zu Konflikten und Spannungen kommen. Zum Beispiel dann, wenn Urlauber wenig oder kaum informiert und bereit sind, Sitten und Bräuche des Reiselandes zu respektieren. Als Reaktion auf die Schattenseiten des Tourismus – insbesondere des Massentourismus – entstehen alternative Konzepte zur nachhaltigen Bewahrung von natürlichen Ressourcen und zur Förderung der lokalen Wirtschaft. Dabei wird der Tourismus mit anderen Wirtschaftsbereichen verbunden. Beispielsweise werden in den Hotels und Restaurants Produkte aus der einheimischen Landwirtschaft verwendet. Dadurch sollen auch vernachlässigte Bereiche gestärkt werden, die nicht in erster Linie touristischen Zwecken dienen.',
    aussagen:[
      { key:'a', text:'[a] Der Wettbewerb führt zu preiswerten Urlaubsangeboten.' },
      { key:'b', text:'[b] Kulturelle Veranstaltungen werden für Urlauber attraktiver.' },
      { key:'c', text:'[c] Die einheimische Bevölkerung profitiert vom Ausbau der Infrastruktur.' },
      { key:'d', text:'[d] Preise steigen für die einheimische Bevölkerung.' },
      { key:'e', text:'[e] Die Entwicklung der lokalen Wirtschaft wird behindert.' },
      { key:'f', text:'[f] Ressourcenknappheit führt zu Spannungen zwischen Einheimischen.' },
      { key:'g', text:'[g] Die Verschmutzung der Umwelt gefährdet die Tierwelt.' },
      { key:'h', text:'[h] Verträglichere Formen des Tourismus entwickeln sich.' }
    ],
    correctMap: { v1: 'a', v2: 'h', n3: 'e', n4: 'd' }
  },
  { ...TEMPLATE[6],
    instructions:'Lesen Sie den Text. Beachten Sie auch die Informationen aus der Grafik. Die Zusammenfassung folgt nicht dem Textverlauf. Kreuzen Sie genau drei Sätze an, die inhaltlich falsche Informationen enthalten.',
    title:'Operation Tierliebe',
    passage:'Herzschrittmacher, Organtransplantationen, künstliche Hüftgelenke, Dialyse, eine hochmoderne Onkologie, seit Kurzem auch Stammzelltherapie – all das können Tierärzte mittlerweile anbieten. Die letzte Grenze ist bislang die Organtransplantation, die in den USA bei Tieren allerdings durchaus schon üblich ist. Im Prinzip kann ein Tier in den reichen Industrienationen eine genauso gute medizinische Behandlung erhalten wie ein menschlicher Privatpatient – sofern der Besitzer sich die leisten kann. Es gibt Menschen, die wollen die 250 Euro für die Behandlung eines gebrochenen Beins nicht ausgeben. Dann gibt es diejenigen, die alles für ihr krankes Tier tun würden und mit Rechnungen um 20 000 Euro die Tierklinik verlassen. Die durchschnittliche Lebenserwartung von Hunden und Katzen hat sich in den vergangenen Jahrzehnten vervielfacht, unter anderem aufgrund der besseren medizinischen Versorgung. Das Ergebnis sind immer mehr alte tierische Patienten, die häufiger Wohlstandserkrankungen wie Diabetes, Krebs oder sogar Demenz entwickeln. Wegen der modernen Heilverfahren sind diese Erkrankungen auch therapierbar. Die lange Lebensdauer, verbunden mit Wohlstand und dem technologischen Fortschritt, hat zu einem neuen Niveau in der Tiermedizin geführt. Daneben steht der radikale Wandel in der Beziehung zwischen Mensch und Tier. In verschiedenen Befragungen von Haustierbesitzern, welche soziale Rolle ihr Tier für sie einnehme, antworten seit einigen Jahren über 90 Prozent der Teilnehmer, ihr Tier sei ein vollwertiges Familienmitglied. Und für die Gesundheit eines nahestehenden Wesens wollen die Leute sehr viel Geld auszugeben, auch wenn es ein Tier ist.',
    graphicData:[{year:'Hund: Hundesteuer pro Jahr',val:100},{year:'Katze: Katzenstreu pro Jahr',val:20},{year:'Hund: Transport',val:90},{year:'Katze: Transport',val:40},{year:'Hund: Min. jährliche Tierarztkosten',val:60},{year:'Katze: Min. jährliche Tierarztkosten',val:55},{year:'Hund: Erste Impfung',val:115},{year:'Katze: Erste Impfung',val:150},{year:'Hund: Anschaffung',val:120},{year:'Katze: Anschaffung',val:340},{year:'Hund: Jährliche Futterkosten',val:160},{year:'Katze: Jährliche Futterkosten',val:400}],
    graphicCaption:'Wie viel kosten Hund und Katze? Ausgaben in Euro €',
    sentences:[
      {text:'Trotz des hohen Stellenwerts von Tieren ist ihre Versorgung abhängig von den finanziellen Möglichkeiten der Besitzer.', wrong:false},
      {text:'Durch die hoch entwickelten medizinischen Möglichkeiten können Haustiere heutzutage in vielen Ländern bessere Behandlungen erhalten als Menschen.', wrong:true},
      {text:'Dadurch hat sich einerseits die Lebenserwartung vieler Haustiere erhöht.', wrong:false},
      {text:'Andererseits leiden die Tiere nun an neueren Erkrankungen.', wrong:false},
      {text:'Das führt gleichzeitig auch zu höheren Rechnungen beim Tierarzt.', wrong:false},
      {text:'Diese Kosten zu übernehmen, widerstrebt den meisten Tierbesitzern.', wrong:true},
      {text:'Deutlich ist ebenfalls, dass die Ausgaben für Arztbesuche die laufenden Kosten der Haustierhaltung übersteigen.', wrong:true},
      {text:'Für Hundebesitzer entstehen in Deutschland neben den Kosten für Futter, Transport und Impfungen zusätzliche Kosten.', wrong:false},
      {text:'Denn das Halten eines Hundes muss steuerlich abgeführt werden.', wrong:false}
    ]
  }
];
const MT7 = [
  { ...TEMPLATE[0],
    instructions:'Lesen Sie den Lückentext. Klicken Sie in die Lücken und entscheiden Sie, welches Wort passt. Für jede Lücke gibt es genau eine richtige Lösung.',
    title:'Superkleber aus Mistelbeeren',
    segments:[
      'Pflanzliche Klebstoffe rücken zunehmend in den Fokus der modernen Materialforschung, da synthetische Alternativen oft umweltschädlich und schwer abbaubar sind. Wissenschaftlerinnen und Wissenschaftler haben nun ',
      ', dass die klebrigen Fasern der Mistelbeere (Viscum album) ein außerordentliches Potenzial für die Entwicklung nachhaltiger Bio-Klebstoffe besitzen. Die Mistel, ein Halbschmarotzer, nutzt ihre klebrigen Beeren seit jeher, um sich fest an den Ästen von Wirtsbäumen zu ',
      '. In aufwendigen Laborversuchen untersuchten die Forscher die mechanischen Eigenschaften dieses natürlichen Gewebes unter extremen Bedingungen. Dabei zeigte sich, dass das Material selbst bei hoher Feuchtigkeit seine erstaunliche Haftkraft beibehält. Um die genaue Funktionsweise der Zellulosefasern zu entschlüsseln, ',
      ' das Forschungsteam hochauflösende mikroskopische Analyseverfahren an. Der zentrale Wirkmechanismus beruht auf der besonderen Anordnung der Fibrillen, die eine extrem hohe Zugfestigkeit gewährleisten und selbst bei starker Beanspruchung keine strukturellen ',
      ' aufweisen. Im Gegensatz zu herkömmlichen Industrieklebstoffen kommt die Substanz völlig ohne toxische Zusatzstoffe aus und lässt sich unter biologischen Bedingungen rückstandslos zersetzen. Ein solch innovativer Bio-Klebstoff könnte künftig vor allem in der Wundversorgung sowie in der Medizin- und Verpackungstechnik eingesetzt werden. Erstaunlich war zudem, dass das Material nach dem Trocknen flexibel bleibt und problemlos auf unterschiedlichsten Oberflächen haftet. Dieser bemerkenswerte Effekt blieb sogar bestehen, nachdem die Proben mehrmals extremen Temperaturschwankungen ',
      ' wurden.'
    ],
    gaps:[
      {options:['vermutet','festgestellt','vorhergesagt','angeordnet'], correct:1},
      {options:['verankern','verbinden','verwickeln','verhalten'], correct:0},
      {options:['wandten','führten','legten','fügten'], correct:0},
      {options:['Mängel','Belastungen','Folgen','Zustände'], correct:0},
      {options:['ausgesetzt','ausgedrückt','ausgelöst','ausgestellt'], correct:0}
    ]
  },
  { ...TEMPLATE[1],
    instructions:'Bringen Sie die fünf Textabschnitte mit den Pfeiltasten in die richtige Reihenfolge.',
    title:'Uranprojekt: Standen Hitlers Physiker kurz vor einer Atombombe?',
    correctOrder:[0,1,2,3,4],
    items:[
      'Seit Jahrzehnten hält sich das hartnäckige Gerücht, das Nationalsozialistische Regime hätte kurz vor dem Ende des Zweiten Weltkriegs eine funktionierende Kernwaffe besessen. Historische Untersuchungen zeichnen jedoch ein differenzierteres Bild der tatsächlichen Fortschritte deutscher Nuklearforscher.',
      'Geleitet von Nobelpreisträgern wie Werner Heisenberg konzentrierten sich die Forscher ab 1939 zwar auf die friedliche und militärische Nutzung der Kernspaltung. Allerdings zielten ihre konkreten Versuche primär darauf ab, einen kritischen Kernreaktor zur Energiegewinnung aufzubauen, anstatt eine einsatzfähige Bombe zu konstruieren.',
      'Dass dieses Fernziel jedoch nie erreicht wurde, lag keineswegs an mangelndem theoretischem Wissen, sondern an drastischen strukturellen Engpässen. Es fehlte an ausreichendem spaltbarem Material, insbesondere an angereichertem Uran und schwerem Wasser, deren Produktion durch alliierte Sabotageakte immer wieder entscheidend gelähmt wurde.',
      'Hinzu kam die organisatorische Zersplitterung der deutschen Wissenschaftslandschaft, die im extremen Gegensatz zum hochzentralisierten US-amerikanischen Manhattan-Projekt stand. Während in den USA unbegrenzte finanzielle Mittel gebündelt wurden, konkurrierten im Deutschen Reich verschiedene Forschungsgruppen vergeblich um die knappen Ressourcen.',
      'Neueste Isotopenanalysen an historischem Uranmaterial bestätigten schließlich, dass die Reaktorversuche in Haigerloch bis zum Schluss unterkritisch blieben. Hitlers Physiker standen somit meilenweit vor einem nuklearen Durchbruch und besaßen zu keinem Zeitpunkt eine einsatzbereite Waffe.'
    ],
    shuffledStart:[3,0,2,1,4]
  },
  { ...TEMPLATE[2],
    instructions:'Lesen Sie den Text. Beantworten Sie die Fragen 1–7. Entscheiden Sie, welche Lösung passt. Für jede Frage gibt es genau eine richtige Lösung.',
    title:'Als im Mittelmeer noch Krokodile lebten',
    passage:[
      '(1) Die heutigen Krokodile gelten gemeinhin als fossile Überlebende einer längst vergangenen Epoche. Weltweit existieren nur noch etwa zwei Dutzend Arten, die vorwiegend in tropischen und subtropischen Binnengewässern beheimatet sind. Doch diese geringe Biodiversität täuscht über eine verblüffende evolutionäre Vergangenheit hinweg. In früheren Erdzeitaltern wiesen die Archosaurier, zu denen Krokodile gehören, eine enorme Formenvielfalt auf. Neueste paläontologische Funde belegen eindrucksvoll, dass selbst das Mittelmeer einst von neuartigen Krokodilarten bevölkert war, die sich an maritime Lebensräume angepasst hatten und eine Schlüsselrolle in den damaligen marinen Ökosystemen einnahmen.',
      '(2) Das Bild vom Krokodil als reinem Süßwasserbewohner ist wissenschaftlich längst überholt. Vor Millionen von Jahren, insbesondere während des Miozäns, herrschte im heutigen Mittelmeerraum ein deutlich wärmeres, fast tropisches Klima. Dies ermöglichte die Ausbreitung spezialisierter Reptilien, die nicht nur an den Küsten jagten, sondern auch auf das offene Meer hinaussschwammen. Diese prähistorischen Arten besaßen morphologische Anpassungen wie paddelartige Gliedmaßen und drüsenbasierte Mechanismen zur ausscheidungsspezifischen Salzregulation. Laut dem Paläontologen Daniel Lingenhöhl verdeutlichen diese Befunde, dass die ökologische Nische der Krokodile in der Urzeit weitaus komplexer war, als bisher in Lehrbüchern dargestellt.',
      '(3) Ein zentraler Wendepunkt für das Verständnis dieser Arten war die Entdeckung fossiler Schädel- und Zahnfragmente in Küstenregionen Südtirols und Nordafrikas. Die rechtlichen Rahmenbedingungen für paläontologische Ausgrabungen wurden zwar in den letzten Jahrzehnten europaweit verschärft, um illegalen Fossilienhandel einzudämmen. Dennoch profitieren Forscher von Sondergenehmigungen für Altbestände und historischen Privatsammlungen. Durch moderne bildgebende Verfahren wie die Computertomografie konnten feine Hohlräume im Kiefer analysiert werden. Diese Daten sind nun in einer zentralen internationalen wissenschaftlichen Datenbank erfasst, was den vergleichenden Anatomie-Studien weltweit neuen Auftrieb gibt.',
      '(4) Die vergleichende Anatomie zeigt, dass die Anpassungen der Meereskrokodile keineswegs zufällig waren. Anatomische Strukturen wie verlängerte Schnauzen und stromlinienförmige Schuppenpanzer erwiesen sich als überlebenswichtig für den Nahrungserwerb in der offenen See. Sie ermöglichten ein hocheffizientes Erbeuten von schnellen Fischen und Tintenfischen. Gleichzeitig schützten diese Panzerungen vor größeren Fressfeinden und mechanischen Belastungen durch starke Wellenbewegungen. Die Präsenz dieser Spitzenprädatoren trug somit wesentlich zur dynamischen Balance und Artenvielfalt des miozänen Mittelmeers bei.',
      '(5) Auf lange Sicht führten jedoch dramatische klimatische und geologische Veränderungen zum Niedergang dieser marinen Sonderformen. Als sich gegen Ende des Miozäns die Straße von Gibraltar schloss und die Messinische Salinitätskrise auslöste, veränderte sich der Salzgehalt des Mittelmeers drastisch, ehe weite Teile des Beckens zeitweise austrockneten. Viele hochspezialisierte Arten konnten sich den rapiden Umweltveränderungen nicht rasch genug anpassen und starben aus. Nur generische, an Süßwasser adaptierte Linien überlebten in geschützten Flussflächen und bildeten das Fundament der heutigen Krokodilpopulationen.',
      '(6) Das Aussterben der Meereskrokodile verdeutlicht eindringlich die Verwundbarkeit hochgradig spezialisierter Organismen bei abrupten Umweltveränderungen. Selbst Anpassungswunder, die über Millionen Jahre hinweg erfolgreich florierte Ökosysteme dominierten, bieten keinen garantierten Schutz vor existenziellen Erschütterungen. Heutige Schutzmaßnahmen konzentrieren sich zwar vorrangig auf den Erhalt der verbleibenden Fluss- und Sumpfbiotope, doch ein umfassendes Verständnis der evolutionären Geschichte bleibt unerlässlich, um künftige ökologische Transformationen besser einschätzen zu können.'
    ],
    questions:[
      { q:'Welche der folgenden Aussagen fasst am besten den Inhalt aus Absatz 1 zusammen?', options:[
        'Die Artenvielfalt heutiger Krokodile hat in den letzten Erdzeitaltern stetig zugenommen.',
        'Heutige Krokodilarten beschränken sich ausschließlich auf maritime Lebensräume.',
        'Fossile Funde zeigen, dass Krokodile einst vielfältiger waren und auch das Mittelmeer besiedelten.',
        'Die Evolution der Krokodile begann erst mit dem Entstehen des Mittelmeers.'
      ], correct:2 },
      { q:'Laut Absatz 2 war die Ausbreitung von Krokodilen im Mittelmeerraum vor allem ...', options:[
        'notwendig.',
        'klima- und anpassungsbedingt.',
        'unbedenklich.',
        'zufällig.'
      ], correct:1 },
      { q:'In Absatz 3 wird gesagt, dass ...', options:[
        'die Gesetze bezüglich Fossilienfunden vereinfacht wurden.',
        'paläontologische Daten durch modernste Technologie digital gebündelt werden.',
        'private Sammlungen künftig nicht mehr wissenschaftlich ausgewertet werden dürfen.',
        'Untersuchungen an Schädelknochen nur noch in Südtirol durchgeführt werden.'
      ], correct:1 },
      { q:'Laut Absatz 4 waren spezielle anatomische Merkmale der Meereskrokodile „überlebenswichtig für den Nahrungserwerb“, weil sie ...', options:[
        'das Jagen von Beutetieren im offenen Meer optimierten.',
        'das Wachstum der Schuppenpanzer beschleunigten.',
        'das Tauchen in tiefen Binnengewässern ermöglichten.',
        'die Fortpflanzung an sandigen Küsten begünstigten.'
      ], correct:0 },
      { q:'Welche der folgenden Überschriften passt inhaltlich am besten zu Absatz 5?', options:[
        'Der weltweite Siegeszug der Süßwasserkrokodile',
        'Gibraltar als Schutzraum für maritime Reptilien',
        'Erdgeschichtliche Umwälzungen und das Ende der Meereskrokodile',
        'Neue Methoden zur Bestimmung des Salzgehalts im Mittelmeer'
      ], correct:2 },
      { q:'In Absatz 6 wird die Erforschung der evolutionären Geschichte der Krokodile als ...', options:[
        'fehlerhaft kritisiert.',
        'irrelevant abgetan.',
        'unbedeutend dargestellt.',
        'essenziell erachtet.'
      ], correct:3 },
      { q:'Hauptanliegen des Textes ist es, ...', options:[
        'über die überraschende evolutionäre Anpassung und das spätere Verschwinden von Krokodilen im Mittelmeer aufzuklären.',
        'wissenschaftliche Methoden der Computertomografie bei der Fossilienanalyse detailliert zu vergleichen.',
        'die Gefährdung heutiger Krokodilarten durch den Klimawandel zu belegen.',
        'die rechtlichen Regelungen des internationalen Fossilienhandels zu erläutern.'
      ], correct:0 }
    ]
  },
  { ...TEMPLATE[3],
    instructions:'Lesen Sie den Text. Ordnen Sie die Textstellen 1–4 den Aussagen unten zu. Die Zahlen beziehen sich immer auf den nachfolgenden Satz. Für jede Textstelle gibt es genau eine richtige Lösung.',
    title:'Kommentar eines Experten zur Entdeckung in der Denisova-Höhle',
    passageText:`Die Ausgrabungen in der sibirischen Denisova-Höhle zählen zu den spektakulärsten Kapiteln der modernen Paläoanthropologie und Archäozoologie. Dass Forscher dort nicht nur menschliche Fossilien, sondern auch genetische Spuren ausgestorbener Tierarten wie einer bislang unbekannten Wildrindart – vorläufig als „Yak X“ bezeichnet – identifizieren konnten, zeigt das enorme Potenzial molekularbiologischer Methoden. <strong>[1] Es ist bedauerlich, dass wertvolle Knochenfragmente und Sedimentschichten in vielen anderen historischen Fundstätten durch unsachgemäße Konservierung oder unzureichende Finanzierung unwiederbringlich zerstört werden, bevor moderne DNA-Analysen überhaupt zum Einsatz kommen können.</strong><br><br>Die Identifizierung prähistorischer Genome eröffnet völlig neue Perspektiven auf das Zusammenspiel zwischen Frühmenschen und ihrer Umwelt. <strong>[2] Ich bin davon überzeugt, dass in den kommenden Jahrzehnten hochauflösende Proteom-Analysen aus fossilem Zahnschmelz die Rekonstruktion komplexer eiszeitlicher Nahrungsketten im gesamten eurasischen Raum ermöglichen werden.</strong> Die Existenz von Wildrindern in einer von Denisova-Menschen genutzten Höhle wirft zudem wichtige Fragen bezüglich der damaligen Jagdstrategien und der Umweltbedingungen im Altai-Gebirge auf. <strong>[3] Um falsche Schlüsse über das Verhalten der Frühmenschen zu vermeiden, sollte man jedoch vorsichtig sein und die DNA-Spuren aus Höhlensedimenten nicht voreilig als eindeutigen Beweis für aktive Beutejagd interpretieren, da auch natürliche Raubtiere die Knochen eingeschleppt haben könnten.</strong><br><br>Trotz mancher Unsicherheiten bei der Interpretation einzelner Sedimentproben ist der wissenschaftliche Erkenntnisgewinn dieser multidisziplinären Forschung immens. <strong>[4] Ich schätze es außerordentlich, wie die eng verzahnte Kooperation von Paläogenetikern, Geologen und Archäologen dazu beiträgt, ein immer detaillierteres und faszinierenderes Bild unserer Evolutionsgeschichte zu zeichnen.</strong> Die Erforschung des ausgestorbenen Rinds in der Denisova-Höhle ist ein herausragendes Beispiel für den Erfolg dieser synergetischen Wissenschaftsdisziplinen.`,
    textStellen:[1, 2, 3, 4],
    options:[
      'Der Experte bedauert etwas.',
      'Der Experte begrüßt / lobt etwas.',
      'Der Experte prognostiziert etwas.',
      'Der Experte warnt vor etwas / rät zur Vorsicht.',
      'Der Experte zweifelt an etwas.',
      'Der Experte kritisiert die aktuellen Ausgrabungsmethoden.',
      'Der Experte empfiehlt eine neue Analysemethode.',
      'Der Experte vermutet eine Ursache.'
    ],
    correct:[0, 2, 3, 1]
  },
  { ...TEMPLATE[4],
    instructions:'Lesen Sie den Text. Ordnen Sie die Aussagen 1–7 zu: Entscheiden Sie für jede Aussage, ob sie zur Palladium-Katalyse, zur Phosphit-Reaktion, zu beiden oder gar nicht passt. Für jede Aussage gibt es genau eine richtige Lösung. Die Aussagen folgen nicht dem Textverlauf.',
    title:'Halfen Palladium und Phosphit dem Leben auf die Sprünge?',
    passage:'Der Ursprung des Lebens stellt die biochemische Forschung vor fundamentale Rätsel: Wie konnten auf der primordialen Erde komplexe organische Moleküle entstehen und phosphoryliert werden, bevor biologische Enzyme wie Adenosintriphosphat (ATP) als universelle Energiewährung existierten? Wissenschaftler schlagen eine geochemisch plausible Reaktion in hydrothermalen Systemen vor, die frühe Biomoleküle aktiviert haben könnte. In der Tiefe der Urozeane, an hydrothermalen Quellen, trifft überhitztes Wasser auf metallreiche Gesteine des Erdmantels. Unter diesen Bedingungen fungieren reduzierte Phosphorverbindungen, insbesondere Phosphite, als chemische Triebkraft. Während bisherige Modelle von reaktionsträgen Phosphaten ausgingen, zeigten Laboranalysen, dass Phosphit-Verbindungen als hocheffiziente Phosphorylierungsmittel wirken. Diese Eigenschaft ermöglicht es, Zielmoleküle mit Phosphatgruppen auszustatten – ein unverzichtbarer Schritt für die Entstehung von Erbgut und Zellmembranen. Damit diese Reaktionen rasch ablaufen, ist das Vorhandensein von Übergangskatalysatoren erforderlich. Hier kommt elementares Palladium ins Spiel, das in hydrothermalen Erzablagerungen in Spuren vorkommt. Das Edelmetall wirkt als Beschleuniger, indem es die Aktivierungsenergie der Synthese herabsetzt, ohne selbst verbraucht zu werden. Bemerkenswerterweise kommt die Katalyse ohne organische Komplexbildner aus. Allerdings erwies sich die Präsenz von Wasserstoffgas als notwendige Bedingung für die palladiumgestützte Aktivierung, wohingegen die Eigenreaktivität des Phosphits selbst in wässriger Umgebung ohne zusätzliche Gase bestehen bleibt. Die Kombination beider Faktoren liefert ein präbiotisches Modell von hoher Stringenz. Die Resultate stützen die Hypothese, dass chemische Energiequellen an tiefseeischen Verwerfungen den Grundstein für den primordialen Stoffwechsel legten.',
    columns:['Palladium-Katalyse','Phosphit-Reaktion','beide','passt nicht'],
    items:[
      {text:'Diese Komponente setzt die Aktivierungsenergie der chemischen Umwandlung herab.', correct:0},
      {text:'Hierbei handelt es sich um eine reduzierte chemische Verbindung, die als Phosphatspender dient.', correct:1},
      {text:'Der Prozess findet ausschließlich in Anwesenheit von biologischen Enzymen statt.', correct:3},
      {text:'Sie ist für die Entstehung fundamentaler Bausteine von Erbgut und Membranen essenziell.', correct:1},
      {text:'Das Vorhandensein von Wasserstoffgas ist für den Ablauf dieser Reaktion zwingend erforderlich.', correct:0},
      {text:'Der chemische Akteur verbraucht sich während des Synthesevorgangs vollständig selbst.', correct:3},
      {text:'Der Vorgang trägt dazu bei, frühe Biomoleküle ohne enzymatische Energiewährung zu aktivieren.', correct:2}
    ]
  },
  { ...TEMPLATE[5],
    instructions:'Lesen Sie den Text. Entscheiden Sie, welche Aussagen stimmen, und ordnen Sie genau vier Aussagen der Tabelle zu (2 Merkmale & Ursachen der Jugendsprache, 2 Folgen für Sprachwandel & Gesellschaft).',
    title:'„Jugendsprache ist kein Sprachverfall – sie zeigt, wie lebendig Sprache ist“',
    passage:'In regelmäßigen Abständen entbrennen in den Medien besorgte Debatten über den vermeintlichen Niedergang der deutschen Sprache. Als Hauptverursacher dieser Entwicklung wird oft der Jargon Jugendlicher ausgemacht. Linguisten treten dieser vereinfachten Sichtweise jedoch energisch entgegen. Sprachwissenschaftliche Untersuchungen belegen, dass Jugendsprache keineswegs ein Zeichen grammatikalischer Verarmung darstellt, sondern vielmehr Ausdruck von sprachlicher Kreativität, Abgrenzung und hoher pragmatischer Kompetenz ist. Jugendsprache zeichnet sich durch eine hohe Frequenz an Metaphern, Bedeutungswandel und innovativen Wortbildungsmustern aus. Sie entsteht vor allem in Peergroups, wo sie als Instrument dient, soziale Identität zu stiften und sich von der Erwachsenenwelt abzugrenzen. Überraschenderweise beherrschen Jugendliche die Regeln der Standardsprache meist tadellos; der jugendliche Soziolekt wird situativ eingesetzt. Sprachwissenschaftler sprechen hierbei vom sogenannten „Code-Switching“ – der Fähigkeit, flexibel zwischen verschiedenen Sprachregistern zu wechseln, je nachdem, wer der Kommunikationspartner ist. Darüber hinaus wirken viele Elemente der Jugendsprache als Motor für den allgemeinen Sprachwandel. Zahlreiche Begriffe und Redewendungen, die einst als reine Jugendsprache oder Slang galten, sickern im Laufe der Zeit in den allgemeinen Wortschatz ein und werden schließlich fester Bestandteil der Standardsprache. Zudem beeinflussen digitale Medien und globale Einflüsse die Schnelligkeit, mit der sich diese Ausdrücke verbreiten. Anstatt die deutsche Sprache zu bedrohen, bereichert und dynamisiert die Jugendsprache somit das sprachliche System nachhaltig.',
    aussagen:[
      { key:'a', text:'[a] Der Soziolekt von Jugendlichen speist sich aus rhetorischen Figuren, Bedeutungsverschiebungen und kreativen Wortneubildungen.' },
      { key:'b', text:'[b] Durch den ständigen Gebrauch der Jugendsprache verlernen Jugendliche nachhaltig die grammatikalischen Regeln der Standardsprache.' },
      { key:'c', text:'[c] Der bewusste Sprachwechsel dient Jugendlichen dazu, Gruppenzugehörigkeit zu demonstrieren und Distanz zu Erwachsenen zu schaffen.' },
      { key:'d', text:'[d] Digitale Medien verhindern die Verankerung jugendsprachlicher Ausdrücke in der breiten Öffentlichkeit.' },
      { key:'e', text:'[e] Ein Teil des spezifischen Wortschatzes diffundiert langfristig in die allgemeine Hochsprache und verändert diese.' },
      { key:'f', text:'[f] Die Wissenschaft fordert strenge Regulierungen und Gesetze zur Bewahrung des traditionellen Wortschatzes.' },
      { key:'g', text:'[g] Die sprachliche Dynamik führt zu einer schrittweisen Vitalisierung und Erweiterung des Gesamtsprachsystems.' },
      { key:'h', text:'[h] Jugendliche wenden die Jugendsprache ausnahmslos in allen formellen und informellen Kontexten an.' }
    ],
    correctMap: { v1: 'a', v2: 'c', n3: 'e', n4: 'g' }
  },
  { ...TEMPLATE[6],
    instructions:'Lesen Sie den Text. Beachten Sie auch die Informationen aus der Grafik. Markieren Sie die drei fehlerhaften Sätze in der Zusammenfassung. Es gibt genau drei inhaltlich falsche Sätze.',
    title:'Erfreuliche Zahlen zum Semesterstart: Dynamik und Herausforderungen im Hochschulsektor',
    passage:'Erlangen/Nürnberg. Zum Auftakt des neuen Akademischen Jahres verzeichnen die bundesdeutschen Universitäten einen unerwartet kräftigen Zustrom an Ersteinschreibungen. Entgegen den demografisch bedingten Prognosen einer rückläufigen Studienneigung schlagen sich die jüngsten Reformen zur Modernisierung der Lehre und der Ausbau internationaler Studiengänge positiv in den Matrikelstatistiken nieder. Insbesondere an traditionellen Volluniversitäten wie der Friedrich-Alexander-Universität (FAU) zeigt sich, dass die Nachfrage nach akademischer Bildung im In- und Ausland ungebrochen hoch bleibt, wenngleich sich die Verteilung der Studierenden auf die einzelnen Fachbereiche signifikant verschoben hat. Ein detaillierter Blick auf die Immatrikulationszahlen verdeutlicht, dass der Zuwachs vor allem durch internationale Studienanfänger generiert wird. Während die Zahl der inländischen Erstsemester aufgrund geburtenarmer Jahrgänge stagniert oder in einzelnen Disziplinen leicht rückläufig ist, stieg der Anteil ausländischer Studierender im Vergleich zum Vorjahr um knapp zwölf Prozent. Experte führen diesen Trend auf das vergrößerte Angebot englischsprachiger Masterstudiengänge sowie auf gezielte Kooperationen mit partneruniversitäten im außereuropäischen Raum zurück. Besonders stark nachgefragt sind Studiengänge aus den MINT-Fächern (Mathematik, Informatik, Naturwissenschaften und Technik), wohingegen die Geisteswissenschaften mit einer weitgehenden Stagnation der Nachfrage konfrontiert sind. Parallel zu diesem quantitativen Wachstum steigen jedoch auch die finanziellen Aufwendungen für ein ordnungsgemäßes Studium drastisch an. Die durchschnittlichen Lebenshaltungskosten für Studierende haben sich in den vergangenen Jahren durch die allgemeine Inflation und drastisch gestiegene Mietpreise erheblich erhöht. Während der allgemeine Semesterbeitrag, der unter anderem das Semesterticket für den öffentlichen Nahverkehr beinhaltet, moderat angestiegen ist, schlagen die monatlichen Mietkosten für ein Zimmer im Wohnheim oder in einer Wohngemeinschaft am stärksten zu Buche. Die administrative Zusage eines Studienplatzes garantiert somit keineswegs mehr die finanzielle Machbarkeit des akademischen Bildungsweges. Um dieser finanziellen Belastung entgegenzuwirken, greift eine wachsende Zahl von Studierenden auf Erwerbstätigkeiten neben dem Studium zurück. Dies hat wiederum direkte Auswirkungen auf die durchschnittliche Studiendauer: Viele Immatrikulierte überschreiten die Regelstudienzeit um mehrere Semester, was die Kapazitäten der Hochschulen zusätzlich belastet. Um den wissenschaftlichen Nachwuchs nachhaltig zu sichern, fordern Hochschulverband und Studierendenvertretungen gleichermaßen eine grundlegende Reform der staatlichen Ausbildungsförderung (BAföG) sowie eine stärkere Bezuschussung des studentischen Wohnungsbaus.',
    graphicData:[{year:'Semesterbeitrag (€/Sem.)',val:140},{year:'Monatl. Miete WG/Heim (€)',val:380},{year:'Internat. Erstsemester (Anz., +12 %)',val:2200},{year:'Inländ. Erstsemester (Anz., stagnierend)',val:4100}],
    graphicCaption:'Entwicklung der Semesterkosten und Studierendenstruktur (in € bzw. Personen)',
    sentences:[
      {text:'Trotz demografischer Hürden verzeichnen die deutschen Hochschulen zu Semesterbeginn einen deutlichen Anstieg der Gesamtzahl der Studienanfänger.', wrong:false},
      {text:'Dieser Zuwachs ist primär auf steigende Einschreibezahlen bei den inländischen Studierenden zurückzuführen, die sich vermehrt für geisteswissenschaftliche Fächer immatrikulieren.', wrong:true},
      {text:'Der Anteil internationaler Studierender wuchs hingegen spürbar, was vor allem durch die Bereitstellung englischsprachiger Studiengänge begünstigt wurde.', wrong:false},
      {text:'Neben den akademischen Entwicklungen steigen auch die finanzielle Belastungen für die Studierenden, wobei die Ausgaben für das Wohnen den größten Kostenpunkt darstellen.', wrong:false},
      {text:'Im Vergleich dazu bildet der Semesterbeitrag den teuersten Posten im studentischen Budget, da er in den letzten Jahren extrem stark angestiegen ist.', wrong:true},
      {text:'Die Notwendigkeit, das Studium durch Nebenjobs zu finanzieren, führt bei vielen Studierenden zu einer Verlängerung der Studiendauer über die Regelstudienzeit hinaus.', wrong:false},
      {text:'Die staatliche Unterstützung durch das BAföG reicht derzeit nach Ansicht von Fachvertretern aus, um den Lebensunterhalt der Studierenden vollständig abzudecken.', wrong:true}
    ]
  }
];
const MT8 = [
  { ...TEMPLATE[0],
    instructions:'Lesen Sie den Lückentext. Klicken Sie in die Lücken und entscheiden Sie, welches Wort passt. Für jede Lücke gibt es genau eine richtige Lösung.',
    title:'Kommunikation für eine nachhaltige Mobilität',
    segments:[
      'Die Gestaltung einer ökologisch verträglichen Verkehrswende erfordert nicht nur infrastrukturelle Anpassungen, sondern auch ein grundsätzliches Umdenken im Mobilitätsverhalten der Bevölkerung. Wissenschaftlerinnen und Wissenschaftler haben in einer aktuellen Studie ',
      ', dass gezielte Kommunikationsstrategien eine entscheidende Rolle bei der Akzeptanz nachhaltiger Transportmittel spielen. Personen, deren Bereitschaft zur Nutzung des öffentlichen Personennahverkehrs durch transparente Aufklärungskampagnen gestärkt wurde, zeigten eine deutlich höhere Neigung, auch auf ',
      ' Mobilitätsformen wie das Fahrsharing umzusteigen. Die Forschenden ',
      ' im Rahmen der Erhebung verschiedene Vermittlungsmodelle an Personen an, die dem Umstieg auf emissionsfreie Alternativen bisher skeptisch gegenüberstanden. Der zentrale Wirkmechanismus besteht dabei in der Demontage von Vorurteilen bezüglich zeitlicher Einschränkungen: Durch den Zugang zu verlässlichen Echtzeitdaten erkennen die Bürgerinnen und Bürger, dass nachhaltige Optionen keineswegs unüberwindbare ',
      ' im Alltag verursachen. Im Anschluss an die Kommunikationsphase wiesen die Befragten eine signifikant höhere Motivation auf, ihren privaten Pkw seltener zu nutzen. Erstaunlich war zudem, dass diese Gruppe selbst ohne direkte finanzielle Anreize nachhaltigere Routen wählte. Dieser Effekt trat ein, obwohl monetäre Vergünstigungen während des gesamten Versuchszeitraums nie ',
      ' wurden.'
    ],
    gaps:[
      {options:['analysiert','durchgesetzt','festgelegt','festgestellt'], correct:3},
      {options:['neuartige','bedenklich','hinderliche','nachteilige'], correct:0},
      {options:['führten','passten','wandten','setzten'], correct:2},
      {options:['Auswirkungen','Nachteile','Zustände','Ergebnisse'], correct:1},
      {options:['angeboten','präpariert','präsentiert','verteilt'], correct:0}
    ]
  },
  { ...TEMPLATE[1],
    instructions:'Bringen Sie die fünf Textabschnitte mit den Pfeiltasten in die richtige Reihenfolge.',
    title:'Neue Regeln zum Schutz vor Greenwashing',
    correctOrder:[0,1,2,3,4],
    items:[
      'Verbraucherinnen und Verbraucher legen zunehmend Wert auf nachhaltigen Konsum und greifen im Supermarkt bevorzugt zu Produkten, die als umweltfreundlich, klimaneutral oder ökologisch gekennzeichnet sind.',
      'Doch nicht überall, wo eine nachhaltige Kennzeichnung draufsteht, steckt auch eine echte ökologische Leistung dahinter, weshalb Fachleute seit Langem vor irreführendem Greenwashing warnen.',
      'Dies hat jedoch weitreichende Konsequenzen: Wenn Konsumentinnen und Konsumenten den Aussagen der Unternehmen nicht mehr vertrauen, verlieren auch echte nachhaltige Innovationen ihren Wettbewerbsvorteil auf dem Markt.',
      'Auf diese Herausforderung reagiert die Europäische Union nun mit verschärften Richtlinien, die strenge Nachweispflichten für umweltbezogene Werbeaussagen vorschreiben und Irreführung konsequent sanktionieren sollen.',
      'Die Folgen dieser verschärften Regulierung sind bereits absehbar: Unternehmen müssen künftig wissenschaftliche Belege erbringen, bevor sie ihre Produkte mit grünen Siegeln werblich hervorheben dürfen.'
    ],
    shuffledStart:[0,3,2,1,4]
  },
  { ...TEMPLATE[2],
    instructions:'Lesen Sie den Text. Beantworten Sie die Fragen 1–7. Entscheiden Sie, welche Lösung passt. Für jede Frage gibt es genau eine richtige Lösung.',
    title:'Nachhaltige Fassadengestaltung und Grundwasserschutz',
    passage:[
      '(1) Gebäudehüllen erfüllen heutzutage weit mehr Aufgaben als den bloßen Schutz vor Witterungseinflüssen. Moderne Fassaden müssen energieeffizient sein, ästhetischen Ansprüchen genügen und langlebig bleiben. Um Gebäude vor Algen- und Pilzbefall zu schützen sowie Putze und Farbanstriche wetterfest zu machen, setzt die Bauindustrie seit Jahrzehnten biozide Wirkstoffe und synthetische Chemikalien ein. Wenn Niederschlagswasser auf diese Oberflächen trifft, werden diese Substanzen im Laufe der Zeit ausgewaschen und gelangen ungefiltert in das Regenwassernetz sowie in das umliegende Erdreich. Dieser Vorgang bedroht zunehmend die Qualität des Grundwassers, das in vielen Regionen als wichtigste Ressource für die Trinkwassergewinnung dient.',
      '(2) Um diesen Umweltrisiken entgegenzuwirken, forschen Wissenschaftler und Architekten verstärkt an umweltfreundlichen Alternativen zur herkömmlichen Beschichtung. Eine besonders vielversprechende Methode liegt in der vertikalen Begrünung von Fassaden durch Kletterpflanzen oder modulare Pflanzsysteme. Diese pflanzlichen Schutzschichten puffern starke Temperaturschwankungen ab, nehmen CO₂ auf und regulieren das Mikroklima in Städten. Wissenschaftliche Untersuchungen belegen zudem, dass schadstofffreie, physikalisch wirkende Fassadenkonstruktionen – wie etwa hinterlüftete Holz- oder Tonfassaden – den Einsatz biozider Schutzanstriche gänzlich überflüssig machen. Dadurch wird der Eintrag schädlicher Chemikalien in den Wasserkreislauf von vornherein unterbunden.',
      '(3) Trotz der nachgewiesenen ökologischen Vorteile stoßen nachhaltige Fassadenkonzepte in der Bauwirtschaft noch immer auf Vorbehalte. Kritiker verweisen vor allem auf die erhöhten Erstinvestitionen und den kontinuierlichen Pflegeaufwand, der beispielsweise bei begrünte Systemen zur Erhaltung der Pflanzenmasse erforderlich ist. Eine europäische Richtlinie zur Gebäudeeffizienz schreibt zwar strengere Umweltstandards vor, allerdings gelten für bestehende Bauvorschriften in vielen Ländern weiterhin Übergangsfristen. Das bedeutet, dass konventionelle, chemisch behandelte Baumaterialien bis auf Weiteres verwendet werden dürfen, sofern sie vor dem Stichtag der Verordnung zugelassen wurden. Erst ab 2028 sollen sämtliche Baustoffe lückenlosen ökologischen Verträglichkeitsprüfungen unterzogen werden.',
      '(4) Biozide in Fassadenfarben verhindern zwar unschöne Verfärbungen, wirken jedoch keineswegs selektiv. Wenn sie durch Regen ausgewaschen werden, beeinträchtigen sie Gewässerorganismen und schwächen das ökologische Gleichgewicht im Boden. Grundwasser ist weder unerschöpflich noch unantastbar. Es beherbergt empfindliche Mikroorganismen, die für die natürliche Selbstreinigung des Bodens unverzichtbar sind. Gelangen chemische Schutzmittel in tiefere Bodenschichten, können sie diese nützlichen Mikrobengemeinschaften schädigen und somit die natürliche Reinigungsleistung des Ökosystems dauerhaft herabsetzen.',
      '(5) Auch auf lange Sicht birgt der Eintrag von Fassadenchemikalien gravierende Konsequenzen. Gelangen biozide Stoffe in Oberflächengewässer oder ins Grundwasser, verdünnen sie sich zwar rasch, verbleiben dort aber über Jahre hinweg. Unter diesem dauerhaften chemischen Stress können bodenlebende Bakterien Resistenzmechanismen gegen Schadstoffe ausbilden. Diese Eigenschaften können durch horizontalen Genstrangtransfer sogar auf Krankheitserreger übertragen werden. Dadurch entstehen Mikroorganismen, die unempfindlich gegenüber gängigen Umweltfilterprozessen sind. Durch den großflächigen Einsatz chemischer Schutzanstriche schaffen wir somit schwer kalkulierbare Gefahren für das gesamte Ökosystem – statt das Gebäude nachhaltig zu schützen.',
      '(6) Ästhetik und Gebäudeschutz bleiben wesentliche Faktoren modernen Bauens. Gerade in urbanen Verdichtungsgebieten müssen Fassaden extremen Umweltbelastungen standhalten. Jedoch sind chemische Schutzmittel nicht das geeignete Instrument, um diesen Herausforderungen langfristig zu begegnen. Für den Werterhalt von Gebäuden und den gleichzeitigen Schutz der Umwelt reichen ausgereifte bautechnische Konstruktionen, eine fundierte Materialauswahl und begrünte Elemente völlig aus.'
    ],
    questions:[
      { q:'Welche der folgenden Aussagen fasst am besten den Inhalt aus Absatz 1 zusammen?', options:[
        'Die Verwendung von Bioziden schützt das Grundwasser vor schädlichen Einflüssen.',
        'Der Auswaschprozess chemischer Stoffe an Fassaden gefährdet die Trinkwasserversorgung.',
        'Moderne Fassadenanstriche verringern den Regenwassereintrag in das Erdreich.',
        'Die Bauindustrie verzichtet heute weitgehend auf synthetische Biozide.'
      ], correct:1 },
      { q:'Laut Absatz 2 ist der Einsatz von chemischen Schutzanstrichen bei nachhaltigen Konstruktionen ...', options:[
        'notwendig.',
        'sinnvoll.',
        'unbedenklich.',
        'überflüssig.'
      ], correct:3 },
      { q:'In Absatz 3 wird gesagt, dass ...', options:[
        'die gesetzlichen Vorschriften für Baumaterialien sofort verschärft wurden.',
        'begrünte Fassadensysteme völlig pflegefrei funktionieren.',
        'manche chemisch behandelten Baustoffe aufgrund von Übergangsfristen weiter genutzt werden dürfen.',
        'die Erstinvestitionen bei nachhaltigen Fassaden niedriger sind als bei herkömmlichen.'
      ], correct:2 },
      { q:'Laut Absatz 4 ist Grundwasser „weder unerschöpflich noch unantastbar“, weil ...', options:[
        'es keine Selbstreinigungskräfte besitzt.',
        'chemische Stoffe die für das Ökosystem wichtigen Mikroorganismen schädigen können.',
        'es ausschließlich durch Regenwasser gereinigt wird.',
        'Biozide auf der Fassadenoberfläche verbleiben.'
      ], correct:1 },
      { q:'Welche der folgenden Überschriften passt inhaltlich am besten zu Absatz 5?', options:[
        'Biozide Anstriche führen zu resistenten Umweltkeimen',
        'Grundwasser schützt Gebäude vor biologischem Befall',
        'Bakterien reinigen chemisch belastete Abwässer',
        'Fassadengestaltung verbessert das städtische Mikroklima'
      ], correct:0 },
      { q:'In Absatz 6 wird die Nutzung von bautechnischen Konstruktionen und begrünte Elementen ...', options:[
        'empfohlen.',
        'erwartet.',
        'gelobt.',
        'vorgeschrieben.'
      ], correct:0 },
      { q:'Hauptanliegen des Textes ist es, ...', options:[
        'die neuesten Erkenntnisse aus der Farbenherstellung zu bekräftigen.',
        'die vielseitigen Einsatzmöglichkeiten von Bioziden hervorzuheben.',
        'über den Schutz von Fassaden im städtischen Raum zu informieren.',
        'über die weitreichenden Umweltrisiken chemischer Fassadenanstriche aufzuklären.'
      ], correct:3 }
    ]
  },
  { ...TEMPLATE[3],
    instructions:'Lesen Sie den Text. Ordnen Sie die Textstellen 1–4 den Aussagen unten zu. Die Zahlen beziehen sich immer auf den nachfolgenden Satz. Für jede Textstelle gibt es genau eine richtige Lösung.',
    title:'Kommentar eines Experten zu REACH-Auskunftspflichten für Unternehmen',
    passageText:`Die europaweit geltende REACH-Verordnung legt fest, dass Verbraucher ein Recht darauf haben zu erfahren, ob Produkte besonders besorgniserregende Chemikalien enthalten. Dass viele Unternehmen ihren Informationspflichten noch immer nicht vollumfänglich und transparent nachkommen, ist eine enttäuschende Realität auf dem europäischen Binnenmarkt. <strong>[1] Es steht zu befürchten, dass bei einer anhaltenden Nachlässigkeit der Hersteller unbemerkt gesundheitsschädliche Substanzen in Alltagsgegenstände wie Textilien oder Kinderspielzeug gelangen und somit langfristig die Gesundheit der Konsumenten beeinträchtigen.</strong><br><br>Obwohl die bürokratischen Hürden für kleine und mittlere Betriebe keineswegs unerheblich sind, verfehlen Klagen über den verfünffachten Aufwand das wesentliche Ziel des Verbraucherschutzes. <strong>[2] Es ist den Unternehmen dringlichst anzuraten, digitale Datenmanagementsysteme einzuführen, um Lieferketten lückenlos zu verfolgen und Auskunftsanfragen innerhalb der gesetzlichen Frist von 45 Tagen mühelos zu beantworten.</strong><br><br>Die Skepsis vieler Wirtschaftsverbände, die Transparenz könne Geschäftsgeheimnisse gefährden, erweist sich bei genauerer Betrachtung als unbegründet. <strong>[3] In Wirklichkeit ist davon auszugehen, dass Firmen, die sich frühzeitig als vertrauenswürdig und transparent positionieren, langfristig erhebliche Wettbewerbsvorteile erzielen und das Vertrauen einer zunehmend umweltbewussten Kundschaft gewinnen werden.</strong><br><br>Die bisherige Durchsetzung der Verordnung durch die nationalen Behörden verläuft stellenweise noch schleppend. <strong>[4] Es steht außer Frage, dass nur durch verschärfte Kontrollen und spürbare Sanktionen bei Verstößen eine flächendeckende Einhaltung der Verordnung garantiert werden kann; ohne diese Maßnahmen bleibt die Auskunftspflicht ein zahnloser Papiertiger.</strong>`,
    textStellen:[1, 2, 3, 4],
    options:[
      'Der Experte bedauert etwas.',
      'Der Experte empfiehlt etwas.',
      'Der Experte kritisiert etwas.',
      'Der Experte prognostiziert etwas.',
      'Der Experte vermutet etwas.',
      'Der Experte warnt vor etwas.',
      'Der Experte zweifelt an etwas.',
      'Der Experte fordert etwas.'
    ],
    correct:[5, 1, 3, 7]
  },
  { ...TEMPLATE[4],
    instructions:'Lesen Sie den Text. Ordnen Sie die Aussagen 1–7 zu: Entscheiden Sie für jede Aussage, ob sie zu Plastikverpackungen, zu Papier-/Glasverpackungen, zu beiden oder gar nicht passt. Für jede Aussage gibt es genau eine richtige Lösung. Die Aussagen folgen nicht dem Textverlauf.',
    title:'Umwelt- und Gesundheitseffekte moderner Verpackungsmaterialien',
    passage:'Die europäische Verpackungsverordnung steht vor grundlegenden Neuregelungen, da moderne Konsumgüterverpackungen zunehmend im Spannungsfeld zwischen ökologischer Nachhaltigkeit und gesundheitlicher Unbedenklichkeit diskutiert werden. Über Jahrzehnte hinweg dominierten Kunststoffe den Markt aufgrund ihres geringen Eigengewichts und ihrer hohen Barrierefunktion. Aktuelle biomechanische Analysen verweisen jedoch darauf, dass synthetische Polymere wie Polyethylen erhebliche Mengen an Weichmachern sowie Mikroplastik freisetzen können. Diese chemischen Verbindungen reichern sich über die Nahrungskette im menschlichen Fettgewebe an und stehen im Verdacht, hormonelle Störungen auszulösen. Infolgedessen gewinnen alternative Materialverbünde aus Altpapier, Kartonage und Spezialglas massiv an Marktanteilen. Papierbasierte Behältnisse zeichnen sich zwar durch eine hervorragende biolytische Abbaubarkeit aus, benötigen im Produktionszyklus jedoch signifikante Mengen an Frischwasser und Energie. Zudem ergaben toxikologische Befunde des Bundesinstituts für Risikobewertung, dass recycelter Karton mineralölhaltige Rückstände aus Druckfarben an trockene Lebensmittel abgeben kann, weshalb neuartige Schutzbeschichtungen gesetzlich vorgeschrieben werden. Interessanterweise weisen ökologische Gesamtbilanzen darauf hin, dass die Wahl des Materials allein nicht über die Umweltfreundlichkeit entscheidet: Sowohl Kunststoff- als auch Glas- und Papierverpackungen erfordern zur Optimierung ihres CO2-Fußabdrucks geschlossene Kreislaufsysteme und hocheffiziente Recyclingquoten. Fehlen diese Voraussetzungen, führt der Umstieg lediglich zu einer Verlagerung der Umweltbelastung. Zudem bergen beide Rohstoffklassen das Risiko, dass chemische Hilfsstoffe bei thermischer Beanspruchung in das Füllgut migrieren.',
    columns:['Plastikverpackungen','Papier-/Glasverpackungen','beide','passt nicht'],
    items:[
      {text:'Chemische Rückstände können bei Erwärmung in die Füllgüter übergehen.', correct:2},
      {text:'Mikropartikel lagern sich dauerhaft im organischen Gewebe an.', correct:0},
      {text:'Die Herstellung erfordert extrem hohe Wasser- und Energieressourcen.', correct:1},
      {text:'Ein Verbot dieser Materialien im Einzelhandel ist bereits beschlossen.', correct:3},
      {text:'Zur nachhaltigen Nutzung sind funktionierende Recyclingkreisläufe unerlässlich.', correct:2},
      {text:'Mineralölbestandteile aus Recyclingprozessen bedrohen die Lebensmittelreinheit.', correct:1},
      {text:'Das verhältnismäßig geringe Eigengewicht stellt einen Marktvorteil dar.', correct:0}
    ]
  },
  { ...TEMPLATE[5],
    instructions:'Lesen Sie den Text. Entscheiden Sie, welche Aussagen stimmen, und ordnen Sie genau vier Aussagen der Tabelle zu (2 Physiologische Wirkungsweisen, 2 Gesundheitliche Langzeitfolgen).',
    title:'Erst Gemüse, dann Kohlenhydrate? Was bringt Meal Sequencing?',
    passage:'In der Ernährungsphysiologie gewinnt ein Ansatz zunehmend an Bedeutung, der nicht die Zusammensetzung der Nahrungsmittel an sich, sondern die zeitliche Abfolge ihres Verzehrs in den Vordergrund stellt: das sogenannte Meal Sequencing. Wissenschaftliche Untersuchungen belegen, dass die Reihenfolge, in der Makronährstoffe aufgenommen werden, einen erheblichen Einfluss auf den postprandialen Glukosestoffwechsel ausübt. Wenn ballaststoffreiche Nahrungsmittel wie Gemüse sowie Proteine vor den kohlenhydratreichen Komponenten einer Mahlzeit konsumiert werden, führt dies zu einer verlangsamten Magenentleerung. Dies hat zur Folge, dass der Anstieg des Blutzuckerspiegels signifikant abgeflacht wird, wodurch die Bauchspeicheldrüse messbar entlastet wird, da sie weniger Insulin ausschütten muss. Überdies zeigt sich, dass durch die gezielte Nährstoffabfolge die Ausschüttung von Sättigungshormonen im Magen-Darm-Trakt begünstigt wird. Dieser hormonelle Effekt führt zu einem anhaltenden Sättigungsgefühl und kann somit präventiv gegen unerwünschte Heißhungerattacken wirken. Langfristig bietet diese Methode beträchtliche gesundheitliche Vorteile: Ein kontinuierlich moderater Blutzuckerverlauf reduziert das Risiko, an Diabetes Mellitus Typ 2 zu erkranken, und senkt zudem die Wahrscheinlichkeit für kardiovaskuläre Folgeschäden, die häufig mit chronisch erhöhten Insulinspiegeln korrelieren. Kritiker geben jedoch zu bedenken, dass Meal Sequencing kein Allheilmittel darstellt. Es ersetzt keineswegs eine ausgewogene Ernährung oder die Kalorienkontrolle. Wer bei einer insgesamt ungesunden Nahrungszufuhr lediglich die Reihenfolge verändert, erreicht kaum präventive Wirkungen. Dennoch betonen Ernährungswissenschaftler, dass diese leicht umsetzbare Strategie – insbesondere für Personen mit Prädiabetes oder Stoffwechselstörungen – eine wirksame, medikamentenfreie Ergänzung zur Regulierung des Glukosehaushalts bietet.',
    aussagen:[
      { key:'a', text:'[a] Die verzögerte Magenentleerung führt zu einer verminderten Insulinausschüttung.' },
      { key:'b', text:'[b] Eine veränderte Verzehrreihenfolge gleicht eine dauerhaft ungesunde Ernährungsweise vollständig aus.' },
      { key:'c', text:'[c] Der gezielte Verzehr verringert langfristig das Risiko für Herz-Kreislauf-Erkrankungen.' },
      { key:'d', text:'[d] Die Ausschüttung von Sättigungshormonen wird durch die Reihenfolge der Nährstoffzufuhr gehemmt.' },
      { key:'e', text:'[e] Ballaststoffe und Proteine vor Kohlenhydraten dämpfen den Anstieg des Blutzuckerspiegels.' },
      { key:'f', text:'[f] Das Auftreten von Typ-2-Diabetes wird durch einen schwankenden Blutzuckerspiegel nachhaltig verhindert.' },
      { key:'g', text:'[g] Die gezielte Nährstoffabfolge schützt wirksam vor plötzlichem Heißhunger.' },
      { key:'h', text:'[h] Meal Sequencing erfordert den obligatorischen Einsatz von Medikamenten zur Stoffwechselregulation.' }
    ],
    correctMap: { v1: 'a', v2: 'e', n3: 'c', n4: 'g' }
  },
  { ...TEMPLATE[6],
    instructions:'Lesen Sie den Text. Beachten Sie auch die Informationen aus der Grafik. In der Zusammenfassung sind genau drei Sätze inhaltlich falsch (sie widersprechen dem Text oder der Grafik). Markieren Sie diese drei Sätze.',
    title:'Wertvolles Wasser: Neue Technologien in der industriellen Abwasseraufbereitung',
    passage:'Süßwasser gilt weltweit als eine der kostbarsten Ressourcen des 21. Jahrhunderts. Vor dem Hintergrund fortschreitender Klimaveränderungen, intensiverer Dürreperioden und des stetigen Wachstums der Weltbevölkerung gerät insbesondere der Industriesektor unter zunehmenden Druck, seinen Wasserverbrauch drastisch zu reduzieren. In modernsten Industrieanlagen kommen daher hochkomplexe Membranfiltrationssysteme zum Einsatz. Diese ermöglichen es, selbst stark kontaminiertes Prozesswasser so gründlich zu reinigen, dass es im geschlossenen Kreislauf direkt wiederverwendet werden kann. Traditionelle mechanisch-biologische Klärverfahren stießen bei der Entfernung von mikroskopischen Schadstoffen, chemischen Rückständen und gelösten Schwerölen oft an ihre Grenzen. Neuartige Verfahren der Nanofiltration und Umkehrosmose hingegen filtern selbst kleinste Moleküle zuverlässig heraus. Die wesentliche Hürde für eine flächendeckende Implementierung liegt jedoch in den immensen Anschaffungs- und Betriebskosten. Die Herstellung sowie die regelmäßige chemische Aufbereitung der hochfunktionalen Filterfilterstrukturen erfordern nicht nur beträchtliche finanzielle Mittel, sondern auch einen enormen Energieaufwand, was vor allem kleine und mittlere Unternehmen (KMU) vor Erstinvestitionen zurückschrecken lässt. Nichtsdestotrotz zeigt der Branchenvergleich erhebliche Unterschiede bezüglich des Einsatzes dieser Aufbereitungstechnologien. Während die chemische Industrie aufgrund strenger Umweltauflagen bereits hohe Wiederverwendungsraten aufweist, hinkt die Lebensmittelverarbeitung trotz ihres immensen Gesamtverbrauchsniveaus bei der Implementierung geschlossener Kreislaufsysteme hinterher. Umweltökonomen betonen, dass ohne gezielte staatliche Förderprogramme und strenge gesetzliche Regulierungen der globale Wasserverbrauch des Industriesektors nicht nachhaltig gesenkt werden kann.',
    graphicData:[{year:'Chemieindustrie: Frischwasser (Mio. m³)',val:320},{year:'Chemieindustrie: Recyclingquote (%)',val:68},{year:'Lebensmittelind.: Frischwasser (Mio. m³)',val:410},{year:'Lebensmittelind.: Recyclingquote (%)',val:25},{year:'Papierherstellung: Frischwasser (Mio. m³)',val:180},{year:'Papierherstellung: Recyclingquote (%)',val:52}],
    graphicCaption:'Wasserverbrauch und Recyclingquote nach Industriesektor (in Mio. m³ / %)',
    sentences:[
      {text:'Aufgrund globaler Umwelteinflüsse wird eine effizientere Wassernutzung in der Industrie immer dringlicher.', wrong:false},
      {text:'Moderne Membranfiltrationssysteme ermöglichen es heutzutage, selbst stark verunreinigtes Wasser vollständig aufzubereiten.', wrong:false},
      {text:'Allerdings zeichnen sich diese fortschrittlichen Filtersysteme vor allem durch ihren besonders geringen Energiebedarf aus.', wrong:true},
      {text:'Der Einsatz dieser Technologie unterscheidet sich je nach Branche erheblich.', wrong:false},
      {text:'Die Chemieindustrie weist bereits eine sehr hohe Recyclingquote auf.', wrong:false},
      {text:'Im Gegensatz dazu hinkt die Lebensmittelverarbeitung hinterher, obwohl sie ein hohes Verbrauchsniveau verzeichnet.', wrong:false},
      {text:'Die Grafik zeigt zudem, dass die Papierherstellung den höchsten absoluten Frischwasserverbrauch aller Sektoren aufweist.', wrong:true},
      {text:'Umweltökonomen sind sich einig, dass technische Innovationen allein nicht ausreichen.', wrong:false},
      {text:'Sie fordern daher, auf staatliche Eingriffe vollständig zu verzichten und die Regulierung dem freien Markt zu überlassen.', wrong:true}
    ]
  }
];

const TESTS = [
  {id:1, title:'Modelltest C1 (Akademisch)', teile: MT1},
  {id:2, title:'Modelltest 2 (Digitaler TestDaF)', teile: MT2},
  {id:3, title:'Modelltest 3 (Digitaler TestDaF)', teile: MT3},
  {id:4, title:'Modelltest 4 (Digitaler TestDaF)', teile: MT4},
  {id:5, title:'Modelltest 5 (Digitaler TestDaF)', teile: MT5},
  {id:6, title:'Modelltest 6 (Digitaler TestDaF)', teile: MT6}, 
  {id:7, title:'Modelltest 7 (Digitaler TestDaF)', teile: MT7},
  {id:8, title:'Modelltest 8 (Digitaler TestDaF)', teile: MT8}
];
