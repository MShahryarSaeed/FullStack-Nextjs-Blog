"use client";
import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlinePlusCircle,
  AiOutlineMenu,
} from "react-icons/ai";
import { MdOutlinePostAdd } from "react-icons/md";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl">Masynctech</h1>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <AiOutlineMenu size={24} />
          </button>
        </div>

        {/* Menu Items */}
        <ul
          className={`md:flex md:items-center md:justify-between flex-col md:flex-row flex-1 md:static absolute top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="mx-4 my-2 md:my-0 hover:text-gray-300">
            <Link href="/" className="flex items-center">
              <AiOutlineHome className="mr-2" />
              Home
            </Link>
          </li>
          <li className="mx-4 my-2 md:my-0 hover:text-gray-300">
            <Link href="/posts" className="flex items-center">
              <MdOutlinePostAdd className="mr-2" />
              Posts
            </Link>
          </li>
          <li className="mx-4 my-2 md:my-0 hover:text-gray-300">
            <Link href="/posts/create" className="flex items-center">
              <AiOutlinePlusCircle className="mr-2" />
              Add New Post
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
