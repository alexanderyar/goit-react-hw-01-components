import css from './Statistics.module.css'
import PropTypes from 'prop-types'
import { SingleStatisticsItem } from 'components/SingleStatisticsItem/SingleStatisticsItem'

export const Statistics = ({ stats, title }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2> }

            <ul className={css.statlist}>
                {stats.map(({ id, label, percentage }) => (<SingleStatisticsItem
                    key={'statistic'+id}
                    label={label}
                    percentage={percentage}
                />)
   )}
  </ul>
</section>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label:PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    ),
    title:PropTypes.string
}


