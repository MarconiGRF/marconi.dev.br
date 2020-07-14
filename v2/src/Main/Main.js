import React from 'react';
import '../App.css';
import Section from './Section/Section'

class Main extends React.Component {
    render() {
        return (
            <main>
                <Section currentLanguage={this.props.currentLanguage} />
            </main>
        )
    }
}

export default Main