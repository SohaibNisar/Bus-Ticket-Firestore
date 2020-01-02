import React, { Component } from 'react';
import { Consumer } from '../context';
import './book.css'

class Book extends Component {
    render() {
        return (
            <Consumer>
                {(value) => {
                    if (value.state.details === 'nothing') {
                        return (
                            <div className="container">
                                <h5 className='alert alert-danger text-center mt-4 py-3' role="alert">No result found!</h5>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className='container mt-5' id='book-container'>
                                {value.state.details && value.state.details.map((x, i) => {
                                    //    console.log(x)
                                    //    console.log(x.availabelSeats)
                                    return (
                                        <div key={i} className='box'>
                                            <div className='details'>
                                                <div className='row m-0'>
                                                    <h4 className='col-md-10 col-8 border-bottom m-0 p-0'>{x.operator}</h4>
                                                    <div className='col-md-2 col-4 border-left border-bottom text-center'>
                                                        <small className='d-block pos'>Fare From</small>
                                                        <span className='blue-text font-weight-bold'>Rs. {x.amount}</span>
                                                    </div>
                                                </div>
                                                <div className='row m-0'>
                                                    <div className='col-md-10 col-8 p-0'>
                                                        <div className='row m-0 py-3'>
                                                            <div className='shedule col-md-3 border-right'>
                                                                <div>
                                                                    <i className="fas fa-bus icon"></i>
                                                                </div>
                                                                <div>
                                                                    <label className='blue-text text-uppercase'>Arrival Time</label>
                                                                    <div className='text-muted font-weight-bold'>
                                                                        {x.arrivalTime}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='shedule col-md-3 border-right'>
                                                                <div>
                                                                    <i className="fas fa-bus icon not"></i>
                                                                </div>
                                                                <div>
                                                                    <label className='blue-text text-uppercase'>Departure Time</label>
                                                                    <div className='text-muted font-weight-bold'>
                                                                        {x.departureTime}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='shedule col-md-3 border-right'>
                                                                <div>
                                                                    <i className="fas fa-route icon"></i>
                                                                </div>
                                                                <div>
                                                                    <label className='blue-text text-uppercase'>Route</label>
                                                                    <div className='text-muted font-weight-bold'>
                                                                        From {x.from} To {x.to}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='shedule col-md-3'>
                                                                <div>
                                                                    <i className="fas fa-chair icon"></i>
                                                                </div>
                                                                <div>
                                                                    <label className='blue-text text-uppercase'>Availabel Seats</label>
                                                                    <div className='text-muted font-weight-bold'>
                                                                        {x.availabelSeats}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-2 col-4 p-0 py-3 text-center border-left'>
                                                        <button className="btn btn-primary" type="button" onClick={() => value.book(x.operator, x.key, x.amount, x.arrivalTime, x.departureTime)}>
                                                            Book
                                                </button>

                                                    </div>
                                                </div>
                                            </div>
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