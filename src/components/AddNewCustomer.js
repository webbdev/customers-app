import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import uuid from 'uuid'

class AddNewCustomer extends Component {
	 constructor(props) {
    	super(props);
		this.state = {
			id: uuid.v4(),
			first_name: '',
			last_name: '',
			email: '',
			phone_number: '',
			age: '',
			city: '',
			showContent: false
		};
		this.onOpenModal = this.onOpenModal.bind(this);
		this.onCloseModal = this.onCloseModal.bind(this);
	}

	onOpenModal(event) {
		event.preventDefault()
		this.setState({ showContent: true })
	}

	onCloseModal = (event) => {
		event.preventDefault()
		this.setState({ showContent: false })
	}

	onChange = (e) => {
		
		this.setState({
			[e.target.name]: e.target.value
		});
	};


	onSubmit = (e) => {
		e.preventDefault();

		this.props.onSubmit(this.state);
		
		this.setState({
			id: uuid.v4(),
			first_name: '',
			last_name: '',
			email: '',
			phone_number: '',
			age: '',
			city: ''
		});
	}

	render() {
		const { showContent } = this.state;
		return (
			<div>
				<button className="addbtn" onClick={this.onOpenModal}>
					<span className="plus-icon"><FontAwesomeIcon icon="plus" /></span>Add New Customer
				</button>

				{showContent === true ?

					<div className="modal-box">
						<div className="modal-content">
							<span className="close" onClick={this.onCloseModal}>&times;</span>
							<h2>Add New Customer</h2>
							<div className="modal-box-body">
								<form onSubmit={this.onSubmit}>
									<p>Enter your First Name:</p>
									<input
										type='text'
										name='first_name'
										ref="first_name"
										value={this.state.first_name}
		          						onChange={this.onChange}
		          						required
									/>

									<p>Enter your Last Name:</p>
									<input
										type='text'
										name='last_name'
										ref="last_name"
										value={this.state.last_name}
		          						onChange={this.onChange}
		          						title="Must contain at least 2 uppercase or lowercase letter"
		          						required
									/>

									<p>Enter your Email:</p>
									<input
										type='text'
										name='email'
										ref="email"
										value={this.state.email}
		          						onChange={this.onChange}
		          						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
		          						required
									/>

									<p>Enter your Phone number:</p>
									<input
										type='tel'
										name='phone_number'
										ref="phone_number"
										value={this.state.phone_number}
		          						onChange={this.onChange}
		          						pattern="^-?[0-9]\d*\.?\d*$"
		          						required
									/>

									<p>Enter your Age:</p>
									<input
										type='text'
										name='age'
										ref="age"
										value={this.state.age}
		          						onChange={this.onChange}
		          						required
									/>

									<p>Enter your City:</p>
									<input
										type='text'
										name='city'
										ref="city"
										value={this.state.city}
		          						onChange={this.onChange}
		          						required
									/>

									<input type='submit' value="Submit" />
								</form>
							</div>
						</div>
					</div>

				  : ''
        		}
    
			</div>
		)
	}
}

export default AddNewCustomer