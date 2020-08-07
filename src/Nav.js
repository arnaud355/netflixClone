import React, { useState,useEffect } from 'react';
import './Nav.css';

function Nav() {
    //Avec useState c'est une sorte de class raccourci avec propriétés et methodes
    const [show, handleShow] = useState(false);
    //useEffect met à jour le useState
    useEffect(() => {
        window.addEventListener("scroll",() => {
            if (window.scrollY > 100) {
                handleShow(true);
            }
            else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }

    }, [])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="logo netflix"
            />

            <img className="nav_avatar"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
            alt="logo netflix"
            />
        </div>
    );
}

export default Nav;