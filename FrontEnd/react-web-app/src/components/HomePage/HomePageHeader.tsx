import React, { Component } from 'react'
import '../../App.scss';
import HomePageContent from './HomePageContent';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

export default class HomePageHeader extends React.Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <Link to="/"><img src={require("./Images/brand.png")} width="112" height="28" alt="nav-img"/></Link>
                    </div>
                    
                    <label
                        role="button"
                        className="navbar-burger burger"
                        aria-label="menu"
                        aria-expanded="false"
                        htmlFor="nav-toggle-state"
                        >
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </label>
                    </div>
                    <Link to="/Worker" className="navbar-item">
                        <a>Worker</a>
                    </Link>

                    <Link to="/UserHomepage/1" className="navbar-item">
                        <a>User</a>
                    </Link>

                    <Link to="/BusinessPage" className="navbar-item">
                        <a>BusinessPage</a>
                    </Link>

                    <input type="checkbox" id="nav-toggle-state" />


                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <div className="navbar-item" id="burgerzoomed">
                                <div className="field">
                                    <div className="control">
                                        <input className="text is-primary" placeholder="Search"></input>
                                        <label> <a href="localhost:3000" id="searchbutton">
                                            <i className="fa fa-search"></i></a></label>
                                    </div>
                                </div>
                            </div>
                            <div className="navbar-item">
                                <Link to="/CustomerHomePage">Dashboard</Link>
                            </div>
                            <div className="navbar-item">
                                <Link to="/Worker">tempworkerlink</Link>
                            </div>
                            <div className="navbar-item has-dropdown is-hoverable">
                                    <div className="navbar-link" id="dropdown">
                                        More
                                    </div>
                                    <div className="navbar-dropdown">
                                        <div className="navbar-item">
                                        <Link to="/">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <div className="button is-primary" id="signup">
                                        <strong>Sign up</strong>
                                    </div>
                                    <div className="button is-light">
                                        Log in
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </nav>
                </div>
        )
    }
}