import {useRouter} from 'next/router'
import Layout from '../../components/Layout'

export default function EventPage() {
    const router = useRouter()

    console.log(router)

    return (
        <Layout title='Event'>
            <h1>My Event</h1>
            / {router.query.slug}
        </Layout>
    )
}
