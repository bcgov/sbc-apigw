export default {
  btn: {
    getStarted: 'Commencer',
    goHome: 'Accueil',
    goBack: 'Retourner',
    downloadSpec: 'Téléchargez la spécification',
    allProducts: 'Voir les produits',
    products: 'Produits',
    dashboard: 'Dashboard',
    sbcConnect: 'Service BC Connect',
    apiDoc: "Documentation de l'API",
    createKey: 'Créer une clé',
    revoke: 'Révoquer',
    copy: 'Copier',
    copied: 'Copié!',
    copyCode: "Copier l'extrait de code",
    submit: 'Soumettre',
    next: 'Suivant',
    previous: 'Précédent',
    openMainNav: 'Ouvrir le menu de navigation principal',
    closeMainNav: 'Fermer le menu de navigation principal'
  },
  page: {
    notFound: {
      h1: 'Page non trouvée'
    },
    home: {
      title: 'Accueil',
      h1: 'Passerelle API des registres de la Colombie-Britannique',
      intro: "Bienvenue sur la passerelle API des registres de la Colombie-Britannique! Accédez aux informations de l'API pour tous Services des registres de la Colombie-Britannique ici."
    },
    products: {
      title: 'Tous les Produits',
      h1: 'Tous les Produits'
    },
    dashboard: {
      title: 'Dashboard',
      description: "Gérer les informations du compte et afficher l'activité du compte",
      sandboxMode: {
        infoText: 'Le mode Sandbox est activé. Ne pas utiliser pour la production.',
        btnActive: 'Désactiver le mode Sandbox',
        btnInactive: 'Activer le mode Sandbox',
        text: 'Le Mode Sandbox'
      },
      tabs: {
        profile: 'Profil',
        apiKeys: 'Clés API'
      }
    }
  },
  SbcHeader: {
    title: 'Service BC Connect',
    logoBtnLabel: 'Accueil', // <img> link aria-label
    navLabel: 'Navigation principale' // <nav> aria-label
  },
  SbcFooter: {
    navLabel: 'Liens utiles', // <nav> aria-label
    home: 'Accueil',
    disclaimer: 'Clause de non-responsabilité',
    privacy: 'Confidentialité',
    ally: 'Accessibilité',
    copyright: "Droits d'auteur",
    bcApp: 'Une application en ligne BC'
  },
  SbcLogo: {
    alt: 'Logo du gouvernement de la Colombie-Britannique' // <img> alt
  },
  ColorModeSelect: {
    // aria-labels
    light: 'Passer en mode sombre',
    dark: 'Passer en mode clair'
  },
  LocaleSelect: {
    // aria-label
    label: 'Sélectionnez une langue, Français, langue actuelle.'
  },
  SbcProductCard: {
    goTo: 'Aller au'
  },
  SbcDashboardTableApiKeys: {
    title: 'Accès développeur',
    description: {
      main: "L'activation de l'accès des développeurs vous permettrait d'intégrer les services API BC Registries à votre système.",
      sec: 'En savoir plus dans la'
    },
    cols: {
      name: 'Nom',
      env: 'Environnement',
      apiKey: 'Clé API',
      actions: 'Actions'
    }
  },
  modal: {
    createKey: {
      title: 'Créer une clé',
      content: 'Un nom est requis pour créer une nouvelle clé. Veuillez saisir un nom unique ci-dessous.',
      formLabel: 'Nom'
    },
    revokeKey: {
      title: 'Révoquer la clé - {key}',
      content: "Êtes-vous sûr de vouloir révoquer cette clé API? Cela supprimera définitivement l'accès à la clé, les projets en cours utilisant cette clé pourraient être affectés.",
      formLabel: "Entrez '{key}' pour confirmer."
    }
  }
}
