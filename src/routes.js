import React from 'react';
import HomePage from './components/home/HomePage';
import Empresa from './components/empresa/Empresa';
import {
  Switch,
  Route
} from 'react-router-dom';



const Routes = () => (
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/info' component={Empresa}/>
    </Switch>
);

export default Routes;