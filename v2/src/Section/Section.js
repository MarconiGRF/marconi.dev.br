import React from 'react';
import '../App.css';
import { Info, Links } from '../Constants/Constants'
import gthb from '../Resources/github.png'
import cv from '../Resources/cv.png'


class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {},
            alt: {},
            links: Links
        }

        this.init(props);
    }

    init(props) {
        if (props.currentLanguage === 'pt') {
            this.state.info = Info.pt.common;
            this.state.alt = Info.pt.alt;
        }
        else {
            this.state.info = Info.en.common;
            this.state.alt = Info.en.alt;
        }
    }

    componentWillReceiveProps(newProps) {
        this.init(newProps);
    }

    render() {
        return (
            <section className="content">
                <a className="content-disposition" href={this.state.links.github}>
                    <img src={gthb} className="image-content" alt={this.state.alt.github}></img>
                    <h1 className="labels">{this.state.info.github}</h1>
                </a>
                <a className="content-disposition" href={this.state.links.cv}>
                    <img src={cv} className="image-content" alt={this.state.alt.cv}></img>
                    <h1 className="labels">{this.state.info.cv}</h1>
                </a>
            </section>
        )
    }
}

export default Section