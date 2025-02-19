import React, { useState } from "react";
import Layout from "./components/Layout.tsx";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import CourseList, { Course } from "./components/CourseList";
import coursesDataRaw from "./assets/courses.json"; // Fix for JSON import
import { Helmet } from "react-helmet-async";
import "./styles.css";

const coursesData = coursesDataRaw as Course[];

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [selectedCredits, setSelectedCredits] = useState<string>("");
  const [selectedSemester, setSelectedSemester] = useState<string>("");

  const filteredCourses = coursesData
    .filter((course: Course) =>
      searchTerm === "" ||
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((course: Course) =>
      selectedLevel === "" || course.level === parseInt(selectedLevel)
    )
    .filter((course: Course) =>
      selectedCredits === "" || course.credits.toString() === selectedCredits
    )
    .filter((course: Course) =>
      selectedSemester === "" || course.semesters.includes(selectedSemester)
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
              setSelectedLevel={setSelectedLevel}
              setSelectedCredits={setSelectedCredits}
              setSelectedSemester={setSelectedSemester}
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