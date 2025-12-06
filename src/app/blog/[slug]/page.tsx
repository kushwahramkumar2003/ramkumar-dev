import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Footer from "@/components/footer";
import Image from "next/image";
import { CodeBlock } from "@/components/code-block";
import { ReactNode } from "react";

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
    "coverImage",
  ]);

  const components = {
    pre: (props: { children?: ReactNode }) => {
      const { children } = props;
      if (
        children &&
        typeof children === "object" &&
        "props" in children &&
        children.props
      ) {
        const { className, children: codeChildren } = children.props as {
          className?: string;
          children?: string;
        };
        return (
          <CodeBlock className={className || ""}>
            {codeChildren}
          </CodeBlock>
        );
      }
      return <pre>{children}</pre>;
    },
    code: ({
      children,
      className,
    }: {
      children?: ReactNode;
      className?: string;
    }) => {
      if (className) {
        return <code className={className}>{children}</code>;
      }
      return (
        <code className="text-foreground bg-white/5 px-1.5 py-0.5 rounded-sm text-sm font-mono">
          {children}
        </code>
      );
    },
  };

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-white/20">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <div className="flex items-center justify-between mb-12">
          <Link
            href="/blog"
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm"
          >
            ← Back to blog
          </Link>
        </div>

        <article>
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              {post.title}
            </h1>
            <time className="text-sm text-muted-foreground font-mono">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </header>

          {post.coverImage && (
            <div className="relative w-full aspect-video mb-10 rounded-lg overflow-hidden border border-white/5">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div
            className="prose prose-invert prose-sm md:prose-base max-w-none 
                prose-headings:font-medium prose-headings:tracking-tight
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-a:text-foreground prose-a:underline prose-a:decoration-white/30 prose-a:underline-offset-4 hover:prose-a:decoration-white/60
                prose-blockquote:border-l-white/20 prose-blockquote:text-muted-foreground
                prose-code:text-foreground prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-sm prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-transparent prose-pre:border-0 prose-pre:p-0 prose-pre:my-4
            "
          >
            <MDXRemote source={post.content} components={components} />
          </div>
        </article>

        <div className="mt-16 pt-8 border-t border-white/5">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Ramkumar Kushwah
          </Link>
        </div>

        <Footer />
      </div>
    </main>
  );
}
