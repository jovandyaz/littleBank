import React, { Component } from 'react'
import { Transaction } from './Transaction';

export class Transactions extends Component {

    deleteT = (id) => {
        // console.log(id)
        this.props.deleteData(id)
    }

    render() {
        const data = this.props.data
        return (
            <div>
                <h2>Amount - Vendor - Category</h2>
                {data.map(d => <div key={d._id}><Transaction data={d} deleteT={this.deleteT}/></div>)}
            </div>
        )
    }
}

export default Transactions
