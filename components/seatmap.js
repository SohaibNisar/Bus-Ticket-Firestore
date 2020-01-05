import React, { Component } from 'react';
import Seats from './seats';
import { Consumer } from '../context';
// import { firebase } from "../firebaseConfig";

export default class seatmap extends Component {
    componentDidMount() {
        // firebase.auth().onAuthStateChanged((user) => {
        //     // let location = useLocation();
        //     if (!user) {
        //         // alert()
        //         this.props.history.push('/');
        //     }
        //     // else {

        //     // }
        // });
    }
    render() {
        return (
            <Consumer>
                {(value) => {
                    if (!value.state.key) {
                        this.props.history.push('/');
                    }
                    if (value.state.date && value.state.key && value.state.operator) {
                        // console.log(value.state.date)
                        return (
                            <Seats date={value.state.date}
                                operator={value.state.operator}
                                dockey={value.state.key}
                                departureTime={value.state.departureTime}
                                arrivalTime={value.state.arrivalTime}
                                amount={value.state.amount}
                            />
                        )
                    }
                    else {
                        return null
                    }
                }}
            </Consumer>
        )
    }
}
