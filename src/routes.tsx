import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));

export interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </Suspense>
);
