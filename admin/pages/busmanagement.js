import React, { Component } from 'react'
import { db } from "../../firebaseConfig";
import Title from '../components/title';
import RouteInputs from '../components/routeInputs';
import stering from '../../data/images/stering.png';
import './busmanagement.css';

class BusManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: [{ from: '', to: '', departure: '', arrival: '', amount: '' }],
            busName: '',
            seats: 0,
            start: '',
            end: '',
            seatcode: [],
            classes: [],
            busDetails: [],
        }
    }

    handleChange = (e) => {
        if (['from', 'to', 'departure', 'arrival', 'amount'].includes(e.target.className)) {
            let route = [...this.state.route]
            route[e.target.dataset.id][e.target.className] = e.target.value
            this.setState({ route }, () => {
                console.log(this.state.route)
            })
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }

    handleSeatChange = (e) => {
        let value = Number(e.target.value);
        this.setState({ seats: value }, () => {
            this.seatmap()
        })
    }

    addRoute = (e) => {
        e.preventDefault()
        this.setState((prevState) => ({
            route: [...prevState.route, { from: "", to: "", departure: '', arrival: '', amount: '' }],
        }));
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let { busName, seats, start, end, seatcode, route } = this.state;
        let colRef = db.collection('Bus');
        let batch = db.batch();

        let condition = route.every(x => x.from !== '' && x.to !== '');
        if (condition) {
            let ref = colRef.doc(`${busName}`)
            ref.get().then(doc => {
                if (doc.exists) {
                    alert('The Name Bus Already Exists');
                }
                else {
                    batch.set(ref, {
                        seats: Number(seats),
                        startPoint: start,
                        endPoint: end,
                        defaultSeatCode: seatcode.toString(),
                    })
                    route.forEach((x, i) => {
                        let colRef2 = ref.collection('Data').doc();
                        x.amount = Number(x.amount);
                        x.bus = busName;
                        batch.set(colRef2, x);
                    })

                    return batch.commit()
                        .then(data => {
                            alert('Bus Added')
                            window.location.reload()
                        })
                        .catch(error => {
                            alert(error.message)
                        })
                }
            })

        }
        else {
            alert('Fill Route Fields');
        }
    }

    getData = () => {
        let colref = db.collection('Bus');
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
                        name: id,
                        seats: data.seats,
                        startPoint: data.startPoint,
                        endPoint: data.endPoint,
                    })
                    if (id === ids[ids.length - 1]) {
                        this.setState({
                            busDetails: details,
                        })
                    }
                })
            })
        })
    }

    removeBus = (doc) => {
        db.collection('Bus').doc(doc).delete().then(() => {
            alert('Bus Data Has Been Removed');
            window.location.reload()
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });
    }

    componentDidMount() {
        this.getData();
    }

    seatmap = (e) => {
        // e.preventDefault()
        let x = 2;
        let seat = Number(this.state.seats);
        let length = (seat / 5) + seat;
        length = Math.round(length)
        let empty = [];
        let seatcode = [];
        for (let i = 0; i < seat; i++) {
            seatcode.push('a');
            if (x <= length) {
                empty.push(x)
                x = x + 5;
            }
        }

        for (const val of empty) {
            seatcode.splice(val, 0, '_');
        }

        // let lastval = empty[empty.length - 1];
        // seatcode.splice(lastval, 1, 'a');

        let classes = [];
        seatcode.forEach((x, i) => {
            if (x === 'a') {
                classes.splice(i, 0, 'available')
            }
            else if (x === 'r') {
                classes.splice(i, 0, 'reserved')
            }
            else if (x === 'u') {
                classes.splice(i, 0, 'unavailable')
            }
            else if (x === '_') {
                classes.splice(i, 0, 'emptySpace')
            }
        })

        this.setState({
            seatcode: seatcode.join(''),
            classes: classes,
        })

    }

    render() {
        let { busName, seats, start, end, seatcode, route, busDetails } = this.state;
        let view = 0;
        return (
            <div id='busmanagemet'>
                <Title title='Bus Management' />
                <div className='container-fluid p-3'>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="bus-table-tab" data-toggle="tab" href="#bus-table" role="tab" aria-controls="bus-table"
                                aria-selected="true">Buses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="add-bus-tab" data-toggle="tab" href="#add-bus" role="tab" aria-controls="add-bus"
                                aria-selected="false">Add Bus</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active border p-4" id="bus-table" role="tabpanel" aria-labelledby="bus-table-tab">
                            <div className='table-responsive text-nowrap'>
                                <table className="table table-hover text-center">
                                    <caption>List of Buses</caption>
                                    <thead className='bg-info text-white'>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Maximum Seats</th>
                                            <th>Start Point</th>
                                            <th>End Point</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {busDetails.map((x, i) => {
                                            return (
                                                <tr key={i}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{x.name}</td>
                                                    <td>{x.seats}</td>
                                                    <td>{x.startPoint}</td>
                                                    <td>{x.endPoint}</td>
                                                    <td>
                                                        <button className='remove btn-danger' onClick={() => this.removeBus(x.name)}>
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
                        <div className="tab-pane fade" id="add-bus" role="tabpanel" aria-labelledby="add-bus-tab">
                            <form onChange={this.handleChange} className='border border-light p-5'>
                                <div className="form-row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="name">Bus Name</label>
                                            <input type="text" name="busName" id="busName" className='form-control mb-4' value={busName} required />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="seats">Maximum Seats</label>
                                            <input type="number" name="seats" id="seats" className='form-control mb-4' value={seats} min={1} max={68} autoComplete='of' onChange={this.handleSeatChange} required />
                                        </div>
                                    </div>
                                    {this.state.seatcode.length > 0 && <div className="col-md-12">
                                        <div className='container-seatplan col-md-6 mx-auto mb-4'>
                                            <div className='seatplan'>
                                                <div className="stering">
                                                    <img src={stering} alt='stering' />
                                                </div>
                                                <div>
                                                    {seatcode.split('').map((x, i) => {
                                                        if (x === 'a') {
                                                            view++;
                                                            return (
                                                                <div className={'seat ' + this.state.classes[i]}
                                                                    key={i}>{view}</div>
                                                            )

                                                        }
                                                        else {
                                                            return (
                                                                <div className={'seat ' + this.state.classes[i]}
                                                                    key={i}>{x}</div>
                                                            )
                                                        }
                                                    }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>}
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="start">Start Point</label>
                                            <select
                                                name="start"
                                                id="start"
                                                className='form-control mb-4'
                                                value={start} required
                                            >
                                                <option value=''>Select</option>
                                                <option>Karachi</option>
                                                <option>Lahore</option>
                                                <option>Multan</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="end">End Point</label>
                                            <select
                                                name="end"
                                                id="end"
                                                className='form-control mb-4'
                                                value={end} required
                                            >
                                                <option value=''>Select</option>
                                                <option>Karachi</option>
                                                <option>Lahore</option>
                                                <option>Multan</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <RouteInputs route={route} />
                                <div className='text-center mt-4'>
                                    <button onClick={this.addRoute} className='d-block btn btn-sm btn-outline-primary mx-auto mb-3' >Add new Route</button>
                                    <input type="submit" value="Submit" onClick={this.handleSubmit} className='d-block btn btn-sm btn-primary mx-auto mb-3' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BusManagement;
