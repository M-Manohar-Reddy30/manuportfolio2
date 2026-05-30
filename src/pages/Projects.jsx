import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Sparkles,
  Brain,
  Shield,
  Database,
} from "lucide-react";

import "../CSS/projects.css";

const featuredProject = {
  title: "SrmDocSafe-AI",
  subtitle: "AI Document Intelligence Platform",

  description:
    "Enterprise-grade AI document platform that transforms PDFs into searchable knowledge using OCR, semantic search, RAG architecture, AI summaries, study notes generation, analytics dashboards, and secure authentication.",

  image: "/srmdocsafe-ai.png",

  tech: [
    "React",
    "FastAPI",
    "PostgreSQL",
    "ChromaDB",
    "Groq",
    "JWT",
    "OCR",
    "RAG",
  ],

  features: [
    {
      icon: <Brain size={18} />,
      text: "AI Summarization",
    },

    {
      icon: <Database size={18} />,
      text: "Vector Search",
    },

    {
      icon: <Shield size={18} />,
      text: "JWT Security",
    },

    {
      icon: <Sparkles size={18} />,
      text: "RAG Chat",
    },
  ],

  live: "https://srm-docsafe-ai.vercel.app",

  code: "https://github.com/M-Manohar-Reddy30/SRM_DOCSAFE-AI",
};

const projects = [
  {
    title: "BookMyDoc",

    image: "/bookmydoc.png",

    description:
      "Full-stack healthcare appointment platform connecting patients with verified doctors through a seamless booking experience.",

    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
    ],

    live:
      "https://bookmydoc-ten.vercel.app/my-profile",

    code:
      "https://github.com/M-Manohar-Reddy30/BookMyDoc",
  },

  {
    title: "DeepLearn",

    image: "/deeplearn.png",

    description:
      "Deep-learning demonstration platform showcasing AI-powered image processing and real-time model inference.",

    tech: [
      "Next.js",
      "Machine Learning",
      "Deep Learning",
    ],

    live:
      "https://deeplearn-setup-t925.vercel.app/",

    code:
      "https://github.com/M-Manohar-Reddy30/deeplearn-setup",
  },
];

export default function Projects() {
  return (
    <section className="projects-section">

      {/* Aurora Background */}

      <div className="aurora aurora1"></div>
      <div className="aurora aurora2"></div>
      <div className="aurora aurora3"></div>

      {/* Header */}

      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="projects-tag">
          FEATURED WORK
        </span>

        <h1>
          Projects That Solve
          Real Problems
        </h1>

        <p>
          A collection of AI-powered and
          full-stack applications built with
          modern technologies, cloud
          infrastructure, and production-ready
          architecture.
        </p>
      </motion.div>

      {/* Featured Project */}

      <motion.div
        className="featured-project"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >

        <div className="featured-left">

          <div className="featured-badge">
            ⭐ Featured AI Project
          </div>

          <h2>{featuredProject.title}</h2>

          <h4>{featuredProject.subtitle}</h4>

          <p>
            {featuredProject.description}
          </p>

          <div className="feature-list">
            {featuredProject.features.map(
              (item, index) => (
                <div
                  key={index}
                  className="feature-item"
                >
                  {item.icon}
                  {item.text}
                </div>
              )
            )}
          </div>

          <div className="tech-stack">
            {featuredProject.tech.map(
              (tech) => (
                <span key={tech}>
                  {tech}
                </span>
              )
            )}
          </div>

          <div className="project-buttons">

            <a
              href={featuredProject.code}
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href={featuredProject.live}
              target="_blank"
              rel="noreferrer"
              className="live-btn"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>

          </div>
        </div>

        <div className="featured-right">
          <img
            src={featuredProject.image}
            alt={featuredProject.title}
          />
        </div>

      </motion.div>

      {/* Secondary Projects */}

      <div className="secondary-projects">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="secondary-card"
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            whileHover={{
              y: -12,
            }}
            transition={{
              duration: 0.5,
            }}
          >

            <div className="card-image">
              <img
                src={project.image}
                alt={project.title}
              />
            </div>

            <h3>{project.title}</h3>

            <p>
              {project.description}
            </p>

            <div className="tech-stack">
              {project.tech.map((tech) => (
                <span key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-buttons">

              <a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                className="github-btn"
              >
                <Github size={18} />
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="live-btn"
              >
                <ExternalLink size={18} />
              </a>

            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}