import React from 'react';

import { Link } from 'react-router-dom';
import { dashboardRoute } from '../../utils/routes/routes';

import './styles.scss';

const Landing = () => (
  <div className="landing">
    <div className="landing__background landing__background__content" />

    <div className="landing__content">
      <div className="landing__content__title">
        <div className="landing__content__title__welcome">WELCOME TO CHRISTMAS BLOG </div>
        <div className="landing__content__title__christmas-text"> Christmas is now just around the corner! </div>
        <div className="landing__content__actions">
          <div>
            <Link to={dashboardRoute()} className="landing__content__actions_link">Click here to join us!</Link>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default Landing;
