import React from 'react';
import '../App.css';
import { getText, getAlt } from '../Text/Text';
import languageChange from '../Scripts/Language_Changer';
import flag from '../Resources/pt.png';
import fblogo from '../Resources/fb.png';
import maillogo from '../Resources/mail.png';
import inlogo from '../Resources/in.png';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-content">
                <div className="footer-lefter" >
					<a href="mailto:mgrf@cin.ufpe.br">
                        <img src={maillogo} alt={ getAlt("mail_alt") }/>
                    </a>
					<a href="https://www.linkedin.com/in/marconi-filho-5724b8182/">
                        <img src={inlogo} alt={ getAlt("in_alt") }/>
                    </a>
					<a href="https://www.facebook.com/itsmarconi">
                        <img src={fblogo} alt={ getAlt("fb_alt") }/>
                    </a>
                </div>
                <div className="footer-righter">
                    <a onClick={languageChange("pt")} alt={getAlt("lgg_alt")} >
                        <img src={flag} alt={getAlt("flag_alt")} />
                    </a>
                    <h3 className="footer-text-p">{ getText("about") }</h3>
                </div>
            </footer>
        )
    }
}

export default Footer