"use client";

import Image from "next/image";
import Head from "next/head";
import "typeface-inter";
import "./styles.css";
import { useFadeInOnScroll } from "../use-fade-in-on-scroll";
import { useState } from "react";

export function FadeInSection({ children }) {
  const { ref, isVisible } = useFadeInOnScroll();
  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const quotes = [
    `"The impact of Vivaan’s contributions cannot be overstated. His work significantly enriched our website’s content, making it more engaging and effective for students. His technical proficiency, creative problem-solving abilities, and collaborative spirit make him an exceptional candidate who will continue to excel and make meaningful contributions to any endeavor he undertakes." – Gabriel Aversano, Founder of MyHomeworkRewards`,
    `"Vivaan's exceptional maturity and eagerness to learn prompted us to consider his participation on a case-by-case basis, and we are thrilled to have him as part of our community." – Monica Escamilla, MBA, Center Director, Digital NEST`,
    'Placeholder quote 3',
  ];
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const handlePrevQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex === 0 ? quotes.length - 1 : prevIndex - 1));
  };

  const handleNextQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex === quotes.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Navigation Bar</title>
      </Head>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
          <li>
            <a href="#awards">Awards</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
        </ul>
      </nav>
      <FadeInSection>
        <div className="intro">
          <div className="intro-content">
            <div className="image-container">
              <Image
                src="/PFP-PNG.png"
                alt="Vivaan Rajpurohit's Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-content">
              <h1 id="MyName">Vivaan Rajpurohit</h1>
              <p className="about-me">
                Experienced developer with 7 months of industrial workexperience
                at MyHomeWorkRewards, a Canadian platform that rewards students
                for completing homework. Proficient in HTML,CSS, JavaScript,
                PHP, and cloud services. Currently developing mobile and web
                apps with Dart, Flutter, and Python to enhance user experiences,
                with a focus on user retention and performance optimization.
                Passionate about continuous learning and staying current with
                emerging technologies. Completed FAA ground school and serve as
                School Site Council Vice President, overseeing school funds.
                Adept at problem-solving, critical thinking, and collaboration,
                I leverage my expertise to deliver innovative solutions.
                Achieving a 67% improvement in website performance and user
                engagement, contributing to significant growth in user retention
                and overall project success.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 id="AbtMe">Everything I know</h1>
          <hr />
          <div className="flip-card-grid">
            {[
              "Python",
              "Dart",
              "HTML & CSS",
              "JavaScript",
              "PHP",
              "Placeholder",
            ].map((skill) => (
              <div className="flip-card" key={skill}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="public\PHPImage.png" />
                  </div>
                  <div className="flip-card-back">
                    <p>{skill}</p>
                    <div className="checkmark">✔</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 id="AbtMe">Certifications</h1>
          <hr />
          <div className="certificates">
            {Array(4)
              .fill()
              .map((_, i) => (
                <div className="certificate-box" key={i}>
                  <div className="certificate-content">
                    <div className="checkmark">✔</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="side-by-side">
          <div className="section">
            <h1 id="AbtMe">Things I've Created</h1>
            <hr />
            <p className="created-description">
              I have built several Python applications, including an attendance
              ID scanner using Tkinter, a budget calculator, a number guessing
              game, and a personal greeting program. In web development, I
              contributed to MyHomeWork Rewards, using HTML, CSS, JavaScript,
              PHP, and cloud services to enhance the platform, leading to a 67%
              improvement in performance and user engagement. I also created a
              dummy ordering website and a Spotify recreation homepage in
              JavaScript, both designed as templates for further development. In
              mobile app development, I am working on SkyPrep, an aviation
              career pathfinder app built with Dart, Flutter, and Firebase,
              designed to connect my passion for aviation and software
              development.
            </p>
          </div>
          <div className="section">
            <h1 id="AbtMe">Work Experience</h1>
            <hr />
              <p className="created-description">
                Since January 2025, I have been working at the Modesto
                Children's Museum as a web coordinator and data analyst,
                managing the website and utilizing data to enhance outreach
                efforts. Since September 2024, I have been contributing to
                MyHomeWork Rewards, where I have created nearly seven lessons to
                support student learning on the platform.
              </p>

          </div>
        </div>
        <div>
          <h1 id="AbtMe">Motives</h1>
          <hr />
          <div className="quote-box">
            <div className="arrow left" onClick={handlePrevQuote}>&#9664;</div>
            <div className="quote">{quotes[currentQuoteIndex]}</div>
            <div className="arrow right" onClick={handleNextQuote}>&#9654;</div>
          </div>
        </div>
      </FadeInSection>
      <div className="contacts-reference">
        <div className="section">
          <h1 id="AbtMe">Contacts</h1>
          <hr />
        </div>
        <div className="section">
          <h1 id="AbtMe">Reference</h1>
          <hr />
        </div>
      </div>
    </div>
  );
}
