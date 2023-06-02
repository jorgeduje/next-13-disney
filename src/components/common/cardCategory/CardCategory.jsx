"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CardCategory = ({ movie }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <Link key={movie.id} href={`/movies/${movie.id}`}>
      <div
        onMouseEnter={() => setShowVideo(true)}
        onMouseLeave={() => setShowVideo(false)}
        className="w-60 h-32 border-2 rounded-lg border-[#3a3c4a] shadow-[#000000b0_0_26px30px-10px,#000000b0_0_16px10px-10px] m-4 relative"
      >
        <Image
          src="https://res.cloudinary.com/dishtratk/image/upload/v1685642254/disney-app/common/scale_dqe8gx.png"
          alt="category img"
          width={140}
          height={140}
          className="w-60 h-32 z-10 rounded-lg absolute top-2/4 left-2/4 translate-x-5000 translate-y-5000"
        />
        {showVideo && (
          <video
            preload="none"
            loading="lazy"
            src="https://res.cloudinary.com/dishtratk/video/upload/v1685642194/disney-app/video/1565217865-disney_ife6wf.mp4"
            autoPlay
            loop
            playsInline
            muted
            className="rounded-lg absolute top-2/4 left-2/4 translate-x-5000 translate-y-5000 w-60"
          ></video>
        )}
      </div>
    </Link>
  );
};

export default CardCategory;
