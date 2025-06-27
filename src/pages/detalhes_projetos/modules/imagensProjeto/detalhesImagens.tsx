import React from "react";
import './detalhesImagens.css'
import TituloSection from "../../../../components/tituloSection/tituloSection";
import Carousel from "../../../../components/carousel/carousel";

interface props {
    imagens: string[]
}

const DetalheImagens: React.FC<props> = ({ imagens }) => {
    return (
        <section className="DetalhesImagens Flex-Center" id='DetalhesImagens'>
            <TituloSection texto={'tecnologias'} />

            <Carousel
                type='images'
                maxheight={220}
                images={imagens}
                build={() => <img />}
            />
        </section>
    );
}

export default DetalheImagens;