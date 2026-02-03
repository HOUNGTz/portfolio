"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Briefcase, GraduationCap, Globe } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    label: "Projects Built",
    value: "10+",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Briefcase,
    label: "Years Coding",
    value: "3+",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: GraduationCap,
    label: "Technologies",
    value: "15+",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Globe,
    label: "Languages",
    value: "3",
    color: "from-green-500 to-emerald-500",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-slate-50/50 dark:bg-slate-900/50">
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
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4"
            >
              Passionate Developer with a{" "}
              <span className="text-gradient">Vision</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
            >
              Building the future of web applications, one line of code at a time
            </motion.p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                I&apos;m a dedicated Full-Stack Developer currently pursuing my Bachelor&apos;s
                degree in Software Development at{" "}
                <span className="font-semibold text-primary-600 dark:text-primary-400">
                  Norton University
                </span>{" "}
                (2021-2025). My journey in tech started with a curiosity for how things
                work, which quickly evolved into a passion for building them.
              </p>

              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Currently interning at{" "}
                <span className="font-semibold text-primary-600 dark:text-primary-400">
                  E-Power CCL., Co.Ltd
                </span>{" "}
                through Codingate since December 2023, I&apos;ve been honing my skills in
                creating robust, scalable applications. I specialize in modern
                JavaScript frameworks and love turning complex problems into simple,
                elegant solutions.
              </p>

              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me reading tech blogs, tackling
                coding challenges, hiking in nature, or developing my leadership
                skills. I believe in continuous learning and pushing the boundaries
                of what&apos;s possible in web development.
              </p>

              {/* Languages */}
              <div className="pt-4">
                <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                  Languages I Speak
                </h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm border border-slate-200 dark:border-slate-700">
                    🇰🇭 Khmer (Native)
                  </span>
                  <span className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm border border-slate-200 dark:border-slate-700">
                    🇬🇧 English (Fluent)
                  </span>
                  <span className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm border border-slate-200 dark:border-slate-700">
                    🇨🇳 Chinese (Basic)
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-6"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                  <div className="relative p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50 text-center">
                    <div
                      className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                    >
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-slate-800 dark:text-white mb-1">
                      {item.value}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      {item.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
