import React, { Component } from "react";
import { db } from "../../../firebaseConfig";
import './routeInputs.css';

class RouteInputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: []
        }
    }

    getData = () => {
        let colref = db.collection('Routes');
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
                        doc: id,
                        from: data.from,
                        to: data.to,
                    })
                    if (id === ids[ids.length - 1]) {
                        this.setState({
                            routes: details,
                        })
                    }
                })
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
                                    {this.state.routes.map((x, i) => {
                                        return (
                                            <option key={i}>{x.from}</option>
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
                                    {this.state.routes.map((x, i) => {
                                        return (
                                            <option key={i}>{x.to}</option>
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