import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginUser } from "../features/authSlice";

function Login() {
  const [empId, setEmpId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  return (
    <div className='container-lg mt-5'>
      <h5 className='bar text-black'>
        {" "}
        <i class='fas fa-users'></i> Emploeye Login
      </h5>
      <div className='row d-flex align-items-center justify-content-center mt-5'>
        <div className='col-lg-3 mt-5 pt-5'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(LoginUser(empId, password));
            }}
          >
            <div class='form-outline mb-4'>
              <input
                type='text'
                id='form1Example1'
                class='form-control'
                onChange={(e) => {
                  setEmpId(e.target.value);
                }}
              />
              <label class='form-label' for='form1Example1'>
                Employee ID
              </label>
            </div>

            <div class='form-outline mb-4'>
              <input
                type='password'
                id='form1Example2'
                class='form-control'
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <label class='form-label' for='form1Example2'>
                Password
              </label>
            </div>

            <div class='row mb-4'>
              <div class='col d-flex justify-content-center'>
                <div class='form-check'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    value=''
                    id='form1Example3'
                    checked
                  />
                  <label class='form-check-label' for='form1Example3'>
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
              </div>
            </div>

            <button
              type='submit'
              class='btn btn-dark btn-block'
              onClick={() => {}}
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
