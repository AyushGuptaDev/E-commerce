import { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [SearchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const HandleSeachToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("search term : ", SearchTerm);
    setIsOpen(false);
  };

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"
      }`}
    >
      {isOpen ? (
        <form
          className="relative flex justify-center items-center w-full"
          onSubmit={handleSubmit}
        >
          <div className=" relative w-1/2">
            <input
              type="text"
              placeholder="search"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={SearchTerm}
              className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
            />

            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <HiMagnifyingGlass className="h-6 w-6" />
            </button>
          </div>

          <button
            type="button"
            className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            onClick={HandleSeachToggle}
          >
            <HiMiniXMark className="x-6 w-6" />
          </button>
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
