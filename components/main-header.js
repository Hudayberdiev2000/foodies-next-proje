import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";

import styles from "./main-header.module.css";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image
          src={logoImg.src}
          width={40}
          height={40}
          alt="A plate with  food on it"
        />
        NextLevel Food
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
