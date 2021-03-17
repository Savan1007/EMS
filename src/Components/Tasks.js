import React from 'react';
import { Component } from 'react';
import {Link } from "react-router-dom";
import './CSS Files/Tasks.css'
import { Button} from 'antd';
import { DownOutlined} from '@ant-design/icons';
import { Menu, Dropdown} from 'antd';

function handleMenuClick(e) {
   
  }

const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        Completed
      </Menu.Item>
      <Menu.Item key="2">
        In Progress
      </Menu.Item>
    </Menu>
  );
  
class Tasks extends Component
{
    state = {
        size: 'large',
      };
    
      handleSizeChange = e => {
        this.setState({ size: e.target.value });
      };
    render(){
        const { size } = this.state;
        return(
            <div className='projects'>
                <h1 className='P_title'>Tasks</h1>
                <hr></hr>
                <br></br>
                <br></br>
                <div className='align-table'>
           <table class="abc">
  <thead>
    <tr>
      <th scope="col">NAME</th>
      <th scope="col">DEADLINE</th>
      <th scope="col">RESOURSES</th>
      <th scope="col">STATUS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Name">XYZ</td>
      <td data-label="Deadline">04/01/2016</td>
      <td data-label="Resourse"><Link>Click here</Link></td>
      <td data-label="Status">
      <Dropdown overlay={menu}>
            <Button type="primary" shape="round" size={size}>
                  Completed
                <DownOutlined />
            </Button>
        </Dropdown>
      </td>
    </tr>
    <tr>
    <td data-label="Name">XYZ</td>
      <td data-label="Deadline">04/01/2016</td>
      <td data-label="Resourse"><Link>Click here</Link></td>
      <td data-label="Status">
      <Dropdown overlay={menu}>
            <Button type="primary" shape="round" size={size}>
            Completed
                <DownOutlined />
            </Button>
        </Dropdown>
        </td>
    </tr>
    <tr>
    <td data-label="Name">XYZ</td>
      <td data-label="Deadline">04/01/2016</td>
      <td data-label="Resourse"><Link>Click here</Link></td>
      <td data-label="Status">
      <Dropdown overlay={menu}>
            <Button type="primary" shape="round" size={size}>
            Completed
                <DownOutlined />
            </Button>
        </Dropdown>
        </td>
    </tr>
    <tr>
    <td data-label="Name">XYZ</td>
      <td data-label="Deadline">04/01/2016</td>
      <td data-label="Resourse"><Link>Click here</Link></td>
      <td data-label="Status">
      <Dropdown overlay={menu}>
            <Button type="primary" shape="round" size={size}>
                  Progress
                <DownOutlined />
            </Button>
        </Dropdown>
      </td>
    </tr>
    <tr>
    <td data-label="Name">XYZ</td>
      <td data-label="Deadline">04/01/2016</td>
      <td data-label="Resourse"><Link>Click here</Link></td>
      <td data-label="Status">
      <Dropdown overlay={menu}>
            <Button type="primary" shape="round" size={size}>
            Completed
                <DownOutlined />
            </Button>
        </Dropdown>
      </td>
    </tr>
    <tr>
    <td data-label="Name">XYZ</td>
      <td data-label="Deadline">04/01/2016</td>
      <td data-label="Resourse"><Link>Click here</Link></td>
      <td data-label="Status">
      <Dropdown overlay={menu}>
            <Button type="primary" shape="round" size={size}>
            Progress
                <DownOutlined />
            </Button>
        </Dropdown>
      </td>
    </tr>
  </tbody>
</table>
</div>
        </div>
        )
    }
}

export default Tasks
