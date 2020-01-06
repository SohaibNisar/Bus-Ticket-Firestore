import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import $ from "jquery";
import './css/style.css'
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
            $('a.active').parent('li').addClass('active');
        })
    }

    componentDidUpdate() {
        $('li.active').removeClass('active');
        $('a.active').parent('li').addClass('active');
    }

    render() {
        return (
            <div>
                <nav id="sidebar">
                    <ul className="list-unstyled components mb-5">
                        <li>
                            <NavLink to="/admin/busmanagement" exact activeClassName='active'><span className="fa fa-home mr-3" />Bus Management</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/bookings"><span className="fa fa-user mr-3" />Booking</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/routes"><span className="fa fa-sticky-note mr-3" />Routes</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/users"><span className="fa fa-sticky-note mr-3" />Users</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Sidenav;
