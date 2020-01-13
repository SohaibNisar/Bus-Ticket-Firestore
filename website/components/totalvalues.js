import React, { Component } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import './totalvalues.css';
class Ratio extends Component {
    render() {
        return (
            <div>
                <section className="ratio-area">
                    <div className="container">
                        <MDBRow>
                            <MDBCol sm='4' >
                                <div className="text-center">
                                    <div className='content'>
                                        <span className="fas fa-plus icon"></span>
                                        <span className='number'>30</span>
                                    </div>
                                    <p>Total Routes</p>
                                </div>
                            </MDBCol>
                            <MDBCol sm='4' >
                                <div className="text-center">
                                    <div className='content'>
                                        <span className="fas fa-plus icon"></span>
                                        <span className='number'>10</span>
                                    </div>
                                    <p>Total Buses</p>
                                </div>
                            </MDBCol>
                            <MDBCol sm='4' >
                                <div className="text-center">
                                    <div className='content'>
                                        <span className="fas fa-plus icon"></span>
                                        <span className='number'>8</span>
                                    </div>
                                    <p>Total Sold</p>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </div>
                </section>
            </div>
        );
    }
}

export default Ratio;