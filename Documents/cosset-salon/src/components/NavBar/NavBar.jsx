//import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
    return (

      <nav>
        <h1>Cosset Beauty</h1>
        <div>
            <button>Quienes somos</button>
            <button>Uñas</button>
            <button>Skincare</button>
            <button>Depilación</button>
        </div>
        <CartWidget />
      </nav>
    )
  }
  export default NavBar