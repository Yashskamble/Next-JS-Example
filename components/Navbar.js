import Link from './LinkElement'

const Navbar = () => {
    return (
        <nav className="navbar container">
            <div className="logo"></div>
                <ul>
                    <li>
                        <Link legacyBehavior href="/" ><a>Home</a></Link>
                    </li>
                    
                    <li>
                        <Link legacyBehavior href="/about"><a>About</a></Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/contact"><a>Contact</a></Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/blog"><a>Blog</a></Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/projects"><a>Projects</a></Link>
                    </li>
                </ul>
        </nav>
    );
}

export default Navbar