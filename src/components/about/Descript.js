import React, { Component } from 'react';
import './About.css';
import dos from '../../assets/002.jpg';
import tres from '../../assets/003.jpg';
import cuatro from '../../assets/004.jpg';
import cinco from '../../assets/005.jpg';
import seis from '../../assets/006.jpg';
import siete from '../../assets/007.jpg';
import ocho from '../../assets/008.jpg';
import nueve from '../../assets/009.jpg';
import diez from '../../assets/010.jpg';

class Descript extends Component {

    render(){
        return(
            <div className='about '>
                <div className="about_info">
                    <p className="text">
                        “Somos un rancho integral, enfocados en la producción agrícola orgánica y uso de implementos naturales, para el autoconsumo de nuestros animales y venta al público”
                        <br/>
                       </p>
                    <p className="rancho bot"> RANCHO LA LAGUNA</p>
                </div>
                <div className="categorias">
                    <div className="flex">
                        <div className="box_cat" >

                                <div className="atras" style={{backgroundImage:`url(${dos})`}}>


                                <div className="front">
                                    <p>“El corazon del rancho:
                                        <br/>nuestros pastos”</p>
                                </div>
                                </div>

                        </div>
                        <div className="box_cat" >
                                <div className="atras" style={{backgroundImage:`url(${tres})`}}>
                                    <div className="front">
                                        <p>“Calidad y rendimiento eficiente <br/>en nuestro ganado”</p>
                                    </div>

                                </div>

                        </div>
                        <div className="box_cat" >
                                <div className="atras" style={{backgroundImage:`url(${cuatro})`}}>
                                    <div className="front">
                                        <p>“Nuestro principal paso <br/> al exito: autoconsumo <br/>en alimento”</p>
                                    </div>

                                </div>

                        </div>
                        <div className="box_cat" >
                                <div className="atras" style={{backgroundImage:`url(${cinco})`}}>
                                    <div className="front">
                                        <p>“Gallina feliz, huevo feliz”</p>
                                    </div>

                                </div>

                        </div>
                        <div className="box_cat" >
                                <div className="atras" style={{backgroundImage:`url(${seis})`}}>
                                    <div className="front">
                                        <p>“La manera natural de <br/>sembrar exitosamente”</p>
                                    </div>

                                </div>

                        </div>
                        <div className="box_cat" >
                                <div className="atras" style={{backgroundImage:`url(${siete})`}}>
                                    <div className="front">
                                        <p>“Capacidad, desarrollo y reproduccion efectiva”</p>
                                    </div>

                                </div>

                        </div>
                        <div className="box_cat" >
                                <div className="atras" style={{backgroundImage:`url(${ocho})`}}>
                                    <div className="front">
                                        <p>“Venta y compra de granos”</p>
                                    </div>

                                </div>

                        </div>
                        <div className="box_cat" >
                                <div className="atras" style={{backgroundImage:`url(${nueve})`}}>
                                    <div className="front">
                                        <p>“Belleza, nobleza y fuerza no pueden faltar en el rancho”</p>
                                    </div>

                                </div>

                        </div>
                        <div className="box_cat" >
                                <div className="atras" style={{backgroundImage:`url(${diez})`}}>
                                    <div className="front">
                                        <p>“Nuestro enlace al público: Pastureria Araceli”</p>
                                    </div>

                                </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Descript;/**
 * Created by brendaortega on 24/11/17.
 */
