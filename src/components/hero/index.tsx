export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-125 w-125 rounded-full bg-linear-to-br from-indigo-100/60 to-violet-100/40 blur-3xl" />
        <div className="absolute -right-40 -bottom-40 h-125 w-125 rounded-full bg-linear-to-br from-violet-100/50 to-indigo-100/30 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-200/20 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
          Available for new projects
        </div>

        <h1 className="mb-6 text-5xl leading-tight font-bold text-slate-900 md:text-7xl">
          Hi, I'm{" "}
          <span className="bg-linear-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Jose Trejos
          </span>
        </h1>

        <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-slate-600 md:text-2xl">
          Full-Stack Developer specializing in{" "}
          <span className="font-semibold text-violet-600">Next.js</span>,{" "}
          <span className="font-semibold text-indigo-600">Node.js</span>, and{" "}
          <span className="font-semibold text-purple-600">React.js</span>. I
          build scalable web applications that help businesses grow.
        </p>

        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="transform rounded-full bg-linear-to-r from-violet-600 to-indigo-600 px-8 py-4 font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/30"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-full border-2 border-slate-300 px-8 py-4 font-semibold text-slate-700 transition-all hover:border-violet-600 hover:text-violet-600"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
