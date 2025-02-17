import React from "react";

interface Course {
  id: number;
  code: string;
  title: string;
  description: string;
  credits: number;
  semesters: string[];
}

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="course-card">
      <h3>{course.code}</h3>
      <h4>{course.title}</h4>
      <p>{course.description}</p>
      <p><strong>{course.credits} Credits</strong></p>
      <a href="#" className="view-course-btn">View Course</a>
    </div>
  );
};

export default CourseCard;
