// MAIN HEADER
// SEARCH

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector("input");
//searchE1. 이렇게 범위를 좁혀서 검색할 수 있음
const searchIconEl = searchEl.querySelector("span");

let isFocused = false;
// 포커스가 갔는지 전역변수로써 확인

// searchEl div 요소임, 검색창 주변 클릭하면 focus 되게!
searchEl.addEventListener("click", function () {
  if (isFocused) {
    searchInputEl.blur();
    isFocused = false;
    // searchInputEl.focus();
  } else {
    searchInputEl.focus();
    isFocused = true;
  }
});
// 한번 더 눌러야 다시 됨 (장경은씨 껄로 함)

// focus 생길 때, '통합검색' 뜨게
searchInputEl.addEventListener("focus", function () {
  searchInputEl.setAttribute("placeholder", "통합검색");
});

// focus 사라질 때 (검색창 외부 클릭할 때), '통합검색' 사라지게
// blur 기능 흐려지는 것 / "" 빈 요소로 만들어줌
searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute("placeholder", "")
});

