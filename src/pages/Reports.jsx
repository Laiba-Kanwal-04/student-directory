
function Reports() {
    return (
        <div className="container mt-4">
            <h2>Student Reports</h2>

            <p>Overview of student records in the directory.</p>

            <div className="row g-3">
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title">
                                Total Students
                            </h5>
                            <h3>6</h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title">
                                Total Courses
                            </h5>
                            <h3>3</h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title">
                                Directory Status
                            </h5>
                            <h3>Active</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="alert alert-info mt-4">
                This report provides a basic overview of the student directory.
            </div>
        </div>
    );
}

export default Reports;
