//import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
    return (

      <nav>
        <h1>Cosset Beauty Bar</h1>
        <div>
            <button>Quienes somos</button>
            <button>Eventos</button>
            <button>Nuestros</button>
            <button>Contacto</button>
        </div>
        <CartWidget />
      </nav>
    )
  }
  export default NavBar