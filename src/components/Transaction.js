import React, { Component } from 'react'

export class Transaction extends Component {
    render() {
        const trans = this.props.data
        return (
            <div>
                ${trans.amount}, {trans.vendor}, {trans.category}
            </div>
        )
    }
}

export default Transaction
