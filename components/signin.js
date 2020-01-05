import React, { Component } from 'react';
import $ from 'jquery'
import './signin.css';
import { Link } from 'react-router-dom';
import { firebase } from '../firebaseConfig';
import { db } from '../firebaseConfig';

class Signin extends Component {
    constructor() {
        super();
        this.state = {
            loginemail: '',
            loginPassword: '',
            username: '',
            emailAdress: '',
            phone: '',
            password: '',
            passwordCon: '',
        }
    }
    componentDidMount() {
        $(document).ready(() => {
            var usernameError = true,
                emailError = true,
                passwordError = true,
                phoneError = true,
                passConfirm = true;

            // Detect browser for css purpose
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                $('.form form label').addClass('fontSwitch');
            }

            // Label effect
            $('input').focus(function () {

                $(this).siblings('label').addClass('active');
            });

            // Form validation
            $('input').blur(function () {

                // User Name
                if ($(this).hasClass('name')) {
                    if ($(this).val().length === 0) {
                        $(this).siblings('span.error').text('Please type your full name').fadeIn().parent('.form-group').addClass('hasError');
                        usernameError = true;
                    } else if ($(this).val().length > 1 && $(this).val().length <= 6) {
                        $(this).siblings('span.error').text('Please type at least 6 characters').fadeIn().parent('.form-group').addClass('hasError');
                        usernameError = true;
                    } else {
                        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                        usernameError = false;
                    }
                }
                // Email
                if ($(this).hasClass('email')) {
                    if ($(this).val().length === 0) {
                        $(this).siblings('span.error').text('Please type your email address').fadeIn().parent('.form-group').addClass('hasError');
                        emailError = true;
                    } else {
                        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                        emailError = false;
                    }
                }

                // Phone
                if ($(this).hasClass('phone')) {
                    if ($(this).val().length === 0) {
                        $(this).siblings('span.error').text('Please type your phone number').fadeIn().parent('.form-group').addClass('hasError');
                        phoneError = true;
                    } else {
                        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                        phoneError = false;
                    }
                }

                // PassWord
                if ($(this).hasClass('pass')) {
                    if ($(this).val().length < 6) {
                        $(this).siblings('span.error').text('Please type at least 6 charcters').fadeIn().parent('.form-group').addClass('hasError');
                        passwordError = true;
                    } else {
                        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                        passwordError = false;
                    }
                }

                // PassWord confirmation
                if ($('.pass').val() !== $('.passConfirm').val()) {
                    $('.passConfirm').siblings('.error').text('Passwords don\'t match').fadeIn().parent('.form-group').addClass('hasError');
                    passConfirm = true;
                } else {
                    $('.passConfirm').siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                    passConfirm = false;
                }

                // label effect
                if ($(this).val().length > 0) {
                    $(this).siblings('label').addClass('active');
                } else {
                    $(this).siblings('label').removeClass('active');
                }
            });

            // form switch
            $('a.switch').click(function (e) {
                $(this).toggleClass('active');
                e.preventDefault();

                if ($('a.switch').hasClass('active')) {
                    $(this).parents('.form-peice').addClass('switched').siblings('.form-peice').removeClass('switched');
                } else {
                    $(this).parents('.form-peice').removeClass('switched').siblings('.form-peice').addClass('switched');
                }
            });


            // Form submit
            $('form.signup-form').submit((event) => {
                event.preventDefault();

                if (usernameError === true || phoneError === true || emailError === true || passwordError === true || passConfirm === true) {
                    $('.name, .phone , .email, .pass, .passConfirm').blur();
                }
                else {
                    let name = this.state.username;
                    let email = this.state.emailAdress;
                    let phone = this.state.phone;
                    let password = this.state.password;
                    firebase.auth().createUserWithEmailAndPassword(email, password)
                        .then((snapshot) => {
                            this.setState({
                                username: '',
                                emailAdress: '',
                                phone: '',
                                password: '',
                                passwordCon: '',
                            });
                            let ref = db.collection('Users').doc(snapshot.user.uid);
                            ref.set({
                                name: name,
                                phone: phone,
                                email: email,
                            })
                        })
                        .catch(function (error) {
                            var errorMessage = error.message;
                            alert(errorMessage)
                        })
                }
            });

            $('form.login-form').submit((event) => {
                event.preventDefault();
                let email = this.state.loginemail;
                let password = this.state.loginPassword;
                firebase.auth().signInWithEmailAndPassword(email, password)
                .then(()=>{
                    this.setState({
                        loginPassword:'',
                        loginemail:'',
                    })
                })
                .catch(function (error) {
                    // var errorCode = error.code;
                    var errorMessage = error.message;
                    alert(errorMessage);
                });
            });
        });

        firebase.auth().onAuthStateChanged((user) => {
            // let location = useLocation();
            if (user) {
                // console.log(user.uid)
                this.props.history.goBack();
                // this.props.history.push('/');
            }
            // else {
                // console.log(location.pathname)
                // this.props.history.goBack();
                // if (location.pathname==='/seatmap') {
                    // this.props.history.goBack();
                // }
            // }
        });
    }

    inputHandler = (e) => {
        let nam = e.target.name;
        let value = e.target.value;
        this.setState({
            [nam]: value,
        })
    }

    render() {
        return (
            <div id='signin'>
                <div className="container">
                    <section id="formHolder">

                        <div className="row justify-content-center">
                            <div className="col-sm-8 col-md-6 brand">
                                <Link to="#" className="logo">EB <span>.</span></Link>

                                <div className="heading">
                                    <h2>E-Bus</h2>
                                    <p>Your Right Choice</p>
                                </div>

                                <div className="success-msg">
                                    <p>Great! You are one of our members now</p>
                                    <Link to="#" className="profile">Your Profile</Link>
                                </div>
                            </div>

                            <div className="col-sm-7 col-md-6 form">
                                <div className="login form-peice switched">
                                    <form className="login-form">
                                        <div className="form-group">
                                            <label htmlFor="loginemail">Email Adderss</label>
                                            <input type="email" name="loginemail" id="loginemail" onChange={this.inputHandler} required />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="loginPassword">Password</label>
                                            <input type="password" name="loginPassword" id="loginPassword" onChange={this.inputHandler} required />
                                        </div>

                                        <div className="CTA">
                                            <input type="submit" value="Login" />
                                            <Link to="#" className="switch">I'm New</Link>
                                        </div>
                                    </form>
                                </div>


                                <div className="signup form-peice">
                                    <form className="signup-form">

                                        <div className="form-group">
                                            <label htmlFor="name">Full Name</label>
                                            <input type="text" name="username" id="name" className="name" value={this.state.username} onChange={this.inputHandler} />
                                            <span className="error"></span>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email">Email Adderss</label>
                                            <input type="email" name="emailAdress" id="email" className="email" value={this.state.emailAdress} onChange={this.inputHandler} />
                                            <span className="error"></span>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input type="text" name="phone" id="phone" className="phone" value={this.state.phone} onChange={this.inputHandler} />
                                            <span className="error"></span>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" name="password" id="password" className="pass" value={this.state.password} onChange={this.inputHandler} />
                                            <span className="error"></span>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="passwordCon">Confirm Password</label>
                                            <input type="password" name="passwordCon" id="passwordCon" className="passConfirm" value={this.state.passwordCon} onChange={this.inputHandler} />
                                            <span className="error"></span>
                                        </div>

                                        <div className="CTA">
                                            <input type="submit" value="Signup Now" id="submit" />
                                            <Link to="#" className="switch">I have an account</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}


export default Signin;
