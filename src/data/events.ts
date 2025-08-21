export interface Event {
  id: string;
  name: string;
  date: string;
  time: string;
  price?: string;
  instructor?: string;
  instagram?: string;
  description?: string;
  eventType:
    | "workshop"
    | "running-club"
    | "vernissage"
    | "other"
    | "yoga"
    | "brunch";
  emoji?: string;
  reservationLink?: string;
  fullyBooked: boolean;
}

export const events: Event[] = [
  {
    id: "scrapbooking",
    name: "Atelier Scrapbooking",
    date: "27/08/2025",
    time: "18H30-20H30",
    price: "25€",
    instructor: "Léa",
    instagram: "@lea_fraisse",
    description:
      "Rejoignez Léa pour un moment créatif et chaleureux autour du scrapbooking, l'art de mettre en valeur vos souvenirs dans un album ou un carnet unique. Avec papiers colorés, tampons, rubans, autocollants et petites décorations, vous composerez des pages qui racontent votre histoire et reflètent votre univers.\n\nPour rendre votre création encore plus personnelle, il est conseillé d'apporter votre propre carnet ainsi que quelques souvenirs (photos, tickets, petits bouts de papier, etc.).\n\nTout le matériel de base est fourni et une boisson vous est offerte pour savourer pleinement l'instant. Un atelier à la fois esthétique et plein d'émotion, au cœur de Poésie.",
    eventType: "workshop",
    emoji: "✂️",
    reservationLink: "https://www.instagram.com/lea__fraisse/",
    fullyBooked: false,
  },
  {
    id: "art-club-kids-1",
    name: "Art club - Kids (6-8 ans)",
    date: "03/09/2025",
    time: "10H30-12H",
    price: "20€",
    instructor: "Katharina",
    instagram: "@atkatharina",
    description:
      "Thème : Vice-Versa \nGuidés par Katharina, art thérapeute, les enfants (6 à 8 ans) exploreront leurs pensées et leurs émotions à travers les couleurs et les formes. Un atelier ludique et créatif pour apprendre à exprimer ce que l'on ressent, tout en s'amusant !",
    eventType: "workshop",
    emoji: "🌈",
    reservationLink: "https://lu.ma/2drj91pa",
    fullyBooked: false,
  },
  {
    id: "latte-art",
    name: "Atelier latte art",
    date: "03/09/2025",
    time: "18H30-20H",
    price: "55€",
    instructor: "Livia",
    instagram: "@lovelylivia_",
    description:
      "Initiez-vous aux bases du latte art dans un atelier de 1h30 chez Poésie, accompagnée de Livia. Apprenez à faire une mousse parfaite, à verser et à créer votre premier motif.",
    eventType: "workshop",
    emoji: "☕️",
    reservationLink: "https://www.instagram.com/lovelylivia_/",
    fullyBooked: true,
  },
  {
    id: "broderie-art-therapie",
    name: "Atelier broderie - Art therapie",
    date: "06/09/2025",
    time: "10H-12H30",
    price: "30€",
    instructor: "Katharina",
    instagram: "@atkatharina",
    description:
      "Atelier d'art-thérapie textile \nApportez un vêtement de votre choix (chemise, t-shirt, etc.) et transformez-le en toile d'expression en y brodant des motifs inspirés de votre été : souvenirs, émotions, rêves… Un temps pour soi, à la fois introspectif et créatif, où chaque point devient une page d'un journal visuel cousu main.",
    eventType: "workshop",
    emoji: "🪡",
    reservationLink: "https://lu.ma/prguusrw",
    fullyBooked: false,
  },
  {
    id: "carnet-voyage",
    name: "Atelier Carnet de voyage",
    date: "07/09/2025",
    time: "15H-17H30",
    price: "25€",
    instructor: "Valentine",
    instagram: "@moood_de_val",
    description:
      "Atelier Carnet de voyage : Apprenez à capturer vos souvenirs en mots et en illustrations, et repartez avec de nouvelles pages dans votre carnet qui raconte vos aventures de cet été. Ouverts à tous, débutants comme passionnés, pour dessiner et voyager le temps d'un café. (boisson comprise dans le prix)",
    eventType: "workshop",
    emoji: "🎨",
    reservationLink: "https://www.instagram.com/p/DNFzPxLs0L3/?img_index=1",
    fullyBooked: false,
  },
  {
    id: "art-club-kids-2",
    name: "Art club - Kids (8-10 ans)",
    date: "10/09/2025",
    time: "10H30-12H",
    price: "20€",
    instructor: "Katharina",
    instagram: "@atkatharina",
    description:
      "Thème : Vice-Versa \nGuidés par Katharina, art thérapeute, les enfants (8 à 10 ans) exploreront leurs pensées et leurs émotions à travers les couleurs et les formes. Un atelier ludique et créatif pour apprendre à exprimer ce que l'on ressent, tout en s'amusant !",
    eventType: "workshop",
    emoji: "🌈",
    reservationLink: "https://lu.ma/ky9n71cw",
    fullyBooked: false,
  },
  {
    id: "aquarelle",
    name: "Atelier Aquarelle",
    date: "10/09/2025",
    time: "18H30-21H",
    price: "40€",
    instructor: "Célia",
    instagram: "@celia.vongkorad",
    description:
      "Rejoignez-nous pour un atelier chaleureux et créatif autour de l'aquarelle, guidé par l'artiste Célia Vongkorad. Vous apprendrez à composer une page de carnet de voyage, le tout accompagné d'une boisson de votre choix. Le matériel est fourni, mais vous pouvez également venir avec votre carnet ou vos outils préférés si vous le souhaitez. Vous peindrez sur du papier aquarelle de haute qualité de la marque Hahnemühle (format A5). Chaque participant(e) aura la chance de découvrir les aquarelles artisanales de La Nouvelle Vague Couleurs, fabriquées à Paris : des teintes uniques, intenses et inspirantes, parfaites pour tous les styles d'expression.",
    eventType: "workshop",
    emoji: "🎨",
    reservationLink: "https://www.instagram.com/celia.vongkorad/",
    fullyBooked: false,
  },
  {
    id: "yoga-vinyasa",
    name: "Yoga Vinyasa",
    date: "13/09/2025",
    time: "8H45-9H45",
    price: "15€",
    instructor: "Coralee",
    instagram: "@coraleeats",
    description:
      "Rendez-vous le samedi 13 septembre de 8H45 à 9H45 pour une session de yoga guidée par Coralee, professeure franco-américaine installée à Paris.\n\nFormée à Bali en yoga Vinyasa, elle propose un cours accessible à tous les niveaux, avec une approche simple et bienveillante, pour se reconnecter à soi et partager un moment collectif.\n\n▪️ Tapis non fourni\n▪️ Boisson incluse",
    eventType: "yoga",
    emoji: "🧘‍♀️",
    reservationLink: "https://www.instagram.com/coraleeats/",
    fullyBooked: false,
  },
  {
    id: "ceramique",
    name: "Atelier céramique",
    date: "17/09/2025",
    time: "18H30-20H",
    price: "50€",
    instructor: "Jess",
    instagram: "@nalu.ceramics",
    description:
      "Participez à un atelier créatif et convivial pour découvrir l'art du modelage en céramique. Vous apprendrez les bases du travail de l'argile en explorant différentes techniques, avec la possibilité de créer la pièce de votre choix : tasse, assiette, porte-bijoux, vide-poche, petit soliflore…\n▪️ Thème libre ou inspiration coffee shop : chacun peut laisser libre cours à son imagination ou suivre un thème pour plus de cohérence.\n▪️ Tout est inclus : matériel, cuisson et émaillage réalisés après l'atelier.\n▪️ Délais : vos pièces seront prêtes sous environ un mois.\n▪️ Accessible à tous niveaux : débutants comme initiés sont les bienvenus.\n\nOffrez-vous un moment de créativité et repartez avec une pièce unique, façonnée par vos mains !",
    eventType: "workshop",
    emoji: "🍵",
    reservationLink: "https://www.instagram.com/nalu.ceramics/",
    fullyBooked: false,
  },
  {
    id: "ecriture",
    name: "Atelier écriture",
    date: "27/09/2025",
    time: "9H-12H",
    price: "37€",
    instructor: "Marie",
    instagram: "@calliope_editions",
    description:
      "Vous sentez votre élan créatif s'essouffler ? La page reste blanche malgré l'envie d'écrire ? Rejoignez notre atelier d'écriture spécialement conçu pour vous redonner l'inspiration. Vous serez accompagné par Marie, fondatrice de la maison d'édition Calliope.\n\nAu programme :\n\nExercices ciblés pour déverrouiller la créativité et relancer vos idées.\n\nÉchanges autour du thème du « vide » créatif.\n\nConseils pratiques et pistes concrètes pour nourrir durablement votre écriture.\n\nUn petit groupe pour favoriser un accompagnement personnalisé et des retours bienveillants. Une boisson chaude ou froide et une gourmandise sucrée sont incluses pour accompagner ce moment suspendu.",
    eventType: "workshop",
    emoji: "📖",
    reservationLink: "https://www.calliope-editions.fr/actualit%C3%A9s",
    fullyBooked: false,
  },
  {
    id: "running-club-1",
    name: "Running club",
    date: "07/09/2025",
    time: "10H-11H",
    price: "gratuit",
    instagram: "@poesiecoffee",
    description:
      "📍 Départ & arrivée : Poésie coffee, 10 passage Thiéré – Paris 11e\n🛣️ Parcours : 7km organisé par Chloé (Strava Chloé Fouillot)\n\n💌 L'événement est gratuit, mais il faudra réserver sa place en envoyant un message directement sur le compte de Poésie pour une question d'organisation.\nN'hésitez pas à indiquer également votre allure de course pour que l'on sache si la création de plusieurs groupes est nécessaire.",
    eventType: "running-club",
    emoji: "🏃‍♀️🏃",
    reservationLink: "https://www.instagram.com/poesiecoffee/",
    fullyBooked: false,
  },
  {
    id: "vernissage-photo",
    name: "Vernissage photo",
    date: "18/09/2025",
    time: "18H-22H",
    price: "gratuit",
    instructor: "Jean",
    instagram: "@ginjeanbre",
    description:
      "Poésie accueillera pendant un mois les photographies argentiques de Jean.\nPour marquer l'événement, rendez-vous au vernissage de 18h à 22h : un moment convivial pour prolonger les souvenirs d'été autour de boissons fraîches et de douceurs salées et sucrées.",
    eventType: "vernissage",
    emoji: "🖼️",
    fullyBooked: false,
  },
  {
    id: "running-club-2",
    name: "Running club",
    date: "21/09/2025",
    time: "10H-11H",
    price: "gratuit",
    instagram: "@poesiecoffee",
    description:
      "📍 Départ & arrivée : Poésie coffee, 10 passage Thiéré – Paris 11e\n🛣️ Parcours : 7km organisé par Chloé (Strava Chloé Fouillot)\n\n💌 L'événement est gratuit, mais il faudra réserver sa place en envoyant un message directement sur le compte de Poésie pour une question d'organisation.\nN'hésitez pas à indiquer également votre allure de course pour que l'on sache si la création de plusieurs groupes est nécessaire.",
    eventType: "running-club",
    emoji: "🏃‍♀️🏃",
    reservationLink: "https://www.instagram.com/poesiecoffee/",
    fullyBooked: false,
  },
  {
    id: "brunch",
    name: "Brunch",
    date: "21/09/2025",
    time: "11H-15H",
    price: "gratuit",
    instagram: "@poesiecoffee",
    description:
      "Poésie vous accueille pour un brunch de 11h à 15h ! Coralie (@corcorhardcore) a imaginé deux menus gourmands : une version végétarienne et une version autour du poisson de chez Poiscaille. Réservation directement via le compte instagram de Poésie.",
    eventType: "brunch",
    fullyBooked: false,
  },
];
