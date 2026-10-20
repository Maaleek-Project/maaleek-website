// Informations centrales du site : modifiez-les ici, elles sont reprises partout.
export const site = {
  name: "Maaleek",
  tagline: "Avec vous et partout ailleurs.",
  url: "https://discover.maaleek.com",

  // Liens de téléchargement (à remplacer par les liens définitifs des stores)
  stores: {
    playStore: "https://play.google.com/store/apps/details?id=com.saush.maaleek",
    appStore: "#telecharger",
  },

  contact: {
    email: "maaleekapp@gmail.com",
    phones: ["+225 07 77 00 26 25", "+225 07 79 31 24 75"],
    city: "Abidjan, Côte d'Ivoire",
  },

  socials: {
    linkedin: "",
    instagram: "",
    facebook: "",
  },

  publisher: {
    company: "SAUSH SARL",
    city: "Abidjan, Côte d'Ivoire",
    // Renseignez ces champs pour les afficher dans les mentions légales
    rccm: "",
    director: "",
    host: "",
  },

  legalUpdatedAt: "19 octobre 2026",
};

export const telHref = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;
