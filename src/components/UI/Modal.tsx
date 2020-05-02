import React from "react";
import {animated, config, useSpring} from "react-spring";
import {useDispatch} from 'react-redux';
import {hideModal} from "../../redux/actions";
import {isEmptyObject} from "../../helpFunctions";

interface ModalProps {
    messages: {
        [key: string]: {message?: string, error?: string}
    }
}

export const Modal = ({messages}: ModalProps) => {
    const dispatch = useDispatch();
    let currentKey = '';
    let showMessage: string | undefined = '';
    let showError: string | undefined = '';

    for ( let key in messages ) {
        if(!isEmptyObject(messages[key])){
            currentKey = key;
            if(messages[key].message) {
                showMessage = messages[key].message;
            }
            if(messages[key].error) {
                showError = messages[key].error;
            }
            break
        }
    }

    const props = useSpring({
        to: !isEmptyObject(messages[currentKey])
            ? {opacity: 1, display: 'flex'}
            : {opacity: 0, display: 'none'},
        config: config.stiff
    })

    return (
        <animated.div
            style={props}
            className="modal-container"
            onClick={() => dispatch(hideModal())}
        >
           <div
               className="modal-window"
           >
               {
                   !showError
                       ?
                       <>
                           <span className="modal-title neon-text-big">
                                {showMessage}
                            </span>
                           <button className="btn btn-outline-secondary btn-very-big neon-hover">Got it</button>
                       </>
                       :
                       <>
                           <span className="modal-title neon-text-big">
                               Error!
                           </span>
                           <span className="modal-title neon-text-big">
                                {showError}
                            </span>
                           <button className="btn btn-outline-danger btn-very-big neon-hover-red">Got it</button>
                       </>
               }

           </div>
        </animated.div>
    )

}

