import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './Seller.css';

class Seller extends Component {
    render(){
        return(
            <div className='seller'>
               <div className="spa bot">
                    <h2>Don’t be a stranger</h2>
                    <p>Feel free to shoot me an email at hello@july-july.com or catch me on one of the links below.</p>
                    <div>
                        <FontAwesome name='facebook-square' className='icon_redes' size="2x"/>
                        <FontAwesome name='twitter-square' className='icon_redes' size="2x"/>
                        <FontAwesome name='google-plus-square' className='icon_redes' size="2x"/>
                    </div>
               </div>
            </div>
        );
    }
}

export default Seller;