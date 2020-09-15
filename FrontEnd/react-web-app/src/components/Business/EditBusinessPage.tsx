import React from 'react'
import "../../App.scss"

export default class EditBusinessPage extends React.Component<{},any>{
    constructor(props: number){
        super(props)
        this.state = {
            business: {},
            businessTime: [],
            businessId: 1,
            name: "",
            blurb: "",
            description: "",
            address: "",
            phoneNumber: ""
        }
        // this.onChange = this.onChange.bind(this)
        this.updateBusiness = this.updateBusiness.bind(this)
    }

    // set the state of the input fields to what the user is typing
    // onChange(e){
    //     this.setState({[e.target.name]: e.target.value})
    // }

    //API call for getting the business info 
    componentDidMount(){
        var businessApi = "http://localhost:8080/api/Business/findById=" + this.state.businessId;
        fetch(businessApi)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    business: data
                })
                console.log(data.name);
                (document.getElementById("name") as HTMLInputElement).value = data.name;
                (document.getElementById("blurb") as HTMLInputElement).value = data.blurb;
                (document.getElementById("description") as HTMLInputElement).value = data.description;
                (document.getElementById("address") as HTMLInputElement).value = data.address;
                (document.getElementById("phoneNumber") as HTMLInputElement).value = data.phoneNumber;
            })
        var businessTimeApi ="http://localhost:8080/api/BusinessHours/findByBusId=" + this.state.businessId;
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
                console.log(data[0].openingTime);
                (document.getElementById("1Opening") as HTMLInputElement).value = data[0].openingTime;

                for(var i = 1; i <= 7;i++){
                    var opening = i + "Opening"
                    var closing = i + "Closing";
                    (document.getElementById(opening) as HTMLInputElement).value = data[i - 1].openingTime;
                    (document.getElementById(closing) as HTMLInputElement).value = data[i - 1].closingTime;
                }
            }) 
    }

    // API call of put to update the business info of the this.state.businessId
    updateBusiness(e){
        e.preventDefault()
        var updateBusiness = {
            // id: this.state.businessId,
            // name: this.state.name,
            // blurb: this.state.blurb,
            // description: this.state.description,
            // address: this.state.address,
            // phoneNumber: this.state.phoneNumber
            id: this.state.businessId,
            name: (document.getElementById("name") as HTMLInputElement).value,
            blurb: (document.getElementById("blurb") as HTMLInputElement).value,
            description: (document.getElementById("description") as HTMLInputElement).value,
            address: (document.getElementById("address") as HTMLInputElement).value,
            phoneNumber: (document.getElementById("phoneNumber") as HTMLInputElement).value
        }
        console.log(updateBusiness)
        var apiupdate = 'http://localhost:8080/api/Business/update=' + this.state.businessId
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
                openingTime: (document.getElementById(opening) as HTMLInputElement).value + ":00",
                closingTime: (document.getElementById(closing) as HTMLInputElement).value + ":00"
            }
            fetch(apicall,{
                method: 'PUT',
                headers: {
                    'Accept': "application/json, text/plain, */*",
                    'Content-Type': "application/json;charset=utf-8"
                },
                body: JSON.stringify(updatebusinessTime)
            })
            console.log((document.getElementById(opening) as HTMLInputElement).value + ":00")
            console.log((document.getElementById(closing) as HTMLInputElement).value + ":00")
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
                                    // value={this.state.name}
                                    // onChange={this.onChange}
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
                                    // value="{this.state.blurb}"
                                    // onChange={this.onChange}
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
                                    // value={this.state.description}
                                    // onChange={this.onChange}
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
                                    // value={this.state.address}
                                    // onChange={this.onChange}
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
                                    // value={this.state.phoneNumber}
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