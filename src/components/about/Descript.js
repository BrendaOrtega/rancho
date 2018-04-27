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
                <div className="about_info bot">
                    <p>
                        “Somos un rancho integral, enfocados en la producción agrícola orgánica y uso de implementos naturales, para el autoconsumo de nuestros animales y venta al público”
                        <br/>
                        RANCHO LA LAGUNA</p>
                </div>
                <div className="categorias">
                    <div className="flex">
                        <div className="box_cat" style={{backgroundImage:`url(${dos})`}}>
                            <div className="cov">
                                <p>“El corazón del rancho: nuestros pastos”</p>
                            </div>
                        </div>
                        <div className="box_cat" style={{backgroundImage:`url(${tres})`}}>
                            <div className="cov">
                                <p>“Calidad y rendimiento eficiente en nuestro ganado”</p>
                            </div>
                        </div>
                        <div className="box_cat" style={{backgroundImage:`url(${cuatro})`}}>
                            <div className="cov">
                                <p>“Nuestro principal paso al éxito: autoconsumo en alimento”</p>
                            </div>
                        </div>
                        <div className="box_cat" style={{backgroundImage:`url(${cinco})`}}>
                            <div className="cov">
                                <p>“Gallina feliz, huevo feliz”</p>
                            </div>
                        </div>
                        <div className="box_cat" style={{backgroundImage:`url(${seis})`}}>
                            <div className="cov">
                                <p>“La manera natural de sembrar exitosamente”</p>
                            </div>
                        </div>
                        <div className="box_cat" style={{backgroundImage:`url(${siete})`}}>
                            <div className="cov">
                                <p>“Capacidad, desarrollo y reproducción efectiva”</p>
                            </div>
                        </div>
                        <div className="box_cat" style={{backgroundImage:`url(${ocho})`}}>
                            <div className="cov">
                                <p>“Venta y compra de granos”</p>
                            </div>
                        </div>
                        <div className="box_cat" style={{backgroundImage:`url(${nueve})`}}>
                            <div className="cov">
                                <p>“Belleza, nobleza y fuerza no pueden faltar en el rancho”</p>
                            </div>
                        </div>
                        <div className="box_cat" style={{backgroundImage:`url(${diez})`}}>
                            <div className="cov">
                                <p>“Nuestro enlace al público: Pasturería Araceli”</p>
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
