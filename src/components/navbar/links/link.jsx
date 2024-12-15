import styles from "./link.module.css";
import NavLink from "../navLink/navLink";
export default function Links() {
  const SESSION = true;
  const ADMIN = true;
  const LinkObj = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "Posts",
      link: "/blog",
    },
  ];
  return (
    <div className={styles.linkContainer}>
      {LinkObj.map((link, index) => (
        <NavLink link={link} key={index} />
      ))}
      {SESSION === true ? (
        <>
          <NavLink link={{ title: "Logout", link: "/logout" }} />
          {ADMIN && <NavLink link={{ title: "Admin", link: "/admin" }} />}
        </>
      ) : (
        <>
          <NavLink link={{ title: "Login", link: "/login" }} />
        </>
      )}
    </div>
  );
}
