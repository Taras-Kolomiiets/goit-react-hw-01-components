import FriendsListItem from "./FriendsListItem/FriendsListItem";

function FriendsList(props) {
  return (
    <ul class="friend-list">
      <FriendsListItem friend={props} />
    </ul>
  );
}

export default FriendsList;
