import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {logout} from '../redux/actions';
import {useHistory} from 'react-router-dom';
import { Loader } from '../components/UI/Loader';

export const Logout = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(logout());
        history.push('/');
    } ,[])

    return <Loader />
}