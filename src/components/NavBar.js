/**
 * Note: by using the simple react snippit package.
 * code: enter "SFC" then enter tab.
 *  it creates a stateless functional component
 */
const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>My Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{color: "white", backgroundColor: "#f1356d", borderRadius: "8px"}}>New Blog</a>
            </div>
        </nav>
    );
}
 
export default NavBar;