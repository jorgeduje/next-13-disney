"use client";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const NavbarContainer = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <Navbar isActive={isActive} />;
};

export default NavbarContainer;
