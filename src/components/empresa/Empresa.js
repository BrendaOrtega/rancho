import React, { Component } from 'react';
import './Empresa.css';
import FontAwesome from 'react-fontawesome';
import Single from './Single';
import Footer from '../footer/Footer';
import sr from '../about/scrollReveal.js';


class Empresa extends Component {
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
            <div>
                <div className='info'>
                	
                		<div className='rectangulo '>

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
                			<h2>Selección de Granos</h2>
                		</div>
                	    
          		</div>
                <Single />
                <div className='cat'>
                    <div className='product_title bot'>
                        <h3>Productos</h3>
                        <hr />
                    </div>
                    <div className='fotos '>
                        <div className='product uno left'>
                            <div className='cubierta'> 
                            <p>Grano de Maíz</p>
                            <p>Amarillo duro: 20,0</p>
                            <p>Blanco duro:15,0</p>
                            <p>Harinoso y Morocho:,9</p>
                           </div>
                        </div> 
                        <div className='product dos bot'>
                           <div className='cubierta'>
                                <p>Grano de Maíz</p>
                            <p>Amarillo duro: 20,0</p>
                            <p>Blanco duro:15,0</p>
                            <p>Harinoso y Morocho:,9</p> 
                            </div>
                        </div> 
                        <div className='product tres right'>
                            <div className='cubierta'>
                              <p>Grano de Maíz</p>
                            <p>Amarillo duro: 20,0</p>
                            <p>Blanco duro:15,0</p>
                            <p>Harinoso y Morocho:,9</p>
                            </div>
                        </div> 
                        <div className='product tres left'>
                            <div className='cubierta'>
                              <p>Grano de Maíz</p>
                            <p>Amarillo duro: 20,0</p>
                            <p>Blanco duro:15,0</p>
                            <p>Harinoso y Morocho:,9</p>
                            </div>
                        </div> 
                        <div className='product uno bot'>
                            <div className='cubierta'>
                                  <p>Grano de Maíz</p>
                            <p>Amarillo duro: 20,0</p>
                            <p>Blanco duro:15,0</p>
                            <p>Harinoso y Morocho:,9</p>
                            </div>
                        </div> 
                       <div className='product dos right'>
                           <div className='cubierta'>
                                  <p>Grano de Maíz</p>
                            <p>Amarillo duro: 20,0</p>
                            <p>Blanco duro:15,0</p>
                            <p>Harinoso y Morocho:,9</p>
                            </div>
                        </div> 
                        <div className='product dos left'>
                           <div className='cubierta'>
                                  <p>Grano de Maíz</p>
                            <p>Amarillo duro: 20,0</p>
                            <p>Blanco duro:15,0</p>
                            <p>Harinoso y Morocho:,9</p>
                            </div>
                        </div>
                        <div className='product tres bot'>
                            <div className='cubierta'>
                                  <p>Grano de Maíz</p>
                            <p>Amarillo duro: 20,0</p>
                            <p>Blanco duro:15,0</p>
                            <p>Harinoso y Morocho:,9</p>
                            </div>
                        </div>
                        <div className='product uno right'>
                            <div className='cubierta'>
                                  <p>Grano de Maíz</p>
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

export default Empresa;