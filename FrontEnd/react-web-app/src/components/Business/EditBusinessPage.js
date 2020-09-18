import React from 'react'
import "../../App.scss"

export default class EditBusinessPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            businessTime: []
        }
        this.updateBusiness = this.updateBusiness.bind(this)
        this.updateBusinessTime = this.updateBusinessTime.bind(this)
    }

    //API call for getting the business info 
    componentDidMount(){
        var busid = this.props.match.params.id
        var businessApi = "http://localhost:8080/api/Business/findById=" + busid;
        fetch(businessApi)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    business: data
                });
                document.getElementById("name").value = data.name;
                document.getElementById("blurb").value = data.blurb;
                document.getElementById("description").value = data.description;
                document.getElementById("address").value = data.address;
                document.getElementById("phoneNumber").value = data.phoneNumber;
            })
        var businessTimeApi ="http://localhost:8080/api/BusinessHours/findByBusId=" + busid;
        fetch(businessTimeApi)
            .then(response => response.json())
            .then(data =>{
                var dataArray = []

                for(var i = 0; i < 7;i++){
                    dataArray.push(data[i])
                }
                this.setState({
                    businessTime: dataArray
                })

                for(var i = 1; i <= 7;i++){
                    var opening = i + "Opening"
                    var closing = i + "Closing";
                    document.getElementById(opening).value = data[i - 1].openingTime;
                    document.getElementById(closing).value = data[i - 1].closingTime;
                }
            }) 
    }

    // API call of put to update the business info
    updateBusiness(){
        var busid = this.props.match.params.id
        var updateBusiness = {
            id: busid,
            name: document.getElementById("name").value,
            blurb: document.getElementById("blurb").value,
            description: document.getElementById("description").value,
            address: document.getElementById("address").value,
            phoneNumber: document.getElementById("phoneNumber").value
        }
        var apiupdate = 'http://localhost:8080/api/Business/update=' + busid
        fetch(apiupdate,{
            method: 'PUT',
            headers: {
                'Accept': "application/json, text/plain, */*",
                'Content-Type': "application/json;charset=utf-8"
            },
            body: JSON.stringify(updateBusiness)
        })
        this.updateBusinessTime();
    }

    // does 7 businessAPI call to update the businessHours
    updateBusinessTime(){
        for(var i = 1; i < 8;i++){
            var apicall = 'http://localhost:8080/api/BusinessHours/update=' + this.state.businessTime[i - 1].id
            var opening = i + "Opening"
            var closing = i + "Closing"
            var updatebusinessTime = {
                id: this.state.businessTime[i - 1].id,
                day: i,
                business_id: this.state.businessTime[i - 1].business_id,
                openingTime: document.getElementById(opening).value + ":00",
                closingTime: document.getElementById(closing).value + ":00"
            }
            fetch(apicall,{
                method: 'PUT',
                headers: {
                    'Accept': "application/json, text/plain, */*",
                    'Content-Type': "application/json;charset=utf-8"
                },
                body: JSON.stringify(updatebusinessTime)
            })
        }
    }

    // html render on page
    render(){
        return(
            <section className="hero is-fullheight is-default is-bold">
                <div className="hero is-primary is-bold">
                    <h1 className="title is-1 has-text-centered py-6">Edit Business Info</h1>
                </div>
                <div className="pt-5">
                    <h3 className="subtitle is-2">General info:</h3>
                </div>
                <div className="hero-body">
                    <form onSubmit={this.updateBusiness}>
                        <div className="field">
                            <label className="label">Name:</label>
                            <div className="control">
                                <input 
                                    className="input" 
                                    type="text" 
                                    id="name" 
                                    placeholder="Business Name" 
                                    required>
                            </input>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Blurb:</label>
                            <div className="control">
                                <textarea 
                                    className="textarea"
                                    id="blurb" 
                                    placeholder="Business Blurb" 
                                    required>
                                </textarea>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Description:</label>
                            <div className="control">
                                <textarea 
                                    className="textarea" 
                                    id="description" 
                                    placeholder="Business Blurb" 
                                    required>
                                </textarea>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Address:</label>
                            <div className="control">
                                <input 
                                    className="input" 
                                    type="text" 
                                    id="address" 
                                    placeholder="Business Address" 
                                    required>
                                </input>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Phone Number:</label>
                            <div className="control">
                                <input 
                                    className="input" 
                                    type="tel" 
                                    id="phoneNumber" 
                                    placeholder="Business Phone Number" 
                                    required>   
                                </input>
                            </div>
                        </div>
                        <div className="pt-5">
                            <h3 className="subtitle is-2">Business Hours:</h3>
                        </div>
                        <div className="field is-horizontal">
                            <div className="field-label">
                                <label className="label">Monday:</label>
                            </div>
                            <div className="field-body">
                                <input type="time" id="1Opening"></input>
                            </div>
                            <label className="label mx-3">TO</label>
                            <div className="field-body">
                                <input type="time" id="1Closing"></input>
                            </div>
                        </div>
                        <div className="field is-horizontal">
                            <div className="field-label">
                                <label className="label">Tuesday:</label>
                            </div>
                            <div className="field-body">
                                <input type="time" id="2Opening"></input>
                            </div>
                            <label className="label mx-3">TO</label>
                            <div className="field-body">
                                <input type="time" id="2Closing"></input>
                            </div>
                        </div>
                        <div className="field is-horizontal">
                            <div className="field-label">
                                <label className="label">Wednesday:</label>
                            </div>
                            <div className="field-body">
                                <input type="time" id="3Opening"></input>
                            </div>
                            <label className="label mx-3">TO</label>
                            <div className="field-body">
                                <input type="time" id="3Closing"></input>
                            </div>
                        </div>
                        <div className="field is-horizontal">
                            <div className="field-label">
                                <label className="label">Thursday:</label>
                            </div>
                            <div className="field-body">
                                <input type="time" id="4Opening"></input>
                            </div>
                            <label className="label mx-3">TO</label>
                            <div className="field-body">
                                <input type="time" id="4Closing"></input>
                            </div>
                        </div>
                        <div className="field is-horizontal">
                            <div className="field-label">
                                <label className="label">Friday:</label>
                            </div>
                            <div className="field-body">
                                <input type="time" id="5Opening"></input>
                            </div>
                            <label className="label mx-3">TO</label>
                            <div className="field-body">
                                <input type="time" id="5Closing"></input>
                            </div>
                        </div>
                        <div className="field is-horizontal">
                            <div className="field-label">
                                <label className="label">Saturday:</label>
                            </div>
                            <div className="field-body">
                                <input type="time" id="6Opening"></input>
                            </div>
                            <label className="label mx-3">TO</label>
                            <div className="field-body">
                                <input type="time" id="6Closing"></input>
                            </div>
                        </div>
                        <div className="field is-horizontal">
                            <div className="field-label">
                                <label className="label">Sunday:</label>
                            </div>
                            <div className="field-body">
                                <input type="time" id="7Opening"></input>
                            </div>
                            <label className="label mx-3">TO</label>
                            <div className="field-body">
                                <input type="time" id="7Closing"></input>
                            </div>
                        </div>
                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-primary" type="submit">Submit</button>
                            </div>
                            <div className="control">
                                <button className="button is-light" type="reset">Clear</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}