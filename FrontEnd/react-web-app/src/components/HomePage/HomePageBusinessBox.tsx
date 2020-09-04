import React, { Component } from 'react'
import "../../App.scss"
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

interface BBProps {
    name: string;
    id: number;
    desc: string;
}
interface BBState {
    renderl: string;
}

export default class HomePageBusinessBox extends React.Component<BBProps, BBState> {

    constructor(props : BBProps) {
        super(props);
    }

    render() {
        return (
            <div className="businessbox">
                <Link to={{
                    pathname: "/BusinessPage/"+this.props.id,
                    state: {businessId: this.props.id},
                }}>
                <div className="box" id="businessboxcontent">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-128x128" id="busimg">
                                <img src={require("./Images/businessimg.png")} alt="bus-img"/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <h1>{this.props.name}</h1>
                                <p id="bustext">{this.props.desc}</p>
                            </div>
                        </div>
                    </article>
                </div>
                <p></p>
                </Link>
            </div>
        )
    };
}
