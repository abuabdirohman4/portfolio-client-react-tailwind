import React from "react";
import { Link } from "react-router-dom";

export default function NavButton({href, children}) {
  return (
    <Link
      className="mt-2 mr-2 rounded-full border border-transparent bg-gray-200 px-8 py-3 text-base font-medium text-black hover:bg-gray-300 hover:shadow md:py-2 md:px-8 md:text-sm"
      to={href}
    >
      {children}
    </Link>
  );
}
