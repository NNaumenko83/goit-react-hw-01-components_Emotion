import PropTypes from 'prop-types';
import css from 'components/FriendListItem/FriendListItem.module.css';

function FriendsListItem(props) {
  const { avatar, name, isOnline } = props;
  const status = isOnline ? 'online' : 'offline';

  return (
    <li className={css.item}>
      <span className={css[status]}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;
