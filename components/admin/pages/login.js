import React, { Component } from 'react';
import { firebase } from "../../../firebaseConfig";
import { db } from "../../../firebaseConfig";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            routeDetails: [],
        }
    }

    handlesubmit = (e) => {
        e.preventDefault();
        let email = this.state.email;
        let password = this.state.password;
        db.collection('Users').where('email', '==', email).get().then(snapshot => {
            if (snapshot.empty) {
                alert('Wrong Email....');
            }
            else{
                snapshot.forEach((doc) => {
                    if (doc.data().role==='admin') {
                        firebase.auth().signInWithEmailAndPassword(email, password)
                            .then(() => {
                                this.setState({
                                    email: '',
                                    password: '',
                                })
                            })
                            .catch(function (error) {
                                var errorMessage = error.message;
                                alert(errorMessage);
                            });
                    }
                    else {
                        alert('Email is not for admin....');
                    }
                });
            }
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.history.push('/admin/busmanagement');
            }
        });
    }
    

    render() {
        return (
            <div className='container-md container-fluid text-center'>
                <div className='row justify-content-center mt-md-5 mt-3'>
                    <div className="col-md-6">
                        <form class="text-center border border-light p-5" onSubmit={this.handlesubmit}>
                            <p class="h4 mb-4">Admin Login</p>
                            <p>Login With Admin Email</p>
                            <input
                                type="email"
                                id="email"
                                class="form-control mb-4"
                                placeholder="E-mail"
                                name="email"
                                onChange={this.handleChange}
                            />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                class="form-control mb-4"
                                placeholder="Password"
                                onChange={this.handleChange}
                            />
                            <button class="btn btn-info btn-block" type="submit">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
