import React, { useState } from "react";
import SearchBar from "./components/SearchBar.tsx";
import Filters from "./components/Filters.tsx";
import CourseList from "./components/CourseList.tsx";
import "./styles.css";

interface Course {
  id: number;
  code: string;
  title: string;
  description: string;
  credits: number;
}

const courses: Course[] = [
  { id: 1, code: "CS 111", title: "Introduction to Computer Science", description: "Teaches how to design, develop, reason about, and test programs.", credits: 3.0 },
  { id: 2, code: "CS 195", title: "Exploring Computer Science", description: "Introduction to the discipline of computer science and its fields.", credits: 0.5 },
  { id: 3, code: "CS 224", title: "Introduction to Computer Systems", description: "How a computer works to execute sequential code.", credits: 3.0 },
  { id: 4, code: "CS 235", title: "Data Structures and Algorithms", description: "Fundamental data structures and algorithms of computer science.", credits: 3.0 }
];

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredCourses = courses.filter(course =>
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
