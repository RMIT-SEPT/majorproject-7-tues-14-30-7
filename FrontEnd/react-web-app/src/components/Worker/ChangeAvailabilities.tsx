import React, { Component } from 'react'
import './Worker.scss'
import 'bulma/css/bulma.css'
import TimePicker from 'react-time-picker'
import axios from "axios"


class ChangeAvailabilties extends Component<any, any> {

    constructor(props : any) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            showShifts: true,
            startTimes: ["00:00", "00:00", "00:00", "00:00", "00:00", "00:00", "00:00"],
            endTimes: ["00:00", "00:00", "00:00", "00:00", "00:00", "00:00", "00:00"]
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

    async updateAvailability(){
        try {

            const response = await axios.patch('http://localhost:8080/api/worker/1',
            [
                {
                'op':'replace',
                'path':'/startTimes/1',
                'value':this.state.startTime.toString() + ':00'
                },
                {
                    'op':'replace',
                    'path':'/endTimes/1',
                    'value':this.state.endTime.toString() + ':00'
                }
            ],
            {
                headers: {'content-type': 'application/json-patch+json'}
            });

        } catch(e) {
            console.log(e)
        }
    }

    render() {

        //State items of this component
        var {isLoaded, items} = this.state;
        //console.log(items.user.firstName);

        var startTimes = ["00:00", "00:00", "00:00", "00:00", "00:00", "00:00", "00:00"];
        var endTimes = ["00:00", "00:00", "00:00", "00:00", "00:00", "00:00", "00:00"];



        return(
            <div className="shift-change-div">
                <div className="columns">
                    <div className="column">
                        Monday:
                    </div>
                    <div className="column">
                        Start Time:{" "}
                        <TimePicker 
                        onChange={startTimes[0]}
                        value={startTimes[0]}/>
                    </div>
                    <div className="column">
                        End Time: {" "}
                        <TimePicker 
                        onChange={endTimes[0]}
                        value={endTimes[0]}/>
                    </div>
                </div>
                <button className="button is-primary is-outlined submit-shift" id="edit-preferences" 
                onClick={()=>{this.updateAvailability(); console.log(this.state.startTime.toString() + ':00')}}>
                    Submit
                </button>
            </div>
        );
    }
}

export default ChangeAvailabilties;