import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import './App.css';
import HomePage from '../HomePage';
import TvshowPage from '../TvshowPage';

const App = ({ history, location }) => {
  return (
    <div>
      <div className="App-header">
        {location.pathname !== '/' ? (
          <span className="App-header__icon">
            <i
              className="fas fa-chevron-left"
              onClick={() => history.push('/')}
            />
          </span>
        ) : (
          ''
        )}
        SUPER FILM
      </div>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/tv-show/:date" component={TvshowPage} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
