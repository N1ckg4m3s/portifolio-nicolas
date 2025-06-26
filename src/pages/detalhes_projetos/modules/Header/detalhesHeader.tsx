import React from "react";
import './detalhesHeader.css'

interface props {
    titulo: string,
    type: 'Full-Stack' | 'Front-end' | 'Back-end' | 'Mobile'
}

const DetalheHeader: React.FC<props> = ({ titulo, type }) => {
    return (
        <section className="DetalheHeader Flex-Center">
            <h1>{titulo}</h1>
            <h5>{type}</h5>
        </section>
    );
}

export default DetalheHeader;