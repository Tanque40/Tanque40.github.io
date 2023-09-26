'use client'
import React, { SyntheticEvent } from "react"
import { ParticlesContainer } from "../ParticlesContainer/ParticlesContainer"
import Link from "next/link";


class NavBar extends React.PureComponent {

  render() {
    return (
      <section className="nav">
        <ParticlesContainer />
        <h1>Bruno Vitte</h1>
        <h3 className="loader span">
          <span className="m">D</span>
          <span className="m">E</span>
          <span className="m">V</span>
          <span className="m">E</span>
          <span className="m">L</span>
          <span className="m">O</span>
          <span className="m">P</span>
          <span className="m">E</span>
          <span className="m">R</span>
          <span className="m">&nbsp;</span>
          <span className="m">Y</span>
          <span className="m">&nbsp;</span>
          <span className="m">E</span>
          <span className="m">S</span>
          <span className="m">T</span>
          <span className="m">U</span>
          <span className="m">D</span>
          <span className="m">I</span>
          <span className="m">A</span>
          <span className="m">N</span>
          <span className="m">T</span>
          <span className="m">E</span>
        </h3>
        <div className="nav-container">
          <Link href={"#tab-about-me"} className="nav-tab">
            Sobre mí
          </Link>
          <span className="nav-tab-slider"></span>
        </div>
      </section>
    )
  }

}

export { NavBar }