import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const ROWS = [
  [
    { title: "Programming Languages", items: ["Python", "C", "C++", "Java"] },
    { title: "Web Technologies", items: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "API Integration", "Node.js", "Express.js", "Auth (JWT, bcrypt)", "Middleware & Routing", "REST API Design"] },
    { title: "Databases & Tools", items: ["MySQL", "MongoDB + Mongoose", "Git"] },
    { title: "Frameworks & Libraries", items: ["TensorFlow", "PyTorch", "OpenCV"] },
    { title: "DevOps / Deployment", items: ["Vercel", "Netlify", "Render"] },
    { title: "Core Concepts", items: ["Data Structures & Algorithms", "OOPs"] },
    { title: "Soft Skills", items: ["Teamwork", "Problem Solving", "Creativity", "Adaptability", "Communication"] },
  ],
];

export default function Skills() {
  return (
    <section className="skills-container" id="skills">

      {/* Header */}
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl text-cyan-400 font-semibold mb-3">My Skills</h2>
        <div className="w-28 h-[2px] bg-cyan-400 mx-auto mb-6"></div>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          A structured list of my technical skills and core expertise.
        </p>
      </motion.div>

      {/* Skills Table */}
      <div className="skills-table">
        {ROWS.map((row, rowIndex) => (
          <div key={rowIndex} className="skills-row">
            {row.map((col, colIndex) => (
              <motion.div
                key={col.title}
                className="skill-box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, delay: (rowIndex + colIndex) * 0.1 }}
              >
                <h3>{col.title}</h3>
                <ul>
                  {col.items.map((item, i) => (
                    <motion.li key={i} whileHover={{ x: 6, color: "#00ffc8" }}>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

    </section>
  );
}
