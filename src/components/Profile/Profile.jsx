import s from "./Profile.module.css";
import PropTypes from "prop-types";

function Profile(props) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img
          src={props.avatar}
          alt="Аватар пользователя"
          className={s.avatar}
        />
        <p className={s.name}>{props.name}</p>
        <p className={s.tag}>{props.tag}</p>
        <p className={s.location}>{props.location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{props.stats.followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{props.stats.views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  followers: PropTypes.number,
  likes: PropTypes.number,
  views: PropTypes.number,
  location: PropTypes.string,
};

Profile.defaultProps = {
  name: "Незнайомець",
};

export default Profile;
