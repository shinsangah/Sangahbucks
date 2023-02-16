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
  searchInputEl.setAttribute("placeholder", "통합검색");
})


// SWIPER
// SWIPER NOTICE
const swiperNotice = new Swiper(".notice .inner .inner__left .swiper", {
  direction: "vertical",
  loop: true,
  autoplay: true,
});
