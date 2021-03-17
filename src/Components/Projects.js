import React from 'react';
import { Component } from 'react';
import './CSS Files/Projects.css'
class Projects extends Component
{
    render(){
        return(
            <div className='projects'>
                <h1 className='P_title'>Projects</h1>
                <hr></hr>
                <br></br>
                <br></br>
                <div className='align-table'>
           <table class="abc">
  <thead>
    <tr>
      <th scope="col">NAME</th>
      <th scope="col">START DATE</th>
      <th scope="col">END DATE</th>
      <th scope="col">STATUS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Name">XYZ</td>
      <td data-label="01-01-2001">04/01/2016</td>
      <td data-label="End Date">12-12-2021</td>
      <td data-label="Status">In Progress</td>
    </tr>
    <tr>
    <td data-label="Name">XYZ</td>
      <td data-label="01-01-2001">04/01/2016</td>
      <td data-label="End Date">12-12-2021</td>
      <td data-label="Status">In Progress</td>
    </tr>
    <tr>
    <td data-label="Name">XYZ</td>
      <td data-label="01-01-2001">04/01/2016</td>
      <td data-label="End Date">12-12-2021</td>
      <td data-label="Status">In Progress</td>
    </tr>
    <tr>
    <td data-label="Name">XYZ</td>
      <td data-label="01-01-2001">04/01/2016</td>
      <td data-label="End Date">12-12-2021</td>
      <td data-label="Status">In Progress</td>
    </tr>
    <tr>
    <td data-label="Name">XYZ</td>
      <td data-label="01-01-2001">04/01/2016</td>
      <td data-label="End Date">12-12-2021</td>
      <td data-label="Status">In Progress</td>
    </tr>
    
  </tbody>
</table>
</div>
        </div>
        )
    }
}

export default Projects
