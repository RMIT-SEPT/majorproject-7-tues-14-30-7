import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './Worker.scss'
import Shifts from './Shifts'
import ChangeAvailabilities from './ChangeAvailabilities'
import ProfileInfo from './ProfileInfo'
import ServiceInfo from './ServiceInfo'
import HomePageHeader from '../HomePage/HomePageHeader'
import queryString from 'query-string'

class Worker extends Component<any, any> {

    constructor(props : any) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            showShifts: true,
            values: queryString.parse(this.props.location.search)
        };
    }


    componentDidMount() {
        fetch('http://localhost:8080/api/worker/' + this.state.values.id).then(res => res.json())
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

    activateLink = (index) =>{
        this.state.links[0] = "profile-link"
        this.state.links[1] = "service-link"
        this.state.links[2] = "shifts-link"
        this.state.links[3] = "availability-link"
        this.state.links[index] = this.state.links[index] + " is-active";
        var updatedLinks = this.state.links;
        this.setState({
            links: updatedLinks
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

        else if(items.user == undefined){
            return <div className="worker-not-found">Worker not found!</div>
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
                                    <a className="button is-danger is-outlined edit-button" href="#" id="edit-preferences" onClick={()=>{alert("Your account as been deactivated")}}>
                                                                                                        Deactivate Profile
                                    </a>
                                    <br/>
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
                                <li className={this.state.links[0]}
                                onClick={()=>{
                                    this.activateLink(0);
                                }}>
                                    <a>
                                        <span className="icon">
                                            <i className="fa fa-list"></i>
                                        </span>
                                        <span>Profile Info</span>
                                    </a>
                                </li>
                                <li className={this.state.links[1]} onClick={()=>{
                                    this.activateLink(1);
                                }}>
                                    <a>
                                        <span className="icon">
                                            <i className="fa fa-list"></i>
                                        </span>
                                        <span>Services</span>
                                    </a>
                                </li>
                                <li className={this.state.links[2]} onClick={()=>{
                                    this.activateLink(2);
                                }}>
                                    <a>
                                        <span className="icon">
                                            <i className="fa fa-list"></i>
                                        </span>
                                        <span>Shifts</span>
                                    </a>
                                </li>
                                <li className={this.state.links[3]} onClick={()=>{
                                    this.activateLink(3);
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
                            this.state.links[0] === "profile-link is-active"?
                            <ProfileInfo workerId={this.state.values.id}/>
                            :null}
                        {
                            this.state.links[1] === "service-link is-active"?
                            <ServiceInfo workerId={this.state.values.id}/>
                            :null
                        }
                        {
                            this.state.links[2] === "shifts-link is-active"?
                            <Shifts workerId={this.state.values.id}/>
                            :null
                        }
                        { 
                            this.state.links[3] === "availability-link is-active"?
                            <ChangeAvailabilities workerId={this.state.values.id}/>
                            :null
                        }
                        
                    </div>
                </body>
            )
        }
    }
}

export default Worker;
