import Links from "./links/link";
import styles from "./NavBar.module.css";
export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <Links />
    </div>
  );
}
