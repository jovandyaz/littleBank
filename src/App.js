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

  async getData() {
    return axios.get("http://localhost:8080/transactions")
  }

  async componentDidMount() { 
    const trans = await this.getData()
    this.setState({data: trans.data})
  }

  async postData(dataP) {
    await axios.post("http://localhost:8080/transaction", dataP)
    //await this.componentDidMount()
  }

  updateData = (data) => {
    console.log("data", data)
    let newData = [...this.state.data]
    newData.push(data)
    this.setState({
      data: newData
    }, () => console.log(this.state.data))
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
          <Route path="/" exact render={() => <Operations data={this.state.data} getData={this.getData} postData={this.postData} updateData={this.updateData} />} />
          <h3>${this.getBalance()}</h3>
          <Route path="/" exact render={() => <Transactions data={this.state.data} />} />
        </div>
      </Router>
    )
  }
}

export default App;