// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "news-one-ral-paper-learning-based-mpc-with-safety-filter-for-constrained-deformable-linear-object-manipulation-has-been-accepted",
          title: 'One RAL paper, “Learning-Based MPC With Safety Filter for Constrained Deformable Linear Object...',
          description: "",
          section: "News",},{id: "news-one-rss-paper-homotopic-path-set-planning-for-robot-manipulation-and-navigation-has-been-accepted",
          title: 'One RSS paper, “Homotopic path set planning for robot manipulation and navigation,” has...',
          description: "",
          section: "News",},{id: "news-successfully-passed-my-ph-d-defense-at-the-chinese-university-of-hong-kong-thesis-learning-based-deformable-linear-object-manipulation-in-unstructured-environments",
          title: 'Successfully passed my Ph.D. defense at The Chinese University of Hong Kong. Thesis:...',
          description: "",
          section: "News",},{id: "news-one-ral-paper-generative-3d-state-estimation-for-dlos-from-partial-observations-has-been-accepted",
          title: 'One RAL paper, “Generative 3D State Estimation for DLOs From Partial Observations,” has...',
          description: "",
          section: "News",},{id: "news-one-tmech-paper-hierarchical-deformation-planning-and-neural-tracking-for-dlos-in-constrained-environments-has-been-accepted",
          title: 'One TMech paper, “Hierarchical Deformation Planning and Neural Tracking for DLOs in Constrained...',
          description: "",
          section: "News",},{id: "news-one-ijrr-paper-actuation-constrained-control-framework-for-optimal-microswarm-navigation-with-swarm-stability-guarantee-has-been-published",
          title: 'One IJRR paper, “Actuation-constrained control framework for optimal microswarm navigation with swarm stability...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV_TANG_Yunxi.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%75%6E%78%69%74%61%6E%67@%63%75%68%6B.%65%64%75.%68%6B", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=HlvVxEYAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/YunxiTang", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
