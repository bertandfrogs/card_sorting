import React, { useState } from "react";
import Modal from "./Modal";

export interface Course {
    id: number;
	level: number;
    code: string;
    title: string;
    description: string;
    credits: number;
	semesters: string[];
    instructors: string[];
  }
interface CourseListProps {
  courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <div className="course-section">
      {courses.map((course) => (
        <div key={course.id} className="course-card" onClick={() => handleOpenModal(course)}>
          <h3 className="course-card-header">{course.code}: {course.title}</h3>
          <p className="course-description">{course.description}</p>
          <p><strong>Credits:</strong> {course.credits}</p>
          <button className="view-course-btn">
            View Course
          </button>
        </div>
      ))}
      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} course={selectedCourse} />
    </div>
  );
};

export default CourseList;
