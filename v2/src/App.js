import React from 'react';
import Header from './Header/Header';
import Section from './Section/Section'
import Footer from './Footer/Footer';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLanguage: ''
    }

    this.init();
  }

  init() {
    let userLanguage = navigator.language || navigator.userLanguage;

    if (userLanguage.startsWith('pt')) {
      this.state = {currentLanguage: 'pt'}
    }
    else {
      this.state = {currentLanguage: 'en'}
    }
  }

  switchLanguage = () => {
    if (this.state.currentLanguage === 'pt') {
      this.setState({currentLanguage: 'en'})
    }
    else {
      this.setState({currentLanguage: 'pt'})
    }
  }

  render() {
    return (
      <div className="App">
        <Header currentLanguage={this.state.currentLanguage} />
        <Section currentLanguage={this.state.currentLanguage} />
        <Footer currentLanguage={this.state.currentLanguage} switchLanguage={this.switchLanguage}/>
      </div>
    )
  }
}

export default App;
