import React, { Suspense } from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import UserLayout from '../../layout/UserLayout';

const Login = React.lazy(() => import('./login'));

interface OwnProps {}

type ComposedProps = OwnProps & RouteComponentProps<{ query: string }>;

const User: React.FC<ComposedProps> = ({ match }) => (
  <UserLayout>
    <Suspense fallback={<div className="loading" />}>
      <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/login`} />
        <Route path={`${match.url}/login`} render={(props) => <Login {...props} />} />
        <Redirect to="/error" />
      </Switch>
    </Suspense>
  </UserLayout>
);

export default User;
