import React from 'react';
import { Outlet, Link } from "react-router-dom";
class Layout extends React.Component {
  render() { // lifecycle
    return <>

      <Outlet />
    </>
  }
}

export default Layout;