import React, { Component } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {userLogin} from "../../actions/userLogin";

class LoginPage extends Component {
    constructor(){
        super();
        this.state ={
            userName:"",
            password: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const loginUser = {
            userName: this.state.userName,
            password: this.state.password
        }
        console.log(loginUser);
        this.props.userLogin(loginUser, this.props.history);
    }
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
                                <Link to="/" >
                                    <img src={require("../HomePage/Images/brand.png")}></img>
                                </Link>
                                </div>
                                <div className = "title has-text-grey is-5">
                                    Please enter your username and password.
                                </div>
                                <form id="login" onSubmit={this.onSubmit}>
                                    <div className = "field">
                                        <div className = "control">
                                            <input className="input is-medium" type="text" placeholder="Username" 
                                            name="userName" value={this.state.userName} onChange = {this.onChange}>
                                            </input>
                                        </div>
                                    </div>
                                    <div className = "field">
                                        <div className = "control">
                                        <input className = "input is-medium" type="password" placeholder="Password"
                                        name="password" value={this.state.password} onChange = {this.onChange}>
                                        </input>
                                        </div>
                                    </div>
                                    <button className="button is-block is-danger is-large is-fullwidth">Login</button>
                                </form>
                            </div>
                        </div>
                        <p className="has-text-grey">
                            <Link to="/Signup">
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
LoginPage.propTypes = {
    createProject: PropTypes.func.isRequired
  };
export default connect(
    null,
    { userLogin }
  )(LoginPage);