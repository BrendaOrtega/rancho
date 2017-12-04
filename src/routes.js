import React from 'react';
import HomePage from './components/home/HomePage';
import Empresa from './components/empresa/Granos';
import Tienda from './components/tienda/Tienda';
import Ganaderia from './components/ganado/Ganaderia';
import Campo from './components/campo/Campos';
import Contacto from './components/contacto/Contacto';

import {
  Switch,
  Route
} from 'react-router-dom';



const Routes = () => (
    <Switch>
      	<Route exact path='/' component={HomePage}/>
      	<Route exact path='/info' component={Empresa}/>
    	<Route exact path='/tienda' component={Tienda}/>
    	<Route exact path='/ganaderia' component={Ganaderia}/>
    	<Route exact path='/campo' component={Campo}/>
		<Route exact path="/contacto" component={Contacto}/>
    </Switch>
);

export default Routes;