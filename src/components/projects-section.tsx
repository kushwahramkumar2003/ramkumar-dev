import React from "react";
import Link from "next/link";

const projects = [
  {
    title: "Sol-Indexer",
    description:
      "Scalable, event-driven system for indexing Solana blockchain data using microservices.",
    link: "https://sol-indexer-web.vercel.app/",
    github: "https://github.com/kushwahramkumar2003/sol-indexer",
    status: "2024",
    tech: [
      { name: "Rust", link: "https://www.rust-lang.org/" },
      { name: "Kafka", link: "https://kafka.apache.org/" },
      { name: "PostgreSQL", link: "https://www.postgresql.org/" },
    ],
  },
  {
    title: "Auto-SOL",
    description:
      "Automated recurring payments platform on Solana with an intuitive calendar interface.",
    link: "https://auto-sol-web.vercel.app",
    github: "https://github.com/kushwahramkumar2003/auto-sol",
    status: "In Progress",
    tech: [
      { name: "Solana", link: "https://solana.com/" },
      { name: "Anchor", link: "https://www.anchor-lang.com/" },
      { name: "Next.js", link: "https://nextjs.org/" },
    ],
  },
  {
    title: "ApologyStake",
    description:
      "DeFi protocol where offenders lock SOL/NFTs as a 'repentance stake' releasable by victims.",
    link: "https://apology-stake.vercel.app/",
    github: "https://github.com/kushwahramkumar2003/ApologyStake",
    status: "2024",
    tech: [
      { name: "Next.js", link: "https://nextjs.org/" },
      { name: "Solana", link: "https://solana.com/" },
      { name: "Rust", link: "https://www.rust-lang.org/" },
    ],
  },
  {
    title: "Patreonix",
    description:
      "Decentralized subscription-based platform built on Solana for content creators.",
    link: "https://creatorpatreonix.vercel.app/",
    github: "https://github.com/kushwahramkumar2003/Patreonix",
    status: "In Progress",
    tech: [
      { name: "Solana", link: "https://solana.com/" },
      { name: "Rust", link: "https://www.rust-lang.org/" },
    ],
  },
  {
    title: "Photofix",
    description: "SaaS platform for advanced image processing and editing.",
    link: "https://www.photofix.in.net/",
    github: "https://github.com/kushwahramkumar2003/photofix",
    status: "2023",
    tech: [
      { name: "Next.js", link: "https://nextjs.org/" },
      { name: "Tailwind", link: "https://tailwindcss.com/" },
    ],
  },
  {
    title: "Brainwave",
    description:
      "AI-powered knowledge management system for organizing information efficiently.",
    link: "https://brainwave-web-app.vercel.app/",
    github: "https://github.com/kushwahramkumar2003/brainwave-web",
    status: "2023",
    tech: [
      { name: "React", link: "https://react.dev/" },
      { name: "Node.js", link: "https://nodejs.org/" },
      { name: "AI/ML", link: "#" },
    ],
  },
  {
    title: "SketchFrame",
    description: "Collaborative drawing app similar to Excalidraw.",
    link: "#",
    github: "https://github.com/kushwahramkumar2003/SketchFrame",
    status: "2023",
    tech: [
      { name: "NextJS", link: "https://nextjs.org/" },
      {
        name: "WebSocket",
        link: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
      },
      { name: "Prisma", link: "https://www.prisma.io/" },
    ],
  },
  {
    title: "AllIndiaCart",
    description:
      "Robust e-commerce platform supporting cryptocurrency payments.",
    link: "https://e-commerce-web-drab.vercel.app/",
    github: "https://github.com/kushwahramkumar2003/All-India-Cart",
    status: "2023",
    tech: [
      { name: "NextJS", link: "https://nextjs.org/" },
      { name: "Solana", link: "https://solana.com/" },
      { name: "MongoDB", link: "https://www.mongodb.com/" },
    ],
  },
  {
    title: "Pragati UI",
    description:
      "A comprehensive React component library designed with Tailwind CSS and Framer Motion.",
    link: "https://pragati-ui.vercel.app/",
    github: "https://github.com/kushwahramkumar2003/PragatiUI",
    status: "2023",
    tech: [
      { name: "React", link: "https://react.dev/" },
      { name: "Tailwind", link: "https://tailwindcss.com/" },
      { name: "Framer Motion", link: "https://www.framer.com/motion/" },
    ],
  },
  {
    title: "Anonymous Chat",
    description: "A real-time anonymous chat application using WebSockets.",
    link: "https://anonymous-chat-web-frontend.vercel.app/",
    github: "https://github.com/kushwahramkumar2003/Anonymous-Chat-Front-end",
    status: "2023",
    tech: [
      { name: "React", link: "https://react.dev/" },
      { name: "Tailwind", link: "https://tailwindcss.com/" },
      {
        name: "WebSocket",
        link: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
      },
    ],
  },
  {
    title: "DevRouteRK",
    description: "A platform providing curated resources for developers.",
    link: "https://dev-routes-rk.netlify.app/",
    github: "https://github.com/kushwahramkumar2003/DevRouteRK",
    status: "2023",
    tech: [
      { name: "React", link: "https://react.dev/" },
      { name: "NodeJS", link: "https://nodejs.org/" },
      { name: "MongoDB", link: "https://www.mongodb.com/" },
    ],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="mb-16">
      <h2 className="text-lg font-medium mb-8 text-foreground">
        Selected Projects
      </h2>

      <div className="flex flex-col space-y-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-8"
          >
            <div className="flex flex-col gap-2 sm:max-w-[65%]">
              <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center gap-2 mt-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech.name}
                    className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-[2px] bg-[#111] border border-white/5 text-muted-foreground font-medium"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-row sm:flex-col justify-between sm:justify-start sm:items-end gap-1 mt-2 sm:mt-0 min-w-[100px]">
              <span className="text-xs font-mono text-muted-foreground/50 mb-1">
                {project.status}
              </span>

              <div className="flex gap-4 sm:gap-3 text-xs font-medium">
                {project.link && project.link !== "#" && (
                  <Link
                    href={project.link}
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    View
                  </Link>
                )}
                <Link
                  href={project.github}
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Code
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link
          href="https://github.com/kushwahramkumar2003?tab=repositories"
          target="_blank"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
        >
          View full project archive <span className="text-[10px]">→</span>
        </Link>
      </div>
    </section>
  );
}

export default ProjectsSection;
