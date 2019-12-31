import React, { Component } from 'react';
import Seats from './seats';
import { Consumer } from '../context'

export default class seatmap extends Component {
    render() {
        return (
            <Consumer>
                {(value)=>{
                    if (!value.state.key) {
                        this.props.history.push('/');
                    }
                    return(
                        value.state.date&&value.state.key&&value.state.operator?<Seats date={value.state.date} operator={value.state.operator} dockey={value.state.key} />:null
                    )
                }}
            </Consumer>
        )
    }
}
