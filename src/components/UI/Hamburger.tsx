
import React from 'react'
import {animated, config, useSpring} from "react-spring";

interface HamburgerProps {
    show: boolean,
    setVisible(show: boolean): void
}

interface TransformationConfig {
    top: string,
    center: string,
    bottom: string
}

export const Hamburger = ({show, setVisible}: HamburgerProps) => {
    const props = useSpring({
        transform: show ? 'rotate(0)' : 'rotate(360deg)',
        color: show ? '#FFAADE' : '#FF00DE'
        //@ts-ignore
    }, config.stiff);

    const openedTransformationConfig: TransformationConfig = {
        top: 'translate(2, 7) rotate(0)',
        center: 'translate(2, 19) rotate(0)',
        bottom: 'translate(2, 31) rotate(0)',
    };

    const closedTransformationConfig: TransformationConfig = {
        top: 'translate(5, 32) rotate(-45)',
        center: 'translate(10, 4) rotate(45)',
        bottom: 'translate(5, 32) rotate(-45)',
    };

    // @ts-ignore
    const { top, center, bottom } = useSpring({
        to: show ? closedTransformationConfig : openedTransformationConfig,
        config: config.stiff,
    });

    return(
        <animated.div style = {props} className='hamburger' onClick={() => setVisible(!show)}>
            <animated.svg width="44" height="44" fill={props.color} viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
                <animated.rect width="40" height="6" rx="3" transform={top}/>
                <animated.rect width="40" height="6" rx="3" transform={center} />
                <animated.rect width="40" height="6" rx="3" transform={bottom} />
            </animated.svg>
        </animated.div>
    )
};