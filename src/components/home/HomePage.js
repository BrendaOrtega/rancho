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


class HomePage extends Component {
    render(){
        return(
            <div>       
	            <div className='back'>
	                <div className='name'>
						<h1 className='bot'>Grupo Mascota</h1>
						<p>Use this template to give your readers a bit of important information.
						</p>
					</div>
	            </div>
				<Nav />
	            <Descript />
				<Publi />
	    		<Galeria />
				<Revista />
				<Seller />

            </div>
        );
    }
}

export default HomePage;