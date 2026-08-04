export default function ProjectsSection() {
  const projects = [1, 2, 3, 4]; // Dummy data loop

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-10 border-b border-white/20 pb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase">Selected Projects</h2>
          <span className="text-teal-400 font-mono tracking-widest">01 - Projects</span>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {projects.map((item) => (
            <div key={item} className="min-w-[340px] md:min-w-[400px] flex-shrink-0 snap-start rounded-2xl border border-white/10 bg-[#121826] flex flex-col overflow-hidden">
              <img src="/project-thumb.png" alt="Project" className="w-full h-48 object-cover border-b border-white/10" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">Stock Rotation Recommendation System</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  Python script for generating stock rotation recommendations across 400+ stores, reducing analysis time by 90%.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/10 text-teal-300 text-xs px-3 py-1 rounded-md font-medium">TensorFlow</span>
                  <span className="bg-white/10 text-teal-300 text-xs px-3 py-1 rounded-md font-medium">SQL</span>
                  <span className="bg-white/10 text-teal-300 text-xs px-3 py-1 rounded-md font-medium">Python</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show more button */}
        <div className="flex justify-end mt-4">
          <button className="rounded-full border border-white/20 px-6 py-2 text-sm text-white hover:bg-white/5 transition-colors">
            Show More
          </button>
        </div>
      </div>
    </section>
  );
}