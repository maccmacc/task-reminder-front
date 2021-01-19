import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './style.scss';
import Users from './users/user';
import Posts from './posts/posts';
import { postsRoutes, usersRoutes } from '../../utils/routes/routes';
import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';

const Dashboard = () => (
  <div className="dashboard">
    <Header />
    <div className="dashboard__content">
      <Sidebar />
      <div className="dashboard__content__view">
        <Switch>
          <Route path={usersRoutes()} component={Users} />
          <Route path={postsRoutes()} component={Posts} />
          <Redirect to={usersRoutes()} />
        </Switch>
      </div>
    </div>
  </div>
);

export default Dashboard;
