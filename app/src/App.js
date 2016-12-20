import React, { Component } from 'react';
import './App.css';
import './lib/font-awesome-4.7.0/css/font-awesome.min.css';
import Navbar from './Navbar/Navbar';
import Drawer from './Drawer/Drawer';
import Main from './Main/Main';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Drawer />
	  	<Main>{this.props.children}</Main>
        <Footer />
      </div>
    );
  }
}

export default App;
