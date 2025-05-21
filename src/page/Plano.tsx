import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


const Plano = () => {

  return (
    <>
      <div className='pc'>
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

              <a href="https://evo-totem.w12app.com.br/biasifit/1/site/QhXXzoY7OMy%5BPLUS%5DFpULG15Wrw%5BEQUAL%5D%5BEQUAL%5D" target="_blank" rel="noopener noreferrer">
                <button className='btnContratar'>CONTRATAR AGORA</button>
              </a>
              <h4 className='textmensalidade'>R$ 500,00 em até 3x</h4>
              <h3 className='textDuracao'>Duração de 3 meses</h3>
            </div>


            <a href="https://evo-totem.w12app.com.br/biasifit/1/site/QhXXzoY7OMy%5BPLUS%5DFpULG15Wrw%5BEQUAL%5D%5BEQUAL%5D" target="_blank" rel="noopener noreferrer">
              <button className='btnContratar btnContratarMelhor'>CONTRATAR AGORA</button>
            </a>

            <div className='box boxMelhor'>
              <div className='boxVanta'>
                <h1 className='textVantajoso'>MAIS VANTAJOSO</h1>
              </div>
              <h1 className='texth1'>SEMESTRAL</h1>
              <h1 className='textValor'><span>R$ 130</span>,00</h1>
              <p className='textmes'>por mês</p>

              <a href="https://evo-totem.w12app.com.br/biasifit/1/site/QhXXzoY7OMy%5BPLUS%5DFpULG15Wrw%5BEQUAL%5D%5BEQUAL%5D" target="_blank" rel="noopener noreferrer">
                <button className='btnContratar'>CONTRATAR AGORA</button>
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
        </div>
      </div>
      <div className='phone'>
        <div className='TitleLocalizacao'>
          <h1>Onde estamos</h1>
          <h1 className='LocalizadosPhone'>localizados!</h1>
        </div>

        <h1 className='seta'><FontAwesomeIcon icon={faArrowDown} /></h1>
        

        <a
          href="https://www.google.com/maps/place/Academia+Biasifit/@-2.9827751,-47.3569127,17z/data=!3m1!4b1!4m6!3m5!1s0x92b75dec6b8a0853:0x2723e2bc38ea9fc3!8m2!3d-2.9827751!4d-47.3543378!16s%2Fg%2F11j2y1f2sy?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="imgLocalizacao">
          </div>
        </a>

        <div className='TitlePhone'>
          <h1>Vem se <span className='amarelo'>Matricular</span> e <span className='amarelo'>treinar</span > com <span className='amarelo'>a gente</span></h1>
        </div>

        <div className='PlanosPhone'>

          <div className='MelhorPlanoPhone'>
            <div className="TitlePlanoMelhorPhone">
              <h2>Plano mais <span>Vantajoso</span></h2>
            </div>

            <div className='PlanoInforPhone'>
              <h3>
                <span className='PlanoPhone'>Plano</span> <br />
                <span className='Semestrasl'>Semestral</span>
              </h3>
              <p>Treine em nossa academia <br /> por apenas.</p>
            </div>

            <div className='ValorPlanoPhone'>
              <h1><span>R$</span>130<span className='CentavosPhonePlano'>,00</span></h1>
              <h3>R$ 779,99 em até 6x</h3>
            </div>

            <div>
              <button className='btnContratarPhone'><a href="https://evo-totem.w12app.com.br/biasifit/1/site/QhXXzoY7OMy%5BPLUS%5DFpULG15Wrw%5BEQUAL%5D%5BEQUAL%5D">CONTRATAR AGORA</a></button>
            </div>

            <div className='SobrePlanoPhone'>
              <p>*Mensalidade válida com duração de 6 meses*</p>
            </div>
            <br />
          </div>
          <br /> <br />
          <div className='PlanoPhoneOfertas'>

            <div className='PlanoInforPhone normalPlanoFone'>
              <h3>
                <span className='PlanoPhone'>Plano</span> <br />
                <span className='Semestrasl'>Trimestral</span>
              </h3>
              <p>Treine em nossa academia <br /> por apenas.</p>
            </div>

            <div className='ValorPlanoPhone ValorPlanoNormalPhone'>
              <h1><span>R$</span>166<span className='CentavosPhonePlano'>,67</span></h1>
              <h3>R$ 500,00 em até 3x</h3>
            </div>

            <div>
              <div>
                <button className='btnContratarPhone btnPlanoNormal'><a href="https://evo-totem.w12app.com.br/biasifit/1/site/QhXXzoY7OMy%5BPLUS%5DFpULG15Wrw%5BEQUAL%5D%5BEQUAL%5D">CONTRATAR AGORA</a></button>
              </div>
            </div>

            <div className='SobrePlanoPhone sobrePlanoNormalPhone'>
              <p>*Mensalidade válida com duração de 6 meses*</p>
            </div>
            <br />
          </div>
          <br /> <br />
          <div className='PlanoPhoneOfertas'>

            <div className='PlanoInforPhone normalPlanoFone'>
              <h3>
                <span className='PlanoPhone'>Plano</span> <br />
                <span className='Semestrasl'>Diário</span>
              </h3>
              <p>Treine em nossa academia <br /> por apenas.</p>
            </div>

            <div className='ValorPlanoPhone'>
              <h1><span>R$</span>25<span className='CentavosPhonePlano'>,00</span></h1>
              <h3>Diaria</h3>
            </div>

            <div>
              <button className='btnContratarPhone btnPlanoNormal'><a href="https://evo-totem.w12app.com.br/biasifit/1/site/QhXXzoY7OMy%5BPLUS%5DFpULG15Wrw%5BEQUAL%5D%5BEQUAL%5D">CONTRATAR AGORA</a></button>
            </div>

            <div className='SobrePlanoPhone sobrePlanoNormalPhone'>
              <p>*Mensalidade válida com duração de 6 meses*</p>
            </div>
            <br />
          </div>

        </div>



      </div>

    </>
  )
}


export default Plano