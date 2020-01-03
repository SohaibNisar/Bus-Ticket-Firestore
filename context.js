import React, { Component } from 'react';
import { db } from './firebaseConfig';
import { withRouter } from 'react-router-dom'

export const Context = React.createContext();

class Provider extends Component {
    constructor() {
        super()
        this.state = {
            startDate: new Date(),
            date: null,

            details: [],
            operator: null,
            from: null,
            to: null,
            key: null,
            amount: null,
            arrivalTime: null,
            departureTime: null,
            // operator: 'Bus1',
            // to: 'Lahore',
            // from: 'Karachi',
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

    book = (operator, key, amount, arrivalTime, departureTime) => {
        if (this.state.operator !== null) {
            this.setState({
                date: null,
                operator: null,
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

        var ref = db.collection('Bus').doc(operator);

        ref.get().then(function (doc) {
            if (doc.exists) {
                let defaultSeatCode = doc.data().defaultSeatCode;
                let seats = doc.data().seats;
                let bookRef = ref.collection('Data').doc(key).collection('Book').doc(date);
                bookRef.get().then((doc) => {
                    if (doc.exists) {
                        this.setState({
                            date: date,
                            operator: operator,
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
                                    operator: operator,
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
        if (this.state.operator === null || this.state.to === null || this.state.from === null) {
            alert('Fill Form First')
        }
        else {
            if (this.state.details[0]!==undefined) {
                this.setState({
                    details:[]
                })
            }
            let date = this.state.startDate;

            let d = date.getDate();
            let m = date.getMonth() + 1;
            let y = date.getFullYear();

            date = 'D_' + d + '_' + m + '_' + y;
            let ref = db.collection('Bus').doc(this.state.operator).collection('Data')
                .where('from', '==', this.state.from).where('to', '==', this.state.to)
            ref.get().then((querySnapshot) => {
                let details = [];
                querySnapshot.forEach(function (doc) {
                    let arrivalTime = doc.data().arrival;
                    let departureTime = doc.data().departure;
                    let amount = doc.data().amount;
                    let from = doc.data().from;
                    let to = doc.data().to;
                    let operator = doc.data().operator;

                    let id = doc.id;
                    details.push({
                        id: id,
                        arrivalTime: arrivalTime,
                        departureTime: departureTime,
                        amount: amount,
                        from: from,
                        to: to,
                        key: doc.id,
                        operator: operator,
                    });
                });

                if (details.length > 0) {
                    details.forEach((x, i) => {
                        let id = details[i].id;
                        db.collection('Bus/Bus1/Data/' + id + '/Book/').doc(date).get().then((doc) => {
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
