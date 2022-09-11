import logo from '../../assets/logo.jpg'
import './navbar.css'
import { CartWidget } from '../CartWidget/CartWidget'
const NavBar =() =>{
    return (
    
    <header>
    <img src = {logo} alt = "" />
    <nav>
    <a href="/#">Men</a>
    <a href="/#">Women</a>
    <a href="/#">Kids</a>
    <CartWidget/>
    </nav>
    </header>
    
    )
}

export default NavBar