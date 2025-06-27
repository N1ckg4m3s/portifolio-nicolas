import React from "react";
import './navbar.css';

import { ReactComponent as Logo } from '../../assets/icons/Logo_icon.svg';
import { ReactComponent as Menu } from '../../assets/icons/menuIcon.svg';
import { useNavigate } from "react-router-dom";

interface props {
    redirecionador: Record<string, string>
}

const NavBar: React.FC<props> = ({ redirecionador }) => {
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

            {Object.entries(redirecionador).length > 0 ?
                <div className="nav-caminhos">
                    {Object.entries(redirecionador).map(([texto, caminho], index) => (
                        <a href={caminho} key={index}>{texto}</a>
                    ))
                    }
                </div> : null
            }
        </nav>
    );
}

export default NavBar;
