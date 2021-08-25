import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button, Paper } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import QuillEditor from "./Editor/QuillEditor";
import useStyles from './styles';
import { createAbstract } from '../actions/abstracts';

const CreateAbstract = () => {
    const [abstractData, setAbstractData] = useState({
        title: '', message: ''
    })
    const [content, setContent] = useState("");
    const [files, setFiles] = useState([]);
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('profile'));

    const onFilesChange = (files) => {
        setFiles(files);
    };

    const onEditorChange = (value) => {
        setContent(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createAbstract({...abstractData, name: user?.result?.teamName }));
        clear();
        history.push("/");
    }

    useEffect(() => {
        setAbstractData({ ...abstractData, message: content });
    }, [content]);

    const clear = () => {
        setAbstractData({ title: '', message: '' });
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Submit Your Abstract</Typography>
                <QuillEditor
                    style={{ marginBottom: "30px" }}
                    placeholder={"Start Posting Something!"}
                    onEditorChange={onEditorChange}
                    onFilesChange={onFilesChange}
                />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={abstractData.title} onChange={(e) => setAbstractData({ ...abstractData, title: e.target.value })} />
                {/* <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={abstractData.message} onChange={(e) => setAbstractData({ ...abstractData, message: e.target.value })} /> */}
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            </form>
        </Paper>
    )
}

export default CreateAbstract
