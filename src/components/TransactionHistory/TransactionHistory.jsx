
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

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            })
    )
}



