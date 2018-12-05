const form = document.querySelector(".js-form"),
  input = document.querySelector(".js-name-input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "hello",
  SHOWING_CN = "showing";

function paintGreeting(text) {
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  console.log("start");
  if (currentUser === null) {
    // 유저가 있는 경우
    console.log("false");
  } else {
    // 유저가 없는 경우
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}
init();
