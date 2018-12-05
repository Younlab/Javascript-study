const title = document.querySelector("#title");
// console.dir(title);

// title.innerHTML = "Hi From JS";
// title.style.color = "red";

// document 로 config 조작
// console.dir(document);
// document.title = "I own in owner";

// function handleResize() {
//   console.log("I have been resized");
// }

// const handleResize = event => {
//   console.log(event);
// };

// 화면 사이즈가 변경될때 해당하는 함수가 실행된다.
// window.addEventListener("resize", handleResize);
// title.style.cursor = "pointer";

// const handleClick = event => {
//   if (title.style.color === "red") {
//     title.style.color = "blue";
//   } else if (title.style.color === "blue") {
//     title.style.color = "red";
//   }
// };

const BASE_COLOR = "red";

const OTHER_COLOR = "#34495E";

title.style.color = BASE_COLOR;
function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}

function handleClick() {
  const currentColor = title.style.color;
  console.log(currentColor);
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

title.addEventListener("click", handleClick);
