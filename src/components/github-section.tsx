"use client";

import GitHubCalendar from "react-github-calendar";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const topRepo = {
  name: "sol-indexer",
  description: "Scalable Solana blockchain data indexer using microservices.",
  stars: 45,
  url: "https://github.com/kushwahramkumar2003/sol-indexer",
};

export function GithubSection() {
  return (
    <section className="mb-16">
      <h2 className="text-lg font-medium mb-8 text-foreground">Open Source</h2>

      <div className="mb-8">
        <Link href={topRepo.url} target="_blank" className="block group">
          <div className="flex flex-col gap-2 p-4 -mx-4 rounded-lg hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5">
            <div className="flex justify-between items-baseline">
              <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                {topRepo.name}
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <FaStar className="text-yellow-500/70" />
                <span>{topRepo.stars}</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {topRepo.description}
            </p>
          </div>
        </Link>
      </div>

      <div className="w-full overflow-hidden border border-white/5 rounded-xl p-6 bg-[#0D1117]/50">
        <div className="flex justify-center opacity-70 hover:opacity-100 transition-opacity w-full overflow-x-auto scrollbar-hide">
          <GitHubCalendar
            username="kushwahramkumar2003"
            colorScheme="dark"
            fontSize={11}
            blockSize={10}
            blockMargin={4}
            hideColorLegend
            hideMonthLabels
            hideTotalCount
            style={{
              color: "var(--muted-foreground)",
            }}
            theme={{
              dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default GithubSection;
