import React, { Component } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

export default class LoginPage extends Component {
    render() {
        return (
            <div className = "hero is-fullheight is-primary">
                <div className = "hero-body">
                    <div className = "container has-text-centered">
                        <div className = "column is-8 is-offset-2">
                            <h3 className = "title has-text-white">Login</h3>
                            <hr className = "login-hr"></hr>
                            <p className = "subtitle has-text-white">Temporary subtitle</p>
                            <div className = "box">
                                <div className = "box">
                                    <img src={require("../HomePage/Images/brand.png")}></img>
                                </div>
                                <div className = "title has-text-grey is-5">
                                    Please enter your username and password.
                                </div>
                                <form>
                                    <div className = "field">
                                        <div className = "control">
                                            <input className = "input is-medium" type="text" placeholder="Username">
                                            </input>
                                        </div>
                                    </div>
                                    <div className = "field">
                                        <div className = "control">
                                            <input className = "input is-medium" type="password" placeholder="Password">
                                            </input>
                                        </div>
                                    </div>
                                    <button className="button is-block is-danger is-large is-fullwidth">Login</button>
                                </form>
                            </div>
                        </div>
                        <p className="has-text-grey">
                            <Link to="/Register">
                            <a>Sign Up</a>&nbsp;·&nbsp;
                            </Link>
                            <a>Contact Us</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
