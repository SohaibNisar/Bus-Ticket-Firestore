import React, {Component} from 'react';
import { MDBIcon} from 'mdbreact';
import './book.css';
class Book extends Component {
    render() {
        return(
            <div >    
                <section id="#" class="wrapper">
				<div class="inner">
					<header class="major">
						<h2>why book with us</h2>
					</header>
					<div class="features">
						<div class="feature">
                            <MDBIcon icon="award" />
							<h3>maximum choice</h3>
							<p>Sed tempus feugiat adipiscing nisl cursus aliquam dolore.</p>
						</div>
						<div class="feature">
                            <MDBIcon icon="wifi" />
							<h3>superior customer service</h3>
							<p>Sed tempus feugiat adipiscing nisl cursus aliquam dolore.</p>
						</div>
						<div class="feature">
							<i class="fa fa-paper-plane"></i>
							<h3>lowest prices</h3>
							<p>Sed tempus feugiat adipiscing nisl cursus aliquam dolore.</p>
						</div>
						<div class="feature">
							<i class="fa fa-save"></i>
							<h3>unmatched benefits</h3>
							<p>Sed tempus feugiat adipiscing nisl cursus aliquam dolore.</p>
						</div>
						<div class="feature">
							<i class="fa fa-envelope"></i>
							<h3>lorem</h3>
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