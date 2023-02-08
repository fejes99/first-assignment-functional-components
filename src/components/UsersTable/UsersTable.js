import React, { Component } from 'react';
import axios from 'axios';
import './UsersTable.css';
import { BeatLoader } from 'react-spinners';

class UsersTable extends Component {
  state = {
    users: [],
    loading: true,
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      this.setState({
        loading: false,
        users: res.data,
      });
    });
  }

  render() {
    let table = (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

    if (this.state.loading) {
      table = <BeatLoader color='#353a40' />;
    }

    return (
      <div>
        <h1>Users table</h1>
        {table}
      </div>
    );
  }
}

export default UsersTable;
