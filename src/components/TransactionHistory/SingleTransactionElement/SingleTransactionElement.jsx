
import PropTypes from 'prop-types'

import { Box } from 'components/Box'

export const SingleTransactionElement = ({ type, amount, currency }) => {
    return (
        <Box bg="bg" color="bg" as="tr" >
      <Box bg="tableBg" as="td">{type}</Box >
      <Box bg="tableBg" as="td">{amount}</Box >
      <Box bg="tableBg" as="td">{currency}</Box >
    </Box>
    )
}

SingleTransactionElement.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}