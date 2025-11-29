import React from "react";
import Link from "next/link";
import { DiscordStatus } from "./discord-status";

const buildingItem = {
  name: "PayrollX-Solana",
  link: "https://github.com/kushwahramkumar2003/PayrollX-Solana",
};

const learningItem = {
  name: "Advanced Rust Patterns",
  link: "https://doc.rust-lang.org/book/",
};

export function CurrentSection() {
  return (
    <section className="mb-20">
      <h2 className="text-lg font-medium mb-8 text-foreground">Current</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12">
        <div className="space-y-3">
          <h3 className="text-xs font-medium text-muted-foreground/60 uppercase tracking-widest">
            Building
          </h3>
          <div>
            <Link
              href={buildingItem.link}
              target={buildingItem.link !== "#" ? "_blank" : undefined}
              className="text-base text-foreground hover:text-muted-foreground transition-colors inline-flex items-center gap-1 group font-medium"
            >
              {buildingItem.name}
              {buildingItem.link !== "#" && (
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground text-xs -translate-y-[1px] translate-x-[1px]">
                  ↗
                </span>
              )}
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xs font-medium text-muted-foreground/60 uppercase tracking-widest">
            Learning
          </h3>
          <div>
            <Link
              href={learningItem.link}
              target="_blank"
              className="text-base text-foreground hover:text-muted-foreground transition-colors inline-flex items-center gap-1 group font-medium"
            >
              {learningItem.name}
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground text-xs -translate-y-[1px] translate-x-[1px]">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 pt-8">
        <DiscordStatus />
      </div>
    </section>
  );
}
