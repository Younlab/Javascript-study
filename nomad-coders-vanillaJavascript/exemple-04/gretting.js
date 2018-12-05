const form = document.querySelector(".js-form"),
  input = document.querySelector(".js-name-input"),
  greeting = document.querySelector(".js-greetings"),
  deleteBtn = document.querySelector(".js-name-delete-btn");

const USER_LS = "hello",
  SHOWING_CN = "showing";

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
  form.classList.remove(SHOWING_CN);
  deleteBtn.classList.add(SHOWING_CN);
}

function paintGreeting(text) {
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function handleNameDelete(event) {
  event.preventDefault();
  localStorage.removeItem(USER_LS);
}

function deleteName() {
  deleteBtn.classList.add(SHOWING_CN);
  deleteBtn.addEventListener("click", handleNameDelete);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  console.log("start");
  if (currentUser === null) {
    askForName();
    console.log("false");
  } else {
    // 유저가 없는 경우
    paintGreeting(currentUser);

    deleteName();
  }
}

function init() {
  loadName();
}
init();
