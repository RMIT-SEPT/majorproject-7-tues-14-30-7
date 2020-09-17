import React, { Component } from 'react'
import "../../App.scss"
import HomePageBusinessBox from '../HomePage/HomePageBusinessBox';

export default class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            set: false,
            tempval: '',
            value: '',
            businesses: [],
            checked: false,
            visible: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.splitArrayIntoChunks = this.splitArrayIntoChunks.bind(this);
        this.changePage = this.changePage.bind(this);
    }
    
    /*
     * The current URL is used to set the value in the search box
     * All businesses are fetched and stored so that they can be filtered as necessary based on the search term
    */ 
    componentDidMount() {
        // const pathname = window.location.pathname;
        // const sub = pathname.indexOf("Search/");
        // const tofindtemp = pathname.substring(pathname.length, sub+7);
        // const tofind = unescape(tofindtemp);
        let tofind = this.props.searchid
        if(tofind === undefined) {
            tofind = ''
        }
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
    // Handles changes to the checkbox "Search By Description"
    handleCheck(event) {
        this.setState({
            set: false,
            checked: event.target.checked
        })
    }
    // Updates state based on form information when submit button is pressed
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

    splitArrayIntoChunks(arr, len) {
        if(this.state.checked === false) {
            arr = arr.filter(business => business.name.toLowerCase().includes(this.state.value.toLowerCase()));
        }else {
            arr = arr.filter(business => business.desc.toLowerCase().includes(this.state.value.toLowerCase()));
        }
        var grps = [], i = 0, n = arr.length;
        while(i < n) {
            grps.push(arr.slice(i, i += len));
        }
        return grps;
    }
    changePage(event) {
        var v = event.currentTarget.textContent;
        this.setState({
            visible: parseInt(v) - 1
        }, console.log(this.state.visible))
        event.preventDefault()
    }
    
    render() {
        // Determines the length of the filtered results for conditional rendering
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
        this.state.len = filterlen
        
        // Sets the components to be displayed based on the API results
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

        let ret = null;
        let pagination = null;
        if(filterlen > 5) {
            var retarr = this.splitArrayIntoChunks(this.state.businesses, 5);
            if(this.state.checked === false) {
                ret = retarr.map(group => {
                    return <div>
                        {group.filter(business => business.name.toLowerCase().includes(this.state.value.toLowerCase())).map(business => {
                            return <div key={business.name + business.phoneNumber}><HomePageBusinessBox name={business.name} id={business.id} desc={business.description} phoneNumber={business.phoneNumber} /></div>
                        })}
                    </div>
                })
            }else {
                ret = retarr.map(group => {
                    return <div>
                        {group.filter(business => business.description.toLowerCase().includes(this.state.value.toLowerCase())).map(business => {
                            return <div key={business.name + business.phoneNumber}><HomePageBusinessBox name={business.name} id={business.id} desc={business.description} phoneNumber={business.phoneNumber} /></div>
                        })}
                    </div>
                })
            }
            pagination = ret.map((o, index) => {
                return <div key={index} className="button is-small" onClick={this.changePage} id="pagbut">{index + 1}</div>
            })
        }

        // Base page layout, showing the form only. Displayed when 'value' state is == ''
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
        // Shows results in the form of business box components when the results are greater than 0 and the 'value' state isn't == ''
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
                        {ret !== null ? ret[this.state.visible] : sr}
                        <span className="heading" style={{textAlign: "center"}}>Found {<span style={{fontWeight: "bold"}}>{filterlen}</span>} Results For "{this.state.value}" {this.state.checked ? 'In Description' : ''}</span>
                        {pagination !== null ? pagination : null}
                    </div>
                </div>
            );
        // Page layout for no results. Displays a message to the user to let them no nothing was found
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