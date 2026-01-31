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
          section: "News",},{id: "news-two-papers-on-large-reasoning-model-safety-and-multimodal-large-language-model-are-accepted-by-mmm-2026",
          title: 'Two papers on Large Reasoning Model Safety and Multimodal Large Language Model are...',
          description: "",
          section: "News",},{id: "news-one-paper-on-reinforcement-learning-for-robotic-manipulation-is-accepted-as-an-oral-presentation-by-aaai-2026-congrats-to-jiarui-and-all-collaborators",
          title: 'One paper on Reinforcement Learning for Robotic Manipulation is accepted as an Oral...',
          description: "",
          section: "News",},{id: "news-i-am-invited-to-serve-as-workshop-chair-at-acm-icmr-2026",
          title: 'I am invited to serve as Workshop Chair at ACM ICMR 2026.',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-area-chair-for-icme-2026",
          title: 'I will serve as Area Chair for ICME 2026.',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-organization-chair-for-pacific-graphics-2026",
          title: 'I will serve as Organization Chair for Pacific Graphics 2026.',
          description: "",
          section: "News",},{id: "news-our-project-vista-a-value-informed-safety-amp-amp-trust-architecture-for-autonomous-agents-has-been-awarded-by-ai-singapore-aisg-with-more-than-sgd-1-000-000-in-total-funding-i-will-serve-as-co-principal-investigator-congrats-zhiguang",
          title: 'Our project “VISTA: A Value-Informed Safety &amp;amp;amp; Trust Architecture for Autonomous Agents” has...',
          description: "",
          section: "News",},{id: "news-one-paper-on-vision-language-navigation-is-accepted-by-tip-congrats-to-guangzhao-and-all-collaborators",
          title: 'One paper on Vision Language Navigation is accepted by TIP. Congrats to Guangzhao...',
          description: "",
          section: "News",},{id: "news-three-papers-on-speech-llm-safety-3d-hand-motion-generation-and-recipe-generation-are-accepted-by-icassp-2026-congrats-to-jinyang-chinglam-guoshan-and-all-collaborators",
          title: 'Three papers on Speech LLM Safety, 3D Hand Motion Generation and Recipe Generation...',
          description: "",
          section: "News",},{id: "news-our-paper-benchmarking-gaslighting-negation-attacks-against-reasoning-models-has-been-selected-as-a-best-paper-candidate-at-mmm-2026",
          title: 'Our paper “Benchmarking Gaslighting Negation Attacks Against Reasoning Models” has been selected as...',
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
