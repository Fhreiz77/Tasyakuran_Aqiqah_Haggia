const Route = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 py-3 px-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="text-[#FF90BB] font-bold text-lg" style={{fontFamily: 'Georgia, serif'}}>
          Hagia Sheena
        </div>
        
        <div className="flex gap-4 md:gap-8">
          <button 
            onClick={() => scrollToSection('Hero')}
            className="text-gray-700 hover:text-[#FF90BB] transition-colors text-sm md:text-base"
          >
            Beranda
          </button>
          <button 
            onClick={() => scrollToSection('Events')}
            className="text-gray-700 hover:text-[#FF90BB] transition-colors text-sm md:text-base"
          >
            Acara
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Route;
