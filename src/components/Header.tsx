import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Hamburger} from "./UI/Hamburger";
import {Sidebar} from "./UI/Sidebar";

export const Header = () => {

    const [sidebar, setSidebar] = useState<boolean>(false);

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
            <Sidebar show={sidebar} />
        </>
    )
};