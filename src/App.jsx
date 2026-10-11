
import { useState } from "react";
import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import "./App.css";

function App() {
  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  // Navigation state
const [activePage, setActivePage] = useState("Students");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 4;

  // Form state
  const [showForm, setShowForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newRollNo, setNewRollNo] = useState("");
  const [newDepartment, setNewDepartment] = useState("");

  // Student data
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Laiba Kanwal",
      rollNo: "SE-001",
      department: "Software Engineering",
    },
    {
      id: 2,
      name: "Alishba Islam",
      rollNo: "SE-002",
      department: "Software Engineering",
    },
    {
      id: 3,
      name: "Fatima Noor",
      rollNo: "CS-003",
      department: "Computer Science",
    },
    {
      id: 4,
      name: "Kiran Nadeem",
      rollNo: "CS-004",
      department: "Computer Science",
    },
    {
      id: 5,
      name: "Fatima Noor",
      rollNo: "BBAS-005",
      department: "BBA",
    },
    {
      id: 6,
      name: "Fatima",
      rollNo: "AI-006",
      department: "Artificial Inteligence",
    },
    {
      id: 7,
      name: "Noor",
      rollNo: "CS-007",
      department: "Computer Science",
    },
    {
      id: 8,
      name: "Hira Ahmed",
      rollNo: "SE-008",
      department: "Software Engineering",
    },
  ]);

  // Filter students
  const filteredStudents = students.filter(
    (student) =>
      student.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      student.department
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.max(
    1,
    Math.ceil(filteredStudents.length / studentsPerPage)
  );

  const startIndex = (currentPage - 1) * studentsPerPage;

  const currentStudents = filteredStudents.slice(
    startIndex,
    startIndex + studentsPerPage
  );

  // Delete a student
const handleDeleteStudent = (id) => {
  setStudents((previousStudents) =>
    previousStudents.filter((student) => student.id !== id)
  );
};

  // Add a new student
  const handleAddStudent = () => {
    if (
      !newName.trim() ||
      !newRollNo.trim() ||
      !newDepartment.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: newName.trim(),
      rollNo: newRollNo.trim(),
      department: newDepartment.trim(),
    };

    setStudents((previousStudents) => [
      ...previousStudents,
      newStudent,
    ]);

    // Reset form and search
    setNewName("");
    setNewRollNo("");
    setNewDepartment("");
    setSearchTerm("");
    setCurrentPage(1);
    setShowForm(false);
  };

  return (
    <>
      {/* Navigation bar */}
      <Navbar
  activePage={activePage}
  onNavigate={setActivePage}
/>

      <main className="container py-4">
        
{/* Breadcrumb */}
<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item">
      <button
        className="btn btn-link p-0 text-decoration-none"
        onClick={() => setActivePage("Dashboard")}
      >
        Home
      </button>
    </li>

    <li
      className="breadcrumb-item active"
      aria-current="page"
    >
      {activePage}
    </li>
  </ol>
</nav>


        {/* Page heading */}
        <h1 className="text-center mb-2">
  {activePage === "Students" ? "Student Portal" : activePage}
</h1>

        <p className="text-center text-muted mb-4">
          Manage and explore student information
        </p>

        {activePage === "Students" && (
        <>
        {/* Welcome alert */}
        <div className="alert alert-info" role="alert">
          Welcome! Explore our student directory below.
        </div>

        {/* Search box */}
        <div className="row mb-4">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search by student name or department..."
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>

        {/* Add student button */}
        <div className="d-flex justify-content-end mb-4">
          <button
            className="btn btn-success"
            onClick={() => setShowForm(!showForm)}
          >
            + Add Student
          </button>
        </div>

        {/* Add student form */}
        {showForm && (
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">
                Add New Student
              </h5>

              {/* Student name */}
              <div className="mb-3">
                <label className="form-label">
                  Student Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter student name"
                  value={newName}
                  onChange={(event) =>
                    setNewName(event.target.value)
                  }
                />
              </div>

              {/* Roll number */}
              <div className="mb-3">
                <label className="form-label">
                  Roll Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter roll number"
                  value={newRollNo}
                  onChange={(event) =>
                    setNewRollNo(event.target.value)
                  }
                />
              </div>

              {/* Department */}
              <div className="mb-3">
                <label className="form-label">
                  Department
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter department"
                  value={newDepartment}
                  onChange={(event) =>
                    setNewDepartment(event.target.value)
                  }
                />
              </div>

              {/* Save student */}
              <button
                className="btn btn-primary"
                onClick={handleAddStudent}
              >
                Save Student
              </button>
            </div>
          </div>
        )}

        {/* Student cards */}
        <div className="row g-4" id="students">
          {currentStudents.map((student) => (
            <div
              className="col-6 col-md-3"
              key={student.id}
            >
              <StudentCard
  id={student.id}
  name={student.name}
  rollNo={student.rollNo}
  department={student.department}
  onDelete={handleDeleteStudent}
/>
            </div>
          ))}
        </div>

        {/* Empty search results */}
        {filteredStudents.length === 0 && (
          <p className="text-center text-muted mt-4">
            No students found.
          </p>
        )}

        {/* Pagination */}
        <nav aria-label="Student pages" className="mt-4">
          <ul className="pagination justify-content-center">
            <li
              className={`page-item ${
                currentPage === 1 ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() =>
                  setCurrentPage((page) => page - 1)
                }
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>

            {Array.from(
              { length: totalPages },
              (_, index) => (
                <li
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  key={index}
                >
                  <button
                    className="page-link"
                    onClick={() =>
                      setCurrentPage(index + 1)
                    }
                  >
                    {index + 1}
                  </button>
                </li>
              )
            )}

            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() =>
                  setCurrentPage((page) => page + 1)
                }
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
          </>
)}
      </main>

      {/* Page footer */}
       
      <footer className="bg-dark text-white mt-5 pt-5 pb-3">
        <div className="container">
          <div className="row g-4">
            {/* About section */}
            <div className="col-md-4">
              <h5 className="fw-bold mb-3">Student Portal</h5>
              <p className="text-light">
                A simple portal to explore and manage student information.
              </p>
            </div>


{/* Developer information */}
<div className="col-md-4">
  <h5 className="fw-bold mb-3">Developer Information</h5>
  <p className="mb-2">
    <strong>Name:</strong> Laiba Kanwal
  </p>
  <p className="mb-2">
    <strong>Email:</strong>{" "}
    <a
      href="mailto:YOUR_EMAIL@example.com"
      className="text-white text-decoration-none"
    >
      laibakanwal235@gmail.com
    </a>
  </p>
  <p className="mb-0">
    <strong>Role:</strong> Student/ Visiting Instructor
  </p>
</div>


            {/* Contact section */}
            <div className="col-md-4">
              <h5 className="fw-bold mb-3">Contact Information</h5>
              <p className="mb-2">Email: info@studentportal.com</p>
              <p className="mb-2">Phone: +92 300 0000000</p>
              <p className="mb-0">Location: Karachi, Pakistan</p>
            </div>
          </div>

          <hr className="border-secondary mt-4" />

          <p className="text-center text-light small mb-0">
            © 2026 Student Portal. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;