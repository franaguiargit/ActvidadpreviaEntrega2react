import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1>GearStore</h1>

        <nav>
            <ul>
                <li>Lácteos</li>
                <li>Almacén</li>
                <li>Bebidas</li>
            </ul>
        </nav>

        <CartWidget />

    </header>
  )
}

export default NavBar