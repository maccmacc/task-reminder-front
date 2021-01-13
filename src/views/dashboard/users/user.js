import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { singleUserRoute, userTableRoute } from '../../../utils/routes/routes';
import UserTable from './user-table/user-table';
import UserSingle from './user-single/user-single';

const Users = () => (
  <Switch>
    <Route path={singleUserRoute()} component={UserSingle} />
    <Route path={userTableRoute()} component={UserTable} />
    <Redirect to={userTableRoute()} />
  </Switch>
);

export default Users;
