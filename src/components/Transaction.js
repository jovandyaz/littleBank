import React, { Component } from 'react'

export class Transaction extends Component {

    deletingT = () => {
        // window.confirm("Are you sure?") ? this.props.deleteT(this.props.data._id) : console.log("Canceled")

        if (window.confirm("Are you sure?")) {
            // console.log(this.props.data._id)
            this.props.deleteT(this.props.data._id)
        } else {
            console.log("Canceled")
        }
    }

    render() {
        const trans = this.props.data
        // console.log(this.props.deleteT)
        return (
            <div>
                <div>${trans.amount} - {trans.vendor} - {trans.category} <button onClick={this.deletingT}>X</button></div>
            </div>
        )
    }
}

export default Transaction
