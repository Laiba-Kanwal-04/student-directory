
function Courses() {
    return (
        <div className="container mt-4">
            <h2>Available Courses</h2>

            <p>Explore the programs offered to our students.</p>

            <div className="row g-3">
                <div className="col-md-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">
                                Software Engineering
                            </h5>
                            <p className="card-text">
                                Learn software development and programming.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">
                                Computer Science
                            </h5>
                            <p className="card-text">
                                Study computing concepts and applications.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">
                                Artificial Intelligence
                            </h5>
                            <p className="card-text">
                                Explore intelligent systems and AI concepts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;
