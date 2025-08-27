// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
  const resources = {
    en: { translation: {
      "project.title":"NamasteSikkim",
      "nav.explore":"Explore",
      "nav.virtualTours":"Virtual Tours",
      "nav.activities":"Activities",
      "nav.events":"Events",
      "nav.quiz":"Quiz",
      "nav.startJourney":"Start Journey",
      "hero.location":"Sikkim, India",
      "hero.headline":"Discover Sacred Monasteries of Sikkim",
      "hero.subtext":"Immerse yourself in 200+ centuries-old monasteries through virtual tours, interactive maps, and rich digital archives preserving Himalayan Buddhist heritage.",
      "hero.cta":"Start Virtual Tour",
      "search.placeholder":"Search Monasteries...",
      "stats.monasteries":"Monasteries",
      "stats.origins":"Origins",
      "stats.tours":"Virtual Tours",
      "map.heading":"Interactive Monastery Map",
      "map.featured":"Featured Monasteries",
      "calendar.heading":"Sikkim Festival Calendar",
      "virtual.heading":"Featured Virtual Tours",
      "virtual.exploreAll":"Explore All 200+ Monasteries",
      "archives.heading":"Digital Archives",
      "archives.chants":"Chants & Rituals",
      "archives.exploreChants":"Explore Chants",
      "archives.monkProfiles":"Monk Profiles",
      "archives.viewProfiles":"View Profiles",
      "monastery.viewDetails":"View Details",

      /* --- Login / Auth keys --- */
      "login.title":"Login - Monastery360",
      "login.back":"← Back to Home",
      "login.tagline":"Join your spiritual journey",
      "role.tourist":"Tourist",
      "role.guide":"Guide",
      "login.signIn":"Sign In",
      "login.create":"Create Account",
      "login.welcome":"Welcome",
      "login.signInDesc":"Sign in to access virtual tours and your progress.",
      "login.emailLabel":"Email",
      "login.emailPlaceholder":"Enter your email",
      "login.passwordLabel":"Password",
      "login.passwordPlaceholder":"Enter your password",
      "login.signInBtn":"Sign In",
      "login.createHeading":"Create Account",
      "login.createDesc":"Begin your journey with Monastery360.",
      "login.passwordCreatePlaceholder":"Create a password",
      "login.createBtn":"Create Account",
      "login.applyAsGuide":"Apply as a Guide",
      "login.guideLoginHeading":"Guide Login",
      "login.guideLoginDesc":"Sign in to manage tours and connect with visitors.",
      "login.applyForm":"Apply as Guide",
      "login.applyHeading":"Apply as a Guide",
      "login.applyDesc":"Local residents of Sikkim can apply to become guides.",
      "login.fullName":"Full Name",
      "login.fullNamePlaceholder":"Enter your name",
      "login.phone":"Phone Number",
      "login.phonePlaceholder":"Enter your phone number",
      "login.languages":"Languages Spoken",
      "login.languagesPlaceholder":"English, Hindi, Nepali",
      "login.experience":"Experience (Years)",
      "login.experiencePlaceholder":"e.g. 3",
      "login.bio":"Short Bio",
      "login.bioPlaceholder":"Tell us about yourself...",
      "login.applyBtn":"Apply Now",
      "login.disclaimer":"By continuing, you agree to our guidelines and privacy practices."
    }},
    hi: { translation: {
      "project.title":"नमस्ते सिक्किम",
      "nav.explore":"एक्सप्लोर",
      "nav.virtualTours":"वर्चुअल टूर",
      "nav.activities":"गतिविधियाँ",
      "nav.events":"इवेंट",
      "nav.quiz":"क्विज़",
      "nav.startJourney":"यात्रा शुरू करें",
      "hero.location":"सिक्किम, भारत",
      "hero.headline":"सिक्किम के पवित्र मठों की खोज करें",
      "hero.subtext":"वर्चुअल टूर, इंटरैक्टिव मानचित्र और डिजिटल अभिलेखागार के माध्यम से 200+ सदियों पुराने मठों में डूब जाएँ।",
      "hero.cta":"वर्चुअल टूर शुरू करें",
      "search.placeholder":"मठ खोजें...",
      "stats.monasteries":"मठ",
      "stats.origins":"उत्पत्ति",
      "stats.tours":"वर्चुअल टूर",
      "map.heading":"इंटरएक्टिव मठ मानचित्र",
      "map.featured":"प्रमुख मठ",
      "calendar.heading":"सिक्किम उत्सव कैलेंडर",
      "virtual.heading":"प्रमुख वर्चुअल टूर",
      "virtual.exploreAll":"सभी 200+ मठ देखें",
      "archives.heading":"डिजिटल अभिलेख",
      "archives.chants":"भजन एवं अनुष्ठान",
      "archives.exploreChants":"भजन एक्सप्लोर करें",
      "archives.monkProfiles":"भिक्षु प्रोफ़ाइल",
      "archives.viewProfiles":"प्रोफ़ाइल देखें",
      "monastery.viewDetails":"विवरण देखें",

      /* --- Login / Auth keys (Hindi) --- */
      "login.title":"लॉगिन - Monastery360",
      "login.back":"← मुख्य पृष्ठ पर जाएँ",
      "login.tagline":"अपनी आध्यात्मिक यात्रा में शामिल हों",
      "role.tourist":"पर्यटक",
      "role.guide":"मार्गदर्शक",
      "login.signIn":"साइन इन",
      "login.create":"खाता बनाएं",
      "login.welcome":"स्वागत है",
      "login.signInDesc":"वर्चुअल टूर और अपनी प्रगति देखने के लिए साइन इन करें।",
      "login.emailLabel":"ईमेल",
      "login.emailPlaceholder":"अपना ईमेल दर्ज करें",
      "login.passwordLabel":"पासवर्ड",
      "login.passwordPlaceholder":"अपना पासवर्ड दर्ज करें",
      "login.signInBtn":"साइन इन",
      "login.createHeading":"खाता बनाएं",
      "login.createDesc":"Monastery360 के साथ अपनी यात्रा शुरू करें।",
      "login.passwordCreatePlaceholder":"एक पासवर्ड बनाएं",
      "login.createBtn":"खाता बनाएं",
      "login.applyAsGuide":"मार्गदर्शक के रूप में आवेदन करें",
      "login.guideLoginHeading":"मार्गदर्शक लॉगिन",
      "login.guideLoginDesc":"टूर प्रबंधित करने और आगंतुकों से जुड़ने के लिए साइन इन करें।",
      "login.applyForm":"मार्गदर्शक के लिए आवेदन",
      "login.applyHeading":"मार्गदर्शक के रूप में आवेदन करें",
      "login.applyDesc":"सिक्किम के स्थानीय निवासी मार्गदर्शक बनने के लिए आवेदन कर सकते हैं।",
      "login.fullName":"पूरा नाम",
      "login.fullNamePlaceholder":"अपना नाम दर्ज करें",
      "login.phone":"फोन नंबर",
      "login.phonePlaceholder":"अपना फोन नंबर दर्ज करें",
      "login.languages":"बोली जाने वाली भाषाएँ",
      "login.languagesPlaceholder":"English, Hindi, Nepali",
      "login.experience":"अनुभव (वर्ष)",
      "login.experiencePlaceholder":"उदा. 3",
      "login.bio":"संक्षिप्त परिचय",
      "login.bioPlaceholder":"अपने बारे में बताएं...",
      "login.applyBtn":"अब आवेदन करें",
      "login.disclaimer":"जारी रखने पर आप हमारी नियमावली और गोपनीयता नीतियों से सहमत होते हैं।"
    }},
    ne: { translation: {
      "project.title":"नमस्ते सिक्किम",
      "nav.explore":"अनुसन्धान",
      "nav.virtualTours":"भर्चुअल टूर",
      "nav.activities":"गतिविधिहरू",
      "nav.events":"इभेन्ट",
      "nav.quiz":"क्विज",
      "nav.startJourney":"यात्रा सुरु गर्नुहोस्",
      "hero.location":"सिक्किम, भारत",
      "hero.headline":"सिक्किमका पवित्र मठहरू अन्वेषण गर्नुहोस्",
      "hero.subtext":"भर्चुअल टुर, इन्टरएक्टिभ नक्सा र डिजिटल अभिलेखहरू मार्फत 200+ वर्ष पुराना मठहरूमा डुब्नुहोस्।",
      "hero.cta":"भर्चुअल टुर सुरु गर्नुहोस्",
      "search.placeholder":"मठ खोज्नुहोस्...",
      "stats.monasteries":"मठहरू",
      "stats.origins":"उत्पत्ति",
      "stats.tours":"भर्चुअल टूर",
      "map.heading":"इन्टरएक्टिभ मठ नक्सा",
      "map.featured":"विशेष मठहरू",
      "calendar.heading":"सिक्किम उत्सव क्यालेन्डर",
      "virtual.heading":"विशेष भर्चुअल टूर",
      "virtual.exploreAll":"सबै 200+ मठहरू अन्वेषण गर्नुहोस्",
      "archives.heading":"डिजिटल अभिलेखहरू",
      "archives.chants":"भजन र अनुष्ठान",
      "archives.exploreChants":"भजन अन्वेषण गर्नुहोस्",
      "archives.monkProfiles":"गुरुहरू प्रोफाइल",
      "archives.viewProfiles":"प्रोफ़ाइलहरू हेर्नुहोस्",
      "monastery.viewDetails":"विवरण हेर्नुहोस्",

      /* --- Login keys (Nepali) --- */
      "login.title":"लगइन - Monastery360",
      "login.back":"← गृहमा फर्कनुहोस्",
      "login.tagline":"आफ्नो आध्यात्मिक यात्रामा सामेल हुनुहोस्",
      "role.tourist":"पर्यटक",
      "role.guide":"गाइड",
      "login.signIn":"साइन इन",
      "login.create":"खाता बनाउने",
      "login.welcome":"स्वागत छ",
      "login.signInDesc":"भर्चुअल टुर र तपाईंको प्रगति पहुँच गर्न साइन इन गर्नुहोस्।",
      "login.emailLabel":"इमेल",
      "login.emailPlaceholder":"आफ्नो इमेल भर्नुहोस्",
      "login.passwordLabel":"पासवर्ड",
      "login.passwordPlaceholder":"आफ्नो पासवर्ड राख्नुहोस्",
      "login.signInBtn":"साइन इन",
      "login.createHeading":"खाता बनाउनुहोस्",
      "login.createDesc":"Monastery360 सँग तपाईंको यात्रा सुरु गर्नुहोस्।",
      "login.passwordCreatePlaceholder":"पासवर्ड बनाउनुहोस्",
      "login.createBtn":"खाता सिर्जना",
      "login.applyAsGuide":"गाइडको रूपमा आवेदन गर्नुहोस्",
      "login.guideLoginHeading":"गाइड लगइन",
      "login.guideLoginDesc":"टुर व्यवस्थापन र आगन्तुकसँग जडान हुन साइन इन गर्नुहोस्।",
      "login.applyForm":"गाइड आवेदन",
      "login.applyHeading":"गाइडको रूपमा आवेदन",
      "login.applyDesc":"सिक्किमका स्थानीय बासिन्दाहरू गाइड बन्न आवेदन गर्न सक्छन्।",
      "login.fullName":"पूरा नाम",
      "login.fullNamePlaceholder":"आफ्नो नाम लेख्नुहोस्",
      "login.phone":"फोन नम्बर",
      "login.phonePlaceholder":"आफ्नो फोन नम्बर लेख्नुहोस्",
      "login.languages":"भाषाहरू बोल्नुहुन्छ",
      "login.languagesPlaceholder":"English, Hindi, Nepali",
      "login.experience":"अनुभव (वर्ष)",
      "login.experiencePlaceholder":"उदा. 3",
      "login.bio":"छोटो परिचय",
      "login.bioPlaceholder":"आफ्नो बारेमा लेख्नुहोस्...",
      "login.applyBtn":"अब आवेदन गर्नुहोस्",
      "login.disclaimer":"जारी राख्दा तपाइँ हाम्रो मापदण्ड र गोप्यता अभ्यासहरूसँग सहमत हुनुहुन्छ।"
    }},
    bn: { translation: {
      "project.title":"নমস্তে সিকিম",
      "nav.explore":"অন্বেষণ",
      "nav.virtualTours":"ভার্চুয়াল ট্যুর",
      "nav.activities":"কার্যক্রম",
      "nav.events":"ইভেন্ট",
      "nav.quiz":"কুইজ",
      "nav.startJourney":"যাত্রা শুরু করুন",
      "hero.location":"সিকিম, ভারত",
      "hero.headline":"সিকিমের পবিত্র মঠগুলো আবিষ্কার করুন",
      "hero.subtext":"ভার্চুয়াল ট্যুর, ইন্টারঅ্যাক্টিভ মানচিত্র এবং সমৃদ্ধ ডিজিটাল আর্কাইভের মাধ্যমে ২০০+ বছরের পুরনো মঠগুলো উপভোগ করুন।",
      "hero.cta":"ভার্চুয়াল ট্যুর শুরু করুন",
      "search.placeholder":"মঠ খুঁজুন...",
      "stats.monasteries":"মঠসমূহ",
      "stats.origins":"উত্স",
      "stats.tours":"ভার্চুয়াল ট্যুর",
      "map.heading":"ইন্টারঅ্যাক্টিভ মঠ মানচিত্র",
      "map.featured":"বৈশিষ্ট্যযুক্ত মঠ",
      "calendar.heading":"সিকিম উৎসব ক্যালেন্ডার",
      "virtual.heading":"বৈশিষ্ট্যযুক্ত ভার্চুয়াল ট্যুর",
      "virtual.exploreAll":"সমস্ত ২০০+ মঠ অন্বেষণ করুন",
      "archives.heading":"ডিজিটাল আর্কাইভ",
      "archives.chants":"সঙ্গীত ও আচার",
      "archives.exploreChants":"সঙ্গীত অন্বেষণ করুন",
      "archives.monkProfiles":"সন্ন্যাসী প্রোফাইল",
      "archives.viewProfiles":"প্রোফাইল দেখুন",
      "monastery.viewDetails":"বিস্তারিত দেখুন",

      /* --- Login keys (Bengali) --- */
      "login.title":"লগইন - Monastery360",
      "login.back":"← হোমে ফেরত",
      "login.tagline":"আপনার আধ্যাত্মিক যাত্রায় যোগ দিন",
      "role.tourist":"ভ্রমণকারী",
      "role.guide":"গাইড",
      "login.signIn":"সাইন ইন",
      "login.create":"অ্যাকাউন্ট তৈরি",
      "login.welcome":"স্বাগতম",
      "login.signInDesc":"ভার্চুয়াল ট্যুর এবং আপনার অগ্রগতি অ্যাক্সেস করতে সাইন ইন করুন।",
      "login.emailLabel":"ইমেল",
      "login.emailPlaceholder":"আপনার ইমেল লিখুন",
      "login.passwordLabel":"পাসওয়ার্ড",
      "login.passwordPlaceholder":"আপনার পাসওয়ার্ড লিখুন",
      "login.signInBtn":"সাইন ইন",
      "login.createHeading":"অ্যাকাউন্ট তৈরি",
      "login.createDesc":"Monastery360 দিয়ে আপনার যাত্রা শুরু করুন।",
      "login.passwordCreatePlaceholder":"একটি পাসওয়ার্ড তৈরি করুন",
      "login.createBtn":"অ্যাকাউন্ট তৈরি",
      "login.applyAsGuide":"গাইড হিসেবে আবেদন করুন",
      "login.guideLoginHeading":"গাইড লগইন",
      "login.guideLoginDesc":"ট্যুর পরিচালনা করতে এবং দর্শকদের সাথে সংযুক্ত হতে সাইন ইন করুন।",
      "login.applyForm":"গাইড আবেদন",
      "login.applyHeading":"গাইড হিসেবে আবেদন করুন",
      "login.applyDesc":"সিকিমের স্থানীয়রা গাইড হতে আবেদন করতে পারে।",
      "login.fullName":"পূর্ণ নাম",
      "login.fullNamePlaceholder":"আপনার নাম লিখুন",
      "login.phone":"ফোন নম্বর",
      "login.phonePlaceholder":"আপনার ফোন নম্বর লিখুন",
      "login.languages":"কোন ভাষা বলতে পারেন",
      "login.languagesPlaceholder":"English, Hindi, Nepali",
      "login.experience":"অভিজ্ঞতা (বছর)",
      "login.experiencePlaceholder":"উদাহরণ: ৩",
      "login.bio":"সংক্ষিপ্ত বায়ো",
      "login.bioPlaceholder":"আপনার সম্পর্কে বলুন...",
      "login.applyBtn":"এখনই আবেদন করুন",
      "login.disclaimer":"চলিয়ে গেলে আপনি আমাদের নির্দেশিকা ও গোপনীয়তা নীতির সাথে সম্মতি জানাচ্ছেন।"
    }}
  };

  const initialLang = localStorage.getItem('lang') || 'en';
  i18next.init({
    lng: initialLang,
    debug: false,
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  }, (err) => {
    if (err) console.error('i18next init error', err);
    translatePage();
    // set all language switchers to current language
    document.querySelectorAll('#languageSwitcher').forEach(sel => sel.value = i18next.language || initialLang);
  });

  function translatePage() {
    // data-i18n -> innerText (safe)
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      el.innerText = i18next.t(key);
    });

    // data-i18n-html -> innerHTML
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (!key) return;
      el.innerHTML = i18next.t(key);
    });

    // placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (!key) return;
      el.setAttribute('placeholder', i18next.t(key));
    });

    // value
    document.querySelectorAll('[data-i18n-value]').forEach(el => {
      const key = el.getAttribute('data-i18n-value');
      if (!key) return;
      el.value = i18next.t(key);
    });

    // attribute mapping: data-i18n-attr="title:tooltip.key;aria-label:label.key"
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const mapping = el.getAttribute('data-i18n-attr');
      if (!mapping) return;
      mapping.split(';').forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s && s.trim());
        if (attr && key) el.setAttribute(attr, i18next.t(key));
      });
    });

    document.documentElement.lang = i18next.language || 'en';
  }

  // public api
  window.i18n = {
    t: (k, opts) => i18next.t(k, opts),
    language: () => i18next.language,
    setLanguage: (lng) => {
      return new Promise((resolve, reject) => {
        i18next.changeLanguage(lng, (err) => {
          if (err) { console.error('changeLanguage error', err); reject(err); return; }
          localStorage.setItem('lang', lng);
          translatePage();
          window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lng } }));
          // update all language switchers
          document.querySelectorAll('#languageSwitcher').forEach(sel => sel.value = lng);
          resolve();
        });
      });
    },
    translatePage
  };

  // wire all language switchers on page
  document.querySelectorAll('#languageSwitcher').forEach(sel => {
    sel.addEventListener('change', (e) => {
      const lng = e.target.value;
      window.i18n.setLanguage(lng).catch(()=>{});
    });
    // ensure initial value set (in case init callback missed)
    sel.value = i18next.language || initialLang;
  });
});
