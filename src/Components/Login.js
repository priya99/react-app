import React from "react";
import { Navigate } from 'react-router-dom';

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            errors: {
                email: "",
                password: "",
                form: ""
            },
            redirect: false
        }
    }

    submitHandler = (event) => {
        this.state.users = JSON.parse(localStorage.getItem("users"));
        if (!this.state.users) {
            this.state.users = [];
            this.state.errors.form = "Invalid Username / Password";
        }
        let index = this.state.users.findIndex(user => user.email === event.target['email'].value && user.password === event.target['password'].value);
        if (index == -1) {
            event.preventDefault();
            this.setState({
                errors: {
                    form: "Invalid Username / Password"
                },
            })
        }
        else {
            this.state.errors.form = "";
            localStorage.setItem(window.tabId + "username", event.target['email'].value);
        }

    }

    changeHandler = (event) => {

        let name = event.target.name; // for example username is name, password and email
        let value = event.target.value; // for example whatever we type for name, password and email
        let errors = this.state.errors;

        switch (name) {
            case "email":
                errors.email = value.length <= 0 ? "Email can not be empty" : "";
                break;

            case "password":
                errors.password = value.length <= 0 ? "Password can not be empty" : "";
                break;

            default:
                break;
        }

        this.setState({ errors, [name]: value }); // update state, component rerender
        console.log(this.state);
    }

    render() {
        let errors = this.state.errors;
        return (
            <div className="m-5">

                <form onSubmit={this.submitHandler} action="/loginSuccess">
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="text" placeholder="Enter your email" name="email" onChange={this.changeHandler} />
                        <div>{errors.email}</div>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" type="text" placeholder="Enter your password" name="password" onChange={this.changeHandler} />
                        <div>{errors.password}</div>
                    </div>
                    <div className="form-group mt-3">
                        <input className="btn btn-outline-secondary" type="submit" value="Login" />
                    </div>
                    <div>{errors.form}</div>
                </form>
            </div>
        )
    }


}