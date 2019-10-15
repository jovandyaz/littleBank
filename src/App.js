import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
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
    console.log(this.state.data) 
  }

  componentDidMount = async () => {
    this.getData()
  }

  postData = async (dataP) => {
    await axios.post("http://localhost:8080/transaction", dataP)
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
          <div id="home-background">Expenses</div>
          <div id="main-links">
            <Redirect to="/" />
          </div>
          <Route path="/" exact render={() => <Operations data={this.state.data} getData={this.getData} postData={this.postData} />} />
          <h3>${this.getBalance()}</h3>
          <Route path="/" exact render={() => <Transactions data={this.state.data} />} />
        </div>
      </Router>
    )
  }
}

export default App;