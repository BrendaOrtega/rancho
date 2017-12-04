import React, { Component } from 'react';
import './Nav.css';
import sr from '../about/scrollReveal.js';
import {Link} from 'react-router-dom';


class Nav extends Component {
    componentDidMount () {
        window.scroll(0, 0)

        const config3 = {
            origin: 'bottom',
            duration: 800,
            delay: 100,
            distance: '100%',
            scale: 1,
            easing: 'ease',
        }

        sr.reveal('.bot', config3);





    }
    render(){
        return(
            <div className="nav">
				<Link to='/'>
					<h2 className='bot'>Logo</h2>
				</Link>

	                <div className='pestanas bot'>
	                  <Link className='link' to='/ganaderia'>
	                  	<span >Ganadería</span>
	                  </Link>
	                  <Link className='link' to='/info'>
	                  	<span >Granos</span>
	                  </Link>
	                  <Link className='link' to='/campo'>
	                  <span >Campo</span>
	                  </Link>

	                  <Link className='link' to='/tienda'>
	                  <span >Tienda</span>
	                  </Link>
						<Link className='link' to='/contacto'>
							<span >Contacto</span>
						</Link>
	                </div>
	             
            </div>
        );
    }
}

export default Nav;