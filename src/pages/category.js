import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from '../widgets/header';
import Footer from '../widgets/footer';
import Products from '../widgets/productList';
import Facets from '../widgets/facets'
import Reloader from '../widgets/reload'

class App extends Component {

  // componentWillMount() {
  //       const script = document.createElement("script");
  //       script.type = 'text/javascript'
  //       script.src = "./facetrender.js";        
  //       this.instance.appendChild(script);
  // }

  render() {
    return (
      <div className="App">
          <Header/>
          <div className="">
            <Facets/>
            <Products filter={this.props.params.filter}/>
          </div>
            <Reloader/>
          <Footer/> 
      </div>
    );
  }
}

export default App;
