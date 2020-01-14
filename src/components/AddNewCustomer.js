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
			showContent: false,
			errors: {
				firstNameError: '',
				lastNameError: '',
				emailError: '',
				phoneNumberError: '',
				ageError: '',
				cityError: ''
			},
			errClasses: {
				errorFNMsg: '',
				errorLNMsg: '',
				errorEMsg: '',
				errorPNMsg: '',
				errorAMsg: '',
				errorCMsg: ''
			}
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
	}

	validate = () => {
		let isError = false;
		const errors = this.state.errors;
		const errClasses = this.state.errClasses;

		if (this.state.first_name.length === 0) {
			isError = true;
			errors.firstNameError = "Please fill out this field";
			errClasses.errorFNMsg = "err-msg-border";
		} else if (this.state.first_name.length < 2) {
			isError = true;
			errors.firstNameError = "First Name must be at least 2 characters long";
			errClasses.errorFNMsg = "err-msg-border";
		} else {
			errors.firstNameError = "";
			errClasses.errorFNMsg = "valid-border";
		}

		if (this.state.last_name.length === 0) {
			isError = true;
			errors.lastNameError = "Please fill out this field";
			errClasses.errorLNMsg = "err-msg-border";
		} else if (this.state.last_name.length < 2) {
			isError = true;
			errors.lastNameError = "Last Name must be at least 2 characters long";
			errClasses.errorLNMsg = "err-msg-border";
		} else {
			errors.lastNameError = "";
			errClasses.errorLNMsg = "valid-border";
		}

		if (this.state.email.length === 0) {
			isError = true;
			errors.emailError = "Please fill out this field";
			errClasses.errorEMsg = "err-msg-border";
		} else if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)) {
			errors.emailError = "";
			errClasses.errorEMsg = "valid-border";
		} else {
			isError = true;
			errors.emailError = "Requires valid email";
			errClasses.errorEMsg = "err-msg-border";
		}

		if (this.state.phone_number.length === 0) {
			isError = true;
			errors.phoneNumberError = "Please fill out this field";
			errClasses.errorPNMsg = "err-msg-border";
		} else if (this.state.phone_number.length < 5) {
			isError = true;
			errors.phoneNumberError = "Phone number must be at least 5 characters long";
			errClasses.errorPNMsg = "err-msg-border";
		} else {
			errors.phoneNumberError = "";
			errClasses.errorPNMsg = "valid-border";
		}

		if (this.state.age.length === 0) {
			isError = true;
			errors.ageError = "Please fill out this field";
			errClasses.errorAMsg = "err-msg-border";
		} else {
			errors.ageError = "";
			errClasses.errorAMsg = "valid-border";
		}

		if (this.state.city.length === 0) {
			isError = true;
			errors.cityError = "Please fill out this field";
			errClasses.errorCMsg = "err-msg-border";
		} else {
			errors.cityError = "";
			errClasses.errorCMsg = "valid-border";
		}

		this.setState({
			errors,
			errClasses
		});

		return isError;
	}

	onSubmit = (e) => {
		e.preventDefault();

		const err = this.validate();
		if (!err) {

			this.props.onSubmit(this.state);
			
			this.setState({
				id: uuid.v4(),
				first_name: '',
				last_name: '',
				email: '',
				phone_number: '',
				age: '',
				city: '',

				errors: {
					firstNameError: '',
					lastNameError: '',
					emailError: '',
					phoneNumberError: '',
					ageError: '',
					cityError: ''
				},

				errClasses: {
					errorFNMsg: '',
					errorLNMsg: '',
					errorEMsg: '',
					errorPNMsg: '',
					errorAMsg: '',
					errorCMsg: ''
				}

			});
		} 
	}

	render() {
		const { showContent, errors, errClasses } = this.state;
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
										className={errClasses.errorFNMsg}
										type='text'
										name='first_name'
										ref="first_name"
										value={this.state.first_name}
		          						onChange={this.onChange}
									/>
									<span className="error-msg">{errors.firstNameError}</span>

									<p>Enter your Last Name:</p>
									<input
										className={errClasses.errorLNMsg}
										type='text'
										name='last_name'
										ref="last_name"
										value={this.state.last_name}
		          						onChange={this.onChange}
		          						title="Must contain at least 2 uppercase or lowercase letter"
									/>
									<span className="error-msg">{errors.lastNameError}</span>

									<p>Enter your Email:</p>
									<input
										className={errClasses.errorEMsg}
										type='text'
										name='email'
										ref="email"
										value={this.state.email}
		          						onChange={this.onChange}
		     
									/>
									<span className="error-msg">{errors.emailError}</span>

									<p>Enter your Phone number:</p>
									<input
										className={errClasses.errorPNMsg}
										type='tel'
										name='phone_number'
										ref="phone_number"
										value={this.state.phone_number}
		          						onChange={this.onChange}
									/>
									<span className="error-msg">{errors.phoneNumberError}</span>

									<p>Enter your Age:</p>
									<input
										className={errClasses.errorAMsg}
										type='number'
										name='age'
										ref="age"
										value={this.state.age}
		          						onChange={this.onChange}
									/>
									<span className="error-msg">{errors.ageError}</span>

									<p>Enter your City:</p>
									<input
										className={errClasses.errorCMsg}
										type='text'
										name='city'
										ref="city"
										value={this.state.city}
		          						onChange={this.onChange}
									/>
									<span className="error-msg">{errors.cityError}</span>

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