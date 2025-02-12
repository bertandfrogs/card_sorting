import React, { useState } from "react";

interface SearchBarProps {
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchTerm }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    setSearchTerm(input);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Courses..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>🔍</button>
    </div>
  );
};

export default SearchBar;
