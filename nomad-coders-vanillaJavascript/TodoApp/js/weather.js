const COORDS = "coords";

function saveCoords(coordsObg) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObg));
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitiude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
}

function handleGeoError(err) {
  console.log("Cant access Geo location", err);
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCords = localStorage.getItem(COORDS);
  if (loadedCords === null) {
    askForCoords();
  }
}

function init() {
  loadCoords();
}
init();
