import { Link } from 'react-router-dom'
let Navbar= () => {
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Sentinel_Prime</Link>
        <div className="ml-auto">
            <ul className="navbar-nav">
                <li className="nav-list"><Link className="nav-link" to="/home">Home</Link></li>
                <li className="nav-list"><Link className="nav-link" to="/about">About</Link></li>
                <li className="nav-list"><Link className="nav-link" to="/contact">Contact</Link></li>
                <li className="nav-list"><Link className="nav-link" to="/services">Services</Link></li>
                <li className="nav-list"><Link className="nav-link" to="/rate-up">Rate-up</Link></li>
                <li className="nav-list"><Link className="nav-link" to="/login">Login</Link></li>
            </ul>
        </div>
    </nav>
}
export default Navbar