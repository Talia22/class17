import Link from "next/link";
import styles from "./Navbar.module.css"; 

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <nav>
                <ul className={styles.navList}>
                    <li><Link href="/">Main</Link></li>
                    <li><Link href="/books">Books</Link></li>
                </ul>
            </nav>
        </div>
    );
}