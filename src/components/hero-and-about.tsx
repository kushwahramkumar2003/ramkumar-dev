import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";

export function HeroAndAbout() {
  const personalInfo = {
    name: "Ramkumar Kushwah",
    role: "Full Stack Developer",
    location: "Ashoknagar, M.P.",
    email: "kushwahramkumar2003@gmail.com",
    skills: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
    socialLinks: {
      github: "https://github.com/kushwahramkumar2003",
      linkedin: "https://www.linkedin.com/in/ramkumar_9301",
      twitter: "https://twitter.com/ramkumar_9301",
    },
    description:
      "Building beautiful and functional web applications with modern technologies.",
  };

  const SocialIcon = ({
    href,
    icon: Icon,
    label,
  }: {
    href: string;
    icon: React.ComponentType;
    label: string;
  }) => (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-2xl text-muted-foreground hover:text-primary transition-colors 
      focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-full"
    >
      <Icon />
    </Link>
  );

  return (
    <section
      className="
        container 
        mx-auto 
        px-4 
        flex 
        flex-col 
        md:flex-row 
        gap-8 
        items-center 
        justify-between
      "
    >
      <div
        className="
          w-full 
          md:w-[48%] 
          bg-card/80 
          p-6 
          sm:p-8 
          rounded-xl 
          backdrop-blur-sm 
          space-y-6 
          shadow-lg 
          hover:shadow-xl 
          transition-all 
          duration-300
        "
      >
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Image
            src="https://avatars.githubusercontent.com/u/68776478?v=4"
            alt="Ramkumar Kushwah Profile"
            className="
              rounded-full 
              border-4 
              border-primary/20 
              w-24 
              h-24 
              sm:w-28 
              sm:h-28 
              md:w-32 
              md:h-32 
              object-cover
            "
            width={120}
            height={120}
            priority
          />
          <div className="text-center sm:text-left w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              {personalInfo.name}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              {personalInfo.role}
            </p>

            <div className="flex justify-center sm:justify-start space-x-4 mt-3">
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
                icon={FaTwitter}
                label="Twitter Profile"
              />
            </div>
          </div>
        </div>

        <p className="text-base sm:text-lg text-muted-foreground text-center sm:text-left">
          {personalInfo.description}
        </p>

        <div className="flex flex-col sm:flex-row justify-center sm:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
          <Button asChild variant="default" className="w-full sm:w-auto">
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </div>

      <div
        className="
          w-full 
          md:w-[48%] 
          bg-card/80 
          backdrop-blur-sm 
          border-none 
          shadow-lg 
          hover:shadow-xl 
          transition-all 
          duration-300
        "
      >
        <div className="space-y-4">
          <div className="text-center sm:text-left">
            <h2 className="text-lg sm:text-xl font-semibold">
              {personalInfo.name}
            </h2>
            <p className="text-base text-muted-foreground">
              {personalInfo.role}
            </p>
          </div>

          <p className="text-base text-muted-foreground text-center sm:text-left">
            I&apos;m a passionate developer with expertise in web technologies.
            I love building performant web applications and contributing to open
            source projects.
          </p>

          <div className="grid gap-3">
            {[
              {
                icon: FaMapMarkerAlt,
                label: "Location",
                value: personalInfo.location,
              },
              {
                icon: FaEnvelope,
                label: "Email",
                value: personalInfo.email,
              },
              {
                icon: FaCode,
                label: "Skills",
                value: personalInfo.skills.join(", "),
              },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="
                  flex 
                  flex-row 
                
                  items-center 
                  sm:items-start 
                  -space-y-1
                    text-center
                    
                 space-x-2
                "
              >
                <Icon className="text-muted-foreground mb-1 sm:mb-0" />
                <div className="flex flex-row sm:flex-row items-center">
                  <span className="font-medium mr-0 sm:mr-2 text-center sm:text-left">
                    {label}:{" "}
                  </span>
                  <span className="text-muted-foreground text-center sm:text-left">
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroAndAbout;
