import React, { Component } from 'react'
import Nav from '../components/navbar';
import Footer from '../components/footer';
import './contactus.css';


class Contactus extends Component {
    render() {
        return (
            <div style={{ marginTop: 54 }} id='contact'>
                <Nav />
                <div style={{ padding: 50 }}>

                    <div class="card">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="card-body form">

                                    <h3 class="mt-4"><i class="fas fa-envelope pr-2"></i>Write to us:</h3>

                                    <div class="row">

                                        <div class="col-md-6">
                                            <div class="md-form mb-0">
                                                <input type="text" id="form-contact-name" placeholder='Your name' class="form-control" />
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="md-form mb-0">
                                                <input type="text" id="form-contact-email" placeholder='Your email' class="form-control" />
                                            </div>
                                        </div>

                                    </div>

                                    <div class="row">

                                        <div class="col-md-6">
                                            <div class="md-form mb-0">
                                                <input type="text" id="form-contact-phone" placeholder='Your phone' class="form-control" />
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="md-form mb-0">
                                                <input type="text" id="form-contact-company" placeholder='Your company' class="form-control" />
                                            </div>
                                        </div>

                                    </div>

                                    <div class="row">

                                        <div class="col-md-12">
                                            <div class="md-form mb-0">
                                                <textarea type="text" id="form-contact-message" placeholder='Your message' class="form-control md-textarea" rows="3"></textarea>
                                                <a class="btn-floating btn-lg blue waves-effect waves-light">
                                                    <i class="far fa-paper-plane"></i>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div class="col-lg-4 p-lg-0">
                                <div class="card-body contact text-center h-100 white-text">

                                    <h3 class="my-4 pb-2">Contact information</h3>
                                    <ul class="text-lg-left list-unstyled ml-4">
                                        <li>
                                            <p><i class="fas fa-map-marker-alt pr-2"></i>R6QV+RH Landhi Town, Karachi, Pakistan</p>
                                        </li>
                                        <li>
                                            <p><i class="fas fa-phone pr-2"></i>+ 01 234 567 89</p>
                                        </li>
                                        <li>
                                            <p><i class="fas fa-envelope pr-2"></i>info@example.com</p>
                                        </li>
                                    </ul>
                                    <hr class="hr-light my-4" />
                                    <ul class="list-inline text-center list-unstyled">
                                        <li class="list-inline-item">
                                            <a class="p2 fa-lg tw-ic text-white mr-3" href='https://www.facebook.com' target='_blanck'>
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="p2 fa-lg li-ic text-white mr-3" href='https://twitter.com' target='_blanck'>
                                                <i class="fab fa-twitter"> </i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="p2 fa-lg ins-ic text-white" href='https://www.instagram.com' target='_blanck'>
                                                <i class="fab fa-instagram"> </i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Contactus
