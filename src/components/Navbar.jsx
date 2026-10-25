
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    StudentPortal
                </Link>

                <div className="navbar-nav">
                    <Link className="nav-link" to="/dashboard">
                        Dashboard
                    </Link>

                    <Link className="nav-link" to="/students">
                        Students
                    </Link>

                    <Link className="nav-link" to="/courses">
                        Courses
                    </Link>

                    <Link className="nav-link" to="/reports">
                        Reports
                    </Link>

                </div>
                <form className="d-flex" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-light" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar
