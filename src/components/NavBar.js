import Button from 'react-bootstrap/Button';
import CartWidget from './CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
    <nav className="nav">
        <NavLink to="/">
            <h1 id="title">Cap/tion</h1>
        </NavLink>
        <ul className="categories">
            <li>
                <Button variant="light" className="btn" >
                    <Link to="/category/caps">Caps</Link>
                </Button>
            </li>
            <li>
                <Button variant="light" className="btn">
                    <Link to="/category/winter">Winter Hats</Link>
                </Button>            
            </li>
        </ul>
        <CartWidget/>
    </nav>
    )
}

export default NavBar;