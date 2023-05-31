import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { RiMovie2Line } from "react-icons/ri";
import { MdScreenshotMonitor } from "react-icons/md";
import Image from "next/image";
import "./navbar.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full h-18 flex justify-between items-center text-white navbar">
      <div className="w-4/5 flex">
        <Link href={"/"} className="w-1/5">
          <Image
            src="https://res.cloudinary.com/dkwjizhdg/image/upload/v1685468409/disney/logo.1a56f51c764022ee769c91d894d44326_pwwwc8.svg"
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </Link>
        <ul className="flex w-4/5 gap-6 uppercase font-bold">
          <Link href={"/"} className="flex gap-1 items-center">
            <AiFillHome /> inicio
          </Link>
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
      <div className="w-1/5 flex justify-end pr-5 gap-2 items-center">
        <h6>Jorge</h6>
        <img
          src={
            "https://res.cloudinary.com/dkwjizhdg/image/upload/v1685458796/disney/el_imperio_contraataca_bgi_xawcsf.jpg"
          }
          alt="avatar"
          className="rounded-full"
          style={{ width: "40px", height: "40px" }}
        />
      </div>
    </header>
  );
};

export default Navbar;
