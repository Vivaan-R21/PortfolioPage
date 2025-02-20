"use client";

import Image from "next/image";
import Head from "next/head";
import "typeface-inter";
import "./styles.css";
import { useFadeInOnScroll } from "@/hooks/use-fade-in-on-scroll";

/**
 * @typedef {Object} FadeInSectionProps
 * @property {React.ReactNode} children
 */

/**
 * @param {FadeInSectionProps} props
 */
export function FadeInSection({ children }) {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <div ref={ref} className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Navigation Bar</title>
      </Head>
      <nav className="navbar">
        <div className="circle"></div>
        <ul>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contacts">Contacts</a></li>
          <li><a href="#awards">Awards</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#about">About me</a></li>
        </ul>
      </nav>
      <FadeInSection>
        <section className="intro">
          <div className="big-circle"></div>
          <h1 id="MyName">Vivaan Rajpurohit</h1>
        </section>
      </FadeInSection>
    </div>
  );
}