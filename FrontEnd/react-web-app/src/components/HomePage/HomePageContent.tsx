import React, { Component } from 'react'
import "../../App.scss"

export default class HomePageContent extends React.Component {
    render () {
        return (
            <div className="content">
                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title has-text-centered">
                                placeholder banner
                            </h1>
                        </div>
                    </div>
                </section>
                <br/>
                <div className="container is-fluid">
                    <div className="box">placeholder</div>
                </div>
            </div>
        )
    }
}