import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return <>
  <main>
    <article>
      <header className="d-flex justify-content-between border-bottom align-items-center">
        <h4  className="px-2">Indian Cricket Team</h4>
        <nav>
          <ul className="list-group list-group-horizontal list-unstyled">
            <li className="px-2">Home</li>
            <li className="px-2">Players</li>
            <li className="px-2">Stats</li>
          </ul>
        </nav>
      </header>
      <section className="p-2">
      <Component {...pageProps} />
      
      </section>
    </article>
  </main>
  </>
}
