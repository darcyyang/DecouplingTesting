import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './widgets/header';
import Footer from './widgets/footer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer/>
      </div>
    );
  }
}

export default App;
