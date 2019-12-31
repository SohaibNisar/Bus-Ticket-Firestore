import React, { Component } from 'react'
import { db } from '../firebaseConfig'

export default class data extends Component {
    constructor() {
        super()
        this.state = {
            id: 'EA102',
            from: 'Karachi',
            to: 'Lahore',
            departure: '6:00 PM',
            arrival: '5:00 PM',
            amount: 1000,
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    // componentDidUpdate() {
    //     alert(this.state.amount)
    // }

    handleSubmit = () => {
        let ref = db.collection('Bus').doc('Bus1')
            
        // ref.set({
        //     defaultSeatCode:'aaaaaaaaaaaaaaaaaaaaaa____________aaaaaaaaaa',
        //     seats:'32',
        // })
        ref.collection('Data').add({
            amount: this.state.amount,
            arrival: this.state.arrival,
            departure: this.state.departure,
            from: this.state.from,
            to: this.state.to,

        }).then(function () {
            console.log("Document successfully written!");
        })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.id} name='id' placeholder='id' onChange={this.handleInput} />
                <input type="text" value={this.state.from} name='from' placeholder='from' onChange={this.handleInput} />
                <input type="text" value={this.state.to} name='to' placeholder='to' onChange={this.handleInput} />
                <input type="text" value={this.state.departure} name='departure' placeholder='departure' onChange={this.handleInput} />
                <input type="text" value={this.state.arrival} name='arrival' placeholder='arrival' onChange={this.handleInput} />
                <input type="text" value={this.state.amount} name='amount' placeholder='amount' onChange={this.handleInput} />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}
