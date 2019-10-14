import React, { Component } from 'react'
import { Transaction } from './Transaction';

export class Transactions extends Component {
    render() {
        const data = this.props.data
        return (data.map(d =>
            <div key={d._id}>
                <Transaction data = {d}/>
            </div>)
        )
    }
}

export default Transactions
