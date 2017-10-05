import React, { Component } from 'react';
import './Campo.css';
import FontAwesome from 'react-fontawesome';
import Camp from './Camp';
import Footer from '../footer/Footer';
import Bar from '../nav/Bar';
import sr from '../about/scrollReveal.js';


class Campo extends Component {
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
            <div className='campo'>
                <Bar />
               <div className='tierra'>
                	
                		<div className='cuadro '>

                			<p className='bot'>
                            Encuentra aqui:
                            <br />
                            <br />
                            Una comunidad pensada para que tu y tu familia encuentren tranquilidad y seguridad, 
                            Una comunidad pensada para que tu y tu familia encuentren tranquilidad y seguridad, 
                            Una comunidad pensada para que tu y tu familia encuentren tranquilidad y seguridad, 
                            Una comunidad pensada para que tu y tu familia encuentren tranquilidad y seguridad, </p>
                		</div>
                		<div className='space bot'>
                			<h2>Agricultura</h2>
                		</div>
                	    
          		</div>
                <Camp />
             <div className='cat'>
                    <div className='product_title bot'>
                        <h3></h3>
                   
                    </div>
                    <div className='fotos '>
                        <div className='product uno left'>
                            <div className='cubierta'> 
                            <p className='resaltado'>Maíz</p>
                            <p>Amarillo duro: 20,0</p>
                            <p>Blanco duro:15,0</p>
                            <p>Harinoso y Morocho:,9</p>
                           </div>
                        </div> 
                        <div className='product dos bot'>
                           <div className='cubierta'>
                                <p className='resaltado'>Pasto Moralfalfa</p>
                            <p>Amarillo duro: 20,0</p>
                            <p>Blanco duro:15,0</p>
                            <p>Harinoso y Morocho:,9</p> 
                            </div>
                        </div> 
                        <div className='product tres right'>
                            <div className='cubierta'>
                              <p className='resaltado'>Hortalizas</p>
                            <p>Amarillo duro: 20,0</p>
                            <p>Blanco duro:15,0</p>
                            <p>Harinoso y Morocho:,9</p>
                            </div>
                        </div> 
                        <div className='product cuatro left'>
                            <div className='cubierta'>
                              <p className='resaltado'>Frutos orgánicos</p>
                            <p>Amarillo duro: 20,0</p>
                            <p>Blanco duro:15,0</p>
                            <p>Harinoso y Morocho:,9</p>
                            </div>
                        </div> 
                 
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
}

export default Campo;