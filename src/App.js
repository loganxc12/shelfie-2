import React, { Component } from 'react';
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
        <Form />
        <Header />
        
      </div>
    );
  }
}

export default App;
