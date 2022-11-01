
import PropTypes from 'prop-types'

import { TableHead, Table } from './TransactionHistory.styled'
import { SingleTransactionElement } from './SingleTransactionElement/SingleTransactionElement'




export const TransactionHistory = ({ items }) => {
    console.log(items)
    return (
        <Table>
    <TableHead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
        </TableHead>
            <tbody>
                {items.map(({ type, amount, currency, id }) => (<SingleTransactionElement key={id} type={type} amount={amount} currency={currency} />))} 
                </tbody>
        </Table>
    )
   
}


{/* <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table> */}