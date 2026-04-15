export type Lang = "fr" | "en" | "es";

export const LANG_OPTIONS: { key: Lang; label: string }[] = [
  { key: "fr", label: "FR" },
  { key: "en", label: "EN" },
  { key: "es", label: "ES" },
];

type ServiceItem = {
  id: string;
  title: string;
  intro?: string;
  bullets: string[];
  note?: string;
};

type SiteCopy = {
  companyName: string;
  nav: {
    home: string;
    about: string;
    services: string;
    destinations: string;
    references: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    tagline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  keyFiguresTitle: string;
  keyFigures: string[];
  destinationsTitle: string;
  destinationsInline: string;
  valuesTitle: string;
  values: string[];
  about: {
    title: string;
    director: string;
    paragraphs: string[];
  };
  servicesPageIntro: string;
  services: ServiceItem[];
  routesIntro: string;
  referencesTitle: string;
  referencesPlaceholder: string;
  contact: {
    title: string;
    person: string;
    role: string;
    emailLabel: string;
    phoneLabel: string;
    formTitle: string;
    fields: {
      fullName: string;
      company: string;
      email: string;
      phone: string;
      service: string;
      route: string;
      message: string;
      submit: string;
    };
    serviceOptions: string[];
  };
  footer: {
    strapline: string;
    rights: string;
  };
};

export const SITE_CONTENT: Record<Lang, SiteCopy> = {
  fr: {
    companyName: "SAFE SOLUTION WHEELS MOROCCO",
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Nos Services",
      destinations: "Nos Destinations",
      references: "Références",
      contact: "Contact",
    },
    hero: {
      title: "SAFE SOLUTION WHEELS MOROCCO",
      subtitle:
        "Votre partenaire de confiance en transport routier et logistique entre le Maroc et l'Europe.",
      tagline: "Fiabilité. Proximité. Excellence.",
      ctaPrimary: "Découvrir nos solutions",
      ctaSecondary: "Contactez-nous",
    },
    keyFiguresTitle: "Chiffres clés",
    keyFigures: [
      "Flotte 100% géolocalisable",
      "Départs quotidiens vers l'Europe",
      "Renouvellement de flotte tous les 3 ans",
      "Plus de 180 cartes grises partenaires affrétés",
      "Transport en simple et double équipage",
      "Liaisons régulières Maroc ↔ Europe",
    ],
    destinationsTitle: "Nos destinations",
    destinationsInline:
      "Maroc · France · Espagne · Allemagne · Belgique · Italie · Pays-Bas · Bulgarie · Pologne · Angleterre · Portugal",
    valuesTitle: "Valeurs clés",
    values: ["Écoute", "Proximité", "Fiabilité", "Innovation", "Excellence", "Esprit d'équipe"],
    about: {
      title: "Le mot de notre Directrice Commerciale",
      director: "Zainab Outana — Directeur Commercial, Safe Solution Wheels Morocco",
      paragraphs: [
        "Le transport routier demeure le cœur du métier de SAFE SOLUTION WHEELS MOROCCO. Nous avons pu fidéliser nos clients phares mais également nous ouvrir sur de nouveaux marchés grâce à une relation commerciale guidée par l'écoute et la proximité.",
        "Nous imaginons des solutions de transport et de logistique qui rapprochent les hommes, les entreprises et les cultures. Innover pour repousser les frontières de l'excellence est au cœur de notre démarche de performance avec un engagement jamais démenti.",
        "En effet, nous pouvons vous assurer des relations régulières entre les différents pays européens et le Maroc en vous garantissant une prestation fiable dans les meilleurs délais.",
        "L'impact de la mondialisation sur le secteur de la logistique et du transport, ainsi que la volonté nationale du Maroc pour le développement de ce secteur, ont été des précurseurs importants permettant à SAFE SOLUTION WHEELS MOROCCO d'exister et de se prospérer dans un climat d'affaires reconnu comme assez délicat et tenace.",
        "Notre stratégie de développement est axée sur la puissance de notre réseau en Europe.",
        "Que ce soit au niveau technique, humain, ou organisationnel, nous nous engageons à ce que la chaîne d'approvisionnement de nos clients soit plus transparente et plus simple à gérer, sans contre-temps, en import et en export.",
        "Notre priorité est d'être à l'écoute de nos clients et de les satisfaire par une meilleure approche de service mais aussi par une parfaite maîtrise des rouages réglementaires.",
        "Le respect constant de la stratégie et des valeurs de l'entreprise est une priorité absolue. Nous revendiquons un esprit d'équipe qui garantit la cohésion et la forte implication du personnel à tous les niveaux de la hiérarchie dans une démarche de progrès continu.",
      ],
    },
    servicesPageIntro: "Le fret et nos solutions personnalisées",
    services: [
      {
        id: "road",
        title: "Transport Routier",
        bullets: [
          "Flotte 100% géolocalisable",
          "Délais de livraison courts",
          "Une équipe d'experts à votre écoute",
          "Qualité de service constante, garantie du respect de votre image de marque",
          "Transport de tous types de produits",
          "Traitement et gestion des produits périssables",
          "Solutions adaptées aux besoins du client",
        ],
      },
      {
        id: "fleet",
        title: "Nos Types de Camions",
        intro:
          "Spécialistes du complet frigorifique en transport international routier, avec des départs quotidiens.",
        bullets: [
          "Semi-remorques frigorifiques KRONE et SCHMITZ",
          "Tracteurs DAF et MERCEDES",
          "Plus de 180 cartes grises de partenaires affrétés",
        ],
      },
      {
        id: "temperature",
        title: "Transport sous Température Dirigée",
        intro:
          "Flotte frigorifique avec enregistreurs de température pour cargaisons périssables, réfrigérées ou congelées.",
        bullets: [
          "Traçabilité en temps réel et accès constant à l'information",
          "Chargements complets en simple ou double équipage",
          "Transports routiers frigorifiques express non-stop",
        ],
      },
      {
        id: "perishables",
        title: "Pour toutes vos denrées périssables",
        bullets: [
          "Fruits, légumes et poissons, tous les jours au départ du Maroc",
          "Rigueur administrative aux passages portuaires",
          "Camions frigorifiques équipés de data loggers et thermographes",
        ],
      },
      {
        id: "pharma",
        title: "Transport de Produits Pharmaceutiques",
        bullets: [
          "Service conforme aux réglementations strictes",
          "Équipes formées et matériel adapté",
          "Simple ou double équipage, camions simple ou bi-température",
        ],
        note: "Important : transport pharmaceutique uniquement en complet et en express.",
      },
      {
        id: "industrial",
        title: "Transport de Produits Industriels",
        bullets: [
          "Liaisons quotidiennes Maroc et Europe",
          "Parc de véhicules spécifiques et récents",
          "Équipe de conducteurs dédiée au transport industriel",
        ],
      },
    ],
    routesIntro:
      "SAFE SOLUTION WHEELS MOROCCO assure des connexions régulières entre le Maroc et les principaux pays européens.",
    referencesTitle: "Ils nous ont fait confiance",
    referencesPlaceholder:
      "Section dédiée aux logos et références clients — à compléter avec les logos partenaires.",
    contact: {
      title: "Contactez-nous",
      person: "Mme Zainab Outana",
      role: "Directeur Commercial — Safe Solution Wheels Morocco",
      emailLabel: "Email",
      phoneLabel: "Téléphone",
      formTitle: "Formulaire de contact",
      fields: {
        fullName: "Nom complet",
        company: "Entreprise",
        email: "Email",
        phone: "Téléphone",
        service: "Service souhaité",
        route: "Pays d'origine et de destination",
        message: "Message / Demande",
        submit: "Envoyer ma demande",
      },
      serviceOptions: [
        "Transport routier",
        "Température dirigée",
        "Pharmaceutique",
        "Industriel",
      ],
    },
    footer: {
      strapline: "Transport routier international · Maroc & Europe",
      rights: "Tous droits réservés.",
    },
  },
  en: {
    companyName: "SAFE SOLUTION WHEELS MOROCCO",
    nav: {
      home: "Home",
      about: "About",
      services: "Our Services",
      destinations: "Our Destinations",
      references: "References",
      contact: "Contact",
    },
    hero: {
      title: "SAFE SOLUTION WHEELS MOROCCO",
      subtitle:
        "Your trusted partner in road transport and logistics between Morocco and Europe.",
      tagline: "Reliability. Proximity. Excellence.",
      ctaPrimary: "Discover our solutions",
      ctaSecondary: "Contact us",
    },
    keyFiguresTitle: "Key figures",
    keyFigures: [
      "100% GPS-trackable fleet",
      "Daily departures to Europe",
      "Fleet renewed every 3 years",
      "Over 180 partner vehicle registrations",
      "Single and double crew transport",
      "Regular Morocco ↔ Europe connections",
    ],
    destinationsTitle: "Our destinations",
    destinationsInline:
      "Morocco · France · Spain · Germany · Belgium · Italy · Netherlands · Bulgaria · Poland · England · Portugal",
    valuesTitle: "Core Values",
    values: ["Listening", "Proximity", "Reliability", "Innovation", "Excellence", "Team spirit"],
    about: {
      title: "A Message from our Commercial Director",
      director: "Zainab Outana — Commercial Director, Safe Solution Wheels Morocco",
      paragraphs: [
        "Road transport remains the core business of SAFE SOLUTION WHEELS MOROCCO. We have built strong loyalty among our key clients while also opening up to new markets, thanks to a commercial relationship guided by listening and closeness.",
        "We design transport and logistics solutions that bring people, businesses and cultures closer together. Innovation to push the boundaries of excellence lies at the heart of our performance approach, with a commitment that has never wavered.",
        "We can guarantee regular links between various European countries and Morocco, ensuring reliable service within the best possible timeframes.",
        "The impact of globalisation on the logistics and transport sector, along with Morocco's national drive to develop this industry, have been key drivers enabling SAFE SOLUTION WHEELS MOROCCO to exist and thrive in a business environment recognised as particularly challenging and demanding.",
        "Our development strategy is built on the strength of our European network.",
        "At a technical, human, and organisational level, we are committed to making our clients' supply chains more transparent and easier to manage for imports and exports.",
        "Our priority is to listen to our clients and satisfy them through superior service and mastery of regulatory processes.",
        "Consistent respect for the company's strategy and values is an absolute priority. We champion a team spirit that guarantees cohesion and strong staff involvement at all levels.",
      ],
    },
    servicesPageIntro: "Freight and our tailored solutions",
    services: [
      {
        id: "road",
        title: "Road Transport",
        bullets: [
          "100% GPS-trackable fleet",
          "Short delivery times",
          "A team of experts at your service",
          "Consistent service quality for your brand image",
          "Transport of all product categories",
          "Handling of perishable goods",
          "Client-tailored transport solutions",
        ],
      },
      {
        id: "fleet",
        title: "Our Truck Fleet",
        intro:
          "Specialists in full refrigerated loads for international road transport, with daily departures.",
        bullets: [
          "KRONE and SCHMITZ refrigerated semi-trailers",
          "DAF and MERCEDES tractors",
          "Over 180 registrations from chartered partners",
        ],
      },
      {
        id: "temperature",
        title: "Temperature-Controlled Transport",
        intro:
          "Refrigerated fleet with temperature recorders for perishable, chilled, and frozen cargo.",
        bullets: [
          "Real-time traceability",
          "Full truck loads in single or double crew",
          "Express non-stop refrigerated transport",
        ],
      },
      {
        id: "perishables",
        title: "For all your perishable goods",
        bullets: [
          "Daily fruit, vegetable, and fish shipments",
          "Strong administrative support at port crossings",
          "Refrigerated trucks with data loggers and thermographs",
        ],
      },
      {
        id: "pharma",
        title: "Pharmaceutical Products Transport",
        bullets: [
          "Strict regulatory compliance",
          "Trained teams and proper equipment",
          "Single or double crew, single or dual-temperature trucks",
        ],
        note: "Important: pharmaceutical transport is full load and express only.",
      },
      {
        id: "industrial",
        title: "Industrial Products Transport",
        bullets: [
          "Daily Morocco-Europe links",
          "Specialised and recent vehicle fleet",
          "Dedicated driver team",
        ],
      },
    ],
    routesIntro:
      "SAFE SOLUTION WHEELS MOROCCO provides regular connections between Morocco and the main European countries.",
    referencesTitle: "They trusted us",
    referencesPlaceholder:
      "Section dedicated to client logos and references — to be completed with partner logos.",
    contact: {
      title: "Contact us",
      person: "Ms. Zainab Outana",
      role: "Commercial Director — Safe Solution Wheels Morocco",
      emailLabel: "Email",
      phoneLabel: "Phone",
      formTitle: "Contact form",
      fields: {
        fullName: "Full name",
        company: "Company",
        email: "Email",
        phone: "Phone",
        service: "Service needed",
        route: "Origin and destination country",
        message: "Message / Request",
        submit: "Send my request",
      },
      serviceOptions: [
        "Road transport",
        "Temperature-controlled",
        "Pharmaceutical",
        "Industrial",
      ],
    },
    footer: {
      strapline: "International road transport · Morocco & Europe",
      rights: "All rights reserved.",
    },
  },
  es: {
    companyName: "SAFE SOLUTION WHEELS MOROCCO",
    nav: {
      home: "Inicio",
      about: "Sobre nosotros",
      services: "Nuestros Servicios",
      destinations: "Nuestras Rutas",
      references: "Referencias",
      contact: "Contacto",
    },
    hero: {
      title: "SAFE SOLUTION WHEELS MOROCCO",
      subtitle:
        "Su socio de confianza en transporte por carretera y logística entre Marruecos y Europa.",
      tagline: "Fiabilidad. Proximidad. Excelencia.",
      ctaPrimary: "Descubra nuestras soluciones",
      ctaSecondary: "Contáctenos",
    },
    keyFiguresTitle: "Cifras clave",
    keyFigures: [
      "Flota 100% geolocalizable",
      "Salidas diarias hacia Europa",
      "Renovación de flota cada 3 años",
      "Más de 180 tarjetas de circulación de socios",
      "Transporte en equipo simple y doble",
      "Conexiones regulares Marruecos ↔ Europa",
    ],
    destinationsTitle: "Nuestros destinos",
    destinationsInline:
      "Marruecos · Francia · España · Alemania · Bélgica · Italia · Países Bajos · Bulgaria · Polonia · Inglaterra · Portugal",
    valuesTitle: "Valores clave",
    values: ["Escucha", "Proximidad", "Fiabilidad", "Innovación", "Excelencia", "Espíritu de equipo"],
    about: {
      title: "Mensaje de nuestra Directora Comercial",
      director: "Zainab Outana — Directora Comercial, Safe Solution Wheels Morocco",
      paragraphs: [
        "El transporte por carretera sigue siendo el núcleo del negocio de SAFE SOLUTION WHEELS MOROCCO. Hemos logrado fidelizar a nuestros clientes clave y al mismo tiempo abrirnos a nuevos mercados.",
        "Diseñamos soluciones de transporte y logística que acercan a personas, empresas y culturas. La innovación para ampliar los límites de la excelencia está en el corazón de nuestro enfoque.",
        "Podemos garantizar conexiones regulares entre distintos países europeos y Marruecos, asegurando un servicio fiable en los mejores plazos.",
        "El impacto de la globalización y el impulso nacional de Marruecos para desarrollar este sector han permitido a SAFE SOLUTION WHEELS MOROCCO crecer en un entorno exigente.",
        "Nuestra estrategia de desarrollo se basa en la fortaleza de nuestra red europea.",
        "A nivel técnico, humano y organizacional, nos comprometemos a hacer más transparente y simple la cadena de suministro de nuestros clientes.",
        "Nuestra prioridad es escuchar y satisfacer a nuestros clientes mediante un mejor servicio y un dominio perfecto de los procesos regulatorios.",
        "Defendemos un espíritu de equipo que garantiza cohesión e implicación del personal en todos los niveles.",
      ],
    },
    servicesPageIntro: "El flete y nuestras soluciones personalizadas",
    services: [
      {
        id: "road",
        title: "Transporte por Carretera",
        bullets: [
          "Flota 100% geolocalizable",
          "Plazos de entrega cortos",
          "Equipo de expertos a su disposición",
          "Calidad de servicio constante",
          "Transporte de todo tipo de productos",
          "Gestión de productos perecederos",
          "Soluciones adaptadas al cliente",
        ],
      },
      {
        id: "fleet",
        title: "Nuestra Flota de Camiones",
        intro:
          "Especialistas en cargas completas frigoríficas en transporte internacional por carretera.",
        bullets: [
          "Semirremolques frigoríficos KRONE y SCHMITZ",
          "Tractores DAF y MERCEDES",
          "Más de 180 tarjetas de circulación de socios fletadores",
        ],
      },
      {
        id: "temperature",
        title: "Transporte a Temperatura Controlada",
        intro:
          "Flota frigorífica con registradores para mercancía perecedera, refrigerada y congelada.",
        bullets: [
          "Trazabilidad en tiempo real",
          "Cargas completas en equipo simple o doble",
          "Transporte frigorífico exprés sin paradas",
        ],
      },
      {
        id: "perishables",
        title: "Para todos sus productos perecederos",
        bullets: [
          "Frutas, verduras y pescados a diario desde Marruecos",
          "Soporte administrativo en pasos portuarios",
          "Camiones con data loggers y termógrafos",
        ],
      },
      {
        id: "pharma",
        title: "Transporte de Productos Farmacéuticos",
        bullets: [
          "Cumplimiento de normativa estricta",
          "Equipos formados y material adecuado",
          "Equipo simple o doble y camiones simple/bi-temperatura",
        ],
        note: "Importante: transporte farmacéutico únicamente en carga completa y exprés.",
      },
      {
        id: "industrial",
        title: "Transporte de Productos Industriales",
        bullets: [
          "Conexiones diarias Marruecos-Europa",
          "Parque de vehículos específicos y recientes",
          "Equipo de conductores dedicado",
        ],
      },
    ],
    routesIntro:
      "SAFE SOLUTION WHEELS MOROCCO garantiza conexiones regulares entre Marruecos y los principales países europeos.",
    referencesTitle: "Ellos confiaron en nosotros",
    referencesPlaceholder:
      "Sección dedicada a logotipos y referencias de clientes — completar con logotipos de socios.",
    contact: {
      title: "Contáctenos",
      person: "Sra. Zainab Outana",
      role: "Directora Comercial — Safe Solution Wheels Morocco",
      emailLabel: "Correo electrónico",
      phoneLabel: "Teléfono",
      formTitle: "Formulario de contacto",
      fields: {
        fullName: "Nombre completo",
        company: "Empresa",
        email: "Correo electrónico",
        phone: "Teléfono",
        service: "Servicio requerido",
        route: "País de origen y destino",
        message: "Mensaje / Solicitud",
        submit: "Enviar mi solicitud",
      },
      serviceOptions: [
        "Transporte por carretera",
        "Temperatura controlada",
        "Farmacéutico",
        "Industrial",
      ],
    },
    footer: {
      strapline: "Transporte internacional por carretera · Marruecos & Europa",
      rights: "Todos los derechos reservados.",
    },
  },
};

export const SERVED_COUNTRIES = [
  "Morocco",
  "France",
  "Spain",
  "Germany",
  "Belgium",
  "Italy",
  "Netherlands",
  "Bulgaria",
  "Poland",
  "England",
  "Portugal",
];
