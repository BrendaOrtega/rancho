import React, { Component } from 'react';
import './Farm.css';
import FontAwesome from 'react-fontawesome';



class Farm extends Component {
    render(){
        return(
            <div className='single'>
            	<div className='text left'>
            		<h2>En Selección de Granos</h2> 
            		<p> Contamos con instalaciones y maquinaria adecuadas 
            		para la elaboración de nuestros productos, además de un personal capacitado y
            		 excelentes proveedores, lo que nos permite brindar alimentos de calidad que 
            		 satisfacen las necesidades y exigencias del mercado.
            		 <br />
            		  <br />
					Tenemos un amplio portafolio de productos compuesto por diferentes líneas, 
					tales como aliños, repostería, hierbas aromáticas, mazamorras, cuchucos, granos
					 y cereales. 
					 <br />
					  <br />
					 Se prepara una salmuera con un poco de cerveza, jugo de limón, cebolla, ajo, 
					 laurel, tomillo, sal y pimienta. El lomo se frota fuertemente con la salmuera
					  por todas partes, varias veces y se deja en un recipiente cubierto con un paño
					  húmedo en la nevera hasta el otro día. Luego se lleva al horno precalentado a
					  300° por 1 hora 50 minutos aproximadamente. Rociándolo con el resto de la
					  cerveza mientras se asa. Se verifica la cocción y se sirve con habichuelas,
					  cebollitas y pimentón sofritos, acompañado de arroz blanco.</p>
            	</div>
            	<div className='img_text right'>
            		<img src='https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'/>
            	</div>
            </div>
        );
    }
}

export default Farm;