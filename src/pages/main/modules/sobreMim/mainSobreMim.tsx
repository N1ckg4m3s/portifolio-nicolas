import React from "react";
import './mainSobreMim.css'

import TituloSection from "../../../../components/tituloSection/tituloSection";
import SimpleCard from "../../../../components/simpleCard/simpleCard";

const mainSobreMim: React.FC = () => {
    return <section className='sobreMim'>
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
}

export default mainSobreMim