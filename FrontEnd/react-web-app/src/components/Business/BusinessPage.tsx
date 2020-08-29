import React from "react"
import "../../App.scss"

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
            <div>
                <div className="has-text-centered">
                    <h1 className="title is-1">{this.state.business.name}</h1>
                </div>
                <h3 className="subtitle is-4">Worker List:</h3>
                <div className="columns">
                    <div className="column is-narrow">
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
                    <div className="column">
                        <p>{this.state.business.blurb}</p>
                        <br></br>
                        <p>{this.state.business.description}</p>
                    </div>
                </div>
                <h4 className="subtitle is-4">Contact us:</h4>
                <div className="is-size-6">
                    <p className="has-text-weight-bold">Address:</p>
                    <p>{this.state.business.address}</p>
                    <p className="has-text-weight-bold">Mobile Number:</p>
                    <p>{this.state.business.phoneNumber}</p>
                </div>
            </div>
        )
    }
}