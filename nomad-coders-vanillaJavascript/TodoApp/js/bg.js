const body = document.querySelector("body");
const IMAGE_NUMBER = 4;
function genRandom() {
  const number = Math.floor(Math.random() * IMAGE_NUMBER);
  return number;
}

function handleImgLoad() {
  console.log("load");
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `./image/${imgNumber + 1}.jpg`;
  body.appendChild(image);
  image.classList.add("bgImage");
  image.addEventListener("loadend", handleImgLoad);
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}
init();
