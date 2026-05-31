import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Code2,
  Award,
  Sparkles,
} from "lucide-react";

import "../CSS/Resume.css";

const stats = [
  { value: "8.2", label: "CGPA" },
  { value: "3+", label: "Major Projects" },
  { value: "20+", label: "Technologies" },
  { value: "2028", label: "Graduation" },
];

const skills = [
  "Java",
  "Python",
  "C++",
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
  "Gen AI",
  "RAG",
  "Git",
  "GitHub",
  "JWT",
  "REST APIs",
  "Tailwind CSS",
];

const projects = [
  {
    title: "SrmDocSafe-AI",
    desc: "AI-powered Document Intelligence Platform with OCR, RAG Chat, Semantic Search and AI Summarization.",
  },
  {
    title: "BookMyDoc",
    desc: "Doctor Appointment Platform connecting patients with doctors through a seamless booking system.",
  },
  {
    title: "DeepLearn",
    desc: "Deep Learning demonstration platform showcasing image processing and real-time model inference.",
  },
];

export default function Resume() {
  return (
    <section className="resume-section-main">

      {/* Background Effects */}

      <div className="resume-glow glow-1"></div>
      <div className="resume-glow glow-2"></div>

      <motion.div
        className="resume-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        {/* Header */}

        <motion.div
          className="resume-hero"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >

          <div className="resume-badge">
            <Sparkles size={16} />
            AI Engineer Portfolio Resume
          </div>

          <h1>
            M Manohar Reddy
          </h1>

          <h3>
            Artificial Intelligence Engineer • Full Stack Developer
          </h3>

          <p>
            Passionate AI/ML Engineer and Full Stack Developer building
            intelligent software solutions, modern web applications,
            and real-world AI products that create measurable impact.
          </p>

        </motion.div>

        {/* Stats */}

        <div className="stats-grid">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h2>{item.value}</h2>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Contact */}

        <motion.div
          className="contact-card"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >

          <div>
            <Mail size={18} />
            <span>manoharreddyind@gmail.com</span>
          </div>

          <div>
            <Phone size={18} />
            <span>+91 9019916906</span>
          </div>

          <div>
            <MapPin size={18} />
            <span>Chennai, Tamil Nadu</span>
          </div>

        </motion.div>

        {/* Professional Summary */}

        <motion.div
          className="resume-card premium-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >

          <h2>
            <Briefcase size={22} />
            Professional Summary
          </h2>

          <p>
            Second-year B.Tech Computer Science Engineering student
            specializing in Artificial Intelligence and Machine Learning
            at SRM Institute of Science and Technology.
            Experienced in building full-stack applications,
            AI-powered platforms, and scalable backend systems.
            Strong foundation in Data Structures, Algorithms,
            System Design fundamentals, and modern software engineering.
            Passionate about solving real-world problems through AI
            and creating production-ready products.
          </p>

        </motion.div>
                {/* Education */}

        <motion.div
          className="resume-card premium-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >

          <h2>
            <GraduationCap size={22} />
            Education Journey
          </h2>

          <div className="timeline">

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div>
                <h3>
                  B.Tech – Computer Science Engineering
                  (AI & ML)
                </h3>

                <p>
                  SRM Institute of Science and Technology,
                  Kattankulathur
                </p>

                <span>
                  2024 – 2028 • CGPA: 8.2
                </span>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div>
                <h3>12th Board – PCMC</h3>

                <p>
                  Narayana PU College,
                  Ballari, Karnataka
                </p>

                <span>
                  2024 • 85%
                </span>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div>
                <h3>10th Board – CBSE</h3>

                <p>
                  Narayana E-Techno School,
                  Ballari, Karnataka
                </p>

                <span>
                  2022 • 73%
                </span>
              </div>
            </div>

          </div>

        </motion.div>

        {/* Projects */}

        <motion.div
          className="resume-card premium-card"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >

          <h2>
            <Code2 size={22} />
            Featured Projects
          </h2>

          <div className="resume-projects">

            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="resume-project-card"
                whileHover={{
                  y: -8,
                }}
              >
                <h3>{project.title}</h3>

                <p>{project.desc}</p>
              </motion.div>
            ))}

          </div>

        </motion.div>

        {/* Skills */}

        <motion.div
          className="resume-card premium-card"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >

          <h2>
            <Award size={22} />
            Technical Skills
          </h2>

          <div className="skills-cloud">

            {skills.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{
                  scale: 1.08,
                }}
              >
                {skill}
              </motion.span>
            ))}

          </div>

        </motion.div>

        {/* Social Links */}

        <motion.div
          className="resume-socials"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >

          <a
            href="https://github.com/M-Manohar-Reddy30"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={20} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/manoharreddy-ai"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>

        </motion.div>

        {/* Resume Viewer */}

        <motion.div
          className="resume-viewer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >

          <iframe
            src="/resume.pdf"
            title="Resume"
          />

        </motion.div>

        {/* Download Button */}

        <motion.a
          href="/resume.pdf"
          download
          className="download-btn"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >

          <Download size={20} />
          Download Resume

        </motion.a>

      </motion.div>

    </section>
  );
}