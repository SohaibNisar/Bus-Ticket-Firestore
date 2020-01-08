import React, { Component } from 'react'
import Title from '../components/title';
import { db } from '../../../firebaseConfig';

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            from: '',
            to: '',
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

    handleSubmit = (e) => {
        e.preventDefault();
        db.collection('Routes').add({
            from: this.state.from,
            to: this.state.to,
        }).then(() => {
            alert('Route Added')
            this.setState({
                from: '',
                to: '',
            })
        }).catch((error) => {
            alert(error.message)
        })
    }

    render() {
        const { from, to } = this.state;
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
                            <h2>show</h2>
                        </div>
                        <div className="tab-pane fade" id="add-route" role="tabpanel" aria-labelledby="add-route-tab">
                            <form class="border border-light p-5" onSubmit={this.handleSubmit}>
                                <div className="form-row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="from">Location 1</label>
                                            <input type="text" name="from" id="from" className='form-control mb-4' onChange={this.handleChange} value={from} required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="to">Location 2</label>
                                            <input type="text" name="to" id="to" className='form-control mb-4' onChange={this.handleChange} value={to} required />
                                        </div>
                                    </div>
                                </div>
                                <input type="submit" value="Submit" className='d-block btn btn-sm btn-primary mx-auto mb-3' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Routes;
