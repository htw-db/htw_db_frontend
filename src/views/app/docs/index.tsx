import React, { Suspense } from 'react';
import { Route, Redirect, Switch, RouteComponentProps } from 'react-router-dom';

const FAQ = React.lazy(() => import('./faq'));
const Changelog = React.lazy(() => import('./changelog'));

interface OwnProps {}

type ComposedProps = OwnProps & RouteComponentProps<{ query: string }>;

const Databases: React.FC<ComposedProps> = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/faq`} />
      <Route path={`${match.url}/faq`} render={(props) => <FAQ {...props} />} />
      <Route path={`${match.url}/changelog`} render={(props) => <Changelog {...props} />} />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);

export default Databases;
