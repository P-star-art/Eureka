import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";

import { getAbstracts } from '../actions/abstracts';

const Feed = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAbstracts());
    }, [])

    const abstracts = useSelector((state) => state.abstracts);

    console.log(abstracts);

    return (
        <div>
            FEED
        </div>
    )
}

export default Feed
