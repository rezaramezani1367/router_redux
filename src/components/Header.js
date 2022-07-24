import React from "react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <nav className=" shadow-sm border-b py-4 flex justify-center">
      <ul className="flex gap-x-10">
        <li className="font-bold text-xl text-rose-900"><Link to='/'>Home</Link></li>
        <li className="text-xl text-rose-900"><Link to='/users'>Users</Link></li>
        <li className="text-xl text-rose-900"><Link to='/posts'>Posts</Link></li>
        <li className="text-xl text-rose-900"><Link to='/comments'>Comments</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
