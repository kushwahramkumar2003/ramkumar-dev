import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import Footer from "@/components/footer";

export default function BlogIndex() {
  const posts = getAllPosts(["title", "date", "slug", "excerpt"]);

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-white/20">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <div className="flex items-center justify-between mb-16">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm"
          >
            ← Back to home
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-4">
            Writing
          </h1>
          <p className="text-base text-muted-foreground max-w-lg">
            Thoughts on software engineering, system design, and building
            products.
          </p>
        </div>

        <div className="space-y-10">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <article className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <time className="text-xs text-muted-foreground/60 font-mono whitespace-nowrap">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </article>
            </Link>
          ))}

          {posts.length === 0 && (
            <p className="text-muted-foreground text-sm">No posts found.</p>
          )}
        </div>

        <Footer />
      </div>
    </main>
  );
}
