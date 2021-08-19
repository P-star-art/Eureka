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

import { deleteAbstract } from '../actions/abstracts';
import useStyles from './styles';
import { getAbstracts } from '../actions/abstracts';
import './Feed.css';

const Feed = () => {

    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getAbstracts());
    }, [])

    const abstracts = useSelector((state) => state.abstracts);
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
                                                    <h2 style={{ fontSize: "23px" }} class="card-title">{abstract.title}</h2>
                                                    <p style={{ alignSelf: "left!important" }}>Published at {moment(abstract.createdAt).format("MMM Do YYYY")}</p>
                                                    {/* <p style={{ color: "#5d5e8d", fontSize: "18px" }} class="card-text">{abstract.message}</p> */}
                                                    <div style={{color: "rgb(93, 94, 141)"}} dangerouslySetInnerHTML={{ __html: abstract.message }}></div>
                                                </div>
                                                <CardActions className={classes.cardActions}>
                                                    <Button size="small" color="primary" onClick={() => dispatch(deleteAbstract(abstract._id))}>
                                                        <DeleteIcon fontSize="small" />Delete
                                                    </Button>
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
