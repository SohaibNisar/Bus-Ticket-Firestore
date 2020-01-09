import React, {Component} from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import './about.css';
class About extends Component {
    render() {
        return(
            <div >
            	<section className="about text-center">
                <h3 className="about">About</h3>
                    <div className="container">
                        <MDBRow>                        
                            <MDBCol>
                                <div className="single-about-detail clearfix">
                                    <div className="about-img img1">
                                        {/* <img className="img-responsive" src="img/1.jpg" alt="" /> */}
                                    </div>
                                    <div className="about-details">
                                        <div className="pentagon-text">
                                            <h1>C</h1>
                                        </div>                                        
                                <h3>Comfortable</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                            </div>
                            </div>
                            </MDBCol>
                            <MDBCol>
                            <div class="single-about-detail">
                                <div className="about-img img2">
                                    {/* <img className="img-responsive" src="img/2.jpg" alt="" /> */}
                                </div>
                                <div className="about-details">
                                    <div className="pentagon-text">
                                        <h1>C</h1>
                                    </div>

                                    <h3>Commitment</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                                </div>
					        </div>
                            </MDBCol>
                            <MDBCol>
                            <div class="single-about-detail">
                                <div className="about-img img3">
                                    {/* <img class="img-responsive" src="img/3.jpg" alt="" /> */}
                                </div>
                                <div class="about-details">
                                    <div class="pentagon-text">
                                        <h1>C</h1>
                                    </div>
                                    <h3>Compromise</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                                </div>
					        </div>
                            </MDBCol>
                        </MDBRow>                        
                    </div>
                </section>
    </div>
        );
    }
}

export default About;