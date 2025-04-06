import React from "react";
import './tituloSection.css';

interface Props {
    texto: String;
}

const tituloSection: React.FC<Props> = ({texto}) => {
    return (
        <div className="tituloSelection">
            <h3> {texto} </h3>
            <div className="barraDecoracao">
                <div className="linhaDecoracao"></div>
                <div className="linhaDecoracao bigLine"></div>
                <div className="linhaDecoracao mediumLine"></div>
                <div className="linhaDecoracao lowLine"></div>
            </div>
        </div>
    );
}

export default tituloSection;
