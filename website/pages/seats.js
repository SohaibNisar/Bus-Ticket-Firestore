import React, { Component } from 'react';
import { db } from '../../firebaseConfig';
import { Consumer } from "../../context";
import { withRouter } from "react-router-dom";
import Nav from '../components/nav search';
import stering from '../../data/images/stering.png';
import './seats.css';
import Footer from '../components/footer';

class Seats extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            busData: [],

            // for print
            seat: [],
            emptySpace: [],
            classes: [],
            showDate: null,
            seatNo: [],

            // update
            active: [],
            seatCount: 0,

            // from search or seatmap
            date: this.props.date,
            bus: this.props.bus,
            key: this.props.dockey,
            arrivalTime: this.props.arrivalTime,
            departureTime: this.props.departureTime,
            amount: this.props.amount,

            // date: 'D_6_1_2020',
            // bus: 'Bus1',
            // key: 'H5o2blDQkNFujyFFLt7T',
            // amount: 1000,
            // arrivalTime: '5:00',
            // departureTime: '6:00',
        }
    }

    getData = () => {
        let database = db.collection('Bus').doc(this.state.bus);
        database.get().then((data) => {
            let userData = data.data();
            database.collection('Data').doc(this.state.key).collection('Book').doc(this.state.date).get()
                .then((data) => {
                    if (data.exists) {
                        let seatCode = data.data().seatCode;
                        seatCode = seatCode.split('');

                        let fliterSeats = (seatStatus) => {
                            return seatCode.map((x, i) => x === seatStatus ? i : null).filter(x => x !== null);
                        }

                        let emptySpace = fliterSeats('_');

                        let busSeats = userData.seats;
                        let seat = [];
                        for (let i = 0; i < busSeats; i++) {
                            seat.push(i + 1);
                        }

                        for (let i = 0; i < emptySpace.length; i++) {
                            let x = emptySpace[i];
                            seat.splice(x, 0, '')
                        }

                        let classes = [];
                        seatCode.forEach((x, i) => {
                            if (x === 'a') {
                                classes.splice(i, 0, 'available')
                            }
                            else if (x === 'r') {
                                classes.splice(i, 0, 'reserved')
                            }
                            else if (x === 'u') {
                                classes.splice(i, 0, 'unavailable')
                            }
                            else if (x === '_') {
                                classes.splice(i, 0, 'emptySpace')
                            }
                        })
                        if (this._isMounted) {
                            this.setState({
                                seat: seat,
                                seatCode: seatCode.join(''),
                                classes: classes,
                                active: seatCode,
                            })
                        }
                    }
                })
        })
    }

    componentDidMount() {
        this._isMounted = true;
        this.getData();
        let date = this.state.date.split('')
        let showDate;
        showDate = date.map(x => x === '_' ? '-' : x);
        showDate.shift()
        showDate.shift()
        showDate = showDate.join('')
        this.setState({
            showDate: showDate,
        })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    inputHandler = (e) => {
        let nam = e.target.name;
        let value = e.target.value;
        this.setState({
            [nam]: value,
        })
    }

    updateHandler = (seatindex, seatNo) => {
        let i = parseInt(seatindex);
        let classesArray = this.state.classes;
        let active = this.state.active;

        if (this.state.seatNo.indexOf(seatNo) > -1) {
            this.setState({
                seatNo: this.state.seatNo.filter(res => res !== seatNo)
            })
        } else {
            if (this.state.seatCount < 6) {
                this.setState({
                    seatNo: this.state.seatNo.concat(seatNo),
                })
            }
        }

        if (classesArray[i] === 'active') {
            classesArray[i] = 'available';
            this.setState({
                seatCount: this.state.seatCount - 1,
            })
        }
        else {
            if (this.state.seatCount < 6) {
                classesArray[i] = 'active';
                this.setState({
                    seatCount: this.state.seatCount + 1,
                })
            }
        }

        if (active[i] === 'a') {
            if (this.state.seatCount < 6) {
                active[i] = 'r';
            }
            else {
                alert("You can't select more than 6 seats per booking")
            }
        }
        else {
            active[i] = 'a';
        }


        this.setState({
            classes: classesArray,
            active: active,
        })
    }

    render() {
        return (
            <Consumer>
                {(value) => {
                    return (
                        <div id='seatmap' className='pt-5'>
                            <Nav />
                            <div className='col-md-9 seatmap p-4 mb-5'>
                                <h5 className='mb-4'><b>Route - </b>{value.state.from} to {value.state.to}</h5>
                                <div className='row'>
                                    <div className='container-seatplan col-md-6 border-right mb-4'>
                                        <div className='seatplan'>
                                            <div className="stering">
                                                <img src={stering} alt='stering' />
                                            </div>
                                            <div>
                                                {this.state.seat.map((x, i) =>
                                                    <div className={'seat ' + this.state.classes[i]}
                                                        key={i} onClick={e => this.updateHandler(i, x)}>{x}</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 pl-4'>
                                        <h5 className='text-primary font-weight-bold'>Booking Details</h5>
                                        <div className='mt-4'>
                                            <p>
                                                <b>Service: </b>{this.state.bus}<br />
                                                <b>Departure Date: </b>{this.state.showDate}<br />
                                                <b>Arrival Time: </b>{this.state.arrivalTime}<br />
                                                <b>Departure Time: </b>{this.state.departureTime}
                                            </p>
                                        </div>
                                        <div className='mt-4'>
                                            <p>Please select your seats</p>
                                            <div className='ligands d-flex flex-wrap'>
                                                <div className='d-flex align-items-center'>
                                                    <div className='ligand reserved'></div>
                                                    <small>Available</small>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <div className='ligand available'></div>
                                                    <small>Reserved</small>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <div className='ligand active'></div>
                                                    <small>Selected</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mt-5'>
                                            <div className="row m-0">
                                                <div className='col-md-4 p-0 pr-4'>
                                                    <h6 className='font-weight-bold text-primary'>Selected</h6>
                                                    <span className='font-weight-bold text-muted'>{this.state.seatCount}</span>
                                                </div>
                                                <div className='col-md-4 p-0 pr-4'>
                                                    <h6 className='font-weight-bold text-primary'>Seats No.</h6>
                                                    <span className='font-weight-bold text-muted'>{this.state.seatNo.length === 0 ? '0 Seats' : this.state.seatNo.sort(function (a, b) { return a - b }).join(', ')}</span>
                                                </div>
                                                <div className='col-md-4 p-0 pr-4'>
                                                    <h6 className='font-weight-bold text-primary'>Amount</h6>
                                                    <span className='font-weight-bold text-muted'>Rs: {this.state.amount * this.state.seatCount}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-100 mt-5 button'>
                                            {this.state.seatCount <= 0 ?
                                                <button className='btn btn-sm btn-blue rounded' disabled={true}>Book</button> :
                                                <button className='btn btn-sm btn-blue rounded' onClick={() => {
                                                    value.checkout(this.state.active, this.state.seatCode, this.state.seatCount, this.state.amount * this.state.seatCount, this.state.showDate, this.state.seatNo);
                                                    this.props.history.push('/checkout');
                                                }}>Book</button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Footer />
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default withRouter(Seats);