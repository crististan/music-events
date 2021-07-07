import Link from 'next/link'
import styles from '../styles/Footer.module.css'
import styles2 from '../styles/Layout.module.css'

export default function Footer() {
    return (
        <footer>
            <div className={styles2.container}>
                <div className={styles.footer}>
                    <p>
                        <Link href='/events'>
                            <a>Events</a>
                        </Link>
                    </p>
                    <hr />
                    <p>Copyright &copy; 2021 Music Events</p>
                </div>
            </div>
        </footer>
    )
}
