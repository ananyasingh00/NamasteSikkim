const monasteries = [
  "Rumtek Monastery",
  "Pemayangtse Monastery",
  "Enchey Monastery",
  "Dubdi Monastery",
  "Tashiding Monastery",
  "Phodong Monastery",
  "Ralang Monastery",
  "Lingdum Monastery",
  "Kartok Monastery",
  "Rinchenpong Monastery"
];

const quizData = {
  "Rumtek Monastery": [
    { question: "What is Rumtek Monastery also known as?", options: ["Dharma Chakra Centre", "Lotus Temple", "Peace Pagoda", "Golden Stupa"], answer: "Dharma Chakra Centre" },
    { question: "Which sect does Rumtek belong to?", options: ["Gelug", "Kagyu", "Nyingma", "Sakya"], answer: "Kagyu" },
    { question: "Rumtek Monastery is located near which city?", options: ["Pelling", "Gangtok", "Namchi", "Ravangla"], answer: "Gangtok" },
    { question: "Who is the spiritual head associated with Rumtek?", options: ["Dalai Lama", "Karmapa", "Panchen Lama", "Rinpoche"], answer: "Karmapa" },
    { question: "Which country originally built the Rumtek Monastery?", options: ["India", "Bhutan", "Nepal", "Tibet"], answer: "Tibet" },
    { question: "What architectural style is Rumtek known for?", options: ["Dravidian", "Tibetan", "Mughal", "Rajput"], answer: "Tibetan" },
    { question: "Which festival is celebrated at Rumtek?", options: ["Losar", "Saga Dawa", "Cham Dance", "Bumchu"], answer: "Cham Dance" },
    { question: "What relic is housed in Rumtek?", options: ["Golden Stupa", "Sacred Bell", "Prayer Wheel", "Ancient Scrolls"], answer: "Golden Stupa" },
    { question: "Which year was Rumtek rebuilt?", options: ["1966", "1959", "1975", "1982"], answer: "1966" },
    { question: "Rumtek Monastery belongs to which lineage?", options: ["Gelugpa", "Kagyupa", "Nyingmapa", "Sakyapa"], answer: "Kagyupa" }
  ],
  "Pemayangtse Monastery": [
    { question: "Where is Pemayangtse Monastery located?", options: ["Gangtok", "Pelling", "Ravangla", "Namchi"], answer: "Pelling" },
    { question: "Which sect does Pemayangtse belong to?", options: ["Gelug", "Nyingma", "Kagyu", "Sakya"], answer: "Nyingma" },
    { question: "What does 'Pemayangtse' mean?", options: ["Perfect Sublime Lotus", "Sacred Hill", "Peaceful Valley", "Golden Temple"], answer: "Perfect Sublime Lotus" },
    { question: "Which dynasty built Pemayangtse?", options: ["Namgyal", "Chogyal", "Gorkha", "Tibetan"], answer: "Chogyal" },
    { question: "Which festival is held here?", options: ["Cham Dance", "Losar", "Bumchu", "Saga Dawa"], answer: "Cham Dance" },
    { question: "What is the main attraction inside Pemayangtse?", options: ["Seven-tiered wooden structure", "Golden Buddha", "Prayer wheels", "Ancient murals"], answer: "Seven-tiered wooden structure" },
    { question: "Which year was Pemayangtse founded?", options: ["1705", "1642", "1710", "1750"], answer: "1705" },
    { question: "Which nearby site is associated with Pemayangtse?", options: ["Rabdentse Ruins", "Tashiding", "Rumtek", "Phodong"], answer: "Rabdentse Ruins" },
    { question: "Which river flows near Pemayangtse?", options: ["Teesta", "Rangeet", "Rangpo", "Lachen"], answer: "Rangeet" },
    { question: "Pemayangtse is part of which Buddhist school?", options: ["Gelug", "Nyingma", "Kagyu", "Sakya"], answer: "Nyingma" }
  ],
  "Enchey Monastery": [
  {
    question: "Where is Enchey Monastery located?",
    options: ["Pelling", "Gangtok", "Namchi", "Ravangla"],
    answer: "Gangtok"
  },
  {
    question: "What does the name 'Enchey' mean?",
    options: ["Peaceful Place", "Solitary", "Sacred Hill", "Hidden Temple"],
    answer: "Solitary"
  },
  {
    question: "Which Buddhist sect is Enchey Monastery associated with?",
    options: ["Gelug", "Nyingma", "Kagyu", "Sakya"],
    answer: "Nyingma"
  },
  {
    question: "Who is believed to have blessed the site of Enchey Monastery?",
    options: ["Guru Padmasambhava", "Lama Druptob Karpo", "Karmapa", "Dalai Lama"],
    answer: "Lama Druptob Karpo"
  },
  {
    question: "Which festival is famously celebrated at Enchey Monastery?",
    options: ["Pang Lhabsol", "Detor Cham", "Losar", "Bumchu"],
    answer: "Detor Cham"
  },
  {
    question: "What unique architectural feature tops Enchey Monastery?",
    options: ["Silver dome", "Golden cupola", "Prayer flags tower", "Stone spire"],
    answer: "Golden cupola"
  },
  {
    question: "Which mountain range is visible from Enchey Monastery on a clear day?",
    options: ["Himalayas", "Kanchendzonga", "Nilgiris", "Aravallis"],
    answer: "Kanchendzonga"
  },
  {
    question: "In which year was Enchey Monastery rebuilt in its current form?",
    options: ["1909", "1840", "1950", "1925"],
    answer: "1909"
  },
  {
    question: "Which dance is performed during the Detor Cham festival?",
    options: ["Yak Dance", "Mask Dance", "Snow Lion Dance", "Dragon Dance"],
    answer: "Mask Dance"
  },
  {
    question: "What is the etiquette for visitors at Enchey Monastery?",
    options: ["Wear bright clothes", "Remove shoes and maintain silence", "Take photos freely", "Offer coins to monks"],
    answer: "Remove shoes and maintain silence"
  }
] , "Dubdi Monastery": [
  {
    question: "Where is Dubdi Monastery located?",
    options: ["Gangtok", "Yuksom", "Namchi", "Ravangla"],
    answer: "Yuksom"
  },
  {
    question: "What does the word 'Dubdi' mean?",
    options: ["The retreat", "The summit", "The sacred", "The origin"],
    answer: "The retreat"
  },
  {
    question: "Which sect of Buddhism is Dubdi Monastery associated with?",
    options: ["Gelug", "Kagyu", "Nyingma", "Sakya"],
    answer: "Nyingma"
  },
  {
    question: "Who founded Dubdi Monastery?",
    options: ["Lhatsun Namkha Jigme", "Chogyal Phuntsog Namgyal", "Guru Padmasambhava", "Karmapa"],
    answer: "Lhatsun Namkha Jigme"
  },
  {
    question: "In which year was Dubdi Monastery established?",
    options: ["1642", "1701", "1750", "1805"],
    answer: "1701"
  },
  {
    question: "Dubdi Monastery is considered the ______ in Sikkim.",
    options: ["Largest monastery", "Oldest monastery", "Most colorful monastery", "Highest monastery"],
    answer: "Oldest monastery"
  },
  {
    question: "Which coronation event is linked to Dubdi Monastery?",
    options: ["Coronation of the first Chogyal", "Coronation of the Dalai Lama", "Coronation of the Karmapa", "Coronation of the King of Bhutan"],
    answer: "Coronation of the first Chogyal"
  },
  {
    question: "What is the architectural style of Dubdi Monastery?",
    options: ["Dravidian", "Tibetan", "Mughal", "Colonial"],
    answer: "Tibetan"
  },
  {
    question: "Which pilgrimage circuit includes Dubdi Monastery?",
    options: ["Char Dham", "Buddhist Golden Triangle", "Sikkim Heritage Trail", "Norbugang Religious Circuit"],
    answer: "Norbugang Religious Circuit"
  },
  {
    question: "How can visitors reach Dubdi Monastery?",
    options: ["By cable car", "By helicopter", "By trekking", "By boat"],
    answer: "By trekking"
  }
]
  ,"Tashiding Monastery": [
  {
    question: "Where is Tashiding Monastery located?",
    options: ["Yuksom", "Pelling", "Gangtok", "Namchi"],
    answer: "Pelling"
  },
  {
    question: "Which river flows near Tashiding Monastery?",
    options: ["Teesta", "Rathong Chu", "Rangeet", "Rangpo"],
    answer: "Rathong Chu"
  },
  {
    question: "What does 'Tashiding' mean?",
    options: ["Sacred Hill", "Devoted Central Glory", "Peaceful Retreat", "Lotus of Wisdom"],
    answer: "Devoted Central Glory"
  },
  {
    question: "Which sect of Buddhism is Tashiding Monastery associated with?",
    options: ["Gelug", "Nyingma", "Kagyu", "Sakya"],
    answer: "Nyingma"
  },
  {
    question: "Who founded Tashiding Monastery?",
    options: ["Guru Padmasambhava", "Ngadak Sempa Chempo Phunshok Rigzing", "Lhatsun Namkha Jigme", "Chogyal Phuntsog Namgyal"],
    answer: "Ngadak Sempa Chempo Phunshok Rigzing"
  },
  {
    question: "In which year was Tashiding Monastery established?",
    options: ["1641", "1705", "1750", "1801"],
    answer: "1641"
  },
  {
    question: "Which festival is famously celebrated at Tashiding Monastery?",
    options: ["Losar", "Detor Cham", "Bumchu", "Saga Dawa"],
    answer: "Bumchu"
  },
  {
    question: "What is the Bumchu festival known for?",
    options: ["Mask dances", "Water prophecy ritual", "Fire offerings", "Prayer flag ceremony"],
    answer: "Water prophecy ritual"
  },
  {
    question: "How many chortens are found in the Tashiding Monastery complex?",
    options: ["12", "25", "41", "60"],
    answer: "41"
  },
  {
    question: "What is the significance of the Thong-Wa-rang-Dol chorten?",
    options: ["It houses relics of the Buddha", "It is the tallest chorten", "It purifies sins by sight", "It marks the monastery’s boundary"],
    answer: "It purifies sins by sight"
  }
]
,"Phodong Monastery": [
  {
    question: "Where is Phodong Monastery located?",
    options: ["Namchi", "Yuksom", "Gangtok", "North Sikkim"],
    answer: "North Sikkim"
  },
  {
    question: "Which Buddhist sect is Phodong Monastery associated with?",
    options: ["Gelug", "Kagyu", "Nyingma", "Sakya"],
    answer: "Kagyu"
  },
  {
    question: "Who rebuilt Phodong Monastery in the early 20th century?",
    options: ["Sidkeong Tulku Namgyal", "Chogyal Phuntsog Namgyal", "Lhatsun Namkha Jigme", "Guru Padmasambhava"],
    answer: "Sidkeong Tulku Namgyal"
  },
  {
    question: "Which spiritual leader is linked to the founding of Phodong Monastery?",
    options: ["Dalai Lama", "9th Karmapa", "Panchen Lama", "Rinpoche"],
    answer: "9th Karmapa"
  },
  {
    question: "What is Phodong Monastery famous for?",
    options: ["Golden stupa", "Ancient murals and frescoes", "Largest prayer wheel", "Underground meditation hall"],
    answer: "Ancient murals and frescoes"
  },
  {
    question: "Approximately how many monks reside at Phodong Monastery?",
    options: ["100", "260", "400", "50"],
    answer: "260"
  },
  {
    question: "Which festival is celebrated at Phodong Monastery?",
    options: ["Losar", "Cham Dance Festival", "Bumchu", "Saga Dawa"],
    answer: "Cham Dance Festival"
  },
  {
    question: "What is the main prayer hall in Phodong Monastery called?",
    options: ["Dukhang", "Gompa", "Stupa", "Mandala"],
    answer: "Dukhang"
  },
  {
    question: "Which architectural elements are prominent in Phodong Monastery?",
    options: ["Dravidian pillars", "Tibetan frescoes and thangka paintings", "Mughal domes", "Colonial arches"],
    answer: "Tibetan frescoes and thangka paintings"
  },
  {
    question: "What is the best time to visit Phodong Monastery for its annual festival?",
    options: ["March-April", "October-November", "December", "June-July"],
    answer: "December"
  }
]
 ,"Ralang Monastery": [
  {
    question: "Where is Ralang Monastery located?",
    options: ["North Sikkim", "East Sikkim", "South Sikkim", "West Sikkim"],
    answer: "South Sikkim"
  },
  {
    question: "Which Buddhist sect is Ralang Monastery associated with?",
    options: ["Gelug", "Kagyu", "Nyingma", "Sakya"],
    answer: "Kagyu"
  },
  {
    question: "What is the name of the newer monastery built near Ralang?",
    options: ["Palchen Choeling Monastic Institute", "Rumtek Dharma Centre", "Pemayangtse Retreat", "Lingdum Academy"],
    answer: "Palchen Choeling Monastic Institute"
  },
  {
    question: "Who built the new Ralang Monastery in 1995?",
    options: ["Dalai Lama", "12th Gyaltsab Rinpoche", "Karmapa", "Ngadak Lama"],
    answer: "12th Gyaltsab Rinpoche"
  },
  {
    question: "Which festival is celebrated at Ralang Monastery?",
    options: ["Losar", "Pang Lhabsol", "Bumchu", "Detor Cham"],
    answer: "Pang Lhabsol"
  },
  {
    question: "Which mountain is worshipped during Pang Lhabsol?",
    options: ["Mount Everest", "Mount Kanchenjunga", "Mount Siniolchu", "Mount Kabru"],
    answer: "Mount Kanchenjunga"
  },
  {
    question: "What architectural style is Ralang Monastery built in?",
    options: ["Mughal", "Tibetan", "Dravidian", "Colonial"],
    answer: "Tibetan"
  },
  {
    question: "What is the significance of the rice blessing legend at Ralang?",
    options: ["Rice was offered to monks", "Rice was thrown from Tibet by the 9th Karmapa", "Rice was used in rituals", "Rice was grown in sacred fields"],
    answer: "Rice was thrown from Tibet by the 9th Karmapa"
  },
  {
    question: "Which dance is performed during Mahakala festival at Ralang?",
    options: ["Yak Dance", "Snow Lion Dance", "Cham Mask Dance", "Dragon Dance"],
    answer: "Cham Mask Dance"
  },
  {
    question: "How far is Ralang Monastery from Ravangla?",
    options: ["5 km", "10 km", "13 km", "20 km"],
    answer: "13 km"
  }
]
 ,"Lingdum Monastery": [
  {
    question: "Where is Lingdum Monastery located?",
    options: ["Ranka", "Pakyong", "Namchi", "Yuksom"],
    answer: "Ranka"
  },
  {
    question: "Which Buddhist sect is Lingdum Monastery associated with?",
    options: ["Gelug", "Kagyu", "Nyingma", "Sakya"],
    answer: "Kagyu"
  },
  {
    question: "Who founded Lingdum Monastery?",
    options: ["12th Zurmang Gharwang Rinpoche", "Dalai Lama", "Karmapa", "Lhatsun Chempo"],
    answer: "12th Zurmang Gharwang Rinpoche"
  },
  {
    question: "What is another name for Lingdum Monastery?",
    options: ["Rumtek Monastery", "Ranka Monastery", "Pemayangtse Monastery", "Dubdi Monastery"],
    answer: "Ranka Monastery"
  },
  {
    question: "What is the centerpiece inside Lingdum’s prayer hall?",
    options: ["Golden Buddha statue", "Prayer wheel", "Thangka painting", "Stone stupa"],
    answer: "Golden Buddha statue"
  },
  {
    question: "Which festival is celebrated at Lingdum Monastery?",
    options: ["Gutor", "Losar", "Bumchu", "Pang Lhabsol"],
    answer: "Gutor"
  },
  {
    question: "What is the significance of the Gutor festival?",
    options: ["Victory of good over evil", "Harvest celebration", "Rain prayer", "Mountain worship"],
    answer: "Victory of good over evil"
  },
  {
    question: "How far is Lingdum Monastery from Gangtok?",
    options: ["5 km", "10 km", "16 km", "25 km"],
    answer: "16 km"
  },
  {
    question: "What makes Lingdum Monastery unique?",
    options: ["Oldest in Sikkim", "Most remote", "Most picturesque", "Largest monastery"],
    answer: "Most picturesque"
  },
  {
    question: "What is the best time to visit Lingdum Monastery?",
    options: ["July-August", "March-May", "December-January", "June-July"],
    answer: "March-May"
  }
]

 ,"Kartok Monastery": [
  {
    question: "Where is Kartok Monastery located?",
    options: ["Gangtok", "Yuksom", "Namchi", "Ravangla"],
    answer: "Yuksom"
  },
  {
    question: "Which Buddhist sect does Kartok Monastery follow?",
    options: ["Gelug", "Kagyu", "Nyingma", "Sakya"],
    answer: "Nyingma"
  },
  {
    question: "What is Kartok Monastery known for?",
    options: ["Largest monastery", "Colorful architecture", "Underground shrine", "Stone carvings"],
    answer: "Colorful architecture"
  },
  {
    question: "Kartok Monastery is located near which lake?",
    options: ["Tsomgo Lake", "Kartok Lake", "Chayatal Lake", "Rathong Lake"],
    answer: "Kartok Lake"
  },
  {
    question: "Who founded Kartok Monastery?",
    options: ["Chogyal Thutob Namgyal", "Lhatsun Chempo", "Guru Padmasambhava", "Ngadak Lama"],
    answer: "Chogyal Thutob Namgyal"
  },
  {
    question: "What is the best time to visit Kartok Monastery?",
    options: ["March to June", "July to September", "October to December", "January to February"],
    answer: "March to June"
  },
  {
    question: "What is the architectural style of Kartok Monastery?",
    options: ["Tibetan", "Mughal", "Dravidian", "Colonial"],
    answer: "Tibetan"
  },
  {
    question: "Which nearby monastery forms a trio with Kartok?",
    options: ["Dubdi Monastery", "Tashiding Monastery", "Rumtek Monastery", "Phodong Monastery"],
    answer: "Dubdi Monastery"
  },
  {
    question: "What colors dominate Kartok Monastery’s design?",
    options: ["Blue and white", "Red, white, and yellow", "Green and gold", "Black and silver"],
    answer: "Red, white, and yellow"
  },
  {
    question: "Which activity is popular near Kartok Monastery?",
    options: ["Boating", "Photography", "Paragliding", "Rock climbing"],
    answer: "Photography"
  }
]
, "Rinchenpong Monastery": [
  {
    question: "Where is Rinchenpong Monastery located?",
    options: ["East Sikkim", "West Sikkim", "South Sikkim", "North Sikkim"],
    answer: "West Sikkim"
  },
  {
    question: "When was Rinchenpong Monastery established?",
    options: ["1730", "1800", "1642", "1905"],
    answer: "1730"
  },
  {
    question: "Who founded Rinchenpong Monastery?",
    options: ["Ngadakpa Lama", "Lhatsun Chempo", "Guru Padmasambhava", "Karmapa"],
    answer: "Ngadakpa Lama"
  },
  {
    question: "What unique statue is found at Rinchenpong Monastery?",
    options: ["Golden Buddha", "Ati Buddha in Yab-Yum position", "Avalokiteshvara", "Guru Rinpoche"],
    answer: "Ati Buddha in Yab-Yum position"
  },
  {
    question: "What is the elevation of Rinchenpong Monastery?",
    options: ["3,000 ft", "4,500 ft", "5,500 ft", "6,000 ft"],
    answer: "5,500 ft"
  },
]
};

let selectedMonastery = "";
let current = 0;
let coins = 0;
let answered = false;

  function initMonasteryList() {
  const buttons = document.querySelectorAll(".ripple-btn");
  buttons.forEach(btn => {
    btn.onclick = () => startQuiz(btn.textContent);
  });
}
window.onload = initMonasteryList;



function scrollCarousel(direction) {
  const track = document.getElementById("monastery-list");
  track.scrollLeft += direction * 160;
}

function startQuiz(monastery) {
  selectedMonastery = monastery;
  current = 0;
  coins = 0;
  document.getElementById("monastery-select").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";
  document.getElementById("nextBtn").style.display = "inline-block";
  loadQuestion();
}

function goBack() {
  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("monastery-select").style.display = "block";
  document.getElementById("nextBtn").style.display = "inline-block";
}

function loadQuestion() {
  const q = quizData[selectedMonastery][current];
  document.getElementById("question").textContent = q.question;
  document.getElementById("progress").textContent = `Question ${current + 1} of ${quizData[selectedMonastery].length}`;
  document.getElementById("coins").textContent = `💰 Coins: ${coins}`;
  document.getElementById("feedback").textContent = "";
  document.getElementById("options").innerHTML = "";

  q.options.forEach(opt => {
    const li = document.createElement("li");
    li.textContent = opt;
    li.onclick = () => checkAnswer(li, q.answer);
    document.getElementById("options").appendChild(li);
  });

  answered = false;
}

function checkAnswer(selected, correct) {
  if (answered) return;
  if (selected.textContent === correct) {
    coins++;
    selected.style.backgroundColor = "#c8e6c9"; // greenish
    document.getElementById("feedback").textContent = "✅ Correct! You've earned 1 coin.";
  } else {
    selected.style.backgroundColor = "#ffcdd2"; // reddish
    document.getElementById("feedback").textContent = `❌ Incorrect. Correct answer: ${correct}`;
  }
  document.getElementById("coins").textContent = `💰 Coins: ${coins}`;
  answered = true;

}



function nextQuestion() {
  if (current < quizData[selectedMonastery].length - 1) {
    current++;
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.querySelector(".question-box").innerHTML = `
    <h2>🎉 Quiz Complete!</h2>
    <p>You earned ${coins} coins out of ${quizData[selectedMonastery].length}!</p>
  `;
  document.getElementById("progress").textContent = "Done!";
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("feedback").textContent = "";
}

window.onload = initMonasteryList;



