import React, { Component } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

class RegisterPage extends React.Component<{},any> {
    constructor(props){
        super(props);
        this.state ={
            userName:"",
            firstName:"",
            lastName:"",
            phoneNumber:"",
            homeAddress:""
        };
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
                                <form id="register">
                                    <div className = "field">
                                        <div className = "control has-text-left">
                                            Username:
                                            <input className="input is-small" type="text" placeholder="Username" 
                                            name="userName" value={this.state.userName}>
                                            </input>
                                        </div>
                                    </div>
                                    <div className = "field">
                                        <div className = "control has-text-left">
                                            First Name:
                                            <input className = "input is-small" type="text" placeholder="First Name" 
                                            name="firstName" value={this.state.firstName}>
                                            </input>
                                        </div>
                                    </div>
                                    <div className = "field">
                                        <div className = "control has-text-left">
                                            Last Name:
                                            <input className = "input is-small" type="text" placeholder="Last Name" 
                                            name="lastName" value={this.state.lastName}>
                                            </input>
                                        </div>
                                    </div>
                                    <div className = "field">
                                        <div className = "control has-text-left">
                                            Phone Number:
                                            <input className = "input is-small" type="text" placeholder="Phone Number" 
                                            name="phoneNumber" value={this.state.phoneNumber}>
                                            </input>
                                        </div>
                                    </div>
                                    <div className = "field">
                                        <div className = "control has-text-left">
                                            Address:
                                            <input className = "input is-small" type="text" placeholder="Home Address" 
                                            name="homeAddress" value={this.state.homeAddress}>
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
export default RegisterPage;