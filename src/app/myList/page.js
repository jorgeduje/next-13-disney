"use client";

import CardMovie from "@/components/common/cardMovie/CardMovie";
import { useSelector } from "react-redux";
import { BsPlusCircle } from "react-icons/bs";

const MyList = () => {
  const { myList } = useSelector((store) => store.favSlice);

  return (
      myList.length === 0 ? (
        <div
          className="flex items-center justify-center"
          style={{ minHeight: "calc(100vh - 201px)" }}
        >
          <div
          className="flex items-center justify-center w-full h-full flex-col"
          >
            <BsPlusCircle style={{ width: "120px", height: "120px", color: "#4E515E" }} />
            <h3 className=" py-8 pb-2 text-2xl text-[#f9f9f9]">Mi lista está vacía.</h3>
            <p className="text-[#f9f9f9] text-[15px] py-2 pb-2 ">El contenido que agregues aparecerá aquí.</p>
          </div>
        </div>
      ) : <div style={{ paddingTop: "70px",  paddingLeft: "calc(3.5vw + 24px)", paddingRight: "calc(3.5vw + 24px)", minHeight: "calc(100vh - 201px)"}}>
        <h1 className=" text-[44px] text-[#f9f9f9] pb-6 py-10">Mi lista</h1>
        <h4 className=" text-xl text-[#f9f9f9] pb-5">Mis películas y series</h4>
      <div
        className="grid grid-cols-4 gap-5"
      >
        {myList.map((movie) => (
          <CardMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MyList;