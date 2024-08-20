import CartWidget from "../CartWidget/CartWidget"


function NavBar() {
    return (
      <nav>
        <h1>Cosset Beauty Bar</h1>
        <div>
            <button>Unas</button>
            <button>Corporales</button>
            <button>Depilacion</button>
        </div>
        <CartWidget />
      </nav>
    )
  }
  export default NavBar