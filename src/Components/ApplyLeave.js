import React from 'react';
import { Component } from 'react';
import { Form, Input, Button } from 'antd';
import './CSS Files/ApplyLeave.css';
import { DatePicker,Space} from 'antd';

class ApplyLeave extends Component
{
    render(){
        function onChange(date, dateString) {
            console.log(date, dateString);
          }
        return(
            <div className='leave'>
                <h1 className='P_title'>Apply For Leave</h1>
                <hr></hr>
                <br></br>
                <br></br>
                <Form>
                <Form.Item
                name="Leave Category"
                label="Leave Category"><Input /></Form.Item>
                <Form.Item
                name="Start Date"
                label="Start Date"><Space direction="vertical"><DatePicker onChange={onChange}/></Space></Form.Item>
                <Form.Item
                name="End Date"
                label="End Date"><Input /></Form.Item>
                </Form>
                <Button type="primary" htmlType="submit">
          Submit
        </Button>
        </div>
        )
    }
}

export default ApplyLeave
