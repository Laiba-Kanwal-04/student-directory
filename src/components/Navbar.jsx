
function Navbar({ activePage, onNavigate }) {
  const menuItems = [
    "Dashboard",
    "Students",
    "Courses",
    "Reports",
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a
          className="navbar-brand"
          href="#"
          onClick={(event) => {
            event.preventDefault();
            onNavigate("Dashboard");
          }}
        >
          Student Portal
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto">
            {menuItems.map((item) => (
              <li className="nav-item" key={item}>
                <button
                  className={`nav-link btn btn-link ${
                    activePage === item ? "active" : ""
                  }`}
                  onClick={() => onNavigate(item)}
                >
                  {item}
                </button>
              </li>
            ))}

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Settings
              </button>

              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => onNavigate("Profile Settings")}
                  >
                    Profile Settings
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => onNavigate("Preferences")}
                  >
                    Preferences
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
