import React from 'react';
import './main.css';

import TituloSection from '../../components/tituloSection/tituloSection';
import FooterBar from '../../components/footer/footer';
import EscolaridadeCard from '../../components/escolaridadeCard/escolaridadeCard';

import { ReactComponent as Escolaridade } from "../../assets/icons/Escolaridade_icon.svg";
import { ReactComponent as Work } from "../../assets/icons/Work_icon.svg";

const MainPortifolio_: React.FC = () => {

    return (
        <div className="MainContainer Flex-Center">
            <div className="containerProjeto">

                <section className='infoContato'>
                    <TituloSection
                        texto={'contato'}
                    />
                </section>
            </div>

            <FooterBar />
        </div>
    );
}

export default MainPortifolio_;
