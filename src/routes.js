import React from 'react';
import HomePage from './components/home/HomePage';
import Empresa from './components/empresa/Empresa';
import Tienda from './components/tienda/Tienda';
import Ganado from './components/ganado/Ganado';
import Campo from './components/campo/Campo';
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
    	<Route exact path='/ganaderia' component={Ganado}/>
    	<Route exact path='/campo' component={Campo}/>
		<Route exact path="/contacto" component={Contacto}/>
    </Switch>
);

export default Routes;