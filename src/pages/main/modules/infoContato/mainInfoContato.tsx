import React from "react";
import './mainInfoContato.css'

import TituloSection from "../../../../components/tituloSection/tituloSection";

const mainInfoContato: React.FC = () => {
    return <section className='infoContato'>
        <TituloSection
            texto={'contato'}
        />
    </section>
}

export default mainInfoContato