import React, { Component } from 'react';
import './Tienda.css';
import FontAwesome from 'react-fontawesome';
import Footer from '../footer/Footer';


class Tienda extends Component {
    render(){
        return(
            <div className='tienda'>
            	<div className='store'>
            		<h2 className='text_store'>Mascota Store</h2>
            		<div className="white">
            			<p className='parrafo_store'>Todo en granos, semillas, fertilizantes, implementos, agricultura orgánicos y alimentos balanceados</p>
            		</div>
            	</div>
            	<div className='box_store'>
            		<div className='img_store'>
            			<img src='https://images.pexels.com/photos/15964/pexels-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb' />
            		</div>
            		<div className='descript_store'>
            			<h4>MÁS QUE UNA TIENDA</h4>
            			<p>
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
            			<h2>Nuestros Produtos</h2>
            			<div className='card_p'>
            				<div className='card_img'>
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
            			<div className='card_p'>
            				
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
            			<div className='card_p'>
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
            			<div className='card_p'>
            				
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
            			<div className='card_p'>
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
            	<Footer />
      		</div>
        );
    }
}

export default Tienda;