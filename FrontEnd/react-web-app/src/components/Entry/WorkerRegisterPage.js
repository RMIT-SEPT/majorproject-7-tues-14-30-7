import React, { Component } from 'react'
import { BrowserRouter as Router,Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {createWorker} from "../../actions/workerActions";

class WorkerRegisterPage extends Component {
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
            businesses:[],
            loading: true,
            id: 1
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async componentDidMount(){
        // Gets all businesses and stores them in this.state.businesses, the loading state is set to false.
        fetch("http://localhost:8080/api/Business/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    businesses: data,
                    loading: false
                })
            })
            console.log(this.state.businesses);
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
        const newWorkerDetails = {
            id: this.state.id
        }
        console.log(newUser);
        console.log("LOGGING WORKER DETAILS ON THE REGISTER PAGE");
        console.log(newWorkerDetails);
        const response = this.props.createWorker(newUser, newWorkerDetails, this.props.history);
        console.log("Logging response");
        console.log(response);
    }
    render() {
        const slice = this.state.businesses.map(business =>
            <option key={business.id} value={business.id} onChange = {this.onChange}>{business.name}</option>
        )
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
                                    <div className = "field">
                                        <div className = "control has-text-left">
                                            Select a business:
                                            <select className = "input is-small" type="business" placeholder="Business"
                                            name="id" value={this.state.id} onChange = {this.onChange}>
                                            {slice}
                                            </select>
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
WorkerRegisterPage.propTypes = {
    createProject: PropTypes.func.isRequired
  };
export default connect(
    null,
    { createWorker }
  )(WorkerRegisterPage);