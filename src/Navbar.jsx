import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react'

const usestyles = makeStyles({
    menu: {
        display: "none"
    },
    menu1: {
        display: "block",
        position: "absolute",
    }

});

const Navbar1 = () => {
    const [open, setOpen] = useState('');


    function show() {
        const mainMenu = document.querySelector('.mainMenu');
        mainMenu.style.display = 'flex';
        mainMenu.style.top = '0';
    }
    function close() {
        const mainMenu = document.querySelector('.mainMenu');
        mainMenu.style.top = '-100%';
    }
    const functionopen = () => {
        setOpen(show);
    }
    const functionclose = () => {
        setOpen(close)
    }




    // openMenu.addEventListener('click', show);
    // closeMenu.addEventListener('click', close);


    const classes = usestyles();
    const w = 700;
    if (window.screen.width <= 700) {
        return (<>
            {/* <NavLink to="/" exact activeClassName="active_class" style={{ textDecoration: "none" }}> <h2 className="nav_hover" ><i class="fa fa-home"></i></h2></NavLink>
            <NavLink to="/about" exact activeClassName="active_class" style={{ textDecoration: "none" }}> <h2 className="nav_hover" >About</h2></NavLink>
            <NavLink to="/members" exact activeClassName="active_class" style={{ textDecoration: "none" }}> <h2 className="nav_hover" ><i class="fa fa-user-secret"></i></h2></NavLink>
            <NavLink to="/contact" exact activeClassName="active_class" style={{ textDecoration: "none" }}> <h2 className="nav_hover" ><i class="fa fa-phone"></i></h2></NavLink>
            <NavLink to="/contact" exact activeClassName="active_class" style={{ textDecoration: "none" }}> <h2 className="nav_hover" ><i class="fa fa-calendar"></i></h2></NavLink> */}
            <nav>
                <div class="openMenu" onClick={functionopen}><i class="fa fa-bars"></i></div>
                <ul class="mainMenu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/members">Members</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="/mritika">Mritika</a></li>
                    <div class="closeMenu" onClick={functionclose}><i class="fa fa-times"></i></div>
                    <span class="icons">
                    <a href=""><i class="fa fa-facebook"></i></a>
                    <a href="https://instagram.com/nitr_ics?utm_medium=copy_link"> <i class="fa fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/company/incers-nitr"> <i class="fa fa-linkedin"></i></a>
                    </span>
                </ul>
            </nav>
        </>)
    }
    else {
        return (<>
            <div className="hello_div">
                <NavLink to="/" exact activeClassName="active_class" style={{ textDecoration: "none" }}>
                    <h2 className="nav_hover" style={{fontSize:"20px"}}>Home</h2>
                </NavLink>
                <div className="menu_1">
                    <ul>
                        <NavLink to="/blog" exact activeClassName="active_class" style={{ textDecoration: "none", color: "red" }} ><li><h3>hello</h3></li> </NavLink>
                        <li><h3>hello</h3></li>
                        <li><h3>hello</h3></li>
                    </ul>
                </div>
            </div> <div className="hello_div">
                <NavLink to="/about" exact activeClassName="active_class" style={{ textDecoration: "none" }}>
                    <h2 className="nav_hover" style={{fontSize:"20px"}}>About</h2>
                </NavLink>
                <div className="menu_1">
                    <ul>
                        <li><h3>hello</h3></li>
                        <li><h3>hello</h3></li>
                        <li><h3>hello</h3></li>
                    </ul>
                </div>
            </div> <div className="hello_div">
                <NavLink to="/members" exact activeClassName="active_class" style={{ textDecoration: "none" }}>
                    <h2 className="nav_hover" style={{fontSize:"20px"}}>Members</h2>
                </NavLink>
                <div className="menu_1">
                    <ul>
                        <li><h3>Members(2018-22)</h3></li>
                        <li><h3>hello</h3></li>
                        <li><h3>hello</h3></li>
                    </ul>
                </div>
            </div> <div className="hello_div">
                <NavLink to="/contact" exact activeClassName="active_class" style={{ textDecoration: "none" }}>
                    <h2 className="nav_hover" style={{fontSize:"20px"}}>Contact</h2>
                </NavLink>
                {/* <div className="menu_1">
                    <ul>
                        <li><h3>hello</h3></li>
                        <li><h3>hello</h3></li>
                        <li><h3>hello</h3></li>
                    </ul>
                </div> */}
            </div>
            <div className="hello_div">
                <NavLink to="#" exact activeClassName="active_class" style={{ textDecoration: "none" }}>
                    <h2 className="nav_hover" style={{fontSize:"20px"}}>Events</h2>
                </NavLink>
                <div className="menu_1">
                    <ul>
                    <NavLink to="/events" exact activeClassName="active_class" style={{ textDecoration: "none", color: "red" }} ><li><h3>PlacementDiaries</h3></li> </NavLink>
                    <NavLink to="/events1" exact activeClassName="active_class" style={{ textDecoration: "none", color: "red" }} ><li><h3>Presentation-Competetions</h3></li> </NavLink>
                        <li><h3>hello</h3></li>
                    </ul>
                </div>
            </div>
            <div className="hello_div">
                <NavLink to="/mritika" exact activeClassName="active_class" style={{ textDecoration: "none" }}>
                    <h2 className="nav_hover" style={{fontSize:"20px"}}>Mritika</h2>
                </NavLink>
                <div className="menu_1">
                    <ul>
                    <NavLink to="/events" exact activeClassName="active_class" style={{ textDecoration: "none", color: "red" }} ><li><h3>PlacementDiaries</h3></li> </NavLink>
                    <NavLink to="/events1" exact activeClassName="active_class" style={{ textDecoration: "none", color: "red" }} ><li><h3>Presentation-Competetions</h3></li> </NavLink>
                        <li><h3>hello</h3></li>
                    </ul>
                </div>
            </div>
            {/* <NavLink to="/about" exact activeClassName="active_class" style={{ textDecoration: "none" }}> <h2 className="nav_hover" >AboutSociety</h2></NavLink> */}
            {/* <NavLink to="/members" exact activeClassName="active_class" style={{ textDecoration: "none" }}> <h2 className="nav_hover" >Members</h2></NavLink> */}
            {/* <NavLink to="/contact" exact activeClassName="active_class" style={{ textDecoration: "none" }}> <h2 className="nav_hover" >ContactUs</h2></NavLink> */}
        </>)
    }
}
const Navbar = () => {
    return (<> <div className="nav_bar">
        {Navbar1()}
    </div></>)
}
export default Navbar;