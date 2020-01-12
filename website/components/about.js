import React, { Component } from 'react';
import image from '../../data/images/home/about2.jpg';

class About extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <section id="about" className="about my-5">
                        <h2 className="text-center text-uppercase font-weight-bold mt-5 pt-4 pt-4 spacing" ><strong>About
        us</strong></h2>
                        <p className="text-center text-uppercase font-weight-bold grey-text mb-5 pb-3" ><i className="fas fa-square red-text-2 mr-2" aria-hidden="true" /> Lorem ipsum dolor sit amet</p>
                        <div className="row">
                            <div className="col-xl-5 col-lg-6 pb-1">
                                <p align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo animi soluta ratione
                                  quisquam, dicta
                                  ab cupiditate iure eaque? Repellendus voluptatum, magni impedit eaque animi maxime.
        </p>
                                <p align="justify">Nemo animi soluta ratione quisquam, dicta ab cupiditate iure eaque? Repellendus
                                  voluptatum, magni
                                  impedit eaque delectus, beatae maxime temporibus maiores quibusdam quasi rem magnam ad perferendis
          iusto sint tempora.</p>
                                <ul>
                                    <li>Nemo animi soluta ratione</li>
                                    <li>Beatae maxime temporibus</li>
                                    <li>Consectetur adipisicing elit</li>
                                    <li>Repellendus voluptatum, impedit</li>
                                </ul>
                            </div>
                            <div className="col-xl-6 ml-lg-auto col-lg-6 mb-5">
                                <img src={image} className="img-fluid rounded z-depth-1" alt="My photo" />
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        )
    }
}

export default About
