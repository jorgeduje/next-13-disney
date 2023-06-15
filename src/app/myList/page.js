"use client";

import CardMovie from "@/components/common/cardMovie/CardMovie";
import { useSelector } from "react-redux";

const MyList = () => {
  const { myList } = useSelector((store) => store.favSlice);

  return (
    <div style={{ paddingTop: "100px" }}>
      <h1>Aca van los favoritos</h1>
      <div className="flex flex-wrap">
        {myList.map((movie) => (
          <CardMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MyList;
