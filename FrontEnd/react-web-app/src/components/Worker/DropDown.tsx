import React, { Component } from 'react'
import './Worker.scss'
import 'bulma/css/bulma.css'


class DropDown extends Component<any, any> {

    constructor(props : any) {
        super(props);
        this.state = {
            dropDownClass: "dropdown",
            days: ["Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            day: null
        };
    }

    //When the user clicks on the drop down box this will be activated and will inverse the state of the dropdown box Eg: "dropdown is-active" -> "dropdown"
    activateDropDown(){
        if(this.state.dropDownClass == "dropdown"){
            this.setState({
                dropDownClass: "dropdown is-active"
            })
        }
        else {
            this.setState({
                dropDownClass: "dropdown"
            }) 
        }
    }

    render() {

        //Used to render a dropdrown box with all days of the week
        var days = ["Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        return(
            <div className={this.state.dropDownClass + " day-box"} onClick={()=>this.activateDropDown()}>
                <div className="dropdown-trigger">
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>Day</span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>

                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                    {
                        //Creates a day element for the dropdown box for each day of the week
                    }
                        {days.map(function(day, index){
                            return (<a className="dropdown-item">
                                        {day}
                                    </a>)
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default DropDown;