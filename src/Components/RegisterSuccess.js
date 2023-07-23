import React from 'react';
import { Link } from 'react-router-dom';
class RegisterSuccess extends React.Component {
    render() { // lifecycle
        return <div>
            <div className="registration-form">
                <form>
                    <div className="form-group">
                        <label ><h2>Registration Succesful</h2></label>
                    </div>
                    <div className="form-group">
                        <label > Thank you for your registration  {localStorage.getItem(window.tabId + "username")}</label>
                    </div>
                    <Link to="/"><b>click to return to home page</b></Link>
                </form>
            </div>
        </div>
    }
}

export default RegisterSuccess;