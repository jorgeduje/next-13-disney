"use client";

import { handleFav } from "@/store/favSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiFillPlusCircle, AiFillCheckCircle } from "react-icons/ai";

const MovieDetail = ({ movie }) => {
  const dispatch = useDispatch();
  const { myList } = useSelector((store) => store.favSlice);

  const exist = myList.some((e) => e.id === movie.id);

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
      <button onClick={() => dispatch(handleFav(movie))}>
        {exist ? (
          <AiFillCheckCircle size={40} color="black" />
        ) : (
          <AiFillPlusCircle size={40} color="black" />
        )}
      </button>
    </div>
  );
};

export default MovieDetail;
