import Layout from "../components/Layout"
import styles from '../styles/404.module.css'
import Link from 'next/link'
import {FaExclamationTriangle} from 'react-icons/fa'

export default function NotFoundPage() {
    return (
        <Layout title='Page Not Found'>
            <div className={styles.error}>
                <h1><FaExclamationTriangle /> 400</h1>
                <h4>Sorry, the page not found</h4>
                <small>
                    <Link href='/'>
                        <a>Go back home</a>
                    </Link>
                </small>
            </div>
        </Layout>
    )
}
