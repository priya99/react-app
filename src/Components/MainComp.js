import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './Welcome';
import Register from './Register';
import Layout from './Layout';
import RegisterSuccess from './RegisterSuccess';
import LoginSuccess from './LoginSuccess';
import Login from './Login';
import Logout from './Logout';
import UserList from './UserList';

class MainComp extends React.Component {

    constructor(props) { // lifecycle
        super(props);
        let userArray = JSON.parse(localStorage.getItem("users"));
        this.state = {
            users: userArray
        }
    }

    render() { // lifecycle

        return <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Welcome />} />
                        <Route path="register" element={<Register />} />
                        <Route path="login" element={<Login />} />
                        <Route path="registerSuccess" element={<RegisterSuccess />} />
                        <Route path="loginSuccess" element={<LoginSuccess />} />
                        <Route path="logout" element={<Logout />} />
                        <Route path="users" element={<UserList details={this.state.users} />} />
                    </Route>
                </Routes>
            </BrowserRouter>



        </div>
    }
}

export default MainComp;