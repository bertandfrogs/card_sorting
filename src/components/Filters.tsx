import React from "react";

const Filters: React.FC = () => {
  return (
    <div className="filters">
      <h2>Filters</h2>
      <select className="filter-dropdown">
        <option>Course Level</option>
      </select>
      <select className="filter-dropdown">
        <option>Department</option>
      </select>
      <select className="filter-dropdown">
        <option>Credit Hours</option>
      </select>
      <select className="filter-dropdown">
        <option>Semesters Offered</option>
      </select>
    </div>
  );
};

export default Filters;
