import React, { Component } from 'react';
import searchForm from './data/images/crousel/form.jpg';
import Book from './book';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Crousel.css';
import Nav from './nav search'
import { Consumer } from '../context';
import { db } from "../firebaseConfig";

export default class Crousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: [],
        }
    }

    getData = () => {
        let fromref = db.collection('Routes').doc('location1');
        let toref = db.collection('Routes').doc('location2');
        let from = [];
        let to = []
        let routes = [];

        fromref.get().then(doc => {
            let data = doc.data();
            from = Object.values(data);
            toref.get().then(doc => {
                let data = doc.data();
                to = Object.values(data);

                from.forEach((x, i) => {
                    return (
                        routes.push({
                            from: x,
                            to: to[i],
                        })
                    )
                })

                this.setState({
                    routes: routes,
                })
            })
        })
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        const { routes } = this.state;
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
                                                                {routes.length > 0 && routes.sort().map((x, i) => {
                                                                    return (
                                                                        <option key={i}>{x.from}</option>
                                                                    )
                                                                })}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-3 form-group p-0 m-0'>
                                                        <div className='form-group'>
                                                            <span className="form-label">To City</span>
                                                            <span className="fas fa-map-marked-alt icon"></span>
                                                            <select className="form-control" name='to' onChange={value.handleChange}>
                                                                <option>Select</option>
                                                                {routes.length > 0 && routes.sort().map((x, i) => {
                                                                    return (
                                                                        <option key={i}>{x.to}</option>
                                                                    )
                                                                })}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-3 form-group p-0 m-0'>
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
                                                    <div className='col-md-3 form-group p-0 m-0'>
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
