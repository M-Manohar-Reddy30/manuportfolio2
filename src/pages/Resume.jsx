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

          <h1>
            M Manohar Reddy
          </h1>

          <h3>
            Software Engineer • MERN Stack Developer • AI/ML Enthusiast
          </h3>

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