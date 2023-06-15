import Image from "next/image";
import Link from "next/link";
import "./CardMovie.css";
const CardMovie = ({ movie, isInHome = false }) => {
  return (
    <Link href={`/movies/${movie.id}`} className="p-[10px]">
      <Image
        key={movie.id}
        src={movie?.frontImage}
        width={300}
        height={300}
        alt={movie.name}
        className={`${isInHome && "w-auto"} h-auto shadow-[rgba(0,0,0,0.69)_0px_26px_30px_-10px,rgba(0,0,0,0.73)_0px_16px_10px_-10px] scale-100 rounded hover:scale-105 duration-300 hover:duration-300 transition-[transform,box-shadow] hover:transition-[transform,box-shadow] ease-out hover:ease-out hover:shadow-[rgba(0,0,0,0.8)_0px_40px58px-16px,rgba(0,0,0,0.72)_0px_30px22px-10px] hover:outline-slate-50 hover:outline-offset-0 aplicandoHover`}
      />
    </Link>
  );
};

export default CardMovie;
