import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

export default function PageWrapper({ children }) {
    return (
        <div className="root">
            <Head>
                <title>Repasa Giftbox</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
