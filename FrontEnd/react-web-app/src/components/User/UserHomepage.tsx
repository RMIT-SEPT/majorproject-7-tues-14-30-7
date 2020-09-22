import React, { useState, useEffect, } from 'react'
import { useParams } from 'react-router-dom';

export default function UserHomepage() {
    useEffect(() => {
        fetchUser();
    }, []);
    const {id} = useParams();
    const [user, setUser] = useState({
        userName: "",
        firstName: "",
        lastName: "",
        phoneNumber: ""
    });

    const fetchUser = async () => {
        const fetchUser = await fetch(`http://localhost:8080/api/user/${id}`);
        const user = await fetchUser.json();
        setUser(user);
        console.log(user);
    };

    return (
        <div>
            <div className="content">
                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title has-text-centered">
                                {user.firstName} {user.lastName} Dashboard
                            </h1>
                        </div>
                    </div>
                </section>
                <br/>
                <div className="container is-fluid">
                    <div className="box">{user.firstName} Booking History:
                    <div>
                <div className = "card">
                    <header className="card-header">
                        <p className = "card-header-title">Hairdresser Service</p>
                    </header>
                    <div className = "card-content">
                        <div className = "content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Business Blurb
                        here.
                        <br></br>
                        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
                </div>

                <br></br>

                <div className = "card">
                    <header className="card-header">
                        <p className = "card-header-title">Dentist Service</p>
                    </header>
                    <div className = "card-content">
                        <div className = "content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Business Blurb
                        here.
                        <br></br>
                        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
                </div>
            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

