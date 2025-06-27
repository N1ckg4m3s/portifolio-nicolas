import React, { useEffect, useState } from "react"

import NavBar from "../../components/navbar/navbar"
import FooterBar from "../../components/footer/footer"

/* MODULOS */
import MainHeader from "./modules/Header/mainHeader"
import InfoContato from "./modules/infoContato/mainInfoContato"
import InfoEscolaridade from "./modules/infoEscolaridade/mainInfoEscolaridade"
import InfoProjetos from "./modules/infoProjetos/mainInfoProjetos"
import InfoTecnologias from "./modules/infoTecnologias/mainInfoTecnologias"
import SobreMim from "./modules/sobreMim/mainSobreMim"
import { resumoProjeto } from "../../controller/types"
import projetoController from "../../controller/projetoController"

const MainPortifolio: React.FC = () => {
    const [projetos, SetProjetos] = useState<Map<string, resumoProjeto>>()
    const [quantidadeDeProjetos, SetQuantidadeDeProjetos] = useState<number>(0)

    const obterDados = async () => {
        const resumoDosProjetos: Map<string, resumoProjeto> = await new projetoController().obterResumoDosProjetosDaCapa()
        const numeroDeProjetos: number = await new projetoController().obterQuantidadeDeProjetos();
        SetQuantidadeDeProjetos(numeroDeProjetos)
        SetProjetos(resumoDosProjetos);
    }

    useEffect(() => { obterDados() }, []);

    return (
        <div className="MainContainer Flex-Center">
            <NavBar />
            <MainHeader />
            <div className="containerProjeto">
                <SobreMim quantidadeDeProjetos={quantidadeDeProjetos} />
                <InfoTecnologias />
                <InfoProjetos projetos={projetos ?? new Map()} />
                <InfoEscolaridade />
                <InfoContato />
            </div>
            <FooterBar />
        </div>
    )
}
export default MainPortifolio