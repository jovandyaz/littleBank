import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import { Transactions } from './components/Transactions';
import { Operations } from './components/Operations';
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  getData = async () => {
    const response = await axios.get("http://localhost:8080/transactions")
    this.setState({ data: response.data })
    console.log("gettting data...:", this.state.data)
  }

  componentDidMount = () => {
    this.getData()
  }

  postData = async (dataP) => {
    await axios.post("http://localhost:8080/transaction", dataP)
    this.getData()
  }

  deleteData = async (id) => {
    await axios.delete(`http://localhost:8080/transaction/${id}`)
    this.getData()
  }

  getBalance = () => {
    let balance = 0
    this.state.data.forEach(s => balance += s.amount)
    return balance
  }

  render() {
    return (
      <Router>
        <div className="App">
          <h1 id="home-background">Expenses</h1>
          <h3>Balance: ${this.getBalance()}</h3>

          <div id="main-links">
            <Link to="/" >Home </Link>
            <Link to="/transactions"> Transactions</Link>
            <Redirect to="/" />
          </div>

          <Route path="/" exact render={() => <Operations data={this.state.data} getData={this.getData} postData={this.postData} />} />
          <Route path="/transactions" exact render={() => <Transactions data={this.state.data} deleteData={this.deleteData} />} />
        </div>
      </Router>
    )
  }
}

export default App;