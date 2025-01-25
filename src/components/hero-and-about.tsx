import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaCode,
  FaBriefcase,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function HeroAndAbout() {
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
      linkedin: "https://www.linkedin.com/in/ramkumar9301",
      twitter: "https://x.com/ramkumar_9301",
    },
    description:
      "I am a passionate developer with a strong background in full-stack development, Web3 technologies, and open-source contributions. My expertise lies in building scalable, secure, and user-centric applications.",
    workExperience: [
      { title: "Intern", company: "TSC", duration: "Present" },
      {
        title: "Upcoming System Engineer",
        company: "TCS",
        duration: "Upcoming",
      },
    ],
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
                icon={FaXTwitter}
                label="Twitter Profile"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center sm:justify-start space-y-3 sm:space-y-0 sm:space-x-8 ">
          <Button asChild variant="default" className="w-full sm:w-auto">
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link
              href="https://x.com/messages/compose?recipient_id=ramkumar_9301"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Me
            </Link>
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
            <h2 className="text-lg sm:text-xl font-semibold">About Me</h2>
            <p className="text-base text-muted-foreground">
              {personalInfo.description}
            </p>
          </div>

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
              {
                icon: FaBriefcase,
                label: "Work",
                value: personalInfo.workExperience
                  .map(
                    (work) =>
                      `${work.title} at ${work.company} (${work.duration})`
                  )
                  .join("; "),
              },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="
                  flex 
                  flex-row 
                  items-center 
                  sm:items-start 
                  space-x-2
                 
                "
              >
                <div className="flex flex-row sm:flex-row items-start gap-1">
                  <div className="flex flow-row justify-center items-center gap-1">
                    <Icon className="text-muted-foreground mb-1 sm:mb-0" />
                    <span className="font-medium mr-0 sm:mr-2 text-center sm:text-left">
                      {label}:
                    </span>
                  </div>

                  <span className="text-muted-foreground text-start sm:text-left">
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
