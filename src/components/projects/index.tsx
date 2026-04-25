import { ExternalLinkIcon, GitHubIcon } from "@site/src/utils/icons";
import Link from "@docusaurus/Link";

export default function Projects() {
  // TODO: add projects
  const projects = [
    {
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur eum, fugit quia ab, ex nostrum quasi consectetur id!",
      image:
        "https://raw.githubusercontent.com/jose-506/ChoreTracker/main/src/client/src/assets/allCardsDark.png",
      tags: ["tool-1", "tool-2", "tool-3", "tool-4"],
      github: "#",
      live: "#",
      projectUrl: "projects/category/project-a",
    },
    {
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet consectetur eum, fugit quia ab, ex nostrum quasi consectetur id!",
      image:
        "https://raw.githubusercontent.com/jose-506/ChoreTracker/main/src/client/src/assets/chartLightMode1.png",
      tags: ["tool-1", "tool-2", "tool-3", "tool-4"],
      github: "#",
      live: "#",
      projectUrl: "projects/category/project-a",
    },
    {
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet consectetur eum, fugit quia ab, ex nostrum quasi consectetur id!",
      image:
        "https://raw.githubusercontent.com/jose-506/ChoreTracker/main/src/client/src/assets/allCardsDark.png",
      tags: ["tool-1", "tool-2", "tool-3", "tool-4"],
      github: "#",
      live: "#",
      projectUrl: "projects/category/project-a",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
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
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
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
