export default function Contact() {
  return (
    <section id="contact" className="relative mt-16 pt-32 pb-16 overflow-hidden">

      {/* BACKGROUND PATTERN */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "url('/abstract-pattern-line.png')",
          backgroundSize: "cover", 
          backgroundPosition: "50% 67%", 
          backgroundRepeat: "no-repeat",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 20%)"
        }}
      />

      {/* CONTENT CONTAINER */}      
      <div className="flex-grow flex flex-col items-center justify-center mx-auto max-w-4xl text-center z-10 relative w-full h-full py-12">
        <h2 className="mb-4 text-4xl md:text-5xl font-bold text-white">Let's Build Something Useful</h2>
        <p className="mb-8 text-lg text-gray-300">Available for freelance collaboration and AI/data projects</p>
        
        <div className="flex justify-center gap-6">
            <img src="/app-icon/icons8-whatsapp-logo-96.png" alt="WA" className="w-8 h-8 cursor-pointer opacity-90 hover:opacity-100 transition-opacity" />
            <img src="/app-icon/icons8-linkedin-logo-500.png" alt="LinkedIn" className="w-8 h-8 cursor-pointer opacity-90 hover:opacity-100 transition-opacity" />
            <img src="/app-icon/icons8-email-96.png" alt="Email" className="w-8 h-8 cursor-pointer opacity-90 hover:opacity-100 transition-opacity" />
            <img src="/app-icon/icons8-github-logo-480.png" alt="GitHub" className="w-8 h-8 cursor-pointer opacity-90 hover:opacity-100 transition-opacity" />
        </div>
      </div>

    </section>
  );
}