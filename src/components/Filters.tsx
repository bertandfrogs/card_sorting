import React from "react";

interface FiltersProps {
  setSelectedLevel: (level: string) => void;
  setSelectedCredits: (credits: string) => void;
  setSelectedSemester: (semester: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ setSelectedLevel, setSelectedCredits, setSelectedSemester }) => {
  return (
    <div className="filters">
      <div className="filter-group">
        <label>Course Level</label>
        <select onChange={(e) => setSelectedLevel(e.target.value)}>
          <option value="">All</option>
          <option value="1">100 Level</option>
          <option value="2">200 Level</option>
          <option value="3">300 Level</option>
          <option value="4">400 Level</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Department</label>
        <select>
          <option value="">All</option>
          <option value="CS">Computer Science</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Credit Hours</label>
        <select onChange={(e) => setSelectedCredits(e.target.value)}>
          <option value="">All</option>
          <option value="0.5">0.5 Credits</option>
          <option value="2">2.0 Credits</option>
          <option value="3">3.0 Credits</option>
          <option value="4">4.0 Credits</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Semesters Offered</label>
        <select onChange={(e) => setSelectedSemester(e.target.value)}>
          <option value="">All</option>
          <option value="Fall">Fall</option>
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
