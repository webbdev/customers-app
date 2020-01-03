import React, { Component } from 'react'
import axios from 'axios'
import Customers from './components/Customers'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: []
    };

    this.compareByName = this.compareByName.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.compareByCity = this.compareByCity.bind(this);
    this.sortByCity = this.sortByCity.bind(this);
  }

  componentDidMount() {
    axios.get(`https://raw.githubusercontent.com/webbdev/customers-app/master/server/db.json`)
      .then(res => {
        const customers = res.data;
        this.setState({ customers });
      })
  }

  compareByName(first_name) {
    return function (a, b) {
      if (a.first_name < b.first_name) return -1;
      if (a.first_name > b.first_name) return 1;
      return 0;
    };
  }
 
  sortByName(key) {
    let arrayCopy = [...this.state.customers];
    arrayCopy.sort(this.compareByName(key));
    this.setState({customers: arrayCopy});
  }

  compareByCity(city) {
    return function (a, b) {
      if (a.city < b.city) return -1;
      if (a.city > b.city) return 1;
      return 0;
    };
  }
 
  sortByCity(key) {
    let arrayCopy = [...this.state.customers];
    arrayCopy.sort(this.compareByCity(key));
    this.setState({customers: arrayCopy});
  }

  render() {
    const customers = this.state.customers;
    return (
      <div className="App">
        <Customers
          customers={customers}
          sortByName={this.sortByName}
          sortByCity={this.sortByCity}
        />
      </div>
    )
  } 
}

export default App;
