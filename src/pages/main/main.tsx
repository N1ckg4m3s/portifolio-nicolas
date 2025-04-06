import React, { useEffect, useState } from 'react';
import './main.css';

import NavBar from '../../components/navbar/navbar';
import Fundo from '../../assets/icons/Fudo_Tela_img.png';
import TypingEffect from '../../components/TypingEffect/typing';
import TituloSection from '../../components/tituloSection/tituloSection';
import FooterBar from '../../components/footer/footer';
import SimpleCard from '../../components/simpleCard/simpleCard';
import Carousel from '../../components/carousel/carousel';
import CardProjetoMain from '../../components/cardProjetoMain/cardProjetoMain';

import { ReactComponent as Whatsapp } from "../../assets/icons/WhatsApp_icon.svg";
import { ReactComponent as Email } from "../../assets/icons/Email_Icon.svg";
import { resumoProjeto } from '../../controller/types';
import projetoController from '../../controller/projetoController';

const MainPortifolio: React.FC = () => {

    const [projetos, SetProjetos] = useState<Map<string, resumoProjeto>>()

    const obterDados = async () => {
        const resumoDosProjetos: Map<string, resumoProjeto> = await new projetoController().obterResumoDosProjetosDaCapa()

        SetProjetos(resumoDosProjetos);
    }

    useEffect(() => {
        obterDados()
    }, [])

    return (
        <div className="MainContainer Flex-Center">
            <NavBar />
            <header className="Flex-Center">
                <img src={Fundo} alt="Imagem de fundo com tema de portfólio" />
                <article className="Flex-Center">
                    <h3>Olá, visitante</h3>
                    <h2>Meu nome é <span>Nicolas</span></h2>
                    <h3>Desenvolvedor  <TypingEffect /></h3>

                    <div className="RedesContato Flex-Center">
                        <div className="infinityline"></div>
                        <button className="Flex-Center">
                            <Whatsapp className="SvgWhite-fill" />
                        </button>
                        <button className="Flex-Center">
                            <Email className="SvgWhite-stroke" />
                        </button>
                        <div className="infinityline"></div>
                    </div>
                </article>

                <article className="MaisInfoText Flex-Center">
                    <span>Mais informações</span>
                    <div className="Linha">
                        <div className="Seta"></div>
                    </div>
                </article>
            </header>

            <div className="containerProjeto">
                <section className='sobreMim'>
                    <TituloSection
                        texto={'sobre mim'}
                    />
                    <article>
                        <div className='descricaoSobreMim'>
                            Sou um desenvolvedor Full Stack com experiência em React, Next.js, Angular, Node.js, Python,
                            TypeScript e Flutter. Foco em criar soluções eficientes, escaláveis e com ótima experiência para
                            o usuário.Gosto de resolver problemas e otimizar processos, sempre buscando melhorar performance e
                            qualidade do código. Atualmente, estou aprimorando minhas habilidades e desenvolvendo projetos próprios.
                        </div>
                        <div className='cardsInformacoes Flex-Center'>
                            <SimpleCard tittle='experiência' value='3y+' />
                            <SimpleCard tittle='cursos' value='5+' />
                            <SimpleCard tittle='??????????' value='??' />
                            <SimpleCard tittle='projetos' value='##' />
                        </div>
                    </article>
                </section>

                <section className='infoTecnologias'>
                    <TituloSection
                        texto={'tecnologias'}
                    />

                    <Carousel
                        type='icons'
                        maxheight={70}
                    // iconesEspecificos={['css','express','figma']}
                    />
                </section>

                <section className='infoProjetos'>
                    <TituloSection
                        texto={'projetos'}
                    />
                    <Carousel
                        type='card'
                        maxheight={200}
                        dadosCard={projetos}
                        build={(item, index) => (<CardProjetoMain
                            index={index}
                            capa={item.capa}
                            nome={item.nome}
                            type={item.type}
                        />)}
                    />
                </section>

                <section className='infoEscolaridade'>
                    <TituloSection
                        texto={'escolaridade'}
                    />
                </section>

                <section className='infoContato'>
                    <TituloSection
                        texto={'contato'}
                    />
                </section>
            </div>

            <FooterBar />
        </div>
    );
}

export default MainPortifolio;
