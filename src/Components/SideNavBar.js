import React from "react";
import { NavLink } from "react-router-dom";

function SideNavBar(props) {
  console.log(props);
  return (
    <div className=''>
      <div class='container-fluid'>
        <div class='row'>
          <div class='col-xl-2 min-vh-100 bg-light border border-top-0 d-flex'>
            <div class='container'>
              <div class='row mt-3'>
                <NavLink
                  className='nav-item nw p-2'
                  activeClassName='text-primary'
                  to='/Dashboard'
                >
                  <i class='fas fa-home'></i> &nbsp; Dashboard
                </NavLink>
              </div>
              <div class='row mt-3'>
                <NavLink
                  className='nav-item nw p-2 '
                  activeClassName='text-primary'
                  to='/department'
                >
                  <i class='fas fa-building'></i> &nbsp; Department
                </NavLink>
              </div>
              <div class='row mt-3'>
                <NavLink
                  className='nav-item nw p-2 '
                  activeClassName='text-primary'
                  to='/project'
                >
                  <i class='fas fa-project-diagram'></i> &nbsp;Projects
                </NavLink>
              </div>
              <div class='row mt-3'>
                <NavLink
                  className='nav-item nw p-2 '
                  activeClassName='text-primary'
                  to='/tasks'
                >
                  <i class='fas fa-list'></i> &nbsp; Tasks
                </NavLink>
              </div>
              <div class='row mt-3'>
                <NavLink
                  className='nav-item nw p-2 '
                  activeClassName='text-primary'
                  to='/leave'
                >
                  <i class='fas fa-clipboard'></i> &nbsp; Leave
                </NavLink>
              </div>
              <div class='row mt-3'>
                <NavLink
                  className='nav-item nw p-2 '
                  activeClassName='text-primary'
                  to='/salary'
                >
                  <i class='fas fa-money-check'></i> &nbsp; Salary
                </NavLink>
              </div>
              <div class='row mt-3'>
                <NavLink
                  className='nav-item nw p-2 '
                  activeClassName='text-primary'
                  to='/events'
                >
                  <i class='fas fa-calendar-week'></i> &nbsp; Events
                </NavLink>
              </div>
            </div>
          </div>
          <div class='col-xl-10 min-vh-100 bg-light mt-5'>{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default SideNavBar;
