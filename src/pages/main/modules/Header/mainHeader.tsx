import React from "react";
import './mainHeader.css'

import Fundo from '../../../../assets/icons/Fudo_Tela_img.png'

import TypingEffect from '../../../../components/TypingEffect/typing'

import { ReactComponent as Whatsapp } from '../../../../assets/icons/WhatsApp_icon.svg'
import { ReactComponent as Email } from '../../../../assets/icons/Email_Icon.svg'

const mainHeader: React.FC = () => {
    return <header className="Flex-Center" id='MainHeader'>
        <img src={Fundo} alt="Imagem de fundo com tema de portfólio" />
        <article className="Flex-Center">
            <h3>Olá, visitante</h3>
            <h2>Meu nome é <span>Nicolas</span></h2>
            <h3>Desenvolvedor  <TypingEffect /></h3>

            <div className="RedesContato Flex-Center">
                <div className="infinityline"></div>
                <button className="Flex-Center">
                    <Whatsapp className="SvgWhite-fill" />
                </button>
                <button className="Flex-Center">
                    <Email className="SvgWhite-stroke" />
                </button>
                <div className="infinityline"></div>
            </div>
        </article>

        <article className="MaisInfoText Flex-Center">
            <span>Mais informações</span>
            <div className="Linha">
                <div className="Seta"></div>
            </div>
        </article>
    </header>
}

export default mainHeader