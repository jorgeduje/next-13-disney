"use client";

import { addMovie } from "@/store/favSlice";
import { useDispatch } from "react-redux";

const MovieDetail = ({ movie }) => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        backgroundImage: `url(${movie.bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>{movie.name}</div>
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => dispatch(addMovie(movie))}
      >
        Guardar fav
      </button>
    </div>
  );
};

export default MovieDetail;
