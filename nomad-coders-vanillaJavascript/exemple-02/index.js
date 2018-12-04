const title = document.querySelector("#title");
console.dir(title);

title.innerHTML = "Hi From JS";
title.style.color = "red";

// document 로 config 조작
console.dir(document);
document.title = "I own in owner";

// function handleResize() {
//   console.log("I have been resized");
// }

const handleResize = event => {
  console.log(event);
};

// 화면 사이즈가 변경될때 해당하는 함수가 실행된다.
window.addEventListener("resize", handleResize);
title.style.cursor = "pointer";
const handleClick = event => {
  if (title.style.color === "red") {
    title.style.color = "blue";
  } else if (title.style.color === "blue") {
    title.style.color = "red";
  }
};
title.addEventListener("click", handleClick);

if (condition) {
  block;
} else {
  block;
}
