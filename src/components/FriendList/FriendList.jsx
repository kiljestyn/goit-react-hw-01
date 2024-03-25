import css from "./friendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ items = [] }) => {
  const elements = items.map(({ id, ...other }) => (
    <FriendListItem key={id} {...other} />
  ));

  return <ul className={css.friend_list}>{elements}</ul>;
};

export default FriendList;
