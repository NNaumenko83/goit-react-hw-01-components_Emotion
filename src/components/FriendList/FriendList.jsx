import PropTypes from 'prop-types';
import FriendsListItem from 'components/FriendListItem/FriendListItem';
import css from 'components/FriendList/Friendlist.module.css';

function FriendsList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendsListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default FriendsList;
