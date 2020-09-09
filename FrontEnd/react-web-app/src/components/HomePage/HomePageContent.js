import React, { Component } from 'react'
import "../../App.scss"
import axios from 'axios';
import HomePageHeader from './HomePageHeader';

export default class HomePageContent extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
           loading: true,
           businesses: [],
           bus: []
        };
      }
    
    async componentDidMount() {
        const response = await axios.get({
            URL: 'http://localhost:8080/api/Business/',
          })
        response.then((res) => {
            const items = res.data;
            console.log(items)
            this.setState({
              loading: false,
              businesses: items,
            });
            console.log(this.businesses);
          }, (error) => {
              console.log(error);
          }
        )
    }
     
    //   async componentDidMount() {
    //     const businessResponse = await axios.get('http://localhost:8080/api/Business/all') //.then(res => res.json())
    //     const businesses = await businessResponse.results
    //     console.log(businesses)
    //     this.setState({ businesses: businesses, loading: false })
    //   }

    render() {
        // if(this.state.loading) {
        //     return(
        //         <div>
        //     <HomePageHeader/>
        //     <div className="content" id="hpcontent">
        //         <div className="columns is-desktop is-gapless">
        //             <div className="column is-one-fifths">
        //                 <div className="header is-primary" id="herobanner2small">
        //                     <span style={{ textAlign: "center" }}>AGME</span> <br />
        //                     <span style={{ fontWeight: "normal", fontSize: "1rem" }}>book anything</span></div>
        //                 <section className="hero is-primary" id="herobanner2">
        //                     <div className="hero-body">
        //                         <div className="container" id="herobanner">
        //                             <h1 className="title has-text-centered">
        //                                 <span style={{ fontWeight: "bold" }} id="herotitle">AGME</span><br />
        //                                 <span id="subtitle">book anything</span>
        //                             </h1>
        //                         </div>
        //                     </div>
        //                 </section>
        //             </div>
        //             <div className="column is-four-fifths" id="businesscolumn">
        //                 <div className="container is-fluid" id="businesslistcontainer">
        //                     <div className="box" id="businesslist">
        //                         <p> Loading Businesses . . . </p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     </div>
        //     );
        // }
        // if(!this.state.businesses.length) {
        //     return(
        //         <div>
        //     <HomePageHeader/>
        //     <div className="content" id="hpcontent">
        //         <div className="columns is-desktop is-gapless">
        //             <div className="column is-one-fifths">
        //                 <div className="header is-primary" id="herobanner2small">
        //                     <span style={{ textAlign: "center" }}>AGME</span> <br />
        //                     <span style={{ fontWeight: "normal", fontSize: "1rem" }}>book anything</span></div>
        //                 <section className="hero is-primary" id="herobanner2">
        //                     <div className="hero-body">
        //                         <div className="container" id="herobanner">
        //                             <h1 className="title has-text-centered">
        //                                 <span style={{ fontWeight: "bold" }} id="herotitle">AGME</span><br />
        //                                 <span id="subtitle">book anything</span>
        //                             </h1>
        //                         </div>
        //                     </div>
        //                 </section>
        //             </div>
        //             <div className="column is-four-fifths" id="businesscolumn">
        //                 <div className="container is-fluid" id="businesslistcontainer">
        //                     <div className="box" id="businesslist">
        //                         <h1> No Businesses Found </h1>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     </div>
        //     );
        // }

        return (
            <div>
            <HomePageHeader/>
            <div className="content" id="hpcontent">
                <div className="columns is-desktop is-gapless">
                    <div className="column is-one-fifths">
                        <div className="header is-primary" id="herobanner2small">
                            <span style={{ textAlign: "center" }}>AGME</span> <br />
                            <span style={{ fontWeight: "normal", fontSize: "1rem" }}>book anything</span></div>
                        <section className="hero is-primary" id="herobanner2">
                            <div className="hero-body">
                                <div className="container" id="herobanner">
                                    <h1 className="title has-text-centered">
                                        <span style={{ fontWeight: "bold" }} id="herotitle">AGME</span><br />
                                        <span id="subtitle">book anything</span>
                                    </h1>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="column is-four-fifths" id="businesscolumn">
                        <div className="container is-fluid" id="businesslistcontainer">
                            <div className="box" id="businesslist">
                                {/* {this.state.bus.map(business => (
                                    // <div key={business.name + business.phoneNumber}>
                                        <Link to={'/BusinessPage/'+business.id}>
                                            <HomePageBusinessBox name={business.name} link={business.id} />
                                        </Link>
                                    // </div>
                                ))} */}

                                {/* <HomePageBusinessBox name={this.state.business.name} />
                                <HomePageBusinessBox name={this.state.business.name} />
                                <HomePageBusinessBox name={this.state.business.name} /> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}