import React, { Component } from 'react'
import "../../App.scss"
//import { BrowserRouter as Link } from "react-router-dom";
import HomePageBusinessBox from '../HomePage/HomePageBusinessBox';

export default class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            set: false,
            tempval: '',
            value: '',
            businesses: [],
            checked: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    /*
     * The current URL is used to set the value in the search box
     * All businesses are fetched and stored so that they can be filtered as necessary based on the search term
    */ 
    componentDidMount() {
        const pathname = window.location.pathname;
        const sub = pathname.indexOf("Search/");
        const tofind = pathname.substring(pathname.length, sub+7);
        if(this.props.navset === true && this.state.set === false) {
            this.setState({
                value: tofind, 
                tempval: tofind, 
                set: this.props.navset
            })
        }

        fetch("http://localhost:8080/api/Business/")
            .then(response => response.json())
            .then(data => {
            this.setState({
                businesses: data,
                set: this.props.navset
            })
        })
    }

    // Handles search box values and in the case that it is equal to '', the URL is updated to /Search/
    handleChange(event) {
        this.setState({tempval: event.target.value});
        if(event.target.value === '') {
            this.setState({
                set: false
            }, () => window.history.replaceState(null, null, "/Search/"))
        }
    }
    handleCheck(event) {
        this.setState({
            set: false,
            checked: event.target.checked
        })
    }
    
    handleSubmit(event) {
        let filter = 0
        if(this.state.checked === false) {
            filter = this.state.businesses.filter(business => {
                return (business.name.toLowerCase().includes(this.state.tempval.toLowerCase()))
            }).length;
        }else {
            filter = this.state.businesses.filter(business => {
                return (business.description.toLowerCase().includes(this.state.tempval.toLowerCase()))
            }).length;
        }
        
        this.setState({
            set: true, 
            value: this.state.tempval,
            filteredlen: filter,
        }, () => window.history.replaceState(null, null, "/Search/"+this.state.value))

        event.preventDefault();
    }
    
    render() {
        let filterlen = 0
        if(this.state.checked === false) {
            filterlen = this.state.businesses.filter(business => {
                return (business.name.toLowerCase().includes(this.state.value.toLowerCase()))
            }).length;
        }else {
            filterlen = this.state.businesses.filter(business => {
                return (business.description.toLowerCase().includes(this.state.value.toLowerCase()))
            }).length;
        }
        this.setState({
            len: filterlen
        })

        let sr = null
        if(this.state.checked === false) {
            sr = this.state.businesses.filter(business => business.name.toLowerCase().includes(this.state.value.toLowerCase())).map(business => (
                <div key={business.name + business.phoneNumber}>
                    <HomePageBusinessBox name={business.name} id={business.id} desc={business.description} phoneNumber={business.phoneNumber} />
                </div>
            ))
        }else if(this.state.checked === true) {
            sr = this.state.businesses.filter(business => business.description.toLowerCase().includes(this.state.value.toLowerCase())).map(business => (
                <div key={business.name + business.phoneNumber}>
                    <HomePageBusinessBox name={business.name} id={business.id} desc={business.description} phoneNumber={business.phoneNumber} />
                </div>
            ))
        }

        if(this.props.navset===true && this.state.value === '') {
            return (
                <div id="searchtest">
                    <form onSubmit={this.handleSubmit} name='myform'>
                        <div className="field">
                            <label className="label" style={{textAlign: "left", fontSize: "1.1rem"}}>Search</label>
                            <div className="control">
                                <input className="input " type="text" value={this.state.tempval} onChange={this.handleChange} placeholder="Enter search term" ></input>
                            </div>
                        </div>

                        <div className="field" id="searchradio">
                            <div className="control">
                                <label className="checkbox">
                                    <input type="checkbox" id="cb" checked={this.state.checked} onChange={this.handleCheck} /> Search By Description
                                </label>
                                <span>   </span>
                            </div>
                            <p/>
                            <input className="button is-light is-small" type="submit" value="Search" name="submitbutton" id="submitbutton"/>
                        </div>
                    </form>
                    <p></p>
                    <div style={{width: "100%", border: "solid rgb(179, 179, 179) 0.5px", paddingLeft: "0px"}}/>
                </div>
            );
        }else if(this.props.navset===true && filterlen > 0 && this.state.value !== '') {
            return(
                <div id="businesslistcontainer">
                    <form onSubmit={this.handleSubmit} name='myform'>
                        <div className="field">
                            <label className="label" style={{textAlign: "left", fontSize: "1.1rem"}}>Search</label>
                            <div className="control">
                                <input className="input " type="text" value={this.state.tempval} onChange={this.handleChange} placeholder="Enter search term" ></input>
                            </div>
                        </div>

                        <div className="field" id="searchradio">
                            <div className="control">
                                <label className="checkbox">
                                <input type="checkbox" id="cb" checked={this.state.checked} onChange={this.handleCheck} name="question" /> Search By Description
                                </label>
                            </div>
                            <p></p>
                            <input className="button is-light is-small" type="submit" value="Search" id="submitbutton"/>
                        </div>
                    </form>

                    <p></p>
                    <div style={{width: "100%", border: "solid rgb(179, 179, 179) 0.5px", paddingLeft: "0px"}}/>
                    <p></p>
                    <div id="searchresults">
                        <span className="heading" style={{textAlign: "center"}}>Found {filterlen} Results For "{this.state.value}" {this.state.checked ? 'In Description' : ''}</span>
                        {/* {this.state.businesses.filter(business => business.name.toLowerCase().includes(this.state.value.toLowerCase())).map(business => (
                            <div key={business.name + business.phoneNumber}>
                                <HomePageBusinessBox name={business.name} id={business.id} desc={business.description} />
                            </div>
                        ))} */}
                        {sr}
                    </div>
                </div>
            );
        }else {
            return(
                <div id="businesslistcontainer">
                    <form onSubmit={this.handleSubmit} name='myform'>
                        <div className="field">
                            <label className="label" style={{textAlign: "left", fontSize: "1.1rem"}}>Search</label>
                            <div className="control">
                                <input className="input " type="text" value={this.state.tempval} onChange={this.handleChange} placeholder="Enter search term" />
                            </div>
                        </div>

                        <div className="field" id="searchradio">
                            <div className="control">
                                <label className="checkbox">
                                <input type="checkbox" id="cb" checked={this.state.checked} onChange={this.handleCheck} name="question" /> Search By Description
                                </label>
                            </div>
                            <p></p>
                            <input className="button is-light is-small" type="submit" value="Search" id="submitbutton"/>
                        </div>
                    </form>
                    <p></p>
                    <div style={{width: "100%", border: "solid rgb(179, 179, 179) 0.5px", paddingLeft: "0px"}}/>
                    <p></p>
                    <span className="heading" style={{textAlign: "center"}}>No Results For "{this.state.value}"</span>
                </div>
            );
        }
    }
}