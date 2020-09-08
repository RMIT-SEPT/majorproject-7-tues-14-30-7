import React, { Component } from 'react'
import {BrowserRouter, Router} from "react-router-dom"
import 'bulma/css/bulma.css'
import './Worker.scss'
import Shifts from './Shifts'
import DropDown from './DropDown'
import HomePageHeader from '../HomePage/HomePageHeader'
import TimePicker from 'react-time-picker'

class Worker extends Component<any, any> {

    constructor(props : any) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            showShifts: true
        };
    }


    componentDidMount() {
        fetch('http://localhost:8080/api/worker/1').then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json,
                links: ["profile-link", "service-link", "shifts-link is-active","availability-link"],
                link: null
            })
        });
    }

    
    showOrHideShifts(){
        if(this.state.showShifts == true){
            this.setState({
                showShifts:false
            })
        }
        else{
            this.setState({
                showShifts:true
            })
        }
    }

    deactivateAllLinks(){
        this.setState({
            links:  ["profile-link", "service-link", "shifts-link", "availability-link"]
        })
    }

    activateShiftsLink(){
        this.setState({
            links:  ["profile-link", "service-link", "shifts-link is-active", "availability-link"]
        })
    }

    activateAvailabilityLink(){
        this.setState({
            links:  ["profile-link", "service-link", "shifts-link", "availability-link is-active"]
        })
    }

    

    render() {
        //State items of this component
        var {isLoaded, items} = this.state;

        //Will be assigned based on whether the fetch was successful or not
        var firstName = null;
        var lastName = null;

        //Will check if the data has been fetched correctly
        if(items.user == undefined){
            firstName = "Worker not found";
            lastName = "worker not found";
        }
        //If fetched correctly then get the first name and last name of this worker
        else{
            firstName = items.user.firstName;
            lastName = items.user.lastName;
        }

        //If fetch loading is not complete then continue loading
        if(!isLoaded) {
            return <div>Loading...</div>
        }

        //Display content if loading is complete
        else {
            return (
                <body className="worker-body">
                    <HomePageHeader/>
                    <div className="section profile-heading">
                        <div className="columns is-mobile is-multiline">
                            <div className="column is-2">
                                <span className="header-icon user-profile-image">
                                    <img alt="" src="http://placehold.it/300x225"/>
                                </span>
                            </div>
                            <div className="column is-4-tablet is-10-mobile name">
                                <p>
                                    <span className="title is-bold">{firstName + " " + lastName}</span>
                                    <br/>
                                    <a className="button is-primary is-outlined edit-button" href="#" id="edit-preferences">
                                                                                                        Edit Profile
                                    </a>
                                    <br/>
                                </p>
                                <p className="tagline">
                                    {
                                        this.state.items != null ?
                                        items.description
                                        : <div>Description did not load</div>
                                    }
                                    {items.description}
                                 </p>
                            </div>
                            <div className="column is-2-tablet is-4-mobile has-text-centered">
                                <p className="stat-val">3</p>
                                <p className="stat-key">Shifts</p>
                            </div>
                            <div className="column is-2-tablet is-4-mobile has-text-centered">
                                <p className="stat-val">4</p>
                                <p className="stat-key">Services</p>
                            </div>
                            <div className="column is-2-tablet is-4-mobile has-text-centered">
                                <p className="stat-val">99%</p>
                                <p className="stat-key">Customer Satisfaction</p>
                            </div>
                        </div>
                    </div>
                    <div className="profile-options is-fullwidth">
                        <div className="tabs is-fullwidth is-medium">
                            <ul>
                                <li className={this.state.links[0]}>
                                    <a>
                                        <span className="icon">
                                            <i className="fa fa-list"></i>
                                        </span>
                                        <span>Profile Info</span>
                                    </a>
                                </li>
                                <li className={this.state.links[1]}>
                                    <a>
                                        <span className="icon">
                                            <i className="fa fa-list"></i>
                                        </span>
                                        <span>Services</span>
                                    </a>
                                </li>
                                <li className={this.state.links[2]} onClick={()=>{
                                    this.showOrHideShifts();
                                    this.deactivateAllLinks();
                                    this.activateShiftsLink();
                                }}>
                                    <a>
                                        <span className="icon">
                                            <i className="fa fa-list"></i>
                                        </span>
                                        <span>Shifts</span>
                                    </a>
                                </li>
                                <li className={this.state.links[3]} onClick={()=>{
                                    this.showOrHideShifts();
                                    this.deactivateAllLinks();
                                    this.activateAvailabilityLink();
                                }}>
                                    <a>
                                        <span className="icon">
                                            <i className="fa fa-list"></i>
                                        </span>
                                        <span>Availability</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {
                            this.state.showShifts?
                            <Shifts/>
                            :null
                        }
                        {
                            !this.state.showShifts?
                            <div className="shift-change-div">
                                <div className="columns">
                                    <div className="column">
                                        <DropDown/>
                                    </div>
                                    <div className="column">
                                        Start Time:
                                        <TimePicker />
                                    </div>
                                    <div className="column">
                                        End Time: 
                                        <TimePicker />
                                    </div>
                                </div>
                                <br/>
                                
                            </div>
                            :null
                        }
                        
                    </div>
                </body>
            )
        }
    }
}

export default Worker;
