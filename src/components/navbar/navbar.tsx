import React from "react";
import './navbar.css';

import { ReactComponent as Logo } from '../../assets/icons/Logo_icon.svg';
import { ReactComponent as Menu } from '../../assets/icons/menuIcon.svg';
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
    const navigate = useNavigate();
    return (
        <nav>
            <div onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                <Logo />
            </div>

            <div className="MenuNavBar">
                <input type="checkbox" />
                <Menu />
            </div>

            <div className="nav-caminhos">
                <a href="#MainSobre">sobre</a>
                <a href="#MainTecnologias">Tecnologias</a>
                <a href="/projetos">projetos</a>
                <a href="#MainEscolaridade">estudos</a>
                <a href="#MainContato">contato</a>
            </div>
        </nav>
    );
}

export default NavBar;
