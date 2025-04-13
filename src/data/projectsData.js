const projects = [
  {
    id: 1,
    title: "Pipeline de Données ETL",
    description_breve: "Conception et implémentation d'un pipeline ETL automatisé pour l'analyse de données en temps réel.",
    description_detaillee: `Mise en place d'un pipeline ETL robuste pour le traitement de données en temps réel.
    Le projet utilise Python avec Apache Airflow pour l'orchestration des tâches, et AWS pour l'infrastructure cloud.
    Les données sont extraites de diverses sources, transformées selon les besoins métier, et chargées dans un data warehouse.`,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    githubUrl: "https://github.com/votre-compte/pipeline-etl",
    ressources: [
      {
        name: "Documentation technique",
        link: "https://docs.example.com/pipeline-etl"
      },
      {
        name: "Guide d'utilisation",
        link: "https://guide.example.com/pipeline-etl"
      }
    ],
    tags: [
      {
        name: "Python",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      },
      {
        name: "Apache Airflow",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg"
      },
      {
        name: "AWS",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1614028671169-d3b0f6ffb739?auto=format&fit=crop&w=1350&q=80",
        caption: "Architecture du pipeline ETL"
      },
      {
        url: "https://images.unsplash.com/photo-1590608897129-79da98d159c3?auto=format&fit=crop&w=1350&q=80",
        caption: "Orchestration avec Apache Airflow"
      },
      {
        url: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1350&q=80",
        caption: "Résultat de la transformation des données"
      }
    ],
    isTeamProject: false,
    teamMembers: []
  },
  {
    id: 2,
    title: "Application de Gestion de Document (KnowLab)",
    description_breve: "Mise en place d'une application de gestion de documents",
    description_detaillee: `Développement d'une application web de gestion documentaire permettant à plusieurs utilisateurs de consulter, télécharger ou prévisualiser des documents en ligne, selon leurs besoins et leurs droits d’accès. 
          L’application intègre un système d’authentification des utilisateurs avec une gestion des rôles, permettant de restreindre l’accès aux documents selon les autorisations définies. 
          Les fichiers peuvent être visualisés en ligne sans téléchargement, offrant une expérience fluide et efficace. L’interface a été pensée pour être simple, claire et intuitive, facilitant la navigation et l’utilisation quotidienne.
          Sur le plan technique, le projet a été développé en Spring Boot en suivant l’architecture MVC. Les données sont gérées à l’aide d’une base MySQL, tandis que les fichiers sont stockés dans un espace MinIO, un service de stockage compatible S3, garantissant sécurité et performance.
          Ce projet a permis de mettre en place un système robuste de gestion de fichiers, d’intégrer avec succès un service de stockage externe et d’optimiser l’expérience utilisateur grâce à la prévisualisation directe des documents en ligne.`,
    image: "/projets/knowlab/home.png",
    githubUrl: "https://github.com/kiboyou/KnowLab/tree/dev_merge",
    ressources: [],
    tags: [
      {
        name: "Spring Boot",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
      },
      {
        name: "MySQL",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
      },
      {
        name: "Minio Storage",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/minio/minio-original.svg"
      }
    ],
    gallery: [
      {
        url: "/projets/knowlab/detail_livre.png",
        caption: "Page affichant le detail d'un livre"
      },
      {
        url: "/projets/knowlab/admin.png",
        caption: "Page d'administration du systeme"
      },
    ],
    isTeamProject: true,
    teamMembers: [
      {
        name: "OUATTARA Kiboyou Mohamed",
        roles: ["Développeur Full Stack", "UI/UX Designer", "Eleve Ingenieur en Machine Learning"],
        profileUrl: "https://www.linkedin.com/in/kiboyou-mohamed-ouattara-4131bb220/"
      },
      {
        name: "AHIKPA Jean Christian",
        roles: ["Développeur Frontend", "Eleve Ingenieur en Data Science"],
        profileUrl: "https://www.linkedin.com/in/jean-christian-ahikpa/"
      },
    ]
  },
  {
    id: 3,
    title: "Application de Location de Véhicules (Car Express)",
    description_breve: "Mise en place d'une application de location de véhicules avec Laravel et MySQL",
    description_detaillee: `Application web de location de voitures, destinée aux agences souhaitant digitaliser leur service. 
        Les clients peuvent s'inscrire, rechercher, réserver et consulter leurs factures. 
        Les gestionnaires disposent d'un back-office pour gérer les véhicules, disponibilités et promotions. 
        Le tout est sécurisé, hébergé sur Azure, et développé en PHP/MySQL avec une interface moderne en HTML/CSS/JS.
        Le projet comprend trois profils utilisateurs (Client, Gestionnaire, Administrateur) avec des fonctionnalités dédiées pour chacun. 
        Il a été réalisé en 2 mois, structuré en plusieurs phases (conception, développement, test, déploiement et maintenance) 
        et utilise une architecture sécurisée, responsive et scalable.`,
    image: "/projets/car_express/home.png",
    githubUrl: "https://github.com/kiboyou/car_express/tree/newbackend/carexpress",
    ressources: [
      {
        name: "Fiche Projet",
        link: "https://drive.google.com/file/d/1m6yKc8zbfK4JAQbfJ-1XPFz2q8a_rq2O/view?usp=sharing"
      },
      {
        name: "Manuel utilisateur",
        link: "https://guide.car-express.com"
      },
    ],
    tags: [
      {
        name: "Laravel",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg"
      },
      {
        name: "MySQL",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
      }
    ],
    gallery: [
      {
        url: "/projets/car_express/car.png",
        caption: "Liste des voitures a reserver"
      },
      {
        url: "/projets/car_express/formulaire_reservation.png",
        caption: "Details de la voiture et formulaire de reservation"
      },
      {
        url: "/projets/car_express/dash_client.png",
        caption: "Dashboard client"
      },
      {
        url: "/projets/car_express/dash_admin.png",
        caption: "Dashboard admin"
      }
    ],
    isTeamProject: true,
    teamMembers: [
      {
        name: "OUATTARA Kiboyou Mohamed",
        roles: ["Développeur Full Stack"],
        profileUrl: "https://www.linkedin.com/in/kiboyou-mohamed-ouattara-4131bb220/"
      },
    ]
  }
];

export default projects;
