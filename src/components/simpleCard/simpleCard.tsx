import React from "react";
import './simpleCard.css';

interface Props {
    tittle: String;
    value: String | React.ReactNode;
}

const simpleCard: React.FC<Props> = ({ tittle, value }) => {
    return (
        <div className="SimpleCard Flex-Center">
            <h2 className="valorCard">{value}</h2>
            <h3 className="tittleCard">{tittle}</h3>
        </div>
    );
}

export default simpleCard;
