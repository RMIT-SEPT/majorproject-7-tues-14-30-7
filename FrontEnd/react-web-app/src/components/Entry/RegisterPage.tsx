import React, { Component } from 'react'
import { BrowserRouter as Router,Switch,Route,Link, Redirect } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { stringify } from 'querystring';

interface BBProps {
    userName: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    homeAddress: string;
    password: string;
    passwordConfirmation: string;
}
interface BBState {
    userName: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    homeAddress: string;
    password: string;
    passwordConfirmation: string;
}

class RegisterPage extends React.Component<BBProps,BBState> {
    constructor(props:BBProps){
        super(props);
        this.state ={
            userName:"",
            firstName:"",
            lastName:"",
            phoneNumber:"",
            homeAddress:"",
            password: "",
            passwordConfirmation: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange = (e: React.FormEvent<HTMLInputElement>): void =>{
        if(e.currentTarget.name == "userName"){
        this.setState({ userName: e.currentTarget.value });
        } else if(e.currentTarget.name == "firstName"){
        this.setState({ firstName: e.currentTarget.value });
        } else if(e.currentTarget.name == "lastName"){
            this.setState({ lastName: e.currentTarget.value });
        } else if(e.currentTarget.name == "phoneNumber"){
            this.setState({ phoneNumber: e.currentTarget.value });
        } else if(e.currentTarget.name == "homeAddress"){
            this.setState({ homeAddress: e.currentTarget.value });
        } else if(e.currentTarget.name == "password"){
            this.setState({ password: e.currentTarget.value });
        } else if(e.currentTarget.name == "passwordConfirmation"){
            this.setState({ passwordConfirmation: e.currentTarget.value });
        }
    };
    onSubmit(e){
        e.preventDefault();
        const newUser = {
            userName: this.state.userName,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber,
            homeAddress: this.state.homeAddress,
            password: this.state.password,
            passwordConfirmation: this.state.passwordConfirmation
        }
        const res = axios.post("http://localhost:8080/user", newUser);
        console.log(res);
        window.location.href = "http://localhost:3000/Login";
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
                                        <input className = "input is-small" type="password" placeholder="Password"
                                        name="password" value={this.state.password} onChange = {this.onChange}>
                                        </input>
                                    </div>
                                </div>
                                <div className = "field">
                                    <div className = "control has-text-left">
                                        Confirm Password:
                                        <input className = "input is-small" type="password" placeholder="Password"
                                        name="passwordConfirmation" value={this.state.passwordConfirmation} onChange = {this.onChange}>
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
export default RegisterPage;