import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { projectsData } from "../../data/projects";
import { techCategories, techAliases } from "../../data/tech";

// Komponen Pembantu untuk Menampilkan Ikon Tech dengan Fallback secara murni di React
function TechIconImage({ icon, name, imgClassName, fallbackClassName }) {
  const [hasError, setHasError] = useState(false);

  // Reset status error setiap kali URL ikon berubah
  useEffect(() => {
    setHasError(false);
  }, [icon]);

  if (hasError || !icon) {
    return (
      <div className={fallbackClassName}>
        {name ? name.substring(0, 3) : "???"}
      </div>
    );
  }

  return (
    <img
      src={icon}
      alt={name}
      className={imgClassName}
      onError={() => setHasError(true)}
    />
  );
}

export default function TechStackSection() {
  const navigate = useNavigate();
  const defaultTech =
    techCategories.flatMap((c) => c.items).find((item) => item.id === "python") ||
    techCategories[0].items[0];

  const [selectedTech, setSelectedTech] = useState(defaultTech);

  // Cari maksimal 3 related projects yang berhubungan dengan selectedTech
  const relatedProjects = selectedTech ? projectsData.filter((project) => {
          const techNameLower = selectedTech.name.toLowerCase();
          const techIdLower = selectedTech.id.toLowerCase();
          const aliases = techAliases[techIdLower] || [];
          const searchTerms = [techNameLower, techIdLower, ...aliases];

          return project.techStack.some((projectTech) => {
            const pTechLower = projectTech.toLowerCase();
            return searchTerms.some(
              (term) => pTechLower.includes(term) || term.includes(pTechLower)
            );
          });
  }).slice(0, 3) : [];

  return (
    <section className="px-8 py-12">
      <div className="mx-auto max-w-7xl relative">

        {/* Header Section */}
        <div className="flex justify-between items-end mb-5 border-b border-white/20 pb-3">
          <h2 className="text-4xl font-bold tracking-wide">Tech Stack & Tools</h2>
          <span className="text-sm mb-4 text-teal-400 font-mono tracking-widest">
            05 - Tech
          </span>
        </div>

        {/* 1. Grid Categories (Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {techCategories.map((category) => (
            <div
              key={category.id}
              className="bg-[#131C2D]/50 border border-white/10 rounded-2xl p-6 flex flex-col items-center"
            >
              <h3 className="text-white text-lg font-semibold mb-6 text-center">
                {category.title}
              </h3>

              {/* Grid Icons dalam Kategori */}
              <div className="flex flex-wrap justify-center gap-6">
                {category.items.map((tech) => {
                  const isSelected = selectedTech?.id === tech.id;

                  return (
                    <button
                      key={tech.id}
                      onClick={() => setSelectedTech(tech)}
                      className={`relative transition-all duration-300 transform rounded-xl p-2 ${
                        isSelected
                          ? "scale-110 bg-white/10 ring-2 ring-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.3)]"
                          : "opacity-90 hover:opacity-100 hover:scale-110 hover:bg-white/5"
                      }`}
                    >
                      <TechIconImage
                        icon={tech.icon}
                        name={tech.name}
                        imgClassName="w-11 h-11 object-contain filter drop-shadow-md"
                        fallbackClassName="w-11 h-11 flex items-center justify-center bg-gray-800 rounded-lg text-xs font-bold text-white"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Keterangan Select Icon (1 line diatas panel detail) */}
        <div className="flex items-center text-sm text-gray-400 mb-3">
          <span>💡 Klik ikon Tech Stack di atas untuk memunculkan informasi mendetail.</span>
        </div>

        {/* 2. Panel Detail Interaktif di Bawah */}
        <div className="min-h-[160px] rounded-2xl p-6 lg:p-5 transition-all duration-500 border bg-gradient-to-br from-[#0B1524] to-[#12223A] border-teal-500/40">
          {/* Active Message (Saat Tech di klik) */}
          {selectedTech && (
            <div className="flex flex-col md:flex-row gap-6 items-start animate-fade-in-up">
              {/* Ikon Besar */}
              <div className="flex-shrink-0 bg-white/5 p-4 rounded-2xl border border-white/10 hidden md:block">
                <TechIconImage
                  icon={selectedTech.icon}
                  name={selectedTech.name}
                  imgClassName="w-14 h-14 object-contain"
                  fallbackClassName="w-14 h-14 flex items-center justify-center bg-gray-800 rounded-lg text-xs font-bold text-white"
                />
              </div>

              {/* Narasi & Related Projects */}
              <div className="flex-grow w-full">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-white">{selectedTech.name}</h3>
                  <span className="px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-semibold rounded-full border border-teal-500/30">
                    {selectedTech.level}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed text-base md:text-md line-clamp-3 min-h-[1.875rem] md:min-h-[2.5rem]">
                  {selectedTech.desc}
                </p>

                {/* Related Projects (Maks 3) */}
                <div className="mt-6 pt-5 border-t border-white/10">
                  <h4 className="text-xs uppercase font-mono tracking-widest text-teal-400 font-semibold mb-3 flex items-center gap-2">
                    <span>Related Projects :</span>
                  </h4>

                  {relatedProjects.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {relatedProjects.map((project) => (
                        <div
                          key={project.id}
                          onClick={() => navigate(`/projects/${project.slug}`)}
                          className="group flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-400/50 rounded-xl transition-all duration-300 cursor-pointer shadow-sm hover:shadow-teal-900/30"
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-12 h-12 object-cover rounded-lg border border-white/10 group-hover:scale-105 transition-transform flex-shrink-0"
                          />
                          <div className="flex-grow min-w-0">
                            <h5 className="text-sm font-semibold text-white truncate group-hover:text-teal-300 transition-colors">
                              {project.title}
                            </h5>
                            <p className="text-xs text-gray-400 truncate">
                              {project.description}
                            </p>
                          </div>
                          <svg
                            className="w-4 h-4 text-gray-400 group-hover:text-teal-300 group-hover:translate-x-0.5 transition-all flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-gray-400 italic">
                      Belum ada proyek terkait yang menggunakan {selectedTech.name}.
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
