import { useState, useEffect, useRef } from 'react';

const waveBarsBase = [
  20, 40, 30, 60, 40, 80, 50, 100, 70, 90, 
  50, 80, 60, 100, 70, 90, 50, 80, 60, 100, 
  70, 90, 40, 60, 30, 40, 20
];

export default function DuoNote() {
  const [activeAudio, setActiveAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Referensi untuk Web Audio API & Animasi (Bypass React Re-render)
  const audioCtxRef = useRef(null);
  const analyserRef = useRef(null);
  const barsRef = useRef([]);
  const requestRef = useRef(null);
  const tickRef = useRef(0);
  const currentScalesRef = useRef(new Array(27).fill(0.1));

  // Fungsi Inisialisasi AudioContext (Hanya dipanggil sekali saat klik pertama)
  const initAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = new AudioContext();
      analyserRef.current = audioCtxRef.current.createAnalyser();
      analyserRef.current.fftSize = 64; 
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  };

  const playSound = (audioUrl) => {
    // Matikan audio yang sedang menyala sebelumnya
    if (activeAudio) {
      activeAudio.pause();
      activeAudio.currentTime = 0;
    }

    initAudioContext();

    const audio = new Audio(audioUrl);
    audio.crossOrigin = "anonymous"; // Berjaga-jaga jika file dari luar
    
    // Hubungkan audio elemen ini ke Analyser API
    const source = audioCtxRef.current.createMediaElementSource(audio);
    source.connect(analyserRef.current);
    analyserRef.current.connect(audioCtxRef.current.destination);

    setActiveAudio(audio);
    setIsPlaying(true);
    audio.play();

    audio.onended = () => {
      setIsPlaying(false);
    };
  };

  // LOOP ANIMASI: Menggunakan requestAnimationFrame (60 FPS Mulus)
  const animate = () => {
    tickRef.current += 1;
    let dataArray = null;

    // Hanya ambil data frekuensi jika audio sedang menyala
    if (isPlaying && analyserRef.current) {
      dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
      analyserRef.current.getByteFrequencyData(dataArray);
    }

    barsRef.current.forEach((bar, i) => {
      if (!bar) return;
      let targetScale = 0.1;
      const jaggedMultiplier = (i % 2 === 0) ? 1.0 : 2;

      if (isPlaying && dataArray) {
        // KONDISI ACTIVE
        const rawIntensity = (dataArray[i] || 0) / 255;
        const audioIntensity = Math.pow(rawIntensity, 1.5);
        const baseScale = waveBarsBase[i] / 100;
        targetScale = 0.1 + (baseScale * audioIntensity * 2.0);
      } else {
        // KONDISI IDLE
        const wave1 = Math.sin(tickRef.current * 0.05 - i * 0.3);
        const wave2 = Math.cos(tickRef.current * 0.03 + i * 0.6) * 0.5;
        targetScale = 0.15 + ((wave1 + wave2 + 1.5) * 0.06 * jaggedMultiplier);
      }

      // ujung mengecil
      const distanceToCenter = Math.abs(i - 13) / 13; 
      const edgeMultiplier = 1 - Math.pow(distanceToCenter, 1.5); 
      targetScale = targetScale * edgeMultiplier;
      targetScale = Math.max(targetScale, 0.02);

      // transisi halus
      const smoothing = isPlaying ? 0.3 : 0.05; 
      currentScalesRef.current[i] += (targetScale - currentScalesRef.current[i]) * smoothing;
      bar.style.transform = `scaleY(${currentScalesRef.current[i]})`;
    });

    requestRef.current = requestAnimationFrame(animate);
  };

  // Jalankan loop animasi saat komponen pertama kali dirender
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current); // Bersihkan saat berpindah halaman
  });

  return (
    <div className="bg-black min-h-screen text-[#FFFDF1] font-['CanvaSans'] overflow-x-hidden">

      {/* ================= SECTION 0 : NAVBAR ================= */}
      <nav className="absolute top-0 w-full flex justify-between items-center px-8 py-4 bg-gradient-to-b from-[#222] to-transparent z-50">
        <div className="font-['CurveRetro'] text-2xl tracking-wider">SDO - TEAM</div>
        <div className="flex gap-8 font-bold text-lg">
          <a href="#event" className="hover:text-gray-400 font-['CurveRetro'] transition-colors">Event</a>
          <a href="#sponsor" className="hover:text-gray-400 font-['CurveRetro'] transition-colors">Sponsor</a>
          <a href="#partnership" className="hover:text-gray-400 font-['CurveRetro'] transition-colors">Partnership</a>
        </div>
      </nav>

      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-end overflow-hidden pt-16">
        {/* Background Typography */}
        <div className="absolute bottom-38 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0">
          <h1 className="text-[20vw] leading-none font-['Genty'] text-[#FDF9EE] whitespace-nowrap opacity-90 select-none">
            Duo Note
          </h1>
        </div>

        {/* Hero Image (Novi & Dewi) */}
        <img 
          src="../src/assets/duo-note/novi-dewi-hero-flip.png" 
          alt="Novi and Dewi" 
          className="relative z-10 left-5 bottom-20 w-full max-w-xl object-contain drop-shadow-2xl"
        />

        {/* Names */}
        <div className="absolute bottom-20 w-full flex justify-between px-64 z-20">
          <h2 className="text-6xl font-['Laries'] text-[#bdc1bf]">Novi</h2>
          <h2 className="text-6xl font-['Laries'] text-[#5a708e]">Dewi</h2>
        </div>
      </section>

      {/* ================= SECTION 2: PODCAST & SOUNDBOARD ================= */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center relative py-20">
        <div className="text-center mb-16 z-10">
          <h2 className="text-7xl font-['CurveRetro'] tracking-widest">RAPOODDD.....</h2>
          <p className="text-xl font-bold tracking-[0.3em] mt-2 uppercase">Radio Podcast</p>
        </div>

        {/* Area Soundwave & Floating Buttons */}
        <div className="relative w-full max-w-5xl flex items-center justify-center h-[400px]">

          {/* SOUNDWAVE */}
          <div className="flex items-center justify-center gap-1.5 h-32 z-0">
            {waveBarsBase.map((_, index) => (
              <div 
                key={index}
                // Simpan setiap elemen tiang ke dalam ref array agar bisa diubah langsung oleh JS
                ref={(el) => (barsRef.current[index] = el)}
                className="w-2.5 h-full bg-[#db1a95] rounded-full origin-center"
                style={{
                  transform: 'scaleY(0.1)',
                  willChange: 'transform'
                }}
              ></div>
            ))}
          </div>

          {/* Tombol Interaktif dengan Efek Suara */}
          <button 
            onClick={() => playSound('../src/assets/duo-note/radio-podcast.mp4')} 
            className="absolute top-4 left-10 bg-[#FDF9EE] text-[#4a3f35] px-6 py-3 rounded-3xl rounded-bl-none font-bold text-lg hover:scale-110 transition-transform shadow-lg cursor-pointer"
          >
            "Radioo podcast...."
          </button>

          <button 
            onClick={() => playSound('../src/assets/duo-note/hi-ute.mp4')}
            className="absolute right-4 bg-[#FDF9EE] text-[#4a3f35] px-6 py-3 rounded-3xl rounded-bl-none font-bold text-lg hover:scale-110 transition-transform shadow-lg cursor-pointer"
          >
            "Hii Utee...."
          </button>

          <button 
            onClick={() => playSound('../src/assets/duo-note/huhuw.mp4')} 
            className="absolute top-0 right-10 bg-[#FDF9EE] text-[#4a3f35] px-6 py-3 rounded-3xl rounded-bl-none font-bold text-lg hover:scale-110 transition-transform shadow-lg cursor-pointer"
          >
            "Huhuwww...."
          </button>

          <button 
            onClick={() => playSound('../src/assets/duo-note/halo-kakak-nopi.mp4')} 
            className="absolute bottom-12 left-4 bg-[#FDF9EE] text-[#4a3f35] px-6 py-3 rounded-3xl rounded-bl-none font-bold text-lg hover:scale-110 transition-transform shadow-lg cursor-pointer"
          >
            "Halo kakak Novii...."
          </button>

          <button 
            onClick={() => playSound('../src/assets/duo-note/hai-hai-halo.mp4')} 
            className="absolute bottom-2 right-20 bg-[#FDF9EE] text-[#4a3f35] px-6 py-3 rounded-3xl rounded-bl-none font-bold text-lg hover:scale-110 transition-transform shadow-lg cursor-pointer"
          >
            "Hai hai halo...."
          </button>
        </div>
      </section>

      {/* ================= SECTION 3: EXCLUSIVE ALBUM ================= */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center py-20 px-8">
        <h2 className="text-6xl font-['CurveRetro'] mb-20 uppercase tracking-widest text-center">
          Exclusive Album
        </h2>
        
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            {/* Gambar Album */}
            <img 
              src="/album-cover.jpg" 
              alt="Exclusive Album Cover" 
              className="w-[450px] h-[450px] object-cover rounded-[3rem] shadow-2xl"
            />
          </div>
          
          <div className="text-[#FDF9EE] text-justify leading-relaxed text-lg">
            <p>
              O.. Ya menghadirkan kisah tentang sebuah pertemuan singkat yang 
              tanpa diduga meninggalkan kesan mendalam. Berawal dari tatapan 
              pertama, tumbuh rasa yang tak sempat diungkapkan karena waktu 
              mempertemukan mereka hanya sekejap. Meski tak pernah saling 
              mengenal, kenangan akan sosok itu terus hidup, menyisakan 
              harapan bahwa takdir suatu hari akan mempertemukan mereka 
              kembali. Dengan balutan melodi yang ringan dan hangat, lagu ini 
              menggambarkan perpaduan antara rasa kagum, penyesalan atas 
              kesempatan yang terlewat, dan keyakinan bahwa setiap 
              pertemuan memiliki alasan, serta setiap kisah cinta memiliki 
              waktunya sendiri untuk berlanjut.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: 2026 TOUR ================= */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center py-20 px-8">
        <h2 className="text-6xl font-['CurveRetro'] mb-20 uppercase tracking-widest text-center">
          2026 Tour
        </h2>
        
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Kolom Kiri: Jadwal Tour */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#FDF9EE] text-black text-center py-5 rounded-full font-bold text-xl hover:bg-gray-200 transition-colors cursor-default">
              Jakarta - 10.10.26
            </div>
            <div className="bg-[#FDF9EE] text-black text-center py-5 rounded-full font-bold text-xl hover:bg-gray-200 transition-colors cursor-default">
              Semarang - 15.10.26
            </div>
            <div className="bg-[#FDF9EE] text-black text-center py-5 rounded-full font-bold text-xl hover:bg-gray-200 transition-colors cursor-default">
              Palembang - 04.11.26
            </div>
            <div className="bg-[#FDF9EE] text-black text-center py-5 rounded-full font-bold text-xl hover:bg-gray-200 transition-colors cursor-default">
              Makassar - 31.12.26
            </div>
          </div>
          
          {/* Kolom Kanan: Poster */}
          <div className="flex justify-center">
            <img 
              src="/tour-poster.jpg" 
              alt="Tour Poster" 
              className="w-full max-w-sm object-cover border-4 border-transparent hover:border-[#FDF9EE] transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: FOOTER ================= */}
      <footer className="w-full py-8 border-t border-gray-800 text-center text-sm text-gray-400 mt-10">
        <p>&copy; {new Date().getFullYear()} Duo Note X adilagagagah. All rights reserved.</p>
      </footer>

    </div>
  );
}