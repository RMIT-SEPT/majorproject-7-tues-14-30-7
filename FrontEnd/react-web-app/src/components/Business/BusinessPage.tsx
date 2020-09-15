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
        this.populatebusinesshours()
    }

    populatetable(){
        fetch("http://localhost:8080/user/1")
            .then(res =>{
                res.json()
                .then(data => {
                    var dataArray = [];
                    dataArray.push(data);
                    if(dataArray.length > 0){
                        var input :any = "";

                        dataArray.forEach((row) =>{
                            input += "<tr>"
                            input += "<td>" + row.firstName + "</td>"
                            input += "<td>" + row.lastName + "</td>"
                            input += "<td>" + row.homeAddress + "</td>"
                            input += "<td>" + row.phoneNumber + "</td>"
                            input += "<td>" + "TO BE ADDED" + "</td>"
                            input += "<tr>"
                        });
                        (document.getElementById("workertable") as HTMLTableRowElement).innerHTML = input;
                    }
                })
            })
    }
    
    populatebusinesshours(){
        fetch("http://localhost:8080/api/BusinessHours/findByBusId=1")
            .then(res => {
                res.json()
                .then(data => {
                    var dataArray = []
                    dataArray.push(data)
                    var daysarray = ["ERROR/TIME NOT SET","Monday","Tuesday","Wednesday","Thurday","Firday","Saturday","Sunday"]
                    if(dataArray.length > 0){
                        var input :any = "<p className='has-text-weight-bold'>Business Hours</p>"
                        var i: number;
                        
                        for(i = 0; i < 7;i++){
                            dataArray.forEach((row) =>{
                                if(row[i].openingTime == null || row[i].closingTime == null){
                                    input += "<p>" + daysarray[i + 1] + ": CLOSED </p>"
                                }else{
                                    input += "<p>" + daysarray[i + 1] + ": " + row[i].openingTime + " To " + row[i].closingTime + "</p>"
                                }
                            });
                            (document.getElementById("businesshours") as HTMLDivElement).innerHTML = input;
                        }
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
                                        <div id="businesshours"></div>
                                    </div>
                                </div>
                                <Link to="/BusinessPage/edit/:id">
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