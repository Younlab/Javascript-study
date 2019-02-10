import fetch from "node-fetch";

const API_URL = "https://yts.am/api/v2/list_movies.json";

export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL;
  if (limit > 0) {
    REQUEST_URL += `?limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }

  return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies);
  //   return fetch(`${API_URL}?limit=${limit}&minimum_rating=${rating}`)
  //     .then(response => response.json())
  //     .then(json => json.data.movies);
};

// export let movies = [
//   {
//     id: 1,
//     name: "Nicolas1",
//     score: 3
//   },
//   {
//     id: 2,
//     name: "Nicolas2",
//     score: 3
//   },
//   {
//     id: 3,
//     name: "Nicolas3",
//     score: 3
//   },
//   {
//     id: 4,
//     name: "Nicolas4",
//     score: 3
//   },
//   {
//     id: 5,
//     name: "Nicolas5",
//     score: 3
//   }
// ];

// export const getById = id => {
//   const filteredMovie = movies.filter(movie => id === movie.id);
//   return filteredMovie[0];
// };

// export const deleteMovie = id => {
//   const cleanedMovies = movies.filter(movie => movie.id !== id);
//   if (movies.length > cleanedMovies.length) {
//     movies = cleanedMovies;
//     return true;
//   } else {
//     return false;
//   }
// };

// export const addMovie = (name, score) => {
//   const newMovie = {
//     id: movies.length + 1,
//     name,
//     score
//   };
//   movies.push(newMovie);
//   return newMovie;
// };
