import React, { useState } from "react";
import Modal from "./Modal";

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
        <div key={course.id} className="course-card">
          <h3>{course.code}: {course.title}</h3>
          <p>{course.description}</p>
          <p><strong>Credits:</strong> {course.credits}</p>
          <button className="view-course-btn" onClick={() => handleOpenModal(course)}>
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
