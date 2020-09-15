import React, { Component } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import axios from "axios";

class RegisterPageJS extends Component {
    constructor(){
        super();
        this.state ={
            userName:"",
            firstName:"",
            lastName:"",
            phoneNumber:"",
            homeAddress:""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        const newUser = {
            userName: this.state.userName,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber,
            homeAddress: this.state.homeAddress
        }
        const res = axios.post("http://localhost:8080/user", newUser);
        console.log(newUser);
    }
    render() {
        return (
            <div className = "hero is-fullheight is-primary">
                <div className = "hero-body">
                    <div className = "container has-text-centered">
                        <div className = "column is-8 is-offset-2">
                            <h3 className = "title has-text-white">Registration</h3>
                            <hr className = "login-hr"></hr>
                            <div className = "box">
                                <div className = "box">
                                    <img src={require("../HomePage/Images/brand.png")}></img>
                                </div>
                                <div className = "title has-text-grey is-5">
                                    Please fill in your details.
                                </div>
                                <form id="register" onSubmit={this.onSubmit}>
                                    <div className = "field">
                                        <div className = "control has-text-left">
                                            Username:
                                            <input className="input is-small" type="text" placeholder="Username" 
                                            name="userName" value={this.state.userName} onChange = {this.onChange}>
                                            </input>
                                        </div>
                                    </div>
                                    <div className = "field">
                                        <div className = "control has-text-left">
                                            First Name:
                                            <input className = "input is-small" type="text" placeholder="First Name" 
                                            name="firstName" value={this.state.firstName} onChange = {this.onChange}>
                                            </input>
                                        </div>
                                    </div>
                                    <div className = "field">
                                        <div className = "control has-text-left">
                                            Last Name:
                                            <input className = "input is-small" type="text" placeholder="Last Name" 
                                            name="lastName" value={this.state.lastName} onChange = {this.onChange}>
                                            </input>
                                        </div>
                                    </div>
                                    <div className = "field">
                                        <div className = "control has-text-left">
                                            Phone Number:
                                            <input className = "input is-small" type="text" placeholder="Phone Number" 
                                            name="phoneNumber" value={this.state.phoneNumber} onChange = {this.onChange}>
                                            </input>
                                        </div>
                                    </div>
                                    <div className = "field">
                                        <div className = "control has-text-left">
                                            Address:
                                            <input className = "input is-small" type="text" placeholder="Home Address" 
                                            name="homeAddress" value={this.state.homeAddress} onChange = {this.onChange}>
                                            </input>
                                        </div>
                                    </div>
                                    <div className = "field">
                                        <div className = "control has-text-left">
                                            Password:
                                            <input className = "input is-small" type="password" placeholder="Password">
                                            </input>
                                        </div>
                                    </div>
                                    <button type="submit" className="button is-block is-danger is-medium is-fullwidth">Sign Up</button>
                                </form>
                            </div>
                        </div>
                        <p className="has-text-grey">
                            Already Signed Up?&nbsp;·&nbsp;
                            <Link to="/Login">
                            <a>Login</a>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default RegisterPageJS;