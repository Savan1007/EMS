import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { empId } from "../features/authSlice";

function Profile() {
  const [userProfile, setUserProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const currentUser = useSelector(empId);

  //User update Hooks
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Gender, setGender] = useState("");
  const [ContactNo, setContactNo] = useState("");
  const [Address, setAddress] = useState("");
  const [Password, setPassword] = useState("");
  const [Dob, setDob] = useState("");
  const [AccNo, setAccNo] = useState("");

  const FetchProfile = async () => {
    setLoading(true);
    const { status, data } = await axios.get(
      `https://emplo-eye.herokuapp.com/profile/${currentUser}`
    );
    if (status === 200) {
      console.log(data);
      setUserProfile(data);
      setLoading(false);
      setName(data.empName);
      setGender(data.gender);
      setEmail(data.email);
      setAddress(data.address);
      setContactNo(data.phoneNo);
      setPassword(data.password);
      setDob(data.dob);
      setAccNo(data.accNo);
    }
  };

  const UpdateProfile = async () => {
    setLoading(true);
    const { status, data } = await axios.post(
      "https://emplo-eye.herokuapp.com/update/employee",
      {
        empId: currentUser,
        empName: Name,
        password: Password,
        gender: Gender,
        dob: Dob,
        email: Email,
        phoneNo: ContactNo,
        address: Address,
        accNo: AccNo,
      }
    );
    if (status === 200) {
      setLoading(false);
      console.log(Dob);
      FetchProfile();
    }
  };

  useEffect(() => {
    setLoading(true);
    FetchProfile();
  }, []);

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
              <i className='fas fa-eye'> </i> View
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
              <i className='fas fa-edit'> </i> &nbsp; Edit
            </a>
          </li>
        </ul>

        <div class='tab-content pb-5' id='ex1-content'>
          <div
            class='tab-pane fade show active'
            id='ex1-tabs-1'
            role='tabpanel'
            aria-labelledby='ex1-tab-1'
          >
            <div className='mt-5'>
              <h6 className='bar pb-3'>Personal Details</h6>

              <label className='pb-2'>Name</label>
              <input
                type='text'
                className='form-control mb-3'
                readOnly
                value={userProfile.empName}
              ></input>
              <label className='pb-2'>Email </label>
              <input
                type='text'
                className='form-control mb-3'
                readOnly
                value={userProfile.email}
              ></input>
              <label className='pb-2'>Gender</label>
              <input
                type='text'
                className='form-control mb-3'
                readOnly
                value={userProfile.gender}
              ></input>
              <label className='pb-2'>Contact No</label>
              <input
                type='text'
                className='form-control mb-3'
                readOnly
                value={userProfile.phoneNo}
              ></input>
              <label className='pb-2'>Address</label>
              <input
                type='text'
                className='form-control mb-3'
                readOnly
                value={userProfile.address}
              ></input>
              <label className='pb-2'>DOB </label>
              <input
                type='text'
                className='form-control mb-3'
                readOnly
                value={userProfile.dob}
              ></input>
              <label className='pb-2'>Account Number </label>
              <input
                type='text'
                className='form-control mb-3'
                readOnly
                value={userProfile.accNo}
              ></input>

              <h6 className='bar pb-3 mt-5'>Professional Details</h6>

              <label className='pb-2'>Employee ID</label>
              <input
                type='text'
                className='form-control mb-3'
                readOnly
                value={userProfile.empId}
              ></input>
              <label className='pb-2'>Role</label>
              <input
                type='text'
                className='form-control mb-3'
                readOnly
                value={userProfile.role}
              ></input>
              <label className='pb-2'>Salary</label>
              <input
                type='text'
                className='form-control mb-3'
                readOnly
                value={userProfile.empSalary}
              ></input>
              <label className='pb-2'>Designation</label>
              <input
                type='text'
                className='form-control mb-3'
                readOnly
                value={userProfile.empDesign}
              ></input>
              <label className='pb-2'>Department</label>
              <input
                type='text'
                className='form-control mb-3'
                readOnly
                value={userProfile.deptName}
              ></input>
            </div>
          </div>
          <div
            class='tab-pane fade'
            id='ex1-tabs-2'
            role='tabpanel'
            aria-labelledby='ex1-tab-2'
          >
            <div className='mt-5'>
              <h6 className='bar pb-3'>Update Details</h6>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  UpdateProfile();
                }}
              >
                <label className='pb-2'>Name</label>
                <input
                  type='text'
                  className='form-control mb-3'
                  value={Name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></input>
                <label className='pb-2'>Email </label>
                <input
                  type='text'
                  className='form-control mb-3'
                  value={Email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></input>
                <label className='pb-2'>DOB </label>
                <input
                  type='date'
                  className='form-control mb-3'
                  value={Dob}
                  onChange={(e) => {
                    setDob(e.target.value);
                  }}
                ></input>
                <label className='pb-2'>Gender</label>
                <input
                  type='text'
                  className='form-control mb-3'
                  value={Gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                ></input>
                <label className='pb-2'>Contact No</label>
                <input
                  type='text'
                  className='form-control mb-3'
                  value={ContactNo}
                  onChange={(e) => {
                    setContactNo(e.target.value);
                  }}
                ></input>
                <label className='pb-2'>Address</label>
                <input
                  type='text'
                  className='form-control mb-3'
                  value={Address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                ></input>
                <label className='pb-2'>Password</label>
                <input
                  type='text'
                  className='form-control mb-3'
                  value={Password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></input>

                <label className='pb-2'>Account No</label>
                <input
                  type='text'
                  className='form-control mb-3'
                  value={AccNo}
                  onChange={(e) => {
                    setAccNo(e.target.value);
                  }}
                ></input>

                <button className='btn btn-primary mt-5' type='submit'>
                  {" "}
                  UPDATE{" "}
                </button>
              </form>
            </div>
          </div>
          <div
            class='tab-pane fade'
            id='ex1-tabs-3'
            role='tabpanel'
            aria-labelledby='ex1-tab-3'
          >
            Tab 3 content
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
