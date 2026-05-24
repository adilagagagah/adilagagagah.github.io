export default function HeroSection() {
  return (
    <section className="flex min-h-screen items-center px-6">

      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">

        {/* Left */}
        <div className="flex flex-col justify-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            AI & Data Solutions Engineer
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Building Intelligent
            <br />
            Data & AI Systems
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-400">
            Focused on machine learning, analytics,
            AI systems, and scalable data-driven applications.
          </p>

          <div className="flex gap-4">

            <button className="rounded-xl bg-cyan-500 px-6 py-3 font-medium text-black hover:bg-cyan-400">
              View Projects
            </button>

            <button className="rounded-xl border border-white/10 px-6 py-3 font-medium hover:border-white/30">
              Contact Me
            </button>

          </div>

        </div>

        {/* Right */}
        <div className="flex items-center justify-center">

          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

            <div className="mb-6 flex items-center justify-between">

              <h3 className="text-lg font-semibold">
                AI Pipeline
              </h3>

              <div className="h-3 w-3 rounded-full bg-green-400" />

            </div>

            <div className="space-y-4">

              <div className="rounded-2xl bg-white/5 p-4">

                <p className="text-sm text-gray-400">
                  Model Accuracy
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  94.2%
                </h2>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-2xl bg-white/5 p-4">

                  <p className="text-sm text-gray-400">
                    Latency
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    120ms
                  </h3>

                </div>

                <div className="rounded-2xl bg-white/5 p-4">

                  <p className="text-sm text-gray-400">
                    Indexed Docs
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    12K+
                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}