import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';
class Logout extends React.Component {
  constructor(props) {
    super(props);

    localStorage.setItem(window.tabId + "username", "");
  }

  render() {
    return <div className="m-5">

      {(
        <Navigate to="/" />
      )}
    </div>
  }
}

export default Logout;