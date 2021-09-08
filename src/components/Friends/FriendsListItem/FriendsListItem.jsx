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

export default FriendsListItem;
