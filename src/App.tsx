import img1 from './1_amarelo_.png'
import img2 from './2_amarelo_.png'
import mulher from './mulher.png'
import './App.css'

function App() {

  return (
    <>
      <img className='amarelo1' src={img1} alt="" />

      <div className='textAvalia'>
        <h1 className='faca'>FAÇA A SUA</h1>
        <h1 className='avaliacao'>AVALIAÇÃO</h1>
        <button className='btn'><span className='btnTxt'>CLIQUE AQUI</span></button>
      </div>
      <img className='amarelo2' src={img2} alt="" />

      <img className='mulher' src={mulher} alt="" />
    </>
  )
}

export default App
