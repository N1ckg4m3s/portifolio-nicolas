import React, { useEffect, useState } from "react";
import './mainInfoProjetos.css'

import TituloSection from "../../../../components/tituloSection/tituloSection";
import Carousel from "../../../../components/carousel/carousel";
import CardProjetoMain from "../../../../components/cardProjetoMain/cardProjetoMain";
import { resumoProjeto } from "../../../../controller/types";
import projetoController from "../../../../controller/projetoController";

const MainInfoProjetos: React.FC = () => {

    const [projetos, SetProjetos] = useState<Map<string, resumoProjeto>>()

    const obterDados = async () => {
        const resumoDosProjetos: Map<string, resumoProjeto> = await new projetoController().obterResumoDosProjetosDaCapa()

        SetProjetos(resumoDosProjetos);
    }

    useEffect(() => {
        obterDados()
    }, [])

    return <section className='infoProjetos' id="MainProjetos">
        <TituloSection
            texto={'projetos'}
        />
        <Carousel
            type='card'
            maxheight={220}
            dadosCard={projetos}
            build={(item, index) => (<CardProjetoMain
                key={index}
                click={true}
                index={index}
                capa={item.capa}
                nome={item.nome}
                type={item.type}
            />)}
        />
    </section>
}

export default MainInfoProjetos