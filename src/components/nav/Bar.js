import React, { Component } from 'react';
import './Bar.css';
import {Link} from 'react-router-dom';


class Bar extends Component {
    render(){
        return(
            <div className="navbar">
                <div className="barra">
                    <Link to='/'>
                        <h2 className='bot'>Logo</h2>
                    </Link>

                <div className='pesta bot'>
                    <p className='lin'>Somos</p>
                    <Link to='/ganaderia'>
                        <p className='lin'>Ganadería</p>
                    </Link>
                    <Link to='/info'>
                        <p className='lin'>Granos</p>
                    </Link>
                    <Link to='/campo'>
                        <p className='lin'>Campo</p>
                    </Link>

                    <Link to='/tienda'>
                    <p className='lin'>Tienda</p>
                </Link>
                    <Link to='/contacto'>
                        <p className='lin'>Contacto</p>
                    </Link>

                </div>
            </div>
            </div>
        );
    }
}

export default Bar;