import { useEffect, useState } from "react";
import styles from "./FilterInput.module.scss";

function FilterInput({
  arr,
  updateFunc,
}: {
  arr: object[] | undefined;
  updateFunc: (e: any[]) => void;
}) {
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    if (!arr) return;

    if (!query) {
      updateFunc(arr);
      return;
    }

    const filteredArr = arr.filter((item) =>
      Object.values(item).join("").toLowerCase().includes(query.toLowerCase())
    );

    updateFunc(filteredArr);
  }, [query]);
  return (
    <input
      placeholder="Search"
      className={styles.filterInput}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default FilterInput;
