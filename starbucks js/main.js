// MAIN HEADER
// SEARCH

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector("input");
//searchE1. 이렇게 범위를 좁혀서 검색할 수 있음
const searchIconEl = searchEl.querySelector("span");

let isFocused = false;
// 포커스가 갔는지 전역변수로써 확인

let isNotSearchClick = false;

document.addEventListener("click", function (e) {
  if (!e.target.classList.contains("material-symbols-outlined")) {
    isNotSearchClick = true;
  } else {
    isNotSearchClick = false;
  }
})

searchIconEl.addEventListener("click", function () {
  if (!searchEl.classList.contains("active")) {
    searchEl.classList.add("active");
    searchInputEl.focus();
    searchInputEl.setAttribute("placeholder", "통합검색");
  } // 코드 이렇게 짜면 안되고 UX 바꿔야 함. 안좋은거임.
  else if (isNotSearchClick) {
    searchEl.focus();
    searchInputEl.setAttribute("placeholder", "통합검색");
    isNotSearchClick = false;
  } else {
    searchEl.classList.remove("active");
  }
})

searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute("placeholder", "");
})


// SWIPER
// SWIPER NOTICE
const swiperNotice = new Swiper(".notice .inner .inner__left .swiper", {
  direction: "vertical",
  loop: true,
  autoplay: true,
});

// SWIPER PROMOTION
const swiperPromotion = new Swiper(".notice .promotion .swiper", {
  direction: "horizontal",
  // 수평방향은 기본적으로 잘 될건데, 써주는게 좋겠음
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  // 앞에 보여줄건지 마지막에 보여줄건지
  loop: true,
  // 무한히 보여줄 것임
  autoplay: { // 자동으로 회전됨
    delay: 1000,
    disabledinInteraction: false, // false 주면, 마우스 누르고 있으면 멈추고 있는 기능
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {  // 버튼 기능 동작 지정해준 것임!
    prevEl: ".promotion .swiper-button-prev",
    nextEl: ".promotion .swiper-button-next",
  },
});

// AutoPlay 컨트롤
function controlAutoPlay() {
  // console.log(swiperPromotion); 콘솔 가서 autoplay. running 가서 false 라고 확인함
  if (swiperPromotion.autoplay.running === false) {
    swiperPromotion.autoplay.start(); // 실행 중이 아니면 autoplay 켜라.
  } else {
    swiperPromotion.autoplay.stop(); // 실행중이면 autoplay 멈춰라.
  }
}
// autoplay 실행시키자마자 html 상 href 페이지로 새로 고침한다.
// 페이지 새로고침을 막으려면 javascript 코드 넣어줘야 함.

// addEventListener 사용
// Toggle Promotion
const promotionSection = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".notice .toggle-promotion")
promotionToggleBtn.addEventListener("click", function () {
  if (promotionSection.classList.contains("hide")) {
    promotionSection.classList.remove("hide");
    promotionToggleBtn.classList.add("show");
  } else {
    promotionSection.classList.add("hide");
    promotionToggleBtn.classList.remove("show");
  }
})

// 애니메이션 파트 

//Visual
window.onload = function () {
  const visualSection = document.querySelector('.visual');
  visualSection.classList.add("animate");
}

// 애니메이션 스크롤 파트
// 엘살바도르
// 스크롤은 브라우저 레벨이 처리해주는거니까
window.addEventListener("scroll", function () {
  console.log(window.scrollY); // 숫자가 막 주르륵 뜬다.
  if (window.scrollY > 490) {
    const elsarvadorSection = document.querySelector(".elsalvador");
    elsarvadorSection.classList.add("animate");
  }

  if (window.scrollY > 1030) {
    const ethiopiaSection = this.document.querySelector(".ethiopia")
    ethiopiaSection.classList.add("animate");
  }

  if (window.scrollY > 1430) {
    const favoriteSection = this.document.querySelector(".favorite")
    favoriteSection.classList.add("animate");
  }

  if (window.scrollY > 2000) {
    const favoriteSection = this.document.querySelector(".magazine")
    favoriteSection.classList.add("animate");
  }

  if (window.scrollY > 2375) {
    const favoriteSection = this.document.querySelector(".store")
    favoriteSection.classList.add("animate");
  }
})

// 순서를 바꿔서 하면 (윤제) 코드 효율성이 더 좋아진다.
// 외부에 메모리 하나 둬놓고 계속 메모리 잡아오는 구조는 효율적이지 않다.
// 전역에 올려놓고 사용하는게 나음. elsarvadorSection <- 류 

