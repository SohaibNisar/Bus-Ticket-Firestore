import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Consumer } from '../context'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Search extends Component {

    render() {
        return (
            <div>
                <Consumer>
                    {(value) => {
                        return (
                            <div>
                                <DatePicker
                                    selected={value.state.startDate}
                                    onChange={value.handleDate}
                                    minDate={new Date()}
                                />
                                <input type="text" name="from" placeholder='From' onChange={value.handleChange} />
                                <input type="text" name="to" placeholder='To' onChange={value.handleChange} />
                                <button onClick={value.search}>
                                    <Link to='result'>Search</Link>
                                </button>
                            </div>
                        )
                    }}
                </Consumer>
            </div>
        )
    }
}
export default Search;