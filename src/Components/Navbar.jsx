import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">About</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/experience" className="nav-link">Experience</Link>
        </nav>
    )
}