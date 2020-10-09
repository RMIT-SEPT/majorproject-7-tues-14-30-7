import React, { Component } from 'react'
import "../../App.scss"
import HomePageHeader from '../HomePage/HomePageHeader';
//import { BrowserRouter as Router,Link } from "react-router-dom";

export default class Booking extends Component {
    constructor() {
        super()
        this.state = {
            example: null
        }
    }

    componentDidMount() {
        if(this.props.v) {
            this.setState({
                example: this.props.v
            }, () => console.log(this.state.example))
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
                                {this.props.v}
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