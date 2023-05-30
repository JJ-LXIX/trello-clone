import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <header>
        <h1 className="text-xl md:text-3xl pb-2 md:pb-0 md:px-5 font-semibold cursor-default">
          [LXIX]
        </h1>
        {/* Search Box */}
        <form>
          <input type="text" />
          <button hidden>Search</button>
        </form>

        {/* User Avatar */}
          <Avatar githubHandle="JJ-LXIX" round size="50" />
        </div>
      </div>
    </header>
  );
}

export default Header;
