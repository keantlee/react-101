import { NavLink } from "react-router-dom";

/**
 * Note: by using the simple react snippit package.
 * code: enter "SFC" then enter tab.
 *  it creates a stateless functional component
 */
const NavBar = () => {
    return ( 
        <nav className="navbar">
            <NavLink to="/Home"><h1>BLOGGER</h1></NavLink>
            <div className="links">
                <NavLink to="/Blogs">BLOGS</NavLink>
                <NavLink to="/List-Of-Users">LIST OF USERS</NavLink>
                <NavLink to="/Create-new-blog" style={{color: "white", backgroundColor: "#f1356d", borderRadius: "8px"}}>NEW BLOG</NavLink>
                {/* <a href="/">Home</a>
                <a href="/create" style={{color: "white", backgroundColor: "#f1356d", borderRadius: "8px"}}>New Blog</a> */}
            </div>
        </nav>
    );
}
 
export default NavBar;