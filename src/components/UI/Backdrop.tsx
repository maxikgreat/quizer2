import React from 'react';
import {animated, config, useSpring} from "react-spring";

interface BackdropProps {
    show: boolean,
    setVisible(show: boolean): void
}

export const Backdrop = ({show, setVisible}: BackdropProps) => {

    const props = useSpring({
        to: show ? {opacity: 1} : {opacity: 0},
        config: config.stiff
    })

    return(
        <animated.div
            style={props}
            className="backdrop-container"
            onClick={() => setVisible(false)}
        >
        </animated.div>
    )
}