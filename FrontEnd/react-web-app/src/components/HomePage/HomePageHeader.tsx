
import React, { Component } from 'react'
import '../../App.scss';
import { BrowserRouter as Router,Link } from "react-router-dom";
import NavSearch from './NavSearch';
import HomePageTitle from './HomePageTitle';

interface headerprops {}
interface headerstate {
    currentid: number;
}

export default class HomePageHeader extends Component<headerprops, headerstate> {
    constructor(props: headerprops) {
        super(props);

        this.state = {
            currentid: 1
        }
    }

    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    {/* <div className="navbar-item">
                        <Link to="/"><img src={require("./Images/brand.png")} width="112" height="28" alt="nav-img"/></Link>
                    </div> */}
                    <div className="navbar-item">
                        <HomePageTitle/>
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
                    <input type="checkbox" id="nav-toggle-state" />

                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <div className="navbar-item" id="burgerzoomed">
                                <NavSearch/>
                            </div>
                            <div className="navbar-item">
                                <Link to={"/UserHomePage/" + this.state.currentid}>Dashboard</Link>
                            </div>
                            <div className="navbar-item">
                                <Link to="/Worker">Worker</Link>
                            </div>
                            <div className="navbar-item">
                                <Link to="/BusinessPage/">BusinessPageTemp</Link>
                            </div>
                            <div className="navbar-item has-dropdown is-hoverable">
                                    <div className="navbar-link" id="dropdown">
                                        More
                                    </div>
                                    <div className="navbar-dropdown">
                                        <div className="navbar-item" id="bushide">
                                        <Link to="/">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <div className="button is-primary" id="signup">
                                        <Link to="/Signup"><span style={{fontWeight: "bold", color: "white"}}>Sign up</span></Link>
                                    </div>
                                    <div className="button is-light">
                                        <Link to="/Login">Log in</Link>
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