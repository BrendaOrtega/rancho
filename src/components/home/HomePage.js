import React, { Component } from 'react';
import './HomePage.css';
import video from '../../assets/610939655.mp4';
import FontAwesome from 'react-fontawesome';
import Slide from './Slide';
import Galeria from '../galeria/Galeria';
import Footer from '../footer/Footer';
import About from '../about/About';
import {Link} from 'react-router-dom';
import Nav from '../nav/Nav';

class HomePage extends Component {
    render(){
        return(
            <div>       
	            <div className='back'>
	            	<Nav />
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
	            
	    		<div className='box_slide '>
	    			<h2 className='bot'>"Todo lo que buscas en un solo lugar"</h2>
	    			<Slide />
	    		</div>
	    		<Galeria />
	    		<About/>
	    		<Footer />

            </div>
        );
    }
}

export default HomePage;