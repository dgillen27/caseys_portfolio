import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from "react-router-dom";
import Nav from './components/Nav';
import Welcome from './components/Welcome';
import Olga from './components/Olga';
import Illustrations from './components/Illustrations';
import Signs from './components/Signs';
import Design from './components/Design';
import About from './components/About';
import Contact from './components/Contact';
import OpenMenu from './components/OpenMenu';


class App extends Component {
  constructor() {
    super();

    this.state = {
      showClass: false
    }

    this.changeClass = this.changeClass.bind(this);

  }

  changeClass() {
    const { showClass } = this.state;
    this.setState({
      showClass: showClass === true? false: true
    })
  }
  render() {
    return (
      <div className="App">
        <OpenMenu
          showClass={this.state.showClass}
          changeClass={this.changeClass}/>
        <Nav
          changeClass={this.changeClass}/>
        <Route exact path="/" render={props => (
          <Welcome />
        )} />
        <Route exact path="/olga-saves-the-world" render={props => (
          <Olga />
        )} />
        <Route exact path="/illustration" render={props => (
          <Illustrations />
        )} />
        <Route exact path="/signs" render={props => (
          <Signs />
        )} />
        <Route exact path="/design" render={props => (
          <Design />
        )} />
        <Route exact path="/about" render={props => (
          <About />
        )} />
        <Route exact path="/contact" render={props => (
          <Contact />
        )} />
      </div>
    );
  }
}

export default withRouter(App);
