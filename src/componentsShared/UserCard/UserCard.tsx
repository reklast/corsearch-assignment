import avatarPlaceholder from "../../assets/avatarPlaceholder.png";
import { User } from "../../types/users";

import styles from "./UserCard.module.scss";

function UserCard({ user }: { user: User }) {
  return (
    <div className={styles.cardWrap}>
      <img
        className={styles.avatar}
        src={user.avatar ?? avatarPlaceholder}
        alt="userAvatar"
      />
      <div className={styles.userInfo}>
        <div className={styles.name}>{user.name}</div>
        <ul>
          <li>Email: {user.email}</li>
          <li>Phone: {user.phone}</li>
          <li>Website: {user.website}</li>
          Address: {user.address.street}, {user.address.suite},{" "}
          {user.address.city}, {user.address.zipcode}
        </ul>
      </div>
    </div>
  );
}

export default UserCard;
