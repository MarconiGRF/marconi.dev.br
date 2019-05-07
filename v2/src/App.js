import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main'
import Footer from './Footer/Footer';
import Language from './Scripts/Language'
import './App.css';

function App() {
  new Language("pt")
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App;
