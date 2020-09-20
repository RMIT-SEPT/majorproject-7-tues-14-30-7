import React, { Component } from 'react'
import './Worker.scss'
import 'bulma/css/bulma.css'


class ServiceInfo extends Component<any, any> {

    constructor(props : any) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/worker/' + this.props.workerId).then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json,
            })
        });
    }

    render() {
        return(<div>asd</div>);
    }
}

export default ServiceInfo;