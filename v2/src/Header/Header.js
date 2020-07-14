import React from 'react';
import { Info } from '../Constants/Constants'
import '../App.css';
import logo from '../Resources/logo.jpg';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {}
        }

        this.init();
    }

    init() {
        if (this.props.currentLanguage === 'pt') {
            this.state.info = Info.pt.common;
        }
        else {
            this.state.info = Info.en.common;
        }
    }

    render() {
        return (
            <header className="header-css">
                <img className="logo-adeq" src={logo} alt="" />
                <div>
                    <h1 className="header-name">{this.state.info.name}</h1>
                    <h3 className="header-entry">{this.state.info.gradinfo}</h3>
                </div>
            </header>
        )
    }
}

export default Header