const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

// function handleClick() {
//   // class 가 있는지 확인
//   const hasClass = title.classList.contains(CLICKED_CLASS);

//   // true flase 반환
//   if (!hasClass) {
//     title.classList.add(CLICKED_CLASS);
//   } else {
//     title.classList.remove(CLICKED_CLASS);
//   }
// }

function handleClick() {
  // 없으면 add 있으면 remove
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
