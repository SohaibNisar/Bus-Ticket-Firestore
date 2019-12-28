import React, { Component } from 'react';
import Seats from './seats2';
import { Consumer } from '../context'

export default class seatmap extends Component {
    render() {
        return (
            <Consumer>
                {(value)=>{
                    console.log(value.state.date)
                    return(
                        value.state.date?<Seats date={value.state.date} bus={value.state.bus} />:null
                    )
                }}
            </Consumer>
        )
    }
}
