import React from "react";
import Link from "@docusaurus/Link";

const GitHubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const CodeIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image/Avatar */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-violet-100 to-indigo-100 p-8">
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                <img
                  src={require("@site/static/img/jose-trejos.jpeg").default}
                  alt="My Image"
                />
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-violet-200 rounded-xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-200 rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">About Me</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I'm a Full-Stack Software Engineer with over 5 years of
                experience building reliable and scalable web applications. I
                work across the stack, designing APIs, integrating frontend and
                backend systems, and deploying cloud-based solutions.
              </p>
              <p>
                My experience includes working with AWS, Docker, and CI/CD
                pipelines, along with a strong foundation in Linux and
                infrastructure. I also bring a background as a Splunk Architect,
                where I worked with observability and distributed systems in
                enterprise environments.
              </p>
              <p>
                I enjoy turning ideas into practical, well-structured solutions.
                Whether it's building from scratch or improving an existing
                system, I focus on writing clean, maintainable code and
                delivering results through fast, thoughtful iterations.
              </p>
              <p>
                Outside of work, I stay up to date with emerging technologies
                like AI and explore how they can be applied to build more
                efficient, secure, and user-friendly applications.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-10">
              <Link
                href="https://github.com/jtrejos506"
                className="flex items-center gap-2 text-slate-600 hover:text-violet-600 transition-colors"
              >
                <GitHubIcon />
                <span>GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/jose-506/"
                className="flex items-center gap-2 text-slate-600 hover:text-violet-600 transition-colors"
              >
                <LinkedInIcon />
                <span>LinkedIn</span>
              </Link>
              <Link
                href="/blog"
                className="flex items-center gap-2 text-slate-600 hover:text-violet-600 transition-colors"
              >
                <CodeIcon />
                <span>Blog</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
