import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddPetitionPage from '../components/pages/AddPetitionPage';
import AllPetitionsPage from '../components/pages/AllPetitionsPage';
import LandingPage from '../components/pages/LandingPage'
const routes = [
  {
      path: '/',
      component: LandingPage
  }, {
      path: '/add-petition',
      component: AddPetitionPage
  }, {
    path: '/petitions',
    component: AllPetitionsPage
  }
]

const Router = (props) => (
  <Switch>
      {
          routes.map((route, key) => <Route key={key}  path={route.path} component={route.component} exact={true} />)
      }
  </Switch>
);

export default Router;