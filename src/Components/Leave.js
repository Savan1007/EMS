import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { empId, role } from "../features/authSlice";

const LeavesList = ({ data, func }) => {
  const obj = data.map((element) => {
    return (
      <tr>
        {" "}
        <td>{element.appliedBy}</td>
        <td>
          {" "}
          <b>{element.startDate.slice(0, 10)} </b> to{" "}
          <b>{element.endDate.slice(0, 10)} </b>
        </td>
        <td> {element.reason.slice(0, 15)} </td>
        <td>
          <div className='d-flex align-items-center '>
            <button
              className='btn btn-outline-primary'
              onClick={() => func(element.appliedBy, true)}
            >
              {" "}
              Approve{" "}
            </button>{" "}
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <button
              className='btn btn-floating'
              onClick={() => func(element.appliedBy, false)}
            >
              <i class='far fa-trash-alt text-danger'></i>
            </button>
          </div>
        </td>
      </tr>
    );
  });
  return (
    <div class='col-lg-10'>
      <table class='col-lg-8'>
        <thead>
          <tr>
            <th scope='col'> Employee Id</th>
            <th scope='col'> Dates</th>
            <th scope='col'> Reason</th>
            <th scope='col'> Actions</th>
          </tr>
        </thead>
        <br />
        {obj}
      </table>
    </div>
  );
};

function Leave() {
  const currentRole = useSelector(role);
  const [sdate, setSdate] = useState("");
  const [edate, setEdate] = useState("");
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);
  const currentUser = useSelector(empId);
  const [leaves, setLeaves] = useState([]);

  //https://emplo-eye.herokuapp.com/update/leave
  const ApproveLeave = async (id, type) => {
    setLoading(true);
    const { status } = await axios.post(
      "https://emplo-eye.herokuapp.com/update/leave",
      {
        appliedBy: id,
        status: type ? "Approved" : "Rejected",
      }
    );

    if (status === 200) {
      setLoading(false);
      alert("Operation Performed Successfully");
    }
  };

  const FetchLeaves = async () => {
    const { status, data } = await axios.get(
      "https://emplo-eye.herokuapp.com/leave"
    );
    if (status === 200) {
      setLeaves(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    FetchLeaves();
  }, []);

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
    if (loading) {
      return (
        <div class='d-flex justify-content-center'>
          <div class='spinner-border' role='status'>
            <span class='visually-hidden'>Loading...</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className='container-fluid'>
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
                New Applications
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
                Archives
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
              <LeavesList data={leaves} func={ApproveLeave} />
            </div>
            <div
              class='tab-pane fade'
              id='ex1-tabs-2'
              role='tabpanel'
              aria-labelledby='ex1-tab-2'
            >
              Tab 2 content
            </div>
          </div>
        </div>
      );
    }
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
