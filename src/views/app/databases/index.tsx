import React, { Suspense } from 'react';
import { Route, Redirect, Switch, RouteComponentProps } from 'react-router-dom';

const MongoDB = React.lazy(() => import('./mongodb'));
const PostgreSQL = React.lazy(() => import('./postgresql'));

interface OwnProps {}

type ComposedProps = OwnProps & RouteComponentProps<{ query: string }>;

const Databases: React.FC<ComposedProps> = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/postgres`} />
      <Route path={`${match.url}/postgres`} render={(props) => <PostgreSQL {...props} />} />
      <Route path={`${match.url}/mongodb`} render={(props) => <MongoDB {...props} />} />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);

export default Databases;
