"use client";

import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";
import Link from "next/link";
const NavLink = ({ link }) => {
  const pathname = usePathname();

  return (
    <Link
      href={link.link}
      key={link.title}
      className={`${styles.container} ${
        pathname === link.link && styles.active
      }`}
    >
      {link.title}
    </Link>
  );
};
export default NavLink;
