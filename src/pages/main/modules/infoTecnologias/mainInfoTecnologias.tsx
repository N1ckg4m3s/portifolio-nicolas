import React from "react";
import './mainInfoTecnologias.css'

import TituloSection from "../../../../components/tituloSection/tituloSection";
import Carousel from "../../../../components/carousel/carousel";

const mainInfoTecnologias: React.FC = () => {
    return <section className='infoTecnologias' id="MainTecnologias">
        <TituloSection
            texto={'tecnologias'}
        />

        <Carousel
            type='icons'
            maxheight={70}
        />
    </section>
}

export default mainInfoTecnologias