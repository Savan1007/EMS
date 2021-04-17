import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { empId, Logout } from "../features/authSlice";

export default function Navbar() {
  const history = useHistory();
  const userId = useSelector(empId);
  return (
    <div className='container-fluid'>
      <nav class='navbar navbar-expand-lg navbar-light bg-light'>
        <div class='container-fluid'>
          <Link class='navbar-brand' to='/'>
            <img
              width='100px'
              src='https://raw.githubusercontent.com/Savan1007/EMS/main/image.png'
            ></img>
          </Link>

          <button
            class='navbar-toggler'
            type='button'
            data-mdb-toggle='collapse'
            data-mdb-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <i class='fas fa-bars'></i>
          </button>

          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav me-auto mb-2 mb-lg-0'></ul>
            <div class='nav-item dropdown'>
              <div
                class='nav-link dropdown-toggle px-5'
                href='#'
                id='navbarDropdown'
                role='button'
                data-mdb-toggle='dropdown'
                aria-expanded='false'
              >
                {userId}
              </div>

              <ul class='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li>
                  <Link class='dropdown-item' to='/profile'>
                    <i class='far fa-id-badge'></i> &nbsp; Profile
                  </Link>
                </li>
                <li>
                  <Link class='dropdown-item' to='/notifications'>
                    <i class='far fa-bell'></i> &nbsp;Notifications
                  </Link>
                </li>
                <li>
                  <hr class='dropdown-divider' />
                </li>
                <li>
                  <button
                    class='dropdown-item'
                    onClick={() => {
                      Logout();

                      history.push("/");
                      window.location.reload();
                    }}
                  >
                    <i class='fas fa-sign-out-alt'></i> &nbsp;Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
