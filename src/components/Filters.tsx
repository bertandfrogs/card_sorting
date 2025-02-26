import React, { useState, useEffect, useRef } from "react";

interface FiltersProps {
  selectedLevels?: string[];
  selectedCredits?: string[];
  selectedSemesters?: string[];
  selectedInstructors?: string[];
  allInstructors?: string[];
  toggleSelection: (selectedArray: string[], value: string, setState: React.Dispatch<React.SetStateAction<string[]>>) => void;
  resetFilters: () => void;
  setSelectedLevels: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedCredits: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedSemesters: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedInstructors: React.Dispatch<React.SetStateAction<string[]>>;
}

const Filters: React.FC<FiltersProps> = ({
  selectedLevels = [],
  selectedCredits = [],
  selectedSemesters = [],
  selectedInstructors = [],
  allInstructors = [],
  toggleSelection,
  resetFilters,
  setSelectedLevels,
  setSelectedCredits,
  setSelectedSemesters,
  setSelectedInstructors,
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Toggle dropdown visibility
  const toggleDropdown = (category: string) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Function to render selected filters outside the dropdown
  const renderSelectedFilters = (selectedItems: string[], labelFormatter: (item: string) => string) => {
    return selectedItems.length > 0 ? (
      <div className="selected-filters">
        {selectedItems.map((item) => (
          <span key={item} className="selected-filter">
            {labelFormatter(item)}
          </span>
        ))}
      </div>
    ) : null;
  };

  return (
    <div className="filters" ref={dropdownRef}>
      {/* Course Level */}
      <div className="filter-group">
        <button className="dropdown-btn" onClick={() => toggleDropdown("levels")}>
          Course Level {selectedLevels.length > 0 ? `(${selectedLevels.length})` : ""}
        </button>
        {renderSelectedFilters(selectedLevels, (level) => `${level}00 Level`)}
        <div className={`dropdown-content ${openDropdown === "levels" ? "open" : ""}`}>
          {["1", "2", "3", "4"].map((level) => (
            <label key={level} className={selectedLevels.includes(level) ? "selected" : ""}>
              <input
                type="checkbox"
                value={level}
                checked={selectedLevels.includes(level)}
                onChange={() => toggleSelection(selectedLevels, level, setSelectedLevels)}
              />
              {level}00 Level
            </label>
          ))}
        </div>
      </div>

      {/* Credit Hours */}
      <div className="filter-group">
        <button className="dropdown-btn" onClick={() => toggleDropdown("credits")}>
          Credit Hours {selectedCredits.length > 0 ? `(${selectedCredits.length})` : ""}
        </button>
        {renderSelectedFilters(selectedCredits, (credit) => `${credit} Credits`)}
        <div className={`dropdown-content ${openDropdown === "credits" ? "open" : ""}`}>
          {["0.5", "2", "3", "4"].map((credit) => (
            <label key={credit} className={selectedCredits.includes(credit) ? "selected" : ""}>
              <input
                type="checkbox"
                value={credit}
                checked={selectedCredits.includes(credit)}
                onChange={() => toggleSelection(selectedCredits, credit, setSelectedCredits)}
              />
              {credit} Credits
            </label>
          ))}
        </div>
      </div>

      {/* Semesters */}
      <div className="filter-group">
        <button className="dropdown-btn" onClick={() => toggleDropdown("semesters")}>
          Semesters {selectedSemesters.length > 0 ? `(${selectedSemesters.length})` : ""}
        </button>
        {renderSelectedFilters(selectedSemesters, (semester) => semester)}
        <div className={`dropdown-content ${openDropdown === "semesters" ? "open" : ""}`}>
          {["Fall", "Winter", "Spring", "Summer"].map((semester) => (
            <label key={semester} className={selectedSemesters.includes(semester) ? "selected" : ""}>
              <input
                type="checkbox"
                value={semester}
                checked={selectedSemesters.includes(semester)}
                onChange={() => toggleSelection(selectedSemesters, semester, setSelectedSemesters)}
              />
              {semester}
            </label>
          ))}
        </div>
      </div>

      {/* Instructors */}
      <div className="filter-group">
        <button className="dropdown-btn" onClick={() => toggleDropdown("instructors")}>
          Instructors {selectedInstructors.length > 0 ? `(${selectedInstructors.length})` : ""}
        </button>
        {renderSelectedFilters(selectedInstructors, (instructor) => instructor)}
        <div className={`dropdown-content ${openDropdown === "instructors" ? "open" : ""}`}>
          {allInstructors.map((instructor) => (
            <label key={instructor} className={selectedInstructors.includes(instructor) ? "selected" : ""}>
              <input
                type="checkbox"
                value={instructor}
                checked={selectedInstructors.includes(instructor)}
                onChange={() => toggleSelection(selectedInstructors, instructor, setSelectedInstructors)}
              />
              {instructor}
            </label>
          ))}
        </div>
      </div>

      {/* Reset Filters Button */}
      <button onClick={resetFilters} className="reset-button">
        Reset Filters
      </button>
    </div>
  );
};

export default Filters;
