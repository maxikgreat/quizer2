
import React, {useRef} from 'react';
import {NavLink} from "react-router-dom";
import { useTransition, useChain, animated, config } from "react-spring";
import {useSelector} from 'react-redux';
import { SummaryState, UserState } from '../../interfaces';

interface SidebarProps {
    show: boolean,
    setVisible(show: boolean): void
}

interface Link {
    link: string,
    title: string
}

export const Sidebar = ({show, setVisible}: SidebarProps) => {

    const users: UserState = useSelector((state: SummaryState) => state.users);

    const sidebarRef = useRef(null);
    const transition = useTransition(show, null, {
        from: {
            transform: "translateX(-100%)"
        },
        enter: {
            transform: "translateX(0)"
        },
        leave: {
            transform: "translateY(-100%)"
        },
        unique: true,
        config: config.stiff,
        ref: sidebarRef
    });



    let links: Link[] = [
        {
            link: '/',
            title: 'Home'
        },
        {
            link: '/login',
            title: 'Login'
        }
    ];

    if(users.logged) {
        links = [
            {
                link: '/',
                title: 'Home'
            },
            {
                link: '/profile',
                title: 'Profile'
            },
            {
                link: '/logout',
                title: 'Logout'
            }
        ];
    }

    const itemsRef = useRef(null);
    const trail = useTransition(show ? links : [], item => item.link, {
        from: {
            opacity: 0,
            transform: "translateX(-50px)"
        },
        enter: {
            opacity: 1,
            transform: "translateX(0)"
        },
        leave: {
            opacity: 0,
            transform: "translateX(-25px)"
        },
        ref: itemsRef,
        config: config.stiff,
        trail: 100,
        unique: true
    });

    useChain(
        show ? [sidebarRef, itemsRef] : [itemsRef, sidebarRef],
        show ? [0, 0.25] : [0, 0.6]
    );

    return (
        <>
            {
                transition.map(({item, key, props}) =>
                    item ? (
                        <animated.div key={key} style={props} className="sidebar">
                            {trail.map(({ item, key, props }) => (
                                <animated.div key={key} style={props}>
                                    <NavLink
                                        exact
                                        to={item.link}
                                        className="nav-link-button neon-hover"
                                        onClick={() => setVisible(false)}
                                    >{item.title}</NavLink>
                                </animated.div>
                            ))}
                        </animated.div>
                    ) : null
                )
            }
        </>
    )
};