import React, { Component } from 'react'

export class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: "",
            vendor: "",
            category: "",
        }
    }

    updateHandler = event => this.setState({ [event.target.name]: event.target.value })

    doDeposit = () => {
        console.log("doing deposit")
        let newD = { amount: Number(this.state.amount), vendor: this.state.vendor, category: this.state.category }
        this.props.postData(newD)
    }

    doWithdraw = () => {
        console.log("doing withdraw")
        let newWD = { amount: Number(-this.state.amount), vendor: this.state.vendor, category: this.state.category }
        this.props.postData(newWD)
    }

    render() {
        return (
            <div>
                <div>
                    <input type="number" placeholder="Amount" name="amount" value={this.state.name} onChange={this.updateHandler} />
                    <input type="text" placeholder="Vendor" name="vendor" value={this.state.name} onChange={this.updateHandler} />
                    <input type="text" placeholder="Category" name="category" value={this.state.name} onChange={this.updateHandler} />
                </div>
                <div>
                    <button onClick={this.doDeposit}>Deposit</button>
                    <button onClick={this.doWithdraw}>Withdraw</button>
                </div>
            </div>
        )
    }
}

export default Operations
