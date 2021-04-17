import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { role } from "../features/authSlice";
const TableViewer = ({data,filter}) => {
    let filteredData = data.filter((element) =>{
        return element.empid.includes(filter) ||element.empName.includes(filter) || element.taskTitle.includes(filter) || element.taskStatus.includes(filter);
    })
    const uiObj = filteredData.map((element) =>{
        return(
            <tr>
                <td scope='col'>
                    <Link to={`view/task/${element.empid}`}>{element.empid}</Link>
                </td>
                <td scope='col'>
                    <Link to={`view/task/${element.empid}`}>{element.empName}</Link>
                </td>
                <td scope='col'>{element.taskTitle}</td>
                <td scope='col'>{element.taskDes}</td>
                <td scope='col'>{element.taskStatus}</td>
            </tr>
        )
    });
    return(
        <table>
            <thread>
                <tr>
                <th scope='col'> Employee ID </th>
                <th scope='col'> Employee Name</th>
                <th scope='col'> Task </th>
                <th scope='col'> Task Description </th>
                <th scope='col'> Task Status</th>
                </tr>
            </thread>
            <br />
            {uiObj}
        </table>
    )
}
function Tasks() {
    const currentRole = useSelector(role);
    const [filter, setFilter] = useState("");
    const [addMode, setAddMode] = useState(false);
    const DummyData = [
        {
            empid:'19DCS088',
            empName:'Gracy Patel',
            taskTitle:'Complete Files',
            taskDes:'abc pqr xyz',
            taskStatus:'Ongoing'
        },
        {
            empid:'19DCS151',
            empName:'Irfan Ukani',
            taskTitle:'Complete Project',
            taskDes:'abc pqr xyz',
            taskStatus:'Completed'
        },
        {
            empid:'19DCS107',
            empName:'Savan',
            taskTitle:'Rem Task',
            taskDes:'abc pqr xyz',
            taskStatus:'Ongoing'
        },
    ]
    if(currentRole === "MGR")
    {
        if(addMode)
        {
            return(
                <div className='container-fluid pb-5'>
                    <button
                        className='btn btn-floating'
                        onClick={() =>{
                            setAddMode(false);
                        }}
                    >
                     <i class='fas fa-arrow-circle-left'></i>
                    </button>
                </div>
            )
        }
        else{
            return (
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-11 d-flex justify-content-end align-items-center'>
                            <button
                                className='btn btn-outline-dark'
                                onClick = {
                                    () =>
                                    {
                                        setAddMode(true);
                                    }
                                }
                            >
                                Assign Task
                            </button>
                        </div>
                    </div>
                    <div className='col-lg'>
                        <h3 className='text-primary '>Tasks</h3>
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
                    <div className='row g-5 mt-1'>
                        <div className='col-lg-12'>
                            <TableViewer data={DummyData} filter={filter}/>
                        </div>
                    </div>
                </div>
            )
        }
    }else if(currentRole === "EMP")
    {
        return (
            <div className='container-fluid'>

                <div className='col-lg'>
                    <h3 className='text-primary '>Tasks</h3>
                    <p className='bar pb-3'>IT Department</p>
                    <input 
                        type='search'
                        placeholder='filter'
                        className='form-control'
                    />
                </div>
            </div>
        )
    }else{
        return (
            <div className='container-fluid'>
                <div className='col-lg'>
                    <h3 className='text-primary '>Tasks</h3>
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

export default Tasks
