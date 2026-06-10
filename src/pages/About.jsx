import React from "react";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaSchool,
  FaGraduationCap,
  FaBrain,
  FaCode,
  FaRocket,
} from "react-icons/fa";

import "../CSS/About.css";

const statsData = [
  {
    value: "8.2",
    label: "Current GPA",
    icon: <FaGraduationCap />,
  },
  {
    value: "3+",
    label: "Projects Built",
    icon: <FaRocket />,
  },
  {
    value: "20+",
    label: "Technologies",
    icon: <FaCode />,
  },
  {
    value: "2028",
    label: "Graduation",
    icon: <FaBrain />,
  },
];

const educationData = [
  {
    icon: <FaUniversity />,
    title:
      "B.Tech Computer Science Engineering (AI & ML)",
    institute:
      "SRM Institute of Science and Technology",
    location:
      "Kattankulathur, Chennai, Tamil Nadu",
    details:
      "2024 – 2028 | Currently Pursuing",
    score:
      "GPA: 8.2",
  },

  {
    icon: <FaGraduationCap />,
    title:
      "Higher Secondary Education (12th Grade)",
    institute:
      "Narayana PU College",
    location:
      "Ballari, Karnataka",
    details:
      "Completed in 2024",
    score:
      "Percentage: 85%",
  },

  {
    icon: <FaSchool />,
    title:
      "Secondary Education (10th Grade)",
    institute:
      "Narayana E-Techno School",
    location:
      "Ballari, Karnataka",
    details:
      "Completed in 2022",
    score:
      "Percentage: 73%",
  },
];
export default function AboutMe() {
  return (
    <section className="about-section">

      {/* Aurora Background Effects */}

      <div className="about-aurora aurora-one"></div>
      <div className="about-aurora aurora-two"></div>
      <div className="about-aurora aurora-three"></div>

      {/* Hero Section */}

      <motion.div
        className="about-hero"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="about-badge">
          Software Engineer • MERN Stack Developer • AI/ML Enthusiast
        </span>

        <h1>
          Building Intelligent Systems
          <br />
          That Create Real Impact
        </h1>

        <p>
          I'm <strong>M Manohar Reddy</strong>, a Computer Science
          Engineering student specializing in Artificial Intelligence
          and Machine Learning at SRM Institute of Science and Technology.
          My passion lies in combining AI, software engineering, and
          product thinking to build solutions that solve meaningful
          real-world problems.
        </p>
      </motion.div>

      {/* Stats Section */}

      <motion.div
        className="stats-grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {statsData.map((item, index) => (
          <motion.div
            key={index}
            className="stat-card"
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
          >
            <div className="stat-icon">
              {item.icon}
            </div>

            <h2>{item.value}</h2>

            <p>{item.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* About Story */}

      <motion.div
        className="about-story"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2>Who I Am</h2>

        <p>
          My journey into technology started with curiosity and evolved
          into a passion for creating impactful products. I enjoy solving
          challenging problems through code and transforming ideas into
          practical software solutions.
        </p>

        <p>
          Over the years I have explored full-stack development,
          artificial intelligence, machine learning, backend engineering,
          cloud deployment, and modern frontend technologies. I enjoy
          building products from scratch — from system design and APIs
          to beautiful user interfaces.
        </p>

        <p>
          I believe that technology should not only be powerful but also
          accessible, scalable, and user-centric. That's the mindset I
          bring into every project I build.
        </p>
      </motion.div>

      {/* What I Build */}

      <motion.div
        className="build-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2>What I Build</h2>

        <div className="build-grid">

          <div className="build-card">
            <FaBrain className="build-icon" />
            <h3>Artificial Intelligence</h3>
            <p>
              Machine Learning, Deep Learning,
              Computer Vision, GenAI, RAG Systems,
              LLM Applications and AI-powered products.
            </p>
          </div>

          <div className="build-card">
            <FaCode className="build-icon" />
            <h3>Full Stack Development</h3>
            <p>
              React, Next.js, FastAPI, Node.js,
              MongoDB, PostgreSQL and scalable
              web application development.
            </p>
          </div>

          <div className="build-card">
            <FaRocket className="build-icon" />
            <h3>Production Products</h3>
            <p>
              End-to-end deployment using
              Vercel, Render, cloud databases,
              authentication systems and APIs.
            </p>
          </div>

        </div>
      </motion.div>
            {/* Education Timeline */}

      <motion.div
        className="education-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2>Education Journey</h2>

        <div className="education-timeline">

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="education-card"
              whileHover={{
                scale: 1.02,
              }}
            >
              <div className="education-icon">
                {item.icon}
              </div>

              <div className="education-content">
                <h3>{item.title}</h3>

                <h4>{item.institute}</h4>

                <p>{item.location}</p>

                <span>{item.details}</span>

                <div className="education-score">
                  {item.score}
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </motion.div>

      {/* Career Vision */}

      <motion.div
        className="vision-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2>Career Vision</h2>

        <p>
          My goal is to become a highly skilled
          AI Engineer and Full Stack Developer,
          contributing to innovative products
          that impact millions of users.
        </p>

        <p>
          I am actively building expertise in
          Artificial Intelligence, Machine Learning,
          Deep Learning, Generative AI, System Design,
          and Modern Software Engineering.
        </p>

        <p>
          Through continuous learning, internships,
          open-source contributions, and production-grade
          projects, I aim to secure opportunities at
          top technology companies and contribute to
          next-generation intelligent systems.
        </p>
      </motion.div>

      {/* Closing CTA */}

      <motion.div
        className="about-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h3>
          Always Learning. Always Building.
        </h3>

        <p>
          Turning ideas into intelligent products
          through code, creativity, and innovation.
        </p>
      </motion.div>

    </section>
  );
}