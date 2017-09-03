import React, { Component } from 'react';
import './Campo.css';
import FontAwesome from 'react-fontawesome';
import Camp from './Camp';
import Footer from '../footer/Footer';


class Campo extends Component {
    render(){
        return(
            <div className='campo'>

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
                			<h2>Ganadería</h2>
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