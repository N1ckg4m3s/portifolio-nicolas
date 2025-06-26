import React from "react";
import './cardProjetoMain.css';
import { cardResumoProjeto } from "../../controller/types";
import { useNavigate } from "react-router-dom";

const CardProjetoMain: React.FC<cardResumoProjeto> = ({ index, nome, capa, type }) => {
    const navigate = useNavigate();

    const hoverClick = () => {
        navigate(`/detalhes-projeto?projeto=${index}`);
    };

    return (
        <div className="cardProjeto" onClick={hoverClick}>
            <div className="cardImageContainer">
                <img src={require(`../../assets/Images/${capa}`)} alt={nome} className="cardImage" />
            </div>
            <div className="cardContent">
                <h3 className="cardTitle">{nome}</h3>
                <p className="cardType">{type}</p>
            </div>
        </div>
    );
};

export default CardProjetoMain;
