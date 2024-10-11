import { useEffect, useState } from "react";

import styles from "./ListOrderButton.module.scss";

function ListOrderButton({
  arr,
  sortBy,
  updateFunc,
}: {
  arr: any[];
  sortBy: string;
  updateFunc: (e: any[]) => void;
}) {
  const [order, setOrder] = useState<boolean>(true);

  useEffect(() => {
    setOrder(true);
  }, [sortBy]);

  const onOrderClick = () => {
    updateFunc([...arr].reverse());
    setOrder(!order);
  };

  return (
    <button className={styles.orderBtn} type="button" onClick={onOrderClick}>
      {order ? "Ascending" : "Descending"}
    </button>
  );
}

export default ListOrderButton;
