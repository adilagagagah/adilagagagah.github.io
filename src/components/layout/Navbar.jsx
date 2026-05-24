export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0B0F19]/80 backdrop-blur-xl">
      
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <h1 className="text-lg font-semibold tracking-wide">
          Gagah.
        </h1>

        <nav className="hidden gap-8 md:flex">

          <a href="#projects" className="text-sm text-gray-400 hover:text-white">
            Projects
          </a>

          <a href="#experience" className="text-sm text-gray-400 hover:text-white">
            Experience
          </a>

          <a href="#contact" className="text-sm text-gray-400 hover:text-white">
            Contact
          </a>

        </nav>

      </div>

    </header>
  );
}