import React, { Component } from 'react';
import './Navbar.css'
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { SidebarData } from './SideBarData';
import Dashboard from './Components/Dashboard.js';
import Department from './Components/Department.js';
import Projects from './Components/Projects.js';
import Tasks from './Components/Tasks.js';
import Attandance from './Components/Attandance.js';
import Leave from './Components/Leave.js';
import Salary from './Components/Salary.js';
import Events from './Components/Events.js';
import {Link } from "react-router-dom";
import * as BIicons from "react-icons/bi";

const { Header, Content, Footer, Sider } = Layout;
  //  const { SubMenu } = Menu;
class App extends Component {
    state = {
        collapsed:false,
    }
    onCollapse = collapsed => {
        this.setState({ collapsed });
    };
  render() {
    const { collapsed } = this.state;
    return (
      <Router>
        <Layout style={{ minHeight: '100vh'}}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <div className='span1'>
            </div>
            <Menu theme='dark' reverseArrow defaultSelectedKeys={['0']} className="menu" mode="inline">
              {
                 SidebarData.map((item,index) => {
                   return(
                      <Menu.Item key={index} className={item.cName} icon={item.icon}>
                          {item.title}
                          <Link to={item.path}/>
                          </Menu.Item>
                      );
                    })
                  }
            </Menu>
            </Sider>
      <Layout>

      <Header className="header">
      <Menu theme="dark" className='topnav' mode="horizontal">
        <Menu.Item  className='topnav' key="1"><img className="nav_img" src="https://media.istockphoto.com/photos/open-laptop-with-white-digital-tablet-and-smartphone-on-desk-from-picture-id934679404?k=6&m=934679404&s=170667a&w=0&h=7nygctV5Q6Zys5zCqgqHjt2OA-WzB3GJpJ-4mgv9AAE=" alt="abc"></img></Menu.Item>
        <Menu.Item  className='topnav' key="2"><icon><BIicons.BiBell/></icon></Menu.Item>
      </Menu>
    </Header>
        <Content>
        <Switch>
          <Route path='/Dashboard' exact={true} component={Dashboard} />
          <Route path='/Department' component={Department} />
          <Route path='/Projects' component={Projects} />
          <Route path='/Tasks' component={Tasks} />
          <Route path='/Attandance' component={Attandance} />
          <Route path='/Leave' component={Leave} />
          <Route path='/Salary' component={Salary} />
          <Route path='/Events' component={Events} />
        </Switch>
        </Content>
      </Layout>
    </Layout>
  </Router>
    );
  }
}

export default App;