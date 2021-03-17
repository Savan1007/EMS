import React from 'react';
import { Component } from 'react';
import './CSS Files/Salary.css'
class Leave extends Component
{
    render(){
        return(
            <div className='salary'>
                <h1 className='P_title'>Salary</h1>
                <hr></hr>
                <br></br>
                <br></br>
                <div className='align-table'>
           <table class="abc">
  <thead>
    <tr>
      <th scope="col">FROM</th>
      <th scope="col">TO</th>
      <th scope="col">SALARY AMOUNT</th>
      <th scope="col">STATUS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="from">02-02-2021</td>
      <td data-label="to">02-03-2021</td>
      <td data-label="salary">50,000/-</td>
      <td data-label="status">Pending</td>
    </tr>
    <tr>
      <td data-label="from">02-01-2021</td>
      <td data-label="to">02-0-2021</td>
      <td data-label="salary">50,000/-</td>
      <td data-label="status">Done</td>
    </tr>
  </tbody>
</table>
</div>
        </div>
        )
    }
}

export default Leave
