import React, { Component } from 'react'
import Title from '../components/title';
import { db } from '../../firebaseConfig';
import { firebase } from "../../firebaseConfig";

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            from: '',
            to: '',
            routeDetailsFrom: [],
            routeDetailsTo: [],
        }
    }

    handleChange = (e) => {
        String.prototype.capitalize = function () {
            return this.replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
        };
        this.setState({
            [e.target.name]: e.target.value.capitalize()
        })
    }

    handleSubmit1 = (e) => {
        e.preventDefault();
        let ref = db.collection('Routes').doc('location1');
        
        ref.set({
            [this.state.from]: this.state.from,
        }, { merge: (true) })
            .then(() => {
                alert('Route Added At Location 1')
                window.location.reload()
            }).catch((error) => {
                alert(error.message)
            })
    }

    handleSubmit2 = (e) => {
        e.preventDefault();
        let ref = db.collection('Routes').doc('location2');

        ref.set({
            [this.state.to]: this.state.to,
        }, { merge: (true) }).then(() => {
            alert('Route Added At Location 2')
            window.location.reload()
        }).catch((error) => {
            alert(error.message)
        })
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

    removeRoute = (loction, field) => {
        let ref = db.collection('Routes').doc(loction);

        ref.update({ [field]: firebase.firestore.FieldValue.delete() }).then(() => {
            alert('Route Data Has Been Removed');
            window.location.reload()
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        const { from, to, routeDetailsTo, routeDetailsFrom } = this.state;
        return (
            <div>
                <Title title='Routes' />
                <div className='container-fluid p-3'>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="route-table-tab" data-toggle="tab" href="#route-table" role="tab" aria-controls="route-table"
                                aria-selected="true">Routes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="add-route-tab" data-toggle="tab" href="#add-route" role="tab" aria-controls="add-route"
                                aria-selected="false">Add Routes</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active border p-4" id="route-table" role="tabpanel" aria-labelledby="route-table-tab">
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className='table-responsive text-nowrap'>
                                        <table className="table table-hover text-center">
                                            <caption>List of Routes</caption>
                                            <thead className='bg-info text-white'>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Location1</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {routeDetailsFrom.map((x, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <th className='align-middle' scope="row">{i + 1}</th>
                                                            <td className='align-middle'>{x}</td>
                                                            <td className='align-middle'>
                                                                <button className='remove btn btn-sm btn-danger' onClick={() => this.removeRoute('location1', x)}>
                                                                    {/* <i className='fas fa-times'></i> */}
                                                                    Remove
                                                                    </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='table-responsive text-nowrap'>
                                        <table className="table table-hover text-center">
                                            {/* <caption>List of Buses</caption> */}
                                            <thead className='bg-info text-white'>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Location2</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {routeDetailsTo.map((x, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <th className='align-middle' scope="row">{i + 1}</th>
                                                            <td className='align-middle'>{x}</td>
                                                            <td className='align-middle'>
                                                                <button className='remove btn btn-sm btn-danger' onClick={() => this.removeRoute('location2', x)}>
                                                                    {/* <i className='fas fa-times'></i> */}
                                                                    Remove
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
                        <div className="tab-pane fade" id="add-route" role="tabpanel" aria-labelledby="add-route-tab">
                            <div className='border border-light p-5' onSubmit={this.handleSubmit}>
                                <div className="form-row">
                                    <div className="col-md-6">
                                        <form className='border border-light p-5' onSubmit={this.handleSubmit1}>
                                            <div className="form-group">
                                                <label htmlFor="from">Location 1</label>
                                                <input type="text" name="from" id="from" className='form-control mb-4' onChange={this.handleChange} value={from} required />
                                            </div>
                                            <input type="submit" value="Submit" className='d-block btn btn-sm btn-primary mx-auto mb-3' />
                                        </form>
                                    </div>
                                    <div className="col-md-6">
                                        <form className='border border-light p-5' onSubmit={this.handleSubmit2}>
                                            <div className="form-group">
                                                <label htmlFor="to">Location 2</label>
                                                <input type="text" name="to" id="to" className='form-control mb-4' onChange={this.handleChange} value={to} required />
                                            </div>
                                            <input type="submit" value="Submit" className='d-block btn btn-sm btn-primary mx-auto mb-3' />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Routes;
