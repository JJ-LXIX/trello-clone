import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <header>
      <Image
        src="https://links.papareact.com/c2cdd5"
        alt="Logo"
        width={300}
        height={100}
        className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
      />
      <div>
        {/* Search Box */}
        <form>
          <input type="text" />
          <button hidden>Search</button>
        </form>

        {/* User Avatar */}
      </div>
    </header>
  );
}

export default Header;
