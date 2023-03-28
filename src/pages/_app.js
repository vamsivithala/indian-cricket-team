import '@/styles/_app.css'
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import React from "react";
import { MDBCol, MDBInput } from "mdbreact";
export default function Home({ Component, pageProps }) {
  return <>
    <main>
      <article>

        <header className="display-flex justify-content-between">

          <Image src='/logo1.png' width="200" height="60" className="px-2" />
          <Navbar>
            <Navbar.Brand href="home"></Navbar.Brand>
            <Nav>
              <ul style={{ display: "flex", alignItems: "center", listStyleType: "none", }}>
                <li style={{ margin: "0 15px" }}><b><Nav.Link style={{ color: "white" }} href="news">NEWS</Nav.Link></b></li>
                <li style={{ margin: "0 15px" }}><b><Nav.Link style={{ color: "white" }} href="matches">MATCHES</Nav.Link></b></li>
                <li style={{ margin: "0 15px" }}><b><Nav.Link style={{ color: "white" }} href="players">PLAYERS</Nav.Link></b> </li>
                <li style={{ margin: "0 15px" }}><b><Nav.Link style={{ color: "white" }} href="stats">STATS</Nav.Link></b></li>
                <li style={{ margin: "0 15px" }}><b><Nav.Link style={{ color: "white" }} href="home">HOME</Nav.Link></b></li>
                <li style={{ margin: "0 15px" }}><b><button className="header-button" style={{ color: "white", border: "1px white", padding: "3px 7px" }}>BUY TICKETS</button></b></li>
                <li style={{ margin: "0 15px" }}><b><button className="header-button" style={{ color: "white", border: "1px white", padding: "3px 7px" }}>LIVE SCORES</button></b></li>
              </ul>
            </Nav>
          </Navbar>
        </header>
        <section className="p-2">
          <Component {...pageProps} />
        </section>

      </article>
    </main>
  </>
}
