import React, { Component } from 'react';
import './Nav.css';
import video from '../../assets/610939655.mp4';
import FontAwesome from 'react-fontawesome';

import {Link} from 'react-router-dom';


class Nav extends Component {
    render(){
        return(
            <div>       
	                <h2 className='bot'>Logo</h2>
	                <div className='pestanas bot'>
	                  <p className='link'>Somos</p>
	                  <Link to='/ganaderia'>
	                  	<p className='link'>Ganadería</p>
	                  </Link>
	                  <Link to='/info'>
	                  	<p className='link'>Granos</p>
	                  </Link>
	                  <Link to='/campo'>
	                  <p className='link'>Campo</p>
	                  </Link>

	                  <Link to='/tienda'>
	                  <p className='link'>Tienda</p>
	                  </Link>
	                  <p className='link'>Contacto</p>
	                </div>
	             
            </div>
        );
    }
}

export default Nav;