"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CardCategory = ({ cardCategory }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <Link className="w-60 block" href={`/movies/${cardCategory.path}`}>
        <div
          onMouseEnter={() => setShowVideo(true)}
          onMouseLeave={() => setShowVideo(false)}
          className="overflow-hidden w-60 h-32 border-2 rounded-lg border-[#434450] shadow-[#000000b0_0_26px30px-10px,#000000b0_0_16px10px-10px] m-4 relative bg-[#4344508d]"
        >
          <Image
            src={cardCategory.img}
            alt="category img"
            width={140}
            height={140}
            className="w-60 h-32 z-10 rounded-lg absolute top-2/4 left-2/4 translate-x-5000 translate-y-5000"
          />
          {showVideo && (
            <video
              preload="none"
              loading="lazy"
              src={cardCategory.video}
              autoPlay
              loop
              playsInline
              muted
              className="rounded-lg absolute top-2/4 left-2/4 translate-x-5000 translate-y-5000 w-60"
            />
          )}
        </div>
      </Link>
    </>
  );
};

export default CardCategory;
