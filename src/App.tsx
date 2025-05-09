import img1 from '../public/1_amarelo_.png';
import img2 from '../public/2_amarelo_.png';
import mulher from '../public/mulher.png';
import './App.css';
import '../public/css/planos.css';
import '../public/css/sobre.css';
import { useEffect, useRef, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Plano from './page/Plano';
import { Sobre } from './page/Sobre';

function App() {
  const mulherRef = useRef<HTMLImageElement>(null);
  const textoRef = useRef<HTMLDivElement>(null);
  const [showAnimation, setShowAnimation] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (textoRef.current) {
      observer.observe(textoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (location.pathname === '/') {
    return (
      <>
        <div>
          <Link to="/">
            <img className='logo' src="/logo.png" alt="Logo" />
          </Link>

          <div className='options'>
            <p className='txtp'><Link to="/planos">PLANOS</Link></p>
            <p className='txtp'><Link to="/sobre">SOBRE A ACADEMIA</Link></p>
            <p className='txtp'><Link to="/contato">FALE CONOSCO</Link></p>
          </div>
        </div>

        <img className='amarelo1' src={img1} alt="" />

        <div
          className={`textAvalia ${showAnimation ? 'slide-left' : ''}`}
          ref={textoRef}
        >
          <h1 className='faca'>FAÇA A SUA</h1>
          <h1 className='avaliacao'>AVALIAÇÃO</h1>
          <button className='btn'>
            <span className='btnTxt'>CLIQUE AQUI</span>
          </button>
        </div>

        <img className='amarelo2' src={img2} alt="" />
        <img
          className={`mulher ${showAnimation ? 'slide-right' : ''}`}
          ref={mulherRef}
          src={mulher}
          alt=""
        />
      </>
    );
  }

  return (
    <Routes>
      <Route path="/planos" element={<Plano />} />
      <Route path="/sobre" element={<Sobre/>} />
    </Routes>
  );
}

export default App;
