import React, { Component } from 'react';
import axios from 'axios';
import './UsersTable.css';

class UsersTable extends Component {
  state = {
    users: [],
    loading: true,
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      const fetchedUsers = [];
      for (let key in res.data) {
        fetchedUsers.push({
          ...res.data[key],
          id: key,
        });
        this.setState({
          loading: false,
          users: fetchedUsers,
        });
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Users table</h1>
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
              <tr
                key={user.id}
                className={parseFloat(user.id) % 2 === 0 ? 'even' : 'odd'}
              >
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>{user.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UsersTable;
