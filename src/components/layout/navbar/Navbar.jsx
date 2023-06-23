import Image from "next/image";
import Link from "next/link";
import "./NavBarStyles.css";

const Navbar = ({ isActive }) => {
  return (
    <header
      className={`${
        isActive ? "bg-nav" : "bg-transparent"
      } transition 0.2s ease-in-out w-full h-70 px-9 flex z-50 justify-between items-centerm fixed top-0`}
    >
      <div className="w-4/5 flex">
        <ul className="flex w-800 items-center justify-between">
          <Link href="/" className="w-20">
            <Image
              src="https://res.cloudinary.com/dishtratk/image/upload/v1685474334/disney-app/common/logo.1a56f51c764022ee769c91d894d44326_d0ssm3.svg"
              alt="logo"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </Link>
          <Link
            href="/"
            className="uppercase text-white text-sm font-semibold flex items-center relative"
          >
            <Image
              src="https://res.cloudinary.com/dishtratk/image/upload/v1685496959/disney-app/icons/home-svgrepo-com_ia70m1.svg"
              alt="home"
              width={20}
              height={20}
              className="w-4 h-4 m-2"
            />
            <p className="relative">
              inicio
              <span className="underline-animation"></span>
            </p>
          </Link>
          <Link
            href="/search"
            className="uppercase text-white text-sm font-semibold flex items-center"
          >
            <Image
              src="https://res.cloudinary.com/dishtratk/image/upload/v1685498593/disney-app/icons/search-svgrepo-com_lekw8x.svg"
              alt="search"
              width={20}
              height={20}
              className="w-4 h-4 m-2"
            />
            <p className="relative">
              busqueda
              <span className="underline-animation"></span>
            </p>
          </Link>
          <Link
            href="/myList"
            className="uppercase text-white text-sm font-semibold flex items-center"
          >
            <Image
              src="https://res.cloudinary.com/dishtratk/image/upload/v1685498798/disney-app/icons/plus-svgrepo-com_r0n1jz.svg"
              alt="myList"
              width={20}
              height={20}
              className="w-4 h-4 m-2"
            />
            <p className="relative">
              mi lista
              <span className="underline-animation"></span>
            </p>
          </Link>
          <Link
            href="/"
            className="uppercase text-white text-sm font-semibold flex items-center"
          >
            <Image
              src="https://res.cloudinary.com/dishtratk/image/upload/v1685499476/disney-app/icons/cinema-film-movie-svgrepo-com_yusxjt.svg"
              alt="movies"
              width={20}
              height={20}
              className="w-4 h-4 m-2"
            />
            <p className="relative">
              peliculas
              <span className="underline-animation"></span>
            </p>
          </Link>
          <Link
            href="/"
            className="uppercase text-white text-sm font-semibold flex items-center"
          >
            <Image
              src="https://res.cloudinary.com/dishtratk/image/upload/v1685499471/disney-app/icons/tv-old-svgrepo-com_em2esh.svg"
              alt="series"
              width={20}
              height={20}
              className="w-4 h-4 m-2"
            />
            <p className="relative">
              series
              <span className="underline-animation"></span>
            </p>
          </Link>
        </ul>
      </div>
      <div className="w-1/5 flex justify-end">
        <p className=" text-white flex items-center text-sm mx-4">Jorge</p>
        <div className="flex items-center">
          <Image
            src="https://res.cloudinary.com/dishtratk/image/upload/v1685547097/disney-app/icons/scale_g6l2xv.png"
            alt="logoUsuario"
            width={100}
            height={100}
            className="w-12"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;