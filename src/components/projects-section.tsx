import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GitHubLogoIcon, LinkBreak2Icon } from "@radix-ui/react-icons";

const projects = [
  {
    title: "Photofix",
    description:
      "A full-stack web application built with Next.js and TypeScript",
    image: "/photofix.png",
    link: "https://www.photofix.in.net/",
    githubRepo: "https://github.com/kushwahramkumar2003/photofix",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    status: "Completed",
  },
  {
    title: "Project 2",
    description: "An e-commerce platform with real-time updates",
    image: "/project2.jpg",
    link: "#",
    githubRepo: "https://github.com/username/project2",
    technologies: ["React", "Node.js", "WebSockets"],
    status: "Completed",
  },
  {
    title: "Project 3",
    description: "A mobile-first progressive web application",
    image: "/project3.jpg",
    link: "#",
    githubRepo: "https://github.com/username/project3",
    technologies: ["PWA", "React Native", "Firebase"],
    status: "Planned",
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
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
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
