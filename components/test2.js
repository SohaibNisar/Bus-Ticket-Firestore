import React, { Component } from 'react';
import { Consumer } from '../context'
import { Link } from 'react-router-dom';

class Book extends Component {
    render() {
        return (
            <Consumer>
                {(value) => {
                    return (
                        <div>
                            {value.state.details && value.state.details.map((x, i) => {
                                return (
                                    <div key={i}>
                                        <div>{x.name}</div>
                                        <div>Departure Time: {x.departureTime}</div>
                                        <div>Arrivali Time: {x.arrivalTime}</div>
                                        <div>Rs. {x.amount}</div>
                                        <div>
                                            <button className="btn btn-default" type="button" onClick={() => value.book(x.name)}>
                                                <Link to='seatmap'>Book</Link>
                                            </button>

                                        </div>
                                        <br />
                                    </div>
                                )
                            })}
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Book;