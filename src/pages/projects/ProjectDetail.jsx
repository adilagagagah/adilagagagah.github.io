import { useParams, useNavigate } from 'react-router-dom';
import { projectsData } from '../../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams(); // Menangkap URL (misal: "duo-note" atau "stock-rotation")
  const navigate = useNavigate();
  const project = projectsData.find(p => p.slug === slug);

  // Fallback jika tidak ketemu
  if (!project) {
    return (
      <div className="min-h-screen bg-[#0B0F19] text-white pt-32 px-6">
        <div className="max-w-4xl mx-auto">
          <button onClick={() => navigate(-1)} className="mb-8 text-teal-400 hover:text-teal-300">← Kembali</button>
          <h1 className="text-4xl font-bold mb-4">Proyek Tidak Ditemukan</h1>
          <p className="text-gray-400">Proyek dengan slug "{slug}" tidak ada di data.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => navigate(-1)} 
          className="mb-8 text-teal-400 hover:text-teal-300 flex items-center gap-2"
        >
          ← Kembali
        </button>
        
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-400 mb-8">
          {project.description}
        </p>

        <div className="bg-[#121826] border border-white/10 rounded-2xl p-8 h-64 flex items-center justify-center">
          <span className="text-gray-500">Area Preview / Gambar Project</span>
        </div>
      </div>
    </div>
  );
}