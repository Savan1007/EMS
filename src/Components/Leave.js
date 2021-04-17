import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { empId, role } from "../features/authSlice";

const TableViewer = ({ data, filter }) => {
  let filteredData = data.filter((element) => {
    return (
      element.empid.includes(filter) ||
      element.LeaveCat.includes(filter) ||
      element.empName.includes(filter) ||
      element.leaveStatus.includes(filter)
    );
  });

  const uiObj = filteredData.map((element) => {
    return (
      <tr>
        <td scope='col'>
          <Link to={`view/leave/${element.empid}`}>{element.empid}</Link>
        </td>
        <td scope='col'>
          <Link to={`view/leave/${element.empid}`}>{element.empName}</Link>
        </td>
        <td scope='col'>{element.LeaveCat}</td>
        <td scope='col'>{element.leaveStatus}</td>
      </tr>
    );
  });
  return (
    <table>
      <thread>
        <tr>
          <th scope='col'>Employee ID</th>
          <th scope='col'>Employee Name</th>
          <th scope='col'>Leave Category</th>
          <th scope='col'>Status</th>
        </tr>
        <br />
        {uiObj}
      </thread>
    </table>
  );
};

function Leave() {
  const currentRole = useSelector(role);
  const [filter, setFilter] = useState("");
  const [sdate, setSdate] = useState("");
  const [edate, setEdate] = useState("");
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);
  const currentUser = useSelector(empId);

  const ApplyForLeave = async () => {
    // console.log();
    setLoading(true);
    const { status, data } = await axios.post(
      `https://emplo-eye.herokuapp.com/new/leave`,
      {
        appliedBy: currentUser,
        startDate: sdate,
        endDate: edate,
        reason: reason,
      }
    );
    if (status === 200) {
      console.log("Done");
      setLoading(false);
      setAdded(true);
    }
  };

  if (currentRole === "MGR") {
    return (
      <div className='container-fluid'>
        <div className='col-lg-11 pt-5'>
          <h3 className='text-primary '>Leave</h3>
          <p className='bar pb-3'>Employees seeking Leave</p>
        </div>
        <input
          type='search'
          placeholder='filter'
          className='form-control'
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
        <div className='row g-5 mt-1'>
          <div className='col-lg-11'>
            {/* <TableViewer data={DummyData} filter={filter} /> */}
          </div>
        </div>
      </div>
    );
  } else if (currentRole === "EMP") {
    return (
      <div className='container-fluid'>
        {added ? (
          <div className='d-flex justify-content-center pb-5'>
            <div
              class='alert alert-success mb-0 alert-dismissible alert-absolute fade show '
              id='alertExample'
              role='alert'
              data-mdb-color='secondary'
            >
              <i class='fas fa-check me-2'></i>
              Applied Successfully!
              <button
                type='button'
                class='btn-close ms-2'
                data-mdb-dismiss='alert'
                aria-label='Close'
                onClick={() => {
                  setAdded(false);
                }}
              ></button>
            </div>
          </div>
        ) : (
          <></>
        )}
        <ul class='nav nav-tabs mb-3' id='ex1' role='tablist'>
          <li class='nav-item' role='presentation'>
            <a
              class='nav-link active'
              id='ex1-tab-1'
              data-mdb-toggle='tab'
              href='#ex1-tabs-1'
              role='tab'
              aria-controls='ex1-tabs-1'
              aria-selected='true'
            >
              New Leave Request
            </a>
          </li>
          <li class='nav-item' role='presentation'>
            <a
              class='nav-link'
              id='ex1-tab-2'
              data-mdb-toggle='tab'
              href='#ex1-tabs-2'
              role='tab'
              aria-controls='ex1-tabs-2'
              aria-selected='false'
            >
              Leave Archives
            </a>
          </li>
        </ul>

        <div class='tab-content' id='ex1-content'>
          <div
            class='tab-pane fade show active'
            id='ex1-tabs-1'
            role='tabpanel'
            aria-labelledby='ex1-tab-1'
          >
            <div className='col-lg-6 p-2 mt-2 pt-5'>
              <form
                onSubmit={(e) => {
                  setLoading(true);
                  e.preventDefault();
                  ApplyForLeave();
                }}
              >
                <label className='pb-2'>Reason : </label>
                <textarea
                  className='form-control'
                  value={reason}
                  onChange={(e) => {
                    setReason(e.target.value);
                  }}
                  required
                />
                <div className='d-flex mt-5 g-5 justify-content-between'>
                  <div>
                    <label className='pb-2'>Start Date : </label>
                    <input
                      type='date'
                      className='form-control'
                      value={sdate}
                      onChange={(e) => {
                        setSdate(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div>
                    <label className='pb-2'>End Date : </label>
                    <input
                      type='date'
                      className='form-control'
                      value={edate}
                      onChange={(e) => {
                        setEdate(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>
                <button
                  className='btn btn-primary mt-5'
                  type='submit'
                  disabled={loading}
                >
                  Apply
                </button>
              </form>
            </div>
          </div>
          <div
            class='tab-pane fade'
            id='ex1-tabs-2'
            role='tabpanel'
            aria-labelledby='ex1-tab-2'
          >
            No Leaves yet!
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='container-fluid'>
        <div className='col-lg-11'>
          <h3 className='text-primary '>Leave</h3>
          <p className='bar pb-3'>Applied Leave</p>
        </div>
        <input type='search' placeholder='filter' className='form-control' />
      </div>
    );
  }
}

export default Leave;
