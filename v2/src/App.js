import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main'
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
    let newState = {};
    let userLanguage = navigator.language || navigator.userLanguage;

    if (userLanguage === 'pt') {
      newState.currentLanguage = 'pt';
    }
    else {
      newState.currentLanguage = 'en';
    }

    this.state = newState;
  }

  switchLanguage = () => {
    if (this.state.currentLanguage === 'pt') {
      this.state.currentLanguage = 'en';
    }
    else {
      this.state.currentLanguage = 'pt';
    }
    console.log("Lang set to: " + this.state.currentLanguage);
  }

  render() {
    return (
      <div className="App">
        <Header currentLanguage={this.state.currentLanguage} />
        <Main currentLanguage={this.state.currentLanguage} />
        <Footer currentLanguage={this.state.currentLanguage} switchLanguage={this.switchLanguage}/>
      </div>
    )
  }
}

export default App;
