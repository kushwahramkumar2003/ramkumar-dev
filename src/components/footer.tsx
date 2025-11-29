import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 pt-8 pb-12 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-muted-foreground/60 gap-6 md:gap-0">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
          <p>&copy; {new Date().getFullYear()} Ramkumar Kushwah.</p>
          <span className="hidden sm:block text-white/10">|</span>
        </div>

        <div className="flex gap-6 font-medium">
          <Link
            href="https://github.com/kushwahramkumar2003"
            target="_blank"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/ramkumar9301"
            target="_blank"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="https://x.com/ramkumar_9301"
            target="_blank"
            className="hover:text-foreground transition-colors"
          >
            Twitter
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
