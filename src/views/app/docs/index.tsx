import React, { Suspense } from 'react';
import { Route, Redirect, Switch, RouteComponentProps } from 'react-router-dom';

const Contact = React.lazy(() => import('./contact'));

interface OwnProps {}

type ComposedProps = OwnProps & RouteComponentProps<{ query: string }>;

const Databases: React.FC<ComposedProps> = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/contact`} />
      <Route path={`${match.url}/contact`} render={(props) => <Contact {...props} />} />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);

export default Databases;
