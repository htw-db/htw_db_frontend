/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { selectAuth } from './selectors/auth';

const ViewApp = React.lazy(() => import('./views/app'));
const ViewUser = React.lazy(() => import('./views/user'));

const App: React.FC = () => {
  const { profile } = useSelector(selectAuth);
  return (
    <div className="h-100">
      <Suspense fallback={<div className="loading" />}>
        <Router>
          <Switch>
            <Redirect exact from="/" to={profile ? 'app' : 'user'} />
            <Route path="/app" render={(props) => <ViewApp {...props} />} />
            <Route path="/user" render={(props) => <ViewUser {...props} />} />
            <Redirect to="/error" />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
