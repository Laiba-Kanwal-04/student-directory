
import StudentCard from '../components/StudentCard'
import { useState } from 'react'


function Students({ onNavigate }) {
    const [currentPage, setCurrentPage] = useState(1)

    const studentsPerPage = 4
    const totalPages = 2

    const startIndex = (currentPage - 1) * studentsPerPage
    return (

        <div className="container mt-4">

            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="mb-0">Student Portal</h2>
                <button
                    className="btn btn-primary"
                    onClick={() => onNavigate('Add Student')}
                >
                    + Add New Student
                </button>
            </div>


            <div className="alert alert-success alert-dismissible fade show mt-4" role="alert">
                <strong>Success!</strong> Student directory loaded successfully.
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                ></button>
            </div>


            <div className="row">
                {currentPage === 1 && (
                    <>
                        <div className="col-md-3 mb-3">
                            <StudentCard
                                name="Laiba"
                                id="101"
                                program="Software Engineering"
                                year="3"
                                semester="5"
                                gpa="3.25"
                            />
                        </div>

                        <div className="col-md-3 mb-3">
                            <StudentCard
                                name="Kanwal"
                                id="102"
                                program="Computer Science"
                                year="3"
                                semester="6"
                                gpa="3.40"
                            />
                        </div>

                        <div className="col-md-3 mb-3">
                            <StudentCard
                                name="Alishba"
                                id="103"
                                program="Artificial Intelligence"
                                year="1"
                                semester="2"
                                gpa="3.10"
                            />
                        </div>

                        <div className="col-md-3 mb-3">
                            <StudentCard
                                name="Kiran"
                                id="104"
                                program="Computer Science"
                                year="4"
                                semester="7"
                                gpa="3.50"
                            />
                        </div>
                    </>
                )}

                {currentPage === 2 && (
                    <>

                        <div className="col-md-3 mb-3">
                            <StudentCard
                                name="Ali"
                                id="105"
                                program="Software Engineering"
                                year="1"
                                semester="1"
                                gpa="3.00"
                            />
                        </div>

                        <div className="col-md-3 mb-3">
                            <StudentCard
                                name="Batool"
                                id="106"
                                program="Software Engineering"
                                year="1"
                                semester="2"
                                gpa="3.60"
                            />
                        </div>

                    </>
                )}
            </div>


            <nav className="mt-4 mb-4" aria-label="Student directory pagination">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                    </li>

                    <li className={`page-item ${currentPage === 1 ? 'active' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => setCurrentPage(1)}
                        >
                            1
                        </button>
                    </li>

                    <li className={`page-item ${currentPage === 2 ? 'active' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => setCurrentPage(2)}
                        >
                            2
                        </button>
                    </li>



                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>


        </div>
    )
}

export default Students
