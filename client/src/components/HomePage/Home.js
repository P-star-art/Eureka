import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import { useHistory } from 'react-router';

import Banner from './Banner';
import HomeBody from './HomeBody';

const Home = () => {

    const [users, setUsers] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get('https://eurekaches.herokuapp.com/users')
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    console.log(users);

    return (
        <>
            <Banner />
            <HomeBody />
            <section></section>
            <section style={{ marginBottom: "50px", marginTop: "50px" }} className="abstracts">
                <div className="container">
                    <div style={{ justifyContent: "center" }} className="row">
                        {
                            users.length == 0 ? <CircularProgress /> :
                                users?.map((user) => {
                                    // console.log(user);
                                    return (
                                        <div onClick={() => history.push(`/feed/${user._id}`)} style={{ marginBottom: "20px", padding: "20px", cursor: "pointer" }} className="col-md-10 col-lg-10 col-sm-6 abstract-card">
                                            <div class="card">
                                                <div style={{ textAlign: "center" }} class="card-body">
                                                    <h5 style={{ color: "blue" }}>{user.teamName}</h5>
                                                    <h2 style={{ fontSize: "23px" }} class="card-title">{user.title}</h2>
                                                    <p style={{ fontSize: "18px", margin: 0 }}>By: {user.members}</p>
                                                    <p style={{ fontSize: "18px" }}>Mentored By: {user.mentors}</p>
                                                    <p style={{ color: "#5d5e8d", fontSize: "18px" }} class="card-text">{user.summary}</p>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
