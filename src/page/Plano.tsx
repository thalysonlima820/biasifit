import { Link } from 'react-router-dom';

const Plano = () => {

  return (
    <>
      <Link to="/">
        <img className='logo' src="/logo.png" alt="Logo" />
      </Link>

      <h1 className='title'>NOSSOS PLANOS</h1>

      <div className='boxMaster'>

        <div className='box'>
          <h1 className='texth1'>TRIMESTRAL</h1>
          <h1 className='textValor'><span>R$ 166</span>,67</h1>
          <p className='textmes'>por mês</p>

          <a href="https://evo-totem.w12app.com.br/biasifit/1/site/QhXXzoY7OMy%5BPLUS%5DFpULG15Wrw%5BEQUAL%5D%5BEQUAL%5D" target="_blank" rel="noopener noreferrer">
            <button className='btnContratar'>CONTRATAR AGORA</button>
          </a>
          <h4 className='textmensalidade'>R$ 500,00 em até 3x</h4>
          <h3 className='textDuracao'>Duração de 3 meses</h3>
        </div>

        <div className='box boxMelhor'>
          <div className='boxVanta'>
            <h1 className='textVantajoso'>MAIS VANTAJOSO</h1>
          </div>
          <h1 className='texth1'>SEMESTRAL</h1>
          <h1 className='textValor'><span>R$ 130</span>,00</h1>
          <p className='textmes'>por mês</p>

          <a href="https://evo-totem.w12app.com.br/biasifit/1/site/QhXXzoY7OMy%5BPLUS%5DFpULG15Wrw%5BEQUAL%5D%5BEQUAL%5D" target="_blank" rel="noopener noreferrer">
            <button className='btnContratar btnContratarMelhor'>CONTRATAR AGORA</button>
          </a>

          <h4 className='textmensalidade'>R$ 779,99 em até 6x</h4>
          <h3 className='textDuracao'>Duração de 6 meses</h3>

        </div>

        <div className='box'>
          <h1 className='texth1'>DIÁRIA</h1>
          <h1 className='textValor'><span>R$ 25</span>,00</h1>
          <p className='textmes'>por dia</p>

          <a href="https://evo-totem.w12app.com.br/biasifit/1/site/QhXXzoY7OMy%5BPLUS%5DFpULG15Wrw%5BEQUAL%5D%5BEQUAL%5D" target="_blank" rel="noopener noreferrer">
            <button className='btnContratar'>CONTRATAR AGORA</button>
          </a>
          <h4 className='textmensalidade'>R$ 25 por dia</h4>
          <h3 className='textDuracao'>Duração de 1 dia</h3>
        </div>

      </div>
    </>
  )
}


export default Plano