export default function Experience() {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Acuario El Sol",
      period: "2025 - Present",
      description:
        "Supporting the development and launch of an e-commerce platform for a local aquarium retail startup. Responsible for frontend architecture, web performance, CI/CD automation, and evaluation of modern commerce solutions",
    },
    {
      title: "Software Engineer II",
      company: "First Factory Inc.",
      period: "2021 - 2025",
      description:
        "Built full-stack web apps for US clients, including video, payroll, and task tools, from scratch to production.",
    },
    {
      title: "Splunk Architect / DevOps & Linux Engineer",
      company: "SYKES (Splunk Contractor)",
      period: "2019 - 2021",
      description:
        "Built Splunk architectures, log pipelines, and monitoring systems for distributed environments using Linux and scripting.",
    },
  ];

  return (
    <section id="experience" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900">
            Work Experience
          </h2>
          <p className="text-xl text-slate-600">
            My professional journey in software development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-0 bottom-0 left-0 w-0.5 transform bg-violet-200 md:left-1/2 md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 mt-6 h-4 w-4 -translate-x-1/2 transform rounded-full bg-violet-600 md:left-1/2" />

              {/* Content */}
              <div
                className={`ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}
              >
                <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
                  <span className="font-medium text-violet-600">
                    {exp.period}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-slate-900">
                    {exp.title}
                  </h3>
                  <p className="font-medium text-slate-600">{exp.company}</p>
                  <p className="mt-3 text-slate-500">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
