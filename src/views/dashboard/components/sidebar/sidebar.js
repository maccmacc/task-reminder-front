import React from 'react';
import { Link } from 'react-router-dom';
import { postsRoutes, usersRoutes } from '../../../../utils/routes/routes';

import './sidebar.scss';

const Sidebar = () => (
  <div className="sidebar sidebar">
    <div className="sidebar__content">
      <Link to={usersRoutes} className="sidebar__content__users"> Users table </Link>
      <Link to={postsRoutes} className="sidebar__content__posts">Posts table </Link>
    </div>

  </div>
);

export default Sidebar;
