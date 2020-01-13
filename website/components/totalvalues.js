import React, { Component } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import './totalvalues.css';
import { db } from "../../firebaseConfig";
class Ratio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalRoutes: 0,
            totalbuses: 0,
            totalsold: 0,
        }
    }

    getData = () => {
        db.collection('Bookings').get().then((docs) => {
            let bookIds = [];
            docs.forEach((x, i) => {
                bookIds.push(x.id)
            })
            this.setState({
                totalsold: bookIds.length,
            })
        })

        db.collection('Bus').get().then((docs) => {
            let busIds = [];
            docs.forEach((x, i) => {
                busIds.push(x.id)
            })
            this.setState({
                totalbuses: busIds.length,
            })
        })

        db.collection('Routes').get().then((docs) => {
            let routesIds = [];
            docs.forEach((x, i) => {
                routesIds.push(x.id)
            })
            this.setState({
                totalRoutes: routesIds.length,
            })
        })
    }

    componentDidMount() {
        this.getData();
    }


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
                                        <span className='number'>{this.state.totalRoutes}</span>
                                    </div>
                                    <p>Total Routes</p>
                                </div>
                            </MDBCol>
                            <MDBCol sm='4' >
                                <div className="text-center">
                                    <div className='content'>
                                        <span className="fas fa-plus icon"></span>
                                        <span className='number'>{this.state.totalbuses}</span>
                                    </div>
                                    <p>Total Buses</p>
                                </div>
                            </MDBCol>
                            <MDBCol sm='4' >
                                <div className="text-center">
                                    <div className='content'>
                                        <span className="fas fa-plus icon"></span>
                                        <span className='number'>{this.state.totalsold}</span>
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