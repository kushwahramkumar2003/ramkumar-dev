import { GithubSection } from "@/components/github-section";
import { ProjectsSection } from "@/components/projects-section";
import { HeroAndAbout } from "@/components/hero-and-about";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-gradient-to-br from-background via-background/90 to-primary/10 
      text-foreground transition-all duration-500 ease-in-out"
    >
      <div className="container mx-auto px-2 py-4 flex justify-center items-center sm:px-4 sm:py-8 ">
        <div
          className="w-full lg:w-5/6 space-y-12 
          bg-background/70 backdrop-blur-sm 
          rounded-2xl shadow-2xl border border-primary/20 
          p-6 md:p-10 lg:p-12
          transition-all duration-500 ease-in-out"
        >
          <div className="animate-fade-in-up opacity-0 animation-delay-200">
            <HeroAndAbout />
          </div>

          <div className="animate-fade-in-up opacity-0 animation-delay-400">
            <GithubSection />
          </div>

          <div className="animate-fade-in-up opacity-0 animation-delay-600">
            <ProjectsSection />
          </div>

          <Footer />
        </div>
      </div>
    </main>
  );
}

// Recommended tailwind.config.js additions for animations
// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
//       },
//       keyframes: {
//         fadeInUp: {
//           '0%': { opacity: '0', transform: 'translateY(20px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         }
//       }
//     }
//   }
// }
