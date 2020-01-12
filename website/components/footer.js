import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer font-small special-color-dark pt-4">
                    <div className="container text-center text-md-left">
                        <div className="row">
                            <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
                                <h5 className="font-weight-bold text-uppercase mb-4">About</h5>
                                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maxime dolorum sapiente eos unde, minus facilis eius magni ad excepturi consequuntur laborum impedit saepe labore natus, repellat, enim velit quas?</p>
                            </div>
                            <hr className="clearfix w-100 d-md-none" />
                            <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
                                <h5 className="font-weight-bold text-uppercase mb-4">Quick Links</h5>

                                <ul className="list-unstyled">
                                    <li className='border-bottom pb-2'>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className='border-bottom py-2'>
                                        <Link to="/gallery">Gallery</Link>
                                    </li>
                                    <li className='border-bottom py-2'>
                                        <Link to="/ticketBooking">Ticket Booking</Link>
                                    </li>
                                    <li className='border-bottom py-2'>
                                        <Link to="/contactus">Contact Us</Link>
                                    </li>
                                </ul>

                            </div>
                            <hr className="clearfix w-100 d-md-none" />
                            <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">

                                <h5 className="font-weight-bold text-uppercase mb-4">Address</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <p>
                                            <i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                    </li>
                                    <li>
                                        <p>
                                            <i className="fas fa-envelope mr-3"></i> info@example.com</p>
                                    </li>
                                    <li>
                                        <p>
                                            <i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                    </li>
                                    <li>
                                        <p>
                                            <i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <Link to="/"> E-Bus.com</Link>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer
