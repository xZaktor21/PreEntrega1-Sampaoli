import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'


const NavBar = () => {
    return (
        <header>
            <div class="logo">21 Store</div>

            <nav class="nav-list">
                <ul>
                    <li>Perifericos</li>
                    <li>Hardware</li>
                    <li>Celulares</li>
                </ul>
            </nav>

            <CartWidget/>

        </header>
    )
}

export default NavBar