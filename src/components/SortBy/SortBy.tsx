import { useEffect, useState } from "react";
import { User } from "../../types/users";

import styles from "./SortBy.module.scss";
import ListOrderButton from "../ListOrderButton/ListOrderButton";

function SortBy({
  arr,
  arrData,
  updateFunc,
}: {
  arr: User[];
  arrData: User[];
  updateFunc: (e: User[]) => void;
}) {
  const [sortBy, setSortBy] = useState<string>("");

  useEffect(() => {
    if (!sortBy) return updateFunc(arrData);

    const sortedArr = [...arrData].sort((a, b) => {
      if (sortBy === "email") return a.email.localeCompare(b.email);
      return a.name.localeCompare(b.name);
    });

    updateFunc(sortedArr);
  }, [sortBy]);

  const onSortClick = (sortValue: string) => {
    if (sortValue === sortBy) return setSortBy("");
    setSortBy(sortValue);
  };

  return (
    <div className={styles.sortOrderWrap}>
      <div className={styles.sortWrap}>
        Sort by:
        <button
          type="button"
          className={sortBy === "name" ? styles.selectedBtn : ""}
          onClick={() => onSortClick("name")}
        >
          Name
        </button>
        <button
          type="button"
          className={sortBy === "email" ? styles.selectedBtn : ""}
          onClick={() => onSortClick("email")}
        >
          Email
        </button>
      </div>
      <div className={styles.orderWrap}>
        Order:
        <ListOrderButton arr={arr} sortBy={sortBy} updateFunc={updateFunc} />
      </div>
    </div>
  );
}

export default SortBy;
