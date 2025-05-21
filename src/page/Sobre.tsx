import img1 from '../../public/1_amarelo_.png';
import img2 from '../../public/2_amarelo_.png';
import braco from '../../public/braco.png';
import maca from '../../public/maca.png';
import peso from '../../public/peso.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


export const Sobre = () => {



    return (
        <>
            <div className='pc'>
                <Link to="/">
                    <img className='logo' src="/logo.png" alt="Logo" />
                </Link>
                <img className='amarelo1' src={img1} alt="" />

                <h1 className='title'>SOBRE A ACADEMIA</h1>
                <div className="sobre">
                    <div className="boxSobre">
                        <div className="boxIcone">
                            <img className='imgicon' src={peso} alt="ícone peso" />
                        </div>
                        <div className="boxTexto">
                            <h2>Nossa Missão</h2>
                            <p>Transformar vidas através do exercício físico com acompanhamento profissional qualificado, promovendo saúde, desempenho e segurança.</p>
                        </div>
                    </div>

                    <div className="boxSobre">
                        <div className="boxIcone">
                            <img className='imgicon' src={braco} alt="ícone braço" />
                        </div>
                        <div className="boxTexto">
                            <h2>Nossos Deveres</h2>
                            <p>Na Biasi Fit, todos os treinos são orientados por professores formados em Educação Física. Aqui, você não é mais um – recebe atenção real, técnica e motivada por resultados.</p>
                        </div>
                    </div>

                    <div className="boxSobre">
                        <div className="boxIcone">
                            <img className='imgicon' src={maca} alt="ícone maçã" />
                        </div>
                        <div className="boxTexto">
                            <h2>Nossos Valores</h2>
                            <p>Profissionalismo, resultado, respeito, evolução. Valorizamos a formação acadêmica, o cuidado individual e o progresso constante dos nossos alunos.</p>
                        </div>
                    </div>

                </div>

                <img className='amarelo2' src={img2} alt="" />
            </div>

            <div className='phone'>
                <br /><br />
                <a
                    href="https://www.google.com/maps/place/Academia+Biasifit/@-2.9827751,-47.3569127,17z/data=!3m1!4b1!4m6!3m5!1s0x92b75dec6b8a0853:0x2723e2bc38ea9fc3!8m2!3d-2.9827751!4d-47.3543378!16s%2Fg%2F11j2y1f2sy?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="imgLocalizacao imagem3">
                    </div>
                </a>

                <div className='TitlePhone'>
                    <h1>Sobre a <span className='amarelo'>academia</span></h1>
                </div>

                <div className="sobrephone">
                    <div className="classSobreFone">
                        <div className="TitleSobrePhone">
                            Nossa Missão
                        </div>
                        <p>Transformar vidas através do exercício físico com acompanhamento profissional qualificado, promovendo saúde, desempenho e segurança.</p>
                    </div>
                    <br /><br />
                    <div className="classSobreFone">
                        <div className="TitleSobrePhone">
                            Nossos Deveres
                        </div>
                        <p>Na Biasi Fit, todos os treinos são orientados por professores formados em Educação Física. Aqui, você não é mais um – recebe atenção real, técnica e motivada por resultados.</p>
                    </div>
                    <br /><br />
                    <div className="classSobreFone">
                        <div className="TitleSobrePhone">
                            Nossos Valores
                        </div>
                        <p>Profissionalismo, resultado, respeito, evolução. Valorizamos a formação acadêmica, o cuidado individual e o progresso constante dos nossos alunos.</p>
                    </div>
                </div>

                <h4 className='SigaPhone'>Siga o nosso  instagram <FontAwesomeIcon icon={faInstagram} /><a href="https://www.instagram.com/biasifitacademia/">@biasifitacademia</a></h4>
                <br /><br /><br />
            </div>
        </>
    );
};
