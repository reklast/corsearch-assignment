import styles from "./Header.module.scss";

function Header({ name }: { name: string }) {
  return <div className={styles.header}>{name}</div>;
}

export default Header;
