import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HomePageHeader from "../HomePage/HomePageHeader";
import axios from "axios";
import {TOKEN_PREFIX} from "../../actions/types";
import { getJWT } from '../../actions/JWT';


class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            password: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const loginUser = {
            userName: this.state.userName,
            password: this.state.password
        }
        loginFunction(loginUser, this.props.history);
    }
    render() {
        return (
            <div>
                <HomePageHeader />
                <div id="hpcontent" style={{ height: "100vh" }}>
                    <section className="header" id="userherobanner">
                        <div className="container" style={{ height: "115px", paddingTop: "30px" }}>
                            <h1 className="title has-text-centered">
                                <span style={{ fontWeight: "bold", color: "white", fontSize: "3.2vh" }}>Login</span>
                            </h1>
                        </div>
                    </section>
                    <p></p>
                    <br></br>
                    <p></p>
                    <br></br>

                    <div className="container has-text-centered">
                        <div className="column is-8 is-offset-2">
                            <div className="box">
                                <div className="box">
                                    <Link to="/" >
                                        <span className="title" id="brand" style={{ color: "black" }}>AGME</span>
                                    </Link>
                                </div>
                                <div className="title has-text-grey is-5">
                                    Please enter your username and password.
                                </div>
                                <form id="login" onSubmit={this.onSubmit}>
                                    <div className="field">
                                        <div className="control">
                                            <input className="input is-medium" type="text" placeholder="Username"
                                                name="userName" value={this.state.userName} onChange={this.onChange}>
                                            </input>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input className="input is-medium" type="password" placeholder="Password"
                                                name="password" value={this.state.password} onChange={this.onChange}>
                                            </input>
                                        </div>
                                    </div>
                                    <button className="button is-block is-medium is-fullwidth has-text-white" style={{
                                        backgroundColor: "rgb(247, 71, 71)",
                                        fontWeight: "bold"
                                    }}>Login</button>
                                </form>
                            </div>
                        </div>
                        <p className="has-text-grey">
                            <Link to="/Signup">
                                <span style={{ color: "dodgerblue" }}>Sign Up</span>&nbsp;·&nbsp;
                            </Link>
                            <Link to="/Contact">
                                <span style={{ color: "dodgerblue" }}>Contact Us</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

async function loginFunction(loginUser, history) {
    try {
        const formData = new FormData();
        formData.append("username", loginUser.userName);
        formData.append("password", loginUser.password);
        const response = await axios.post("http://localhost:8080/login", formData, {withCredentials: true});
        history.push(`/login/?username=${loginUser.userName}&password=${loginUser.password}`);
    }
    catch {

    }
};

export default LoginPage;
