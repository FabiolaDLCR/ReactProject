import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

function NavBar() {
    return (
      <nav>
        <h1>Cosset Beauty Bar</h1>
        <div>
            <button>Uñas</button>
            <button>Corporales</button>
            <button>Depilación</button>
            <button>Contacto</button>
        </div>
        <CartWidget />
      </nav>
    )
  }
  export default NavBar