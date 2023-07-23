import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
class LoginSuccess extends React.Component {
    render() { // lifecycle
        return <div>
            <div className="registration-form">
                <form>
                    <Menu />
                    <div className="form-group">
                        <label ><h2>Login Successful</h2></label>
                    </div>
                    <div className="form-group">
                        <label > Welcome {localStorage.getItem(window.tabId + "username")}</label>
                    </div>
                </form>
            </div>
        </div>
    }
}

export default LoginSuccess;