import React from "react"
import "./mainIndex.css"

import NavBar from "../../components/navbar/navbar"
import FooterBar from "../../components/footer/footer"

/* MODULOS */
import MainHeader from "./modules/Header/mainHeader"
import InfoContato from "./modules/infoContato/mainInfoContato"
import InfoEscolaridade from "./modules/infoEscolaridade/mainInfoEscolaridade"
import InfoProjetos from "./modules/infoProjetos/mainInfoProjetos"
import InfoTecnologias from "./modules/infoTecnologias/mainInfoTecnologias"
import SobreMim from "./modules/sobreMim/mainSobreMim"

const MainPortifolio: React.FC = () => {
    return (
        <div className="MainContainer Flex-Center">
            <NavBar />
            <MainHeader />
            <div className="containerProjeto">
                <SobreMim />
                <InfoTecnologias />
                <InfoProjetos />
                <InfoEscolaridade />
                <InfoContato />
            </div>
            <FooterBar />
        </div>
    )
}
export default MainPortifolio