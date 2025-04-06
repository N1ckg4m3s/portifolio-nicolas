import React from "react";
import './escolaridadeCard.css';
import { escolaridadeProps } from "../../controller/types";

const escolaridadeCard: React.FC<escolaridadeProps> = ({ icon, side, tempo, title, subtitle }) => {

    const reverce: string = side ? 'escolaridadeCard-reverce' : '';

    return (
        <div className={`escolaridadeCard ${reverce}`}>
            <div className="iconContainer">
                <div className="icon Flex-Center">
                    {icon}
                </div>
                <div className="line" />
            </div>
            <div className="escolaridadeBody">
                <div className="escolaridade-tempo">{tempo}</div>
                <span className="escolaridade-titulo">{title}</span>
                {subtitle ?? <span className="escolaridade-titulo">{subtitle}</span>}
            </div>
        </div>
    );
}

export default escolaridadeCard;
