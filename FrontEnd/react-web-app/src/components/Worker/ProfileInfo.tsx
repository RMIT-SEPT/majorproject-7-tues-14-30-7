import React, { Component } from 'react'
import './Worker.scss'
import 'bulma/css/bulma.css'


class ProfileInfo extends Component<any, any> {

    constructor(props : any) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/worker/' + this.props.workerId).then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json,
            })
        });
    }

    render() {
        var business;
        //State items of this component
        var {isLoaded, items, user} = this.state;
        var worker = this.state.items;

        //Will be assigned based on whether the fetch was successful or not
        var user = null;
        var businesses = null;

        //Will check if the data has been fetched correctly
        if(items.user == undefined){
            user = "not found"
            businesses = "business not found"
        }
        //If fetched correctly then get the first name and last name of this worker
        else{
            user = items.user
            businesses = items.businesses
        }

        return(
            <div className="worker-not-found    ">
                <p>User Name: {" " + user.userName}</p>
                <p>First Name:{" " + user.firstName}</p>
                <p>Last Name: {" " + user.lastName}</p>
                <p>Account Creation Date: {" " + items.created_At}</p>
                <p>Last Account Update: {" " + items.updated_At}</p>
                <p>Businesses: {" " + businesses[0].name}</p>
            </div>
        )
    }
}

export default ProfileInfo;