import Image from "next/image";
import Link from "next/link";
import "./CardMovieCaruselStyles.css";

const CardMovieCarousel = ({ movie, isInHome = false }) => {
  return (
    <Link href={`/movies/${movie.id}`} className="p-[10px]">
      <div
      style={{backgroundImage: `url(${movie.bgImage})`, backgroundPositionY: "25%", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}
        className={`w-full relative h-[23vw] shadow-[rgba(0,0,0,0.69)_0px_26px_30px_-10px,rgba(0,0,0,0.73)_0px_16px_10px_-10px] scale-100 rounded duration-300 hover:duration-300 transition-[transform,box-shadow] hover:transition-[transform,box-shadow] ease-out hover:ease-out hover:shadow-[rgba(0,0,0,0.8)_0px_40px_58px_-16px,rgba(0,0,0,0.72)_0px_30px_22px_-10px] hover:outline-slate-50 hover:outline-offset-0 aplicandoHover`}
      >
        <Image
          key={movie.id}
          src={movie?.titleImage}
          width={300}
          height={300}
          alt={movie.name}
          className="absolute left-[10%] h-2/4 top-1/4 w-[20%]"
        />
      </div>
    </Link>
  );
};

export default CardMovieCarousel;