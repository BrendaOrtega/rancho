import React, { Component } from 'react';
import './Tienda.css';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import sr from '../about/scrollReveal.js';


class Tienda extends Component {
    componentDidMount () {
        window.scroll(0, 0)
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
            <div className='tienda'>

				<Link to='/'>
					<FontAwesome name='home' className='homi left' size='2x'/>
				</Link>
            	<div className='store'>
            		<h2 className='text_store '>Mascota Store</h2>
            		<div className="white right">
            			<p className='parrafo_store left'>Todo en granos, semillas, fertilizantes, implementos, agricultura orgánicos y alimentos balanceados</p>
            		</div>
            	</div>
            	<div className='box_store'>
            		<div className='img_store'>
            			<img  className="bot" src='https://images.pexels.com/photos/15964/pexels-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb' />
            		</div>
            		<div className='descript_store'>
            			<h4 className="bot">MÁS QUE UNA TIENDA</h4>
            			<p className="bot">
            				Bienvenido a un nuevo concepto de alimentos orgánicos y de calidad
            				Bienvenido a un nuevo concepto de alimentos orgánicos y de calidad
            				Bienvenido a un nuevo concepto de alimentos orgánicos y de calidad
            				Bienvenido a un nuevo concepto de alimentos orgánicos y de calidad
            				Bienvenido a un nuevo concepto de alimentos orgánicos y de calidad
            				Bienvenido a un nuevo concepto de alimentos orgánicos y de calidad
            				Bienvenido a un nuevo concepto de alimentos orgánicos y de calidad
            				Bienvenido a un nuevo concepto de alimentos orgánicos y de calidad
            				<br />
            				<br />
            				Bienvenido a un nuevo concepto de alimentos orgánicos y de calidad
            				Bienvenido a un nuevo concepto de alimentos orgánicos y de calidad
            				Bienvenido a un nuevo concepto de alimentos orgánicos y de calidad
            				Bienvenido a un nuevo concepto de alimentos orgánicos y de calidad
            				Bienvenido a un nuevo concepto de alimentos orgánicos y de calidad
            			</p>
            		</div>
            		
            		
            	</div>
            	<div className='store_product'>
            			<h2 className="bot">Nuestros Produtos</h2>
            			<div className='card_p left'>
            				<div className='card_img '>
            				</div>
            				<div className='card_text'>
            					<h4>Semillas</h4>
            					<p>Las mejores semillas de Jalisco</p>
            					<hr className='prod'/>
            					<div className='list'>
            						<div> <span>Frijol</span></div>
            						<div><span>Maíz</span></div>
            						<div><span>Maíz Molido</span></div>
            						<div><span>Sorgo</span></div>
            						<div><span>Sorgo Molido</span></div>
            						<div><span>Maíz quebrado</span></div>
            						<div><span>Pasta de Soya</span></div>
            						<div><span>Pasta de Canola</span></div>
            					</div>

            				</div>
            			</div>
            			<div className='card_p right'>
            				
            				<div className='card_text_dos'>
            					<h4>Granos</h4>
            					<p>Las mejores semillas de Jalisco</p>
            					<hr className='prod'/>
            					<div className='list'>
            						<div> <span>Frijol</span></div>
            						<div><span>Maíz</span></div>
            						<div><span>Maíz Molido</span></div>
            						<div><span>Sorgo</span></div>
            						<div><span>Sorgo Molido</span></div>
            						<div><span>Maíz quebrado</span></div>
            						<div><span>Pasta de Soya</span></div>
            						<div><span>Pasta de Canola</span></div>
            					</div>

            				</div>
            				<div className='card_img'>
            				</div>
            			</div>
            			<div className='card_p left'>
            				<div className='card_img'>
            				</div>
            				<div className='card_text'>
            					<h4>Fertilizantes</h4>
            					<p>Las mejores semillas de Jalisco</p>
            					<hr className='prod'/>
            					<div className='list'>
            						<div> <span>Frijol</span></div>
            						<div><span>Maíz</span></div>
            						<div><span>Maíz Molido</span></div>
            						<div><span>Sorgo</span></div>
            						<div><span>Sorgo Molido</span></div>
            						<div><span>Maíz quebrado</span></div>
            						<div><span>Pasta de Soya</span></div>
            						<div><span>Pasta de Canola</span></div>
            					</div>

            				</div>
            			</div>
            			<div className='card_p right'>
            				
            				<div className='card_text_dos'>
            					<h4>Implementos</h4>
            					<p>Implementos agrícolas y pecuarios </p>
            					<hr className='prod'/>
            					<div className='list'>
            						<div> <span>Frijol</span></div>
            						<div><span>Maíz</span></div>
            						<div><span>Maíz Molido</span></div>
            						<div><span>Sorgo</span></div>
            						<div><span>Sorgo Molido</span></div>
            						<div><span>Maíz quebrado</span></div>
            						<div><span>Pasta de Soya</span></div>
            						<div><span>Pasta de Canola</span></div>
            					</div>

            				</div>
            				<div className='card_img'>
            				</div>
            			</div>
            			<div className='card_p left'>
            				<div className='card_img'>
            				</div>
            				<div className='card_text'>
            					<h4>Agricultura orgánica</h4>
            					<p>Las mejores semillas de Jalisco</p>
            					<hr className='prod'/>
            					<div className='list'>
            						<div> <span>Frijol</span></div>
            						<div><span>Maíz</span></div>
            						<div><span>Maíz Molido</span></div>
            						<div><span>Sorgo</span></div>
            						<div><span>Sorgo Molido</span></div>
            						<div><span>Maíz quebrado</span></div>
            						<div><span>Pasta de Soya</span></div>
            						<div><span>Pasta de Canola</span></div>
            					</div>

            				</div>
            			</div>
            	</div>
      		</div>
        );
    }
}

export default Tienda;