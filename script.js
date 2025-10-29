// 🌙 테마 토글 기능
const toggleBtn = document.getElementById('themeToggle');
toggleBtn?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️ 라이트모드' : '🌙 다크모드';
});

// 📌 모달 팝업 기능
function openModal(text) {
  const modalText = document.getElementById('modalText');
  const modal = document.getElementById('myModal');
  if (modal && modalText) {
    modalText.textContent = text;
    modal.style.display = 'block';
  }
}

function closeModal() {
  const modal = document.getElementById('myModal');
  if (modal) modal.style.display = 'none';
}

window.onclick = function (event) {
  const modal = document.getElementById('myModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

function slideLeft() {
  document.getElementById("sliderTrack")?.scrollBy({ left: -260, behavior: "smooth" });
}

function slideRight() {
  document.getElementById("sliderTrack")?.scrollBy({ left: 260, behavior: "smooth" });
}

let total = 5;
let answered = 0;
function markAnswer() {
  answered++;
  if (answered > total) answered = total;
  document.getElementById('progress').style.width = (answered / total * 100) + '%';
}

// 🌐 다국어 번역 기능
const translations = {
  ko: {
    hero_title: "부모님을 위한<br>딥페이크 구별 가이드",
    hero_desc: "AI로 조작된 목소리와 영상, 부모님은 안전하신가요?<br>지금 바로 확인하세요.",
    hero_button: "사례 보러가기",
    intro_title: "딥페이크란?",
    intro_body1: "딥페이크는 인공지능(AI)을 활용해 사람의 얼굴, 목소리, 말투를 실제처럼 <strong>정교하게 조작하는 기술</strong>입니다.<br>뉴스, 전화, 영상통화 등 일상 속 콘텐츠에 침투해<br>우리 부모님 세대를 <strong>속이는 수단</strong>으로 사용되고 있습니다.",
    intro_warning: "특히 부모님 세대는 기술에 익숙하지 않아 피해 가능성이 높습니다.<br>이제는 가족 모두가 함께 알아야 할 위험입니다.",
    stat_title: "📈 딥페이크 범죄 증가율",
    stat_source: "출처: 사이버 범죄 보고서 2024",
    structure_title: "Website Structure",
    s1_title: "01 소개",
    s1_desc: "딥페이크가 무엇이고 왜 위험한지 간략히 소개",
    s2_title: "02 실제 사례",
    s2_desc: "부모님 세대를 속인 실제 사례 소개",
    s3_title: "03 예방법",
    s3_desc: "딥페이크 식별 팁 및 체크리스트 제공",
    s4_title: "04 퀴즈",
    s4_desc: "딥페이크 구별 퀴즈",
    gallery_title: "📌 실제 딥페이크 사례 갤러리",
    case1_title: "음성 사칭",
    case1_desc: "손자 목소리를 복제해 부모에게 금전을 요구",
    case2_title: "정치인 발언 조작",
    case2_desc: "가짜 영상을 퍼뜨려 여론 왜곡 유도",
    case3_title: "CEO 사칭 이메일",
    case3_desc: "딥페이크 음성으로 재무팀에 송금 지시",
    case4_title: "가짜 투자 홍보",
    case4_desc: "유명인의 얼굴을 합성한 투자 영상으로 사기",
    case5_title: "딥페이크 불법영상",
    case5_desc: "유명인 사진을 이용한 불법 유포 영상 제작",
    case6_title: "뉴스 앵커 조작",
    case6_desc: "가짜 뉴스 발표 영상 제작 및 확산",
    themeToggle: "🌙 다크모드",
    languageToggle: "🌐 English"
  },
  en: {
    hero_title: "A Deepfake Guide<br>for Your Parents",
    hero_desc: "Are your parents safe from AI-generated voices and videos?<br>Check now.",
    hero_button: "See Real Cases",
    intro_title: "What is Deepfake?",
    intro_body1: "Deepfake is a technology that uses AI to <strong>realistically manipulate</strong> a person's face, voice, and tone.<br>It penetrates everyday content such as news, phone calls, and video chats<br>and is used as a means to <strong>deceive older generations</strong>.",
    intro_warning: "Older generations are less familiar with technology, making them more vulnerable.<br>It is now a risk the whole family must be aware of.",
    stat_title: "📈 Deepfake Crime Growth",
    stat_source: "Source: Cyber Crime Report 2024",
    structure_title: "Website Structure",
    s1_title: "01 Introduction",
    s1_desc: "A brief introduction to what deepfakes are and why they are dangerous",
    s2_title: "02 Real Cases",
    s2_desc: "Videos or news reports showing real cases where parents were deceived",
    s3_title: "03 Prevention",
    s3_desc: "Tips and checklists for identifying deepfakes",
    s4_title: "04 Spot the Fake",
    s4_desc: "A quiz where users try to guess whether content is real or fake",
     gallery_title: "📌 Real Deepfake Case Gallery",
    case1_title: "Voice Impersonation",
    case1_desc: "AI voice clone of a grandson demanding money from parents",
    case2_title: "Politician Statement Fake",
    case2_desc: "Fake videos manipulated to distort public opinion",
    case3_title: "CEO Email Scam",
    case3_desc: "Deepfake voice directs finance team to transfer money",
    case4_title: "Fake Investment Promotion",
    case4_desc: "Scam video using celebrity face for investment fraud",
    case5_title: "Illegal Deepfake Videos",
    case5_desc: "Fake pornographic videos using celebrity faces",
    case6_title: "Fake News Anchor",
    case6_desc: "AI-generated anchor presenting fake news stories",

    themeToggle: "🌙 Dark Mode",
    languageToggle: "🌐 한국어"
  }
};

let currentLang = 'ko';
console.log(currentLang); // ✅ 정상


function updateLanguage() {
  const langData = translations[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.innerHTML = langData[key] || el.innerHTML;
  });
  document.getElementById('themeToggle').textContent = langData.themeToggle;
  document.getElementById('languageToggle').textContent = langData.languageToggle;
}

document.getElementById('languageToggle')?.addEventListener('click', () => {
  currentLang = currentLang === 'ko' ? 'en' : 'ko';
  updateLanguage();
});
