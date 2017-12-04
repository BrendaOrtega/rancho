import React, { Component } from 'react';
import './Campos.css';
import Nav from '../nav/Nav';
import sr from '../about/scrollReveal.js';

class Granos extends Component {
    componentDidMount () {
        window.scroll(0, 0)
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
        const options = {
            autoplay: true,
            loop:true,
            margin:10,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        };
        return(
            <div>

                <div className='campo'>
                    <Nav />
                    <h2 className="subtitulo bot">Campo</h2>
                </div>
                <div className="espacio bot">

                    <p className="bot">Contamos con instalaciones y maquinaria adecuadas para la elaboración de nuestros
                        productos, además de un personal capacitado y excelentes proveedores, lo que nos
                        permite brindar alimentos de calidad que satisfacen las necesidades y exigencias
                        del mercado.
                    </p>
                    <p className="bot">
                        Tenemos un amplio portafolio de productos compuesto por diferentes líneas, tales
                        como aliños, repostería, hierbas aromáticas, mazamorras, cuchucos, granos y cereales.</p>

                    <p className="bot">Contamos con instalaciones y maquinaria adecuadas para la elaboración de nuestros
                        productos, además de un personal capacitado y excelentes proveedores, lo que nos
                        permite brindar alimentos de calidad que satisfacen las necesidades y exigencias
                        del mercado.
                    </p>
                </div>
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
                                <p>Blanco duro: 15,0</p>
                                <p>Harinoso y Morocho: ,9</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default Granos;