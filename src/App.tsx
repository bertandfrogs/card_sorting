import React, { useState } from "react";
import SearchBar from "./components/SearchBar.tsx";
import Filters from "./components/Filters.tsx";
import CourseList from "./components/CourseList.tsx";
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
    <div className="container">
      <h1>BYU Undergraduate Catalog</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <Filters />
      <CourseList courses={filteredCourses} />
    </div>
  );
};

export default App;
