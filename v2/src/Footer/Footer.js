import React from 'react';
import '../App.css';
import { Info, Links } from '../Constants/Constants';
import flag from '../Resources/pt.png';
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
            links: Links
        }

        this.init();
    }

    componentDidUpdate(previousProps) {
        //TODO: Update texts accordingly.
    }

    handleLangChange = () => {
        this.props.switchLanguage();
    }

    init = () => {
        this.state.currentLanguage = this.props.currentLanguage;
        if (this.props.currentLanguage === 'pt') {
            this.state.info = Info.pt.common;
            this.state.alt = Info.pt.alt;
        }
        else {
            this.state.info = Info.en.common;
            this.state.alt = Info.en.alt;
        }
    }

    render() {
        return (
            <footer className="footer-content">
                <div className="footer-lefter" >
                    <a href={ this.state.links.mail }>
                        <img src={maillogo} alt={ this.state.alt.mail } />
                    </a>
                    <a href={ this.state.links.linkedin }>
                        <img src={inlogo} alt={ this.state.alt.in } />
                    </a>
                    <a href={ this.state.links.facebook }>
                        <img src={fblogo} alt={ this.state.alt.fb } />
                    </a>
                </div>
                <div className="footer-righter">
                    <a alt={ this.state.alt.lgg } href="#" onClick={this.handleLangChange}>
                        <img src={flag} alt={ this.state.alt.flag } />
                    </a>
                    <h3 className="footer-text-p">{ this.state.info.about }</h3>
                </div>
            </footer>
        )
    }
}

export default Footer