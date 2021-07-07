import Link from "next/link"
import styles from '../styles/Header.module.css'
import styles2 from '../styles/Layout.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles2.container}>
                <div className={styles.headerInner}>
                    <div className={styles.logo}>
                        <Link href='/'>
                            <a>Music Events</a>
                        </Link>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <Link href='/'>
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/about'>
                                    <a>About</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/events'>
                                    <a>Events</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
