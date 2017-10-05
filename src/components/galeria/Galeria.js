import React, { Component } from 'react';
import './Galeria.css';
import FontAwesome from 'react-fontawesome';



class Galeria extends Component {
    render(){
        return(
            <div className='galeria '>
            	<h2 className=' bot'>Nuestras instalaciones</h2>
            	<div className='fotos center '>
					<div className='box_image right'>
						<img src='https://images.pexels.com/photos/39351/purple-grapes-vineyard-napa-valley-napa-vineyard-39351.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' />
						<p>Apicultura</p>
					</div>
					<div className='box_image right'>
						<img src='https://images.pexels.com/photos/248874/pexels-photo-248874.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' />
						<p>Zona ganaderá</p>
					</div>
					<div className='box_image right'>
						<img src='https://images.pexels.com/photos/33131/straw-bales-stubble-summer-straw.jpg?h=350&auto=compress&cs=tinysrgb' />
						<p>Zona agrícola</p>
					</div>
					<div className='box_image left'>
						<img src='https://images.pexels.com/photos/66400/pexels-photo-66400.jpeg?h=350&auto=compress&cs=tinysrgb' />
						<p>Zona agrícola</p>
					</div>
					<div className='box_image left'>
						<img src='https://images.pexels.com/photos/195226/pexels-photo-195226.jpeg?h=350&auto=compress&cs=tinysrgb' />
						<p>Zona agrícola</p>
					</div>
					<div className='box_image left'>
						<img src='https://images.pexels.com/photos/360013/pexels-photo-360013.jpeg?h=350&auto=compress&cs=tinysrgb' />
						<p>Zona agrícola</p>
					</div>
            	</div>	    
      		</div>
        );
    }
}

export default Galeria;