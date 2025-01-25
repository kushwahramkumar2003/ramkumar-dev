import { GithubSection } from "@/components/github-section";
import { ProjectsSection } from "@/components/projects-section";
import { HeroAndAbout } from "@/components/hero-and-about";

export default function Home() {
  return (
    <main className="mx-auto px-4 py-8 flex justify-center items-center bg-background">
      <div className="w-full lg:w-3/4">
        <HeroAndAbout />
        <GithubSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
