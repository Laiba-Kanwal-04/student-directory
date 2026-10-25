
import { Link, useLocation } from 'react-router-dom'

function Breadcrumb() {
  const location = useLocation()

  const pageNames = {
    '/': 'Home',
    '/dashboard': 'Dashboard',
    '/students': 'Students',
    '/courses': 'Courses',
    '/reports': 'Reports',
    '/add-student': 'Add Student'
}

  const currentPage = pageNames[location.pathname] || 'Page Not Found'

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>

        {location.pathname !== '/' && (
          <li
            className="breadcrumb-item active"
            aria-current="page"
          >
            {currentPage}
          </li>
        )}
      </ol>
    </nav>
  )
}

export default Breadcrumb
