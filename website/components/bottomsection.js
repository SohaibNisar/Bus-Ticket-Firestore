import React, { Component } from 'react'
import { Link } from "react-router-dom";
import image from "../../data/images/home/bottom.jpg";

class Bottomsection extends Component {
    render() {
        return (
            <div className="container">
                <section id="offer" className="mt-5 mb-5">
                    <h2 className="text-center text-uppercase font-weight-bold pt-5 mt-4 mb-3 spacing wow fadeIn" data-wow-delay="0.2s" style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}><strong>Frequently Asked Question</strong></h2>
                    <p className="text-center text-uppercase grey-text font-weight-bold mb-5 pb-3 wow fadeIn" data-wow-delay="0.2s" style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}><i className="fas fa-square red-text-2 mr-2" aria-hidden="true" />LOREM IPSUM DOLOR SIT AMET</p>
                    <div className="row">
                        <div className="col-md-12 col-xl-6">
                            <div >
                                <div className="row gradient-background d-flex justify-content-center">
                                    <div className="col-md-10 col-xl-10 pb-5 pt-3">
                                        <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                                            <div className="card border-0">
                                                <div className="card-header white z-depth-1 border-0 mb-1" role="tab" id="heading1">
                                                    <a data-toggle="collapse" data-parent="#accordionEx" href="#collapse1" aria-expanded="false" aria-controls="collapse1" className="collapsed">
                                                        <h5 className="mb-0 dark-grey-text">
                                                            #1 Who is this conference for?
              <i className="fas fa-angle-down float-right" />
                                                        </h5>
                                                    </a>
                                                </div>
                                                <div id="collapse1" className="collapse" role="tabpanel" aria-labelledby="heading1" data-parent="#accordionEx" style={{}}>
                                                    <div className="card-body mb-1 bg-info white-text">
                                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
                                                          ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food
                                                          truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                                          put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                                                          anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                                          ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                                          farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard
              of them accusamus labore sustainable.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card border-0">
                                                <div className="card-header white z-depth-1 border-0 mb-1" role="tab" id="heading2">
                                                    <a className="collapsed" data-toggle="collapse" href="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                        <h5 className="mb-0 dark-grey-text">
                                                            #2 What payment types do you accept?
              <i className="fas fa-angle-down float-right" />
                                                        </h5>
                                                    </a>
                                                </div>
                                                <div id="collapse2" className="collapse" role="tabpanel" aria-labelledby="heading2" data-parent="#accordionEx" style={{}}>
                                                    <div className="card-body mb-1 bg-info white-text">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card border-0">
                                                <div className="card-header white z-depth-1 border-0 mb-1" role="tab" id="heading3">
                                                    <a className="collapsed" data-toggle="collapse" href="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                                        <h5 className="mb-0 dark-grey-text">
                                                            #3 Can I return the tickets?
              <i className="fas fa-angle-down float-right" />
                                                        </h5>
                                                    </a>
                                                </div>
                                                <div id="collapse3" className="collapse" role="tabpanel" aria-labelledby="heading3" data-parent="#accordionEx" style={{}}>
                                                    <div className="card-body mb-1 bg-info white-text">
                                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                                          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                                                          quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                                          quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                                                          dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                                                          qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                                                          non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                                          voluptatem.
            </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-12 col-xl-6">
                            <div className="card">
                                <div className="view overlay">
                                    <img src={image} className="card-img-top" alt="card" />
                                    <a>
                                        <div className="mask rgba-white-slight waves-effect waves-light" />
                                    </a>
                                </div>
                                <div className="card-body text-center mb-3">
                                    <h4 className="card-title mt-1 pb-1"><strong>Lorem ipsum dolor sit amet</strong></h4>
                                    <p className="card-text dark-grey-text">Anim pariatur cliche reprehenderit, enim eiusmod high life
                                      accusamus terry richardson ad
              squid moon officia aute, non cupidatat skateboard dolor. </p>
                                    <Link to='/ticketBooking' className="btn btn-info">Book Ticket</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Bottomsection
