import React from "react";

const Filters: React.FC = () => {
  return (
    <div className="filters">
      <div className="filter-group">
        <label>Course Level</label>
        <select>
          <option value="">All</option>
          <option value="100">100 Level</option>
          <option value="200">200 Level</option>
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
        <select>
          <option value="">All</option>
          <option value="3">3.0 Credits</option>
          <option value="0.5">0.5 Credits</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Semesters Offered</label>
        <select>
          <option value="">All</option>
          <option value="Fall">Fall</option>
          <option value="Winter">Winter</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
