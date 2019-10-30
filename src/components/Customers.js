import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Customers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newCustomers: [],
			showContent: false,
		};
		this.submitHandler = this.submitHandler.bind(this);
	}
	
	onOpenModal = (event) => {
		event.preventDefault()
		this.setState({ showContent: true })
	}

	onCloseModal = (event) => {
		event.preventDefault()
		this.setState({ showContent: false })
	}

	submitHandler(e) {
		e.preventDefault();
		const
		{ newCustomers } = this.state,
		first_name = this.refs.first_name.value,
		last_name = this.refs.last_name.value,
		email = this.refs.email.value,
		phone_number = this.refs.phone_number.value,
		age = this.refs.age.value,
		city = this.refs.city.value;
		this.setState({
			newCustomers: [...newCustomers, {
			first_name,
			last_name,
			email,
			phone_number,
			age,
			city
		}]
		}, () => {
			this.refs.first_name.value = '';
			this.refs.last_name.value = '';
			this.refs.email.value = '';
			this.refs.phone_number.value = '';
			this.refs.age = '';
			this.refs.city = '';
		});
	}

	render() {
		const customers = this.props.customers;
		const { newCustomers, showContent } = this.state;
		return (
			<div className="main-container">
				<h1>Customers List</h1>
		        <table>
					<thead>
						<tr>
							<th scope="col">First Name 
								<span className="sort-icon" onClick={this.props.sortByName}> 
									<FontAwesomeIcon icon="sort" />
								</span>
							</th>
							<th scope="col">Last Name</th>
							<th scope="col">Email</th>
							<th scope="col">Phone number</th>
							<th scope="col">Age</th>
							<th scope="col">City
								<span className="sort-icon" onClick={this.props.sortByCity}> 
									<FontAwesomeIcon icon="sort" />
								</span>
							</th>
						</tr>
					</thead>
					<tbody>
						{customers.map((customer, key) => (
							<tr key={customer.id}>
								<td data-label="First Name">{customer.first_name}</td>
								<td data-label="Last Name">{customer.last_name}</td>
								<td data-label="Email">{customer.email}</td>
								<td data-label="Phone number">{customer.phone_number}</td>
								<td data-label="Age">{customer.age}</td>
								<td data-label="City">{customer.city}</td>
							</tr>
						))}
						{newCustomers.map((newCustomer, index) => (
							<tr key={index}>
								<td data-label="First Name">{newCustomer.first_name}</td>
								<td data-label="Last Name">{newCustomer.last_name}</td>
								<td data-label="Email">{newCustomer.email}</td>
								<td data-label="Phone number">{newCustomer.phone_number}</td>
								<td data-label="Age">{newCustomer.age}</td>
								<td data-label="City">{newCustomer.city}</td>
							</tr>
						))}
					</tbody>
				</table>
		
		    	<div>
					<button className="addbtn" onClick={this.onOpenModal}>
						<span className="plus-icon"><FontAwesomeIcon icon="plus" /></span>Add New Customer
					</button>
				</div>

				{showContent === true ? 
					<div className="modal-box">
						<div className="modal-content">
							<span className="close" onClick={this.onCloseModal}>&times;</span>
					        <h2>Add New Customer</h2>
					        <div className="modal-box-body">
								<form onSubmit={this.submitHandler}>
									<p>Enter your First Name:</p>
									<input
										type='text'
										name='first_name'
										ref="first_name"
										required
									/>

									<p>Enter your Last Name:</p>
									<input
										type='text'
										name='last_name'
										ref="last_name"
										required
									/>

									<p>Enter your Email:</p>
									<input
										type='text'
										name='email'
										ref="email"
										required
									/>

									<p>Enter your Phone number:</p>
									<input
										type='tel'
										name='phone_number'
										ref="phone_number"
										pattern="^-?[0-9]\d*\.?\d*$"
										required
									/>

									<p>Enter your Age:</p>
									<input
										type='text'
										name='age'
										ref="age"
										required
									/>

									<p>Enter your City:</p>
									<input
										type='text'
										name='city'
										ref="city"
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

export default Customers 