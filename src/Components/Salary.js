import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { role } from "../features/authSlice";

const TableViewer = ({data,filter}) => {

    let filteredData = data.filter((element) =>{
        return element.empid.includes(filter) ;
    });
    const uiObj = filteredData.map ( (element) =>{
        return (
            <tr>
                <td scope='col'>
                    <Link to={`view/salary/${element.empid}`}>{element.empid}</Link>
                </td>
                <td scope='col'>
                <Link to={`view/leave/${element.empid}`}>{element.empName}</Link>
                </td>
                <td scope='col'>{element.dept}</td>
                <td scope='col'>{element.status}</td>
            </tr>
        )
    })
    return(
        <table>
            <thread>
                <tr>
                    <th scope='col'>Employee ID</th>
                    <th scope='col'>Employee Name</th>
                    <th scope='col'>Employee Department</th>
                    <th scope='col'>Status</th>
                </tr>
                <br />
                {uiObj}
            </thread>
        </table>
    )
}
function Salary() {
    const currentRole = useSelector(role);
    const [filter, setFilter] = useState("");
    const DummyData = [
        {
            empid:'19DCS088',
            empName:'Gracy Patel',
            dept:'IT Dept',
            status:'Pending'
        },
        {
            empid:'19DCS108',
            empName:'Savan',
            dept:'Sales Dept',
            status:'Pending'
        },
        {
            empid:'19DCS188',
            empName:'Nisarg Patel',
            dept:'IT Dept',
            status:'Payed'
        },
    ]
    if(currentRole === "MGR"){
        return(
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-11 d-flex justify-content-end align-items-center'>
                        <button
                            className='btn btn-outline-dark'
                        >
                            Pay Salary
                        </button>
                    </div>
                </div>
                <div className='col-lg-11'>
                    <h3 className='text-primary '>Salary</h3>
                    <p className='bar pb-3'>IT Department</p>
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
                <div className='row g-5 mt-5'>
                    <div className='col-lg-11'>
                        <TableViewer data={DummyData} filter={filter}/>
                    </div>
                </div>
            </div>
        )
    }
    else if(currentRole === "EMP"){
        return(
            <div className='container-fluid'>
                <div className='col-lg-11'>
                    <h3 className='text-primary '>Salary</h3>
                    <p className='bar pb-3'>IT Department</p>
                    <input
                        type='search'
                        placeholder='filter'
                        className='form-control'
                    />
                </div>
            </div>
        )
    }
    else{
        return(
            <div className='container-fluid'>
                <div className='col-lg-11'>
                    <h3 className='text-primary '>Salary</h3>
                    <p className='bar pb-3'>IT Department</p>
                    <input
                        type='search'
                        placeholder='filter'
                        className='form-control'
                    />
                </div>
            </div>
        )
    }
}

export default Salary
