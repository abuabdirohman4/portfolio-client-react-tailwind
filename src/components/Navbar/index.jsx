import React from "react";
import { Link } from "react-router-dom";
import NavLink from "../NavLink";
import Logo from "../../assets/img/logo.svg";
import NavButton from "../Button/NavButton";

export default function Navbar() {
  return (
    <nav className="rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-800 sm:px-4">
      <div className="container mx-auto my-2 flex flex-wrap items-center justify-between">
        <Link className="flex items-center" to="/">
          <img
            src={Logo}
            alt="Abu Abdirohman Logo"
            className="ml-3 h-8 sm:ml-0 sm:h-8"
          />
        </Link>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="mobile-menu-2"
        >
          <ul className="md:font-regular mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/">Skills</NavLink>
            <NavLink href="/">Portfolio</NavLink>
            <NavLink href="/">Article</NavLink>
          </ul>
        </div>
        <div className="md:order-2">
          <NavButton href="/">Contact Me</NavButton>
        </div>
      </div>
    </nav>
  );
}
