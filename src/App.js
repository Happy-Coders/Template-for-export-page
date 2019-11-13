import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Body from './loopDirectory/index'
// import MainFile from './loopDirectory/index'
class App extends Component
{
  render(){
  return (
    <div style={{position:"absolute", left:"10%", width:"80%"}}>
      <Body></Body>
    </div>
  );
}
}

export default App;
