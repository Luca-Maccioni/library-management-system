import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar () {
    return (
        <>
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo">
                Logo
                </a>
            </div>
            <div className="navbar-center">
                <ul className="nav-links">
                    <li>
                        <a href="/">Products</a>
                    </li>
                    <li>
                        <a href="/">User Login</a>
                    </li>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                    <li>
                        <a href="/">Admin Login</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <a href="/" className="cart-icon">cart</a>
                <a href="/" className="user-icon">User Icon</a>
            </div>
        </nav>
        </>
    )
}

export default Navbar