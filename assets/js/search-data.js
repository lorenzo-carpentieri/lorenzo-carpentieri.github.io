// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about-me",
    title: "About me",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Hi folks, here you can find the list of all my publications. For any questions or collaborations contact me at lcarpentieri@unisa.it.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Here you can find project on which I worked during my research activity.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Hi, here you can find my CV. If you have any question please contact me :smile:.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-i-m-happy-to-announce-that-our-paper-phase-based-frequency-scaling-for-energy-efficient-heterogeneous-computing-has-been-accepted-to-ipdps-2025-see-you-in-milan-smile",
          title: 'I’m happy to announce that our paper “Phase-based Frequency Scaling for Energy-efficient Heterogeneous...',
          description: "",
          section: "News",},{id: "news-i-m-happy-to-announce-that-our-paper-a-performance-analysis-of-autovectorization-on-rvv-risc-v-boards-has-been-accepted-to-pdp-2025",
          title: 'I’m happy to announce that our paper “A Performance Analysis of Autovectorization on...',
          description: "",
          section: "News",},{id: "news-i-m-happy-to-announce-that-our-paper-syprox-combining-host-and-device-perforation-with-mixed-precision-approximation-on-heterogeneous-architectures-has-been-accepted-to-ics-2025-see-you-in-salt-lake-city-smile",
          title: 'I’m happy to announce that our paper “SYprox: Combining Host and Device Perforation...',
          description: "",
          section: "News",},{id: "projects-syprox",
          title: 'SYprox',
          description: "A framework for implementing applications with apporximate computing techniques on heterogeneous hardware.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%63%61%72%70%65%6E%74%69%65%72%69@%75%6E%69%73%61.%69%74", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/lorenzo-carpentieri", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/lorenzo-carpentieri", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=6lZzl2UAAAAJ", "_blank");
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
