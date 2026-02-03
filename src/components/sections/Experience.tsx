"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, ExternalLink, Code2 } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Software Developer",
    company: "E-Power CCL., Co.Ltd",
    companyUrl: "https://www.e-power.com.kh/",
    location: "Phnom Penh, Cambodia",
    duration: "04/December/2023 - Present",
    type: "Full-Time",
    description:
      "Working on web and mobile app development projects, building modern applications using Flutter/Dart, C# .NetCore, and various databases. Collaborating with senior developers to deliver high-quality software solutions.",
    responsibilities: [
      "Developing and maintaining web and mobile applications using Flutter/Dart",
      "Building RESTful APIs and integrating with PostgreSQL databases",
      "Integration of third-party services and APIs like payment gateways and mapping services",
      "Implementing real-time features using Socket.IO and WebRTC",
      "Collaborating with the team on code reviews and technical discussions",
      "Writing clean, maintainable, and well-documented code",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Supabase",
      "Socket.IO",
    ],
    current: true,
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "NextGen (Freelancer)",
    companyUrl: "https://www.nextgen.com/",
    location: "Phnom Penh, Cambodia",
    duration: "01/January/2025 - Present",
    type: "Part-Time",
    description:
      "Working on web and mobile app development projects, building modern applications using Flutter/Dart, Node Js, Next Js, Nuxt Js, and various databases. Collaborating with senior developers to deliver high-quality software solutions.",
    responsibilities: [
      "Developing and maintaining web and mobile applications using Flutter/Dart",
      "Building RESTful APIs and integrating with PostgreSQL databases",
      "Implementing real-time features using Socket.IO and WebRTC",
      "Collaborating with the team on code reviews and technical discussions",
      "Writing clean, maintainable, and well-documented code",
    ],
    technologies: [
      "HTML / CSS / JavaScript",
      "Laravel / PHP",
      "Vue.js / Nuxt.js",
      "React / Next.js",
      "JavaScript / Node.js",
      "Express.js",
      "MySQL",
      "Postgress",
      "Supabase / Firebase",
      "Socket.IO",
      "WebRTC",
      "Flutter / Dart",
    ],
    current: true,
  },
  

];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding">
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
              Work Experience
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4"
            >
              My Professional <span className="text-gradient">Journey</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
            >
              Building real-world experience through hands-on development work
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 border-4 border-white dark:border-slate-900 shadow-lg z-10">
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-75" />
                  )}
                </div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-[calc(50%-2rem)] ml-8 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50"
                  >
                    {/* Current Badge */}
                    {exp.current && (
                      <div className="absolute -top-3 right-6 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-medium rounded-full shadow-lg">
                        Currently Working
                      </div>
                    )}

                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
                        {exp.role}
                      </h3>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-primary-600 dark:text-primary-400 font-medium hover:underline"
                      >
                        <span>{exp.company}</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Briefcase size={14} />
                        <span>{exp.type}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center space-x-2">
                        <Code2 size={14} />
                        <span>Key Responsibilities</span>
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start space-x-2 text-sm text-slate-600 dark:text-slate-400"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
