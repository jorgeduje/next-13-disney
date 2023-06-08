"use client";

import CardMovie from "@/components/common/cardMovie/CardMovie";
import { useEffect, useState } from "react";

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [name, setName] = useState("");

  let moviesFilterd = movies.filter(
    (movie) =>
      movie.category.toLowerCase().includes(name.toLowerCase()) ||
      movie.name.toLowerCase().includes(name.toLowerCase()) ||
      movie.cast.some((elemento) =>
        elemento.toLowerCase().includes(name.toLowerCase())
      ) ||
      movie.gender.some((elemento) =>
        elemento.toLowerCase().includes(name.toLowerCase())
      )
  );

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:3000/api/movies");
      const data = await res.json();
      setMovies(data);
    };

    getData();
  }, []);

  console.log(movies);
  return (
    <div>
      <input
        type="text"
        placeholder="Type here"
        className="input input-ghost w-full max-w-lg"
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        {!name
          ? movies.map((movie) => <CardMovie key={movie.id} movie={movie} />)
          : moviesFilterd.map((movie) => (
              <CardMovie key={movie.id} movie={movie} />
            ))}
      </div>
    </div>
  );
};

export default SearchPage;
