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

    catchAmount = event => {
        this.setState({
            amount: event.target.value
        })
    }

    catchVendor = event => {
        this.setState({
            vendor: event.target.value
        })
    }

    catchCategory = event => {
        this.setState({
            category: event.target.value
        })
    }

    doDeposit = () => {
        console.log("doing deposit")
        //this.props.updateData({ amount: Number(this.state.amount), vendor: this.state.vendor, category: this.state.category })
        this.props.postData({ amount: Number(this.state.amount), vendor: this.state.vendor, category: this.state.category })
    }

    doWithdraw = () => {
        console.log("doing withdraw")
        //this.props.updateData({ amount: Number(-this.state.amount), vendor: this.state.vendor, category: this.state.category })
        this.props.postData({ amount: Number(-this.state.amount), vendor: this.state.vendor, category: this.state.category })
    }

    render() {
        return (
            <div>
                <div>
                    <input type="number" placeholder="Amount" value={this.state.amount} onChange={this.catchAmount} />
                    <input type="text" placeholder="Vendor" value={this.state.vendor} onChange={this.catchVendor} />
                    <input type="text" placeholder="Category" value={this.state.category} onChange={this.catchCategory} />
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
