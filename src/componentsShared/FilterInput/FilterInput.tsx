import { useEffect, useState } from "react";
import styles from "./FilterInput.module.scss";

function FilterInput({
  arrData,
  updateFunc,
}: {
  arrData: object[] | undefined;
  updateFunc: (e: any[]) => void;
}) {
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    if (!arrData) return;

    if (!query) {
      updateFunc(arrData);
      return;
    }

    const filteredArr = arrData.filter((item) =>
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
