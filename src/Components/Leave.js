import React from 'react';
import { Component } from 'react';
import './CSS Files/Leave.css';
import { Button} from 'antd';
import {Link } from "react-router-dom";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ApplyLeave from './ApplyLeave.js';

class Leave extends Component
{
    render(){
        return(
            <div className='leave'>
                <Router>
                <Switch>
          <Route path='/ApplyLeave' exact={true} component={ApplyLeave} />
        </Switch>
                <h1 className='P_title'>Leave</h1>
                <hr></hr>
                <br></br>
                <br></br>
                <div className="site-button">
                    <Button className='btn'type="primary" ghost>
                        <Link to="/ApplyLeave">Apply for Leave</Link>
                    </Button>
                </div>
                </Router>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className='align-table'>
           <table class="abc">
  <thead>
    <tr>
      <th scope="col">LEAVE CATEGORY</th>
      <th scope="col">START DATE</th>
      <th scope="col">END APPLIED</th>
      <th scope="col">APPLIED ON</th>
      <th scope="col">STATUS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="leavecategory">Sick leave</td>
      <td data-label="startdate">24-02-2021</td>
      <td data-label="enddate">25-02-2021</td>
      <td data-label="applied">23-02-2021</td>
      <td data-label="status">Approved</td>
    </tr>
    <tr>
      <td data-label="leavecategory">Sick leave</td>
      <td data-label="startdate">24-02-2021</td>
      <td data-label="enddate">25-02-2021</td>
      <td data-label="applied">23-02-2021</td>
      <td data-label="status">Approved</td>
    </tr>
    <tr>
      <td data-label="leavecategory">Sick leave</td>
      <td data-label="startdate">24-02-2021</td>
      <td data-label="enddate">25-02-2021</td>
      <td data-label="applied">23-02-2021</td>
      <td data-label="status">Approved</td>
    </tr>
    <tr>
      <td data-label="leavecategory">Sick leave</td>
      <td data-label="startdate">24-02-2021</td>
      <td data-label="enddate">25-02-2021</td>
      <td data-label="applied">23-02-2021</td>
      <td data-label="status">Approved</td>
    </tr>
    <tr>
      <td data-label="leavecategory">Sick leave</td>
      <td data-label="startdate">24-02-2021</td>
      <td data-label="enddate">25-02-2021</td>
      <td data-label="applied">23-02-2021</td>
      <td data-label="status">Approved</td>
    </tr>
    <tr>
      <td data-label="leavecategory">Sick leave</td>
      <td data-label="startdate">24-02-2021</td>
      <td data-label="enddate">25-02-2021</td>
      <td data-label="applied">23-02-2021</td>
      <td data-label="status">Approved</td>
    </tr>
    <tr>
      <td data-label="leavecategory">Sick leave</td>
      <td data-label="startdate">24-02-2021</td>
      <td data-label="enddate">25-02-2021</td>
      <td data-label="applied">23-02-2021</td>
      <td data-label="status">Approved</td>
    </tr>
  </tbody>
</table>
</div>
        </div>
        )
    }
}

export default Leave
