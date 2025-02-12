import React from "react";
import { Course } from "../types";

interface CourseListProps {
  courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <div className="course-section">
      {courses.map((course) => (
        <div key={course.id} className="course-card">
          <h3>{course.code}: {course.title}</h3>
          <p>{course.description}</p>
          <p><strong>Credits:</strong> {course.credits}</p>
          <button className="view-course-btn">View Course</button>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
