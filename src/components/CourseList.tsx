import React from "react";
import CourseCard from "./CourseCard.tsx";

interface Course {
  id: number;
  code: string;
  title: string;
  description: string;
  credits: number;
}

interface CourseListProps {
  courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <div className="course-list">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
