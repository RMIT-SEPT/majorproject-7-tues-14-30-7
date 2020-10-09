import React from "react"
import "../../App.scss"
import HomePageHeader from "../HomePage/HomePageHeader"
import { Link } from 'react-router-dom'

export default class BusinessPage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            business: {},
            busid: this.props.match.params.id
        }
    }

    componentDidMount(){
        var apicall = "http://localhost:8080/api/Business/findById=" + this.state.busid;
        fetch(apicall)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    business: data
                })
            })
        this.populatetable();
        this.populatebusinesshours()
    }

    populatetable(){
        fetch("http://localhost:8080/api/Business/getWorker=" + this.state.busid)
            .then(res =>{
                res.json()
                .then(data => {
                    var dataArray = [];
                    dataArray.push(data);
                    if(dataArray.length > 1){
                        var input = "";
                        console.log(dataArray);
                        dataArray.forEach((row) =>{
                            input += "<tr>"
                            input += "<td>" + row.firstName + "</td>"
                            input += "<td>" + row.lastName + "</td>"
                            input += "<td>" + row.address + "</td>"
                            input += "<td>" + row.phoneNumber + "</td>"
                            input += "<td>" + "TO BE ADDED" + "</td>"
                            input += "<tr>"
                        });
                        document.getElementById("workertable").innerHTML = input;
                    }
                })
            })
    }
    
    populatebusinesshours(){
        fetch("http://localhost:8080/api/BusinessHours/findByBusId=" + this.state.busid)
            .then(res => {
                res.json()
                .then(data => {
                    var dataArray = []
                    dataArray.push(data)
                    var daysarray = ["ERROR/TIME NOT SET","Monday","Tuesday","Wednesday","Thurday","Firday","Saturday","Sunday"]
                    var input = "<p className='has-text-weight-bold'>Business Hours</p>"
                         for(var i = 0; i < 7;i++){
                            dataArray.forEach((row) =>{
                                if(row[i].openingTime == null || row[i].closingTime == null)
                                    input += "<p>" + daysarray[i + 1] + ": CLOSED </p>"
                                else{
                                    var opening = new Date("1999-09-27T" + row[i].openingTime.toString());
                                    var closing = new Date("2005-08-06T" + row[i].closingTime.toString())
                                    var openinghour = opening.getHours() % 12
                                    var closinghour = closing.getHours() % 12
                                    var openingmin;
                                    var closingmin;
                                    var openingmeridiem
                                    var closingmeridiem
                                    if(openinghour == 0)
                                        openinghour = 12 

                                    if(closinghour == 0)
                                        closinghour = 12

                                    if(openinghour >= 12)
                                        openingmeridiem = " pm"
                                    else
                                        openingmeridiem = " am"

                                    if(closinghour >= 12)
                                        closingmeridiem = " pm"
                                    else
                                        closingmeridiem = " am"

                                    if(opening.getMinutes() < 10)
                                        openingmin = "0" + opening.getMinutes() 
                                    else
                                        openingmin = opening.getMinutes() 

                                    if(closing.getMinutes() < 10)
                                        closingmin = "0" + closing.getMinutes()
                                    else
                                        closingmin = closing.getMinutes()
                                    var openingformatted = openinghour + ":" + openingmin + openingmeridiem
                                    var closingformatted = closinghour + ":" + closingmin + closingmeridiem
                                    input += "<p>" + daysarray[i + 1] + ": " + openingformatted +" To " + closingformatted + "</p>"
                                }               
                            });
                            document.getElementById("businesshours").innerHTML = input;
                        }
                    }
                )
            })
    }

    render(){
        return( 
            <section className="hero is-fullheight is-default is-bold">
                <HomePageHeader/>
                <div className="hero is-primary is-bold">
                    <h1 className="title is-1 has-text-centered py-6">{this.state.business.name}</h1>
                </div>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="columns is-ventered">
                            <div className="column is-narrow">
                                <h3 className="subtitle is-4">Worker List:</h3>
                                <table className="table">
                                    <thead>
                                        <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Home Address</th>
                                        <th>Number</th>
                                        <th>Email</th>  
                                    </tr>
                                    </thead>
                                    <tbody id="workertable"></tbody>
                                </table>
                            </div>
                            <div className="column is-6 is-offset-1">
                                <p>{this.state.business.blurb}</p>
                                <br></br>
                                <p>{this.state.business.description}</p>
                                <div className="py-6">
                                    <div className="notification is-primary">
                                        <div id="businesshours"></div>
                                    </div>
                                </div>
                                <Link to={"edit/" + this.state.business.id}>
                                    <div className="button is-primary">Edit Business</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="hero-foot">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                    <div className="notification is-link">
                        <p className="has-text-weight-bold">Address:</p>
                        <p>{this.state.business.address}</p>
                        </div>
                    </div>
                    <div className="column">
                    <div className="notification is-link">
                        <p className="has-text-weight-bold">Mobile Number:</p>
                        <p>{this.state.business.phoneNumber}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </section>
        )
    }
}