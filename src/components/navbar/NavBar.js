import logo from '../../assets/logo.jpg'
import './navbar.css'
import { CartWidget } from '../CartWidget/CartWidget'
const NavBar =() =>{
    return (
    
    <header>
    <img src = {logo} alt = "" />
    <nav>
    <a href="/#">Mens</a>
    <a href="/#">Womens</a>
    <a href="/#">Kids</a>
    <CartWidget/>
    </nav>
    </header>
    
    )
}

export default NavBar