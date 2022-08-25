import React from "react";
import { Link } from "react-router-dom";

function TabNav() {
  return (
    <div id="tab-nav">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            aria-current="page"
            className="nav-link active"
            to="/edit-profile/main-content"
          >
            Main Content
          </Link>
        </li>
        <li className="nav-item nav-link">
          <Link aria-current="page" to="/edit-profile/projects">
            Edit Projects
          </Link>
        </li>
        <li className="nav-item nav-link">
          <Link aria-current="page" to="/edit-profile/resume">
            Edit Resume
          </Link>
        </li>

        <li>
          <button>
            <Link aria-current="page" to="/">
              Log Out
            </Link>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default TabNav;
