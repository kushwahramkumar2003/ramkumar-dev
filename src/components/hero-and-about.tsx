import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function HeroAndAbout() {
  const personalInfo = {
    name: "Ramkumar Kushwah",
    role: "Full Stack Developer",
    location: "Ashoknagar, M.P.",
    email: "kushwahramkumar2003@gmail.com",
    socialLinks: {
      github: "https://github.com/kushwahramkumar2003",
      linkedin: "https://www.linkedin.com/in/ramkumar9301",
      twitter: "https://x.com/ramkumar_9301",
    },
    description:
      "I build scalable, secure, and user-centric applications. Passionate about full-stack development, Web3 technologies, and open-source.",
    currentJob: {
      role: "Full-stack Developer",
      company: "Pixel Technologies",
      location: "Indore",
      duration: "3 months",
      type: "Full-time",
    },
  };

  return (
    <section className="mb-16 pt-8 sm:pt-12">
      <div className="flex flex-col-reverse sm:flex-row gap-8 sm:gap-12 items-start justify-between">
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
              {personalInfo.name}
            </h1>

            <p className="text-base leading-relaxed text-muted-foreground/90 max-w-xl">
              {personalInfo.description}
            </p>
          </div>

          <div className="flex items-center gap-2.5 text-sm text-muted-foreground/80">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500/80"></span>
            </span>
            <span>
              {personalInfo.currentJob.role} at{" "}
              <span className="text-foreground font-medium">
                {personalInfo.currentJob.company}
              </span>
            </span>
          </div>

          <div className="flex items-center gap-6 pt-1">
            <div className="flex gap-5">
              <Link
                href={personalInfo.socialLinks.github}
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={19} />
              </Link>
              <Link
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={19} />
              </Link>
              <Link
                href={personalInfo.socialLinks.twitter}
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <FaXTwitter size={19} />
              </Link>
              <Link
                href={`mailto:${personalInfo.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={19} />
              </Link>
            </div>

            <span className="h-4 w-[1px] bg-white/10"></span>

            <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Read my blog →
            </Link>
          </div>
        </div>

        <div className="relative w-20 h-20 sm:w-28 sm:h-28 flex-shrink-0">
          <Image
            src="https://avatars.githubusercontent.com/u/68776478?v=4"
            alt={personalInfo.name}
            fill
            className="rounded-full object-cover border border-white/10 shadow-sm transition-all duration-500"
            priority
            sizes="(max-width: 640px) 80px, 112px"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroAndAbout;
