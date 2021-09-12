import {NavLink} from 'react-router-dom';

const Navbar = ()=>{
    return(<> <div className="nav_bar">
    <NavLink to="/" exact activeClassName="active_class" style={{textDecoration:"none"}}> <h2 className="nav_hover" >Home</h2></NavLink>
    <NavLink to ="/about"  exact activeClassName="active_class" style={{textDecoration:"none"}}> <h2 className="nav_hover" >AboutSociety</h2></NavLink>
    <NavLink to="/members" exact activeClassName="active_class" style={{textDecoration:"none"}}> <h2 className="nav_hover" >Members</h2></NavLink> 
    <NavLink to="/contact" exact activeClassName="active_class" style={{textDecoration:"none"}}> <h2 className="nav_hover" >ContactUs</h2></NavLink> 
    </div></>)
}
export default Navbar;