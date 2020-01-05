import React, { Component } from 'react';
import { firebase } from "../firebaseConfig";
import { Redirect } from "react-router-dom";
import { Consumer } from "../context";
import Inputmask from "react-input-mask";
import $ from "jquery";
import './checkout.css';

class checkout extends Component {
    constructor() {
        super()
        this.state = {
            redirect: false,
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                this.setState({ redirect: true })
            }
        });
        $(document).ready(() => {
            $('form').submit((e) => {
                e.preventDefault();
            })
        })

    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/signin' />;
        }
        return (
            <Consumer>
                {(value) => {
                    if (value.state.payment === null) {
                        return <Redirect to='/' />;
                    }
                    return (
                        <div id='checkout'>
                            <div className="container text-center">
                                <div className='row justify-content-center'>
                                    <div className='col-md-5 text-left'>
                                        <h1>Payment Summary</h1>
                                        <form onSubmit={()=>value.bookCon()}>
                                            <div className='details-box'>
                                                <ul className='p-0'>
                                                    <li>
                                                        <span>Service:</span>
                                                        <span className='float-right'>{value.state.operator}</span>
                                                    </li>
                                                    <li>
                                                        <span>Route:</span>
                                                        <span className='float-right'>{value.state.form}-{value.state.to}</span>
                                                    </li>
                                                    <li>
                                                        <span>Departure Date:</span>
                                                        <span className='float-right'>{value.state.showdate}</span>
                                                    </li>
                                                    <li>
                                                        <span>Departure Time:</span>
                                                        <span className='float-right'>{value.state.departureTime}</span>
                                                    </li>
                                                </ul>
                                                <div>
                                                    <div className="personal-detail">
                                                        <div className="w-100 p-0 m-0">
                                                            <label>Name</label>
                                                            <input type="text" name="name" className="input-text full-width" onChange={value.handleChange} required />
                                                        </div>
                                                        <div className="w-100 p-0 m-0">
                                                            <label>Phone</label>
                                                            <input type="text" name="phone" className="input-text full-width" onChange={value.handleChange} required />
                                                        </div>
                                                        <div className="w-100 p-0 m-0">
                                                            <label>Email</label>
                                                            <input type="email" name="email" className="input-text full-width" onChange={value.handleChange} required />
                                                        </div>
                                                        <div className="w-100 p-0 m-0">
                                                            <label>CNIC</label>
                                                            <Inputmask  type="text" name="cnic" className="input-text full-width" mask="99999-9999999-9" onChange={value.handleChange} required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <ul className="pay-detail pt-3 p-0 m-0">
                                                        <li>
                                                            <span>Total Amount:</span>
                                                            <span className='float-right'>{value.state.payment}</span>
                                                        </li>
                                                        <li className="payable">
                                                            <span>Payable:</span>
                                                            <span className='float-right'>{value.state.payment}</span>
                                                        </li>
                                                        <li>
                                                            <div className="form-group">
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input required type="checkbox" /> I accept the Terms of Service
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <input type="submit" value='Checkout' className="btn btn-sm w-100 m-0" />
                                                        </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default checkout

