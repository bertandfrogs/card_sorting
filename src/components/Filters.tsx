import React from "react";

interface FiltersProps {
  selectedLevels: string[];
  selectedCredits: string[];
  selectedSemesters: string[];
  toggleSelection: (selectedArray: string[], value: string, setState: React.Dispatch<React.SetStateAction<string[]>>) => void;
  resetFilters: () => void;
  setSelectedLevels: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedCredits: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedSemesters: React.Dispatch<React.SetStateAction<string[]>>;
}

const Filters: React.FC<FiltersProps> = ({
  selectedLevels,
  selectedCredits,
  selectedSemesters,
  toggleSelection,
  resetFilters,
  setSelectedLevels,
  setSelectedCredits,
  setSelectedSemesters,
}) => {
  return (
    <div className="filters">
      <div className="filter-group">
        <label>Course Level</label>
        <div className="multi-select">
          {["1", "2", "3", "4"].map((level) => (
            <label key={level}>
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

      <div className="filter-group">
        <label>Credit Hours</label>
        <div className="multi-select">
          {["0.5", "2", "3", "4"].map((credit) => (
            <label key={credit}>
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

      <div className="filter-group">
        <label>Semesters Offered</label>
        <div className="multi-select">
          {["Fall", "Winter", "Spring", "Summer"].map((semester) => (
            <label key={semester}>
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

      {/* Reset Filters Button */}
      <button onClick={resetFilters} className="reset-button">
        Reset Filters
      </button>
    </div>
  );
};

export default Filters;
