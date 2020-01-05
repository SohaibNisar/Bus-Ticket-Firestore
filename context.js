import React, { Component } from 'react';
import { db } from './firebaseConfig';
import { withRouter } from 'react-router-dom'
// import { firebase } from "./firebaseConfig";

export const Context = React.createContext();

class Provider extends Component {
    constructor() {
        super()
        this.state = {
            // date
            startDate: new Date(),

            // multi
            date: null,

            // search
            details: [],
            to: null,
            from: null,

            // book seacrh print
            bus: null,
            key: null,
            amount: null,
            arrivalTime: null,
            departureTime: null,
            // key: 'H5o2blDQkNFujyFFLt7T',
            // bus: 'Bus1',
            // to: 'Lahore',
            // from: 'Karachi',
            // date: 'D_5_1_2020',

            // book checkout
            // from seat
            seatCode: null,
            seatCount: null,
            payment: null,
            seatNo: null,
            previousSeatCode: null,

            // from checkout
            name: '',
            phone: '',
            email: '',
            cnic: '',

            // ticket
            ticketId:null,
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

    checkout = (seatCode, previousSeatCode, seatCount, payment, showdate, seatNo) => {
        if (seatCode && seatCount) {
            this.setState({
                seatCode: seatCode,
                seatCount: seatCount,
                showdate: showdate,
                payment: payment,
                previousSeatCode: previousSeatCode,
                seatNo: seatNo,
            })
        }
    }

    print=()=>{
        this.props.history.push('/');
        window.location.reload(); 
    }

    bookCon = () => {
        let seatCode = this.state.seatCode;
        seatCode = seatCode.join('')
        let bus = db.collection('Bus').doc(this.state.bus)
            .collection('Data').doc(this.state.key)
            .collection('Book').doc(this.state.date);
        let booking = db.collection('Bookings');

        booking.add({
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            cnic: this.state.cnic,
            bus: this.state.bus,
            from:this.state.from,
            to:this.state.to,
            busKey: this.state.key,
            seatCodePrevious: this.state.previousSeatCode,
            seatCodeUpdated: seatCode,
            amount: this.state.amount,
            total: this.state.payment,
            date: this.state.date,
            seats: this.state.seatCount,
            seatNo: this.state.seatNo,
        }).then((doc) => {
            this.setState({
                ticketId:doc.id,
            })
            bus.get().then((doc) => {
                bus.update({
                    seatCode: seatCode,
                    availabelSeats: doc.data().availabelSeats - this.state.seatCount,
                }).then(()=>{
                    this.props.history.push('/ticket')
                })
            })
        })
    }

    book = (bus, key, amount, arrivalTime, departureTime) => {
        if (this.state.bus !== null) {
            this.setState({
                date: null,
                bus: null,
                key: null,
                amount: null,
                arrivalTime: null,
                departureTime: null,
            })
        }
        let date = this.state.startDate;

        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear();

        date = 'D_' + d + '_' + m + '_' + y;

        var ref = db.collection('Bus').doc(bus);

        ref.get().then(function (doc) {
            if (doc.exists) {
                let defaultSeatCode = doc.data().defaultSeatCode;
                let seats = doc.data().seats;
                let bookRef = ref.collection('Data').doc(key).collection('Book').doc(date);
                bookRef.get().then((doc) => {
                    if (doc.exists) {
                        this.setState({
                            date: date,
                            bus: bus,
                            key: key,
                            amount: amount,
                            arrivalTime: arrivalTime,
                            departureTime: departureTime,
                        })
                        this.props.history.push('/seatmap')
                    }
                    else {
                        ref.collection('Data').doc(key).collection('Book').doc(date).set({
                            seatCode: defaultSeatCode,
                            availabelSeats: seats,
                        }, { merge: true })
                            .then(() => {
                                this.setState({
                                    date: date,
                                    bus: bus,
                                    key: key,
                                    amount: amount,
                                    arrivalTime: arrivalTime,
                                    departureTime: departureTime,
                                })
                                this.props.history.push('/seatmap')
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
        if (this.state.to === null || this.state.from === null) {
            alert('Fill Form First')
        }
        else {
            if (this.state.details[0] !== undefined) {
                this.setState({
                    details: []
                })
            }
            let date = this.state.startDate;

            let d = date.getDate();
            let m = date.getMonth() + 1;
            let y = date.getFullYear();

            date = 'D_' + d + '_' + m + '_' + y;
            let ref = db.collectionGroup('Data')
                .where('from', '==', this.state.from).where('to', '==', this.state.to)
            ref.get().then((querySnapshot) => {
                let details = [];
                querySnapshot.forEach(function (doc) {
                    let arrivalTime = doc.data().arrival;
                    let departureTime = doc.data().departure;
                    let amount = doc.data().amount;
                    let from = doc.data().from;
                    let to = doc.data().to;
                    let bus = doc.data().bus;
                    let id = doc.id;
                    details.push({
                        id: id,
                        arrivalTime: arrivalTime,
                        departureTime: departureTime,
                        amount: amount,
                        from: from,
                        to: to,
                        key: doc.id,
                        bus: bus,
                    });
                });

                if (details.length > 0) {
                    details.forEach((x, i) => {
                        let id = details[i].id;
                        db.collection('Bus/' + x.bus + '/Data/' + id + '/Book/').doc(date).get().then((doc) => {
                            let availabelSeats;
                            if (doc.exists) {
                                availabelSeats = doc.data().availabelSeats;
                            }
                            else {
                                availabelSeats = 41;
                            }
                            delete x.id;
                            x.availabelSeats = availabelSeats;
                            this.setState({
                                details: this.state.details.concat(x),
                            })
                        })
                    })
                }
                else {
                    this.setState({
                        details: 'nothing'
                    })
                }
            });
        }
    }

    render() {
        return (
            <div>
                <Context.Provider value={{
                    state: this.state,
                    handleChange: this.handleChange,
                    search: this.search,
                    book: this.book,
                    handleDate: this.handleDate,
                    checkout: this.checkout,
                    bookCon: this.bookCon,
                    print: this.print,
                }}>
                    {this.props.children}
                </Context.Provider>
            </div>
        )
    }
}

Provider = withRouter(Provider)
const Consumer = Context.Consumer;

export { Provider, Consumer };
