import React, { Component } from 'react';
import './Contacto.css';
import FontAwesome from 'react-fontawesome';
import Nav from '../nav/Nav';


class Contacto extends Component {
    render(){
        return(
            <div className='contactos'>
                <div className='back_form'>
                    <div className='cover'>
                        <Nav />
                        <div className='contenido'>
                            <h3 className='saludo bot'>Hola!</h3>
                            <p className='mensaje bot'>Completa el formulario y nos pondremos en contacto contigo</p>
                            <div>
                                <form method="post" action="." className='recuadro bot' name="sentMessage" id="contactForm">
                                    <div >
                                        <div className='data '>
                                            <input required requiredname="nombre" type="name" className="formas form-control" placeholder=" Nombre *" id="nombre" required data-validation-required-message="Please enter your email address." />
                                            <p className="help-block text-danger"></p>
                                            <input required name="estado" type="estado" className="formas lefs form-control" placeholder=" Estado *" id="estado" required data-validation-required-message="Please enter your phone number." />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <p className="help-block text-danger"></p>
                                        <div className='data'>
                                            <input required name="email" type="email" className="formas form-control " placeholder=" Email *" id="email" required data-validation-required-message="Please enter your email address." />
                                            <p className="help-block text-danger"></p>
                                            <input required name="tel" type="tel" className="formas lefs form-control" placeholder=" Teléfono *" id="phone" required data-validation-required-message="Please enter your phone number." />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className='option'>
                                        <select name="path" type="text" className='forms form-control select ' id="name" required data-validation-required-message="Please enter your name.">
                                            <option  default value="Productos">Productos</option>
                                            <optgroup  label='Ganado'>
                                                <option value="Equinos">Equinos</option>
                                                <option value="Bovinos">Bovinos</option>
                                                <option value="Porcinos">Porcinos</option>
                                            </optgroup>
                                            <optgroup label='Grano'>
                                                <option value="Maiz">Maíz</option>
                                                <option value="Surgo">Surgo</option>
                                                <option value="Granos">Granos</option>
                                            </optgroup>
                                            <optgroup label='Campo'>
                                                <option value="Maiz">Maíz</option>
                                                <option value="Pasto">Pasto Moralfalfa</option>
                                                <option value="Hortalizas">Hortalizas</option>
                                                <option value="Frutos rojos">Frutos Rojos</option>
                                            </optgroup>

                                        </select>

                                    </div>
                                    <p className="help-block text-danger"></p>

                                    <textarea placeholder="Mensaje" className="forms"></textarea>
                                    <p className="help-block text-danger"></p>


                                    <button className='btn_form'>
                                        Enviar
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Contacto;