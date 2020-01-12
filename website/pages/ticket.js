import React, { Component } from 'react'
import { Consumer } from "../../context";
import { Redirect } from "react-router-dom";

class ticket extends Component {
    render() {
        return (
            <Consumer>
                {(value) => {
                    if (!value.state.ticketId) {
                        return <Redirect to='/ticketBooking' />
                    }
                    return (
                        <div className='container p-4'>
                            <h2>Bus Ticket</h2>
                            <p>Ticket Id: {value.state.ticketId}</p>
                            <table border="2px" >
                                <tbody>
                                    <tr>
                                        <td colSpan='2'>
                                            <h4>Trip Details</h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Bus</td>
                                        <td>{value.state.bus}</td>
                                    </tr>
                                    <tr>
                                        <td>Route</td>
                                        <td>{value.state.from} to {value.state.to}</td>
                                    </tr>
                                    <tr>
                                        <td>Date</td>
                                        <td>{value.state.date}</td>
                                    </tr>
                                    <tr>
                                        <td>Bus Arrival</td>
                                        <td>{value.state.arrivalTime}</td>
                                    </tr>
                                    <tr>
                                        <td>Bus Departure</td>
                                        <td>{value.state.departureTime}</td>
                                    </tr>
                                    <tr>
                                        <td>Total Seats</td>
                                        <td>{value.state.seatCount}</td>
                                    </tr>
                                    <tr>
                                        <td>Seat Numbers</td>
                                        <td>{value.state.seatNo}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <br/>
                            <table border='2'>
                                <tbody>
                                    <tr>
                                        <td colSpan='2'>
                                            <h4>Customer And Booking Details</h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Name</td>
                                        <td>{value.state.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Phone</td>
                                        <td>{value.state.phone}</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>{value.state.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Cnic</td>
                                        <td>{value.state.cnic}</td>
                                    </tr>
                                    <tr>
                                        <td>Amount Paid</td>
                                        <td>{value.state.payment}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <br/>
                            <button onClick={value.print}>Print</button>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default ticket
