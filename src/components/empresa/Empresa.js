import React, { Component } from 'react';
import './Empresa.css';
import FontAwesome from 'react-fontawesome';
import Single from './Single';
import Footer from '../footer/Footer';
import sr from '../about/scrollReveal.js';
import Bar from '../nav/Bar';

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
                        <Bar />
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
                <div className='examples'>
                    <div className=' bot'>
                    <h2>Conocenos</h2>             
                    </div>
                    <div className='flex'>
                        <div className='box_example bot'>
                            <div className='circle'>
                            </div>
                            
                            <h3>Maíz</h3>
                            <hr className='linea'/>
                            <p>El maíz de mejor calidad de Jalisco se produce en el poblado de Mascota, 
                            utilizando abono orgánico que enriquece los nutrientes del maiz hasta en un 200%. 
                            El maíz de mejor calidad de Jalisco se produce en el poblado de Mascota, 
                            utilizando abono orgánico que enriquece los nutrientes del maiz hasta en un 200%.
                            </p>
                        </div>
                        <div className='box_example bot'>
                            <div className='circle'>
                            </div>
                            
                            <h3>Surgo</h3>
                            <hr className='linea'/>
                            <p>El maíz de mejor calidad de Jalisco se produce en el poblado de Mascota, 
                            utilizando abono orgánico que enriquece los nutrientes del maiz hasta en un 200%. 
                            El maíz de mejor calidad de Jalisco se produce en el poblado de Mascota, 
                            utilizando abono orgánico que enriquece los nutrientes del maiz hasta en un 200%.
                            </p>
                        </div>
                        <div className='box_example bot'>
                            <div className='circle'>
                            
                            </div>
                            
                            <h3>Granos</h3>
                            <hr className='linea'/>
                            <p>El maíz de mejor calidad de Jalisco se produce en el poblado de Mascota, 
                            utilizando abono orgánico que enriquece los nutrientes del maiz hasta en un 200%. 
                            El maíz de mejor calidad de Jalisco se produce en el poblado de Mascota, 
                            utilizando abono orgánico que enriquece los nutrientes del maiz hasta en un 200%.
                            </p>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
}

export default Empresa;