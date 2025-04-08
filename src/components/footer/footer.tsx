import React from "react";
import './footer.css';

import { ReactComponent as Logo } from '../../assets/icons/Logo_icon.svg';
import { Link } from "react-router-dom";

import { ReactComponent as GitHub } from '../../assets/icons/GitHub_icon.svg'
import { ReactComponent as WhatsApp } from '../../assets/icons/WhatsApp_icon.svg'
import { ReactComponent as Email } from '../../assets/icons/Email_Icon.svg'


const footerBar: React.FC = () => {
    return (
        <footer className="Flex-Center">
            <Logo className="footerLogo" />
            <div className="footer-caminhos">
                <div className="icones-redirecionador Flex-Center">
                    <Link to="https://github.com/N1ckg4m3s"><GitHub className="SvgWhite-fill" /></Link>
                    <Link to="http://wa.me/5511995240558"><WhatsApp className="SvgWhite-fill" /></Link>
                    <Link to="mailto:nico.ag.03@hotmail.com"><Email className="SvgWhite-stroke" /></Link>
                </div>

                <div className="navegacao">
                    <Link to="/">sobre</Link>
                    <Link to="/">habilidades</Link>
                    <Link to="/">projetos</Link>
                    <Link to="/">contato</Link>
                </div>
            </div>
        </footer>
    );
}

export default footerBar;
