"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  children: string | React.ReactNode;
  className?: string;
}

export function CodeBlock({ children, className = "" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const match = /language-(\w+)/.exec(className || "");
  const language = match ? match[1] : "";

  const codeString =
    typeof children === "string"
      ? children
      : typeof children === "object" && children !== null && "props" in children
        ? (children as any).props?.children || String(children)
        : String(children);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeString.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!language) {
    return (
      <pre className="bg-[#111] border border-white/5 rounded-lg p-4 overflow-x-auto">
        <code className="text-sm text-foreground font-mono">{codeString}</code>
      </pre>
    );
  }

  return (
    <div className="relative group my-4">
      <div className="absolute top-3 right-3 z-10">
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md text-xs text-muted-foreground hover:text-foreground transition-colors opacity-0 group-hover:opacity-100"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: "1rem",
          borderRadius: "0.5rem",
          fontSize: "0.875rem",
          lineHeight: "1.5",
          background: "#111",
          border: "1px solid rgba(255, 255, 255, 0.05)",
        }}
        codeTagProps={{
          style: {
            fontFamily: "var(--font-geist-mono), monospace",
          },
        }}
      >
        {codeString.trim()}
      </SyntaxHighlighter>
    </div>
  );
}
