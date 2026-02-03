"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "Flutter / Dart", level: 90, icon: "🟦" },
      { name: "React", level: 85, icon: "⚛️" },
      { name: "Next.js", level: 80, icon: "▲" },
      { name: "Vue / Nuxt.js", level: 70, icon: "💚" },
      { name: "JavaScript / Node.js", level: 90, icon: "🟨" },
      { name: "TypeScript", level: 70, icon: "📘" },
      { name: "Tailwind CSS", level: 90, icon: "🎨" },
      { name: "HTML / CSS", level: 95, icon: "🌐" },
      { name: "Sass / SCSS", level: 80, icon: "🎭" },
      { name: "Bootstrap", level: 70, icon: "🅱️" },
      { name: "Laravel / PHP", level: 65, icon: "🔷" },
      { name: "Java/Kotlin", level: 55, icon: "🤖" },
      { name: "Swift", level: 50, icon: "📱" },
      { name: "MySQL / PostgreSQL", level: 60, icon: "🐬🐘" },
      { name: "C# / .NetCore", level: 50, icon: "🖌️" },

    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85, icon: "🟢" },
      { name: "Express.js", level: 85, icon: "⚡" },
      { name: "REST APIs", level: 70, icon: "🔗" },
      { name: "Laravel", level: 60, icon: "🌹" },
      { name: "Python", level: 50, icon: "🐍" },
      { name: "Django", level: 50, icon: "🎸" },
      { name: "C# .NetCore", level: 50, icon: "◈" },
    ],
  },
  {
    name: "Database & Cloud",
    skills: [
      { name: "MySQL", level: 85, icon: "🐬" },
      { name: "PostgreSQL", level: 80, icon: "🐘" },
      { name: "Supabase", level: 80, icon: "⚡" },
      { name: "Firebase", level: 75, icon: "🔥" },
      { name: "Redis", level: 65, icon: "📦" },
    ],
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git/GitHub/GitLab", level: 90, icon: "🐙" },
      { name: "Docker/Kubernetes", level: 70, icon: "🐳" },
      { name: "VS Code/Android Studio/IntelliJ/...", level: 95, icon: "💻" },
      { name: "Figma/Adobe XD/Canvas", level: 70, icon: "🎨" },
      { name: "Socket.IO", level: 80, icon: "🔌" },
      { name: "CI/CD", level: 60, icon: "🚀" },
      { name: "Ai ven Server Hosting", level: 85, icon: "🏃‍♂️" },
      { name: "Render Server Hosting", level: 65, icon: "🧪" },
      { name: "PgBouncer + Postgres Personal server for Postgres", level: 50, icon: "🐧" },
      { name: "Nginx", level: 70, icon: "🌀" },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="inline-block px-4 py-2 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 text-sm font-medium mb-4"
            >
              Skills & Technologies
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4"
            >
              My Technical <span className="text-gradient">Arsenal</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
            >
              A comprehensive toolkit of modern technologies I use to build
              exceptional digital experiences
            </motion.p>
          </div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {skillCategories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === index
                    ? "bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
                className="group p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-semibold text-slate-800 dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* All Technologies Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-6">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Vue.js",
                "Nuxt.js",
                "Node.js",
                "Express.js",
                "Python",
                "Django",
                "MySQL",
                "PostgreSQL",
                "MongoDB",
                "Supabase",
                "Tailwind CSS",
                "SCSS",
                "Git",
                "Docker",
                "Socket.IO",
                "REST APIs",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
