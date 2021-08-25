import React, { useState } from 'react';
import {
    Avatar,
    Button,
    Paper,
    Grid,
    Typography,
    Container,
    TextField,
} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import { signin, signup } from '../../actions/auth';
import Input from './Input';
import useStyles from "./styles";

const initialState = { teamName: '', title: '', members: '', mentors: '', summary: '', password: '', confirmPassword: '' }

const Auth = () => {

    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            dispatch(signup(formData, history));
        } else {
            dispatch(signin(formData, history));
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        setShowPassword(false);
    }


    return (
        <Container style={{ marginTop: "150px", marginBottom: "50px" }} component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">{isSignUp ? 'Sign up' : 'Sign in'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Input
                            name="teamName"
                            label="Team Name"
                            handleChange={handleChange}
                            autoFocus
                        />
                        {isSignUp && (
                            <>
                                <Input
                                    name="title"
                                    label="Title"
                                    handleChange={handleChange}
                                    type="text"
                                />
                            </>
                        )}
                        {isSignUp && (
                            <>
                                <Input
                                    name="members"
                                    label="Members"
                                    handleChange={handleChange}
                                    type="text"
                                />
                            </>
                        )}
                        {isSignUp && (
                            <>
                                <Input
                                    name="mentors"
                                    label="Mentors"
                                    handleChange={handleChange}
                                    type="text"
                                />
                            </>
                        )}
                        {isSignUp && (
                            <>
                                <Input
                                    name="summary"
                                    label="Summary"
                                    handleChange={handleChange}
                                    type="text"
                                />
                            </>
                        )}
                        <Input
                            name="password"
                            label="Password"
                            handleChange={handleChange}
                            type={showPassword ? "text" : "password"}
                            handleShowPassword={handleShowPassword}
                        />
                        {isSignUp && (
                            <Input
                                name="confirmPassword"
                                label="Repeat Password"
                                handleChange={handleChange}
                                type="password"
                            />
                        )}
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                    >
                        {isSignUp ? "Sign Up" : "Sign In"}
                    </Button>

                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignUp
                                    ? "Already have an account? Sign In"
                                    : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
