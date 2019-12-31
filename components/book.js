import React, { Component } from 'react';
import { Consumer } from '../context'

class Book extends Component {
    render() {
        return (
            <Consumer>
                {(value) => {
                    if (value.state.details === 'nothing') {
                        return(
                            <h2>Nothing</h2>
                        )
                    }
                    else {
                        return (
                            <div>
                                {value.state.details && value.state.details.map((x, i) => {
                                    return (
                                        <div key={i}>
                                            <div>{x.operator}</div>
                                            <div>Departure Time: {x.departureTime}</div>
                                            <div>Arrivali Time: {x.arrivalTime}</div>
                                            <div>Rs. {x.amount}</div>
                                            <div>
                                                <button className="btn btn-default" type="button" onClick={() => value.book(x.operator,x.key)}>
                                                    Book
                                                </button>

                                            </div>
                                            <br />
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    }

                }}
            </Consumer>
        )
    }
}

export default Book;