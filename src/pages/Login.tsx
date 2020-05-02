import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {tryLogIn} from '../redux/actions';
import {useSelector} from 'react-redux';
import { UserState, SummaryState } from '../interfaces';
import { Loader } from '../components/UI/Loader';
import {Redirect} from 'react-router-dom';

export const Login = () => {
    const users: UserState = useSelector((state: SummaryState) => state.users)
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    if(users.logged) {
        return <Redirect to='/profile' />
    }

    return (
        <section className="login-container">
            {
                users.loading 
                ? <Loader />
                : <div className="jumbotron jumbotron-fluid wrapper-bg border-neon-primary">
                    <div className="jumbotron-title mb-3">
                        <h1 className="display-4">Login</h1>
                    </div>
                    <div className="form-group row">
                        <div className="col-lg-6 col-12 mb-3">
                            <h2 className="neon-text-small">Email</h2>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                value={user.email}
                                onChange={(e) => setUser({
                                    ...user,
                                    email: e.target.value
                                })}
                            />
                        </div>
                        <div className="col-lg-6 col-12 mb-3">
                            <h2 className="neon-text-small">Password</h2>
                            <input
                                type="password"
                                className="form-control form-control-lg"
                                value={user.password}
                                onChange={(e) => setUser({
                                    ...user,
                                    password: e.target.value
                                })}
                            />
                        </div>
                    </div>
                    <button 
                        className="btn btn-outline-secondary neon-hover btn-big mr-3"
                        onClick={() => dispatch(tryLogIn(user.email, user.password))}
                    >Login</button>
                    {
                        users.error
                        ? <span className="neon-text-very-small">{users.error}</span>
                        : null
                    }
                </div>
            }
            
        </section>
    )
};