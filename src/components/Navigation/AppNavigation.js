import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { EMPLOYEE } from '../../utils/routes';
import Menu from '../Menu/Menu';
import { publicRoutes } from '../../routes';

export const AppNavigation = () => {
  return (
    <Route>
      <div className="container-fluid">
        <div className="row flex-row flex-nowrap">
          <Menu />
          <div className="switch-place">
            <Switch>
              {publicRoutes.map(({ path, Component }) =>
                <Route key={path} component={Component} path={path} exact />
              )}
            </Switch>
          </div>
        </div>
      </div>
      <Redirect to={EMPLOYEE} />
    </Route>
  )
}
