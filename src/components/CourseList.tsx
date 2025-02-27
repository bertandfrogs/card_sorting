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
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const CourseList: React.FC<CourseListProps> = ({ courses, currentPage, setCurrentPage }) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [coursesPerPage, setCoursesPerPage] = useState(6); // Default courses per page

  // Calculate indexes for slicing
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const totalPages = Math.ceil(courses.length / coursesPerPage);

  const handleOpenModal = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Change courses per page
  const handleCoursesPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCoursesPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to first page when changing per-page limit
  };

  return (
    <div className="course-list">
      {/* Pagination Controls */}
      <div className="pagination-controls">
        <label>Courses per page:</label>
        <select value={coursesPerPage} onChange={handleCoursesPerPageChange}>
          <option value="3">3</option>
          <option value="6">6</option>
          <option value="9">9</option>
          <option value="12">12</option>
        </select>
      </div>
      {courses.length === 0 ? (
        <div className="no-courses-message">
          <h2>No courses found</h2>
          <p>Try adjusting the filters to find more courses.</p>
        </div>
      ) : (
        <>
          {/* Course Cards */}
          <div className="course-grid">
            {currentCourses.map((course) => (
              <div key={course.id} className="course-card" onClick={() => handleOpenModal(course)}>
                <h3 className="course-card-header">
            <div>{course.code}</div> 
            <div>{course.title}</div>
          </h3>
                <p className="course-description">{course.description}</p>
                <p><strong>Credits:</strong> {course.credits}</p>
          <div className="view-course-btn">
            <p className="course-btn-text">View Course</p>
            <i className="fa-solid fa-angle-right"></i>
          </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Pagination Buttons */}
      <div className="pagination">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>

        <span>Page {courses.length === 0 ? 0 : currentPage} of {totalPages || 0}</span>

        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} course={selectedCourse} />
    </div>
  );
};

export default CourseList;
