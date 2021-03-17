import React from 'react';
import { Component } from 'react';
import './CSS Files/Attandance.css'
class Attandance extends Component
{
    render(){
        return(
            <div className='attandance'>
                <h1 className='P_title'>Attandance</h1>
                <hr></hr>
                <br></br>
                <br></br>
                <div className='align-table'>
           <table class="abc">
  <thead>
    <tr>
      <th scope="col">MONTH</th>
      <th scope="col">WORKING DAYS</th>
      <th scope="col">ATTANDANCE</th>
      <th scope="col">LEAVE APPLIED</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="months">XYZ</td>
      <td data-label="workingdays">04/01/2016</td>
      <td data-label="attand">12-12-2021</td>
      <td data-label="applied">In Progress</td>
    </tr>
    <tr>
    <td data-label="months">XYZ</td>
      <td data-label="workingdays">04/01/2016</td>
      <td data-label="attand">12-12-2021</td>
      <td data-label="applied">In Progress</td>
    </tr>
    <tr>
    <td data-label="months">XYZ</td>
      <td data-label="workingdays">04/01/2016</td>
      <td data-label="attand">12-12-2021</td>
      <td data-label="applied">In Progress</td>
    </tr>
    <tr>
    <td data-label="months">XYZ</td>
      <td data-label="workingdays">04/01/2016</td>
      <td data-label="attand">12-12-2021</td>
      <td data-label="applied">In Progress</td>
    </tr>
    <tr>
    <td data-label="months">XYZ</td>
      <td data-label="workingdays">04/01/2016</td>
      <td data-label="attand">12-12-2021</td>
      <td data-label="applied">In Progress</td>
    </tr>
    
  </tbody>
</table>
</div>
        </div>
        )
    }
}

export default Attandance
