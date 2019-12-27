import React, { Component } from 'react';
import { db } from './firebaseConfig';

export const Context = React.createContext();

class Provider extends Component {
    constructor() {
        super()
        this.state = {
            startDate: new Date(),
            date: null,

            details: [],
            // date: null,
            bus: null,
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
        // this.setState({
        //     date: null,
        // });
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
                            date: date,
                            bus: name,
                        })
                    }
                    else {
                        ref.collection('Book').doc(date).set({
                            seatCode: defaultSeatCode
                        }, { merge: true }).then(() => {
                            this.setState({
                                date: date,
                                bus: name,
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
    // componentDidUpdate(){
    //     console.log(this.state)
    // }

    render() {
        return (
            <div>
                <Context.Provider value={{
                    state: this.state,
                    handleChange: this.handleChange,
                    search: this.search,
                    book: this.book
                }}>
                    {this.props.children}
                </Context.Provider>
            </div>
        )
    }
}

const Consumer = Context.Consumer;

export { Provider, Consumer };
