import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Calculator from './components/calculator/Calculator';
import UsersTable from './components/UsersTable/UsersTable';
import Welcome from './components/Welcome/Welcome';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/calculator' component={Calculator} />
          <Route path='/users' component={UsersTable} />
          <Route path='/' component={Welcome} />
        </Switch>
      </div>
    );
  }
}

export default App;
