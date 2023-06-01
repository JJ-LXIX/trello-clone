"use client";
import fetchSuggestion from "@/lib/fetchSuggestion";
import { useBoardStore } from "@/store/BoardStore";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import Avatar from "react-avatar";

function Header() {
  const [board, searchString, setSearchString] = useBoardStore((state) => [
    state.board,
    state.searchString,
    state.setSearchString,
  ]);

  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState("");

  // useEffect(() => {
  //   if (board.columns.size === 0) return;
  //   setLoading(true);

  //   async function fetchSuggestionFunc() {
  //     const suggestion = await fetchSuggestion(board);
  //     setSuggestion(suggestion);
  //     setLoading(false);
  //   }
  //   fetchSuggestionFunc();
  // }, [board]);

  return (
    <header className="pb-10 md:pb-5">
      <div className="flex flex-col md:flex-row items-center p-5  rounded-b-2xl">
        {/* Gradient */}
        <div
          className="absolute top-0 left-0 w-full h-[60vh] 
        bg-gradient-to-br from-pink-400 to-three-blue
        rounded-md filter blur-3xl opacity-40 -z-50"
        />

        <h1 className="text-xl md:text-3xl pb-2 md:pb-0 md:px-5 font-semibold cursor-default text-two-white-text">
          [LXIX]
        </h1>

        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* Search Box */}
          <form className="flex items-center space-x-5 rounded-md p-2 flex-1 md:flex-initial shadow-2xl bg-four-gray/20 text-two-white-text">
            <MagnifyingGlassIcon className="h-6 w-6 " />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2 bg-transparent placeholder:text-two-white-text"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>

          {/* User Avatar */}
          <Avatar githubHandle="JJ-LXIX" round size="50" />
        </div>
      </div>

      <div className="flex items-center justify-center px-5 md:py-5">
        <p className="flex items-center p-5 text-sm font-light pr-5 shadow-2xl rounded-xl w-fit italic max-w-3xl bg-four-gray/20 text-two-white-text">
          <UserCircleIcon
            className={`inline-block h-10 w-10 text-two-white-text mr-1 
            ${loading && "animate-spin"}
            `}
          />
          " GPT is summarizing your tasks for the day..."
          {/* {suggestion && !loading
            ? suggestion
            : " GPT is summarizing your tasks for the day..."} */}
        </p>
      </div>
    </header>
  );
}

export default Header;
