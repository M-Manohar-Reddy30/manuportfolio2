import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "../CSS/Contact.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaClock,
  FaLaptopCode,
} from "react-icons/fa";

import "../CSS/Contact.css";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const contactCards = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "manoharreddyind@gmail.com",
      link: "mailto:manoharreddyind@gmail.com",
    },

    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      value: "+91 9019916906",
      link: "https://wa.me/919019916906",
    },

    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "Connect Professionally",
      link: "https://www.linkedin.com/in/manoharreddy-ai",
    },

    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "View Projects",
      link: "https://github.com/M-Manohar-Reddy30",
    },
  ];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.contact ||
      !form.subject ||
      !form.message
    ) {
      setStatus("⚠️ Please fill all fields");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          contact_info: form.contact,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {

        setLoading(false);

        setStatus(
          "✅ Message sent successfully. I will get back to you soon."
        );

        setForm({
          name: "",
          contact: "",
          subject: "",
          message: "",
        });

      })
      .catch((err) => {

        console.error(err);

        setLoading(false);

        setStatus(
          "❌ Something went wrong. Please try again."
        );
      });
  };
    return (
    <section className="contact-section">

      {/* Background Effects */}

      <div className="contact-glow glow-1"></div>
      <div className="contact-glow glow-2"></div>

      {/* Hero */}

      <motion.div
        className="contact-hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <span className="contact-badge">
          LET'S BUILD SOMETHING AMAZING
        </span>

        <h1 className="contact-title">
          Let's Connect &
          <span> Collaborate</span>
        </h1>

        <p className="contact-subtitle">
          Whether you're looking for an AI Engineer,
          Full Stack Developer, project collaborator,
          internship candidate, or simply want to discuss
          technology and innovation, I'm always open
          to meaningful conversations.
        </p>

      </motion.div>

      {/* Info Cards */}

      <div className="contact-info-grid">

        {contactCards.map((card, index) => (
          <motion.a
            href={card.link}
            target="_blank"
            rel="noreferrer"
            key={index}
            className="contact-info-card"
            whileHover={{
              y: -10,
            }}
          >
            <div className="contact-icon">
              {card.icon}
            </div>

            <h3>{card.title}</h3>

            <p>{card.value}</p>
          </motion.a>
        ))}

      </div>

      {/* Main Contact Area */}

      <div className="contact-main">

        {/* Left Side */}

        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >

          <h2>Why Work With Me?</h2>

          <div className="contact-feature">

            <FaLaptopCode />

            <div>
              <h4>Full Stack Development</h4>
              <p>
                Modern React, Node.js, FastAPI,
                MongoDB and PostgreSQL solutions.
              </p>
            </div>

          </div>

          <div className="contact-feature">

            <FaMapMarkerAlt />

            <div>
              <h4>Location</h4>
              <p>
                Chennai, Tamil Nadu, India
              </p>
            </div>

          </div>

          <div className="contact-feature">

            <FaClock />

            <div>
              <h4>Availability</h4>
              <p>
                Open for internships,
                freelance work and collaborations.
              </p>
            </div>

          </div>

        </motion.div>

        {/* Contact Form */}

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >

          <h2>Send Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="contact"
            placeholder="Email Address"
            value={form.contact}
            onChange={handleChange}
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Tell me about your project..."
            value={form.message}
            onChange={handleChange}
          />

          <motion.button
            type="submit"
            className="contact-btn"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {loading ? (
              "Sending..."
            ) : (
              <>
                <FaPaperPlane />
                Send Message
              </>
            )}
          </motion.button>

          {status && (
            <p className="contact-status">
              {status}
            </p>
          )}

        </motion.form>

      </div>
            {/* Footer CTA */}

      <motion.div
        className="contact-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >

        <h2>
          Ready to Build Something Great?
        </h2>

        <p>
          Let's transform ideas into real-world
          products through technology, innovation,
          and creativity.
        </p>

      </motion.div>

    </section>
  );
}