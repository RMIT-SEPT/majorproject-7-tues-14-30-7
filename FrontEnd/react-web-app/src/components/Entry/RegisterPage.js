import React, { Component } from 'react'
import { BrowserRouter as Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {createUser} from "../../actions/userActions";

class RegisterPage extends Component {
    constructor(){
        super();
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
            homeAddress: this.state.homeAddress,
            password: this.state.password,
            passwordConfirmation: this.state.passwordConfirmation
        }
        console.log(newUser);
        this.props.createUser(newUser, this.props.history);
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
RegisterPage.propTypes = {
    createProject: PropTypes.func.isRequired
  };
export default connect(
    null,
    { createUser }
  )(RegisterPage);