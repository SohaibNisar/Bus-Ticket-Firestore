import React from 'react';
import {Link} from 'react-router-dom';
import './title.css';

function Title(props) {
    return (
        <div id='title'>
            <div className="main-title">
                <div className="col-md-5 col-8 align-self-center">
                    <h3 className="text-themecolor mb-0 mt-0">{props.title}</h3>
                    <ol>
                        <li><Link to="#">Home</Link></li>
                        <li className="ml-3 text-muted"><i className="fa fa-angle-right mr-3"></i>{props.title}</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Title;
