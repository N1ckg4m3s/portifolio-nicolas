import React from "react";
import './navbar.css';

import { ReactComponent as Logo } from '../../assets/icons/Logo_icon.svg';
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
    return (
        <nav>
            <Logo />
            <div className="nav-caminhos">
                <Link to="/">sobre</Link>
                <Link to="/">habilidades</Link>
                <Link to="/">projetos</Link>
                <Link to="/">contato</Link>
            </div> 
        </nav>
    );
}

export default NavBar;
