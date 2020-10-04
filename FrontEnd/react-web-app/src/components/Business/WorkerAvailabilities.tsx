import React, { Component } from 'react'
import "../../App.scss"

class WorkerAvailabilities extends Component<any, any> {

    constructor(props : any) {
        super(props);
        this.state = {
            business: {},
            workers: []
        };
    }

    componentDidMount(){
        var busId = this.props.busId;
        var apicall = "http://localhost:8080/api/Business/findById=" + busId;
        fetch(apicall)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    business: data,
                    workers: data.workers
                })
            })
    }

    render(){
        var workers = this.state.workers;
        var days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
        var shiftStartDate;
        var shiftEndDate;
        var daysInMonth = 31;
        return(
            <div>
                <h3 className="subtitle is-4 worker-availabilty">Worker Availabilities:</h3>
                {
                    workers.map((worker,i)=> {
                        var currentDate = new Date();
                        return(
                            <div className="container">
                                <h4 className="subtitle is-4 worker-name">{worker.user.firstName + " " + worker.user.lastName}</h4>
                                <div className="columns is-mobile shifts">
                                {
                                    Array.from(Array(daysInMonth), (e, j) => {
                                        var uniqueDate = (currentDate.getDate()+j) + "/" + (currentDate.getMonth()+1) + "/" + currentDate.getFullYear();
                                        return(
                                        <div className="column is-2-tablet is--mobile">
                                            <div className="card">
                                                <div className="card-content">
                                                    <div className="container">
                                                        <span className="tag is-dark subtitle">{days[(currentDate.getDay()+i%7)]}</span>
                                                        <p id={uniqueDate+ " " + i}>{uniqueDate}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>
                                        </div>
                                        )
                                    })
                                }
                                </div>
                                {
                                    worker.shiftStartTimes.map((shiftTime,k)=> {
                                        var shiftStartDate = new Date(worker.shiftStartTimes[k].toString());
                                        var shiftEndDate = new Date(worker.shiftEndTimes[k].toString());
                                        var shiftDate = (shiftStartDate.getDate()) + "/" + (shiftStartDate.getMonth()+1) + "/" + shiftStartDate.getFullYear();
                                        var workingTimes = shiftStartDate.getHours() + ":" + shiftStartDate.getMinutes() +
                                        "-" + shiftEndDate.getHours() + ":" + shiftEndDate.getMinutes();
                                        var theDiv = document.getElementById(shiftDate+ " " +i);
                                        console.log(shiftDate+" "+i);
                                        var pElement = document.createElement('p');
                                        pElement.className = workingTimes;
                                        pElement.innerText = workingTimes;
                                        if(theDiv != null){
                                            if(theDiv.getElementsByClassName(workingTimes)[0] == null){
                                                theDiv.appendChild(pElement);
                                            }
                                        }
                                        })
                                }                                            
                            </div>
                        )
                    })}
            </div>
        )
    }

}export default WorkerAvailabilities;