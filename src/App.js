import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import RaisedButton from 'material-ui/RaisedButton';
import Routes from './routes';
import Footer from './components/footer/Footer';

class App extends Component {
    constructor(){
        super();
        
        this.state = {
            activeMenu: true
        }
        
    }
    
    handleToggle = () => {
        this.setState({
            activeMenu: !this.state.activeMenu
        });
    }
    
  render() {
    return (
      <div className="App">
        <Routes/>
        <Footer />
      </div>
    );
  }
}

export default App;