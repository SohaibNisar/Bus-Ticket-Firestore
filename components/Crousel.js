import React, { Component } from 'react';
import searchForm from './data/images/crousel/form.jpg'
import './Crousel.css';
import DatePicker from "react-datepicker";

export default class Crousel extends Component {
    render() {
        return (
            <header id='search-form'>
                <nav class="navbar fixed-top navbar-expand-sm navbar-light white scrolling-navbar py-0">
                    <a class="navbar-brand" href="#"><strong>Navbar</strong></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav navbar-nav nav-flex-icons ml-auto">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-user"></i>
                                    My Account
                                </a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="#">Login</a>
                                    <a class="dropdown-item" href="#">Sign Up</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-phone-volume"></i>
                                    Customer Support
                                </a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="#">01234567891</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div>
                    <div className='image'>
                        <img src={searchForm} alt="Search Form" className='w-100' />
                        <div className="carousel-caption text-dark">
                            <h2>Find the Perfect Trip</h2>
                            <h5>Travel like never before!</h5>
                        </div>
                    </div>
                    <div className='search'>
                        <div className='container'>
                            <div className='search-ground'>
                                <div className='row m-0 p-0'>
                                    <div className='col-md-3 form-group p-0 m-0'>
                                        <div className='form-group'>
                                            <span className="form-label">From City</span>
                                            <span className="fas fa-map-marked-alt icon"></span>
                                            <select className="form-control">
                                                <option>Select</option>
                                                <option>Karachi</option>
                                                <option>Lahore</option>
                                                <option>Multan</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-md-3 form-group p-0 m-0'>
                                        <div className='form-group'>
                                            <span className="form-label">From City</span>
                                            <span className="fas fa-map-marked-alt icon"></span>
                                            <select className="form-control">
                                                <option>Select</option>
                                                <option>Karachi</option>
                                                <option>Lahore</option>
                                                <option>Multan</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-6 col-md-2 form-group p-0 m-0'>
                                        <div className='form-group'>
                                            <span className="form-label">From City</span>
                                            <span className="fas fa-map-marked-alt icon"></span>
                                            <DatePicker
                                                selected={new Date()}
                                                onChange={this.handleDate}
                                                minDate={new Date()}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className='col-6 col-md-2 form-group p-0 m-0'>
                                        <div className='form-group'>
                                            <span className="form-label">From City</span>
                                            <span className="fas fa-map-marked-alt icon"></span>
                                            <select className="form-control">
                                                <option>Select Bus</option>
                                                <option>Bus1</option>
                                                <option>Bus2</option>
                                                <option>Bus3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-md-2 form-group p-0 m-0'>
                                        <div className='form-group'>
                                            <span className="form-label">&nbsp;</span>
                                            <button type="button" className='btn-block' id='search'>Search</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
