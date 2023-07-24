import React from "react";
import { Navigate } from 'react-router-dom';
import { Link } from "react-router-dom";

export default class Register extends React.Component {
    
    constructor() {
        super();
        this.state = {
            errors: {
                fullName: "",
                password: "",
                email: "",
                form: ""
            },
            users : [],
            redirect: false
        }
    }

    submitHandler = (event) => {
       
        console.log(event.target.name);  
        if (event.target['fullName'].value === "" || event.target['email'].value === "" || event.target['password'].value === "" ) {
            event.preventDefault();
            this.state.errors.form="Fields can not be empty";
            this.setState(this.state);
        }else if(event.target['password'].value != event.target['confirmPassword'].value){
            event.preventDefault();
            this.state.errors.form="Password and confirm password Not matching";
            this.setState(this.state);
        }
        this.state.users = JSON.parse(localStorage.getItem("users"));
        if (!this.state.users) {
            this.state.users = [];
        }
        const maxValueOfUserId = Math.max(...this.state.users.map(user => user.id), 0);      
        const user = {  
            "id": maxValueOfUserId + 1,
            "name": event.target['fullName'].value,
            "email": event.target['email'].value,
            "password": event.target['password'].value
        }
        this.setState({
            users: [...this.state.users, user]
        })
        
       console.log("users: " + this.state.users);
       console.log("user: " + user.name);
       this.state.users.push(user);
      
       localStorage.setItem("users", JSON.stringify(this.state.users));
       localStorage.setItem(window.tabId+"username", event.target['email'].value);
    }

    changeHandler = (event) => {
        let name = event.target.name; // for example username is name, password and email
        let value = event.target.value; // for example whatever we type for name, password and email
        let errors = this.state.errors;

        switch (name) {
            case "fullName":
                errors.fullName = value.length ==0 ? "Full Name can not be empty" : "";
                break;

            case "password":
                errors.password = value.length < 5 ? "Password must be 5 characters of length" : "";
                break;

            case "confirmPassword":
                errors.confirmPassword = value.length < 5 ? "Confirm Password must be 5 characters of length" : "";
                break;

            case "email":
                errors.email = value.length == 0 ? "Email can not be empty" : "";
                break;

            default:
                break;
        }

        this.setState({ errors, [name]: value }); // update state
        console.log(this.state);
    }

    render() {
        const { errors, redirect } = this.state;

        return (
            <div className="m-5">
                <form onSubmit={this.submitHandler} action="/registerSuccess">
                    <label ><h2>Register</h2></label>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input className="form-control" type="text" placeholder="Enter your Full Name" name="fullName" onSelect={this.changeHandler} />
                        <div>{errors.fullName}</div>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="text" placeholder="Enter your email" name="email" onSelect={this.changeHandler} />
                        <div>{errors.email}</div>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" type="text" placeholder="Enter your password" name="password" onSelect={this.changeHandler} />
                        <div>{errors.password}</div>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" type="text" placeholder="Confirm your password" name="confirmPassword" onSelect={this.changeHandler} />
                        <div>{errors.confirmPassword}</div>
                    </div>
                    <div className="form-group mt-3">
                        <input className="btn btn-outline-secondary" type="submit" value="Register" />
                    </div>
                    <div>{errors.form}</div>
                    <Link to="/"><b>click to return to home page</b></Link>
                </form>
            </div>
        )
    }
}
