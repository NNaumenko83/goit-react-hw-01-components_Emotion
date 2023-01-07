import PropTypes from 'prop-types';
import {
  ListItem,
  FriendStatus,
} from 'components/FriendListItem/FriendListItem.styled';

function FriendsListItem(props) {
  const { avatar, name, isOnline } = props;

  return (
    <ListItem>
      <FriendStatus status={isOnline}></FriendStatus>
      {/* <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p> */}
    </ListItem>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;
