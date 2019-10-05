import React from 'react';
import {Link} from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className={"headerBanner"}>

                <div className={'headerWrapper'}>
                    <Link to="/">
                        <div className={"headerLogo"}>

                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVFR9J6Y9BDzKeQQRqkwls5N34YubHor-XDbCayLLD9KGRMIPE"
                                alt="logo"/>

                        </div>
                    </Link>


                    <div className="headerLogin" > Login</div>
                    <div className={"headerRegister"}> Register</div>
                </div>



            </div>
        </div>
    );
};

export default Header;
