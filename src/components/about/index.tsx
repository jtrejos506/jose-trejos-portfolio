import { CodeIcon, GitHubIcon, LinkedInIcon } from "@site/src/utils/icons";
import Link from "@docusaurus/Link";
import { URL_GITHUB, URL_LINKEDIN } from "@site/src/utils/constants";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image/Avatar */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-linear-to-br from-violet-100 to-indigo-100 p-8">
              <div className="w-full h-full rounded-xl bg-linear-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                <img
                  src={require("@site/static/img/jose-trejos.jpeg").default}
                  alt="Jose Trejos Image"
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
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={URL_GITHUB}
                className="flex items-center gap-2 text-slate-600 hover:text-violet-600 transition-colors"
              >
                <GitHubIcon />
                <span>GitHub</span>
              </Link>
              <Link
                href={URL_LINKEDIN}
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
