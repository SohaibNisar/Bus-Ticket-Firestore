import React, { Component } from 'react';
// import firebase from 'firebase';
import './seats.css';
import { db } from '../firebaseConfig';

class Seats extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            busData: [],

            // for print
            seat: [],
            emptySpace: [],
            active: [],
            classes: [],

            // for search
            date: this.props.date,
            bus: this.props.bus,
        }
    }

    getData = () => {
        let database = db.collection('Bus').doc(this.state.bus);
        database.get().then((data) => {
            let userData = data.data();
            database.collection('Book').doc(this.state.date).get()
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

    submitHandler = () => {
        // let ref = db.collection('Bus');
        // ref.set({
        //     defaultSeatCode:'aaaaaaaaaaaaaaaaaaaaaa____________aaaaaaaaaa',
        //     seats:'32',
        //     location:[
        //         {from:'A',to:'B',amount:1000,departure:'6:00 PM'},
        //         {from:'B',to:'C',amount:500,departure:'7:00 PM'},
        //         {from:'C',to:'D',amount:700,departure:'6:00 AM'},
        //         {from:'D',to:'E',amount:600,departure:'9:00 AM'},
        //     ]
        // })
        // ref.collection(location).add(
        //     { from: 'A', to: 'B', amount: 1000, departure: '6:00 PM' },
        //     { from: 'B', to: 'C', amount: 500, departure: '7:00 PM' },
        //     { from: 'C', to: 'D', amount: 700, departure: '6:00 AM' },
        //     { from: 'D', to: 'E', amount: 600, departure: '9:00 AM' },
        // )

    }

    updateHandler = (seatSingle) => {
        let i = parseInt(seatSingle);
        let classesArray = this.state.classes;
        let active = this.state.active;

        classesArray[i] = classesArray[i] === 'active' ? 'available' : 'active';
        active[i] = active[i] === 'a' ? 'r' : 'a';

        this.setState({
            classes: classesArray,
            active: active,
        })
    }

    updateClick = () => {
        let update = this.state.active;
        update = update.join('')
        let date = this.state.date;
        db.collection('Bus').doc(this.state.bus)
            .collection('Book').doc(date).update({
                seatCode: update,
            })
    }

    render() {
        return (
            <div className='seat_box grid'>
                <div className='flex'>
                    {this.state.seat.map((x, i) =>
                        <div className={'seat ' + this.state.classes[i]}
                            key={i} onClick={e => this.updateHandler(i)}>{x}</div>
                    )}
                </div>
                <div>
                    <br />
                    {/* <button onClick={this.submitHandler}>Submit</button> */}
                    <button onClick={this.updateClick}>Continue</button>
                </div>
            </div>
        )
    }

}

export default Seats;
