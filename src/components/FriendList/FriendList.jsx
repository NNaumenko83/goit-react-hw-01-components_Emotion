import PropTypes from 'prop-types';
import FriendsListItem from 'components/FriendListItem/FriendListItem';
import { List } from 'components/FriendList/FriendList.styled';

function FriendsList({ friends }) {
  return (
    <List>
      {friends.map(friend => (
        <FriendsListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </List>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default FriendsList;
