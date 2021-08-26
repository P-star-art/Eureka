import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from '@material-ui/core';
import moment from 'moment';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    ButtonBase,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from 'axios';

import { deleteAbstract } from '../actions/abstracts';
import useStyles from './styles';
import { getAbstracts } from '../actions/abstracts';
import './Feed.css';
import { useParams } from 'react-router-dom';



const Feed = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem("profile"))
    const [abstracts, setAbstracts] = useState([]);
    // const abstracts = useSelector((state) => state.abstracts);
    // useEffect(() => {
    //     dispatch(getAbstracts());
    // }, [])
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        axios.get("https://eurekaches.herokuapp.com/abstracts")
            .then(res => {
                const x = res.data.filter((abstract) => {
                    return abstract.creator === id
                })
                setAbstracts(x);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    console.log(abstracts);

    return (
        <React.Fragment>
            <header
                className="banner_eureka"
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                }}
            >
                <div className="container banner__contents_eureka">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-12 sm-12">
                            <h1 className="banner_header_eureka">Eureka 4.0 Feed</h1>
                        </div>
                    </div>
                </div>
            </header>
            <section style={{ marginBottom: "50px", marginTop: "50px" }} className="abstracts">
                <div className="container">
                    {
                        !abstracts.length ? <CircularProgress /> : (

                            <div style={{ justifyContent: "center" }} className="row">
                                {
                                    abstracts.map((abstract) => (
                                        <div key={abstract._id} style={{ marginBottom: "20px", padding: "20px" }} className="col-md-10 col-lg-10 col-sm-6 abstract-card">
                                            <div class="card">
                                                <div style={{ textAlign: "center" }} class="card-body">
                                                    <h5 style={{ color: "blue" }}>{abstract.name}</h5>
                                                    <h2 style={{ fontSize: "23px" }} class="card-title">{abstract.title}</h2>
                                                    <p style={{ alignSelf: "left!important" }}>Published at {moment(abstract.createdAt).format("MMM Do YYYY")}</p>
                                                    {/* <p style={{ color: "#5d5e8d", fontSize: "18px" }} class="card-text">{abstract.message}</p> */}
                                                    <div style={{ color: "rgb(93, 94, 141)" }} dangerouslySetInnerHTML={{ __html: abstract.message }}></div>
                                                </div>
                                                <CardActions className={classes.cardActions}>
                                                    {
                                                        user?.result?._id === abstract.creator && (
                                                            <Button size="small" color="primary" onClick={() => dispatch(deleteAbstract(abstract._id))}>
                                                                <DeleteIcon fontSize="small" />Delete
                                                            </Button>
                                                        )
                                                    }
                                                </CardActions>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </section>

        </React.Fragment>
    )
}

export default Feed
