export default function EducationSection() {
  return (
    <section className="px-6 py-24">
      
      <div className="mx-auto max-w-7xl">

        <h2 className="mb-8 text-4xl font-bold">
          Education
        </h2>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          Content coming soon
        </div>

        

        {/* EDUCATION */}
        <div className="flex justify-between items-end mb-10 border-b border-white/20 pb-4" id="educations">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase">Education</h2>
          <span className="text-teal-400 font-mono tracking-widest">03 - Education</span>
        </div>

        <div className="border-l-2 border-white/20 ml-2 md:ml-4 space-y-12">
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[11px] top-1.5 h-5 w-5 rounded-full bg-white"></div>
            <h3 className="text-2xl font-bold text-white">Bachelor of Statistics</h3>
            <p className="text-lg text-gray-300 mb-1">Diponegoro University</p>
            <p className="text-sm text-gray-500 mb-4">July 2021 - July 2025</p>
            <p className="text-sm text-gray-400 mb-2">About this program :</p>
            <ul className="list-disc pl-5 text-gray-400 space-y-1 text-sm md:text-base">
              <li>Create 2 Graphical User Interface to simplify the use of statistics model.</li>
              <li>Create Computer Vision Model for Learning Apps called Hijaiyah App.</li>
            </ul>
          </div>
        </div>

      </div>

    </section>
  );
}