import '@/styles/_app.css'
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function App({ Component, pageProps }) {
  return <>
    <main>
      <article>
       

        <header className="d-flex justify-content-between align-items-center">
          <b><h4 className="px-2">INDIAN CRICKET TEAM</h4></b>
          <img src='./images/llogo.jpg'/>
          <Navbar collapseOnSelect expand="md" className="animate-navbar nav-theme justify-content-between">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav"/>
            <Container>
              <Navbar.Brand href="home"></Navbar.Brand>
              <Nav>
                <b><Nav.Link style={{color:"orange"}}href="home">HOME</Nav.Link></b>
                <b><Nav.Link style={{color:"orange"}}href="matches">MATCHES</Nav.Link></b>
                <b><Nav.Link style={{color:"orange"}}href="players">PLAYERS</Nav.Link></b> 
                <b><Nav.Link style={{color:"orange"}}href="stats">STATS</Nav.Link></b>
              </Nav>
            </Container>
          </Navbar>

        </header>
        <section className="p-2">
          <Component {...pageProps} />
        </section>
      </article>
    </main>
  </>
}
