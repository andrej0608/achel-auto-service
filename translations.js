/*
 * Site copy in Dutch (default) and English.
 *
 * The HTML ships with the Dutch strings already rendered, so the page reads
 * correctly before this file runs. Elements opt in to translation with
 * data-i18n (text), data-i18n-html (markup) or data-i18n-placeholder.
 *
 * To rebrand, change BRAND — it is the only place the company name is defined.
 */
const BRAND = 'Premium Auto Service';

const CONTACT = {
  addressLine: 'Avenue Exemple 24, 1000 Bruxelles',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Avenue+Exemple+24%2C+1000+Bruxelles%2C+Belgium',
  phoneDisplay: '+32 2 123 45 67',
  phoneHref: 'tel:+3221234567',
  whatsappDisplay: '+32 470 12 34 56',
  whatsappUrl: 'https://wa.me/32470123456',
  email: 'info@brusselsautoservice.be'
};

const translations = {
  nl: {
    meta: {
      title: `${BRAND} | Professionele autoherstellingen in Brussel`,
      description:
        'Betrouwbaar onderhoud, diagnose en herstellingen voor alle automerken in Brussel. Eerlijke prijzen, snelle service en 24 maanden garantie.',
      privacyTitle: `Privacybeleid | ${BRAND}`,
      privacyDescription: `Hoe ${BRAND} in Brussel omgaat met uw persoonsgegevens.`,
      termsTitle: `Algemene voorwaarden | ${BRAND}`,
      termsDescription: `De algemene voorwaarden van ${BRAND} in Brussel.`
    },
    nav: {
      home: 'Home',
      services: 'Diensten',
      pricing: 'Prijzen',
      gallery: 'Werkplaats',
      about: 'Over ons',
      reviews: 'Beoordelingen',
      faq: 'FAQ',
      contact: 'Contact',
      book: 'Afspraak maken',
      language: 'Taal',
      menu: 'Menu openen',
      backHome: 'Terug naar de website'
    },
    hero: {
      eyebrow: 'Brussel, België',
      title: 'Professionele auto<span>herstellingen</span> in Brussel',
      lead:
        'Betrouwbaar onderhoud, diagnose en herstellingen voor alle automerken — snel, eerlijk en aan een correcte prijs. Wij zorgen voor uw wagen, zodat u zich op de weg kunt concentreren.',
      book: 'Afspraak maken',
      call: 'Bel ons nu',
      openTitle: 'Nu open',
      openHours: 'Ma – Vr: 08:00 – 18:00',
      expTitle: '10+ jaar ervaring',
      expText: 'Gecertificeerde mecaniciens',
      warrantyTitle: '24 maanden garantie',
      warrantyText: 'Op onderdelen en werkuren'
    },
    services: {
      eyebrow: 'Diensten',
      title: 'Alles wat uw auto nodig heeft, onder één dak',
      lead: 'Van gewoon onderhoud tot complexe herstellingen, voor elk merk.',
      oilTitle: 'Olieverversing',
      oilText: 'Snelle olie- en filterservice met kwaliteitssmeermiddelen.',
      brakeTitle: 'Remmenservice',
      brakeText: 'Schijven, remblokken en remvloeistof gecontroleerd en vervangen.',
      diagTitle: 'Motordiagnose',
      diagText: 'Computerdiagnose voor elk waarschuwingslampje.',
      beltTitle: 'Distributieriem',
      beltText: 'Riem en waterpomp vervangen volgens de voorschriften.',
      clutchTitle: 'Koppeling vervangen',
      clutchText: 'Volledige koppelingssets voor alle automerken.',
      acTitle: 'Airco',
      acText: 'Bijvullen, ontsmetten en lekdetectie.',
      tireTitle: 'Bandenservice',
      tireText: 'Monteren, uitbalanceren, uitlijnen en stockage.',
      batteryTitle: 'Batterij vervangen',
      batteryText: 'Testen en batterij vervangen dezelfde dag.'
    },
    pricing: {
      eyebrow: 'Prijzen',
      title: 'Eenvoudige, transparante prijzen',
      lead:
        'Hier vindt u een overzicht van onze meest gevraagde diensten. De uiteindelijke prijs kan variëren naargelang het merk en model van uw wagen.',
      oil: 'Olieverversing',
      oil1: 'Standaard olieverversing',
      oil2: 'Volledig synthetische olieverversing',
      oil3: 'Oliefilter vervangen',
      diag: 'Diagnose',
      diag1: 'Basis computerdiagnose',
      diag2: 'Volledige diagnosescan',
      diag3: 'Motorstoringslampje uitlezen',
      brake: 'Remmen',
      brake1: 'Remblokken vervangen (per as)',
      brake2: 'Remschijven vervangen (per as)',
      brake3: 'Remvloeistof verversen',
      ac: 'Airco',
      ac1: 'Aircocontrole',
      ac2: 'Airco bijvullen',
      ac3: 'Volledige aircoservice (reinigen + bijvullen)',
      note:
        '* De vermelde prijzen zijn startprijzen en kunnen variëren naargelang het model en de staat van uw wagen.'
    },
    gallery: {
      eyebrow: 'Onze werkplaats',
      title: 'Een kijkje binnen',
      lead:
        'Een blik op onze werkplaats, ons gereedschap en hoe wij elke wagen behandelen die bij ons binnenkomt.',
      cap1: 'Onze garage',
      cap2: 'Herstellingen',
      cap3: 'Computerdiagnose',
      cap4: 'Remmenservice',
      cap5: 'Banden & uitlijning',
      cap6: 'Olieverversing',
      alt1: `Vooraanzicht van de garage van ${BRAND}`,
      alt2: 'Mecanicien werkt aan een automotor',
      alt3: 'Diagnosecomputer aangesloten op een wagen',
      alt4: 'Close-up van het vervangen van een remschijf',
      alt5: 'Bandenservice en uitlijnapparatuur',
      alt6: 'Detail van een olieverversing'
    },
    about: {
      eyebrow: 'Over ons',
      title: 'Een buurtgarage met het niveau van een concessie',
      p1: `${BRAND} startte in 2015 als een garage met twee man aan de rand van Brussel. Wat begon met olieverversingen voor de buren, groeide uit tot een volledig uitgeruste garage waar gezinnen en zelfstandigen uit heel de Brusselse regio op rekenen.`,
      p2:
        'We werken nog altijd zoals op dag één: eerlijk advies, een duidelijke prijs vooraf en een wagen die veilig de werkplaats verlaat. Onze mecaniciens volgen voortdurend opleidingen over nieuwe motor- en hybridetechnologie.',
      li1: 'Ervaren mecaniciens met tientallen jaren werkplaatservaring',
      li2: 'Transparante prijzen — een duidelijke offerte voor we beginnen',
      li3: 'Snelle service — de meeste herstellingen klaar dezelfde dag',
      li4: 'Moderne diagnoseapparatuur op merkniveau',
      li5: '24 maanden garantie op onderdelen en werkuren',
      stat1: 'jaar ervaring',
      stat2: 'herstelde wagens',
      stat3: 'tevreden klanten'
    },
    reviews: {
      eyebrow: 'Beoordelingen',
      title: 'Wat onze klanten zeggen',
      q1:
        '„Mijn Golf had een raar waarschuwingslampje dat twee andere garages niet konden oplossen. Hier vonden ze het binnen het uur en de prijs was exact zoals afgesproken.”',
      c1: 'Brussel',
      q2:
        '„Mijn Peugeot binnengebracht voor de remmen en een onderhoud. Vriendelijke mensen, duidelijke uitleg en de wagen stond dezelfde namiddag klaar.”',
      c2: 'Schaarbeek',
      q3:
        '„Distributieriem van mijn Passat vervangen aan een eerlijke prijs. Ze toonden mij de oude onderdelen en gaven schriftelijke garantie. Dit is nu onze vaste garage.”',
      c3: 'Elsene'
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Veelgestelde vragen',
      q1: 'Moet ik een afspraak maken?',
      a1:
        'Voor herstellingen en onderhoud werken we op afspraak, zo staat uw wagen niet nodeloos te wachten. Voor een snelle controle, een platte band of een batterijtest mag u ook gewoon binnenspringen tijdens de openingsuren.',
      q2: 'Welke automerken herstellen jullie?',
      a2:
        'Alle merken. Onze diagnoseapparatuur ondersteunt Europese, Japanse en Koreaanse wagens, inclusief de meeste hybrides.',
      q3: 'Verlies ik mijn fabrieksgarantie bij een herstelling hier?',
      a3:
        'Neen. Volgens de Europese regelgeving mag u uw wagen laten onderhouden bij een onafhankelijke garage. Wij gebruiken onderdelen van fabrikantkwaliteit en stempelen uw onderhoudsboekje af.',
      q4: 'Hoeveel kost een herstelling?',
      a4:
        'U krijgt altijd een duidelijke offerte voor we starten. Ontdekken we tijdens de herstelling extra werk, dan bellen we u eerst en doen we niets zonder uw akkoord.',
      q5: 'Kan ik een vervangwagen krijgen?',
      a5:
        'Ja, we hebben een beperkt aantal vervangwagens beschikbaar voor langere herstellingen. Vermeld het even bij het maken van uw afspraak.'
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Maak uw afspraak',
      lead: 'Bel ons of stuur een bericht en we nemen dezelfde werkdag contact met u op.',
      address: 'Adres',
      phone: 'Telefoon',
      whatsapp: 'WhatsApp',
      email: 'E-mail',
      hours: 'Openingsuren',
      hoursText: 'Ma – Vr: 08:00 – 18:00<br>Zaterdag: 09:00 – 13:00<br>Zondag: gesloten',
      mapTitle: `Locatie van ${BRAND} in Brussel`,
      formTitle: 'Stuur ons een bericht',
      name: 'Naam',
      namePlaceholder: 'Uw naam',
      phoneLabel: 'Telefoon',
      phonePlaceholder: '+32 ...',
      emailLabel: 'E-mail',
      emailPlaceholder: 'u@voorbeeld.be',
      message: 'Bericht',
      messagePlaceholder: 'Vertel ons over uw wagen en wat er moet gebeuren...',
      consent: 'Ik heb het <a href="privacy.html">privacybeleid</a> gelezen en ga ermee akkoord.',
      submit: 'Aanvraag versturen',
      sending: 'Versturen...',
      success: 'Bedankt! We hebben uw aanvraag goed ontvangen en bellen u zo snel mogelijk terug.',
      failed: 'Versturen mislukt. Probeer het opnieuw of bel ons rechtstreeks.',
      errName: 'Vul uw naam in',
      errPhone: 'Vul een geldig telefoonnummer in',
      errEmail: 'Vul een geldig e-mailadres in',
      errMessage: 'Beschrijf kort wat uw wagen nodig heeft',
      errConsent: 'U moet het privacybeleid aanvaarden'
    },
    footer: {
      rights: 'Alle rechten voorbehouden.',
      privacy: 'Privacybeleid',
      terms: 'Algemene voorwaarden'
    },
    legal: {
      demoNote:
        'Let op: dit is voorbeeldtekst voor demonstratiedoeleinden. Laat deze pagina nakijken door een jurist voor u online gaat.',
      updated: 'Laatst bijgewerkt: augustus 2026'
    },
    privacy: {
      title: 'Privacybeleid',
      lead: `${BRAND} hecht veel belang aan uw privacy. Hieronder leest u welke gegevens wij verwerken en waarom.`,
      s1t: '1. Wie wij zijn',
      s1b: `${BRAND}, met werkplaats te ${CONTACT.addressLine}, is verantwoordelijk voor de verwerking van uw persoonsgegevens. U bereikt ons via ${CONTACT.email}.`,
      s2t: '2. Welke gegevens wij verzamelen',
      s2b:
        'Wij verwerken enkel de gegevens die u zelf invult in het contactformulier: uw naam, telefoonnummer, e-mailadres en de inhoud van uw bericht. Daarnaast bewaren wij de gegevens van uw voertuig die nodig zijn om een herstelling correct uit te voeren.',
      s3t: '3. Waarvoor wij uw gegevens gebruiken',
      s3b:
        'Uw gegevens dienen uitsluitend om uw aanvraag te beantwoorden, een afspraak in te plannen, de herstelling uit te voeren en u te factureren. Wij gebruiken ze niet voor reclame zonder uw uitdrukkelijke toestemming.',
      s4t: '4. Hoe lang wij uw gegevens bewaren',
      s4b:
        'Contactaanvragen bewaren wij maximaal twaalf maanden. Gegevens die verband houden met een uitgevoerde herstelling of factuur bewaren wij zolang de wettelijke bewaartermijn dat vereist.',
      s5t: '5. Delen met derden',
      s5b:
        'Wij verkopen uw gegevens nooit. Wij delen ze enkel met partijen die noodzakelijk zijn voor onze dienstverlening, zoals onderdelenleveranciers of onze boekhouding, en enkel voor zover dat nodig is.',
      s6t: '6. Cookies',
      s6b:
        'Deze website plaatst geen tracking- of reclamecookies. Uw taalkeuze wordt lokaal in uw browser bewaard zodat de site u bij een volgend bezoek in dezelfde taal toont.',
      s7t: '7. Uw rechten',
      s7b:
        'U hebt het recht om uw gegevens in te kijken, te laten verbeteren of te laten wissen, en om bezwaar te maken tegen de verwerking ervan. Stuur daarvoor een e-mail naar het adres hierboven; wij antwoorden binnen dertig dagen.',
      s8t: '8. Vragen of klachten',
      s8b:
        'Hebt u een vraag over dit beleid, neem dan gerust contact met ons op. U kunt zich ook richten tot de Belgische Gegevensbeschermingsautoriteit.'
    },
    terms: {
      title: 'Algemene voorwaarden',
      lead: `Deze voorwaarden zijn van toepassing op alle werkzaamheden die ${BRAND} uitvoert.`,
      s1t: '1. Toepassingsgebied',
      s1b:
        'Deze voorwaarden gelden voor elke offerte, afspraak en herstelling. Afwijkingen zijn enkel geldig wanneer wij ze schriftelijk hebben bevestigd.',
      s2t: '2. Offertes en prijzen',
      s2b:
        'De prijzen op deze website zijn indicatieve startprijzen. U ontvangt altijd een duidelijke offerte voor we aan uw wagen beginnen. Offertes blijven dertig dagen geldig.',
      s3t: '3. Afspraken en annulering',
      s3b:
        'Kunt u niet komen, laat het ons dan minstens vierentwintig uur op voorhand weten. Zo kunnen wij uw plaats aan een andere klant geven.',
      s4t: '4. Uitvoering van de herstelling',
      s4b:
        'Ontdekken wij tijdens de werkzaamheden bijkomend werk, dan contacteren wij u eerst. Wij voeren geen extra werk uit zonder uw akkoord.',
      s5t: '5. Garantie',
      s5b:
        'Op onderdelen en werkuren geven wij vierentwintig maanden garantie, behalve op slijtageonderdelen en op onderdelen die de klant zelf aanlevert.',
      s6t: '6. Betaling',
      s6b:
        'Betaling gebeurt bij het ophalen van het voertuig, tenzij anders afgesproken. Bij laattijdige betaling kunnen de wettelijke interesten worden aangerekend.',
      s7t: '7. Aansprakelijkheid',
      s7b:
        'Onze aansprakelijkheid blijft beperkt tot het bedrag van de betrokken herstelling. Wij zijn niet aansprakelijk voor voorwerpen die in het voertuig worden achtergelaten.',
      s8t: '8. Toepasselijk recht',
      s8b:
        'Op deze voorwaarden is het Belgische recht van toepassing. Geschillen behoren tot de bevoegdheid van de rechtbanken van het arrondissement Brussel.'
    }
  },

  en: {
    meta: {
      title: `${BRAND} | Professional Car Repair in Brussels`,
      description:
        'Reliable maintenance, diagnostics and repairs for all vehicle brands in Brussels. Fair prices, fast service and a 24-month warranty.',
      privacyTitle: `Privacy Policy | ${BRAND}`,
      privacyDescription: `How ${BRAND} in Brussels handles your personal data.`,
      termsTitle: `Terms & Conditions | ${BRAND}`,
      termsDescription: `The terms and conditions of ${BRAND} in Brussels.`
    },
    nav: {
      home: 'Home',
      services: 'Services',
      pricing: 'Pricing',
      gallery: 'Workshop',
      about: 'About',
      reviews: 'Reviews',
      faq: 'FAQ',
      contact: 'Contact',
      book: 'Book Now',
      language: 'Language',
      menu: 'Open menu',
      backHome: 'Back to the website'
    },
    hero: {
      eyebrow: 'Brussels, Belgium',
      title: 'Professional Car <span>Repair</span> in Brussels',
      lead:
        'Reliable maintenance, diagnostics and repairs for all vehicle brands — fast, honest and at a fair price. We take care of your car so you can focus on the road.',
      book: 'Book Appointment',
      call: 'Call Now',
      openTitle: 'Open Now',
      openHours: 'Mon – Fri: 08:00 – 18:00',
      expTitle: '10+ Years of Experience',
      expText: 'Certified mechanics',
      warrantyTitle: '24 Months Warranty',
      warrantyText: 'On parts and labour'
    },
    services: {
      eyebrow: 'Services',
      title: 'Everything your car needs, under one roof',
      lead: 'From routine maintenance to complex repairs, for every brand.',
      oilTitle: 'Oil Change',
      oilText: 'Fast oil and filter service with quality lubricants.',
      brakeTitle: 'Brake Service',
      brakeText: 'Discs, pads and brake fluid checked and replaced.',
      diagTitle: 'Engine Diagnostics',
      diagText: 'Computer diagnostics for every warning light.',
      beltTitle: 'Timing Belt',
      beltText: 'Belt and water pump replacement done by the book.',
      clutchTitle: 'Clutch Replacement',
      clutchText: 'Complete clutch kits for all vehicle brands.',
      acTitle: 'Air Conditioning',
      acText: 'Refill, disinfection and leak detection.',
      tireTitle: 'Tire Service',
      tireText: 'Mounting, balancing, alignment and storage.',
      batteryTitle: 'Battery Replacement',
      batteryText: 'Testing and same-day battery replacement.'
    },
    pricing: {
      eyebrow: 'Pricing',
      title: 'Simple, transparent prices',
      lead:
        "Here's an overview of our most common services. Final price may vary depending on your vehicle's make and model.",
      oil: 'Oil Change',
      oil1: 'Standard Oil Change',
      oil2: 'Full Synthetic Oil Change',
      oil3: 'Oil Filter Replacement',
      diag: 'Diagnostics',
      diag1: 'Basic Computer Diagnostics',
      diag2: 'Full Vehicle Diagnostic Scan',
      diag3: 'Check Engine Light Diagnosis',
      brake: 'Brake Repair',
      brake1: 'Brake Pad Replacement (per axle)',
      brake2: 'Brake Disc Replacement (per axle)',
      brake3: 'Brake Fluid Flush',
      ac: 'AC Service',
      ac1: 'AC System Inspection',
      ac2: 'AC Refrigerant Recharge',
      ac3: 'Full AC Service (clean + recharge)',
      note:
        '* Prices shown are starting prices and may vary depending on vehicle model and condition.'
    },
    gallery: {
      eyebrow: 'Our Workshop',
      title: 'Take a look inside',
      lead:
        'A glimpse of our shop, our tools and how we take care of every vehicle that comes through the door.',
      cap1: 'Our garage',
      cap2: 'Hands-on repairs',
      cap3: 'Computer diagnostics',
      cap4: 'Brake service',
      cap5: 'Tire & alignment',
      cap6: 'Oil change',
      alt1: `${BRAND} garage exterior`,
      alt2: 'Mechanic working on a car engine',
      alt3: 'Car connected to a computer diagnostics tool',
      alt4: 'Close-up of a brake disc replacement',
      alt5: 'Tire service and wheel alignment equipment',
      alt6: 'Detail of an oil change'
    },
    about: {
      eyebrow: 'About Us',
      title: 'A neighbourhood garage with dealer-level standards',
      p1: `${BRAND} started in 2015 as a two-man workshop on the edge of Brussels. What began with oil changes for neighbours grew into a fully equipped garage trusted by families and small businesses across the Brussels region.`,
      p2:
        'We still work the way we did on day one: honest advice, a clear price before we start, and a car that leaves the workshop safe. Our mechanics train continuously on new engine and hybrid technology.',
      li1: 'Experienced mechanics with decades of combined workshop experience',
      li2: 'Transparent pricing — a clear quote before we touch your car',
      li3: 'Fast service — most repairs finished the same day',
      li4: 'Modern, brand-level diagnostic equipment',
      li5: '24 months warranty on parts and labour',
      stat1: 'years experience',
      stat2: 'cars repaired',
      stat3: 'happy customers'
    },
    reviews: {
      eyebrow: 'Reviews',
      title: 'What our customers say',
      q1:
        '“My Golf had a mystery warning light two other garages could not solve. Here they found it in an hour and the price was exactly what was quoted.”',
      c1: 'Brussels',
      q2:
        '“Brought my Peugeot in for brakes and a service. Friendly people, clear explanation in plain language and the car was ready the same afternoon.”',
      c2: 'Schaerbeek',
      q3:
        '“Timing belt done on my Passat for a fair price. They showed me the old parts and gave a written warranty. This is now our family garage.”',
      c3: 'Ixelles'
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      q1: 'Do I need an appointment?',
      a1:
        'For repairs and maintenance we work by appointment so your car is handled without waiting. For a quick check, a flat tire or a battery test you can also drop by during opening hours.',
      q2: 'Which car brands do you repair?',
      a2:
        'All brands. Our diagnostic equipment supports European, Japanese and Korean makes, including most hybrid vehicles.',
      q3: 'Does a repair here affect my manufacturer warranty?',
      a3:
        'No. Under European block exemption rules you can service your car at an independent garage. We use manufacturer-approved parts and stamp your service book.',
      q4: 'How much does a repair cost?',
      a4:
        'You always receive a clear quote before we start. If we discover extra work during the repair, we call you first and never proceed without your approval.',
      q5: 'Can I get a replacement car?',
      a5:
        'Yes, we have a limited number of courtesy cars available for longer repairs. Please mention it when booking your appointment.'
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Book your appointment',
      lead: 'Call us or send a message and we get back to you the same working day.',
      address: 'Address',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      email: 'Email',
      hours: 'Opening Hours',
      hoursText: 'Mon – Fri: 08:00 – 18:00<br>Saturday: 09:00 – 13:00<br>Sunday: Closed',
      mapTitle: `${BRAND} location in Brussels`,
      formTitle: 'Send us a message',
      name: 'Name',
      namePlaceholder: 'Your name',
      phoneLabel: 'Phone',
      phonePlaceholder: '+32 ...',
      emailLabel: 'Email',
      emailPlaceholder: 'you@example.com',
      message: 'Message',
      messagePlaceholder: 'Tell us about your car and what it needs...',
      consent: 'I have read and agree to the <a href="privacy.html">Privacy Policy</a>.',
      submit: 'Send Request',
      sending: 'Sending...',
      success: 'Thanks! We received your request and will call you back shortly.',
      failed: 'Sending failed. Please try again or call us directly.',
      errName: 'Please enter your name',
      errPhone: 'Please enter a valid phone number',
      errEmail: 'Please enter a valid email address',
      errMessage: 'Please describe what your car needs',
      errConsent: 'You must accept the privacy policy'
    },
    footer: {
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions'
    },
    legal: {
      demoNote:
        'Please note: this is sample text for demonstration purposes. Have this page reviewed by a lawyer before going live.',
      updated: 'Last updated: August 2026'
    },
    privacy: {
      title: 'Privacy Policy',
      lead: `${BRAND} takes your privacy seriously. Below you can read which data we process and why.`,
      s1t: '1. Who we are',
      s1b: `${BRAND}, with its workshop at ${CONTACT.addressLine}, is responsible for processing your personal data. You can reach us at ${CONTACT.email}.`,
      s2t: '2. What data we collect',
      s2b:
        'We only process the data you enter in the contact form yourself: your name, phone number, email address and the content of your message. We also keep the vehicle details needed to carry out a repair correctly.',
      s3t: '3. Why we use your data',
      s3b:
        'Your data is used solely to answer your request, schedule an appointment, carry out the repair and invoice you. We do not use it for advertising without your explicit consent.',
      s4t: '4. How long we keep your data',
      s4b:
        'Contact requests are kept for a maximum of twelve months. Data relating to a completed repair or invoice is kept for as long as the statutory retention period requires.',
      s5t: '5. Sharing with third parties',
      s5b:
        'We never sell your data. We share it only with parties necessary for our service, such as parts suppliers or our accountant, and only as far as required.',
      s6t: '6. Cookies',
      s6b:
        'This website sets no tracking or advertising cookies. Your language choice is stored locally in your browser so the site shows you the same language on your next visit.',
      s7t: '7. Your rights',
      s7b:
        'You have the right to access, correct or erase your data, and to object to its processing. Send an email to the address above and we will respond within thirty days.',
      s8t: '8. Questions or complaints',
      s8b:
        'If you have a question about this policy, please get in touch. You may also contact the Belgian Data Protection Authority.'
    },
    terms: {
      title: 'Terms & Conditions',
      lead: `These terms apply to all work carried out by ${BRAND}.`,
      s1t: '1. Scope',
      s1b:
        'These terms apply to every quote, appointment and repair. Deviations are only valid once we have confirmed them in writing.',
      s2t: '2. Quotes and prices',
      s2b:
        'The prices on this website are indicative starting prices. You always receive a clear quote before we start work on your car. Quotes remain valid for thirty days.',
      s3t: '3. Appointments and cancellation',
      s3b:
        'If you cannot make it, please let us know at least twenty-four hours in advance so we can offer your slot to another customer.',
      s4t: '4. Carrying out the repair',
      s4b:
        'If we discover additional work during the repair, we contact you first. We never carry out extra work without your approval.',
      s5t: '5. Warranty',
      s5b:
        'We provide a twenty-four month warranty on parts and labour, except on wear parts and on parts supplied by the customer.',
      s6t: '6. Payment',
      s6b:
        'Payment is due when the vehicle is collected, unless agreed otherwise. Statutory interest may be charged on late payments.',
      s7t: '7. Liability',
      s7b:
        'Our liability is limited to the amount of the repair concerned. We are not liable for items left behind in the vehicle.',
      s8t: '8. Applicable law',
      s8b:
        'Belgian law applies to these terms. Disputes fall under the jurisdiction of the courts of the Brussels district.'
    }
  }
};
