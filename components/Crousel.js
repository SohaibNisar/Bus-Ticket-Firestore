import React, { Component } from 'react';
import searchForm from './data/images/crousel/form.jpg';
import Book from './book';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Crousel.css';
import Nav from './nav search'
import { Consumer } from '../context';

export default class Crousel extends Component {
    render() {
        return (
            <Consumer>
                {(value) => {
                    return (
                        <div id='search-page'>
                            <Nav />
                            <header id='search-form'>
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
                                                            <select className="form-control" name='operator' onChange={value.handleChange}>
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
