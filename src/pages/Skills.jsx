import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import "../CSS/Skills.css";


const stats = [
  
];


const techStack = [
  "Python",
  "Java",
  "React",
  "Next.js",
  "FastAPI",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "TensorFlow",
  "PyTorch",
  "OpenCV",
  "ChromaDB",
  "Git",
  "GitHub",
  "Vercel",
  "Render",
  "JWT",
  "REST API",
  "RAG",
  "Gen AI",
];

const skillCategories = [
  {
    icon: "🤖",
    title: "AI Engineering",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Generative AI",
      "Prompt Engineering",
      "RAG Systems",
      "LLM Integration",
      "TensorFlow",
      "PyTorch",
      "OpenCV",
    ],
  },

  {
    icon: "⚡",
    title: "Full Stack Development",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "JWT Authentication",
    ],
  },

  {
    icon: "🗄️",
    title: "Database Engineering",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "SQLAlchemy",
      "Mongoose",
      "ChromaDB",
      "Vector Search",
    ],
  },

  {
    icon: "☁️",
    title: "Cloud & DevOps",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Render",
      "CI/CD",
      "Deployment",
      "Environment Management",
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">

      <div className="skills-glow"></div>

      <motion.div
        className="skills-hero"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>TECH STACK & EXPERTISE</h1>

        <p>
          Building AI-powered applications,
          scalable backend systems,
          intelligent document platforms,
          and production-ready software products.
        </p>
      </motion.div>

      <div className="stats-grid">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="stat-card"
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
          >
            <h2>
              <CountUp
                end={item.number}
                duration={2}
              />
              {item.suffix}
            </h2>

            <span>{item.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {[...techStack, ...techStack].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -10,
            }}
          >
            <h3>
              {category.icon} {category.title}
            </h3>

            <div className="skill-tags">
              {category.skills.map((skill, idx) => (
                <span key={idx}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}