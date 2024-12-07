export type Role = {
  name: string;
  image: string;
}

export const roles: Role[] = [
  {
    name: "Undercover",
    image: "/roles/undercover_full.png",
  },
  {
    name: "Citoyen",
    image: "/roles/civil_full.png",
  },
  {
    name: "Mr. White",
    image: "/roles/mr-white_full.png",
  }
];