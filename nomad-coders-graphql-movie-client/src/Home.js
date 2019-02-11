import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";
const Home = () => (
  <Query query={HOME_PAGE}>
    {({ loading, data, error }) => {
      if (loading) return <span>loading</span>;
      if (error) return <span>something happened</span>;
      if (data) {
        console.log(data);
        return data.movies.map(movie => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <h4>{movie.rating}</h4>
            <img src={movie.medium_cover_image} alt={movie.title} />
          </div>
        ));
      }
    }}
  </Query>
);
export default Home;
