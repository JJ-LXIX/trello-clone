"use client";
import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <h1 className="text-xl md:text-3xl pb-2 md:pb-0 md:px-5 font-semibold cursor-default">
          [LXIX]
        </h1>

        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* Search Box */}
          <form className="flex items-center space-x-5 rounded-md p-2 flex-1 md:flex-initial shadow-md bg-white">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>

          {/* User Avatar */}
          <Avatar githubHandle="JJ-LXIX" round size="50" />
        </div>
      </div>
    </header>
  );
}

export default Header;
