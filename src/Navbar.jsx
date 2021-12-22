import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const usestyles = makeStyles({
    menu: {
        display: "none"
    },
    menu1: {
        display: "block",
        position: "absolute",
    }

});

const navbar = () => {
    const mainMenu = document.querySelector('.mainMenu');
    const closeMenu = document.querySelector('.closeMenu');
    const openMenu = document.querySelector('.openMenu');


    openMenu.addEventListener('click', show);
    closeMenu.addEventListener('click', close);

    function show() {
        mainMenu.style.display = 'flex';
        mainMenu.style.top = '0';
    }
    function close() {
        mainMenu.style.top = '-100%';
    }
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
                <div class="openMenu"><i class="fa fa-bars"></i></div>
                <ul class="mainMenu">
                    {/* <li><a href="#">Home</a></li> */}
                    <li><a href="#">About</a></li>
                    <li><a href="#">Members</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Events</a></li>
                    <div class="closeMenu"><i class="fa fa-times"></i></div>
                    <span class="icons">
                        <i class="fa fa-facebook"></i>
                        <i class="fa fa-instagram"></i>
                        <i class="fa fa-linkedin"></i>
                    </span>
                </ul>
            </nav>
        </>)
    }
    else {
        return (<>
            <div className="hello_div">
                <NavLink to="/" exact activeClassName="active_class" style={{ textDecoration: "none" }}>
                    <h2 className="nav_hover">Home</h2>
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
                    <h2 className="nav_hover">About</h2>
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
                    <h2 className="nav_hover">Members</h2>
                </NavLink>
                <div className="menu_1">
                    <ul>
                        <li><h3>hello</h3></li>
                        <li><h3>hello</h3></li>
                        <li><h3>hello</h3></li>
                    </ul>
                </div>
            </div> <div className="hello_div">
                <NavLink to="/contact" exact activeClassName="active_class" style={{ textDecoration: "none" }}>
                    <h2 className="nav_hover">Contact</h2>
                </NavLink>
                <div className="menu_1">
                    <ul>
                        <li><h3>hello</h3></li>
                        <li><h3>hello</h3></li>
                        <li><h3>hello</h3></li>
                    </ul>
                </div>
            </div>
            <div className="hello_div">
                <NavLink to="/contact" exact activeClassName="active_class" style={{ textDecoration: "none" }}>
                    <h2 className="nav_hover">Events</h2>
                </NavLink>
                <div className="menu_1">
                    <ul>
                        <li><h3>hello</h3></li>
                        <li><h3>hello</h3></li>
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
        {navbar()}
    </div></>)
}
export default Navbar;