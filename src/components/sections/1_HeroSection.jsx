export default function HeroSection() {
  return (
    <section className="relative min-h-screen px-6 pt-24 pb-12 overflow-hidden flex flex-col justify-center">
      {/* Jika ada gambar background topografi, bisa dipasang sebagai background absolute disini */}

      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        {/* Kiri: Foto & Quote */}
        <div className="lg:col-span-4 relative flex flex-col items-center lg:items-start">
          {/* <div className="absolute ml-10 top-1/4 -translate-y-1/2 text-white/80 font-mono text-xl tracking-widest leading-relaxed hidden lg:block">
            <p>"Less</p>
            <p>Process</p>
            <p>More</p>
            <p>Progress"</p>
          </div> */}
          {/* Ganti src dengan gambar Anda (pastikan background-nya sudah dipotong rapi/transparan) */}
          {/* <img src="/profil-gagah-square.png" alt="Gagah Pusoko Adilaga" className="ml-10 w-full max-w-sm z-10" /> */}
        </div>

        {/* Kanan: Teks & Box Stats */}
        <div className="lg:col-span-8 flex flex-col justify-center ml-25">
          <h1 className="text-[35px] font-semibold text-white">
            <span className="text-teal-400">GAGAH</span> PUSOKO ADILAGA
          </h1>
          <h2 className="text-[25px] text-gray-200 mb-3">AI & Data Solutions Engineer</h2>
          <p className="text-gray-400 max-w-2xl text-[14px] mb-10 leading-relaxed">
            Focused on building systems that automate workflows, reduce repetitive tasks, and transform data into scalable business solutions.
          </p>

          {/* Bento Grid Stats & Recent Post */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 mr-6">
            <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <div className="grid grid-cols-3 gap-4 text-center mb-6">
                <div>
                  <h3 className="text-[38px] font-bold text-white">+4</h3>
                  <p className="text-gray-300 font-semibold">Program Script</p>
                </div>
                <div>
                  <h3 className="text-[38px] font-bold text-white">+2</h3>
                  <p className="text-gray-300 font-semibold">Dashboard</p>
                </div>
                <div>
                  <h3 className="text-[38px] font-bold text-white">+2</h3>
                  <p className="text-gray-300 font-semibold">AI Apps</p>
                </div>
              </div>
              {/* Taruh icon stack di sini (Python, Excel, PowerBI, SQL, dsb) */}
              <div className="flex justify-center gap-3">
                <img src="app-icon/icons8-python-480.png" className="w-8 h-8" alt="Python" />
                <img src="app-icon/icons8-microsoft-excel-2025-480.png" className="w-8 h-8" alt="Excel" />
                <img src="app-icon/icons8-power-bi-2021-480.png" className="w-8 h-8" alt="PowerBI" />
                <img src="app-icon/icons8-postgresql-480.png" className="w-8 h-8" alt="PostgreSQL" />
                <img src="app-icon/icons8-r-project-480.png" className="w-8 h-8" alt="R" />
                <img src="app-icon/icons8-c++-480.png" className="w-8 h-8" alt="C++" />
                <img src="app-icon/icons8-tensorflow-480.png" className="w-8 h-8" alt="Tensorflow" />
                <img src="app-icon/Google-Antigravity-Icon-Full-Color.png" className="w-8 h-8" alt="Antigravity" />
                <img src="app-icon/n8n_pink_logo.png" className="h-6 mt-1" alt="n8n" />
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm flex flex-col items-center">
              <h4 className="text-[20px] text-white font-semibold mb-3">Recent Post</h4>
              <img src="portofolio-1/img-porto-1.png" alt="Recent Post" className="w-full rounded-lg border border-white/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Bagian Bawah: Companies & CTA */}
      <div className="mx-auto w-full max-w-7xl flex flex-col md:flex-row justify-between items-end mt-4">
        <div className="ml-10">
          <p className="text-white font-medium mb-3 font-semibold">Companies I've Contributed To :</p>
          <div className="flex items-center gap-6">
            <img src="app-icon/logo-white-erajaya.png" alt="Erajaya" className="h-8 grayscale hover:grayscale-0 transition-all" />
            <img src="app-icon/logo-white-telkom.png" alt="Telkom" className="h-10 grayscale hover:grayscale-0 transition-all" />
            <img src="app-icon/logo-white-surveyor.svg" alt="Surveyor" className="h-10 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mr-5 gap-6 mt-8 md:mt-0">
          <div className="flex gap-4">
            <img src="app-icon/icons8-whatsapp-logo-96.png" alt="WA" className="w-6 h-6 cursor-pointer" />
            <img src="app-icon/icons8-linkedin-logo-500.png" alt="LinkedIn" className="w-6 h-6 cursor-pointer" />
            <img src="app-icon/icons8-email-96.png" alt="Email" className="w-6 h-6 cursor-pointer" />
            <img src="app-icon/icons8-github-logo-480.png" alt="GitHub" className="w-6 h-6 cursor-pointer" />
          </div>
          <div className="flex gap-4">
            <button className="rounded-full bg-teal-400 px-6 py-2.5 font-bold text-[#0B0F19] hover:bg-teal-300 transition-colors">
              See All Projects
            </button>
            <button className="rounded-full bg-teal-400 px-6 py-2.5 font-bold text-[#0B0F19] hover:bg-teal-300 transition-colors">
              View CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}