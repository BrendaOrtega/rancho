import React, { Component } from 'react';
import './About.css';
import FontAwesome from 'react-fontawesome';
import sr from './scrollReveal.js';



class About extends Component {
	componentDidMount () {
        const config = {
        origin: 'right',
        duration: 1000,
        delay: 150,
        distance: '100%',
        scale: 1,
        easing: 'ease',
        }

        const config2 = {
        origin: 'left',
        duration: 1000,
        delay: 150,
        distance: '100%',
        scale: 1,
        easing: 'ease',
        }
        const config3 = {
        origin: 'bottom',
        duration: 800,
        delay: 100,
        distance: '100%',
        scale: 1,
        easing: 'ease',
        }

        sr.reveal('.right', config2);
        sr.reveal('.left', config);
        sr.reveal('.bot', config3);
        
        }
    render(){
        return(
            <div className='about'>
            	<h2>Sobre nosotros</h2>
            	<div className='carro'>
					<div className='carrito'>
						<img className='right' src='https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'/>
						<div className='descript right '>
							<p>Who we are</p>
							<p>SOMOS esta ubicado dentro de Zapopan, a solo 15 minutos del periférico y a 3 minutos de carretera Tesistán; 
							en la zona de mayor plusvalía de la ciudad. SOMOS esta ubicado dentro de Zapopan, a solo 15 minutos del periférico y a 3 minutos de carretera Tesistán;
							 en la zona de mayor plusvalía de la ciudad.SOMOS esta ubicado dentro de Zapopan</p>
						</div>	
					</div>
					<div className='carrito '>
						<img className='right' src='https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?h=350&auto=compress&cs=tinysrgb'/>
						<div className='descript right'>
							<p>Who we are</p>
							<p>SOMOS esta ubicado dentro de Zapopan, a solo 15 minutos del periférico y a 3 minutos de carretera Tesistán; 
							en la zona de mayor plusvalía de la ciudad. SOMOS esta ubicado dentro de Zapopan, a solo 15 minutos del periférico y a 3 minutos de carretera Tesistán;
							 en la zona de mayor plusvalía den</p>
						</div>	
					</div>
					<div className='carrito '>
						<img className='left' src='https://images.pexels.com/photos/161173/rio-de-janeiro-olympics-2016-niteroi-brazil-161173.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'/>
						<div className='descript left'>
							<p>Who we are</p>
							<p>SOMOS esta ubicado dentro de Zapopan, a solo 15 minutos del periférico y a 3 minutos de carretera Tesistán; 
							en la zona de mayor plusvalía de la ciudad. SOMOS esta ubicado dentro de Zapopan, a solo 15 minutos del periférico y a 3 minutos de carretera Tesistán;
							 en la zona de mayor plusvalía de la ciudad.SOMOS esta ubicado dentro de Zapopan</p>
						</div>	
					</div>
					<div className='carrito'>
						<img  className='left' src='https://images.pexels.com/photos/244994/pexels-photo-244994.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'/>
						<div className='descript left'>
							<p>Who we are</p>
							<p>SOMOS esta ubicado dentro de Zapopan, a solo 15 minutos del periférico y a 3 minutos de carretera Tesistán; 
							en la zona de mayor plusvalía de la ciudad. SOMOS esta ubicado dentro de Zapopan, a solo 15 minutos del periférico y a 3 minutos de carretera Tesistán;
							 en la zona de mayor plusvalía de la ciudad.SOMOS esta ubicado dentro de Zapopan</p>
						</div>	
					</div>
            	</div>

      		</div>
        );
    }
}

export default About;
