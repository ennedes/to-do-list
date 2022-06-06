import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../routes/Dashboard/Dashboard';
import NewTask from '../routes/NewTask/NewTask';
import Archive from '../routes/Archive/Archive';
import 'antd/dist/antd.css';
import '../styles/style.css';

const MainContainer = () => {
    return (
        <Router>
        <div>
          <Switch>
            <Route path="/" exact>
              <Dashboard />
            </Route>
            <Route path="/newtask" exact>
              <NewTask />
            </Route>
            <Route path="/archive" exact>
              <Archive />
            </Route>
          </Switch>
        </div>
      </Router>
    )
};

export default MainContainer;