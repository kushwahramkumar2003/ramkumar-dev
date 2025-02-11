import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GitHubLogoIcon, LinkBreak2Icon } from "@radix-ui/react-icons";

const projects = [
  {
    title: "ApologyStake",
    description:
      'ApologyStake where offenders lock SOL/NFTs as a "repentance stake." Victims can release funds after a probation period.',
    image: "/ApologyStake.png",
    link: "https://apology-stake.vercel.app/",
    githubRepo: "https://github.com/kushwahramkumar2003/ApologyStake",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Solana", "Rust"],
    status: "In Progress",
  },
  {
    title: "Patreonix",
    description: "A decentralized subscription-based platform built on Solana.",
    image: "/patreonix.png",
    link: "https://creatorpatreonix.vercel.app/",
    githubRepo: "https://github.com/kushwahramkumar2003/Patreonix",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Solana", "Rust"],
    status: "In Progress",
  },
  {
    title: "Photofix",
    description: "A SaaS platform for advanced image processing and editing.",
    image: "/photofix.png",
    link: "https://www.photofix.in.net/",
    githubRepo: "https://github.com/kushwahramkumar2003/photofix",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    status: "Completed",
  },
  {
    title: "Brainwave",
    description:
      "An AI-powered knowledge management system for organizing information efficiently.",
    image: "/brainwave.png",
    link: "https://brainwave-web-app.vercel.app/",
    githubRepo: "https://github.com/kushwahramkumar2003/brainwave-web",
    technologies: ["React", "Node.js", "AI/ML", "MongoDB"],
    status: "Completed",
  },
  {
    title: "SketchFrame",
    description: "Collaborative drawing app similar to Excalidraw.",
    image: "/SketchFrame.png",
    link: "#",
    githubRepo: "https://github.com/kushwahramkumar2003/SketchFrame",
    technologies: ["NextJS", "Node.js", "WebSocket", "Prisma"],
    status: "Completed",
  },
  {
    title: "AllIndiaCart",
    description:
      "A robust e-commerce platform supporting cryptocurrency payments.",
    image: "/all-india-cart.png",
    link: "https://e-commerce-web-drab.vercel.app/",
    githubRepo: "https://github.com/kushwahramkumar2003/All-India-Cart",
    technologies: ["NextJS", "Node.js", "Solana", "MongoDB"],
    status: "Completed",
  },
  {
    title: "Pragati UI",
    description:
      "A React component library designed with Tailwind CSS and Framer Motion.",
    image: "/pragatiui.png",
    link: "https://pragati-ui.vercel.app/",
    githubRepo: "https://github.com/kushwahramkumar2003/PragatiUI",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Radix UI"],
    status: "Completed",
  },
  {
    title: "Anonymous Chat",
    description: "A real-time anonymous chat application using WebSockets.",
    image: "/anonymous-chat.png",
    link: "https://anonymous-chat-web-frontend.vercel.app/",
    githubRepo:
      "https://github.com/kushwahramkumar2003/Anonymous-Chat-Front-end",
    technologies: ["React", "Tailwind CSS", "WebSocket"],
    status: "Completed",
  },
  {
    title: "DevRouteRK",
    description: "A platform providing curated resources for developers.",
    image: "/devrouterk.png",
    link: "https://dev-routes-rk.netlify.app/",
    githubRepo: "https://github.com/kushwahramkumar2003/DevRouteRK",
    technologies: ["React", "Tailwind CSS", "NodeJS", "MongoDB"],
    status: "Completed",
  },
];

export function ProjectsSection() {
  interface ProjectStatus {
    status: "Completed" | "In Progress" | "Planned" | string;
  }

  type StatusColorClasses = string;

  const getStatusColor = (
    status: ProjectStatus["status"]
  ): StatusColorClasses => {
    switch (status) {
      case "Completed":
        return "bg-green-500/10 text-green-600 border-green-500/30";
      case "In Progress":
        return "bg-yellow-500/10 text-yellow-600 border-yellow-500/30";
      case "Planned":
        return "bg-blue-500/10 text-blue-600 border-blue-500/30";
      default:
        return "bg-gray-500/10 text-gray-600 border-gray-500/30";
    }
  };

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3" id="projects">
      {projects.map((project) => (
        <div
          key={project.title}
          className="group relative overflow-hidden rounded-xl border border-primary/20 transition-all duration-300 hover:border-primary/40 hover:shadow-xl"
        >
          {/* Project Image */}
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Technology Tags */}
            <div className="absolute top-2 right-2 flex gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 text-primary py-1 text-xs bg-primary/10 backdrop-blur-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="p-4 space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-primary">
                {project.title}
              </h3>
              <span
                className={`px-2 py-1 text-xs rounded-full ${getStatusColor(
                  project.status
                )}`}
              >
                {project.status}
              </span>
            </div>

            <p className="text-sm text-muted-foreground line-clamp-2">
              {project.description}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              <Link
                href={project.githubRepo}
                target="_blank"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm border border-primary/20 rounded-lg transition-all duration-300 hover:bg-primary/5 hover:border-primary/40"
              >
                <GitHubLogoIcon className="w-4 h-4" />
                GitHub
              </Link>
              <Link
                href={project.link}
                target="_blank"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm bg-primary text-primary-foreground rounded-lg transition-all duration-300 hover:bg-primary/90"
              >
                <LinkBreak2Icon className="w-4 h-4" />
                View Project
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsSection;
