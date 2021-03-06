import React, { Component } from 'react';
import './Ganaderia.css';
import FontAwesome from 'react-fontawesome';
import OwlCarousel from 'react-owl-carousel2';

import Nav from '../nav/Nav';
import sr from '../about/scrollReveal.js';

class Ganado extends Component {
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

                <div className='ganaderia'>
                    <Nav />
                    <h2 className="subtitulo bot">Ganadería</h2>
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

                <div className='section '>
                    <h3 className="section_name bot">Las mejores crías de ganado</h3>
                    <p className="section_text bot">El ganado es el conjunto de animales pinzon es un bruto, sobre todo mamíferos,
                        para la ... Ganado vacuno o bovino: Es el conjunto de vacas, toros y bueyes
                        (diferentes tipos de ... Ganado porcino: Es un conjunto de cerdos; Ganado caprino:
                        Es un conjunto de cabras; Ganado equino: Es un conjunto de caballos y yeguas
                    </p>

                    <hr  className=" line left"/>
                    <div className='box_ganado lefti  section_text'>
                        <div className='space_ganado bot '>
                            <h4>Bovinos</h4>
                            <p>Los bovinos son animales mamíferos y rumiantes que constituyen una subfamilia
                                del grupo de los bóvidos. Disponen de una cola extensa que finaliza en un mechón
                                y de un hocico ancho, mientras que el estuche de sus cuernos resulta liso.
                                <br />
                                <br />
                                Por otra parte, los bovinos se emplean como animales de tiro: por su fuerza, pueden
                                tirar de arados o de carros. Todas estas características hacen que sean especies
                                de presencia muy extendida en el ámbito rural.</p>
                        </div>
                        <div className='space_ganado bot'>
                            <h4>Bovinos</h4>
                            <p>Los bovinos son animales mamíferos y rumiantes que constituyen una subfamilia
                                del grupo de los bóvidos. Disponen de una cola extensa que finaliza en un mechón
                                y de un hocico ancho, mientras que el estuche de sus cuernos resulta liso.
                                <br />
                                <br />
                                Por otra parte, los bovinos se emplean como animales de tiro: por su fuerza, pueden
                                tirar de arados o de carros. Todas estas características hacen que sean especies
                                de presencia muy extendida en el ámbito rural.</p>
                        </div>
                        <div className='space_ganado bot'>
                            <h4>Bovinos</h4>
                            <p>Los bovinos son animales mamíferos y rumiantes que constituyen una subfamilia
                                del grupo de los bóvidos. Disponen de una cola extensa que finaliza en un mechón
                                y de un hocico ancho, mientras que el estuche de sus cuernos resulta liso.
                                <br />
                                <br />
                                Por otra parte, los bovinos se emplean como animales de tiro: por su fuerza, pueden
                                tirar de arados o de carros. Todas estas características hacen que sean especies
                                de presencia muy extendida en el ámbito rural.</p>
                        </div>
                        <div className='space_ganado bot'>
                            <h4>Bovinos</h4>
                            <p>Los bovinos son animales mamíferos y rumiantes que constituyen una subfamilia
                                del grupo de los bóvidos. Disponen de una cola extensa que finaliza en un mechón
                                y de un hocico ancho, mientras que el estuche de sus cuernos resulta liso.
                                <br />
                                <br />
                                Por otra parte, los bovinos se emplean como animales de tiro: por su fuerza, pueden
                                tirar de arados o de carros. Todas estas características hacen que sean especies
                                de presencia muy extendida en el ámbito rural.</p>
                        </div>
                    </div>
                    <hr className=" line " />
                    <br />
                    <br />

                    <div>
                        <OwlCarousel ref="car" options={options}  >

                            <div class="item"><img src='https://images.pexels.com/photos/185941/pexels-photo-185941.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'/></div>
                            <div class="item"><img src='https://images.pexels.com/photos/195226/pexels-photo-195226.jpeg?h=350&auto=compress&cs=tinysrgb'/></div>
                            <div class="item"><img src='https://images.pexels.com/photos/457447/pexels-photo-457447.jpeg?h=350&auto=compress&cs=tinysrgb'/></div>
                            <div class="item"><img src='https://images.pexels.com/photos/132315/pexels-photo-132315.jpeg?h=350&auto=compress&cs=tinysrgb'/></div>
                            <div class="item"><img src='https://images.pexels.com/photos/209065/pexels-photo-209065.jpeg?h=350&auto=compress&cs=tinysrgb'/></div>
                            <div class="item"><img src='https://images.pexels.com/photos/248337/pexels-photo-248337.jpeg?h=350&auto=compress&cs=tinysrgb'/></div>
                            <div class="item"><img src='https://images.pexels.com/photos/460956/pexels-photo-460956.jpeg?h=350&auto=compress&cs=tinysrgb'/></div>
                            <div class="item"><img src='https://images.pexels.com/photos/89771/pexels-photo-89771.jpeg?h=350&auto=compress&cs=tinysrgb'/></div>
                            <div class="item"><img src='https://images.pexels.com/photos/73943/pexels-photo-73943.jpeg?h=350&auto=compress&cs=tinysrgb'/></div>
                            <div class="item"><img src='https://images.pexels.com/photos/533109/pexels-photo-533109.jpeg?h=350&auto=compress&cs=tinysrgb'/></div>
                            <div class="item"><img src='https://images.pexels.com/photos/247529/pexels-photo-247529.jpeg?h=350&auto=compress&cs=tinysrgb'/></div>
                            <div class="item"><img src='https://images.pexels.com/photos/9582/grass-animals-horse-9582.jpg?h=350&auto=compress&cs=tinysrgb'/></div>
                        </OwlCarousel>
                        <button className='btn_slide' onClick={() => this.refs.car.prev()}>
                            <FontAwesome name='angle-left' className='icon_about' size='2x'/>
                        </button>
                        <button className='btn_slide' onClick={() => this.refs.car.next()}>
                            <FontAwesome name='angle-right' className='icon_about' size='2x'/>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ganado;