import React from "react";

interface SearchBarProps {
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search Courses..."
      className="search-bar"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
