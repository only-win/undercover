export type Role = {
  name: string;
  image: string;
  description: string;
}

export const roles: Role[] = [
  {
    name: "Undercover",
    image: "/roles/undercover_full.png",
    description: "Reçoit un mot légèrement différent des citoyens. Son objectif est de rester cachhé en donnant des indices proches de ceux des citoyens, sans trop se dévoiler."
  },
  {
    name: "Citoyen",
    image: "/roles/civil_full.png",
    description: "Partage un mot identique avec les autres citoyens et doit donner des indices pour identifier l'Undercover sans révéler directement le mot."
  },
  {
    name: "Mr. White",
    image: "/roles/mr-white_full.png",
    description: "Ne reçoit pas de mot et doit trouver le mot des autres joueurs. S'il est découvert, sont objectif est de découvrir le mot des citoyens pour gagner."
  }
];