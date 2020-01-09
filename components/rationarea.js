import React, {Component} from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import './ractio.css';
class Ratio extends Component {
    render() {
        return(
            <div className="">
                <section className="ratio-area">
                    <div className="container">
                    <MDBRow>
                        <MDBCol>
                            <div className="text-center">
                                <h3><span>30</span></h3>
                                <p>Total Routes</p>
                            </div>
                        </MDBCol>
                        <MDBCol>
                            <div className="text-center">
                                <h3><span >10</span></h3>
                                <p>Ttal Buses</p>
                            </div>
                        </MDBCol>
                        <MDBCol>
                            <div className="text-center">
                                <h3><span>8</span></h3>
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