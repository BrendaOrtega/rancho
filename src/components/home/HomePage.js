import React, { Component } from 'react';
import './HomePage.css';
import video from '../../assets/610939655.mp4';
import FontAwesome from 'react-fontawesome';
import Galeria from '../galeria/Galeria';
import Nav from '../nav/Nav';
import Publi from '../common/Publi';
import Descript from '../about/Descript';
import Revista from '../revista/Revista';
import Seller from '../seller/Seller';
import {Link} from 'react-router-dom';

class HomePage extends Component {
    render(){
        return(
            <div>       
	            <div className='back'>
					<div className="contacto">
						<Link to="/contacto">
							<p>CONTÁCTANOS</p>
						</Link>
                        <div className="social">
							<span><FontAwesome name='instagram' className='icon_redes' size="2x"/></span>
							<span><FontAwesome name='facebook-square' className='icon_redes' size="2x"/></span>
							<span><FontAwesome name='youtube' className='icon_redes' size="2x"/></span>
						</div>
					</div>
	                <div className='name'>
						<h1 className='bot'>Grupo Mascota</h1>
						<p>Use this template to give your readers a bit of important information.
						</p>
					</div>
	            </div>
				<Nav />
	            <Descript />
				<Publi />
            </div>
        );
    }
}

export default HomePage;