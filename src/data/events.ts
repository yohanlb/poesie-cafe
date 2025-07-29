export interface Event {
  id: string;
  name: string;
  date: string;
  time: string;
  price?: string;
  instructor?: string;
  instagram?: string;
  description?: string;
  eventType: "workshop" | "running-club" | "vernissage" | "other";
}

export const events: Event[] = [
  {
    id: "art-club-kids-1",
    name: "Art club - Kids",
    date: "03/09/2025",
    time: "10H30-12H",
    price: "20€",
    instructor: "Katharina",
    instagram: "@atkatharina",
    description:
      "Un club créatif hebdomadaire pour enfants, ouvert à tous les âges. Pendant que les enfants explorent leur imagination à travers des activités artistiques, les parents peuvent savourer un moment de détente autour d'un café.",
    eventType: "workshop",
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
      "Initiez-vous aux bases du latte art dans un atelier de 1h30 chez Poésie. Apprenez à faire une mousse parfaite, à verser et à créer votre premier motif.",
    eventType: "workshop",
  },
  {
    id: "broderie-stitched-tattoos",
    name: 'Atelier broderie "Stiched tattoos"',
    date: "06/09/2025",
    time: "10H-12H30",
    price: "30€",
    instructor: "Katharina",
    instagram: "@atkatharina",
    description:
      "Un atelier d'art-thérapie textile pour adultes : chacun apporte un vêtement (chemise, t-shirt, etc.) et y brode des motifs inspirés de son été – souvenirs, émotions, rêves... Un moment introspectif et créatif, comme un journal visuel cousu main.",
    eventType: "workshop",
  },
  {
    id: "cafe-dessin",
    name: "Atelier café dessin",
    date: "07/09/2025",
    time: "15H-17H",
    price: "25€",
    instructor: "Valentine",
    instagram: "@moood_de_val",
    description:
      "Valentine vous initie au dessin dans une ambiance douce et créative. Ensemble, vous apprendrez les bases et croquerez les détails poétiques de Poésie, notre coffee shop. Aucune expérience requise, juste l'envie de prendre le temps et de dessiner autour d'un bon café. (boisson comprise dans le prix)",
    eventType: "workshop",
  },
  {
    id: "art-club-kids-2",
    name: "Art club - Kids",
    date: "10/09/2025",
    time: "10H30-12H",
    price: "20€",
    instructor: "Katharina",
    instagram: "@atkatharina",
    description:
      "Un club créatif hebdomadaire pour enfants, ouvert à tous les âges. Pendant que les enfants explorent leur imagination à travers des activités artistiques, les parents peuvent savourer un moment de détente autour d'un café.",
    eventType: "workshop",
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
      "Rejoignez-nous pour un atelier chaleureux et créatif autour de l'aquarelle, guidé par l'artiste Celia Vongkorad. Vous apprendrez à composer une page de carnet de voyage, le tout accompagné d'une boisson de votre choix. Le matériel est fourni, mais vous pouvez également venir avec votre carnet ou vos outils préférés si vous le souhaitez. Vous peindrez sur du papier aquarelle de haute qualité de la marque Hahnemühle (format A5). Chaque participant(e) aura la chance de découvrir les aquarelles artisanales de La Nouvelle Vague Couleurs, fabriquées à Paris : des teintes uniques, intenses et inspirantes, parfaites pour tous les styles d'expression.",
    eventType: "workshop",
  },
  {
    id: "ceramique",
    name: "Atelier céramique",
    date: "17/09/2025",
    time: "18H30-20H",
    price: "50€ (à confirmer)",
    instructor: "Jess",
    instagram: "@nalu.ceramics",
    description: "",
    eventType: "workshop",
  },
  {
    id: "ecriture",
    name: "Atelier écriture",
    date: "27/09/2025",
    time: "9H-12H",
    price: "35€ (à confirmer)",
    instructor: "Marie",
    instagram: "@calliope_editions",
    description: "",
    eventType: "workshop",
  },
  {
    id: "running-club-1",
    name: "Running club",
    date: "07/09/2025",
    time: "10H-11H",
    eventType: "running-club",
  },
  {
    id: "vernissage-photo",
    name: "Vernissage photo",
    date: "18/09/2025",
    time: "18H-22H",
    instructor: "Jean",
    instagram: "@ginjeanbre",
    eventType: "vernissage",
  },
  {
    id: "running-club-2",
    name: "Running club",
    date: "21/09/2025",
    time: "10H-11H",
    eventType: "running-club",
  },
];
