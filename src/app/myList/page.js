"use client";

import CardMovie from "@/components/common/cardMovie/CardMovie";
import { useSelector } from "react-redux";

const MyList = () => {
  const { myList } = useSelector((store) => store.favSlice);
  

  return (
    <div style={{ paddingTop: "100px" }}>
      {
        myList.length > 0 ? 
        <div className="flex flex-wrap">
        {myList.map((movie) => (
          <CardMovie key={movie.id} movie={movie} />
          ))}
      </div> : <h1>aca fav</h1>
        } 
    </div>
  );
};

export default MyList;
