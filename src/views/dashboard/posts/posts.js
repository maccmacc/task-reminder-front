import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { postTableRoute, singlePostRoute } from '../../../utils/routes/routes';
import PostTable from './posts-table/post-table';
import PostSingle from './post-single/post-single';

const Posts = () => (
  <Switch>
    <Route path={singlePostRoute()} component={PostSingle} />
    <Route path={postTableRoute()} component={PostTable} />
    <Redirect to={postTableRoute()} />
  </Switch>
);

export default Posts;
