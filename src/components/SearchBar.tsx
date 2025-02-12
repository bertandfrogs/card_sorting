import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SearchBarProps {
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchTerm }) => {
  const [input, setInput] = useState("");
  
  // search every time the input changes
  useEffect(() => {
	handleSearch();
  }, [input]);

  const handleSearch = () => {
    setSearchTerm(input);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Courses..."
        value={input}
        onChange={(e) => {
			setInput(e.target.value);
		}}
      />
	  {/* TODO: fix this to actually work */}
      {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
    </div>
  );
};

export default SearchBar;
