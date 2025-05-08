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
          <h1 className='texth1'>SEMESTRAL</h1>
          <h1 className='textValor'><span>R$ 130</span>,00</h1>
          <p className='textmes'>por mês</p>

          <button className='btnContratar'>CONTRATAR AGORA</button>

          <h4 className='textmensalidade'>R$ 779,99 em até 6x</h4>
        </div>
        <div className='box'>
          <h1 className='texth1'>TRIMESTRAL</h1>
          <h1 className='textValor'><span>R$ 166</span>,67</h1>
          <p className='textmes'>por mês</p>

          <button className='btnContratar'>CONTRATAR AGORA</button>
          <h4 className='textmensalidade'>R$ 500,00 em até 3x</h4>
        </div>
        <div className='box'>
          <h1 className='texth1'>DIÁRIA</h1>
          <h1 className='textValor'><span>R$ 25</span>,00</h1>

          <button className='btnContratar'>CONTRATAR AGORA</button>
        </div>
      </div>

    </>
  )
}

export default Plano