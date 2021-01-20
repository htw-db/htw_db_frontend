import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';

export interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
  </Switch>
);
