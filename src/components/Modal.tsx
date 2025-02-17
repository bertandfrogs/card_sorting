import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: {
    id: number;
    code: string;
    title: string;
    description: string;
    credits: number;
    semesters: string[];
    instructors: string[];
  } | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, course }) => {
  if (!isOpen || !course) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">{course.code}: {course.title}</h2>

        <div className="modal-grid">
          <div className="grid-item description">
            <h3>Description</h3>
            <p>{course.description}</p>
          </div>

          <div className="grid-item credits">
            <h3>Credits</h3>
            <p>{course.credits}</p>
          </div>

          <div className="grid-item semesters">
            <h3>Semesters Offered</h3>
            <p>{course.semesters.join(", ")}</p>
          </div>

          <div className="grid-item instructors">
            <h3>Instructors</h3>
            <p>{course.instructors.join(", ")}</p>
          </div>
        </div>

        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
};

export default Modal;
