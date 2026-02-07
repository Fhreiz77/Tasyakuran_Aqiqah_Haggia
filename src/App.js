import React, { useState } from 'react';
import Hero from './components/Hero';
import EventDetail from './components/EventDetail';
import Footer from './components/Footer';
import Route from './components/Route';

function App() {
  const [showRoute, setShowRoute] = useState(false);

  // Efek untuk menampilkan navigasi saat scroll
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowRoute(true);
      } else {
        setShowRoute(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Navigasi */}
      {showRoute && <Route />}

      {/* Konten Utama */}
      <div className="overflow-hidden">
        <div id="Hero"><Hero /></div>
        <div id="Events"><EventDetail /></div>
        <Footer />
      </div>

      {/* Musik Latar (hidden audio element) */}
      <audio id="bgMusic" loop>
        <source src="/music/background.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default App;
