import Link from "next/link";
import { Search, ShoppingBag, User } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.navbar}`}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}></div>
          <span className="serif-text">Ghar Sajaao</span>
        </Link>

        <nav className={styles.navLinks}>
          <Link href="/catalog" className={styles.navLink}>Shop</Link>
          <Link href="/collections" className={styles.navLink}>Collections</Link>
          <Link href="/about" className={styles.navLink}>Our Story</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>

        <div className={styles.actions}>
          <div className={styles.searchBar}>
            <Search size={16} className={styles.searchIcon} />
            <input type="text" placeholder="Find heritage pieces..." className={styles.searchInput} />
          </div>
          <button className={styles.iconBtn}>
            <ShoppingBag size={20} />
          </button>
          <button className={styles.iconBtn}>
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
