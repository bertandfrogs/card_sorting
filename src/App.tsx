import React, { useState } from "react";
import Layout from "./components/Layout.tsx";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import CourseList, { Course } from "./components/CourseList";
import coursesDataRaw from "./assets/courses.json";
import { Helmet } from "react-helmet-async";
import "./styles.css";

const coursesData = coursesDataRaw as Course[];

// Get unique instructors from courses.json
const allInstructors = Array.from(
  new Set(coursesData.flatMap((course) => course.instructors))
);

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedCredits, setSelectedCredits] = useState<string[]>([]);
  const [selectedSemesters, setSelectedSemesters] = useState<string[]>([]);
  const [selectedInstructors, setSelectedInstructors] = useState<string[]>([]);

  // Function to toggle selected options
  const toggleSelection = (selectedArray: string[], value: string, setState: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (selectedArray.includes(value)) {
      setState(selectedArray.filter((item) => item !== value)); // Remove if already selected
    } else {
      setState([...selectedArray, value]); // Add if not selected
    }
  };

  // Reset Filters Function
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedLevels([]);
    setSelectedCredits([]);
    setSelectedSemesters([]);
    setSelectedInstructors([]);
  };

  const filteredCourses = coursesData
    .filter((course: Course) =>
      searchTerm === "" ||
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((course: Course) =>
      selectedLevels.length === 0 || selectedLevels.includes(course.level.toString())
    )
    .filter((course: Course) =>
      selectedCredits.length === 0 || selectedCredits.includes(course.credits.toString())
    )
    .filter((course: Course) =>
      selectedSemesters.length === 0 || selectedSemesters.some((sem) => course.semesters.includes(sem))
    )
    .filter((course: Course) =>
      selectedInstructors.length === 0 || selectedInstructors.some((inst) => course.instructors.includes(inst))
    );

  return (
    <>
      <Helmet>
        <title>BYU Course Catalog</title>
        <link rel="icon" type="image/svg" href="/favicon.svg" />
      </Helmet>
      <Layout>
        <div className="catalog-container">
          {/* Left Section: Search and Filters */}
          <div className="sidebar">
            <SearchBar setSearchTerm={setSearchTerm} />
            <Filters
              selectedLevels={selectedLevels}
              selectedCredits={selectedCredits}
              selectedSemesters={selectedSemesters}
              selectedInstructors={selectedInstructors}
              allInstructors={allInstructors}
              toggleSelection={toggleSelection}
              resetFilters={resetFilters}
              setSelectedLevels={setSelectedLevels}
              setSelectedCredits={setSelectedCredits}
              setSelectedSemesters={setSelectedSemesters}
              setSelectedInstructors={setSelectedInstructors}
            />
          </div>

          {/* Right Section: Course List */}
          <CourseList courses={filteredCourses} />
        </div>
      </Layout>
    </>
  );
};

export default App;
