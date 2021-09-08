import s from "./Statistics.module.css";
import PropTypes from "prop-types";

function Statistics(props) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{props.title}</h2>
      <ul className={s.statlist}>
        {props.stats.map(({ id, label, percentage }) => (
          <li
            className={s.listItem}
            key={id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

function getRandomColor() {
  return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)})`;
}

export default Statistics;
