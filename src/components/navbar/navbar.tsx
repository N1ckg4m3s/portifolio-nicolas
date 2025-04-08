import React from "react";
import './navbar.css';

import { ReactComponent as Logo } from '../../assets/icons/Logo_icon.svg';
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {

    const rolarParaItem = (id: string) => {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav>
            <Logo />
            <div className="nav-caminhos">
                <a href="#MainSobre">sobre</a>
                <a href="#MainTecnologias">Tecnologias</a>
                <a href="#MainProjetos">projetos</a>
                <a href="#MainEscolaridade">estudos</a>
                <a href="#MainContato">contato</a>
            </div>
        </nav>
    );
}

export default NavBar;
