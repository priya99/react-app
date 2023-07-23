import React from 'react';
import { Link } from 'react-router-dom';
import Register from './Register';

import { BrowserRouter, Routes, Route } from 'react-router-dom';



  function Welcome() {
        return (<div>
            <h1>Welcome to User Module</h1>
            <p>Existing User</p>
            <Link to="/login"><button type="button">Login</button></Link>

            <p>New Users</p>
            <Link to="/register"> <button type="button">Register</button> </Link>
        </div>
    );
}

export default Welcome;