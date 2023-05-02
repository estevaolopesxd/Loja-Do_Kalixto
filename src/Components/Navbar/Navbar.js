import { Link } from "react-router-dom"
import styles from './Navbar.module.css'
const Navbar = () => {
    return (
        <div>
            <header className={styles.header}>


                <div className={styles.logo}>
                    <h1>
                        <a href="/">Loja do Kalixto</a>
                    </h1>
                </div>

                <nav className={styles.navbar}>
                    <Link to="/">Home</Link>
                    <Link to="/products">Produtos</Link>

                    <Link to="/about">Sobre</Link>

                    <div className={styles.nav_actions}>
                        <i class="fa-sharp fa-solid fa-magnifying-glass"></i>

                        <Link to="/favorites">
                            <i class="fa-sharp fa-solid fa-heart"></i>
                        </Link>



                    </div>

                </nav>
            </header>
        </div >
    )
}

export default Navbar