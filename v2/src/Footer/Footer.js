import React from 'react';
import '../App.css';
import { Info, Links } from '../Constants/Constants';
import fblogo from '../Resources/fb.png';
import maillogo from '../Resources/mail.png';
import inlogo from '../Resources/in.png';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLanguage: '',
            info: {},
            alt: {},
            links: Links,
        }

        this.init(props);
    }

    componentWillReceiveProps(newProps) {
        this.init(newProps);
    }

    handleLangChange = () => {
        this.props.switchLanguage();
    }

    init(props) {
        this.state.currentLanguage = this.props.currentLanguage;
        if (props.currentLanguage === 'pt') {
            this.state.info = Info.pt.common;
            this.state.alt = Info.pt.alt;
            this.state.flag = require("../Resources/pt.png")
        }
        else {
            this.state.info = Info.en.common;
            this.state.alt = Info.en.alt;
            this.state.flag = require("../Resources/en.png")
        }
    }

    render() {
        return (
            <footer className="footer-content">
                <div className="footer-lefter" >
                    <a href={ this.state.links.mail }>
                        <img className="footer-image" src={maillogo} alt={ this.state.alt.mail } />
                    </a>
                    <a href={ this.state.links.linkedin }>
                        <img className="footer-image" src={inlogo} alt={ this.state.alt.in } />
                    </a>
                    <a href={ this.state.links.facebook }>
                        <img className="footer-image" src={fblogo} alt={ this.state.alt.fb } />
                    </a>
                </div>
                <div className="footer-righter">
                    <a alt={ this.state.alt.lgg } href="#" onClick={this.handleLangChange}>
                        <img className="footer-image" src={this.state.flag} alt={ this.state.alt.flag } />
                    </a>
                </div>
            </footer>
        )
    }
}

export default Footer