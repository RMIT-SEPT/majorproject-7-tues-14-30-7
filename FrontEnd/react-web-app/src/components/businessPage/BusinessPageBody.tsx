import React from "react"
import "./BusinessPage.scss"

class BusinessPageBody extends React.Component<{},any>{
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
                <h1>****HEADER and NAV GOES HERE****</h1>
                <h1>{this.state.business.name}</h1>
                <div className="practice">
                    <section className="table">
                        <h3>Worker List:</h3>
                        <table>
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
                    </section>
                    <section>
                        <p>{this.state.business.blurb}</p>
                        <p>{this.state.business.description}</p>
                    </section>
                </div>
                <h4>Contact us:</h4>
                <p>Address: {this.state.business.address}</p>
                <p>Mobile Number: {this.state.business.phoneNumber}</p>
                <h1>****FOOTER GOES HERE****</h1>
            </body>
        )
    }
}

export default BusinessPageBody;
