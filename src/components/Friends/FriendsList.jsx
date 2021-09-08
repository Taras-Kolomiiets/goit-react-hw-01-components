import FriendsListItem from "./FriendsListItem/FriendsListItem";
import s from "./FriendsList.module.css";

function FriendsList(props) {
  const friendsList = props.friends.map((friend) => (
    <FriendsListItem
      avatar={friend.avatar}
      id={friend.id}
      name={friend.name}
      isOnline={friend.isOnline}
    />
  ));
  return <ul className={s.friendList}>{friendsList}</ul>;
}

export default FriendsList;
