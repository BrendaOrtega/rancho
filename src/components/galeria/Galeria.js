import React, { Component } from 'react';
import './Galeria.css';
import FontAwesome from 'react-fontawesome';
import sr from '../about/scrollReveal.js';



class Galeria extends Component {
    componentDidMount () {
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
        return(
            <div className='galeria '>
				<div className="photos">
					<h3 className="bot">Nuestras instalaciones</h3>
					<br/>
					<div className='fotos center  left '>
                            <div className="cart ">
                                <span>Apicultura</span>
                                <div className="padre">
                                    <img src="https://images.pexels.com/photos/382166/pexels-photo-382166.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb" alt=""/>
                                </div>
                            </div>
                            <div className="cart left">
                                <span>Apicultura</span>
                                <div className="padre">
                                    <div>
                                        <img src="https://images.pexels.com/photos/382166/pexels-photo-382166.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="cart left">
                                <span>Apicultura</span>
                                <div className="padre">
                                    <div>
                                        <img src="https://images.pexels.com/photos/382166/pexels-photo-382166.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb" alt=""/>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className='fotos center  right '>
                        <div className="cart right">
                            <span>Apicultura</span>
                            <div className="padre">
                                <img src="https://images.pexels.com/photos/382166/pexels-photo-382166.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb" alt=""/>
                            </div>
                        </div>
                        <div className="cart right">
                            <span>Apicultura</span>
                            <div className="padre">
                                <div>
                                    <img src="https://images.pexels.com/photos/382166/pexels-photo-382166.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="cart bot">
                            <span>Apicultura</span>
                            <div className="padre">
                                <div>
                                    <img src="https://images.pexels.com/photos/382166/pexels-photo-382166.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
				</div>
      		</div>
        );
    }
}

export default Galeria;