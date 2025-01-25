"use client";

import GitHubCalendar from "react-github-calendar";

export function GithubSection() {
  return (
    <div
      className="my-4 sm:my-4 md:my-8 w-full max-w-full z-10 
          bg-background/70 
          backdrop-blur-sm 
          rounded-2xl 
          shadow-2xl 
          border 
          border-primary/20
          p-2
          sm:p-6
          "
    >
      <div className="px-2 sm:px-4 md:px-6">
        <div className="w-full overflow-x-auto">
          <div className="min-w-[280px] max-w-full mx-auto flex justify-center items-center">
            <GitHubCalendar username="kushwahramkumar2003" colorScheme="dark" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GithubSection;
