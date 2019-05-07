import React from 'react';
import '../../App.css';
import gthb from '../../Resources/github.png'
import cv from '../../Resources/cv.png'
import { getText } from '../../Text/Text';
import { getAlt } from '../../Text/Text';
import { getLink } from '../../Links/Links';

class Section extends React.Component {
    render() {
        return (
            <section className="content">
                <div className="content-disposition">
					<a href={ getLink("github") }>
                        <img src={gthb} className="image-content" alt={ getAlt("gthb_alt") }></img>
						<h1 className="labels">{ getText("github") }</h1>
					</a>
			    </div>
                
                <div className="content-disposition">
					<a href={ getLink("cv") }>
                        <img src={cv} className="image-content" alt={ getAlt("cv_alt") }></img>
						<h1 className="labels">{ getText("cv") }</h1>
					</a>
			    </div>
            </section>
        )
    }
}

export default Section