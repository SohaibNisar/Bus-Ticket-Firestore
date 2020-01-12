import React, { Component } from 'react';
import { MDBIcon } from 'mdbreact';
import './features.css';
class Book extends Component {
	render() {
		return (
			<div >
				<section id="features" className="pt-4 pb-5">
					<div className="inner">
						<header className="major">
							<div>
								<h2 className="text-center text-uppercase font-weight-bold mt-5 pt-4 spacing"><strong>why book with us</strong></h2>
								<p className="text-center text-uppercase font-weight-bold grey-text mb-5 pb-3"><i className="fas fa-square red-text-2 mr-2" aria-hidden="true" /> Lorem ipsum dolor sit amet</p>
							</div>
						</header>
						<div className="features-containner">
							<div className="feature">
								<MDBIcon icon="award text-info" />
								<h3>maximum choice</h3>
								<p>Sed tempus feugiat adipiscing nisl cursus aliquam dolore.</p>
							</div>
							<div className="feature">
								<MDBIcon icon="wifi text-info" />
								<h3>superior customer service</h3>
								<p>Sed tempus feugiat adipiscing nisl cursus aliquam dolore.</p>
							</div>
							<div className="feature">
								<i className="fa fa-paper-plane text-info"></i>
								<h3>lowest prices</h3>
								<p>Sed tempus feugiat adipiscing nisl cursus aliquam dolore.</p>
							</div>
							<div className="feature">
								<i className="fa fa-save text-info"></i>
								<h3>unmatched benefits</h3>
								<p>Sed tempus feugiat adipiscing nisl cursus aliquam dolore.</p>
							</div>
							<div className="feature">
								<i className="fa fa-phone-alt text-info"></i>
								<h3>24 hours support</h3>
								<p>Sed tempus feugiat adipiscing nisl cursus aliquam dolore.</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Book;