import React from "react"
import "../../App.scss"

export default class BusinessPage extends React.Component<{},any>{
    constructor(props: number) {
        super(props)
        this.state = {
            business: {},
            businessId: 1
        }
    }
    
    componentDidMount(){
        fetch("http://localhost:8080/api/Business/findById=1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    business: data
                })
            })
    }

    render(){
        return( 
            <body>
                <div className="has-text-centered is-size-1">
                    <h1>{this.state.business.name}</h1>
                </div>
                <br></br>
                <div className="is-size-4">
                    <h3>Worker List:</h3>
                </div>
                <div className="columns">
                    <div className="column is-narrow">
                        <table className="table">
                            <tr>
                                <th>Name</th>
                                <th>Number</th>
                                <th>Address</th>
                                <th>Email</th>  
                            </tr>
                            <tr>
                                <td>Steve Bobson</td>
                                <td>000</td>
                                <td>123 king street</td>
                                <td>PlzHd@pass.com</td>
                            </tr>
                        </table>
                    </div>
                    <div className="column">
                        <p>{this.state.business.blurb}</p>
                        <br></br>
                        <p>{this.state.business.description}</p>
                    </div>
                </div>
                <div className="is-size-4">
                    <h4>Contact us:</h4>
                </div>
                <br></br>
                <div className="is-size-6">
                    <p className="has-text-weight-bold">Address:</p>
                    <p>{this.state.business.address}</p>
                    <p className="has-text-weight-bold">Mobile Number:</p>
                    <p>{this.state.business.phoneNumber}</p>
                </div>
            </body>
        )
    }
}