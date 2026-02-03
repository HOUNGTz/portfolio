"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "Bachelor's Degree in Software Development",
    institution: "Norton University",
    location: "Phnom Penh, Cambodia",
    duration: "2021 - 2025",
    status: "Completed",
    description:
      "Pursuing a comprehensive degree in Software Development with focus on web technologies, database systems, and software engineering principles.",
    courses: [
      "Data Structures & Algorithms",
      "Web Development",
      "Database Management Systems",
      "Software Engineering",
      "Object-Oriented Programming",
      "Computer Networks",
    ],
    achievements: [
      "Consistently maintained strong academic performance",
      "Participated in coding competitions and hackathons",
      "Developed multiple projects as part of curriculum",
    ],
  },
  {
    id: 2,
    degree: "Master's Degree in Software Development",
    institution: "Norton University",
    location: "Phnom Penh, Cambodia",
    duration: "2026 - now",
    status: "In Progress",
    description:
      "Pursuing a comprehensive degree in Software Development with focus on web technologies, database systems, and software engineering principles.",
    courses: [
      "Data Structures & Algorithms",
      "Web Development",
      "Database Management Systems",
      "Software Engineering",
      "Object-Oriented Programming",
      "Computer Networks",
    ],
    achievements: [
      "Consistently maintained strong academic performance",
      "Participated in coding competitions and hackathons",
      "Developed multiple projects as part of curriculum",
    ],
  },
];

const certifications = [
  {
    name: "Full-Stack Web Development",
    issuer: "Self-Learning & Practice",
    date: "2023",
    icon: "🎓",
  },
  {
    name: "React & Next.js Mastery",
    issuer: "Online Courses & Projects",
    date: "2023",
    icon: "⚛️",
  },
  {
    name: "Node.js Backend Development",
    issuer: "Practical Experience",
    date: "2023",
    icon: "🟢",
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      className="section-padding bg-slate-50/50 dark:bg-slate-900/50"
    >
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
              className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4"
            >
              Education
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4"
            >
              Academic <span className="text-gradient">Background</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
            >
              Building a strong foundation in computer science and software development
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Education Card */}
            <div className="lg:col-span-2">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="relative"
                >
                  <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200/50 dark:border-slate-700/50">
                    {/* Status Badge */}
                    <div className="absolute -top-3 right-8 px-4 py-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-medium rounded-full shadow-lg">
                      {edu.status}
                    </div>

                    {/* Header */}
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg">
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                      {edu.description}
                    </p>

                    {/* Courses */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center space-x-2">
                        <BookOpen size={14} />
                        <span>Key Courses</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-xs font-medium"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center space-x-2">
                        <Award size={14} />
                        <span>Achievements</span>
                      </h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start space-x-2 text-sm text-slate-600 dark:text-slate-400"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-1.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6 flex items-center space-x-2">
                  <Award className="w-5 h-5 text-primary-500" />
                  <span>Skills & Learning</span>
                </h3>

                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">{cert.icon}</span>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                            {cert.name}
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                      <div className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                        {cert.date}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="p-6 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl shadow-xl text-white">
                <h3 className="text-lg font-bold mb-4">Learning Journey</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Years of Study</span>
                    <span className="font-bold">4+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Projects Completed</span>
                    <span className="font-bold">10+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Technologies Learned</span>
                    <span className="font-bold">15+</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
