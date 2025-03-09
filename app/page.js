"use client";

import Image from "next/image";
import Head from "next/head";
import "typeface-inter";
import "./styles.css";
import { useFadeInOnScroll } from "../use-fade-in-on-scroll";

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
          <div className="intro-content">
            <Image src="/PFP-PNG.png" alt="Vivaan Rajpurohit's Image" width={400} height={400}/>
            <div className="text-content">
              <h1 id="MyName">Vivaan Rajpurohit</h1>
              <p className="about-me">
                Experienced developer with 7 months of industrial work experience at MyHomeWorkRewards, 
                a Canadian platform that rewards students for completing homework. Proficient in HTML, 
                CSS, JavaScript, PHP, and cloud services. Currently developing mobile and web apps with Dart, 
                Flutter, and Python to enhance user experiences, with a focus on user retention and performance 
                optimization. Passionate about continuous learning and staying current with emerging technologies. 
                Completed FAA ground school and serve as School Site Council Vice President, overseeing school funds. 
                Adept at problem-solving, critical thinking, and collaboration, I leverage my expertise to deliver 
                innovative solutions. Achieving a 67% improvement in website performance and user 
                engagement, contributing to significant growth in user retention and overall project success.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}