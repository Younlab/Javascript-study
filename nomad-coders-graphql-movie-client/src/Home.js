import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";
import Movie from "./Movie";
const Home = () => (
  <Query query={HOME_PAGE}>
    {({ loading, data, error }) => {
      if (loading) return <span>loading</span>;
      if (error) return <span>something happened</span>;
      if (data) {
        console.log(data);
        return data.movies.map(movie => (
          <Movie
            id={movie.id}
            title={movie.title}
            poster={movie.medium_cover_image}
            rating={movie.rating}
            key={movie.id}
          />
        ));
      }
    }}
  </Query>
);
export default Home;
