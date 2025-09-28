// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-service",
          title: "service",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/service/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-i-joined-singapore-management-university-as-an-assistant-professor-of-computer-science-sparkles-smile",
          title: 'I joined Singapore Management University as an Assistant Professor of Computer Science. :sparkles:...',
          description: "",
          section: "News",},{id: "news-two-papers-on-unsupervised-video-hashing-and-generalizable-food-recognition-are-accepted-by-ieee-tmm",
          title: 'Two papers on Unsupervised Video Hashing and Generalizable Food Recognition are accepted by...',
          description: "",
          section: "News",},{id: "news-one-paper-on-text-driven-video-prediction-is-accepted-by-acm-tomm",
          title: 'One paper on Text-driven Video Prediction is accepted by ACM TOMM.',
          description: "",
          section: "News",},{id: "news-one-paper-on-time-series-weight-prediction-is-accepted-by-acm-mm-2024-and-is-further-selected-as-an-oral-presentation-3-97",
          title: 'One paper on Time-series Weight Prediction is accepted by ACM MM 2024 and...',
          description: "",
          section: "News",},{id: "news-one-paper-on-cross-modal-recipe-retrieval-is-accepted-by-eccv-2024",
          title: 'One paper on Cross-modal Recipe Retrieval is accepted by ECCV 2024.',
          description: "",
          section: "News",},{id: "news-one-paper-on-recipe-generation-is-accepted-by-wacv-2025",
          title: 'One paper on Recipe Generation is accepted by WACV 2025.',
          description: "",
          section: "News",},{id: "news-we-are-excited-to-announce-our-special-session-on-multimedia-for-cooking-and-eating-activities-at-icme-2025-we-warmly-invite-you-to-submit-your-papers",
          title: 'We are excited to announce our Special Session on Multimedia for Cooking and...',
          description: "",
          section: "News",},{id: "news-two-papers-on-grasp-generation-and-text-to-hand-image-generation-are-accepted-by-aaai-2025",
          title: 'Two papers on Grasp Generation and Text-to-Hand-Image Generation are accepted by AAAI 2025....',
          description: "",
          section: "News",},{id: "news-one-paper-on-large-multimodal-model-in-food-domain-is-accepted-by-ieee-tmm",
          title: 'One paper on Large Multimodal Model in Food Domain is accepted by IEEE...',
          description: "",
          section: "News",},{id: "news-one-paper-on-recipe-following-in-cooking-video-is-accepted-by-chi-lbw-2025",
          title: 'One paper on Recipe Following in Cooking Video is accepted by CHI (LBW)...',
          description: "",
          section: "News",},{id: "news-one-paper-on-egocentric-video-understanding-is-accepted-by-cvpr-2025",
          title: 'One paper on Egocentric Video Understanding is accepted by CVPR 2025.',
          description: "",
          section: "News",},{id: "news-one-paper-on-ingredient-recognition-is-accepted-by-icme-2025-oral",
          title: 'One paper on Ingredient Recognition is accepted by ICME 2025 (oral).',
          description: "",
          section: "News",},{id: "news-one-paper-on-nutrition-estimation-is-accepted-by-icmr-2025",
          title: 'One paper on Nutrition Estimation is accepted by ICMR 2025.',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-the-program-co-chair-for-acm-icmr-2027-which-will-be-held-in-singapore",
          title: 'I will serve as the Program Co-Chair for ACM ICMR 2027, which will...',
          description: "",
          section: "News",},{id: "news-one-paper-on-cooking-procedural-image-generation-is-accepted-by-acm-tomm",
          title: 'One paper on Cooking Procedural Image Generation is accepted by ACM TOMM.',
          description: "",
          section: "News",},{id: "news-one-paper-on-recipe-progress-tracking-in-non-visual-cooking-are-accepted-by-assets-2025",
          title: 'One paper on Recipe Progress Tracking in Non-Visual Cooking are accepted by ASSETS...',
          description: "",
          section: "News",},{id: "news-one-paper-on-multimodal-large-language-model-is-accepted-by-iccv-2025",
          title: 'One paper on Multimodal Large Language Model is accepted by ICCV 2025.',
          description: "",
          section: "News",},{id: "news-one-paper-on-multimodal-large-language-model-is-accepted-by-acm-mm-2025",
          title: 'One paper on Multimodal Large Language Model is accepted by ACM MM 2025....',
          description: "",
          section: "News",},{id: "news-i-am-awarded-a-singapore-ministry-of-education-moe-academic-research-fund-acrf-tier-2-grant-as-principal-investigator-for-my-project-self-adaptive-planning-with-environmental-awareness-for-embodied-agents-with-total-funding-of-sgd-959-166",
          title: 'I am awarded a Singapore Ministry of Education (MOE) Academic Research Fund (AcRF)...',
          description: "",
          section: "News",},{id: "news-one-paper-on-large-lithium-ion-battery-model-is-accepted-by-nature-communications-as-co-corresponding-author",
          title: 'One paper on Large Lithium-ion Battery Model is accepted by Nature Communications as...',
          description: "",
          section: "News",},{id: "news-i-was-honored-to-serve-on-the-board-of-examiners-for-ph-d-candidate-gabriele-goletto-whose-thesis-focused-on-egocentric-vision-congratulations-to-dr-goletto-on-a-successful-defense",
          title: 'I was honored to serve on the Board of Examiners for Ph.D. Candidate...',
          description: "",
          section: "News",},{id: "news-i-was-invited-to-deliver-a-talk-at-the-national-university-of-singapore-next-research-centre-on-food-computing-from-an-egocentric-video-perspective",
          title: 'I was invited to deliver a talk at the National University of Singapore...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
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
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
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
