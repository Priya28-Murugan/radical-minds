import search from "@/public/images/search.svg";
import filter from "@/public/images/filter.svg";
import Image from "next/image";

export default function SearchWithFilter() {

  return (
    <div className="flex items-center gap-2 w-full max-w-md">
      {/* Search Input */}
      <div className="flex items-center bg-[#FFFFFFCC] rounded-lg w-full px-3 py-2 shadow-sm">
        <input
          type="text"
          placeholder="Search Psychologists..."
          className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 font-[Quicksand]"
        />
       <Image src={search} alt="search"/>

      </div>

      {/* Filter Button */}
      <button className="bg-[#FFFFFFCC] rounded-lg p-2 shadow-sm flex items-center justify-center">
       <Image src={filter} alt="filter"/>
      </button>
    </div>
  );
}
