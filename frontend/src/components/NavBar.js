const NavBar = () => {
  return (
    <div className="nav-bar">
      <nav className="navbar navbar-expand-md primaryBgColor">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home-page">
            Daniel Lisko
          </a>
          <button
            className="navbar-toggler me-3"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/*Navbar Content */}
          <div
            className="collapse navbar-collapse me-3 flex-row-reverse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-4 mb-sm-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#home-page"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about-me">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#resume">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link contact-me" href="#contact-me">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
