import React, {Component} from 'react';
import {Animated} from "react-animated-css";
import './slide.css';
class Slide extends Component {
    render() {
        return(
            <div className="slider">
                <Animated animationIn="fadeInRight">
                <h1>                    
                    Our Sologan Never <br/> Compromize On Quality
                </h1>
                </Animated>
            </div>
        );
    }
}

export default Slide;