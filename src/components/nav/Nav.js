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
	                <div className='pestanas bot'>
	                  <Link className='link' to='/ganaderia'>
	                  	<span >Empresa</span>
	                  </Link>
						<div className="dropdown">
							<button className="dropbtn"> <span>Ganadería</span></button>
							<div className="dropdown-content av">
								<Link to="/">Bovino</Link>
								<Link to="/">Porcino</Link>
								<Link  to="/">Equino</Link>
							</div>
						</div>
						<div className="dropdown">
							<button className="dropbtn"> <span>Agricultura órganica</span></button>
							<div className="dropdown-content av">
								<Link to="/">Productos</Link>
								<Link to="/">Pastos</Link>

							</div>
						</div>
	                  <Link className='link' to='/tienda'>
	                  <span >Granos</span>
	                  </Link>
						<Link className='link' to='/tienda'>
							<span >Granos</span>
						</Link>
						<Link className='link' to='/tienda'>
							<span >Alimento balanceado</span>
						</Link>
						<Link className='link' to='/tienda'>
							<span >Huevo organico</span>
						</Link>
						<Link className='link' to='/contacto'>
							<span >Pasturería Araceli</span>
						</Link>
	                </div>
	             
            </div>
        );
    }
}

export default Nav;