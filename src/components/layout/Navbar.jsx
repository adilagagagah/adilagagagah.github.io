export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0B0F19]/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-lg font-semibold tracking-wide">
          Portofolio Page
        </h1>

        <nav className="hidden gap-6 md:flex mr-6">
          {['Projects', 'Work', 'Education', 'Certifications', 'Tech', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}