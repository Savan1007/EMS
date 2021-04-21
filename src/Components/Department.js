import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { empId, role } from "../features/authSlice";
import axios from "axios";

const TableViewer = (props) => {
  let filteredData = props.serverData.filter((element) => {
    return (
      element.empId.includes(props.filter) ||
      element.empName.includes(props.filter)
    );
  });

  const uiObj = filteredData.map((element) => {
    return (
      <tr>
        {" "}
        <td>
          <Link to={`/profile/${element.empId}`}>{element.empId}</Link>
        </td>
        <td> {element.empName} </td> <td> {element.empDesign} </td>{" "}
        <td> {element.email} </td>{" "}
      </tr>
    );
  });
  // console.log(props);
  return (
    <div class='col-lg-10'>
      <table class='col-lg-8'>
        <thead>
          <tr>
            <th scope='col'> Employee Id</th>
            <th scope='col'> Name</th>
            <th scope='col'> Designation</th>
            <th scope='col'> Email</th>
          </tr>
        </thead>
        <br />
        {uiObj}
      </table>
    </div>
  );
};

function Department() {
  const currentRole = useSelector(role);
  const [filter, setFilter] = useState("");
  const [addMode, setAddMode] = useState(false);
  const [currentdata, setcurrentData] = useState([]);
  const currentuserId = useSelector(empId);
  const [loading, setloading] = useState(false);

  //Hooks For New Employee
  const [added, setAdded] = useState(false);
  const [newEmpId, setEmpId] = useState("");
  const [newName, setName] = useState("");
  const [newEmail, setEmail] = useState("");
  const [newDesignation, setDesignation] = useState("");
  const [newSalary, setSalary] = useState("");
  const [newDept, setDept] = useState("");

  const FetchData = () => {
    setloading(true);
    axios
      .get(`https://emplo-eye.herokuapp.com/dept/${currentuserId}`)
      .then((result) => {
        console.log(result);
        setcurrentData(result.data);
        setloading(false);
      });
  };

  const AddnewEmployee = async () => {
    setloading(true);
    const pass = Math.random().toString(36).substring(2, 8);
    const { status, data } = await axios.post(
      "https://emplo-eye.herokuapp.com/new/employee",
      {
        empId: newEmpId,
        empName: newName,
        password: pass,
        role: "EMP",
        email: newEmail,
        empDesign: newDesignation,
        empSalary: newSalary,
        deptName: newDept,
      }
    );
    if (status === 200) {
      sendMail(newEmail, newEmpId, pass);
    }
  };

  const AddnewMGR = async () => {
    setloading(true);
    const pass = Math.random().toString(36).substring(2, 12);
    const { status } = await axios.post(
      "https://emplo-eye.herokuapp.com/new/employee",
      {
        empId: newEmpId,
        empName: newName,
        password: pass,
        role: "MGR",
        email: newEmail,
        empDesign: newDesignation,
        empSalary: newSalary,
        deptName: newDept,
      }
    );
    if (status === 200) {
      sendMail(newEmail, newEmpId, pass);
    } else {
      setloading(false);
      alert("Something Went Wrong");
    }
  };

  const sendMail = async (email, id, pass) => {
    const { status, data } = await axios.post(
      "https://webstarkmail.herokuapp.com/api/email/send",
      {
        email: email,
        subject: "Account Password | Emploeye",
        data: `Dear User,<br>Your are invited to emplo-eye application. Here are your credentials<br><br> userid : <b> ${id} </b> <br> password : <b> ${pass} </b> <br><br> For more reference, visit link below`,
        ref: "Emploeye",
        userlink: "emplo-eye.web.app",
        api_key: "8qbr96cw",
      }
    );
    if (status === 200) {
      setloading(false);
      setAdded(true);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  if (currentRole === "MGR") {
    if (loading) {
      return (
        <div class='d-flex justify-content-center'>
          <div class='spinner-border' role='status'>
            <span class='visually-hidden'>Loading...</span>
          </div>
        </div>
      );
    } else if (addMode) {
      return (
        <div className='container-fluid pb-5'>
          {added ? (
            <div className='d-flex justify-content-center pb-5'>
              <div
                class='alert alert-success mb-0 alert-dismissible alert-absolute fade show '
                id='alertExample'
                role='alert'
                data-mdb-color='secondary'
              >
                <i class='fas fa-check me-2'></i>
                Employee Added Successfully!
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

          <button
            class='btn btn-floating'
            onClick={() => {
              setAddMode(false);
            }}
          >
            <i class='fas fa-arrow-circle-left'></i>
          </button>
          <div className='row d-flex justify-content-center pb-5'>
            <div className='col-lg-6'>
              <h5 className='bar'> Add a new Employee </h5>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  AddnewEmployee();
                }}
              >
                <label class='form-label mt-2' for='form1Example1'>
                  Employee ID
                </label>

                <input
                  type='text'
                  id='form1Example1'
                  class='form-control'
                  onChange={(e) => {
                    setEmpId(e.target.value);
                  }}
                  required
                />

                <label class='form-label mt-2' for='form1Example1'>
                  Name
                </label>
                <input
                  type='text'
                  id='form1Example1'
                  class='form-control'
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />

                <label class='form-label mt-2' for='form1Example1'>
                  Role
                </label>
                <input
                  type='text'
                  id='form1Example1'
                  class='form-control'
                  value='Employee'
                  disabled
                />
                <label class='form-label mt-2' for='form1Example1'>
                  Email
                </label>
                <input
                  type='text'
                  id='form1Example1'
                  class='form-control'
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
                <label class='form-label mt-2' for='form1Example1'>
                  Designation
                </label>
                <input
                  type='text'
                  id='form1Example1'
                  class='form-control'
                  onChange={(e) => {
                    setDesignation(e.target.value);
                  }}
                  required
                />
                <label class='form-label mt-2' for='form1Example1'>
                  Salary
                </label>
                <input
                  type='text'
                  id='form1Example1'
                  class='form-control'
                  onChange={(e) => {
                    setSalary(e.target.value);
                  }}
                  required
                />
                <label class='form-label mt-2' for='form1Example1'>
                  Department
                </label>
                <input
                  type='text'
                  id='form1Example1'
                  class='form-control'
                  onChange={(e) => {
                    setDept(e.target.value);
                  }}
                  required
                />
                <button
                  className='btn btn-outline-primary mt-5 px-5'
                  type='submit'
                >
                  Add
                </button>
                <button
                  className='btn btn-outline-black mt-5 mx-5'
                  type='reset'
                >
                  Reset
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-11 d-flex justify-content-end align-items-center'>
              <button
                className='btn btn-outline-dark'
                onClick={() => {
                  setAddMode(true);
                }}
              >
                Add Employee
              </button>
            </div>
          </div>

          <div className='row g-5'>
            <div className='col-lg-11 '>
              {/* // ! Change with variable */}
              <h3 className='text-primary '>IT Department</h3>
              <p className='bar pb-3'>Employees</p>
              <input
                type='search'
                placeholder='filter'
                className='form-control'
                value={filter}
                onChange={(e) => {
                  setFilter(e.target.value);
                }}
              />
            </div>
          </div>

          <div className='row g-5 mt-1'>
            <div className='col-lg-12 '>
              {/* // ! Change with variable */}
              <TableViewer serverData={currentdata} filter={filter} />
            </div>
          </div>
        </div>
      );
    }
  } else if (currentRole === "EMP") {
    return loading ? (
      <div class='d-flex justify-content-center'>
        <div class='spinner-border' role='status'>
          <span class='visually-hidden'>Loading...</span>
        </div>
      </div>
    ) : (
      <>
        <div className='container-fluid'>
          <div className='row g-5'>
            <div className='col-lg-11 '>
              {/* // ! Change with variable */}
              <h3 className='text-primary '>IT Department</h3>
              <p className='bar pb-3'>Employees</p>
              <input
                type='search'
                placeholder='filter'
                className='form-control'
                value={filter}
                onChange={(e) => {
                  setFilter(e.target.value);
                }}
              />
            </div>
          </div>

          <div className='row g-5 mt-1'>
            <div className='col-lg-12 '>
              <TableViewer serverData={currentdata} filter={filter} />
            </div>
          </div>
        </div>
      </>
    );
  } else if (currentRole === "ADM") {
    if (loading) {
      return (
        <div class='d-flex justify-content-center'>
          <div class='spinner-border' role='status'>
            <span class='visually-hidden'>Loading...</span>
          </div>
        </div>
      );
    } else if (addMode) {
      return (
        <div className='container-fluid pb-5'>
          {added ? (
            <div className='d-flex justify-content-center pb-5'>
              <div
                class='alert alert-success mb-0 alert-dismissible alert-absolute fade show '
                id='alertExample'
                role='alert'
                data-mdb-color='secondary'
              >
                <i class='fas fa-check me-2'></i>
                Manager Added Successfully!
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

          <button
            class='btn btn-floating'
            onClick={() => {
              setAddMode(false);
            }}
          >
            <i class='fas fa-arrow-circle-left'></i>
          </button>
          <div className='row d-flex justify-content-center pb-5'>
            <div className='col-lg-6'>
              <h5 className='bar'> Add a new Manager </h5>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  AddnewMGR();
                }}
              >
                <label class='form-label mt-2' for='form1Example1'>
                  Manager ID
                </label>

                <input
                  type='text'
                  id='form1Example1'
                  class='form-control'
                  onChange={(e) => {
                    setEmpId(e.target.value);
                  }}
                  required
                />

                <label class='form-label mt-2' for='form1Example1'>
                  Name
                </label>
                <input
                  type='text'
                  id='form1Example1'
                  class='form-control'
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />

                <label class='form-label mt-2' for='form1Example1'>
                  Role
                </label>
                <input
                  type='text'
                  id='form1Example1'
                  class='form-control'
                  value='Manager'
                  disabled
                />
                <label class='form-label mt-2' for='form1Example1'>
                  Email
                </label>
                <input
                  type='text'
                  id='form1Example1'
                  class='form-control'
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
                <label class='form-label mt-2' for='form1Example1'>
                  Designation
                </label>
                <input
                  type='text'
                  id='form1Example1'
                  class='form-control'
                  onChange={(e) => {
                    setDesignation(e.target.value);
                  }}
                  required
                />
                <label class='form-label mt-2' for='form1Example1'>
                  Salary
                </label>
                <input
                  type='text'
                  id='form1Example1'
                  class='form-control'
                  onChange={(e) => {
                    setSalary(e.target.value);
                  }}
                  required
                />
                <label class='form-label mt-2' for='form1Example1'>
                  Department
                </label>
                <input
                  type='text'
                  id='form1Example1'
                  class='form-control'
                  onChange={(e) => {
                    setDept(e.target.value);
                  }}
                  required
                />
                <button
                  className='btn btn-outline-primary mt-5 px-5'
                  type='submit'
                >
                  Add
                </button>
                <button
                  className='btn btn-outline-black mt-5 mx-5'
                  type='reset'
                >
                  Reset
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-11 d-flex justify-content-end align-items-center'>
              <button
                className='btn btn-outline-dark'
                onClick={() => {
                  setAddMode(true);
                }}
              >
                Add Manager
              </button>
            </div>
          </div>

          <div className='row g-5'>
            <div className='col-lg-11 '>
              {/* // ! Change with variable */}
              <h3 className='text-primary '>IT Department</h3>
              <p className='bar pb-3'>Employees</p>
              <input
                type='search'
                placeholder='filter'
                className='form-control'
                value={filter}
                onChange={(e) => {
                  setFilter(e.target.value);
                }}
              />
            </div>
          </div>

          <div className='row g-5 mt-1'>
            <div className='col-lg-12 '>
              {/* // ! Change with variable */}
              <TableViewer serverData={currentdata} filter={filter} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Department;
