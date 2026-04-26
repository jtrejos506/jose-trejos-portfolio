import { ExternalLinkIcon, GitHubIcon } from "@site/src/utils/icons";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { TOOLS } from "@site/src/utils/constants";

export default function Projects() {
  const {
    AWS,
    CSS,
    EXPRESS,
    HTML,
    MONGODB,
    NODE,
    POSTGRESQL,
    REACT,
    TAILWIND,
    TYPESCRIPT,
  } = TOOLS;

  const projects = [
    {
      title: "QR code generator",
      description:
        "Create QR codes instantly from any URL. This tool is lightweight, fast, and fully client-side and no external API is required.",
      image: useBaseUrl("/img/qr-code-generator.png"),
      tags: [REACT, TAILWIND, HTML],
      // todo; update gitghub link
      github: "#",
      live: "projects/tools/qr-generator#-live-demo",
      projectUrl: "projects/tools/qr-generator",
    },

    {
      title: "Link Obfuscator",
      description:
        "A client-side Link Obfuscator, designed to generate shareable redirect links without requiring any backend infrastructure.",
      image: useBaseUrl("/img/link-obfuscator.png"),
      tags: [REACT, TYPESCRIPT, TAILWIND],
      github: "#",
      live: "projects/tools/link-obfuscator#live-demo",
      projectUrl: "projects/tools/link-obfuscator",
    },
    {
      title: "Chore Tracker",
      description:
        "A tool to measures the total time it takes to complete a list of chores.",
      image:
        "https://raw.githubusercontent.com/jose-506/ChoreTracker/main/src/client/src/assets/allCardsDark.png",
      tags: [NODE, REACT, MONGODB, EXPRESS, AWS],
      github: "https://github.com/jtrejos506/ChoreTracker",
      live: "http://ec2-54-226-183-237.compute-1.amazonaws.com/",
      projectUrl: "projects/category/chore-tracker",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Projects</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Some of my recent work that showcases my skills and experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all"
            >
              <div className="aspect-video bg-slate-100 overflow-hidden">
                <Link href={project.projectUrl}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
              </div>
              <div className="p-6">
                <Link href={project.projectUrl}>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                </Link>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-violet-100 text-violet-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href={project.github}
                    className="flex items-center gap-2 text-slate-600 hover:text-violet-600 transition-colors"
                  >
                    <GitHubIcon />
                    <span>Code</span>
                  </Link>
                  <Link
                    href={project.live}
                    className="flex items-center gap-2 text-slate-600 hover:text-violet-600 transition-colors"
                  >
                    <ExternalLinkIcon />
                    <span>Live Demo</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects/intro"
            className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:text-violet-700 transition-colors"
          >
            View All Projects
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
