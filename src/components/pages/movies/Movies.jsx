
import React from "react";

const Movies = ({ movies }) => {
  return (
    <div>
      {
        movies.map( e => <h1 key={e.id}>{e.name}</h1>)
      }
    </div>
  );
};

export default Movies;
