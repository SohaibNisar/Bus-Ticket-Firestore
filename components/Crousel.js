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
                                                                {this.state.routes.map((x, i) => {
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
                                                                {this.state.routes.map((x, i) => {
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
