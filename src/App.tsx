import React, { useState } from "react";
import Layout from "./components/Layout.tsx";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import CourseList from "./components/CourseList";
import coursesData from "./assets/courses.json";
import "./styles.css";

interface Course {
  id: number;
  code: string;
  title: string;
  description: string;
  credits: number;
}

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredCourses = coursesData.filter((course: Course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="catalog-container">
        {/* Left Section: Search and Filters */}
        <div className="sidebar">
          <SearchBar setSearchTerm={setSearchTerm} />
          <Filters />
        </div>

        {/* Right Section: Course List */}
        <div className="course-section">
          <CourseList courses={filteredCourses} />
        </div>
      </div>
    </Layout>
  );
};

export default App;
