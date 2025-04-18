const projects = [
  {
    id: 2,
    title: "Examen pratique : Exemple de SQL Associate",
    description_breve: "Examen pratique de SQL Associate effectué sur DataCamp",
    description_detaillee: `Sujet de l'examen : Tech Solutions Inc. est une entreprise technologique de premier plan spécialisée dans le développement de logiciels et les services de conseil en informatique. 
      L'entreprise est fière de fournir des solutions innovantes à ses clients dans divers secteurs d'activité. Avec une équipe dévouée de professionnels qualifiés, TechSolutions a acquis une réputation d'excellence dans l'industrie technologique.
      Tech Solutions Inc. a connu une baisse de la satisfaction de ses clients au cours des derniers mois. Les enquêtes de satisfaction des clients et les tickets de support indiquent une augmentation de l'insatisfaction parmi les clients. 
      L'entreprise est préoccupée par cette tendance car elle a un impact direct sur la fidélisation des clients, la réputation et la croissance globale de l'entreprise.
      Vous travaillez avec l'équipe de support client pour fournir des données aux responsables afin d'aider l'entreprise à prendre des mesures proactives pour répondre efficacement à ces préoccupations.`,
    image: "https://res.cloudinary.com/ddivqszbt/image/upload/v1744935006/sql_exam_datacamp_vrmaij.png",
    githubUrl: "",
    ressources: [
      {
        name: "Lien DataCamp du Projet",
        link: "https://www.datacamp.com/datalab/w/ff5d7edf-59c1-4cb3-948f-efac44b50951/edit"
      },
    ],
    tags: [
      {
        name: "SQL",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
      },
    ],
    gallery: [],
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
    image: "https://res.cloudinary.com/ddivqszbt/image/upload/v1744897014/home_kxnzam.png",
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
        url: "https://res.cloudinary.com/ddivqszbt/image/upload/v1744897013/detail_livre_ravdov.png",
        caption: "Page affichant le detail d'un livre"
      },
      {
        url: "https://res.cloudinary.com/ddivqszbt/image/upload/v1744897011/admin_n4kywk.png",
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
    image: "https://res.cloudinary.com/ddivqszbt/image/upload/v1744897040/home_yemone.png",
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
        url: "https://res.cloudinary.com/ddivqszbt/image/upload/v1744897034/car_yrnvbx.png",
        caption: "Liste des voitures a reserver"
      },
      {
        url: "https://res.cloudinary.com/ddivqszbt/image/upload/v1744897038/formulaire_reservation_pbxvg7.png",
        caption: "Details de la voiture et formulaire de reservation"
      },
      {
        url: "https://res.cloudinary.com/ddivqszbt/image/upload/v1744897035/dash_client_vn0tfo.png",
        caption: "Dashboard client"
      },
      {
        url: "https://res.cloudinary.com/ddivqszbt/image/upload/v1744897037/dash_admin_kdl3mn.png",
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
  },
  {
    id: 4,
    title: "Application de Gestion de Prise de Rendez-vous (ClickHealth)",
    description_breve: "Mise en place d'une application de gestion de prise de rendez-vous dans les cliniques",
    description_detaillee: `Le projet ClickHealth consiste en la création d'une plateforme web dédiée à la gestion complète des consultations médicales. 
      Cette solution numérique vise à optimiser le parcours de soins des patients tout en facilitant le travail des médecins et du personnel administratif. 
      Grâce à cette plateforme, les patients auront la possibilité de réserver des rendez-vous en ligne avec des spécialistes selon leurs disponibilités, de s’enregistrer dès leur arrivée à l’accueil, puis d’être orientés vers le médecin concerné. 
      Après la consultation, les résultats ainsi que les prescriptions seront publiés en ligne, permettant un suivi clair et structuré de l’historique médical du patient.
      L’objectif principal de ClickHealth est d’améliorer l’organisation et la fluidité des soins médicaux grâce à un système centralisé de gestion des consultations. 
      Pour les patients, cela signifie un accès simplifié aux services médicaux, la possibilité de gérer eux-mêmes leurs rendez-vous et de consulter à tout moment leurs résultats médicaux. 
      Du côté des professionnels de santé, la plateforme mettra à disposition des outils efficaces pour planifier les consultations, gérer les disponibilités, consulter les dossiers médicaux des patients, enregistrer les diagnostics et rédiger les prescriptions.
      En parallèle, le projet intègre une gestion complète des profils des spécialistes, avec des fonctions permettant leur enregistrement dans le système, l’organisation de leur emploi du temps, ainsi que l’attribution des patients en fonction des besoins médicaux identifiés. 
      ClickHealth ambitionne ainsi de devenir un outil essentiel pour la modernisation du système de soins, en assurant une meilleure coordination entre les patients et les professionnels de santé.`,
    image: "https://res.cloudinary.com/ddivqszbt/image/upload/v1744932680/home_x8mtv9.png",
    githubUrl: "https://github.com/kiboyou/ClickHealth-FRONT/tree/main",
    ressources: [
      {
        name: "Rapport de projet",
        link: "https://drive.google.com/file/d/1_LdVnHGjG7c-EOuhb1cO7bWrfF3uRJWI/view?usp=sharing"
      },
      {
        name: "API ClickHealth GitHub",
        link: "https://github.com/kiboyou/API-ClickHealth/tree/develop_merge"
      }
    ],
    tags: [
      {
        name: "Django Rest Framework",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
      },
      {
        name: "PostgreSQL",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
      },
      {
        name: "React",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      }
    ],
    gallery: [
      {
        url: "https://res.cloudinary.com/ddivqszbt/image/upload/v1744932683/login_lgplg2.png",
        caption: "Page de Connexion"
      },
      {
        url: "https://res.cloudinary.com/ddivqszbt/image/upload/v1744932688/prise_rdv_sfancg.png",
        caption: "Page de Prise de Rendez-vous"
      },
      {
        url: "https://res.cloudinary.com/ddivqszbt/image/upload/v1744897035/dash_client_vn0tfo.png",
        caption: "Dashboard client"
      },
      {
        url: "https://res.cloudinary.com/ddivqszbt/image/upload/v1744932678/admin_dash_dbsamq.png",
        caption: "Dashboard admin"
      },
      {
        url: "https://res.cloudinary.com/ddivqszbt/image/upload/v1744932684/planning_n9ncwu.png",
        caption: "Liste des Plannings"
      },
      {
        url: "https://res.cloudinary.com/ddivqszbt/image/upload/v1744932688/rdv_t4ng9x.png",
        caption: "Liste des Rendez-vous"
      },
      {
        url: "https://res.cloudinary.com/ddivqszbt/image/upload/v1744932679/dash_superadmin_wswy4q.png",
        caption: "Dashboard super admin"
      }
    ],
    isTeamProject: true,
    teamMembers: [
      {
        name: "OUATTARA Kiboyou Mohamed",
        roles: ["Développeur Full Stack"],
        profileUrl: "https://www.linkedin.com/in/kiboyou-mohamed-ouattara-4131bb220/"
      },
      {
        name: "AHIKPA Jean Christian",
        roles: ["Développeur Frontend", "Eleve Ingenieur en Data Science"],
        profileUrl: "https://www.linkedin.com/in/jean-christian-ahikpa/"
      },
    ]
  }
];

export default projects;
