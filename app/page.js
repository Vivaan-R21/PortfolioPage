"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import "typeface-inter";
import "./styles.css";
import { useFadeInOnScroll } from "../use-fade-in-on-scroll";

export function FadeInSection({ children }) {
  const { ref, isVisible } = useFadeInOnScroll();
  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : ""
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
    `"Vivaan joined my class at just 13 years old—years ahead of the usual age group—yet he not only kept up but often surpassed his older peers. His technical aptitude, problem-solving abilities, and relentless drive for learning set him apart as a truly exceptional talent with limitless potential." — Christian Rodrigues`
  ];
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const quoteWrapperRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diffX = e.clientX - startX;
    setTranslateX(diffX);
    quoteWrapperRef.current.style.transform = `translateX(calc(-${currentQuoteIndex * 100}% + ${translateX}px))`;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (translateX > 100) {
      handlePrevQuote();
    } else if (translateX < -100) {
      handleNextQuote();
    } else {
      quoteWrapperRef.current.style.transition = 'transform 0.5s ease-in-out';
      quoteWrapperRef.current.style.transform = `translateX(-${currentQuoteIndex * 100}%)`;
      setTimeout(() => {
        quoteWrapperRef.current.style.transition = '';
      }, 500);
    }
    setTranslateX(0);
  };

  const handlePrevQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex === 0 ? quotes.length - 1 : prevIndex - 1));
    quoteWrapperRef.current.style.transition = 'transform 0.5s ease-in-out';
    quoteWrapperRef.current.style.transform = `translateX(-${(currentQuoteIndex - 1 + quotes.length) % quotes.length * 100}%)`;
    setTimeout(() => {
      quoteWrapperRef.current.style.transition = '';
    }, 500);
  };

  const handleNextQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex === quotes.length - 1 ? 0 : prevIndex + 1));
    quoteWrapperRef.current.style.transition = 'transform 0.5s ease-in-out';
    quoteWrapperRef.current.style.transform = `translateX(-${(currentQuoteIndex + 1) % quotes.length * 100}%)`;
    setTimeout(() => {
      quoteWrapperRef.current.style.transition = '';
    }, 500);
  };

  useEffect(() => {
    const handleScroll = (e) => {
      const href = e.target.getAttribute("href");
      if (!href.startsWith("#")) {
        return;
      }
      e.preventDefault();
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offset = 100; // Increase this value to ensure the section title is hidden behind the navbar
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    const links = document.querySelectorAll(".navbar a");
    links.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  const skills = [
    {
      name: "Python",
      image: "/Python.png",
      libraries: ["Tkinter", "OpenCV2", "PyBazaar", "Django", "Kiwi", "Openwin32", "Flask", "Pandas"],
    },
    {
      name: "Dart",
      image: "/Dart.png",
      libraries: ["Flutter"],
    },
    {
      name: "HTML & CSS",
      image: "/HTML&CSS.png",
      libraries: ["Bootstrap"],
    },
    {
      name: "JavaScript",
      image: "/JS.png",
      libraries: ["REACT", "REDUX"],
    },
    {
      name: "PHP",
      image: "/PHPImage.png",
      libraries: [],
    },
  ];

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vivaan Rajpurohit - Developer Portfolio</title>
        <link rel="icon" href="/favicon.ico" /> {/* Add this line for custom favicon */}
      </Head>
      <nav className="navbar">
        <a
          href="https://bit.ly/4ip0nQH"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-brand"
        >
          Vivaan Rajpurohit
        </a>
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
            <a
              href="https://bit.ly/VivaanRajpurohitsResume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
        </ul>
      </nav>
      <FadeInSection>
        <div className="intro" id="about">
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
                Experienced developer with 7 months of industrial work
                experience at MyHomeWorkRewards, a Canadian platform that
                rewards students for completing homework. Proficient in
                HTML,CSS, JavaScript, PHP, and cloud services. Currently
                developing mobile and web apps with Dart, Flutter, and Python to
                enhance user experiences, with a focus on user retention and
                performance optimization. Passionate about continuous learning
                and staying current with emerging technologies. Completed FAA
                ground school and serve as School Site Council Vice President,
                overseeing school funds. Adept at problem-solving, critical
                thinking, and collaboration, I leverage my expertise to deliver
                innovative solutions. Achieving a 67% improvement in website
                performance and user engagement, contributing to significant
                growth in user retention and overall project success.
              </p>
            </div>
          </div>
        </div>
        <div id="skills">
          <h1 id="AbtMe">Everything I know</h1>
          <hr />
          <div className="flip-card-grid">
            {skills.map((skill) => (
              <div
                className={`flip-card ${
                  skill.name === "Dart" || skill.name === "JavaScript"
                    ? "lowered-tile"
                    : ""
                }`}
                key={skill.name}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={skill.image} alt={`${skill.name} Image`} />
                  </div>
                  <div className="flip-card-back">
                    <p>{skill.name}</p>
                    <ul>
                      {skill.libraries.map((library) => (
                        <li key={library}>{library}</li>
                      ))}
                    </ul>
                    <div className="checkmark">✔</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="awards">
          <h1 id="AbtMe">Certifications</h1>
          <hr />
          <div className="certificates">
            <div className="certificate-box">
              <div className="certificate-content">
                <a
                  href="https://www.freecodecamp.org/certification/Vivaan-Rajpurohit/responsive-web-design"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Responsive Web Design
                </a>
              </div>
            </div>
            <div className="certificate-box">
              <div className="certificate-content">
                <a
                  href="https://www.freecodecamp.org/certification/Vivaan-Rajpurohit/javascript-algorithms-and-data-structures-v8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JavaScript Algorithms and Data Structures
                </a>
              </div>
            </div>
            <div className="certificate-box">
              <div className="certificate-content">
                <a
                  href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-495b0697-0509-4b9c-8bee-f42039e17a35.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Python Certificate
                </a>
              </div>
            </div>
            <div className="certificate-box">
              <div className="certificate-content">
                <a
                  href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-7765a6bf-8866-4ac2-88de-13f0dd3e8720.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FAA Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="side-by-side" id="resume">
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
              Since January 2025, I have been working at the Modesto Children's
              Museum as a web coordinator and data analyst, managing the website
              and utilizing data to enhance outreach efforts. Since September
              2024, I have been contributing to MyHomeWork Rewards, where I have
              created nearly seven lessons to support student learning on the
              platform.
            </p>
          </div>
        </div>
        <div id="motives">
          <h1 id="AbtMe">Motives</h1>
          <hr />
          <div
            className="quote-box"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
              className="quote-wrapper"
              ref={quoteWrapperRef}
              style={{
                transform: `translateX(calc(-${
                  currentQuoteIndex * 100
                }% + ${translateX}px))`,
              }}
            >
              {quotes.map((quote, index) => (
                <div className="quote" key={index}>
                  {quote}
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>
      <div className="contacts-reference" id="contacts">
        <div className="section">
          <h1 id="AbtMe">Contacts</h1>
          <hr />
          <ul className="contact-list">
            <li>
              Email:{" "}
              <a href="mailto:vivaanrajpurohit11@gmail.com">
                vivaanrajpurohit11@gmail.com
              </a>
            </li>
            <li>
              Phone: <a href="tel:+12094863134">+1 (209) 486-3134</a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/vivaan-rajpurohit-6930a1349/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vivaan Rajpurohit
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/Vivaan-R21"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vivaan-R21
              </a>
            </li>
          </ul>
        </div>
        <div className="section">
          <h1 id="AbtMe">References</h1>
          <hr />
          <ul className="reference-list">
            <li>
              <strong>Gabriel Aversano</strong>
              <br />
              Founder, MyHomeworkRewards
              <br />
              Email:{" "}
              <a href="mailto:MyHomeWorkRewards@gmail.com">
                MyHomeWorkRewards@gmail.com
              </a>
              <br />
              Phone: <a href="tel:+19059033272">+1-905-903-3272</a>
            </li>
            <li>
              <strong>Monica Escamilla</strong>
              <br />
              Center Director, Digital NEST
              <br />
              Email:{" "}
              <a href="mailto:mo.escamilla@digitalnest.org">
                mo.escamilla@digitalnest.org
              </a>
              <br />
              Phone: <a href="tel:+18317226378">+1-831-722-6378</a>
              <br />
              Relationship: Mentor and Guide
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
