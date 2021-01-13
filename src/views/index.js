import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from './dashboard';
import Landing from './landing';
import { dashboardRoute, landingRoute } from '../utils/routes/routes';

const Blog = () => (
  <div className="blog">
    <Switch>
      <Route path={dashboardRoute()} component={Dashboard} />
      <Route path={landingRoute()} component={Landing} />
      <Redirect to={landingRoute()} />
    </Switch>
  </div>
);

export default Blog;
