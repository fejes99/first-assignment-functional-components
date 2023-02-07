import React, { Component } from "react";
import "./Navbar.css";
import NavbarItem from "../UI/NavbarItem/NavbarItem";

const navigationItems = {
  assignment1: {
    name: "Users",
    link: "/users",
  },
  assignment2: {
    name: "Calculator",
    link: "/calculator",
  },
};

class Navbar extends Component {
  render() {
    let navbarItems = Object.values(navigationItems).map((assignment) => {
      return (
        <NavbarItem
          key={assignment.name}
          name={assignment.name}
          link={assignment.link}
        />
      );
    });

    console.log(navbarItems);

    return (
      <div className="navbar">
        <div className="navbar-nav">{navbarItems}</div>
      </div>
    );
  }
}

export default Navbar;
