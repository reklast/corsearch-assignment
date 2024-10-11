import { useEffect, useState } from "react";
import { User } from "../../types/users";
import { getUsers } from "../../services/users";

import Header from "../../componentsShared/Header/Header";
import UserCard from "../../componentsShared/UserCard/UserCard";

import styles from "./Dashboard.module.scss";

function Dashboard() {
  const [users, setUsers] = useState<User[] | undefined>(undefined);

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div className={styles.dashboardWrap}>
      <Header name="Dashboard" />
      <div className={styles.mainBlock}>
        {!users ? (
          "Loading..."
        ) : (
          <>
            <div className={styles.userCards}>
              {users.map((user, i) => (
                <UserCard key={i} user={user} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
