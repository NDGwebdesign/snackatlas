const snacks = [
  {
    id: "takoyaki",
    name: "Takoyaki",
    country: "Japan",
    continent: "Asia",
    description: "Ronde deegballetjes met stukjes octopus, meestal geserveerd met saus en toppings.",
    story: "Takoyaki ontstond in Osaka en groeide uit tot een populaire streetfood-klassieker tijdens festivals en markten.",
    recipe: [
      "Meng takoyaki-beslag en verhit een takoyaki-pan.",
      "Vul elke holte met beslag en voeg octopus, lente-ui en gember toe.",
      "Draai de balletjes regelmatig tot ze goudbruin zijn.",
      "Serveer met takoyakisaus, mayo en gedroogde bonitovlokken."
    ],
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "churros",
    name: "Churros",
    country: "Spain",
    continent: "Europe",
    description: "Gefrituurde deegstaven met suiker en kaneel, vaak met warme chocoladesaus.",
    story: "Churros worden al generaties lang gegeten bij ontbijt en feestdagen in Spanje en Latijns-Amerika.",
    recipe: [
      "Breng water, boter en zout aan de kook.",
      "Roer bloem erdoor tot een stevig deeg ontstaat.",
      "Spuit repen deeg in hete olie en frituur goudbruin.",
      "Rol in kaneelsuiker en serveer met chocoladedip."
    ],
    image: "https://images.unsplash.com/photo-1624374053855-39cdaeda7d39?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "samosa",
    name: "Samosa",
    country: "India",
    continent: "Asia",
    description: "Driehoekige snack met kruidige vulling van aardappel, erwten en specerijen.",
    story: "Samosa is een geliefde snack in India en wordt vaak geserveerd met chutney bij chai.",
    recipe: [
      "Maak een deeg van bloem, olie en water.",
      "Kook aardappelvulling met komijn, erwten en kruiden.",
      "Vorm driehoekjes en vul ze met het mengsel.",
      "Frituur tot de buitenkant krokant en goudkleurig is."
    ],
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "stroopwafel",
    name: "Stroopwafel",
    country: "Netherlands",
    continent: "Europe",
    description: "Twee dunne wafels met een zachte karamelstroop ertussen.",
    story: "De stroopwafel komt uit Gouda en is uitgegroeid tot een wereldwijd bekende Nederlandse lekkernij.",
    recipe: [
      "Bak kleine ronde wafels in een wafelijzer.",
      "Snijd de warme wafel horizontaal doormidden.",
      "Smeer een laag stroopvulling op een helft.",
      "Leg de andere helft erop en laat kort afkoelen."
    ],
    image: "https://images.unsplash.com/photo-1692725153156-96522132f3d4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "onigiri",
    name: "Onigiri",
    country: "Japan",
    continent: "Asia",
    description: "Rijstdriehoek met vulling zoals zalm of umeboshi, vaak in nori gewikkeld.",
    story: "Onigiri is al eeuwen een praktische reissnack in Japan vanwege de eenvoudige bereiding en draagbaarheid.",
    recipe: [
      "Kook Japanse rijst en laat iets afkoelen.",
      "Leg vulling in het midden van een portie rijst.",
      "Vorm met natte handen een driehoek.",
      "Wikkel eventueel met nori en serveer direct."
    ],
    image: "https://images.unsplash.com/photo-1648146299018-2f194a1c2afe?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "biltong",
    name: "Biltong",
    country: "South Africa",
    continent: "Africa",
    description: "Gedroogd gekruid vlees in dunne reepjes, hartig en eiwitrijk.",
    story: "Biltong ontstond als conserveringsmethode in Zuid-Afrika en is nu een populaire snack voor onderweg.",
    recipe: [
      "Snijd rundvlees in lange repen.",
      "Marineer met azijn, zout, koriander en peper.",
      "Hang de repen op in een droge ruimte.",
      "Laat drogen tot de gewenste textuur bereikt is."
    ],
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "elote",
    name: "Elote",
    country: "Mexico",
    continent: "North America",
    description: "Gegrilde maiskolf met mayo, kaas, chili en limoen.",
    story: "Elote is een iconische Mexicaanse streetfood-snack die je vaak vindt op markten en pleinen.",
    recipe: [
      "Grill maiskolven tot licht geblakerd.",
      "Smeer in met een dunne laag mayo.",
      "Bestrooi met verkruimelde kaas en chilipoeder.",
      "Maak af met limoensap en eventueel koriander."
    ],
    image: "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "pao-de-queijo",
    name: "Pao de Queijo",
    country: "Brazil",
    continent: "South America",
    description: "Kleine luchtige kaasbroodjes op basis van tapiocameel.",
    story: "In Brazilie worden deze warme kaasbolletjes vaak bij koffie gegeten, vooral als tussendoortje.",
    recipe: [
      "Verwarm melk, olie en zout in een pan.",
      "Meng met tapiocameel tot een samenhangend deeg.",
      "Voeg ei en geraspte kaas toe.",
      "Bak bolletjes in de oven tot ze goudbruin zijn."
    ],
    image: "https://images.unsplash.com/photo-1632892645127-2fceb2f1739c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "simit",
    name: "Simit",
    country: "Turkey",
    continent: "Europe",
    description: "Ronde broodring met sesamzaad, knapperig van buiten en zacht van binnen.",
    story: "Simit is een klassieker in Turkije en wordt vaak verkocht op straat met thee erbij.",
    recipe: [
      "Maak gistdeeg en laat rijzen.",
      "Vorm ringen en doop in druivensiroop of melasse met water.",
      "Rol door sesamzaad.",
      "Bak tot de korst diep goudbruin en krokant is."
    ],
    image: "https://images.unsplash.com/photo-1619531038896-c5e8a95dc85f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "tteokbokki",
    name: "Tteokbokki",
    country: "South Korea",
    continent: "Asia",
    description: "Pittige rijstcakes in zoet-pittige saus, populair als comfort streetfood.",
    story: "Tteokbokki is een favoriet in Zuid-Korea en vaak te vinden in drukke foodstraten.",
    recipe: [
      "Week rijstcakes kort in water.",
      "Maak saus van gochujang, bouillon, suiker en knoflook.",
      "Kook de rijstcakes in de saus tot ze zacht zijn.",
      "Garneer met lente-ui en serveer warm."
    ],
    image: "https://images.unsplash.com/photo-1601050690117-24f5f4d0f8bb?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "arancini",
    name: "Arancini",
    country: "Italy",
    continent: "Europe",
    description: "Gefrituurde rijstballen gevuld met ragout, mozzarella of groente.",
    story: "Arancini komt uit Sicilie en is geliefd als snack in bars, bakeries en op straat.",
    recipe: [
      "Kook risotto en laat afkoelen.",
      "Vorm balletjes met een vulling naar keuze.",
      "Paneer met bloem, ei en broodkruim.",
      "Frituur tot goudbruin en krokant."
    ],
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "mango-sticky-rice",
    name: "Mango Sticky Rice",
    country: "Thailand",
    continent: "Asia",
    description: "Zoete kleefrijst met kokosmelk en verse mango.",
    story: "Dit dessertachtige tussendoortje is een populaire seizoenssnack in Thailand.",
    recipe: [
      "Week en stoom kleefrijst tot gaar.",
      "Meng met gezoete kokosmelk en een snuf zout.",
      "Serveer met plakjes rijpe mango.",
      "Werk af met extra kokossaus en sesam."
    ],
    image: "https://images.unsplash.com/photo-1625943555239-6f7d7fecd6c7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "poutine",
    name: "Poutine",
    country: "Canada",
    continent: "North America",
    description: "Friet met jus en kaaskwark, warm en hartig comfortfood.",
    story: "Poutine werd in Quebec populair en groeide uit tot een iconische Canadese snack.",
    recipe: [
      "Bak friet krokant en houd warm.",
      "Verwarm een stevige bruine jus.",
      "Schep kaaskwark over de friet.",
      "Giet hete jus erover en serveer direct."
    ],
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "baklava",
    name: "Baklava",
    country: "Turkey",
    continent: "Europe",
    description: "Knapperig filodeeg in laagjes met noten en siroop.",
    story: "Baklava is een klassiek dessert-snack in Turkije en wordt vaak bij thee gegeten.",
    recipe: [
      "Leg laagjes filodeeg in een ingevette bakvorm.",
      "Verdeel fijngehakte noten tussen de lagen.",
      "Bak tot goudbruin en krokant.",
      "Giet suikersiroop erover en laat intrekken."
    ],
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "arepa",
    name: "Arepa",
    country: "Colombia",
    continent: "South America",
    description: "Maisbroodje dat gegrild of gebakken wordt en vaak gevuld is.",
    story: "Arepa is een dagelijkse favoriet in Colombia, zowel als ontbijt als snack.",
    recipe: [
      "Meng voorgekookt maismeel met water en zout.",
      "Vorm ronde platte broodjes.",
      "Bak op een hete plaat tot goudbruin.",
      "Vul eventueel met kaas of avocado."
    ],
    image: "https://images.unsplash.com/photo-1603048719539-9ecb40ccf64d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "jollof-rice-bites",
    name: "Jollof Rice Bites",
    country: "Nigeria",
    continent: "Africa",
    description: "Pittige rijsthapjes met tomaat, peper en kruiden.",
    story: "Jollof-smaken zijn enorm populair in West-Afrika en verschijnen steeds vaker als snackvariant.",
    recipe: [
      "Kook rijst in tomatensaus met ui en peper.",
      "Laat de rijst afkoelen en stevig worden.",
      "Vorm kleine hapjes of balletjes.",
      "Bak kort in de pan voor een lichte korst."
    ],
    image: "https://images.unsplash.com/photo-1641542411071-4f9a4a4d8f9f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "pretzel",
    name: "Pretzel",
    country: "Germany",
    continent: "Europe",
    description: "Zacht zoutbrood in karakteristieke knoopvorm.",
    story: "Pretzels zijn al eeuwen een favoriet in Duitsland, vooral op markten en festivals.",
    recipe: [
      "Maak een gistdeeg en laat rijzen.",
      "Vorm de typische pretzelknoop.",
      "Doop kort in baking soda-water.",
      "Bestrooi met zout en bak goudbruin."
    ],
    image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "banh-mi-bites",
    name: "Banh Mi Bites",
    country: "Vietnam",
    continent: "Asia",
    description: "Kleine belegde baguettehapjes met frisse en hartige smaken.",
    story: "Banh mi combineert Vietnamese en Franse invloeden en is populair als snelle snack.",
    recipe: [
      "Snijd kleine stukjes baguette.",
      "Beleg met gepekeld groente, koriander en eiwit naar keuze.",
      "Voeg een pittige saus of mayo toe.",
      "Serveer direct als mini-sandwiches."
    ],
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "lamington",
    name: "Lamington",
    country: "Australia",
    continent: "Oceania",
    description: "Blokjes cake met chocoladelaag en kokosrasp.",
    story: "Lamington is een klassieke Australische traktatie die vaak bij koffie wordt gegeten.",
    recipe: [
      "Snijd luchtige cake in blokjes.",
      "Doop elk blokje in chocoladesaus.",
      "Rol direct door kokosrasp.",
      "Laat opstijven en serveer."
    ],
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "falafel",
    name: "Falafel",
    country: "Egypt",
    continent: "Africa",
    description: "Krokante balletjes van kikkererwten of tuinbonen met kruiden.",
    story: "Falafel wordt in Egypte en het Midden-Oosten veel gegeten als snelle snack of streetfood.",
    recipe: [
      "Week peulvruchten en maal met kruiden en ui.",
      "Vorm kleine balletjes.",
      "Frituur tot diep goudbruin.",
      "Serveer met tahin en verse salade."
    ],
    image: "https://images.unsplash.com/photo-1593001874117-c99c800e3eb5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "waffle-bites",
    name: "Waffle Bites",
    country: "Belgium",
    continent: "Europe",
    description: "Kleine Belgische wafelhapjes met poedersuiker of chocolade.",
    story: "Belgische wafels zijn wereldwijd beroemd en werken perfect als zoete snack.",
    recipe: [
      "Maak een beslag met bloem, melk, ei en boter.",
      "Bak in een wafelijzer tot goudbruin.",
      "Snijd in kleine hapjes.",
      "Werk af met poedersuiker of chocoladesaus."
    ],
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1200&q=80"
  }
];