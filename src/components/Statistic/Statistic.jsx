import PropTypes from 'prop-types';
import css from 'components/Statistic/Statistic.module.css';

function Statistic(props) {
  const { title, stats } = props;

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title.toUpperCase()}</h2>}

      <ul className={css.statList}>
        {stats.map(stat => (
          <li className={css.statListItem} key={stat.id}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistic.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistic;
