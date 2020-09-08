import React from "react"
import "../../App.scss"
import { Link } from 'react-router-dom'

export default class BusinessPage extends React.Component<{},any>{
    constructor(props: number) {
        super(props)
        this.state = {
            business: {},
            businessId: 1
        }
    }

    componentDidMount(){
        var apicall = "http://localhost:8080/api/Business/findById=" + this.state.businessId
        fetch(apicall)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    business: data
                })
            })
        this.populatetable();
    }

    populatetable(){
        fetch("http://localhost:8080/user/1")
            .then(res =>{
                res.json()
                .then(data => {
                    var dataArray = [];
                    dataArray.push(data);
                    if(dataArray.length > 0){
                        var temp :any = "";

                        dataArray.forEach((row) =>{
                            temp += "<tr>"
                            temp += "<td>" + row.firstName + "</td>"
                            temp += "<td>" + row.lastName + "</td>"
                            temp += "<td>" + row.homeAddress + "</td>"
                            temp += "<td>" + row.phoneNumber + "</td>"
                            temp += "<td>" + "TO BE ADDED" + "</td>"
                            temp += "<tr>"
                        })
                        document.getElementById("workertable").innerHTML = temp;
                    }
                })
            })
    }
    
    render(){
        return( 
            <section className="hero is-fullheight is-default is-bold">
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
                            <div className="colum is-6 is-offset-1">
                                <p>{this.state.business.blurb}</p>
                                <br></br>
                                <p>{this.state.business.description}</p>
                                <div className="py-6">
                                    <div className="notification is-primary">
                                        <p className="has-text-weight-bold">Business Hours</p>
                                        <p>Monday: 9:00 to 17:00</p>
                                        <p>Tuesday: 9:00 to 17:00</p>
                                        <p>Wednesday: 9:00 to 17:00</p>
                                        <p>Thursday: 9:00 to 17:00</p>
                                        <p>Firday: 9:00 to 17:00</p>
                                        <p>Saturday: CLOSED</p>
                                        <p>Sunday: CLOSED</p>
                                    </div>
                                </div>
                                <Link to="/worker">
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