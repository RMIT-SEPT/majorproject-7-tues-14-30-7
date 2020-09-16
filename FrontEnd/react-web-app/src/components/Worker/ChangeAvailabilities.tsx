import React, { Component } from 'react'
import './Worker.scss'
import 'bulma/css/bulma.css'
import TimePicker from 'react-time-picker'
import axios from "axios"
import { start } from 'repl'


class ChangeAvailabilties extends Component<any, any> {

    constructor(props : any) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            startTimeMonday: "00:00",
            startTimeTueday: "00:00",
            startTimeWednesday: "00:00",
            startTimeThursday: "00:00",
            startTimeFriday: "00:00",
            startTimeSaturday: "00:00",
            startTimeSunday: "00:00",
            endTimeMonday: "00:00",
            endTimeTueday: "00:00",
            endTimeWednesday: "00:00",
            endTimeThursday: "00:00",
            endTimeFriday: "00:00",
            endTimeSaturday: "00:00",
            endTimeSunday: "00:00",
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/worker/1').then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json,
                links: ["profile-link", "service-link", "shifts-link is-active","availability-link"],
                link: null,
                startTimeMonday: json.startTimes[0],
                startTimeTuesday: json.startTimes[1],
                startTimeWednesday: json.startTimes[2],
                startTimeThursday: json.startTimes[3],
                startTimeFriday: json.startTimes[4],
                startTimeSaturday: json.startTimes[5],
                startTimeSunday: json.startTimes[6],
                endTimeMonday: json.endTimes[0],
                endTimeTuesday: json.endTimes[1],
                endTimeWednesday: json.endTimes[2],
                endTimeThursday: json.endTimes[3],
                endTimeFriday: json.endTimes[4],
                endTimeSaturday: json.endTimes[5],
                endTimeSunday: json.endTimes[6]
            })
        });
    }

    async updateAvailability(){
        
        //Turn all stored start times into their string format
        var startTimes = [this.state.startTimeMonday.toString(), this.state.startTimeTuesday.toString(), 
                          this.state.startTimeWednesday.toString(), this.state.startTimeThursday.toString(), this.state.startTimeFriday.toString(),
                          this.state.startTimeSaturday.toString(), this.state.startTimeSunday.toString()];
        
        //Turn all stored end times into their string format
        var endTimes = [this.state.endTimeMonday.toString(), this.state.endTimeTuesday.toString(), 
                        this.state.endTimeWednesday.toString(), this.state.endTimeThursday.toString(), this.state.endTimeFriday.toString(),
                        this.state.endTimeSaturday.toString(), this.state.endTimeSunday.toString()];

        //Check for start time strings not in the proper format
        for(var i=0;i<startTimes.length;i++){
            if(startTimes[i].length==5){
                startTimes[i] = startTimes[i]+":00"
            }
        }
        //Check for end time strings not in the proper format
        for(var i=0;i<endTimes.length;i++){
            if(endTimes[i].length==5){
                endTimes[i] = endTimes[i]+":00"
            }
        }
        

        console.log(startTimes[0].toString());

        //Update start time and end time for each day of the week
        for(var i=0;i<7;i++){
            try {
                const response = await axios.patch('http://localhost:8080/api/worker/1',
                [
                    {
                        'op':'replace',
                        'path':('/startTimes/' + i),
                        'value':startTimes[i]
                    },
                    {
                        'op':'replace',
                        'path': ('/endTimes/' + i),
                        'value':endTimes[i]
                    }
                ],
                {
                    headers: {'content-type': 'application/json-patch+json'}
                });

            } catch(e) {
                console.log(e)
            }
        }
    }

    onChangeStartTimeMonday = startTimeMonday => this.setState({startTimeMonday})
    onChangeStartTimeTuesday = startTimeTuesday => this.setState({startTimeTuesday})
    onChangeStartTimeWednesday = startTimeWednesday => this.setState({startTimeWednesday})
    onChangeStartTimeThursday = startTimeThursday => this.setState({startTimeThursday})
    onChangeStartTimeFriday = startTimeFriday => this.setState({startTimeFriday})
    onChangeStartTimeSaturday = startTimeSaturday=> this.setState({startTimeSaturday})
    onChangeStartTimeSunday = startTimeSunday => this.setState({startTimeSunday})

    onChangeEndTimeMonday = endTimeMonday => this.setState({endTimeMonday})
    onChangeEndTimeTuesday = endTimeTuesday => this.setState({endTimeTuesday})
    onChangeEndTimeWednesday = endTimeWednesday => this.setState({endTimeWednesday})
    onChangeEndTimeThursday = endTimeThursday => this.setState({endTimeThursday})
    onChangeEndTimeFriday = endTimeFriday => this.setState({endTimeFriday})
    onChangeEndTimeSaturday = endTimeSaturday => this.setState({endTimeSaturday})
    onChangeEndTimeSunday = endTimeSunday => this.setState({endTimeSunday})

    render() {
        //State items of this component
        var {isLoaded, items} = this.state;

        if(!isLoaded) {
            return <div>Loading...</div>
        }
        else {
            return(
                
                <div className="shift-change-div">
                    <div className="columns">
                        <div className="column day-tag">
                            Monday:
                        </div>
                        <div className="column">
                            Start Time:{" "}
                            <TimePicker 
                            onChange={this.onChangeStartTimeMonday}
                            value={this.state.startTimeMonday}/>
                        </div>
                        <div className="column">
                            End Time: {" "}
                            <TimePicker 
                            onChange={this.onChangeEndTimeMonday}
                            value={this.state.endTimeMonday}/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column day-tag">
                            Tueday:
                        </div>
                        <div className="column">
                            Start Time:{" "}
                            <TimePicker 
                            onChange={this.onChangeStartTimeTuesday}
                            value={this.state.startTimeTuesday}/>
                        </div>
                        <div className="column">
                            End Time: {" "}
                            <TimePicker 
                            onChange={this.onChangeEndTimeTuesday}
                            value={this.state.endTimeTuesday}/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column day-tag">
                            Wednesday:
                        </div>
                        <div className="column">
                            Start Time:{" "}
                            <TimePicker 
                            onChange={this.onChangeStartTimeWednesday}
                            value={this.state.startTimeWednesday}/>
                        </div>
                        <div className="column">
                            End Time: {" "}
                            <TimePicker 
                            onChange={this.onChangeEndTimeWednesday}
                            value={this.state.endTimeWednesday}/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column day-tag">
                            Thursday:
                        </div>
                        <div className="column">
                            Start Time:{" "}
                            <TimePicker 
                            onChange={this.onChangeStartTimeThursday}
                            value={this.state.startTimeThursday}/>
                        </div>
                        <div className="column">
                            End Time: {" "}
                            <TimePicker 
                            onChange={this.onChangeEndTimeThursday}
                            value={this.state.endTimeThursday}/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column day-tag">
                            Friday:
                        </div>
                        <div className="column">
                            Start Time:{" "}
                            <TimePicker 
                            onChange={this.onChangeStartTimeFriday}
                            value={this.state.startTimeFriday}/>
                        </div>
                        <div className="column">
                            End Time: {" "}
                            <TimePicker 
                            onChange={this.onChangeEndTimeFriday}
                            value={this.state.endTimeFriday}/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column day-tag">
                            Saturday:
                        </div>
                        <div className="column">
                            Start Time:{" "}
                            <TimePicker 
                            onChange={this.onChangeStartTimeSaturday}
                            value={this.state.startTimeSaturday}/>
                        </div>
                        <div className="column">
                            End Time: {" "}
                            <TimePicker 
                            onChange={this.onChangeEndTimeSaturday}
                            value={this.state.endTimeSaturday}/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column day-tag">
                            Sunday:
                        </div>
                        <div className="column">
                            Start Time:{" "}
                            <TimePicker 
                            onChange={this.onChangeStartTimeSunday}
                            value={this.state.startTimeSunday}/>
                        </div>
                        <div className="column">
                            End Time: {" "}
                            <TimePicker 
                            onChange={this.onChangeEndTimeSunday}
                            value={this.state.endTimeSunday}/>
                        </div>
                    </div>
                    <button className="button is-primary is-outlined submit-shift" id="edit-preferences" 
                    onClick={()=>{this.updateAvailability() }}>
                        Submit
                    </button>
                </div>
            );
        }
    }
}

export default ChangeAvailabilties;