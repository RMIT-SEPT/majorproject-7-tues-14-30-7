import React from 'react'

export default class EditBusinessPage extends React.Component<{},any>{
    constructor(props: number){
        super(props)
        this.state = {
            business: {},
            businessId: 1
        }
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

    updateBusiness(){

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
                    <form method="POST">
                        <div className="field">
                            <label className="label">Name:</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Business Name" value={this.state.business.name} required></input>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Blurb:</label>
                            <div className="control">
                                <textarea className="textarea" placeholder="Business Blurb" value={this.state.business.blurb} required></textarea>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Description:</label>
                            <div className="control">
                                <textarea className="textarea" placeholder="Business Blurb" value={this.state.business.description} required></textarea>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Address:</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Business Address" value={this.state.business.address} required></input>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Phone Number:</label>
                            <div className="control">
                                <input className="input" type="tel" placeholder="Business Phone Number" value={this.state.business.phoneNumber} required></input>
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
                                <button className="button is-light" type="reset">Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}