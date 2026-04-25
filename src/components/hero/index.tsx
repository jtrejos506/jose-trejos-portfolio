export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-125 w-125 rounded-full bg-linear-to-br from-indigo-100/60 to-violet-100/40 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-125 w-125 rounded-full bg-linear-to-br from-violet-100/50 to-indigo-100/30 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-200/20 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full text-violet-700 text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Available for new projects
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="bg-linear-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Jose Trejos
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Full Stack Developer specializing in{" "}
          <span className="text-violet-600 font-semibold">TypeScript</span>,{" "}
          <span className="text-indigo-600 font-semibold">React</span>, and{" "}
          <span className="text-purple-600 font-semibold">Node.js</span>. I
          build scalable web applications that help businesses grow.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-8 py-4 bg-linear-to-r from-violet-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-violet-500/30 transition-all transform hover:-translate-y-1"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-full font-semibold hover:border-violet-600 hover:text-violet-600 transition-all"
          >
            Get In Touch
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "10+", label: "Projects Completed" },
            { value: "6+", label: "Happy Clients" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-slate-900">
                {stat.value}
              </div>
              <div className="text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
