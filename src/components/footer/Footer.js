import React, { Component } from 'react';
import './Footer.css';
import FontAwesome from 'react-fontawesome';



class Footer extends Component {
    render(){
        return(
            <div className='footer'>
    			<div className='formu'>
    				<h4>Contacto Grupo Mascota</h4>


                        <form method="post" name="sentMessage" action="">
                            <div className='formgroup'>
                                <div className='inp'>
                                <FontAwesome name="user" aria-hidden="true"></FontAwesome>
                                <input type="text" name="nombre" className='formcontrol' placeholder="Nombre" id="name" required data-validation-required-message="Porfavor ingresa tu nombre"/>
                                <p className="help-block text-danger"></p></div>
                            </div>
                            <div className='formgroup'>
                                <div className='inp'>
                                    <FontAwesome name='envelope' aria-hidden="true"></FontAwesome>
                                    <input type="email" name="email" className='formcontrol' placeholder="Email" id="email" required data-validation-required-message="Porfavor ingresa tu e-mail"/>
                                    <p className="help-block text-danger"></p></div>
                            </div>
                            <div className='formgroup'>
                                <div className='inp'>
                                    <FontAwesome className="fa fa-phone" aria-hidden="true"></FontAwesome>

                                    <input type="tel" name="tel" className='formcontrol' placeholder="Teléfono" id="phone" required data-validation-required-message="Porfavor ingresa tu numero telefonico"/>
                                    <p className="help-block text-danger"></p></div>
                            </div>

                            <div className='formgroup'>
                                <div className='area'>
                                    <div className='msj'>
                                    <FontAwesome name="commenting" aria-hidden="true"></FontAwesome></div>

                                    <textarea type="text" name="msj" className='formcontrol' placeholder="Mensaje" id="message" required data-validation-required-message="Porfavor ingresa tu mensaje"/>
                                    <p className="help-block text-danger"></p>
                                   </div>
                            </div>
                            <div className='formgroup'>
                                    <button className='btn'>Enviar</button>
                                    <p className="help-block text-danger"></p>
                            </div>

                        </form>
					</div>	
	    			<div className='data'>
	    				<h4>Encuentranos en:</h4>
	    				<div className='inf'>
	    					<p> Mascota, Jalisco </p>
	    					<p> 7768920909</p> 
	    					<p>admin@granos.com</p>
	    				</div>
	    			</div>
    			
      		</div>
        );
    }
}

export default Footer;