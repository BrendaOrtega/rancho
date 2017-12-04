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
	            	<Nav/>
	                <div className='name'>
	                
	                	<h1 className='bot'>Grupo Mascota</h1>
	                </div>
	        
	                <div className='redes'>
	             
	          		       <FontAwesome name='facebook-square' className='icon_about bot' size='2x'/>
	          		       <FontAwesome name='twitter-square' className='icon_about bot' size='2x'/>
	          		       <FontAwesome name='instagram' className='icon_about bot' size='2x'/>
	                </div>
					<video id='bg-video' autoPlay="autoplay" loop  >
					  <source src={video} type="video/mp4" />
					</video>
	            </div>
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