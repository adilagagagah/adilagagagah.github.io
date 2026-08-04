import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProjectsSection() {
  const navigate = useNavigate();

  // Data Dinamis untuk tiap proyek
  const projectsData = [
    {
      id: 1,
      slug: "stock-rotation",
      title: "Stock Rotation Recommendation System",
      description: "Python script for generating stock rotation recommendations across 400+ stores, reducing analysis time by 90%.",
      image: "portofolio-1/img-porto-1.png",
      techStack: ["TensorFlow", "SQL", "Python"]
    },
    {
      id: 2,
      slug: "churn-prediction",
      title: "Customer Churn Prediction Model",
      description: "Machine learning model to predict customer churn with 85% accuracy using historical transaction data.",
      image: "portofolio-1/img-porto-1.png", // Ganti dengan aset gambar Anda yang lain
      techStack: ["Scikit-learn", "Pandas", "Python"]
    },
    {
      id: 3,
      slug: "sales-dashboard",
      title: "Sales Dashboard & Analytics",
      description: "Interactive Power BI dashboard for real-time sales monitoring and automated weekly reporting to stakeholders.",
      image: "portofolio-1/img-porto-1.png",
      techStack: ["Power BI", "SQL", "Excel"]
    },
    {
      id: 4,
      slug: "data-pipeline",
      title: "Automated Data Pipeline",
      description: "ETL pipeline to extract, clean, and load data from various APIs into a centralized PostgreSQL data warehouse.",
      image: "portofolio-1/img-porto-1.png",
      techStack: ["Python", "PostgreSQL", "Git"]
    },
    {
      id: 5,
      slug: "nlp-sentiment-analysis",
      title: "NLP Sentiment Analysis",
      description: "Deep learning model analyzing customer reviews to automatically categorize feedback sentiments efficiently.",
      image: "portofolio-1/img-porto-1.png",
      techStack: ["TensorFlow", "Python", "React"]
    },
    {
      id: 6,
      slug: "nlp-sentiment-analysis-2",
      title: "NLP Sentiment Analysis",
      description: "Deep learning model analyzing customer reviews to automatically categorize feedback sentiments efficiently.",
      image: "portofolio-1/img-porto-1.png",
      techStack: ["TensorFlow", "Python", "React"]
    },
    {
      id: 7,
      slug: "nlp-sentiment-analysis-2",
      title: "NLP Sentiment Analysis",
      description: "Deep learning model analyzing customer reviews to automatically categorize feedback sentiments efficiently.",
      image: "portofolio-1/img-porto-1.png",
      techStack: ["TensorFlow", "Python", "React"]
    },
    {
      id: 8,
      slug: "nlp-sentiment-analysis-2",
      title: "NLP Sentiment Analysis",
      description: "Deep learning model analyzing customer reviews to automatically categorize feedback sentiments efficiently.",
      image: "portofolio-1/img-porto-1.png",
      techStack: ["TensorFlow", "Python", "React"]
    },
    {
      id: 9,
      slug: "nlp-sentiment-analysis-2",
      title: "NLP Sentiment Analysis",
      description: "Deep learning model analyzing customer reviews to automatically categorize feedback sentiments efficiently.",
      image: "portofolio-1/img-porto-1.png",
      techStack: ["TensorFlow", "Python", "React"]
    },
    {
      id: 10,
      slug: "nlp-sentiment-analysis-2",
      title: "NLP Sentiment Analysis",
      description: "Deep learning model analyzing customer reviews to automatically categorize feedback sentiments efficiently.",
      image: "portofolio-1/img-porto-1.png",
      techStack: ["TensorFlow", "Python", "React"]
    }
  ];
  
  // Referensi dan State untuk Scroll
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Fungsi mengecek posisi scroll (untuk menyembunyikan/memunculkan panah)
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      // Memberikan toleransi 1px agar logika ujung kanan lebih presisi
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 1);
    }
  };
  
  // Cek posisi panah saat komponen pertama kali dimuat
  useEffect(() => {
    handleScroll();
  }, []);

  // Fungsi eksekusi pergeseran saat panah diklik
  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Ambil posisi scroll saat ini dan lebar layar yang terlihat
    const { scrollLeft, clientWidth } = container;
    
    // Ambil semua elemen card yang ada di dalam container
    const cards = Array.from(container.children);

    if (direction === 'right') {
      // KLIK KANAN: Cari card pertama yang ujung kanannya bersembunyi di luar layar
      const targetCard = cards.find(card => {
        const cardRightEdge = card.offsetLeft + card.offsetWidth;
        // Toleransi 2px untuk pembulatan desimal browser
        return cardRightEdge > scrollLeft + clientWidth + 2; 
      });

      if (targetCard) {
        // Hitung jarak persis agar ujung kanan targetCard menyentuh ujung kanan layar
        const targetScroll = targetCard.offsetLeft + targetCard.offsetWidth - clientWidth;
        container.scrollTo({ left: targetScroll, behavior: 'smooth' });
      }
    } 
    
    else if (direction === 'left') {
      // KLIK KIRI: Cari card terakhir yang ujung kirinya bersembunyi di luar layar (kiri)
      // Kita reverse array untuk mengecek dari belakang (dari kanan ke kiri)
      const targetCard = [...cards].reverse().find(card => {
        // Toleransi 2px
        return card.offsetLeft < scrollLeft - 2;
      });

      if (targetCard) {
        // Hitung jarak persis agar ujung kiri targetCard menyentuh ujung kiri layar
        container.scrollTo({ left: targetCard.offsetLeft, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="projects" className="px-8 py-24">
      <div className="mx-auto max-w-7xl relative">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-5 border-b border-white/20 pb-3">
          <h2 className="text-4xl font-bold tracking-wide">Selected Projects</h2>
          <span className="text-sm mb-4 text-teal-400 font-mono tracking-widest">01 - Projects</span>
        </div>

        {/* Wrapper Relatif untuk Menampung Tombol Panah */}
        <div className="relative group">
          
          {/* Tombol Panah Kiri */}
          {canScrollLeft && (
            <button 
              onClick={() => scroll('left')}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[#0B0F19]/40 text-white border border-white/20 hover:bg-slate-700 backdrop-blur-md transition-all shadow-lg hidden md:block"
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          )}

          {/* Horizontal Scroll Container */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-6 pb-6 pt-2 snap-x snap-mandatory
            [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-thumb]:bg-white/20 hover:[&::-webkit-scrollbar-thumb]:bg-white/30 [&::-webkit-scrollbar-thumb]:rounded-full transition-all"
          >
            {projectsData.map((project) => (
              <div 
                key={project.id} 
                onClick={() => navigate(`/projects/${project.slug}`)}
                className="w-[280px] md:w-[320px] max-w-[85vw] flex-shrink-0 rounded-2xl border border-white/10 bg-[#121826] flex flex-col overflow-hidden hover:border-white/50 transition-all cursor-pointer hover:scale-[1.005]"
              >
                {/* gambar project */}
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover border-b border-white/10" />
                {/* teks project */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* judul project */}
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">{project.title}</h3>
                  {/* deskripsi project */}
                  <p className="text-gray-400 text-sm mb-6 flex-grow">
                    {project.description}
                  </p>
                  {/* tech stack project */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="bg-white/10 text-teal-300 text-xs px-3 py-1 rounded-md font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tombol Panah Kanan */}
          {canScrollRight && (
            <button 
              onClick={() => scroll('right')}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[#0B0F19]/40 text-white border border-white/20 hover:bg-slate-700 backdrop-blur-md transition-all shadow-lg hidden md:block"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          )}

        </div>

        {/* Show more button */}
        <div className="flex justify-end mt-4">
          <button className="rounded-full border border-white/20 px-6 py-2 text-sm hover:bg-white/5 transition-colors">
            Show More
          </button>
        </div>
      </div>
    </section>
  );
}