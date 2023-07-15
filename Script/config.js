// Listes de mots
const WORD_LIST = {
  "Fruits": ["pomme", "banane", "orange", "fraise", "kiwi"],
  "Couleurs": ["rouge", "vert", "bleu", "jaune", "orange"],
  "Passion": ["offsec", "programmation", "jeux", "anime", "sports"],
  "Aléatoire": ["ffuf", "wannacry", "2>/dev/null", "openai", "javascript"],
  "Animaux": ["chien", "chat", "lion", "singe", "éléphant"],
  "Certifications": ["eJPTv2", "OSCP", "OSCE", "CEH", "CISSP"],
  "MotsComplexes": ["anticonstitutionnellement", "sesquipedalien", "zygodactyle", "cynosure", "obscurcissement"]
};

// Listes de phrases
const PHRASE_LIST = {
  "Faits": [
    "Saviez-vous que Michael Jackson est originaire de la Côte d'Ivoire ?",
    "Tout ce que nous voyons de l'univers est vieux de millions d'années.",
    "La vie, c'est de la merde.",
    "Les éléphants sont les seuls animaux qui ne peuvent pas sauter.",
    "La Chine est le pays le plus peuplé du monde."
  ],
  "Proverbes": [
    "Carpe diem",
    "La seule façon de faire un excellent travail est d'aimer ce que vous faites",
    "Au milieu de chaque difficulté se trouve une opportunité",
    "Per aspera ad astra",
    "L'oiseau matinal attrape le ver"
  ],
  "Blagues": [
    "Pourquoi les plongeurs sous-marins plongent-ils toujours en arrière et pas en avant ? Parce que sinon, ils tomberaient dans le bateau !",
    "Quelle est la passe-temps préféré de l'électricien ? Ne pas être au courant de ce qui se passe.",
    "Pourquoi les poissons n'aiment-ils pas jouer au tennis ? Parce qu'ils ont peur du filet !"
  ],
  "Citations": [
    "La seule façon de faire un excellent travail est d'aimer ce que vous faites.",
    "La vie est un défi à relever, un bonheur à gagner, une aventure à vivre.",
    "Le succès consiste à passer d'échec en échec sans perdre son enthousiasme.",
    "La connaissance parle, mais la sagesse écoute.",
    "Ne suivez pas votre chemin, tracez-le."
  ],
  "PhrasesComplexes": [
    "Les pontifications péripatétiques précipitent la perspicacité.",
    "La verbosité sesquipedalienne obfuscate souvent le message voulu.",
    "L'éloquence peut être atteinte grâce à une mastication méticuleuse d'un vocabulaire magniloquent.",
    "La profondeur ineffable du cosmos échappe à la compréhension humaine.",
    "Les intrications de la mécanique quantique déconcertent même les érudits les plus érudits."
  ]
};

// Données du mode de jeu
const GAME_MODE = {
  "word" : WORD_LIST,
  "phrase" : PHRASE_LIST
};
