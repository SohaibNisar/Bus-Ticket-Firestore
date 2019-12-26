import React, { Component } from "react";
import DatePicker from "react-datepicker";
import Seats from './seats';
// import { Link } from 'react-router-dom';
import './form.css';
import "react-datepicker/dist/react-datepicker.css";
import { db } from '../firebaseConfig';

class Form extends Component {
    constructor() {
        super()
        this.state = {
            startDate: new Date(),
            date: null,

            details: [],
        }
    }

    handleDate = date => {
        this.setState({
            startDate: date,
        });
    };

    handleChange = (e) => {
        let nam = e.target.name;
        let value = e.target.value;

        this.setState({
            [nam]: value,
        })
    }

    book = (name) => {
        this.setState({
            date: null,
        });
        let date = this.state.startDate;

        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear();

        date = 'D_' + d + '_' + m + '_' + y;

        var ref = db.collection('Bus').doc(name);

        ref.get().then(function (doc) {
            if (doc.exists) {
                let defaultSeatCode = doc.data().defaultSeatCode;
                let bookRef = ref.collection('Book').doc(date);
                bookRef.get().then((doc) => {
                    if (doc.exists) {
                        this.setState({
                            date: date
                        })
                    }
                    else {
                        ref.collection('Book').doc(date).set({
                            seatCode: defaultSeatCode
                        }, { merge: true }).then(() => {
                            this.setState({
                                date: date
                            })
                        })
                    }
                })
            }
            else {
                console.log("No such document!");
            }
        }.bind(this)).catch(function (error) {
            console.log("Error getting document:", error);
        });
    }


    search = () => {
        let ref = db.collectionGroup('location')
            .where('from', '==', 'A').where('to', '==', 'B')
        ref.get().then((querySnapshot) => {
            let details = [];
            querySnapshot.forEach(function (doc) {
                let parent = doc.ref.parent.parent;

                let arrivalTime = doc.data().arrival;
                let departureTime = doc.data().departure;
                let amount = doc.data().amount;
                let from = doc.data().from;
                let to = doc.data().to;

                details.push({
                    arrivalTime: arrivalTime,
                    departureTime: departureTime,
                    amount: amount,
                    from: from,
                    to: to,
                    name: parent.id,
                });
            });
            this.setState({
                details: details
            })
        });
    }

    render() {
        return (
            <div>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleDate}
                    minDate={new Date()}
                />
                <input type="text" name="from" placeholder='From' onChange={this.handleChange} />
                <input type="text" name="to" placeholder='To' onChange={this.handleChange} />
                <button onClick={this.search}>Search</button>
                <br />
                <br />
                <br />
                <div>
                    {this.state.details && this.state.details.map((x, i) => {
                        return (
                            <div key={i}>
                                <div>{x.name}</div>
                                <div>Departure Time: {x.departureTime}</div>
                                <div>Arrivali Time: {x.arrivalTime}</div>
                                <div>Rs. {x.amount}</div>
                                <div className="accordion" id="Bus_List">
                                    <button className="btn btn-default" type="button"  onClick={() => this.book(x.name)} data-toggle="collapse" data-target={"#collapse" + i} aria-expanded="true" aria-controls={"collapse" + i}>Book</button>
                                    <div id={"collapse" + i} className="collapse hide" aria-labelledby="headingOne" data-parent="#Bus_List">
                                        {this.state.date && <Seats bus={x.name} date={this.state.date} />}

                                    </div>
                                </div>
                                <br />
                            </div>
                        )
                    })}

                </div>
            </div >
        );
    }
}

export default Form;