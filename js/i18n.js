const translations = {
  en: { title: "Discover Sacred Monasteries of Sikkim", explore: "Start Exploring" },
  hi: { title: "सिक्किम के पवित्र मठों की खोज करें", explore: "खोज शुरू करें" },
  ne: { title: "सिक्किमका पवित्र गुम्बाहरूको खोज", explore: "अन्वेषण सुरु गर्नुहोस्" },
  bn: { title: "সিক্কিমের পবিত্র মঠ আবিষ্কার করুন", explore: "অন্বেষণ শুরু করুন" }
};

i18next.init({
  lng: 'en',
  resources: Object.fromEntries(
    Object.entries(translations).map(([lang, t]) => [lang, { translation: t }])
  )
}, function(err, t) {
  document.getElementById('title').innerText = t('title');
  document.getElementById('exploreBtn').innerText = t('explore');
});

document.getElementById('languageSwitcher').addEventListener('change', function(e) {
  i18next.changeLanguage(e.target.value, () => {
    document.getElementById('title').innerText = i18next.t('title');
    document.getElementById('exploreBtn').innerText = i18next.t('explore');
  });
});
