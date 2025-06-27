import React from "react";
import { Link } from "react-router-dom";
import './mainSobreMim.css'

import TituloSection from "../../../../components/tituloSection/tituloSection";
import SimpleCard from "../../../../components/simpleCard/simpleCard";

import { ReactComponent as GitHub } from '../../../../assets/icons/GitHub_icon.svg'

interface props {
    quantidadeDeProjetos: number;
}

const mainSobreMim: React.FC<props> = ({ quantidadeDeProjetos }) => {
    return <section className='sobreMim' id="MainSobre">
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
                <Link to='https://github.com/N1ckg4m3s'
                    target="_blank"
                    rel="noopener noreferrer">
                    <SimpleCard tittle='N1ckg4m3s' value={<GitHub />} />
                </Link>
                <SimpleCard tittle='projetos' value={quantidadeDeProjetos} />
            </div>
        </article>
    </section>
}

export default mainSobreMim