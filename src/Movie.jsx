import React from "react";
import { useSelector } from "react-redux";

export const Movie = (props) => {
  const { id } = props;
  const movie = useSelector((state) =>
    state.moviesSlice.movies.find((m) => m.id === id)
  );

  return (
    <div>
      <span>Name {movie.name}</span>
      <span> </span>
      <span>Lead {movie.lead}</span>
    </div>
  );
};
