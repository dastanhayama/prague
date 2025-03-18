import React from "react";
import SearchIcon from "@icons/General/search-lg.svg";

const SearchInput = () => {
  return (
    <div className="relative flex items-center w-full min-w-[200px] desktop:max-w-[320px] max-w-full shadow-xs rounded-md border border-[#D0D5DD] px-[14px] py-[10px]">
      {/* Search Icon */}
      <SearchIcon className="w-[20px] h-[20px] [&>path]:stroke-fg-quaternary-500" />

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search"
        className="w-full focus:outline-none focus:border-none focus:ring-0 ml-3 text-[16px] leading-[24px] placeholder:text-[#667085] text-[#667085]"
      />
    </div>
  );
};

export default SearchInput;