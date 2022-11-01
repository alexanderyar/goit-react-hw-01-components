import css from './SingleStatisticsItem.module.css'
import PropTypes from 'prop-types'

export const SingleStatisticsItem = ({label, percentage}) => {
    return (
         <li className={css.item}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}</span>
    </li>
    
)
}

SingleStatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}