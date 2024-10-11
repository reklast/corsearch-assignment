
import Header from "../../componentsShared/Header/Header";
import styles from "./Dashboard.module.scss";

function Dashboard() {
  return (
    <div className={styles.dashboardWrap}>
        <Header name="Dashboard" />
    </div>
  )
}

export default Dashboard