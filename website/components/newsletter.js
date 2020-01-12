import React, { Component } from 'react'

class Newsletter extends Component {
    render() {
        return (
            <div className="container py-5">
                <div>
                    <form className="text-center border border-light p-5" action="#!">
                        <h4 className="text-center text-uppercase font-weight-bold mb-4 spacing"><strong>Subscribe</strong></h4>
                        <p>Join our mailing list. We write rarely, but only the best content.</p>
                        <div className="col-auto">
                            <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                            <div className="input-group mb-2">
                                <input type="email" className="form-control input-group-lg" placeholder="E-mail" />
                                <div className="input-group-prepend">
                                    <button className="btn btn-info btn-sm m-0" type="submit">Sign up</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Newsletter
