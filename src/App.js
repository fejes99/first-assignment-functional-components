import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Calculator from './components/calculator/Calculator';
import UsersTable from './components/UsersTable/UsersTable';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/calculator' component={Calculator} />
          <Route path='/users' component={UsersTable} />
        </Switch>
      </div>
    );
  }
}

export default App;
