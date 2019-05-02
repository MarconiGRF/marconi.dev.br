import React from 'react';
import '../App.css';
import { getText } from '../Text/Text';
import logo from '../Resources/logo.jpg';

class Header extends React.Component {
    render() {
        return (
            <header className="header-css">
                <img className="logo-adeq" src={logo} alt="Imagem de Marconi"/>
                <div>
                    <h1 className="header-name">{ getText("name") }</h1>
                    <h3 className="header-entry">{ getText("gradinfo")}</h3>
                </div>
            </header>
        )
    }
}

export default Header