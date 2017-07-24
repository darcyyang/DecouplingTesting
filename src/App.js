import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './widgets/header';
import Footer from './widgets/footer';
import Products from './widgets/productList';
class App extends Component {

  render() {
    return (

      <div className="App">
        <Header/>
        <Products/>
        <Footer/>
      </div>
    );
  }
}

export default App;
