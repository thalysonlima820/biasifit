import img1 from '../../public/1_amarelo_.png';
import img2 from '../../public/2_amarelo_.png';
import braco from '../../public/braco.png';
import maca from '../../public/maca.png';
import peso from '../../public/peso.png';
import { Link } from 'react-router-dom';


export const Sobre = () => {
    return (
        <>

            <img className='amarelo1' src={img1} alt="" />

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
        </>

    );
};
