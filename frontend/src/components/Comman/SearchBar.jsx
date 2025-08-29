import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchBar = () => {
  const [SearchTern, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const HandleSeachToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen ? (
        <form className="relative flex justify-center items-center w-full">
          <div className=" relative w-1/2">
            <input
              type="text"
              placeholder="search"
              value={SearchTern}
              className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
            />
          </div>
        </form>
      ) : (
        <button onClick={HandleSeachToggle}>
          <HiMagnifyingGlass className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
