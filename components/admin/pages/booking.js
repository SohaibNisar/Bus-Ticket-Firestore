import React, { Component } from 'react';
import Title from '../components/title';
import { db } from "../../../firebaseConfig";

class Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookingDetails: [],
        }
    }

    getData = () => {
        let colref = db.collection('Bookings');
        let details = [];

        colref.get().then((docs) => {
            let ids = [];
            docs.forEach((x, i) => {
                ids.push(x.id)
            })

            ids.forEach((id, i) => {
                colref.doc(id).get().then((doc) => {
                    let data = doc.data();
                    details.push({
                        bookingid: id,
                        amount: data.amount,
                        bus: data.bus,
                        busKey: data.busKey,
                        cnic: data.cnic,
                        date: data.date,
                        email: data.email,
                        from: data.from,
                        name: data.name,
                        phone: data.phone,
                        seatCodePrevious: data.seatCodePrevious,
                        seatCodeUpdated: data.seatCodeUpdated,
                        seatNo: data.seatNo,
                        seats: data.seats,
                        to: data.to,
                        total: data.total,
                    })
                    if (id === ids[ids.length - 1]) {
                        this.setState({
                            bookingDetails: details,
                        })
                    }
                })
            })
        })
    }

    removeBooking = (bookid, busid, bus, date, seats, seatCodePrevious, seatCodeUpdated) => {
        let index = [];
        const arr1 = seatCodePrevious.split('');
        const arr2 = seatCodeUpdated.split('');
        for (let i = 0; i < arr2.length; i++) {
            if (arr1[i] !== arr2[i]) {
                index.push(i)
            }
        }
        let ref = db.collection('Bus').doc(bus).collection('Data');
        let ref2 = ref.doc(busid).collection('Book').doc(date);
        ref2.get().then((doc) => {
            if (doc.exists) {
                let data = doc.data();
                let seatCode = data.seatCode;
                let availabelSeats = data.availabelSeats;

                seatCode = seatCode.split('');
                for (let i = 0; i < index.length; i++) {
                    seatCode[index[i]] = 'a';
                }

                seatCode = seatCode.join('');
                availabelSeats = availabelSeats + seats;

                ref2.update({
                    seatCode: seatCode,
                    availabelSeats: availabelSeats,
                }).then(() => {
                    db.collection('Bookings').doc(bookid).delete().then(() => {
                        alert('Booking Data Has Been Removed');
                        window.location.reload()
                    }).catch(function (error) {
                        console.error("Error removing document: ", error);
                    });
                }).catch((error) => {
                    alert(error.message)
                })
            }
        })
    }

    componentDidMount() {
        this.getData();
    }
    render() {
        return (
            <div>
                <Title title='Booking' />
                <div className='container-fluid p-3'>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="booking-table-tab" data-toggle="tab" href="#booking-table" role="tab" aria-controls="booking-table"
                                aria-selected="true">Bookings</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active border p-4" id="booking-table" role="tabpanel" aria-labelledby="booking-table-tab">
                            <div className='table-responsive text-nowrap'>
                                <div class="md-form mt-0">
                                    <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
                                </div>
                                <table className="table table-hover text-center">
                                    <caption>List of Bookings</caption>
                                    <thead className='bg-info text-white'>
                                        <tr>
                                            <th>#</th>
                                            <th>Booking Id</th>
                                            <th>Cutomer Name</th>
                                            <th>Cutomer Email</th>
                                            <th>Cutomer Cnic</th>
                                            <th>Pickup Point</th>
                                            <th>Drop Point</th>
                                            <th>Booking Date</th>
                                            <th>Amount</th>
                                            <th>Board Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.bookingDetails.map((x, i) => {
                                            return (
                                                <tr key={i}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{x.bookingid}</td>
                                                    <td>{x.name}</td>
                                                    <td>{x.email}</td>
                                                    <td>{x.cnic}</td>
                                                    <td>{x.from}</td>
                                                    <td>{x.to}</td>
                                                    <td>{x.date}</td>
                                                    <td>{x.total}</td>
                                                    <td>
                                                        <button className='remove btn-danger' onClick={() => this.removeBooking(x.bookingid, x.busKey, x.bus, x.date, x.seats, x.seatCodePrevious, x.seatCodeUpdated)}>
                                                            <i className='fas fa-times'></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Booking;
