import React from "react";
import './detalhesTecnologias.css'

import TituloSection from "../../../../components/tituloSection/tituloSection";
import Carousel from "../../../../components/carousel/carousel";

interface props {
    tecnologias: string[]
}

const DetalheTecnologiasUsadas: React.FC<props> = ({ tecnologias }) => {
    return (
        <section className="DetalhesTecnologias Flex-Center">
            <TituloSection texto={'tecnologias'} />

            <Carousel
                type='icons'
                iconesEspecificos={tecnologias}
                maxheight={70}
            />
        </section>
    );
}

export default DetalheTecnologiasUsadas;