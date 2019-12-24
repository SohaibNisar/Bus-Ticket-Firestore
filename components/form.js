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
        }
    }

    handleChange = date => {
        this.setState({
            startDate: date,
        });
    };

    search = () => {
        this.setState({
            date: null,
        });
        let date = this.state.startDate;

        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear();

        date = 'D_' + d + '_' + m + '_' + y;

        var ref = db.collection('Bus').doc("Bus1");

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

    render() {
        return (
            <div>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    minDate={new Date()}
                />
                <button onClick={this.search}>Search</button>
                <br />
                <br />
                <br />
                {this.state.date && <Seats date={this.state.date} />}
                {/* {<Seats/>} */}
            </div>
        );
    }
}

export default Form;