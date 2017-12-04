import React, { Component } from 'react';
import './Publi.css';

class Publi extends Component {
    render(){
        return(
            <div className='publi'>
                <div className="capa">
                    <h3 className="may bot">Philiphe Leblond</h3>
                    <p className="bot">Follow our latest Ambassador around on his many adventures.</p>
                    <button className="btn_white">Contactar</button>
                </div>
            </div>
        );
    }
}

export default Publi;