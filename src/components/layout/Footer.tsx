"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Heart, ArrowUp } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/povlyhoung",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/povlyhoung",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:povlyhoung02@gmail.com",
    label: "Email",
  },
  {
    icon: Phone,
    href: "tel:+855089826667",
    label: "Phone",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-900 dark:bg-slate-950 text-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-accent-900/20" />

      <div className="relative container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-gradient">Houng.dev</span>
            </Link>
            <p className="text-slate-400 max-w-md mb-6">
              Full-Stack Developer passionate about creating beautiful, functional,
              and user-friendly applications. Let&apos;s build something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-primary-600 text-slate-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors animated-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-slate-400">
                <Mail size={16} className="text-primary-400" />
                <a
                  href="mailto:povlyhoung02@gmail.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  povlyhoung02@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Phone size={16} className="text-primary-400" />
                <a
                  href="tel:+855089826667"
                  className="hover:text-primary-400 transition-colors"
                >
                  +855 89 826 667
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm flex items-center">
            © {new Date().getFullYear()} Povly Houng. Made with
            <Heart size={14} className="mx-1 text-red-500 fill-red-500" />
            in Cambodia
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-slate-400 hover:text-primary-400 transition-colors"
          >
            <span className="text-sm">Back to top</span>
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
