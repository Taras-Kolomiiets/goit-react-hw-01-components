import FriendsListItem from './FriendsListItem/FriendsListItem';
import s from './FriendsList.module.css';
import PropTypes from 'prop-types';

function FriendsList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <FriendsListItem
          key={friend.id}
          avatar={friend.avatar}
          id={friend.id}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape),
};

export default FriendsList;
