import React, { Component } from 'react'
import '../../App.scss';
import { BrowserRouter as Router,Link } from "react-router-dom";
import NavSearch from './NavSearch';
import HomePageTitle from './HomePageTitle';


export default class HomePageHeader extends Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <nav className="navbar" role="navigation" aria-label="main navigation">
<<<<<<< HEAD
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
=======
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
>>>>>>> e6b53176a435306d2adf0a1202e581cbf77d77fb
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
<<<<<<< HEAD
                                <div className="field">
                                    <div className="control">
                                        <input className="text is-primary" placeholder="Search"></input>
                                        <label> 
                                            <a href="localhost:3000" id="searchbutton">
                                                <i className="fa fa-search"></i>
                                            </a>
                                        </label>
                                    </div>
                                </div>
=======

                                <NavSearch/>

>>>>>>> e6b53176a435306d2adf0a1202e581cbf77d77fb
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
                                        <Link to="/Signup"><strong>Sign Up</strong></Link>
                                    </div>
                                    <div className="button is-light">
                                        <Link to="/Login">Login</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
<<<<<<< HEAD
                </nav>
            </div>

        //<HomePageContent/>

        //</div>
    );
}
}
=======
            </nav>
            </div>
        )
    }
}
>>>>>>> e6b53176a435306d2adf0a1202e581cbf77d77fb
