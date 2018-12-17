import * as types from "./actionTypes";
import axios from "axios";

export function getApiAxios() {
  const request = axios.get(
    `https://yts.am/api/v2/list_movies.json?sort_by=download_count`
  );
  // .then(response => {
  //   console.log(response);
  //   return response.data.data.movies;
  // })
  // .catch(err => console.log(err));
  return {
    type: types.GET_API,
    payload: request
  };
}
