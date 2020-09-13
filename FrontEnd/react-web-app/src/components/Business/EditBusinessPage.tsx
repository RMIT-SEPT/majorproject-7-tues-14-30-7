import React from 'react'
import "../../App.scss"

export default class EditBusinessPage extends React.Component<{},any>{
    constructor(props: number){
        super(props)
        this.state = {
            business: {},
            businessId: 1,
            name: "",
            blurb: "",
            description: "",
            address: "",
            phoneNumber: ""
        }
        this.onChange = this.onChange.bind(this)
        this.updateBusiness = this.updateBusiness.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    componentDidMount(){
        var apicall = "http://localhost:8080/api/Business/findById=" + this.state.businessId;
        fetch(apicall)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    business: data
                })
            })
    }

    updateBusiness(e){
        e.preventDefault()
        var updateBusiness = {
            id: this.state.businessId,
            name: this.state.name,
            blurb: this.state.blurb,
            description: this.state.description,
            address: this.state.address,
            phoneNumber: this.state.phoneNumber
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
    }

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
                                    //value={this.state.name}
                                    onChange={this.onChange}
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
                                    onChange={this.onChange}
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
                                    onChange={this.onChange}
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
                                    onChange={this.onChange}
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
                                <input type="time"></input>
                            </div>
                        </div>
                        <div className="field is-horizontal">
                            <div className="field-label">
                                <label className="label">Tuesday:</label>
                            </div>
                            <div className="field-body">
                                <input type="time"></input>
                            </div>
                        </div>
                        <div className="field is-horizontal">
                            <div className="field-label">
                                <label className="label">Wednesday:</label>
                            </div>
                            <div className="field-body">
                                <input type="time"></input>
                            </div>
                        </div>
                        <div className="field is-horizontal">
                            <div className="field-label">
                                <label className="label">Thursday:</label>
                            </div>
                            <div className="field-body">
                                <input type="time"></input>
                            </div>
                        </div>
                        <div className="field is-horizontal">
                            <div className="field-label">
                                <label className="label">Firday:</label>
                            </div>
                            <div className="field-body">
                                <input type="time"></input>
                            </div>
                        </div>
                        <div className="field is-horizontal">
                            <div className="field-label">
                                <label className="label">Saturday:</label>
                            </div>
                            <div className="field-body">
                                <input type="time"></input>
                            </div>
                        </div>
                        <div className="field is-horizontal">
                            <div className="field-label">
                                <label className="label">Sunday:</label>
                            </div>
                            <div className="field-body">
                                <input type="time"></input>
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