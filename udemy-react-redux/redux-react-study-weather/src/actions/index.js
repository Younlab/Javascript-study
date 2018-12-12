import axios from "axios";

import APIKEY from "../../secret.js";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${APIKEY}`;
export const FETCH_WEATHER = "FETCH_WEATHER";
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  console.log("Request", request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
