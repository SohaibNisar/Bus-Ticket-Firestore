import React, {Component} from 'react';
import { MDBRow, MDBCol ,} from 'mdbreact';
import './services.css';
class Services extends Component {
    render() {
        return(
            <div >            

            <section className="section-padding">
                    <div className="container">
                        <MDBRow>
                            <MDBCol></MDBCol>
                            <MDBCol size="lg-9">
                            <div className="section-title">
                                <h2>online bus ticket booking vs offline bus ticket booking</h2>
                            </div>
                            </MDBCol>
                            <MDBCol></MDBCol>
                        </MDBRow>                    
                        <MDBRow>
                            <MDBCol>
                                <div className="about-text">
                                    <p>Grids is a responsive Multipurpose Template. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat Grids is a responsive Multipurpose Template. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat.
                                    </p>
                                </div>
                            </MDBCol>
                            <MDBCol>
                                <div className="about-text">
                                    <p>Grids is a responsive Multipurpose Template. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat Grids is a responsive Multipurpose Template. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat.
                                    </p>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </div>
                </section>	              
            </div>
        );
    }
}

export default Services;