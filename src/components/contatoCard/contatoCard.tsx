import React from "react";
import './contatoCard.css';
import { contatoProps } from "../../controller/types";

const contatoCard: React.FC<contatoProps> = ({ icon, title, contato }) => {

    return (
        <div className='contatoCard'>
            <div className="contatoCardIcon Flex-Center"> {icon} </div>
            <div className="contatoCardContainer">
                <span className="contato-titulo">{title}</span>
                <span className="contato-contato">{contato}</span>
            </div>
        </div>
    );
}

export default contatoCard;
