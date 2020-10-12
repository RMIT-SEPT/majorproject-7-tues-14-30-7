import React from "react"
import "../../App.scss"
import axios from 'axios'
import HomePageHeader from "../HomePage/HomePageHeader"
import { Link, withRouter } from 'react-router-dom'
import WorkerAvailabilities from "./WorkerAvailabilities"

export default class BusinessPage2 extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            business: {}
        }
    }

    async componentDidMount() {
        var busId = this.props.match.params.id
        await axios
        .get('http://localhost:8080/api/Business/findById='+ busId)
        .then(({ data })=>{
            this.setState({
                business: data,
            })
        })
        this.populatetable();
        this.populatebusinesshours();
    }

    populatetable(){
        fetch("http://localhost:8080/api/user/1")
            .then(res =>{
                res.json()
                .then(data => {
                    var dataArray = [];
                    dataArray.push(data);
                    if(dataArray.length > 1){
                        var input = "";

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
        var busid = this.props.match.params.id
        fetch("http://localhost:8080/api/BusinessHours/findByBusId=" + busid)
            .then(res => {
                res.json()
                .then(data => {
                    var dataArray = []
                    dataArray.push(data)
                    this.setState({
                        businessTime: dataArray
                    })
                    var daysarray = ["ERROR/TIME NOT SET","Monday","Tuesday","Wednesday","Thurday","Friday","Saturday","Sunday"]
                    //var input = "<p className='has-text-weight-bold'>Business Hours</p>"
                    var input = ''
                         for(var i = 0; i < 7;i++){
                            dataArray.forEach((row) =>{
                                if(row[i].openingTime == null || row[i].closingTime == null)
                                    input += "<p>" + daysarray[i + 1] + ": CLOSED </p>"
                                else{
                                    var opening = new Date("2015-03-25T" + row[i].openingTime.toString());
                                var closing = new Date("2015-03-25T" + row[i].closingTime.toString())
                                console.log(row[i].openingTime)
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
        var busid = this.props.match.params.id
        return( 
            <div id="hpcontent">
                <HomePageHeader/>
                <div style={{height: "100vh"}}>
                    <section className="header" id="userherobanner">
                        <div className="container" style={{height: "130px", paddingTop: "30px"}}>
                            <h1 className="title has-text-centered">
                                <span style={{ fontWeight: "bold", color: "white", fontSize: "3.2vh"}}>{this.state.business.name}</span>
                            </h1>
                        </div>
                    </section>
                    <div className="container is-fluid" id="businesslistcontainer">
                        <div className="box" id="businesslist" style={{overflowX: "auto"}}>
                            <div className="columns">
                                <div className="column is-7">
                                    
                                    <div style={{border: "solid 1px rgb(216, 216, 216)", borderRadius: "7px"}}>
                                        <WorkerAvailabilities busId={this.props.match.params.id}/>
                                    </div>

                                </div>
                                <div className="column is-5">
                                    <div className="has-text-centered" id="blurbbox">
                                        <p>{this.state.business.blurb}</p>
                                        <br></br>
                                        <p>{this.state.business.description}</p>
                                    </div>
                                    <div className="notification has-text-centered" id="noti">
                                        <p style={{fontWeight: "bold", textDecoration: "underline"}}>Business Hours</p>
                                        <div id="businesshours"></div>

                                    </div>
                                    <div className="has-text-centered">
                                        <Link to={"edit/" + this.state.business.id}>
                                            <div className="button" id="submitbutton">Edit Business</div>
                                        </Link>
                                    </div>
                                    <div className="workerlistpadding" style={{paddingTop: "30px", paddingLeft: "5vw"}}>
                                        <h3 className="subtitle is-4" style={{paddingLeft: "30%", fontWeight: 'bold'}}>Worker List</h3>
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
                                </div>
                            </div>
                            <p></p>
                            <br></br>
                            <p></p>
                            <p></p>
                            <br></br>
                            <p></p>
                            <p></p>
                            <br></br>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}