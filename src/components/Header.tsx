import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Hamburger} from "./UI/Hamburger";
import {Sidebar} from "./UI/Sidebar";
import {Backdrop} from "./UI/Backdrop";

export const Header = () => {

    const [sidebar, setSidebar] = useState<boolean>(false);

    if(sidebar) {
        document.body.style.overflowY = 'hidden';
    } else {
        document.body.style.overflowY = 'scroll';
    }

    return(
        <>
            <header>
                <div className="navbar navbar-expand-lg navbar-light">
                    <div className="navbar-brand">
                        <Link to='/'>
                            Quizer
                        </Link>
                    </div>
                    <Hamburger show={sidebar} setVisible={setSidebar} />
                </div>
            </header>
            <Sidebar show={sidebar} setVisible={setSidebar}/>
            <Backdrop show={sidebar} setVisible={setSidebar}/>
        </>
    )
};