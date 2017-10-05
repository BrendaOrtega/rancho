import React, { Component } from 'react';
import './Nav.css';
import video from '../../assets/610939655.mp4';
import FontAwesome from 'react-fontawesome';

import {Link} from 'react-router-dom';


class Nav extends Component {
    render(){
        return(
            <div>
				<Link to='/'>
					<h2 className='bot'>Logo</h2>
				</Link>

	                <div className='pestanas bot'>
						<Link to='/'>
							<p className='link'>Somos</p>
						</Link>

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
						<Link to='/contacto'>
							<p className='link'>Contacto</p>
						</Link>


	                </div>
	             
            </div>
        );
    }
}

export default Nav;