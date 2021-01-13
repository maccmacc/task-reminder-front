import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Users from './users/user';
import Posts from './posts/posts';
import { postsRoutes, usersRoutes } from '../../utils/routes/routes';

import './style.scss';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="dashboard">
      <div className="header">
        <div className="header__title">Jelena</div>
      </div>
      <div className="dashboard__content">
        <div className={`drawer drawer${isOpen ? '--open' : '--close'}`}>
          nemanja
          <div onClick={() => setIsOpen(!isOpen)}>click me</div>
        </div>
        <div className="dashboard__content_view">
          <Switch>
            <Route path={usersRoutes()} component={Users} />
            <Route path={postsRoutes()} component={Posts} />
            <Redirect to={usersRoutes()} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
