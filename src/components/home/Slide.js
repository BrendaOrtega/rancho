import React, { Component } from 'react';
import './Slide.css';
import FontAwesome from 'react-fontawesome';
import OwlCarousel from 'react-owl-carousel2';


class Slide extends Component {


    render(){
		const options = {
			    items: 1,
			    nav: false,
			    rewind: true,
			    autoplay: true
			};
        return(
            <div className='carousel '>
            	<OwlCarousel ref="car" options={options}  >
				    <div><img src="https://images.pexels.com/photos/296230/pexels-photo-296230.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="The Last of us"/></div>
				    <div><img src="https://images.pexels.com/photos/158179/lake-constance-sheep-pasture-sheep-blue-158179.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="GTA V"/></div>
				    <div><img src="https://images.pexels.com/photos/89267/pexels-photo-89267.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="Mirror Edge"/></div>
				</OwlCarousel>

					<button className='btn_slide' onClick={() => this.refs.car.prev()}>
						<FontAwesome name='angle-left' className='icon_about' size='2x'/>
					</button>
					<button className='btn_slide' onClick={() => this.refs.car.next()}>
						<FontAwesome name='angle-right' className='icon_about' size='2x'/>
					</button>
					<p> Un desarrollo privado de 128 hectáreas con acceso controlado y seguridad las 24:00 hrs con todo el respaldo y solidez de Grupo Avándaro.</p>
            </div>
        );
    }
}

export default Slide;