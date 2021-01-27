import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const ViewApp = React.lazy(() => import('./views/app'));

const App: React.FC = () => (
  <div className="h-100">
    <Suspense fallback={<div className="loading" />}>
      <Router>
        <Switch>
          <Redirect exact from="/" to="app" />
          <Route path="/app" render={(props) => <ViewApp {...props} />} />
          <Redirect to="/error" />
        </Switch>
      </Router>
    </Suspense>
  </div>
);

export default App;
