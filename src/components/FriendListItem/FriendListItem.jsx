import css from "./friendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  //   return (
  //     <li className={css.item}>
  //       <span
  //         className={isOnline ? css.status_online : css.status_offline}
  //       ></span>
  //       <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
  //       <p className={css.name}>{name}</p>
  //     </li>
  //   );
  // };
  return (
    <li className={css.item}>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
      {isOnline ? (
        <p className={css.online}>Online</p>
      ) : (
        <p className={css.offline}>Offline</p>
      )}
    </li>
  );
};

export default FriendListItem;
