import React, { Component } from 'react';
import './Footer.css';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import Map from './Map';


class Footer extends Component {
    render(){
        return(
            <div className='footer'>
                <div className="flexi">
                    <div>
                        <h3>CONTACTÁNOS</h3>
                        <input type="text" placeholder="Name"/>
                        <br/>
                        <input type="text" placeholder="Email"/>
                        <br/>
                        <button className="btn_send">Enviar
                        </button>
                    </div>
                    <div>
                        <h3>Rancho La Laguna</h3>
                        <p><FontAwesome name="map" />Mascota, GDL, Jalisco</p>
                        <p><FontAwesome name="phone" />33 780 93 45</p>
                        <p><FontAwesome name="envelope" />admin@rancho.com</p>
                    </div>

                    <div className="social">
                        <h3>Síguenos en</h3>
                        <span><FontAwesome name='facebook-square' className='icon_redes' size="2x"/></span>
                        <span><FontAwesome name='twitter-square' className='icon_redes' size="2x"/></span>
                        <span><FontAwesome name='instagram' className='icon_redes' size="2x"/></span>
                        <span><FontAwesome name='youtube' className='icon_redes' size="2x"/></span>
                    </div>

                </div>
                <div className="copy" >
                    <p>Copyright © Rancho La Laguna 2017</p>
                </div>
                <div className="">
                    <Map />
                </div>
      		</div>
        );
    }
}

export default Footer;