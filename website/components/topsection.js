import React, { Component } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import './topsection.css';
class Topsection extends Component {
    render() {
        return (
            <div >
                <section className="topsection text-center py-4">

                    <div>
                        <h2 className="text-center text-uppercase font-weight-bold mt-5 pt-4 spacing"><strong>E-Bus</strong></h2>
                        <p className="text-center text-uppercase font-weight-bold grey-text mb-5 pb-3"><i className="fas fa-square red-text-2 mr-2" aria-hidden="true" /> Lorem ipsum dolor sit amet</p>
                    </div>


                    <div className="container">
                        <MDBRow>
                            <MDBCol>
                                <div className="single-topsection-detail clearfix">
                                    <div className="topsection-img img1">
                                        {/* for bg image */}
                                    </div>
                                    <div className="topsection-details">
                                        <div className="pentagon-text">
                                            <h1>C</h1>
                                        </div>
                                        <h3>Comfortable</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol>
                                <div className="single-topsection-detail">
                                    <div className="topsection-img img2">
                                        {/* for bg image */}
                                    </div>
                                    <div className="topsection-details">
                                        <div className="pentagon-text">
                                            <h1>C</h1>
                                        </div>

                                        <h3>Commitment</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol>
                                <div className="single-topsection-detail">
                                    <div className="topsection-img img3">
                                        {/* for bg image */}
                                    </div>
                                    <div className="topsection-details">
                                        <div className="pentagon-text">
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

export default Topsection;