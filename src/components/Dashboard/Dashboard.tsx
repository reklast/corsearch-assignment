import { useEffect, useState } from "react";
import { User } from "../../types/users";
import { getUsers } from "../../services/users";

import Header from "../../componentsShared/Header/Header";
import FilterInput from "../../componentsShared/FilterInput/FilterInput";
import UserCard from "../../componentsShared/UserCard/UserCard";

import styles from "./Dashboard.module.scss";
import SortBy from "../SortBy/SortBy";

function Dashboard() {
  const [users, setUsers] = useState<User[] | undefined>(undefined);
  const [userData, setUserData] = useState<User[] | undefined>(undefined);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
      setUserData(data);
    });
  }, []);

  return (
    <div className={styles.dashboardWrap}>
      <Header name="Dashboard" />
      <div className={styles.mainBlock}>
        {!users ? (
          "Loading..."
        ) : (
          <>
            <FilterInput arrData={userData} updateFunc={setUsers} />
            <div className={styles.sortWrap}>
              <SortBy arr={users} updateFunc={setUsers} />
            </div>
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
