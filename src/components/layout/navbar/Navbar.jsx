import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { RiMovie2Line } from "react-icons/ri";
import { MdScreenshotMonitor } from "react-icons/md";
import Image from "next/image";
import "./navbar.css"

const Navbar = () => {
  return (
    <header className="w-full h-18 flex justify-between items-center text-white navbar">
      <div className="w-4/5 flex">
        <div className="w-1/5">
          <Image
            src="https://res.cloudinary.com/dkwjizhdg/image/upload/v1685468409/disney/logo.1a56f51c764022ee769c91d894d44326_pwwwc8.svg"
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <ul className="flex w-4/5 gap-6 uppercase font-bold">
          <li className="flex gap-1 items-center">
            <AiFillHome /> inicio
          </li>
          <li className="flex gap-1 items-center">
            <AiOutlineSearch /> busqueda
          </li>
          <li className="flex gap-1 items-center">
            <BsPlusLg /> mi lista
          </li>
          <li className="flex gap-1 items-center">
            <RiMovie2Line /> peliculas
          </li>
          <li className="flex gap-1 items-center">
            <MdScreenshotMonitor /> series
          </li>
        </ul>
      </div>
      <div className="w-1/5">
        <h6>Jorge</h6>
        <h6>avatar</h6>
      </div>
    </header>
  );
};

export default Navbar;
