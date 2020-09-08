import React from "react"
import "./BusinessPage.scss"

<<<<<<< HEAD
export default class BusinessPage extends React.Component<{},any>{
=======
class BusinessPageBody extends React.Component<{},any>{
>>>>>>> 3ff3ce14cd38052bcfa4727328306a3a8a8f320e
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
<<<<<<< HEAD
=======
                <h1>****HEADER and NAV GOES HERE****</h1>
>>>>>>> 3ff3ce14cd38052bcfa4727328306a3a8a8f320e
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
<<<<<<< HEAD
            </body>
        )
    }
}
=======
                <h1>****FOOTER GOES HERE****</h1>
            </body>
        )
    }
}

export default BusinessPageBody;
>>>>>>> 3ff3ce14cd38052bcfa4727328306a3a8a8f320e
