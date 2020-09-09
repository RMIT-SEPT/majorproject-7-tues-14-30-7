import React, { Component } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

export default class RegisterPage extends Component {
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
                                <form>
                                    <div className = "field">
                                        <div className = "control has-text-left">
                                            Username:
                                            <input className = "input is-small" type="text" placeholder="Username">
                                            </input>
                                        </div>
                                    </div>
                                    <div className = "field">
                                        <div className = "control has-text-left">
                                            First Name:
                                            <input className = "input is-small" type="text" placeholder="First Name">
                                            </input>
                                        </div>
                                    </div>
                                    <div className = "field">
                                        <div className = "control has-text-left">
                                            Last Name:
                                            <input className = "input is-small" type="text" placeholder="Last Name">
                                            </input>
                                        </div>
                                    </div>
                                    <div className = "field">
                                        <div className = "control has-text-left">
                                            Phone Number:
                                            <input className = "input is-small" type="tel" placeholder="Phone Number">
                                            </input>
                                        </div>
                                    </div>
                                    <div className = "field">
                                        <div className = "control has-text-left">
                                            Address:
                                            <input className = "input is-small" type="text" placeholder="Home Address">
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
                                    <button className="button is-block is-danger is-medium is-fullwidth">Sign Up</button>
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
