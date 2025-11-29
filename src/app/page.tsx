import { GithubSection } from "@/components/github-section";
import { ProjectsSection } from "@/components/projects-section";
import { HeroAndAbout } from "@/components/hero-and-about";
import { CurrentSection } from "@/components/current-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-white/20">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <HeroAndAbout />
        <CurrentSection />
        <ProjectsSection />
        <GithubSection />
        <Footer />
      </div>
    </main>
  );
}
