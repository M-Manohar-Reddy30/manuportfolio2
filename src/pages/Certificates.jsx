import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../CSS/Certificates.css";

const CERTS = {
  tech: [
    {
      title: "Full Stack Development",
      org: "Apna College",
      date: "2025",
      img: "/certs/apna.png",
      verified: true,
      level: "Professional",
      skills: [
        "React",
        "Node.js",
        "MongoDB",
        "JavaScript"
      ]
    },

    {
      title: "Data Structures & Algorithms",
      org: "Apna College",
      date: "2025",
      img: "/certs/DSA_with_Java.png",
      verified: true,
      level: "Professional",
      skills: [
        "Java",
        "DSA",
        "Algorithms",
        "Problem Solving"
      ]
    }
  ],

  other: [
    {
      title: "Media Coordinator",
      org: "Directorate Of SRMIST Hostels",
      date: "2024",
      img: "/certs/dohmedia.jpg",
      verified: true,
      level: "Leadership",
      skills: [
        "Leadership",
        "Media",
        "Event Management"
      ]
    },

    {
      title: "Sports Coordinator",
      org: "Directorate Of SRMIST Hostels",
      date: "2025",
      img: "/certs/dohsports.jpg",
      verified: true,
      level: "Leadership",
      skills: [
        "Sports",
        "Teamwork",
        "Leadership"
      ]
    }
  ]
};

export default function Certificates() {
  const [tab, setTab] = useState("tech");
  const [selectedCert, setSelectedCert] = useState(null);

  const totalCerts =
    CERTS.tech.length +
    CERTS.other.length;

  return (
  <section className="certificates-page">

    {/* Background Effects */}

    <div className="cert-bg-orb orb-1"></div>
    <div className="cert-bg-orb orb-2"></div>
    <div className="cert-bg-orb orb-3"></div>

    <motion.div
      className="cert-hero"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >

      <h1>
        Certifications & <span> Achievements</span>
      </h1>

      <p>
        A showcase of my professional
        certifications, technical learning,
        leadership achievements and
        continuous growth journey.
      </p>

    </motion.div>

    {/* Statistics */}


    <div className="cert-stats">

{/*}
      <motion.div
        className="stat-card"
        whileHover={{ y: -8 }}
      >
        <h2>{totalCerts}+</h2>
        <span>Certificates</span>
      </motion.div>

      <motion.div
        className="stat-card"
        whileHover={{ y: -8 }}
      >
        <h2>AI / ML</h2>
        <span>Specialization</span>
      </motion.div>

      <motion.div
        className="stat-card"
        whileHover={{ y: -8 }}
      >
        <h2>Full Stack</h2>
        <span>Development</span>
      </motion.div>

*/}
    </div>

    {/* Tabs */}

    <div className="cert-tabs">

      <button
        onClick={() => setTab("tech")}
        className={
          tab === "tech"
            ? "cert-tab active"
            : "cert-tab"
        }
      >
        Tech Certifications
      </button>

      <button
        onClick={() => setTab("other")}
        className={
          tab === "other"
            ? "cert-tab active"
            : "cert-tab"
        }
      >
        Leadership & Activities
      </button>

    </div>

    {/* Grid */}

    <div className="cert-grid">

      <AnimatePresence mode="wait">

        {CERTS[tab].map((cert, idx) => (
          <motion.div
            key={cert.title}
            className="premium-cert-card"
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -20
            }}
            transition={{
              delay: idx * 0.1
            }}
            whileHover={{
              y: -12
            }}
          >
                        <div className="cert-image-wrapper">

              <img
                src={cert.img}
                alt={cert.title}
                className="cert-image"
              />

              <div className="cert-overlay">
                <button
                  className="preview-btn"
                  onClick={() =>
                    setSelectedCert(cert)
                  }
                >
                  View Certificate
                </button>
              </div>

            </div>

            <div className="cert-content">

              <div className="verified-badge">
                ✓ Verified Credential
              </div>

              <h3>
                {cert.title}
              </h3>

              <p className="cert-org">
                {cert.org}
              </p>

              <div className="cert-meta">

                <span>
                  📅 {cert.date}
                </span>

                <span>
                  🎖 {cert.level}
                </span>

              </div>

              <div className="skills-container">

                {cert.skills.map(
                  (skill, index) => (
                    <span
                      key={index}
                      className="skill-pill"
                    >
                      {skill}
                    </span>
                  )
                )}

              </div>

            </div>

          </motion.div>
        ))}

      </AnimatePresence>

    </div>

    {/* Modal */}

    <AnimatePresence>

      {selectedCert && (

        <motion.div
          className="cert-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() =>
            setSelectedCert(null)
          }
        >

          <motion.div
            className="cert-modal-content"
            initial={{
              scale: 0.8,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            exit={{
              scale: 0.8,
              opacity: 0
            }}
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="close-btn"
              onClick={() =>
                setSelectedCert(null)
              }
            >
              ✕
            </button>

            <img
              src={selectedCert.img}
              alt={selectedCert.title}
              className="modal-image"
            />

            <div className="modal-info">

              <h2>
                {selectedCert.title}
              </h2>

              <p>
                {selectedCert.org}
              </p>

              <span>
                Issued: {selectedCert.date}
              </span>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

  </section>
);
}