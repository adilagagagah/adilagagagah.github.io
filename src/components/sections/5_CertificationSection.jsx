import { useState, useEffect } from "react";

export default function CertificationSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedCert]);

  const certifications = [
    { id: 1, title: "Sigmoid Function 1", image: "/portofolio-1/img-porto-1.png" },
    { id: 2, title: "Sigmoid Function 2", image: "/portofolio-1/img-porto-1.png" },
    { id: 3, title: "Sigmoid Function 3", image: "/portofolio-1/img-porto-1.png" },
    { id: 4, title: "Sigmoid Function 4", image: "/portofolio-1/img-porto-1.png" },
    { id: 5, title: "Sigmoid Function 5", image: "/portofolio-1/img-porto-1.png" },
    { id: 6, title: "Sigmoid Function 6", image: "/portofolio-1/profil-gagah.jpeg" },
    // Saya menambahkan 2 data dummy ekstra agar tombol "Show More" bisa berfungsi
    // { id: 7, title: "Other Certificate 1", image: "/portofolio-1/img-porto-1.png" },
    // { id: 8, title: "Other Certificate 2", image: "/portofolio-1/img-porto-1.png" },
  ];

  const displayedCerts = certifications

  return (
    <section id="certifications" className="px-8 py-12">
      <div className="mx-auto max-w-7xl relative">

        {/* Header Section */}
        <div className="flex justify-between items-end mb-5 border-b border-white/20 pb-3">
          <h2 className="text-4xl font-bold tracking-wide">Certifications</h2>
          <span className="text-sm mb-4 text-teal-400 font-mono tracking-widest">04 - Certifications</span>
        </div>

        {/* Grid Sertifikat */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-12">
          {displayedCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="rounded-lg overflow-hidden border border-white/10 bg-[#0B0F19] hover:border-white/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Gambar Sertifikat */}
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full aspect-[16/9] object-cover drop-shadow-md"
              />
            </div>
          ))}
        </div>

      </div>

      {/* Pop-up Modal / Lightbox */}
      {selectedCert && (
        <div
          // Latar belakang gelap (black dengan opacity 80% dan efek blur)
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm p-4"
          // Jika background gelap diklik, tutup pop-up
          onClick={() => setSelectedCert(null)}
        >
          {/* Kontainer Gambar */}
          <div
            className="relative flex justify-center items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Close (X) */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-10 -right-2 md:-right-8 text-white/70 hover:text-white cursor-pointer text-4xl font-bold transition-colors"
            >
              &times;
            </button>

            {/* Gambar Besar */}
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

    </section>
  );
}