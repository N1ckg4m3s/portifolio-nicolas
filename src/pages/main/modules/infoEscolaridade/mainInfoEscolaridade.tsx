import React from "react";
import './mainInfoEscolaridade.css'

import TituloSection from "../../../../components/tituloSection/tituloSection";
import EscolaridadeCard from "../../../../components/escolaridadeCard/escolaridadeCard";

import { ReactComponent as Escolaridade } from "../../../../assets/icons/Escolaridade_icon.svg";
import { ReactComponent as Work } from "../../../../assets/icons/Work_icon.svg";

const MainInfoEscolaridade: React.FC = () => {
    return <section className='infoEscolaridade Flex-Center'>
        <TituloSection
            texto={'escolaridade'}
        />

        <div className='IconSelectorEscolaridade Flex-Center'>
            <input type="checkbox" />
            <div className='Seletor' />
            <div className='iconbox Flex-Center firstIcon' style={{ left: 2 }}>
                <Escolaridade />
            </div>
            <div className='iconbox Flex-Center secondIcon' style={{ right: 2 }}>
                <Work />
            </div>
        </div>

        <article className=''>
            <div className="EscolaridadeIcons">
                <EscolaridadeCard
                    icon={<Escolaridade />}
                    side={true}
                    tempo='06/2022 - 12/2024'
                    title='DESENVOLVIMENTO FULL-STACK  --  ESTACIO'
                />
                <EscolaridadeCard
                    icon={<Escolaridade />}
                    side={true}
                    tempo='06/2022 - 12/2024'
                    title='DESENVOLVIMENTO FULL-STACK  --  ESTACIO'
                />
            </div>

            <div className='VerticalLine'>
                <div className="lowLine"></div>
                <div className="mediumLine"></div>
                <div className="bigLine"></div>
                <div></div>
                <div className="bigLine"></div>
                <div className="mediumLine"></div>
                <div className="lowLine"></div>
            </div>

            <div className="ExperienciaIcons">
                <EscolaridadeCard
                    icon={<Work />}
                    side={false}
                    tempo='##/## - ##/##'
                    title='----------'
                    subtitle='----------'
                />
                <EscolaridadeCard
                    icon={<Work />}
                    side={false}
                    tempo='##/## - ##/##'
                    title='----------'
                    subtitle='----------'
                />
                <EscolaridadeCard
                    icon={<Work />}
                    side={false}
                    tempo='##/## - ##/##'
                    title='----------'
                    subtitle='----------'
                />
            </div>
        </article>
    </section>
}

export default MainInfoEscolaridade