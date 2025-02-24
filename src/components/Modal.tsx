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

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close modal if clicked on overlay
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        {/* Close button positioned at the top-right */}
        <button onClick={onClose} className="close-btn">✖</button>

        <h2 className="modal-title">
          {course.code}: {course.title}
        </h2>

        <div className="modal-body">
          <p><strong>Description:</strong> {course.description}</p>
          <p><strong>Credits:</strong> {course.credits}</p>
          <p><strong>Semesters Offered:</strong> {course.semesters.join(", ")}</p>
          <p><strong>Instructors:</strong> {course.instructors.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
