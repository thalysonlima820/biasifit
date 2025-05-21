import img1 from '../public/1_amarelo_.png';
import img2 from '../public/2_amarelo_.png';
import mulher from '../public/mulher.png';
import logo from '../public/logo.png';
import './App.css';
import '../public/css/planos.css';
import '../public/css/sobre.css';
import '../public/css/phone/home.css';
import '../public/css/phone/sobrePhone.css';
import '../public/css/phone/planosPhone.css';
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
    <div className='homeprinci'>
      <div className='pc'>
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
      </div>
      <div className='phone'>

        <div className='nav'>
          <div className='logoPhone'>
            <img src={logo} alt="" />
          </div>
          <div >
            <button className='FaleConoscoPhone'> <a href="https://wa.me/5591980473620?text=Olá,%20quero%20mais%20informações%20sobre%20a%20academia!"> Fale Conosco</a></button>
          </div>
        </div>

        <div className='avaliacaoPhone'>
          <h1>FAÇA A SUA <span>AVALIAÇÃO</span></h1>
          <button className='btnClickPhone'> <a  href="https://wa.me/5591980473620?text=Olá,%20gostaria%20de%20marcar%20minha%20avaliação!">CLIQUE AQUI</a> </button>
        </div>

        <div className='MelhorOfertaphone'>
          <div className='TitleMelhorOfertaPhone'>
            <h2>MATRICULE-SE <br /> HOJE</h2>
          </div>

          <div className='PrecoPhone'>

            <div className='divValorPhone'>
              <h1>
                <span className='rs'>R$</span>
                <span className='valorPhone'>130</span>
                <span className='CantoPhone'>
                  <span className='CentavosPhone'>,00</span> <br />
                  <span className='PorMesPhone'>
                    <span className='PorText'>POR</span>
                    <span className='Mesphone'>MÊS</span>
                  </span>
                </span>
              </h1>
            </div>
            <div className='ParcelaPhone'>
              <h1>R$ 779,99 EM ATÉ 6X</h1>
            </div>
            <div className='InforPhone'>
              <p>Mensalidade válida com duração de 6 meses. Consulte e tire suas dúvidas em nosso WhatsApp na opção <span>Fale Conosco</span></p>
            </div>

          </div>

        </div>

        <br /><br />
        <div id="planos"><Plano /></div>
        <div id="sobre"><Sobre /></div>

      </div>
    </div>
  );
}

export default App;
