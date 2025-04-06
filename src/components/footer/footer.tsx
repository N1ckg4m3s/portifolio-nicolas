import React from "react";
import './footer.css';

import { ReactComponent as Logo } from '../../assets/icons/Logo_icon.svg';
import { Link } from "react-router-dom";

const footerBar: React.FC = () => {
    return (
        <footer>
            <Logo />
            <div className="footer-caminhos">
                <Link to="/">sobre</Link>
                <Link to="/">habilidades</Link>
                <Link to="/">projetos</Link>
                <Link to="/">contato</Link>
            </div> 
        </footer>
    );
}

export default footerBar;
