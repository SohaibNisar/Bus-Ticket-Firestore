import React, { Component } from "react";
import { db } from "../../firebaseConfig";
import './routeInputs.css';

class RouteInputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routeDetailsFrom: [],
            routeDetailsTo: [],
        }
    }

    getData = () => {
        let fromref = db.collection('Routes').doc('location1');
        let toref = db.collection('Routes').doc('location2');

        fromref.get().then(doc => {
            let data = doc.data();
            let from = Object.values(data);
            this.setState({
                routeDetailsFrom: from,
            })
        })

        toref.get().then(doc => {
            let data = doc.data();
            let to = Object.values(data);
            this.setState({
                routeDetailsTo: to,
            })
        })
    }

    componentDidMount() {
        this.getData()
    }


    render() {
        return (
            this.props.route.map((val, idx) => {
                let routeId = `route-${idx}`,
                    toId = `to-${idx}`,
                    departureId = `departure-${idx}`,
                    amountId = `amount-${idx}`,
                    arrivalId = `arrival-${idx}`;

                return (
                    <div key={idx} id='routeInputes'>
                        <h4 htmlFor={routeId} className='font-weight-bold'>{`Route ${idx + 1}`}</h4>
                        <div className="row mb-4">
                            <div className="col-md-6">
                                <label htmlFor={routeId}>From</label>
                                <select
                                    name={routeId}
                                    data-id={idx}
                                    id={routeId}
                                    value={val.from}
                                    className="from"
                                >
                                    <option value=''>Select</option>
                                    {this.state.routeDetailsFrom.sort().map((x, i) => {
                                        return (
                                            <option key={i}>{x}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor={toId}>To</label>
                                <select
                                    name={toId}
                                    data-id={idx}
                                    id={toId}
                                    value={this.props.route[idx].to}
                                    className="to"
                                >
                                    <option value=''>Select</option>
                                    {this.state.routeDetailsFrom.sort().map((x, i) => {
                                        return (
                                            <option key={i}>{x}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-md-4 mt-4">
                                <label htmlFor={arrivalId}>Arrival Time</label>
                                <input type="time"
                                    className="arrival"
                                    value={this.props.route[idx].arrival}
                                    data-id={idx}
                                    name={arrivalId}
                                    id={arrivalId}
                                />
                            </div>
                            <div className="col-md-4 mt-4">
                                <label htmlFor={departureId}>Departure Time</label>
                                <input type="time"
                                    className="departure"
                                    value={this.props.route[idx].departure}
                                    data-id={idx}
                                    name={departureId}
                                    id={departureId}
                                />
                            </div>
                            <div className="col-md-4 mt-4">
                                <label htmlFor={amountId}>Amount</label>
                                <input type="number"
                                    className="amount"
                                    value={this.props.route[idx].amount}
                                    data-id={idx}
                                    name={amountId}
                                    id={amountId}
                                />
                            </div>

                        </div>
                    </div>
                )
            })
        )
    }
}

export default RouteInputs;