import React, { Component } from 'react';
import './Revista.css';

class Revista extends Component {

    render(){
        return(
            <div className='revista'>
                <div className="rev_img">

                </div>
                <div className="rev_text ">
                    <h2 className="right">Magnificent Paris
                        <br/>
                        Our all time favorite city.</h2>
                    <p className="right">Paris can be seen as the most interesting city of Europe and probably even as one of the most amazing city’s worldwide. People from all over the world travel to Paris to discover and experience this fairy-like city.
                    </p>
                    <br/>
                    <p className="right">
                        Paris is the city of love, inspiration, art and fashion. The night scene, the Eiffel tower and the warm atmosphere will make you feel directly at home. Paris has a lot of interesting architecture and museums to offer, and is also a Walhalla for shopaholics.</p>
                </div>
            </div>
        );
    }
}

export default Revista;