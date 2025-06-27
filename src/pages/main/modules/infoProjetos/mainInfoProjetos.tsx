import React from "react";
import './mainInfoProjetos.css'

import TituloSection from "../../../../components/tituloSection/tituloSection";
import Carousel from "../../../../components/carousel/carousel";
import CardProjetoMain from "../../../../components/cardProjetoMain/cardProjetoMain";
import { resumoProjeto } from "../../../../controller/types";

interface props {
    projetos: Map<string, resumoProjeto>
}

const MainInfoProjetos: React.FC<props> = ({ projetos }) => {
    return <section className='infoProjetos' id="MainProjetos">
        <TituloSection texto={'projetos em destaque'} />
        <Carousel
            type='card'
            maxheight={220}
            dadosCard={projetos}
            build={(item, index, i) => {
                return <CardProjetoMain
                    key={`${index}-${i}`}
                    click={true}
                    index={index}
                    capa={item.capa}
                    nome={item.nome}
                    type={item.type}
                />
            }}
        />
    </section>
}

export default MainInfoProjetos