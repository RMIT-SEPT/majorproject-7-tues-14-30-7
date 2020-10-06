import React, { Component } from 'react'
import { BrowserRouter as Router,Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {createUser} from "../../actions/userActions";
import {createBusiness} from "../../actions/businessActions";

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
            passwordConfirmation: "",

            businessName: "",
            businessblurb: "",
            businessdescription: "",
            businessAddress: "",
            businessPhoneNumber: ""
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
        const newBusiness = {
            businessName: this.state.businessName,
            businessblurb: this.state.businessblurb,
            businessdescription: this.state.businessdescription,
            businessAddress: this.state.businessAddress,
            businessPhoneNumber: this.state.businessPhoneNumber,
            businessUser: newUser
        }
        console.log(newUser);
        console.log(newBusiness);

        if(document.getElementById("customer").checked)
            this.props.createUser(newUser, this.props.history);
        else if(document.getElementById("business").checked)
            this.props.createBusiness(newBusiness, this.props.history);
        else if(document.getElementById("worker").checked)
            // workersection.style.display = "block";
            console.log("TBA")
    }

    chechboxchange(e){
        var bussection = document.getElementById("Sectionbusiness");
        var custsection = document.getElementById("Sectioncustomer");
        var workersection = document.getElementById("Sectionworker");
        bussection.style.display = "none";
        custsection.style.display = "none";
        workersection.style.display = "none";

        if(document.getElementById("customer").checked)
            custsection.style.display = "block";
        else if(document.getElementById("business").checked)
            bussection.style.display = "block";
        else if(document.getElementById("worker").checked)
            workersection.style.display = "block";
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
                                <Link to="/" >
                                    <img src={require("../HomePage/Images/brand.png")}></img>
                                </Link>
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
                                    <div className="control" onChange={this.chechboxchange}>
                                        <label className="is-size-6 mx-5">User Type:</label>
                                        <br></br>
                                        <label className="radio mx-5">
                                            <input type="radio" name="usertype" id="customer"></input>
                                            Customer
                                        </label>
                                        <label className="radio mx-5">
                                            <input type="radio" name="usertype" id="business"></input>
                                            Business Owner
                                        </label>
                                        <label className="radio mx-5">
                                            <input type="radio" name="usertype" id="worker"></input>
                                            Worker
                                        </label>
                                    </div>
                                    <div id="Sectionbusiness" hidden>
                                        <div className = "field">
                                            <div className = "control has-text-left">
                                                Business Name:
                                                <input className="input is-small" type="text" placeholder="Business Name" 
                                                name="businessName" value={this.state.businessName} onChange = {this.onChange}>
                                                </input>
                                            </div>
                                        </div>
                                        <div className = "field">
                                            <div className = "control has-text-left">
                                                Business Blurb:
                                                <textarea className="textarea is-small" type="text" placeholder="Business Blurb" 
                                                name="businessblurb" value={this.state.businessblurb} onChange = {this.onChange}>
                                                </textarea>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className = "control has-text-left">
                                                Business description:
                                                <textarea className="textarea is-small" type="text" placeholder="Business Description" 
                                                name="businessdescription" value={this.state.businessdescription} onChange = {this.onChange}>
                                                </textarea>
                                            </div>
                                        </div>
                                        <div className = "field">
                                            <div className = "control has-text-left">
                                                Business Address:
                                                <input className="input is-small" type="text" placeholder="Business Address" 
                                                name="businessAddress" value={this.state.businessAddress} onChange = {this.onChange}>
                                                </input>
                                            </div>
                                        </div>
                                        <div className = "field">
                                            <div className = "control has-text-left">
                                                Business Phone Number:
                                                <input className="input is-small" type="text" placeholder="Business Phone Number" 
                                                name="businessPhoneNumber" value={this.state.businessPhoneNumber} onChange = {this.onChange}>
                                                </input>
                                            </div>
                                        </div>
                                        <button type="submit" className="button is-block is-danger is-medium is-fullwidth">Sign Up Business</button>
                                    </div>
                                    <div id="Sectioncustomer" hidden>
                                        <button type="submit" className="button is-block is-danger is-medium is-fullwidth">Sign Up Customer</button>
                                    </div>
                                    <div id="Sectionworker" hidden>
                                        <button type="submit" className="button is-block is-danger is-medium is-fullwidth">Sign Up Worker</button>
                                    </div>
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