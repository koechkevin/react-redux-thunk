import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route
      path="/"
      component={()=>(<div>home</div>)}
    >
    </Route>
  </Switch>
);

export default Routes;

