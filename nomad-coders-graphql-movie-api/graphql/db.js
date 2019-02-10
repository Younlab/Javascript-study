export let movies = [
  {
    id: 1,
    name: "Nicolas1",
    score: 3
  },
  {
    id: 2,
    name: "Nicolas2",
    score: 3
  },
  {
    id: 3,
    name: "Nicolas3",
    score: 3
  },
  {
    id: 4,
    name: "Nicolas4",
    score: 3
  },
  {
    id: 5,
    name: "Nicolas5",
    score: 3
  }
];

export const getById = id => {
  const filteredMovie = movies.filter(movie => id === movie.id);
  return filteredMovie[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== String(id));
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
