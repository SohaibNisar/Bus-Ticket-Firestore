import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import $ from "jquery";
import './sidenav.css';

class Sidenav extends Component {
    componentDidMount() {
        $(document).ready(() => {

            var fullHeight = function () {

                $('.js-fullheight').css('height', $(window).height());
                $(window).resize(function () {
                    $('.js-fullheight').css('height', $(window).height());
                });

            };
            fullHeight();

            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        })
    }

    render() {
        return (
            <div>
                <nav id="sidebar">
                    <ul className='list-unstyled components mb-5'>
                        <li>
                            <NavLink to="/admin/busmanagement" exact activeClassName='active'>
                                <span className="fas fa-bus mr-3" />
                                <div>Bus Management</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/bookings"><span className="fas fa-clipboard-list mr-3" />
                                <div>Booking</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/routes"><span className="fas fa-route mr-3" />
                                <div>Routes</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/users"><span className="fas fa-user mr-3" />
                                <div>Users</div>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Sidenav;
