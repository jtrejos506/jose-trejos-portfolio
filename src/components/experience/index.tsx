export default function Experience() {
  const experiences = [
    {
      title: "Technical Lead & Operations Manager",
      company: "Acuario El Sol",
      period: "2025 - Present",
      description:
        "Leading operations and building the digital presence for a startup aquarium business, including e-commerce and marketing.",
    },
    {
      title: "Full-Stack Software Engineer",
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
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-slate-600">
            My professional journey in software development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-violet-200 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-violet-600 rounded-full transform -translate-x-1/2 mt-6" />

              {/* Content */}
              <div
                className={`ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}
              >
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <span className="text-violet-600 font-medium">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    {exp.title}
                  </h3>
                  <p className="text-slate-600 font-medium">{exp.company}</p>
                  <p className="text-slate-500 mt-3">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
