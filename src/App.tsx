import img1 from '../public/1_amarelo_.png';
import img2 from '../public/2_amarelo_.png';
import mulher from '../public/mulher.png';
import logo from '../public/logo.png';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Plano from './page/Plano';

function App() {
  const mulherRef = useRef<HTMLImageElement>(null);
  const textoRef = useRef<HTMLDivElement>(null);
  const [showAnimation, setShowAnimation] = useState(false);

  const location = useLocation(); // 👈 Para saber a rota atual

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

  // 👇 Só renderiza a página inicial se estiver na rota "/"
  if (location.pathname === '/') {
    return (
      <>
        <div>
          <img className='logo' src={logo} alt="" />

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

  // 👇 Se não for "/", renderiza apenas as rotas
  return (
    <Routes>
      <Route path="/planos" element={<Plano />} />
      {/* Adicione outras rotas se quiser */}
    </Routes>
  );
}

export default App;
