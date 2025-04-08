import React from "react";
import './mainInfoContato.css'

import TituloSection from "../../../../components/tituloSection/tituloSection";
import ContatoCard from "../../../../components/contatoCard/contatoCard";

import { ReactComponent as Whatszap } from "../../../../assets/icons/WhatsApp_icon.svg";
import { ReactComponent as Email } from "../../../../assets/icons/Email_Icon.svg"
import { ReactComponent as Localizacao } from "../../../../assets/icons/Localizacao_icon.svg"

const mainInfoContato: React.FC = () => {
    return <section className='infoContato' id="MainContato">
        <TituloSection
            texto={'contato'}
        />
        <ContatoCard
            icon={<Whatszap />}
            title="WHATSAPP"
            contato="(55) 11 9 9524-0558"
        />
        <ContatoCard
            icon={<Email />}
            title="EMAIL"
            contato="NICO.AG.03@HOTMAIL.COM"
        />
        <ContatoCard
            icon={<Localizacao />}
            title="ENDEREÇO"
            contato="CARAPICUIBA - SÃO PAULO"
        />

    </section>
}

export default mainInfoContato