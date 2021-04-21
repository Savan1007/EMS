import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import DashBoard from "./Components/Dashboard";
import Login from "./Components/Login";
import { useSelector } from "react-redux";
import { isAuthenticated } from "./features/authSlice";
import Department from "./Components/Department";
import Projects from "./Components/Projects";
import Tasks from "./Components/Tasks";
import Leave from "./Components/Leave";
import Salary from "./Components/Salary";
import Profile from "./Components/Profile";

function App() {
  const auth = useSelector(isAuthenticated);
  // const auth = true;
  if (!auth) {
    return <Login />;
  } else {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route path='/Dashboard' exact>
              {/* DashBoard Component */}
              <DashBoard />
            </Route>
            <Route path='/department' exact>
              {/* department Component */}
              <Department />
            </Route>
            <Route path='/project' exact>
              {/* project Component */}
              <Projects />
            </Route>
            <Route path='/tasks' exact>
              {/* tasks Component */}
              <Tasks />
            </Route>
            <Route path='/leave' exact>
              {/* leave Component */}
              <Leave />
            </Route>
            <Route path='/salary' exact>
              {/* salary Component */}
              <Salary />
            </Route>
            <Route path='/events' exact>
              {/* events Component */}
            </Route>
            <Route path='/profile/:id' exact>
              {/* events Component */}
              <Profile />
            </Route>
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
