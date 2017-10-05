import React, { Component } from 'react';
import './Footer.css';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';



class Footer extends Component {
    render(){
        return(
            <div className='footer'>
                <div className=" invit">
                    <div className="span">
                        <span>Grupo Mascota te ofrece atención, calidad y precio ! </span>
                    </div>
                    <div>
                        <Link to='/contacto'>
                            <button className="btn_contacto">Contactar</button>
                        </Link>

                    </div>
                </div>
                <hr />
                <div className="flexi">
                    <div className="social">
                        <span><FontAwesome name='facebook-square' className='icon_redes' size="2x"/></span>
                        <span><FontAwesome name='twitter-square' className='icon_redes' size="2x"/></span>
                        <span><FontAwesome name='linkedin-square' className='icon_redes' size="2x"/></span>
                        <span><FontAwesome name='google-plus-square' className='icon_redes' size="2x"/></span>
                    </div>
                    <div className="terminos">
                        <span>Términos de servicio</span>
                        <span>Política de privacidad</span>
                    </div>
                </div>
    			
      		</div>
        );
    }
}

export default Footer;