import React, { Component } from 'react';
import './Footer.css';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';



class Footer extends Component {
    render(){
        return(
            <div className='footer'>
                <div className="flexi">
                    <div>
                        <h3>Sobre Rancho La Laguna</h3>
                        <p>Nosotros</p>
                        <p>Contacto</p>
                    </div>
                    <div className="terminos">
                        <h3 style={{color:"transparent"}}>Contacto</h3>
                        <p>admin@lalaguna.com</p>
                        <p>7757609276</p>
                    </div>

                    {/*<div className="social">*/}
                        {/*<span><FontAwesome name='facebook-square' className='icon_redes' size="2x"/></span>*/}
                        {/*<span><FontAwesome name='twitter-square' className='icon_redes' size="2x"/></span>*/}
                        {/*<span><FontAwesome name='linkedin-square' className='icon_redes' size="2x"/></span>*/}
                        {/*<span><FontAwesome name='google-plus-square' className='icon_redes' size="2x"/></span>*/}
                    {/*</div>*/}

                </div>
                <hr/>
                <div >
                    <p>Copyright © Rancho La Laguna 2017</p>
                </div>
      		</div>
        );
    }
}

export default Footer;