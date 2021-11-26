import Button from 'react-bootstrap/Button';
const NavBar = () => {
    return (
    <nav className="nav">
        <h1 id="title">Cap/tion</h1>
        <ul>
            <li>
                <Button variant="light" className="btn" >
                    <a href="#">Caps</a>
                </Button>
            </li>
            <li>
                <Button variant="light" className="btn">
                    <a href="#">About Us</a>
                </Button>            </li>
            <li>
                <Button variant="light" className="btn">
                    <a href="#">Contact</a>
                </Button>            </li>
            <li>
                <Button variant="light" className="btn">
                    <a href="#">Cart</a>
                </Button>            </li>
        </ul>
    </nav>
    )
}

export default NavBar;