import React from "react";
import DialogBox from "./DialogBox";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-4 lg:px-6 py-10 h-14 flex justify-around md:mx-10 ">
      <Link to={"/"} className="flex items-center justify-center">
        <a  href="#">
          <img
            className=" h-8 md:h-10"
            src="../../public/logo.png"
            alt="logo"
          />
        </a>
      </Link>
      <nav className="ml-auto flex items-center text-white gap-4 sm:gap-6">
        <DialogBox />
      </nav>
    </header>
  );
};

export default Header;
