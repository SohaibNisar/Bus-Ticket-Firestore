import React, { Component } from 'react';
import searchForm from './data/images/crousel/form.jpg';
import Book from './test2';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Crousel.css';
import { Consumer } from '../context';
import { Link } from 'react-router-dom';

export default class Crousel extends Component {
    render() {
        return (
            <Consumer>
                {(value) => {
                    return (
                        <div>
                            <header id='search-form'>
                                <nav className="navbar fixed-top navbar-expand-sm navbar-light white scrolling-navbar py-0">
                                    <Link className="navbar-brand" to="#"><strong>Navbar</strong></Link>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="nav navbar-nav ml-auto">
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false">
                                                    <i className="fas fa-user"></i>
                                                    My Account
                                                </Link>
                                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                                    <Link className="dropdown-item" to="#">Login</Link>
                                                    <Link className="dropdown-item" to="#">Sign Up</Link>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#">Home</Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false">
                                                    <i className="fas fa-phone-volume"></i>
                                                    Customer Support
                                                </Link>
                                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                                    <Link className="dropdown-item" to="#">01234567891</Link>
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
                                                            <select className="form-control" name='from' onChange={value.handleChange}>
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
                                                            <select className="form-control" name='to' onChange={value.handleChange}>
                                                                <option>Select</option>
                                                                <option>Karachi</option>
                                                                <option>Lahore</option>
                                                                <option>Multan</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className='col-6 col-md-2 form-group p-0 m-0'>
                                                        <div className='form-group'>
                                                            <span className="form-label">Date</span>
                                                            <span className="far fa-calendar-alt icon"></span>
                                                            <DatePicker
                                                                selected={value.state.startDate}
                                                                onChange={value.handleDate}
                                                                minDate={new Date()}
                                                                className="form-control"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='col-6 col-md-2 form-group p-0 m-0'>
                                                        <div className='form-group not'>
                                                            <span className="form-label">Bus</span>
                                                            <select className="form-control" name='bus' onChange={value.handleChange}>
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
                                                            <button type="button" className='btn-block' id='search' onClick={value.search}>Search</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </header>
                            <div>
                                <Book />
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}
