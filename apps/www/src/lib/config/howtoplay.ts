export type Information = {
  place: number;
  description: string[];
}

export const informations: Information[] = [
  {
    place: 1,
    description: ["Créer ou rejoins une parite, puis attends que l'équipe soit au complet. Une fois le minimum de joueurs atteint, le jeu peut être lancé ! Autrement, la partie se lancera automatiquement après un certain délai. 🕒"]
  },
  {
    place: 2,
    description: [
      "Une fois la partie lancée, un role mystèère te sera attribué. 🎭",
      "Quant ton tour viendra, propose un mot dans la zone de texte qui apparaitra et montre de quel bois tu te chauffes ! 🔥",
    ]
  },
  {
    place: 3,
    description: [
      "Quand tout le monde aura soumis un mot, une petite pause sera accordée pour que vous puissiez débattre et tenter de sauver votre peau. 🤔",
      "Une fois le temps écoulé, place aux votes : chaque joueur devra désigner celui qu'il pense être un Undercover... Ou pire, le terrible Mr. White ! 😱",
    ]
  },
  {
    place: 4,
    description: [
      "Les citoyens l'emportent s'ils éliminent tous les Undercovers et Mr. White. Mais attention ! Si les Undercovers parviennent à éliminer tous les citoyens, ils remportent la partie. 😈",
      "Dans le pire des cas, Mr. White peut duper tout le monde et remporter la partie en se faisant passer pour un simple citoyen. 🕵️",
    ]
  }
];