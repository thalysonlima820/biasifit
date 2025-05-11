import img1 from '../public/1_amarelo_.png';
import img2 from '../public/2_amarelo_.png';
import mulher from '../public/mulher.png';
import './App.css';
import '../public/css/planos.css';
import '../public/css/sobre.css';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Plano from './page/Plano';
import { Sobre } from './page/Sobre';

function App() {
  const mulherRef = useRef<HTMLImageElement>(null);
  const textoRef = useRef<HTMLDivElement>(null);
  const [showAnimation, setShowAnimation] = useState(false);

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

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div>
        <Link to="/">
          <img className='logo' src="/logo.png" alt="Logo" />
        </Link>

        <div className='options'>
          <p className='txtp' onClick={() => scrollToSection('planos')}>PLANOS</p>
          <p className='txtp' onClick={() => scrollToSection('sobre')}>SOBRE A ACADEMIA</p>
          <p className='txtp'>
            <a href="https://wa.me/5591980473620?text=Olá,%20quero%20mais%20informações%20sobre%20a%20academia!">FALE CONOSCO</a>
          </p>
        </div>
      </div>

      <img className='amarelo1' src={img1} alt="" />

      <div className={`textAvalia ${showAnimation ? 'slide-left' : ''}`} ref={textoRef}>
        <h1 className='faca'>FAÇA A SUA</h1>
        <h1 className='avaliacao'>AVALIAÇÃO</h1>
        
        <a
          className='btna'
          href="https://wa.me/5591980473620?text=Olá,%20gostaria%20de%20marcar%20minha%20avaliação!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn">
            <span className="btnTxt">CLIQUE AQUI</span>
          </button>
        </a>
      </div>

      <img className='amarelo2' src={img2} alt="" />
      <img className={`mulher ${showAnimation ? 'slide-right' : ''}`} ref={mulherRef} src={mulher} alt="" />

      {/* 🔽 SEÇÕES COM ID */}
      <br /><br />
      <div id="planos"><Plano /></div>
      <div id="sobre"><Sobre /></div>
    </>
  );
}

export default App;
