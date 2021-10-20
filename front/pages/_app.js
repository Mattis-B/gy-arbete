import '../styles/globals.sass'
import TopBar from 'components/TopBar'
import Head from 'next/head'

function MyApp(page) {
  return (
    <>
      <Head>
        <title>Gamingnetwork (fix name)</title>
      </Head>
      <TopBar />

      <div className="container">
        <main className="main">
          <page.Component {...page.pageProps} />
        </main>

        <footer className="footer">

        </footer>
      </div>
    </>
  )
}

export default MyApp
