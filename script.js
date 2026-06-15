// ==========================================
// 1. 샘플 데이터 생성 (총 20개 고품질 일러스트 데이터셋)
// ==========================================
const dessertData = [
  {
    id: 1, name: "딸기 쇼트케이크", category: "케이크", episode: "1화",
    ingredients: "딸기, 생크림, 바닐라 시트", difficulty: "⭐⭐", sweetness: "⭐⭐⭐⭐", beauty: "⭐⭐⭐⭐",
    description: "딸기 파티시엘의 기본이자 정석! 부드럽고 가벼운 커스터드와 신선한 통딸기가 아름답게 층을 이루는 감성 가득 시그니처 케이크입니다.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 2, name: "바닐라 몽블랑", category: "케이크", episode: "3화",
    ingredients: "밤 페이스트, 머랭, 생크림", difficulty: "⭐⭐⭐⭐", sweetness: "⭐⭐⭐", beauty: "⭐⭐⭐⭐⭐",
    description: "산의 형태를 모티브로 한 예술적인 자태. 달콤하면서도 깊은 밤의 풍미와 화려한 국수 모양 짜임 크림이 일품인 명품 디저트.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 3, name: "로즈 마카롱 패키지", category: "마카롱", episode: "5화",
    ingredients: "아몬드 가루, 로즈워터, 가나슈", difficulty: "⭐⭐⭐⭐", sweetness: "⭐⭐⭐⭐⭐", beauty: "⭐⭐⭐⭐⭐",
    description: "바삭한 꼬끄 속에 쫀득하게 스며든 장미 향기 가득 크림. 스위트 왕자 바닐라 기운을 듬뿍 받아 탄생한 고급 티푸드.",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 4, name: "프렌치 밀푀유", category: "케이크", episode: "7화",
    ingredients: "퍼프 페이스트리, 커스터드 크림", difficulty: "⭐⭐⭐⭐⭐", sweetness: "⭐⭐⭐", beauty: "⭐⭐⭐⭐",
    description: "천 개의 잎사귀라는 뜻처럼 얇게 바삭이는 수많은 페이스트리 결 사이에 달콤 쌉싸름한 크림이 조화를 이루는 명품 가공 방식.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 5, name: "다크 초콜릿 무스", category: "초콜릿", episode: "9화",
    ingredients: "카카오 72%, 달걀흰자, 에스프레소", difficulty: "⭐⭐⭐", sweetness: "⭐⭐⭐", beauty: "⭐⭐⭐",
    description: "입안에 넣자마자 구름처럼 몽글몽글 사르르 녹아내리는 딥한 다크 초콜릿 무스입니다. 어른스러운 쌉싸름함이 매력적.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 6, name: "샤인머스캣 과일 타르트", category: "타르트", episode: "12화",
    ingredients: "샤인머스캣, 크림치즈 베이스", difficulty: "⭐⭐⭐", sweetness: "⭐⭐⭐⭐", beauty: "⭐⭐⭐⭐⭐",
    description: "바삭한 타르트 쉘 위로 보석처럼 빛나는 가득한 과일들! 새콤달콤한 비주얼이 그랑프리 예선에서 극찬을 받은 조합.",
    image: "https://images.unsplash.com/photo-1519915028121-75194a478fe1?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 7, name: "바닐라 빈 슈크림", category: "기타", episode: "2화",
    ingredients: "슈 페이스트리, 바닐라 커스터드", difficulty: "⭐⭐", sweetness: "⭐⭐⭐⭐", beauty: "⭐⭐",
    description: "얇고 바삭한 공기층 슈 안에 천연 바닐라 빈이 아낌없이 박힌 수제 크림을 꽉 채워 한 입 베어 물면 행복이 가득 퍼집니다.",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 8, name: "쇼콜라 봉봉 세트", category: "초콜릿", episode: "15화",
    ingredients: "가나슈, 프랄린, 쉘 초콜릿", difficulty: "⭐⭐⭐⭐⭐", sweetness: "⭐⭐⭐⭐", beauty: "⭐⭐⭐⭐⭐",
    description: "보석상자처럼 반짝이는 미니 가나슈 예술품들. 각 알마다 서로 다른 시럽과 시크릿 견과 가루 풍미를 담고 있습니다.",
    image: "https://images.unsplash.com/photo-1548907040-4d42b52125ca?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 9, name: "레몬 유자 마들렌", category: "쿠키", episode: "4화",
    ingredients: "레몬 제스트, 글레이즈 슈가", difficulty: "⭐", sweetness: "⭐⭐⭐", beauty: "⭐⭐⭐",
    description: "이쁜 조개 모양으로 구워낸 촉촉한 마들렌. 유기농 레몬 글레이징 처리를 더해 입가심 피크닉용 간식으로 안성맞춤.",
    image: "https://images.unsplash.com/photo-1622814981855-32a22513467f?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 10, name: "블루베리 쉬폰 케이크", category: "케이크", episode: "18화",
    ingredients: "블루베리 퓨레, 쉬폰 시트", difficulty: "⭐⭐⭐", sweetness: "⭐⭐⭐", beauty: "⭐⭐⭐⭐",
    description: "가운데가 뚫린 푹신한 도넛 형태 시트에 연보랏빛 생크림을 얹어 하늘거리는 드레스 깃처럼 우아하게 마무리한 쉬폰.",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13636?w=500&auto=format&fit=crop&q=60"
  },
  // 11~20번 샘플 자동 확장 구조화 데이터 추가
  { id: 11, name: "라즈베리 피스타치오 타르트", category: "타르트", episode: "20화", ingredients: "피스타치오 크림, 라즈베리", difficulty: "⭐⭐⭐⭐", sweetness: "⭐⭐⭐", beauty: "⭐⭐⭐⭐⭐", description: "고소한 피스타치오 무스 위 붉은 보석 같은 산딸기가 듬뿍.", image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=500&auto=format&fit=crop&q=60" },
  { id: 12, name: "초코 브라우니 쿠키", category: "쿠키", episode: "6화", ingredients: "다크 코코아 가루, 청크 칩", difficulty: "⭐", sweetness: "⭐⭐⭐⭐⭐", beauty: "⭐⭐", description: "겉은 바삭하고 속은 꾸덕한 진한 퍼지 초콜릿 텍스처.", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&auto=format&fit=crop&q=60" },
  { id: 13, name: "말차 그린티 롤케이크", category: "케이크", episode: "11화", ingredients: "보성 말차, 유기농 가포 크림", difficulty: "⭐⭐⭐", sweetness: "⭐⭐", beauty: "⭐⭐⭐", description: "달지 않고 은은하게 쌉싸름한 풍미가 돋보이는 롤 크림 디저트.", image: "https://images.unsplash.com/photo-1535141192574-5d4897c13636?w=500&auto=format&fit=crop&q=60" },
  { id: 14, name: "프레지에 케이크", category: "케이크", episode: "22화", ingredients: "무슬린 크림, 딸기 단면", difficulty: "⭐⭐⭐⭐⭐", sweetness: "⭐⭐⭐⭐", beauty: "⭐⭐⭐⭐⭐", description: "벽면에 빽빽하게 세워진 딸기 단면 단정함이 돋보이는 프랑스 전통식 딸기 케이크.", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&auto=format&fit=crop&q=60" },
  { id: 15, name: "티라미수 클래시코", category: "케이크", episode: "8화", ingredients: "마스카포네 치즈, 에스프레소 시럽", difficulty: "⭐⭐", sweetness: "⭐⭐⭐⭐", beauty: "⭐⭐⭐", description: "나를 끌어올린다는 뜻 그대로 기분이 최고조로 좋아지는 에스프레소 스폰지 레이어 치즈 케이크.", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&auto=format&fit=crop&q=60" },
  { id: 16, name: "얼그레이 파운드 케이크", category: "케이크", episode: "14화", ingredients: "홍차 잎 가루, 오렌지 필", difficulty: "⭐⭐", sweetness: "⭐⭐", beauty: "⭐⭐⭐", description: "입안 가득 베르가못 향기가 번지는 영국의 정통 애프터눈 단골 파운드 파이.", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=60" },
  { id: 17, name: "초콜릿 에클레어", category: "기타", episode: "19화", ingredients: "슈 반죽, 쇼콜라 가나슈 코팅", difficulty: "⭐⭐⭐⭐", sweetness: "⭐⭐⭐⭐", beauty: "⭐⭐⭐⭐", description: "번개처럼 빠르게 먹어치운다는 유래에 맞게 극상의 부드러움을 가진 롱 모양의 슈.", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop&q=60" },
  { id: 18, name: "얼그레이 마카롱", category: "마카롱", episode: "25화", ingredients: "트와이닝 홍차, 밀크 가나슈", difficulty: "⭐⭐⭐⭐", sweetness: "⭐⭐⭐⭐", beauty: "⭐⭐⭐⭐", description: "은은한 파스텔 톤 가루 칼라 속 깊고 진한 밀크티 샌드 크림.", image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=500&auto=format&fit=crop&q=60" },
  { id: 19, name: "애플 시나몬 크럼블", category: "타르트", episode: "17화", ingredients: "사과 조림, 소보로 크럼블", difficulty: "⭐⭐⭐", sweetness: "⭐⭐⭐⭐", beauty: "⭐⭐⭐", description: "오븐에서 갓 꺼내 아삭 씹히는 사과 조각과 계피 향 소보로 조화.", image: "https://images.unsplash.com/photo-1519915028121-75194a478fe1?w=500&auto=format&fit=crop&q=60" },
  { id: 20, name: "화이트 바닐라 쿠키", category: "쿠키", episode: "10화", ingredients: "화이트 초코칩, 마카다미아넛", difficulty: "⭐", sweetness: "⭐⭐⭐⭐", beauty: "⭐⭐", description: "고소한 견과류와 화이트 초코가 아낌없이 박혀 씹는 맛이 풍부한 수제 과자.", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&auto=format&fit=crop&q=60" }
];

// 상태 관리 변수들
let currentFilteredData = [...dessertData];
let currentIndex = 0;
let myCollection = JSON.parse(localStorage.getItem('patissiere_collection')) || [];
let recentViews = [];
let slideshowInterval = null;

// ==========================================
// 2. 초기 로드 및 배경 애니메이션 설정
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  createFloatingBg();
  updateMainCard();
  updateProgress();
  renderTop5();
  renderMyBookGrid();
  setRecommendedDessert();
  
  // 마우스 움직임 감지 커서 연동
  const cursor = document.getElementById('custom-cursor');
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  // 클릭 시 하트/별 파티클 생성 효과음 대용 애니메이션
  document.addEventListener('click', (e) => {
    createClickParticle(e.clientX, e.clientY);
  });

  // 호버 스타일 바인딩용 클래스 부여
  document.querySelectorAll('button, input, .recent-thumb').forEach(elem => {
    elem.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
    elem.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
  });
});

// 배경 둥둥 떠다니는 딸기/마카롱 생성기
function createFloatingBg() {
  const container = document.querySelector('.floating-bg-elements');
  const items = ['🍓', '✨', '💖', '🧁', '⭐', '🎂'];
  for (let i = 0; i < 25; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bg-bubble';
    bubble.innerText = items[Math.floor(Math.random() * items.length)];
    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.animationDelay = Math.random() * 8 + 's';
    bubble.style.fontSize = (Math.random() * 20 + 16) + 'px';
    container.appendChild(bubble);
  }
}

// 클릭 파티클 효과 함수
function createClickParticle(x, y) {
  const container = document.getElementById('particle-container');
  const shapes = ['💖', '⭐', '✨', '🍓'];
  for (let i = 0; i < 6; i++) {
    const p = document.createElement('div');
    p.className = 'click-particle';
    p.innerText = shapes[Math.floor(Math.random() * shapes.length)];
    p.style.left = x + 'px';
    p.style.top = y + 'px';
    
    // 폭발 방향 분산 계산
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 60 + 30;
    p.style.setProperty('--mx', Math.cos(angle) * distance + 'px');
    p.style.setProperty('--my', Math.sin(angle) * distance + 'px');
    
    container.appendChild(p);
    setTimeout(() => p.remove(), 600);
  }
}

// ==========================================
// 3. UI 화면 화면 전환 (Intro -> Main)
// ==========================================
document.getElementById('start-btn').addEventListener('click', () => {
  const intro = document.getElementById('intro-screen');
  const main = document.getElementById('main-screen');
  
  intro.style.opacity = '0';
  setTimeout(() => {
    intro.classList.remove('active');
    main.classList.add('active');
    setTimeout(() => main.style.opacity = '1', 50);
  }, 600);
});

// 상단 헤더 메뉴 탭 기능 전환 구현
const navItems = document.querySelectorAll('.nav-menu .nav-item');
const tabContents = document.querySelectorAll('.tab-content');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(n => n.classList.remove('active'));
    item.classList.add('active');
    
    const target = item.getAttribute('data-target');
    tabContents.forEach(content => {
      content.classList.remove('active');
      if (content.id === target || (target === 'home-section' && content.id === 'encyclopedia-section')) {
        content.classList.add('active');
      }
    });
  });
});

// ==========================================
// 4. 슬라이더 메인 카드 데이터 업데이트 핸들러
// ==========================================
function updateMainCard() {
  if (currentFilteredData.length === 0) return;
  const currentDessert = currentFilteredData[currentIndex];

  document.getElementById('main-dessert-img').src = currentDessert.image;
  document.getElementById('main-dessert-name').innerText = currentDessert.name;
  document.getElementById('main-dessert-cat').innerText = currentDessert.category;
  document.getElementById('main-dessert-desc').innerText = currentDessert.description;
  document.getElementById('info-ep').innerText = currentDessert.episode;
  document.getElementById('info-ing').innerText = currentDessert.ingredients;
  document.getElementById('info-diff').innerText = currentDessert.difficulty;
  document.getElementById('info-sweet').innerText = currentDessert.sweetness;
  document.getElementById('info-beauty').innerText = currentDessert.beauty;

  // 최근 본 목록 관리 (중복 제거 후 배열 처리에 추가)
  recentViews = recentViews.filter(item => item.id !== currentDessert.id);
  recentViews.unshift(currentDessert);
  if (recentViews.length > 6) recentViews.pop();
  renderRecentViews();
}

// 슬라이더 좌우 버튼 클릭 리스너
document.getElementById('prev-btn').addEventListener('click', () => {
  if (currentIndex > 0) currentIndex--;
  else currentIndex = currentFilteredData.length - 1;
  updateMainCard();
});

document.getElementById('next-btn').addEventListener('click', () => {
  if (currentIndex < currentFilteredData.length - 1) currentIndex++;
  else currentIndex = 0;
  updateMainCard();
});

// ==========================================
// 5. 실시간 검색 및 카테고리 필터링 알고리즘
// ==========================================
const searchInput = document.getElementById('search-input');
const catButtons = document.querySelectorAll('.cat-btn');

function filterData() {
  const query = searchInput.value.toLowerCase().trim();
  const activeCatBtn = document.querySelector('.cat-btn.active');
  const category = activeCatBtn ? activeCatBtn.getAttribute('data-cat') : 'all';

  currentFilteredData = dessertData.filter(dessert => {
    const matchQuery = dessert.name.toLowerCase().includes(query) || dessert.ingredients.toLowerCase().includes(query);
    const matchCategory = (category === 'all' || dessert.category === category);
    return matchQuery && matchCategory;
  });

  currentIndex = 0;
  updateMainCard();
}

searchInput.addEventListener('input', filterData);
catButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    catButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterData();
  });
});

// ==========================================
// 6. 도감 수집, 로컬스토리지 저장 및 애니메이션 모달
// ==========================================
document.getElementById('action-collect').addEventListener('click', () => {
  const currentDessert = currentFilteredData[currentIndex];
  if (!myCollection.includes(currentDessert.id)) {
    myCollection.push(currentDessert.id);
    localStorage.setItem('patissiere_collection', JSON.stringify(myCollection));
    
    // 진척도 정보 및 화면 업데이트
    updateProgress();
    renderMyBookGrid();
    
    // NEW DESSERT 발견 알림 팝업 애니메이션 효과
    triggerNewDessertModal(currentDessert);
  } else {
    alert('이미 나의 도감에 소장 수집된 디저트입니다! 💕');
  }
});

function triggerNewDessertModal(dessert) {
  const modal = document.getElementById('new-dessert-modal');
  document.getElementById('modal-dessert-name').innerText = `${dessert.name} 발견!`;
  document.getElementById('modal-dessert-img-wrap').innerHTML = `<img src="${dessert.image}" alt="">`;
  
  modal.classList.add('active');
  setTimeout(() => {
    modal.classList.remove('active');
  }, 2500); // 2.5초 후 자동으로 고급스럽게 사라짐
}

// 완성도 수치 갱신 계산 연동
function updateProgress() {
  const total = dessertData.length;
  const collected = myCollection.length;
  const percent = Math.round((collected / total) * 100);

  document.getElementById('progress-count').innerText = `${collected} / ${total}`;
  document.getElementById('progress-percent').innerText = `${percent}%`;
  document.getElementById('progress-bar-inner').style.width = `${percent}%`;
}

// ==========================================
// 7. 자동 슬라이드쇼 & 가상 사진 저장 처리
// ==========================================
const slideshowBtn = document.getElementById('action-slideshow');
slideshowBtn.addEventListener('click', () => {
  if (slideshowInterval) {
    // 슬라이드쇼 중단 정지 처리
    clearInterval(slideshowInterval);
    slideshowInterval = null;
    slideshowBtn.innerText = "🎞️ 자동 슬라이드 쇼 (OFF)";
    slideshowBtn.style.background = "#fffdf9";
  } else {
    // 5초 간격 전환 구동 시작
    slideshowBtn.innerText = "🌸 슬라이드 감상중 (ON)";
    slideshowBtn.style.background = "linear-gradient(135deg, #e5dbff, #b197fc)";
    slideshowInterval = setInterval(() => {
      document.getElementById('next-btn').click();
    }, 5000);
  }
});

// 이미지 URL 새 창 가상 다운로드 브릿지 유도
document.getElementById('action-download').addEventListener('click', () => {
  const currentDessert = currentFilteredData[currentIndex];
  window.open(currentDessert.image, '_blank');
});

// ==========================================
// 8. 서브 뷰 (추천, 인기, 나의도감, 최근본상품) 렌더링
// ==========================================
function setRecommendedDessert() {
  const rand = dessertData[Math.floor(Math.random() * dessertData.length)];
  document.getElementById('rec-img').src = rand.image;
  document.getElementById('rec-name').innerText = rand.name;
  
  document.getElementById('recommend-card').addEventListener('click', () => {
    const findIndex = currentFilteredData.findIndex(d => d.id === rand.id);
    if(findIndex !== -1) {
      currentIndex = findIndex;
      updateMainCard();
    }
  });
}

function renderTop5() {
  const listContainer = document.getElementById('top5-list');
  listContainer.innerHTML = '';
  // 상위 5개 임의 선정 및 매핑
  dessertData.slice(0, 5).forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'top5-item';
    li.innerHTML = `<span class="top5-rank">${index + 1}</span> <span>${item.name}</span>`;
    listContainer.appendChild(li);
  });
}

function renderRecentViews() {
  const container = document.getElementById('recent-list');
  container.innerHTML = '';
  recentViews.forEach(item => {
    const img = document.createElement('img');
    img.src = item.image;
    img.className = 'recent-thumb';
    img.title = item.name;
    img.addEventListener('click', () => {
      const idx = currentFilteredData.findIndex(d => d.id === item.id);
      if (idx !== -1) {
        currentIndex = idx;
        updateMainCard();
      }
    });
    container.appendChild(img);
  });
}

// 나의 도감 수집 상태 렌더링 (미획득 시 ???? 처리 비밀카드 오픈 형태)
function renderMyBookGrid() {
  const grid = document.getElementById('my-book-grid');
  grid.innerHTML = '';

  dessertData.forEach(item => {
    const isCollected = myCollection.includes(item.id);
    const card = document.createElement('div');
    card.className = `book-card glass-panel ${isCollected ? '' : 'locked'}`;

    if (isCollected) {
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h4>${item.name}</h4>
        <small style="color: var(--pink-dark); font-weight:bold;">${item.category}</small>
      `;
      card.addEventListener('click', () => {
        document.querySelector('.nav-item[data-target="encyclopedia-section"]').click();
        const idx = currentFilteredData.findIndex(d => d.id === item.id);
        if (idx !== -1) {
          currentIndex = idx;
          updateMainCard();
        }
      });
    } else {
      card.innerHTML = `
        <img src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=300" alt="잠금">
        <h4>❓ ????</h4>
        <small>미획득 도감</small>
      `;
    }
    grid.appendChild(card);
  });
}
