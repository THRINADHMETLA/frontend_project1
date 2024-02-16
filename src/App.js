import React from 'react';
import './App.css';
import { MyForm, Mybutton, Mytable } from './inputFrom';

class App extends React.Component {


  callbackFunction(name) {

    console.log(name)
    // this.setState("blockSection", name)
  }

  callbackFunction(classes){
    console.log(classes)
  }


  render() {
    return <>
      <MyForm submitFunction={this.callbackFunction} type="charan" movieList={["java", "sf"]}/>
      <h1>HI FRIENDS !</h1>
    </>
  }
}

export default App;
