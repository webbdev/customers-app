import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Customers extends Component {

	render() {
		const customers = this.props.customers;
		
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
						{/*{newCustomers.map((newCustomer, index) => (
							<tr key={index}>
								<td data-label="First Name">{newCustomer.first_name}</td>
								<td data-label="Last Name">{newCustomer.last_name}</td>
								<td data-label="Email">{newCustomer.email}</td>
								<td data-label="Phone number">{newCustomer.phone_number}</td>
								<td data-label="Age">{newCustomer.age}</td>
								<td data-label="City">{newCustomer.city}</td>
							</tr>
						))}*/}
					</tbody>
				</table>

		    </div>
		)
	}
}

export default Customers 