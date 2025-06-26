import React from "react";
import './navbar.css';

import { ReactComponent as Logo } from '../../assets/icons/Logo_icon.svg';

import { ReactComponent as Close } from '../../assets/icons/closeIcon.svg';
import { ReactComponent as Menu } from '../../assets/icons/menuIcon.svg';

const NavBar: React.FC = () => {

    return (
        <nav>
            <Logo />

            <div className="MenuNavBar">
                <input type="checkbox" />
                <Menu />
            </div>

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
