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
				<button onClick={onClose} className="close-btn">
					<i className="fa-solid fa-xmark"></i>
				</button>

				<h2 className="modal-title">
					{course.code}: {course.title}
				</h2>

				<div className="modal-body">
					<div className="modal-section">
						<div className="modal-subheading">Description:</div> 
						<div className="modal-description">{course.description}</div>
					</div>
					<div className="modal-section">
						<div className="modal-subheading">Credits:</div> 
						<div className="modal-credits">{course.credits}</div>
					</div>
					<div className="modal-section">
						<div className="modal-subheading">Semesters Offered:</div>
						<div className="modal-semesters">
							{ course.semesters.includes("Fall") && (
								<div className="semester fall">
									<i className="fa-solid fa-leaf"></i>
									<div>Fall</div>
								</div>
							)}
							{ course.semesters.includes("Winter") && (
								<div className="semester winter">
									<i className="fa-solid fa-snowflake"></i>
									<div>Winter</div>
								</div>
							)}
							{ course.semesters.includes("Spring") && (
								<div className="semester spring">
									<i className="fa-solid fa-seedling"></i>
									<div>Spring</div>
								</div>
							)}
							{ course.semesters.includes("Summer") && (
								<div className="semester summer">
									<i className="fa-solid fa-sun"></i>
									<div>Summer</div>
								</div>
							)}
						</div>
					</div>
					<div className="modal-section">
						<div className="modal-subheading">Instructors:</div>
						<div className="modal-instructors">{course.instructors.join(", ")}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
