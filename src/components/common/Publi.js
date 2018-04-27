import React, { Component } from 'react';
import once from '../../assets/011.jpg';
import doce from '../../assets/012.jpg';
import './Publi.css';

class Publi extends Component {
    render(){
        return(
            <div className='publi '>
                <div className="capa">
                    <div className="box_color" style={{backgroundImage:`url(${once})`}}>

                    </div>
                    <div className="box_info">
                        <h3 className="may bot">EL COMIENZO DE UN PROYECTO DE VALOR AMBIENTAL</h3>
                        <p className="bot">Fundado en las afueras de Mascota, Jalisco, con 100 hectáreas, Álvaro López decide empezar a crear un rancho basado en el consumo de implementos producidos en el mismo rancho</p>
                        <button className="btn_white">Contactar</button>
                    </div>
                    <div className="box_color" style={{backgroundImage:`url(${doce})`}}>

                    </div>
                </div>
            </div>
        );
    }
}

export default Publi;