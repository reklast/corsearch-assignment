import { useEffect, useState } from "react";
import { User } from "../../types/users";

import styles from "./SortBy.module.scss";

function SortBy({
  arr,
  updateFunc,
}: {
  arr: User[];
  updateFunc: (e: User[]) => void;
}) {
  const [sortBy, setSortBy] = useState<string>("");

  useEffect(() => {
    if (!sortBy) return updateFunc(arr);

    const sortedArr = [...arr].sort((a, b) => {
      if (sortBy === "email") return a.email.localeCompare(b.email);
      return a.name.localeCompare(b.name);
    });

    updateFunc(sortedArr);
  });

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
    </div>
  );
}

export default SortBy;
