import img1 from '../public/1_amarelo_.png'
import img2 from '../public/2_amarelo_.png'
import mulher from '../public/mulher.png'
import logo from '../public/logo.png'
import './App.css'
import { useEffect, useRef, useState } from 'react';


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

  return (
    <>
      <img className='logo' src={logo} alt="" />
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


export default App
