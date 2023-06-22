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
    <div style={{ paddingTop: "100px", width: "100%" }}>
      <input
        type="text"
        placeholder="Título, personaje o género"
        className="w-full h-[90px] pl-[80px] text-[44px] outline-none text-[#a8a9ad] bg-[#4b4e5a]"
        onChange={(e) => setName(e.target.value)}
      />

      <div className="flex justify-center flex-wrap px-4">
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
