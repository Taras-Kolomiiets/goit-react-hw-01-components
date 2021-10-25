import PropTypes from "prop-types";
import s from "./FriendsListItem.module.css";

function FriendsListItem({ avatar, name, isOnline, id }) {
  return (
    <li className={s.item} key={id}>
      <span
        className={
          isOnline ? s.status + " " + s.online : s.status + " " + s.offline
        }
      ></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendsListItem;
