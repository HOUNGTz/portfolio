"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  Layers,
  Database,
  Server,
  Monitor,
  Users,
  ShoppingCart,
  LayoutDashboard,
  Briefcase,
} from "lucide-react";

const projects = [
  
  {
    id: 1,
    title: "Solar Rooftop Management System",
    subtitle: "Solar Rooftop Management System for Utility and Regulatory Stakeholders",
    description:
      "Develop frontend interface for solar rooftop management system registation, approval workflow, system monitory and reporting modules for utility and regulatory stakeholder.",
    image: "/assets/eac.png",
    tags: ["Flutter", "Dart"],
    features: [
      {
        icon: ShoppingCart,
        name: "ecoe Marketplace",
        desc: "Consumer-facing marketplace with product listings, cart, and checkout",
      },
      {
        icon: Server,
        name: "eco_service API",
        desc: "Backend REST API with WebSocket support and multi-database",
      },
      {
        icon: LayoutDashboard,
        name: "eco_nuxt Admin",
        desc: "Nuxt.js admin panel for platform management",
      },
      {
        icon: Monitor,
        name: "eco_next Apps",
        desc: "Odoo-like business apps with CRM, Projects, Tasks",
      },
    ],
    github: "https://github.com/povlyhoung/eco-ecosystem",
    live: "#",
    category: "fullstack",
  },
  {
    id: 2,
    title: "EAC App",
    subtitle: "The Electricity Authority of Cambodia's Consumer App",
    description:
      "Contributed to the development of both web and mobile front-end components for the Electricity Authority of Cambodia's EAC App, a utility consumer-focused application available on ios and Android that allows users to monitor electricity usage, view consumption history, and manage billing services. The platform also enables customers to view and pay bills electronically, and request utility services such as new connections, upgrades, and support directly through the mobile interface, improving accessibility and user engagement for nationwide electricity consumers.",
    image: "/assets/eac.png",
    tags: ["Next.js", "Nuxt.js", "Express.js", "MySQL", "Socket.IO", "Supabase"],
    features: [
      {
        icon: ShoppingCart,
        name: "ecoe Marketplace",
        desc: "Consumer-facing marketplace with product listings, cart, and checkout",
      },
      {
        icon: Server,
        name: "eco_service API",
        desc: "Backend REST API with WebSocket support and multi-database",
      },
      {
        icon: LayoutDashboard,
        name: "eco_nuxt Admin",
        desc: "Nuxt.js admin panel for platform management",
      },
      {
        icon: Monitor,
        name: "eco_next Apps",
        desc: "Odoo-like business apps with CRM, Projects, Tasks",
      },
    ],
    github: "https://github.com/povlyhoung/eco-ecosystem",
    live: "#",
    category: "fullstack",
  },
  {
    id: 3,
    title: "Mobile Spot Billing App",
    subtitle: "Full-Stack E-commerce Platform",
    description:
      "Built cross-platform Flutter mobile applications used by field officers for on-site electricity and water billing, meter reading, and real-time data synchronization.",
    image: "/assets/ewater.png",
    tags: ["Flutter", "Dart"],
    features: [
      {
        icon: ShoppingCart,
        name: "ecoe Marketplace",
        desc: "Consumer-facing marketplace with product listings, cart, and checkout",
      },
      {
        icon: Server,
        name: "eco_service API",
        desc: "Backend REST API with WebSocket support and multi-database",
      },
      {
        icon: LayoutDashboard,
        name: "eco_nuxt Admin",
        desc: "Nuxt.js admin panel for platform management",
      },
      {
        icon: Monitor,
        name: "eco_next Apps",
        desc: "Odoo-like business apps with CRM, Projects, Tasks",
      },
    ],
    github: "https://github.com/povlyhoung/eco-ecosystem",
    live: "#",
    category: "fullstack",
  },
  {
    id: 4,
    title: "JRMS",
    subtitle: "Job Recruitment Management System",
    description:
      "A full-stack web application for managing job postings, applications, and candidate tracking. Features role-based access control, interview scheduling, and analytics dashboard.",
    image: "/assets/jrms.png",
    tags: ["React", "Node.js", "Express.js", "PostgreSQL", "JWT", "Redux"],
    features: [
      {
        icon: Briefcase,
        name: "Job Management",
        desc: "Create, edit, and manage job postings with rich text editor",
      },
      {
        icon: Users,
        name: "Candidate Tracking",
        desc: "Track applicants through the hiring pipeline",
      },
      {
        icon: Database,
        name: "Analytics Dashboard",
        desc: "Insights and metrics on recruitment performance",
      },
      {
        icon: Layers,
        name: "Role-Based Access",
        desc: "Admin, HR, and Manager permission levels",
      },
    ],
    github: "https://github.com/povlyhoung/jrms",
    live: "#",
    category: "fullstack",
  },
  {
    id: 5,
    title: "Eco Ecosystem",
    subtitle: "Full-Stack E-commerce Platform",
    description:
      "A comprehensive e-commerce ecosystem with marketplace, admin dashboard, and business management apps. Built with modern technologies featuring real-time chat, WebRTC video calls, and multi-database architecture.",
    image: "/projects/eco-ecosystem.png",
    tags: ["Next.js", "Nuxt.js", "Express.js", "MySQL", "Socket.IO", "Supabase"],
    features: [
      {
        icon: ShoppingCart,
        name: "ecoe Marketplace",
        desc: "Consumer-facing marketplace with product listings, cart, and checkout",
      },
      {
        icon: Server,
        name: "eco_service API",
        desc: "Backend REST API with WebSocket support and multi-database",
      },
      {
        icon: LayoutDashboard,
        name: "eco_nuxt Admin",
        desc: "Nuxt.js admin panel for platform management",
      },
      {
        icon: Monitor,
        name: "eco_next Apps",
        desc: "Odoo-like business apps with CRM, Projects, Tasks",
      },
    ],
    github: "https://github.com/povlyhoung/eco-ecosystem",
    live: "#",
    category: "fullstack",
  },
];

const categories = [
  { id: "all", name: "All Projects" },
  { id: "fullstack", name: "Full-Stack" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
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
              Featured Projects
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4"
            >
              Things I&apos;ve <span className="text-gradient">Built</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
            >
              A showcase of my most impactful projects, demonstrating my skills
              in full-stack development
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.15 }}
                className={`group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-800 shadow-xl border border-slate-200/50 dark:border-slate-700/50 ${
                  expandedProject === project.id ? "ring-2 ring-primary-500" : ""
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Project Image */}
                  <div className="relative h-64 lg:h-auto min-h-[300px] overflow-hidden bg-gradient-to-br from-primary-500/10 to-accent-500/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg">
                          <Layers color="white"/>
                        </div>
                        <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                          {project.title}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Content */}
                  <div className="p-8 lg:p-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-1">
                          {project.title}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {project.features.map((feature) => (
                        <div
                          key={feature.name}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                            <feature.icon className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                          </div>
                          <div>
                            <h5 className="text-sm font-semibold text-slate-800 dark:text-white">
                              {feature.name}
                            </h5>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              {feature.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-slate-900 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors"
                      >
                        <Github size={16} />
                        <span className="text-sm font-medium">View Code</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg hover:shadow-lg transition-all"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Projects Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/povlyhoung"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
            >
              <span>View more on GitHub</span>
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
