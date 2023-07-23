import React, { Component } from "react";

class UserList extends React.Component {

    constructor(props) { // lifecycle
        super(props);
        let userArray = JSON.parse(localStorage.getItem("users"));
        this.state = {
            edit: {
                "id": "",
                "name": "",
                "email": ""
            },
            users: userArray
        }
    }

    editUser = (e) => {
        e.preventDefault()
        let usersArray = JSON.parse(localStorage.getItem("users"));
        let index = usersArray.findIndex(x => (x.email === this.state.edit.email))
        console.log(e.target['username'].value)
        this.state.users[index]["name"] = e.target['username'].value;
        this.state.users[index]["email"] = e.target['emailId'].value;
        this.setState(this.state);
        document.getElementById('edit').hidden = true;
        localStorage.setItem("users", JSON.stringify(this.state.users));

    }

    deleteUser = (email) => {
        alert(email)

        let usersArray = JSON.parse(localStorage.getItem("users"));
        usersArray = usersArray.filter((user) => user.email !== email);
        localStorage.setItem("users", JSON.stringify(usersArray));
        if (usersArray.length === 0) {
            localStorage.removeItem("user");
        }
        this.setState({
            users: usersArray
        })
    }

    showDiv = (user) => {

        this.state.edit.name = user.name;
        this.state.edit.email = user.email;
        this.state.edit.id = user.id;
        document.getElementById('username').value = ''
        document.getElementById('emailId').value = ''
        var x = document.getElementById('edit');
        if (x.hidden) {
            x.hidden = false;
        } else {
            x.hidden = true;
        }
    }

    render() {
        return <div>
            <h1>UserList Functional component</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>User name</th>
                        <th>Email id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>

                            <td><button className="btn btn-primary" onClick={() => this.showDiv(user)}>Edit </button></td>
                            <td><button className="btn btn-primary" onClick={() => this.deleteUser(user.email)}>Delete </button></td>
                        </tr>

                    ))}

                </tbody>
            </table>
            <form id="edit" hidden="hidden" onSubmit={this.editUser} className="form-container">
                <table border="1">
                    <thead>
                        <tr>
                            <th>User name</th>
                            <th>Email id</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type='text' name="username" id="username" /></td>
                            <td><input type='text' name="emailId" id="emailId" /></td>
                            <td><input type="submit" value="Submit" /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    }
}


export default UserList;