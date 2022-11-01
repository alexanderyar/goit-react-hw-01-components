
import PropTypes from 'prop-types'

import { TableRow, TableItem } from './SingleTransactionElement.styled'

export const SingleTransactionElement = ({ type, amount, currency }) => {
    return (
        <TableRow>
      <TableItem>{type}</TableItem>
      <TableItem>{amount}</TableItem>
      <TableItem>{currency}</TableItem>
    </TableRow>
    )
}