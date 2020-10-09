import React, { Component } from 'react'
import "../../App.scss"
import HomePageHeader from '../HomePage/HomePageHeader';
//import { BrowserRouter as Router,Link } from "react-router-dom";

export default class Booking extends Component {
    constructor() {
        super()
        this.state = {
            example: []
        }
    }

    componentDidMount() {
        if(this.props.location.state.v) {
            this.setState({
                example: this.props.location.state.v
            })
        }
    }

    render() {
        return(
            <div>
                <div className="content" id="hpcontent">
                    <HomePageHeader/>
                    <div className="hero is-primary">
                        <div className="hero-body" id="searchhero">
                            <h1 className="title" id="searchtitle" style={{fontWeight: "bold", fontSize: "4vh"}}>Make A Booking For [Date]</h1>
                        </div>
                    </div>
                    <div className="container is-fluid" id="searchcontainer">
                        <div className="box" id="searchlist">
                            <p>
                                {this.state.example}
                                <br></br>
                                booking info here
                            </p>
                            <button>booking button</button>
                        </div>
                        <div className="space"></div>
                    </div>
                </div>
            </div>
        );
    }
}