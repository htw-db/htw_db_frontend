import React, { Suspense } from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { AppLayout } from '../../layout/AppLayout';

const Databases = React.lazy(() => import('./databases'));
const Docs = React.lazy(() => import('./docs'));

interface OwnProps {}

type ComposedProps = OwnProps & RouteComponentProps<{ query: string }>;

const App: React.FC<ComposedProps> = ({ match }) => (
  <AppLayout>
    <div className="dashboard-wrapper">
      <Suspense fallback={<div className="loading" />}>
        <Switch>
          <Redirect exact from={`${match.url}/`} to={`${match.url}/databases`} />
          <Route path={`${match.url}/databases`} render={(props) => <Databases {...props} />} />
          <Route path={`${match.url}/docs`} render={(props) => <Docs {...props} />} />
          <Redirect to="/error" />
        </Switch>
      </Suspense>
    </div>
  </AppLayout>
);

export default App;
