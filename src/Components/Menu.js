import React from 'react';
import { Outlet, Link } from "react-router-dom";
class Menu extends React.Component {
  render() {
    return <div className="topnav">
      <a href="/users">ManageUsers</a><hr />
      <a href="/logout">Logout</a><hr />
    </div>
  }
}

export default Menu;
