import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import NavLink from "../NavLink";

export default function Navbar() {
  return (
    <div className="bg-blue-500 py-2">
      <Container>
        <div className="flex items-center">
          <Link
            className="mr-2 text-sm font-semibold uppercase text-white"
            to="/"
          >
            Abu Abdirohman
          </Link>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
        </div>
      </Container>
    </div>
  );
}
