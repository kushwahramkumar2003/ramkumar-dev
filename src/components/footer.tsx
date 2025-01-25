import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const personalInfo = {
    name: "Ramkumar Kushwah",
    role: "Full Stack Developer | Blockchain Enthusiast | Open Source Contributor",
    location: "Ashoknagar, M.P.",
    email: "kushwahramkumar2003@gmail.com",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "Solidity",
      "Ethereum",
      "Web3",
      "Rust",
      "PostgreSQL",
    ],
    socialLinks: {
      github: "https://github.com/kushwahramkumar2003",
      linkedin: "https://www.linkedin.com/in/ramkumar_9301",
      twitter: "https://x.com/ramkumar_9301",
    },
    description:
      "I am a passionate developer with a strong background in full-stack development, Web3 technologies, and open-source contributions. My expertise lies in building scalable, secure, and user-centric applications.",
  };

  const SocialIcon = ({
    href,
    icon: Icon,
    label,
    colorClass,
  }: {
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    colorClass?: string;
  }) => (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`
        group
        relative
        inline-flex
        items-center
        justify-center
        w-12
        h-12
        rounded-full
        transition-all
        duration-300
        ease-in-out
        bg-background/20
        hover:bg-primary/10
        border
        border-primary/20
        hover:border-primary/40
        ${colorClass}
      `}
    >
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-br
        from-transparent
        via-primary/10
        to-transparent
        opacity-0
        group-hover:opacity-50
        rounded-full
        blur-lg
        transition-all
        duration-300
      "
      />
      <Icon
        className={`
        text-2xl
        text-foreground/70
        group-hover:text-primary
        group-hover:scale-110
        transition-all
        duration-300
        relative
        z-10
      `}
      />
      <span
        className="
        absolute
        -bottom-8
        left-1/2
        -translate-x-1/2
        bg-background/80
        text-foreground/70
        text-xs
        px-2
        py-1
        rounded-md
        opacity-0
        group-hover:opacity-100
        transition-all
        duration-300
        pointer-events-none
        whitespace-nowrap
      "
      >
        {label}
      </span>
    </Link>
  );

  return (
    <footer
      className="
        bg-background/70
        backdrop-blur-sm
        border-t
        border-primary/20
        py-8
        mt-8
        text-center
        rounded-md
        shadow-sm
      "
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-6">
          <p
            className="
              text-base 
              md:text-lg 
              text-foreground/80 
              tracking-tight
            "
          >
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>

          <div
            className="
              flex 
              justify-center 
              items-center 
              space-x-6 
              mt-4
            "
          >
            <SocialIcon
              href={personalInfo.socialLinks.github}
              icon={FaGithub}
              label="GitHub Profile"
            />
            <SocialIcon
              href={personalInfo.socialLinks.linkedin}
              icon={FaLinkedin}
              label="LinkedIn Profile"
            />
            <SocialIcon
              href={personalInfo.socialLinks.twitter}
              icon={FaXTwitter}
              label="Twitter Profile"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
